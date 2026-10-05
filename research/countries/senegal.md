# Senegal: Indie-Hacker Opportunity Research

Research date: 2026-10-05. Track: Senegal (French and English sources).

> **Method note and evidence limits.** WebFetch was not used because network policy blocks it. This report rests on 14 WebSearch calls (one more was refused for a usage limit), and every claim comes from **search-result summaries**. No primary regulator PDF was read in full. Many detailed Senegalese "2026 compliance" figures in search results come from **kolonell.com** blog posts. These read like SEO marketing content, and some specifics may be wrong or generic. For example, the e-invoicing thresholds and dates, the pharmacy "Ordre 2025" traceability rule and pharmacy software prices could not be confirmed from an official source. They are marked **(unverified)** wherever they matter. Market sizes marked **(estimate)** are my own.

**Accessibility:** Senegal is not sanctioned, so a foreign solo founder can sell software there. Payment rails exist: mobile money (Wave, Orange Money), XOF bank transfers and cards for larger firms. The working language is French. No data-localization regime that would block a small SaaS was found, though this was not checked in depth.

---

## 1. Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Oil & gas / mining suppliers and subcontractors | Local content plans, procurement plans and reporting to the CNSCL (Law 2019-04, decree 2020-2047), plus registration on the CNSCL platform | **Opportunity (best lead)** | Mandatory filings with penalties. The CNSCL platform plus consultants cover only the portal. Assembling plans and reports from supplier data stays manual. The buyer base is small. |
| 2 | Government vendors (all sectors) | ARCOP's new e-procurement platform **APPEL** (dematerialisation in force from 14 Oct 2025, phased rollout): bid assembly and keeping administrative certificates current | **Opportunity (moderate)** | New portal, many SME bidders, recurring per bid. The risk is that APPEL's own interoperability with DGID, customs and the Treasury removes the attestation pain. |
| 3 | VAT-registered SMEs and accountants | DGID electronic invoicing under the 2025 Finance Law (via a public portal or certified invoicing machines) | **Watch / likely crowded** | The legal basis is real, but the rollout calendar and technical spec are unverified. Sage and other ERP vendors are already positioning, and the State may offer a free portal. |
| 4 | Mango / horticulture exporters | DPV phytosanitary inspection and certification, the new traceability/archiving measures, and ePhyto (GeNS) | **Attractive problem, poor distribution** | Real why-now after the EU interceptions in 2025. But the workflow is seasonal, there are few exporters, and the DPV and the interprofession (IPMS) run the core systems. |
| 5 | Fish processors / exporters (EU-approved plants) | EU catch and processing certificates (CATCH mandatory for EU importers from 10 Jan 2026) under the EU IUU yellow card (May 2024) | **Attractive problem, poor distribution** | The competent authority (DITP) and the EU systems own the certificate flow. The approved-plant list is small, and the political risk is high. |
| 6 | All employers / payroll bureaus | IPRES + CSS contribution declaration and payment on the new shared **Ndamli** platform | **Rejected** | The State provides a free single window. Local payroll packages and Sage already compute IPRES/CSS. File import was not confirmed. |
| 7 | Pharmacies (officines) | Stock, expiry and lot traceability; ARP regulation tightening (regional regulatory office, July 2025) | **Rejected / too competitive** | About 1,500+ pharmacies, already served by pharmacy management software (names cited by an unverified source). The ARP push targets illicit circuits, not a new reporting feed. |
| 8 | Customs brokers / freight forwarders | Customs declarations and single-window procedures | **Rejected** | GAINDE (customs) and ORBUS (single window), both run by GIE GAINDE 2000, have dominated since the 1990s and 2000s. Integrating as an outsider is unlikely. |
| 9 | Hotels / tourist accommodation | Tourism Promotion Tax (TPT) declaration | **Rejected** | ASPT is building its own free QR/digital declaration platform. The workflow is low-frequency and low-value per operator. |

---

## 2. Strongest opportunities

### Opportunity: Local-content compliance pack for oil, gas and mining subcontractors (CNSCL)

**Industry:**
Extractives supply chain: oil and gas (Sangomar, GTA LNG) and mining service providers and subcontractors.

