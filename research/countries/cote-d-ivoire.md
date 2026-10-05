# Côte d'Ivoire: Indie Opportunity Research (as of 2026-10-05)

> **Research constraints.** WebFetch is blocked in this environment, so this report draws only on WebSearch result snippets (12 searches, French and English). The source pages themselves could not be opened.
> - **Verified** means the fact appeared in search-result content returned in this session. The URL is listed.
> - **Desk screen** means prior background knowledge that was *not* verified in this session.
> - Counts and prices marked *estimate* are my own assumptions.
>
> No URLs, products or numbers have been invented.
>
> **Accessibility:** Côte d'Ivoire is not under US, EU or UK sanctions. It is a WAEMU (UEMOA) / XOF market with Mobile Money and card rails. A foreign solo founder can sell SaaS there, though a local partner or entity helps with invoicing. Under the 2025 FNE rule, B2B invoices issued *in* Côte d'Ivoire by a local entity must be certified by the tax authority (DGI).

**Bottom line:** Côte d'Ivoire has two strong 2025–2026 regulatory triggers:
- **Electronic invoicing (FNE)** has been mandatory for all companies since December 2025, and e-filing extends to micro-enterprises from 1 January 2026.
- **The cocoa National Traceability System (SNT)** became mandatory on 1 September 2026, with ARS 1000 certification and the EU deforestation regulation (EUDR, from 1 January 2027) behind it.

Both triggers are being captured quickly by others:
- FNE: Sage, Odoo modules, CassKai, Kompto, Cleo ERP, Faclibr and others.
- Cocoa: the state itself, which distributed 10,000 free payment terminals, plus exporters' own systems.

No opportunity here clears the bar for building without interviews. The best remaining angle is in **healthcare third-party payment (tiers payant)**. There, a pharmacy or clinic has to bill many different payers (CNAM/CMU, MUGEF-CI, private insurers and claims administrators), and claim rejections and receivables are tracked by hand. But the dominant pain there is the *payer's* cash shortage, not data handling.

---

## Industries screened

| # | Industry | Workflow looked at | Evidence | Verdict | One-line reason |
|---|---|---|---|---|---|
| 1 | All VAT/tax-registered businesses | Issuing FNE-certified sales invoices (DGI QR code, numbering) | Verified | **Too competitive** | Free DGI web platform plus API, and many vendors already certified or integrated: Sage, CassKai, Kompto, Cleo ERP, Faclibr, Djaboo, Finself |
| 2 | SMEs and accounting firms | Purchase side of FNE: checking that supplier invoices are valid FNEs (VAT deduction and expense deductibility depend on it) and reconciling them to the books | Verified | **Weak shortlist (Opp. 2)** | Real mandatory pain. But the DGI aims to pre-fill VAT returns, and an Odoo QR-scan module and CassKai already pull FNE data. |
| 3 | Micro-enterprises (TEE / entreprenant regime) and the accounting firms serving them | Mandatory e-filing on e-Impôts from 1 Jan 2026, plus switching from paper to FNE invoices (paper deadline 13 Feb 2026) | Verified | Folded into Opp. 2 | Buyers have very low willingness to pay. Only accounting firms are viable buyers. |
| 4 | Private pharmacies (officines) | Third-party-payer billing statements (bordereaux) to CNAM/CMU, MUGEF-CI and private insurers; tracking rejections and receivables | Verified (pain); software landscape partly unverified | **Shortlist (Opp. 1)** | In May 2026 pharmacists publicly reported a cash crisis caused by CNAM payment arrears, with many payers. But the core cause is payer liquidity. |
| 5 | Private clinics | Claims to insurers and administrators, rejections, payment delays of up to a year | Verified (2021 ACPCI–ASACI talks); recent data unverified | Folded into Opp. 1 (phase 2) | Same pattern as pharmacies. Clinic management software (local custom builds) is the incumbent. |
| 6 | Cocoa/coffee cooperatives | SNT producer card, electronic payment terminals (TPE) and seals on every transaction from 1 Sep 2026 | Verified | **Reject (government tool)** | The Coffee-Cocoa Council (CCC) runs the SNT and gave out 10,000 TPEs and 10 million seals for free. No transaction may happen outside the SNT. |
| 7 | Cocoa cooperatives | ARS 1000 internal management system, audit evidence, and reporting to several buyers/exporters (ahead of EUDR on 1 Jan 2027) | Verified (standard and rollout); tool landscape desk screen | **Poor distribution (Opp. 3, low score)** | About 600 cooperatives are in the rollout. Exporters and multinationals fund and choose the tools (Farmforce, SourceTrace, Koltiva, etc., desk screen). |
| 8 | Customs brokers (CDA) and freight forwarders | Import pre-notification forms (FDI, QR code since 2023), SYDAM declarations via the GUCE single window | Verified (process) | Reject / needs verification | Centralised state platform (GUCE CI). Third-party API access unknown. Brokers are a small, established pool. |
| 9 | Designated non-financial businesses (EPNFD): estate agents, notaries, car dealers | AML KYC and suspicious-transaction reports to CENTIF under Ordinance 2023-875 / Law 2024-363 | Verified (law); workflow unverified | Reject (trap) | Event-driven, low frequency, generic KYC/document trap. Enforcement on EPNFDs unclear. |
| 10 | Employers / payroll bureaus | Monthly CNPS (e-CNPS) and payroll-tax (ITS) filings | Desk screen | Too competitive (likely) | Mature local payroll packages, Sage, and the official e-CNPS / e-Impôts portals |