**Buyer:**
Admin/HSE/compliance manager or managing director at Senegalese and foreign SME suppliers and subcontractors working on petroleum and mining projects. A second buyer is the local-content officer at mid-tier contractors who must consolidate their subcontractors' data.

**Trigger / Why now:**
Law 2019-04 on local content in hydrocarbons and decree 2020-2047 (CNSCL organisation) make local-content plans and annual procurement plans mandatory for "any contractor, supplier, subcontractor or service provider" in a petroleum project. The decree adds ex-ante and ex-post controls and fines of **USD 1–20 million** (the fines apply mainly at contractor level). The regime is now operational and extended to mining. Nearly all mining project contracts go through the CNSCL platform with prior control. Suppliers must register on the platform (fee 177,000 FCFA TTC), and at least 10 contracts are published there per week. The CNSCL is running awareness campaigns for the private sector (March 2026) and has a target of 50% local content by 2030. In 2024, local suppliers' transaction volume (over 1,110 bn FCFA) exceeded foreign suppliers' for the first time.

**Current workflow:**
1. The supplier registers on the CNSCL platform and pays the fee, then watches for published tenders.
2. For each contract, it builds a local-content plan by hand in Word/Excel: Senegalese staff share, local purchasing, training, and subcontractors with their NINEA/RCCM.
3. It collects evidence (payroll extracts, invoices from local vendors, training attendance) from payroll, accounting and email.
4. It reports periodically to the prime contractor and the CNSCL in the format each operator requests, often an operator-specific Excel template (unverified, needs interviews).
5. Prime contractors chase late or inconsistent subcontractor data before their own CNSCL reports.

**Pain:**
Mandatory, with penalties and contract-award consequences (prior control by the CNSCL). The CNSCL had to run repeated training sessions to teach suppliers the legislation, which signals low compliance capability. Data comes from several systems (payroll, purchasing, HR). How many hours it takes is not verified.

**Existing solutions:**
- The CNSCL's own platform (registration, tender publication, plan submission) and the Capital Humain jobs platform (capital-humain.cnscl.sn).
- Operators' supplier portals (TotalEnergies/Woodside/bp-type vendor systems; names unverified for Senegal).
- Local consultancies and law firms that prepare local-content plans (manual service).
- Generic ERPs (Sage, Odoo) that hold the underlying data but produce no local-content report.
- Global local-content tracking software exists in other jurisdictions (e.g. Nigeria and Ghana tools). Their Senegal coverage is **unverified**.

**The gap:**
No tool was found that turns a small supplier's payroll and purchase ledger into a CNSCL-ready local-content plan and periodic report. Nor was there a tool that lets a prime contractor collect standardized local-content data from 20–100 subcontractors. The CNSCL portal accepts submissions but does not compute or evidence them.

**Possible product:**
A "local-content ledger": import payroll (nationality and role) and purchase ledgers (supplier NINEA, country), automatically compute Senegalese-share indicators, and generate the plan and report in CNSCL and operator formats with an evidence folder. Add a contractor view that sends data requests to subcontractors and consolidates them.

**MVP:**
Excel/CSV upload of staff and purchases, NINEA-based classification of local vs foreign suppliers, and a PDF/Excel local-content report in one template. Validate the format with 5 suppliers first.

**Pricing hypothesis:**
50,000–150,000 FCFA/month (about USD 80–250) per supplier, and USD 300–800/month per contractor managing subcontractors. This is cheap next to consultant fees for plans (consultant pricing unverified).

**How to find first customers:**
The CNSCL supplier registry and the contracts published on its platform; participants in CNSCL training sessions; chambers of commerce (CCIAD); the employer bodies CNES and CNP; operator supplier-day events.

**Risks:**
- The CNSCL could add calculation and reporting features to its own platform.
- The buyer base is small: a few hundred to low thousands of active suppliers (estimate).
- Report formats may differ by operator and change often.
- Oil and gas activity is concentrated in a few projects.

**Kill condition:**
Kill the idea if interviews show either of these:
- The CNSCL portal already captures the line-item data and computes the indicators.
- Fewer than about 300 suppliers face recurring reporting (as opposed to one-time plans).

**Score:** 6/10