---

## Strongest opportunities

### Opportunity: Multi-payer tiers-payant receivables and rejection tracker for private pharmacies

**Industry:**
Retail pharmacy (officines privées), with private clinics as a later phase.

**Buyer:**
The pharmacy owner (pharmacien titulaire) or the staff member in charge of third-party-payer billing in a private pharmacy. In 2026 the CMU care network includes **all private pharmacies** (verified).

**Trigger / Why now:**
- The CMU (universal health coverage), run by CNAM, keeps growing. CNAM cites about 20 million people enrolled and in 2025–2026 extended a waiver giving informal-sector workers access.
- In **May 2026 the pharmacists' bodies publicly warned of a "grave crise de trésorerie"** (serious cash crisis):
  - CNAM payment arrears are growing;
  - the payment-delay terms agreed in January 2026 are not being applied;
  - some pharmacies paid **penalties to the tax authority and social funds** because CNAM paid late;
  - a six-month repayment schedule for the arrears was agreed.
- FNE (since Dec 2025) adds a tax-side constraint, because every invoice now has to be certified. *Whether pharmacy-to-CNAM statements need FNE certification is unverified.*

**Current workflow:** *(presumed. Validate in interviews.)*
1. At the counter, staff check the patient's CMU rights or other cover (MUGEF-CI Ivoir'Santé Plus at 70% on medicines, private insurers, claims administrators). They collect the care or prescription voucher, dispense, and charge the patient's share.
2. Pharmacy software records the sale. Payer-specific statements (bordereaux) are compiled per period and per payer, often with paper vouchers attached. CMU uses a carbon-copy form whose white copy goes to CNAM.
3. Payments arrive late and partially, with rejections. Staff match payments against statements by hand in Excel, with a different format and rule set for each payer.
4. Rejected lines are corrected and resubmitted, or written off. Aged receivables per payer are reported to the owner and the bank.

**Pain:**
- Public statements by the profession (May 2026) about CNAM arrears, plus penalties paid to the tax authority and social funds as a knock-on effect.
- Clinics report the same pattern: insurers took up to a year to pay and rejected invoices (ACPCI–ASACI talks, 2021).
- Payment delays force pharmacies to finance receivables, so every rejection that is avoided or recovered is real money.

**Existing solutions:**
- Pharmacy management software in use in Abidjan: a mix of imported French tools and local custom builds. One 2026 blog cites **18–22 million FCFA** for a custom pharmacy system with insurer modules. *Specific vendor names for Côte d'Ivoire were not verified.*
- AS PHARM, which publishes guidance on pharmacy software for francophone Africa.
- CNAM/CMU's own provider systems.
- Excel, plus wholesaler-affiliated tools (*unverified*).

**The gap:**
A **cross-payer view** that the payers themselves will never build: per-payer statement status, rejection reasons, aged receivables, and the evidence pack a pharmacy needs to negotiate with CNAM or a bank. Dispensing software stops at "statement generated" and does not track what happens afterwards (*hypothesis*).

**Possible product:**
A lightweight receivables layer over existing pharmacy software:
- import sales and statement exports;
- import payment notices and remittance data;
- auto-match them;
- flag rejections by reason and payer;
- produce aged-receivable reports per payer;
- produce prioritised resubmission lists.

**MVP:**
CSV/Excel import of statements and payments for 3 payers (CNAM/CMU, MUGEF-CI and one major claims administrator), a matching engine, a rejection log and an aged-balance PDF. Built in Excel-to-web form, around 6–8 weeks.

**Pricing hypothesis:**
15,000–30,000 FCFA per pharmacy per month (about US$25–50, *estimate*). Upsell: a resubmission service, or a receivables report that a bank or wholesaler could use to finance the pharmacy.

**How to find first customers:**
- The pharmacists' professional bodies: the Order of Pharmacists, UNPPCI and SYNAPPCI.
- Wholesale distributors' customer networks.
- Public pharmacy listings. *Estimate: more than 1,000 private pharmacies nationally (unverified).*

**Risks:**
- The root cause is CNAM's liquidity. Better records do not make CNAM pay.
- CNAM could force its own e-claims portal, which would remove part of the workflow.
- The pharmacy-software incumbents could add a reconciliation module.
- Payer data formats may be paper-only.

**Kill condition:**
- Interviews show that pharmacies already get a reliable payer-side statement of rejections and payments, or that their dispensing software already reconciles payments.
- Or owners say rejections are rare and the only problem is CNAM paying late.

**Score:** 5/10

**Sources:**
- https://letemps.news/2026/05/19/retards-de-paiement-par-la-cnam-pression-fiscale-majorations-salariales-les-pharmaciens-dofficine-alertent-sur-une-grave-crise-de-tresorerie/
- https://dg-cmu.ci/faq/
- https://www.aip.ci/aip-cap-de-20-millions-denroles-a-la-cmu-une-avancee-decisive-vers-la-sante-pour-tous-en-cote-divoire-dg-cnam/
- https://www.mugef-ci.com/nos-produits/sante/ivoir-sante-plus/
- https://kolonell.com/fr/blog/logiciel-gestion-clinique-abidjan-cout-2026
- https://www.as-pharm.com/2026/07/11/quel-logiciel-de-gestion-officine-choisir-afrique-francophone/
- https://news.abidjan.net/articles/695715/prise-en-charge-medicale-des-assures-cliniques-privees-et-maisons-dassurance-echangent-pour-une-reforme

---

### Opportunity: FNE purchase-side compliance console for accounting firms (multi-client)

**Industry:**
Accounting firms and approved management centres serving SMEs and micro-enterprises.

**Buyer:**
The partner or manager at an accounting firm handling dozens to hundreds of small clients. The secondary buyer is the accounts-payable lead in a mid-size company.

**Trigger / Why now:**
- **FNE mandatory for all businesses from 1 Dec 2025** (by regime: 1 Dec / 11 Dec 2025). Paper normalised invoices ended for businesses on the entreprenant (TEE) regime on 13 Feb 2026.
- **Only FNE invoices justify expenses and input-VAT deduction.** A supplier invoice without the DGI QR code means the expense is added back to taxable profit and the VAT is refused.
- **Mandatory e-filing (e-Impôts) extended to all businesses, including micro-enterprises, from 1 Jan 2026.**
- Adoption is still incomplete. On 24 Feb 2026 the DGI reported about 52,000 businesses registered on the platform, of which only 60–70% had issued at least one FNE. Many suppliers therefore still send non-compliant invoices.

**Current workflow:**
1. Clients send purchase invoices to the firm as paper, photos, PDFs or WhatsApp messages.
2. Staff check each invoice for a valid FNE (QR code scan or a lookup on the DGI site) and chase suppliers for missing ones.
3. Valid invoices are keyed into accounting software.
4. Monthly VAT is computed and filed on e-Impôts. Staff reconcile it against whatever the DGI eventually pre-fills.