**Sources:**
- https://cnscl.sn/wp-content/uploads/Decrets-CNSCL-et-FADCL-Hydrocarbures-Mines.pdf
- https://www.vie-publique.sn/documents/11033/decret-2020-2047-comite-national-suivi-contenu-local-hydrocarbures-senegal
- https://cnscl.sn/wp-content/uploads/2025/05/Rapport-dactivites-ST-CNSCL-2022.pdf
- https://fr.allafrica.com/stories/202603270154.html
- https://fr.allafrica.com/stories/202512240292.html
- https://fr.allafrica.com/stories/202506130126.html
- https://www.financialafrik.com/2021/06/03/​tribune-le-dispositif-normatif-et-institutionnel-relatif-au-contenu-local-dans-le-secteur-des-hydrocarbures-au-senegal
- https://www.ndarinfo.com/Emploi-Contenu-Local-Le-ST-CNSCL-recrute-via-sa-plateforme-du-Capital-Humain_a43609.html

---

### Opportunity: Bid-readiness and certificate tracker for SME bidders on ARCOP's APPEL e-procurement platform

**Industry:**
Government vendors: construction/BTP subcontractors, office supplies, IT, cleaning and security companies.

**Buyer:**
Owner or tender officer of SME government suppliers, and the small "montage de dossiers" consultancies that prepare bids for them.

**Trigger / Why now:**
ARCOP launched the pilot of **APPEL** (Achats Publics en Procédures ELectroniques) on 14 Oct 2025, and dematerialisation of public procurement is in force from that date. The rollout is progressive: regional roadshows ran in Saint-Louis (Jan 2026) and Ziguinchor (Dec 2025), with more coverage in July 2026. APPEL covers bidder registration, procurement-plan publication, electronic submission, automated bid opening, guarantees and archiving.

**Current workflow:**
1. The SME watches tender notices (APPEL, newspapers, sector portals).
2. It assembles the administrative file: NINEA, RCCM, tax clearance, CSS/IPRES certificates, bank guarantee and references. Many of these expire and must be renewed from DGID, Ndamli and banks.
3. It reformats technical and financial offers to each tender's DAO template.
4. It now scans and uploads everything to APPEL instead of submitting paper, and misses or rejects bids when a certificate has expired or a piece is missing (common elimination reason; frequency unverified).

**Pain:**
Missing or expired documents eliminate bids, so revenue depends on getting the file right. The format change from paper to electronic hits thousands of small bidders at once. The quantified pain is unverified.

**Existing solutions:**
- APPEL itself, which is interoperable with DGID, customs (DGD) and the Treasury, so some certificates may be checked automatically.
- Tender-alert platforms (e.g. the "Avis d'appels d'offres Africa" platform).
- Bid-preparation consultants and cybercafé-style "montage de dossier" services.
- Generic document storage (Google Drive, WhatsApp).

**The gap:**
A per-company vault of administrative documents with expiry tracking and renewal reminders, plus a per-tender checklist generated from the DAO and ready-to-upload packaging for APPEL. This is only valuable if APPEL does **not** auto-verify most certificates.

**Possible product:**
"Dossier toujours prêt": an SME uploads its certificates once. The product tracks validity, reminds the owner before expiry, parses each tender's required documents list into a checklist, and outputs a correctly named upload bundle. Consultants get a multi-client view.

**MVP:**
A document vault with expiry dates and WhatsApp/email reminders, plus a manual checklist template for the 3 most common DAO types.

**Pricing hypothesis:**
10,000–25,000 FCFA/month per SME, and 50,000–100,000 FCFA/month for consultants managing 10+ clients.

**How to find first customers:**
Bidders registered on APPEL and award notices published by ARCOP/DCMP (names of winners); ARCOP training and roadshow attendees; the construction employer federation and sector GIEs.

**Risks:**
- APPEL's interoperability may remove most attestation pain.
- Low willingness to pay among micro-SMEs.
- The work drifts toward the "generic document collection" trap.

**Kill condition:**
Kill the idea if APPEL automatically retrieves tax and social certificates from DGID/CSS/IPRES, or stores a reusable company profile that is reused across bids.

**Score:** 4.5/10