**Pain:**
Financial consequences are direct: refused VAT and expenses added back. The volume is new for micro-enterprise clients. The pain is clear from official rules and vendor guides; it is *not yet* backed by user complaints in this research.

**Existing solutions:**
- The DGI FNE platform and the e-Impôts portal.
- **CassKai** (SYSCOHADA accounting with an FNE API integration).
- **An open-source Odoo 17 module** (GitHub Ivory-cocoa/invoice_qr_scanner) that creates supplier invoices by scanning DGI QR codes and pulling the data from FNE.
- Sage (FNE-compliant).
- Kompto, Cleo ERP, Faclibr, Djaboo and Finself.

**The gap:**
A **multi-client** exception queue across all of a firm's clients:
- invoices not yet FNE-certified;
- suppliers to chase;
- VAT at risk per client;
- differences against the DGI pre-fill.

Most competitors are single-company tools focused on *issuing* invoices.

**Possible product:**
A WhatsApp/email inbox per client. The tool scans QR codes, validates them against the DGI, posts valid invoices, flags invalid ones with a supplier-chase template, and shows a dashboard of VAT at risk per client.

**MVP:**
Photo/PDF upload, QR decoding and a validation lookup, a per-client list of exceptions, and an export to Sage/CSV.

**Pricing hypothesis:**
25,000–75,000 FCFA per firm per month, or about 1,000 FCFA per client company per month (*estimate*).

**How to find first customers:**
- The register of the professional accountants' body (ONECCA-CI).
- Approved management centres (CGA).
- LinkedIn and Facebook groups of Ivorian accountants.

**Risks:**
- **The DGI states VAT pre-filling as an FNE objective.** If the DGI shows buyers their received FNEs and pre-fills deductible VAT, most of the value disappears.
- The Odoo module and CassKai already cover single-company scanning.
- Automated access to the DGI lookup may not be permitted.

**Kill condition:**
- The DGI ships a "received invoices" view with VAT pre-fill on e-Impôts.
- Or accounting-firm interviews show that the non-FNE supplier rate has already fallen below about 5%.

**Score:** 4/10

**Sources:**
- https://www.pulse.ci/article/facture-normalisee-electronique-fne-tout-ce-qui-change-pour-les-entreprises-ivoiriennes-en-2026-2026022802421220085
- https://djaboo.com/blog/fne-cote-divoire/
- https://www.fne.dgi.gouv.ci/faq.php
- https://www.koaci.com/article/2026/01/29/cote-divoire/economie/cote-divoire-contribuables-assujettis-a-la-taxe-detat-de-lentreprenant-la-date-limite-dutilisation-des-factures-normalisees-physiques-fixee-au-13-fevrier_193942.html
- https://digitalmag.ci/cote-divoire-tout-savoir-sur-la-facture-normalisee-electronique-fne/?amp=1
- https://www.gedbered.com/blog/declaration-fiscale-dgi-2026.html
- https://github.com/Ivory-cocoa/invoice_qr_scanner
- https://casskai.app/en/solutions/cote-divoire
- https://www.sage.com/fr-ma/logiciels-comptabilite/facturation-electronique/facture-normalisee-electronique-cote-d-ivoire/

---

### Opportunity: ARS 1000 / multi-buyer compliance pack for cocoa cooperatives

**Industry:**
Cocoa cooperatives (sociétés coopératives) and their exporter/buyer partners.

**Buyer:**
The cooperative manager or the head of its internal management system. In practice the payer is often the exporter's sustainability team, which sponsors tools for its supplier cooperatives.

**Trigger / Why now:**
- The **SNT has been mandatory since 1 Sep 2026** for the 2026–27 season: producer card, payment terminals and seals.
- **ARS 1000** is being rolled out:
  - bronze, silver and gold levels with 27, 46 and 52 requirements;
  - about 600 cooperatives and 300,000 producers in scope;
  - presented officially by the CCC in May 2026.
- **EUDR** applies from 1 Jan 2027.

**Current workflow:** *(desk screen)*
1. The cooperative keeps member registers, farm polygons, training logs and child-labour monitoring records. Many are on paper or in exporter-provided apps.
2. Purchases now go through the SNT terminals.
3. Separate evidence packs are assembled for ARS 1000 auditors, for each exporter's programme and for Rainforest Alliance where applicable.