**Sources:**
- https://lesoleil.sn/actualites/technologie/commande-publique-la-phase-pilote-de-la-plateforme-numerique-appel-lancee/
- https://fr.apanews.net/news/senegal-arcop-appel-pour-revolutionner-la-commande-publique/
- https://fr.allafrica.com/stories/202601160191.html
- https://fr.allafrica.com/stories/202512050506.html
- https://fr.allafrica.com/stories/202607170314.html
- https://www.osiris.sn/l-arcop-explique-les-enjeux-de-la-dematerialisation-des-procedures-de-passation.html
- https://www.vie-publique.sn/documents/8773/manuel-utilisation-achat-public-procedures-electroniques-appel-fournisseurs-arcp
- https://www.seneweb.com/fr/news/Economie/300-billion-in-savings-30-more-productivity-public-procurement-arcops-digital-bet_n_470482.html

---

### Opportunity: E-invoicing bridge for accountants serving VAT-registered SMEs (DGID) — watch only

**Industry:**
Accounting firms (cabinets d'expertise comptable) and SME traders/services under the real tax regime.

**Buyer:**
Accounting firm partner managing bookkeeping for 20–200 SME clients, or the SME finance lead.

**Trigger / Why now:**
The 2025 Finance Law (n°2025-02 of 28 Dec 2024) requires electronic invoicing for VAT-liable taxpayers. Invoices are issued, sent and received through a public invoicing portal or another dematerialisation platform set up by the Administration, or through authorised electronic invoicing machines that transmit data to the Administration. The detailed terms are set by ministerial order. The DGID is digitising quickly: SENTAX became mandatory for large firms on 1 Sep 2026, and SenTimbre became the only fiscal-stamp platform from 20 Jul 2026. A phased calendar has been reported (100M FCFA turnover from Jan 2026, 30M from Jul 2026, XML SYSCOHADA format, penalties of 50,000 FCFA per invoice), but it is **unverified** and comes only from a marketing blog.

**Current workflow:**
1. SMEs issue invoices from Excel/Word or local billing tools.
2. Accountants re-key them for VAT returns on the DGID e-tax portal.
3. Once e-invoicing is live, each invoice must pass through the DGID platform or a certified device. Exceptions such as credit notes, rejected invoices and offline sales will need manual handling.

**Pain:**
Penalties exist in the law. The actual operational pain depends on a technical spec and a calendar that are not yet public in a verifiable form.

**Existing solutions:**
- Sage, which publishes Senegal e-invoicing guidance.
- Probably a free DGID portal for small firms (the law mentions a "portail public de facturation").
- Local billing apps and ERP vendors. Certified-machine vendors are not identified.

**The gap:**
Unknown until the arrêté and API spec are published. A typical gap would be accountant-side bulk submission, plus reconciliation between DGID-validated invoices and the VAT return.

**Possible product:**
For accounting firms: a bulk upload of client sales from Excel to the DGID platform, with validation and rejection handling, and a monthly reconciliation of validated invoices against the VAT return.

**MVP:**
Wait for the spec. Until then, a pre-validation tool for invoice mentions (NINEA, numbering, VAT).

**Pricing hypothesis:**
Per client file, 5,000–15,000 FCFA/month, sold to accounting firms.

**How to find first customers:**
The ONECCA register of chartered accountants, and the DGID taxpayer-centre events.

**Risks:**
- A free State portal.
- Large ERP vendors and accredited integrators arrive first.
- The spec is delayed (the Côte d'Ivoire and Congo precedents show certified-device models dominated by approved vendors).

**Kill condition:**
Kill the idea if the DGID publishes an open API with a free portal for SMEs, or if it restricts integration to a short list of approved vendors.

**Score:** 4/10

**Sources:**
- https://blog.avocats.deloitte.fr/senegal-les-principales-mesures-importantes-de-la-loi-de-finances-pour-2025/
- https://www.sage.com/fr-ma/blog/senegal-les-nouvelles-obligations-de-la-facturation-electronique/
- https://osiris.sn/facturation-electronique-eclairage-du-pr-de-fiscalite-mamadou-ngom.html
- https://directactu.net/2026/07/17/timbre-fiscal-la-dgid-lance-sentimbre-desormais-unique-plateforme-officielle-des-le-20-juillet/
- https://www.seneplus.com/article/la-dgid-bascule-vers-le-tout-numerique-avec-sentimbre
- https://fr.allafrica.com/stories/202603020570.html
- https://kolonell.com/fr/blog/facturation-electronique-normalisee-dgid-senegal-2026 (unverified marketing source)

---

## 3. Rejected after competitor research

- **IPRES/CSS contribution filing (payroll):** rejected because IPRES and CSS launched the free shared platform **Ndamli** (remote declaration, payment and instant certificates). Payroll computation is covered by Sage and local payroll software. Any gap is an import/bridge feature that is not confirmed to exist. Sources: https://www.osiris.sn/tambacounda-la-plateforme-digitale-de-l-ipres-et-de-la-css-presentee-aux.html, https://fr.allafrica.com/stories/202605210542.html, https://www.dakaractu.com/IPRES-Vers-une-revolution-digitale-en-2026-avec-le-portail-salarie-et-la-gestion-anticipee-des-retraites_a267681.html
- **Customs brokers / forwarders:** rejected because **GAINDE** and **ORBUS** (GIE GAINDE 2000) are mature, State-run and decades-old, so an outsider faces high integration barriers. Sources: https://osiris.sn/systemes-de-dedouanement-gainde-et-orbus-en-vitesse-de-croisiere.html, https://osiris.sn/Gainde-2000-fete-ses-20-ans-cap.html
- **Pharmacy stock and traceability:** rejected because existing pharmacy management software serves about 1,500+ officines (product names and prices from an unverified source). The new ARP regional regulation targets illicit circuits rather than creating a new reporting feed. Sources: https://fr.allafrica.com/stories/202507140635.html, https://www.seneplus.com/node/194331, https://kolonell.com/fr/blog/application-gestion-pharmacie-officine-senegal-2026 (unverified)
- **Tourism Promotion Tax (TPT) declarations:** rejected because ASPT is building its own free QR/digital declaration platform, and the task is low-frequency and low-value. Source: https://au-senegal.com/tourisme-une-plateforme-digitale-pour-le-recouvrement-des-taxes,17091.html

## 4. Attractive problem, poor distribution

- **Mango/horticulture export phytosanitary traceability:** After the EU suspended Malian mangoes in 2025, the DPV added traceability/archiving measures and risk categorization of exporters, and ePhyto (GeNS) is being deployed. The 2026 target is 35,000 t of exports with zero interceptions. But the season is short, there are few exporters, and the DPV and the interprofession (IPMS) own the core systems. This might work as an add-on to a multi-country West African exporter tool. Sources: https://www.ndarinfo.com/Mangue-de-nouvelles-dispositions-sur-les-operations-d-inspection-et-de-certification-phytosanitaire_a22221.html, https://www.foodbusinessmea.com/senegal-targets-35000-tons-mango-exports-zero-pest-interceptions-for-2026/, https://colead.link/news/senegal-mango-sector-a-training-cycle-to-strengthen-phytosanitary-surveillance-ahead-of-the-2026-campaign/, https://www.cuts-geneva.org/wp-content/uploads/2023/09/SPS-Manual-Senegal.pdf
- **Fish processors and EU catch/processing certificates:** The EU yellow card (May 2024), the suspension of the fisheries agreement, and CATCH being mandatory for EU importers from 10 Jan 2026 all create pressure. But the DITP and the EU systems own certification, the approved-plant list is small, and the political risk is high. Sources: https://maritimafrica.com/en/fight-against-illegal-unreported-and-unregulated-fishing-the-european-union-issues-a-yellow-card-to-senegal/, https://island.is/en/news/changes-to-eu-requirements-for-catch-certificates, https://www.foodbusinessmea.com/?p=2127865

## 5. Too competitive

- **General DGID e-invoicing for SMEs**, unless a narrow accountant-side niche appears once the spec is published (see opportunity 3). ERP vendors such as Sage are already positioned, and a free State portal is likely.

## 6. Overall verdict

Senegal is a mid-size, French-speaking market where the State is building **free single windows** quickly: Ndamli, APPEL, SENTAX, SenTimbre, ePhyto and the ASPT tax platform. Many classic "portal re-entry" gaps are therefore being closed by government. The most defensible lead is **local-content compliance in the extractive supply chain (CNSCL)**. It is mandatory, has penalties, is data-heavy and could extend to similar regimes in Nigeria, Ghana and Mauritania, though the buyer pool is small. Validate it through about 10 interviews with registered CNSCL suppliers before any build.