**Pain:**
Several overlapping evidence requirements fall on low-capacity organisations. Losing certification means losing premiums and market access.

**Existing solutions:**
- The CCC SNT (free, state).
- Exporters' and multinationals' traceability systems.
- Farmforce, SourceTrace, Koltiva, Meridia and similar tools (*desk screen*).
- NGO and ICI programmes.

**The gap:**
Cooperatives may have no single place to turn SNT purchase data plus member and farm data into **ARS 1000 audit evidence**, separately from each buyer's tool (*hypothesis*).

**Possible product:**
An ARS 1000 requirement checklist mapped to evidence, with an import of SNT and exporter data and an output of the audit file per level.

**MVP:**
A web or offline-first checklist with evidence uploads and an audit-pack PDF, for the bronze level only.

**Pricing hypothesis:**
Paid by the exporter: 100,000–300,000 FCFA per cooperative per season (*estimate*).

**How to find first customers:**
- Cooperative federations (UNSCAL-CI).
- Exporter sustainability teams.
- CCC lists of SNT-active cooperatives.

**Risks:**
- The state and exporters control the data and the tools, and the CCC may extend the SNT to cover ARS 1000.
- Cooperatives' ability to pay is low.
- Selling to exporters means enterprise procurement.

**Kill condition:**
- The CCC or the certification bodies publish an official ARS 1000 management module.
- Or the main exporters confirm that their existing platforms already produce ARS 1000 audit files.

**Score:** 3/10

**Sources:**
- https://www.aip.ci/aip-filiere-cafe-cacao-la-cote-divoire-lance-son-systeme-national-de-tracabilite-et-rend-la-carte-du-producteur-obligatoire/
- https://affairesetentreprises.ci/2026/08/14/cacao-ivoirien-tracabilite-obligatoire-au-1er-septembre-coalition-africaine-a-75-de-la-production-mondiale-et-objectif-de-50-de-transformation-locale/
- https://afriksoir.net/cacao-ivoirien-600-cooperatives-deja-engagees-dans-la-tracabilite-totale/
- https://www.koaci.com/article/2026/08/19/cote-divoire/societe/cote-divoire-le-conseil-cafe-cacao-reitere-lentree-en-vigueur-de-la-carte-du-producteur-obligatoire-des-le-1er-septembre_199700.html
- https://www.cocoainitiative.org/sites/default/files/resources/ars1000-and-hrdd_ici-summary_fr_vf.pdf
- https://www.unscalci.com/filiere-cafe-cacao-le-ccc-lance-le-systeme-national-de-tracabilite/

---

## Rejected after competitor research

- **FNE sales-invoice issuance for SMEs.** Killed by the free DGI FNE web platform and API, plus Sage, CassKai, Kompto, Cleo ERP, Faclibr, Djaboo and Finself, all marketing FNE compliance in 2026.
- **Cocoa SNT purchase capture for cooperatives.** Killed by the CCC's own national system and the free distribution of 10,000 terminals and 10 million seals. No transaction is allowed outside the SNT.
- **Supplier-invoice FNE QR scanning (single company).** Already covered by an open-source Odoo 17 module and CassKai's FNE API integration. The only residual angle is multi-client (Opp. 2).
- **Customs declaration prep for brokers.** GUCE CI and SYDAM are a centralised state single window. The broker pool is established and third-party access is unverified.

## Attractive problem, poor distribution

- **ARS 1000 / EUDR evidence for cocoa cooperatives.** Exporters and the state control the tools and the budget (Opp. 3).
- **Clinic insurer-claims rejections.** The pain is real (up to a year to be paid, rejected invoices), but clinics buy custom management systems costing millions of FCFA. A bolt-on would have to integrate with each one.

## Too competitive

- FNE e-invoicing (issuance side).
- Payroll and CNPS/ITS filing (*desk screen*).

## Other rejects

- **AML/KYC for designated non-financial businesses** (estate agents, notaries, car dealers). Event-driven and a generic KYC trap. Enforcement against these professions under Ordinance 2023-875 is unclear.

## Inaccessible markets

None. Côte d'Ivoire is accessible to a foreign solo founder.
