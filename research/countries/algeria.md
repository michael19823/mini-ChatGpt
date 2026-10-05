# Algeria: Indie-Hacker Opportunity Research

Research date: 2026-10-04/05. Languages searched: French and English. Arabic-language searches were not run, so coverage of Arabic-only forums is a gap. Searches used: 17 (large-market budget is 18).

## 0. Accessibility verdict: practically inaccessible to a foreign solo founder without a local entity

Algeria is **not under US/EU/UK sanctions on software**. In practice, though, a foreign founder cannot easily sell SaaS there:

- **The dinar is not convertible.** Converting DZD to foreign currency for a purchase works only through formally domiciled commercial transactions. Reports describe about 30 administrative steps and 3–6 months, so a $29/month subscription is impractical by this route ([algeriatech.news](https://algeriatech.news/?p=28329)).
- **Importing services now needs prior authorization.** From 1 August 2026, service imports go 100% through `services.mcepe.gov.dz`. Services covered by the PPI need ministry authorization before bank domiciliation ([TSA](https://www.tsa-algerie.com/importations-de-services-lalgerie-passe-au-100-numerique-des-le-1er-aout/), [TSA list of services](https://www.tsa-algerie.com/importations-de-services-lalgerie-fixe-la-liste-des-prestations-soumises-au-ppi/), [Algérie360](https://www.algerie360.com/importation-de-services-ce-qui-change-pour-les-operateurs-economiques-a-partir-du-mois-daout/)).
- **Tax adds friction.** Foreign digital services carry 19% VAT, and non-resident platforms must register with the DGI or risk penalties of up to 200%. Software royalties paid abroad face a 30% withholding tax, reduced until end-2026 ([algeriatech.news](https://algeriatech.news/?p=28329)).
- **Local payment rails stay in dinars.** Bank of Algeria Instruction 06-2025 requires all digital-wallet services to run in DZD only. A workaround exists for individuals: USD virtual cards (for example Alia Pay with Rho), funded from DZD through CCP. These help consumers and freelancers, not company procurement ([algeriatech.news](https://algeriatech.news/algeria-virtual-usd-mastercard-psp-global-digital-access-2026/)).

**Conclusion:** every opportunity below assumes an Algerian legal entity or a local reseller partner that bills in DZD. For a solo foreign founder, Algeria works only through a local co-founder or reseller. Scores below already include this penalty.

## 1. Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Importers (resale and own use) | Semester PPI (Programme prévisionnel d'importation) filing on `import.mcepe.gov.dz`, tariff lines, bank domiciliation | **Candidate** | Brand-new mandatory semester filing since July 2025, many rejections and frequent rule changes. ConformePro already in the space. |
| Customs brokers / transitaires | One shipment → PPI authorization + bank domiciliation + ALCES customs declaration + client documents | **Candidate (weak)** | ALCES rolled out nationally, and brokers still submit ministry authorizations through the single window plus paper. Broker-software landscape unverified. |
| Date exporters (agri-export) | EU MRL / pesticide-residue evidence and lot traceability | **Candidate (weak)** | Recalls (diflubenzuron) and a French import ban since 2022, but only a small pool of exporters |
| Payroll / HR | Monthly DAC and annual DAS e-filing to CNAS, IRG, CACOBATH | Too competitive | PC Paie, Sage, Talenteo and Odoo CNAS modules already generate files the portal accepts. Over 80% of employers already e-file. |
| Accountants / tax | Monthly G50 e-filing on Jibayatic (mandatory from 1 January 2026 for real and simplified-real regimes) | Too competitive / low gap | DGI portal is free. Local accounting packages and accountants already handle it. |
| All businesses: e-invoicing | B2B/B2G e-invoicing mandate | Rejected (timing) | Mandate slipped past 2026 and no binding legal framework exists yet |
| All businesses: data protection | Law 25-11 (July 2025): appoint a DPO, notify breaches within 5 days, keep a processing register | Rejected | Mostly one-time work. ConformePro and law firms already offer it. |
| Pharmacies | Psychotropes register, Chifa third-party-payment reconciliation | Rejected / poor distribution | State national digital register (Law 23-05) and a national pharmacy platform are under way. Installed local officine software. |
| Waste / hazardous material | Special-waste declarations (Decree 05-315) | Rejected | Old paper-based rule. No new digital trigger or portal found. |
| Construction / government vendors | Assembling tender dossiers (CNAS/CASNOS/CACOBATH certificates) | Poor distribution | New procurement portal (order of 4 February 2026) is mainly for publication. Strong preference for domestic bidders. Buyers fragmented. |

## 2. Strongest opportunities

### Opportunity: PPI semester-filing copilot for small importers

**Industry:**
Import trade (resale as-is and import for own use), plus the accountants and transitaires who file for them

**Buyer:**
Owner or administration manager of a small import company (0–50 staff). Secondary buyer: accounting firms and customs brokers filing PPIs for several clients.

**Trigger / Why now:**
The PPI arrived in July 2025. Every importer must have a semester import programme approved before bank domiciliation and customs clearance. Decree 25-233 (3 September 2025) created the Organisme algérien de l'importation. A new platform for H1 2026 launched in December 2025, and the PPI was extended to micro-enterprises and to finished goods. The rules changed through about "eight texts in eight months", and the H1 2026 deadline was 26 February 2026.

**Current workflow:**
1. Collect supplier proforma invoices (PDF or Excel) and work out quantities and values for the semester.
2. Map each product to the correct Algerian customs tariff sub-position by hand.
3. Fill in the ministry's Excel or web form on `import.mcepe.gov.dz`, checking that the activity code matches the portal used.
4. Wait for validation. If rejected (wrong platform, wrong activity status, inconsistent data, "duplicates"), fix and resubmit.
5. Carry the approved PPI to the bank for domiciliation and to the customs broker, then track how much of the approved amount has been used.

**Pain:**
- In September 2026 the ministry flagged "flagrant matches" in the files of 1,013 operators.
- 3,961 micro-firms filed $130bn of H2 2026 PPIs, which suggests data-quality problems.
- Operators complain about a "lack of visibility" amid repeated notes and deadline changes.
- Incorrect data can get the account activation refused.
- Without approval there is no domiciliation and no import, so revenue directly depends on it.

**Existing solutions:**
- ConformePro (conformepro.dz): automates tariff filling from proforma PDF/Excel and authenticates RC/NIF. Clients include DP World Djazair, KPMG and Promedal. This is the direct competitor.
- Free ministry Excel templates and online guides, such as mumnet.fr.
- Customs brokers and consultants doing the filing by hand.
- ERP purchasing modules (Sage, Odoo), which have no PPI output.

**The gap:**
- Tracking how much of the approved PPI has been used against actual domiciliations and ALCES clearances.
- Checking the next semester's filing against the previous one for consistency.
- A single-source alert feed for rule changes.
- ConformePro focuses on tariff filling and appears aimed at larger firms. Its pricing and depth on consumption tracking are unverified.

**Possible product:**
A PPI workspace. Upload proformas and get tariff-coded lines and a pre-filled ministry file. Track approved amounts against domiciliations and clearances per line, and get alerts when rules change.

**MVP:**
Excel/PDF proforma → tariff-coded PPI spreadsheet in the ministry format, plus a tracker of approved versus used amounts per line, fed by manual entry.

**Pricing hypothesis:**
Estimate of 5,000–15,000 DZD per semester filing for micro-importers. Broker or accountant seat at 10,000–20,000 DZD per month. About $40–150/month equivalent, billed locally in DZD.

**How to find first customers:**
Transitaires and customs-broker associations (multi-client filers). Chambers of commerce (CACI and the wilaya chambers). Importer Facebook groups. The CNRC register filtered by import activity codes.

**Risks:**
- Highly volatile rules: the PPI could be scrapped (TSA has reported its future as "in suspense").
- No portal API.
- ConformePro is already established.
- Requires a local entity to bill in DZD.

**Kill condition:**
The PPI is abolished or folded into an automated ministry-bank-customs flow. Or ConformePro already offers consumption tracking at a price that micro-importers accept.

**Score:** 5/10

**Sources:**
- https://www.tsa-algerie.com/importations-lalgerie-reconduit-le-ppi-pour-2026-avec-une-nouveaute/
- https://www.teamfrance-export.fr/infos-sectorielles/38407/38407-creation-de-lorganisme-algerien-des-importations
- https://www.tsa-algerie.com/importations-ppi-le-ministere-du-commerce-devoile-plus-de-1-000-doublons/
- https://maghrebemergent.news/fr/ppi-huit-textes-en-huit-mois-lalgerie-ajuste-sans-cesse-ses-regles/
- https://www.webmanagercenter.com/2026/09/07/572378/commerce-exterieur-algerie-comment-3-961-petites-entreprises-ont-elles-pu-demander-130-milliards-de-dollars-dimportations/
- https://www.mumnet.fr/2026/07/11/ppi-algerie-second-semestre-2026-depot-plateforme/
- https://news.radioalgerie.dz/fr/node/80007
- https://www.tsa-algerie.com/importations-lalgerie-elargit-le-ppi-a-dautres-operateurs/
- https://www.tsa-algerie.com/algerie-lavenir-du-programme-previsionnel-dimportation-en-suspens/
- https://conformepro.dz/

---

### Opportunity: Transitaire shipment file desk (PPI → domiciliation → ALCES)

**Industry:**
Customs brokers / freight forwarders

**Buyer:**
Owner or operations lead of a small customs-broker firm (commissionnaire en douane agréé)

**Trigger / Why now:**
- ALCES, the new customs IT system, was launched in November 2023 and is now used in every office: over 608,000 clearance files and 1.8 million transit documents so far.
- Brokers must now enter Ministry of Foreign Trade authorizations through the single window **in addition to** the usual paper file.
- Ports are moving to digital cargo declarations, and more ALCES modules are announced.

**Current workflow:**
1. Receive the client's commercial documents and the PPI authorization by email or WhatsApp.
2. Check that the bank domiciliation matches the PPI line and the invoice.
3. Enter the declaration in ALCES and enter the authorization in the single window.
4. Prepare a paper copy of the file.
5. Report status and costs back to the client by hand.

**Pain:**
- The same data is keyed into several systems.
- Every shipment needs paper plus digital copies.
- A PPI or domiciliation mismatch blocks clearance, which means demurrage costs.
- The evidence is official descriptions of the workflow. No direct complaints were found (unverified).

**Existing solutions:**
- ALCES itself (government, free).
- Generic forwarding ERPs.
- Excel and WhatsApp.
- No Algeria-specific broker SaaS was found in searches (unverified: local desktop tools probably exist).

**The gap:**
No tool cross-checks a shipment against the PPI authorization and the domiciliation before ALCES entry, or produces the client status pack.

**Possible product:**
Shipment file tracker for brokers. Upload invoice, PPI authorization and domiciliation; get a consistency check, an ALCES data sheet ready to copy in, and a client-facing status page.

**MVP:**
Document checklist plus a mismatch checker (HS code, value, quantity against the PPI line) and a per-shipment status page.

**Pricing hypothesis:**
Estimate of 300–800 DZD per shipment file, or 15,000–40,000 DZD per month per firm.

**How to find first customers:**
Customs administration list of approved brokers (agréments). Port-city broker communities (Algiers, Oran, Béjaïa, Annaba). Overlaps with the PPI copilot's customers.

**Risks:**
- ALCES may absorb this through new modules.
- No API.
- Unverified local competitors.
- Accessibility (DZD billing).

**Kill condition:**
ALCES adds PPI/domiciliation matching natively, or a local broker-software vendor already does it.

**Score:** 4/10

**Sources:**
- https://algerie-eco.com/2024/09/04/douanes-120-000-declarations-douanieres-traitees-via-le-nouveau-systeme-dinformation/
- https://algeriatech.news/algeria-ai-customs-logistics-trade-ports-modernization-2026/
- https://www.algerie360.com/les-ports-algeriens-passent-au-numerique-voici-ce-qui-change-pour-la-declaration-de-marchandises/
- https://www.algerie360.com/modernisation-des-douanes-algeriennes-un-nouveau-systeme-informatique-en-cours-de-deploiement/

---

### Opportunity: Date-exporter residue and traceability dossier

**Industry:**
Agricultural export (Deglet Nour dates)

**Buyer:**
Export manager of a date packing or export house

**Trigger / Why now:**
- Recalls in France over diflubenzuron, a pesticide banned in the EU.
- Reported French import restrictions since 2022.
- The government is pushing to grow non-hydrocarbon exports.

**Current workflow:**
1. Buy lots from many palm-grove farmers.
2. Send samples to a lab.
3. Collect the phytosanitary certificate and origin documents.
4. Assemble the buyer dossier by hand for each shipment.

**Pain:**
- Rejected lots and recalls cost money and market access.
- Lot-to-farm traceability is rarely documented (inferred, not verified).

**Existing solutions:**
- Generic agri-traceability platforms such as GS1 and food-safety SaaS (international).
- Buyer-imposed audits (GlobalG.A.P.).
- Excel.

**The gap:**
No lightweight link between farm lot, lab result and shipment for small Algerian exporters (unverified).

**Possible product:**
Lot-intake app plus a per-shipment dossier generator that links farms, lab reports and certificates.

**MVP:**
Lot register with lab-PDF attachment, plus an MRL flag against EU limits, plus a dossier PDF per shipment.

**Pricing hypothesis:**
$50–150/month equivalent per exporter. Estimate.

**How to find first customers:**
ALGEX / the export-promotion agency exporter lists. Biskra and El Oued exporter associations. Trade-fair exhibitor lists.

**Risks:**
- Small number of exporters (likely low hundreds, estimate).
- Seasonal.
- Accessibility.

**Kill condition:**
Fewer than about 150 active exporters, or EU buyers already impose their own platform.

**Score:** 3/10

**Sources:**
- https://algerie-eco.com/?p=158368
- https://www.dzair-tube.dz/en/european-food-safety-alerts-put-moroccan-agricultural-exports-under-renewed-scrutiny/
- https://www.iemed.org/wp-content/uploads/2024/07/15Amine-M.-Benmehaiafr-.pdf

## 3. Rejected after competitor research

- **CNAS DAC/DAS payroll e-declaration.** Killed by PC Paie, Sage Paie, Talenteo and Odoo "eloapps_hr_cnas_reports" (Elosys), which generate files the CNAS portal accepts. Over 80% of employers already e-file. ([Talenteo](https://talenteo.com/en/comment-choisir-meilleur-logiciel-paie-algerie/), [Odoo app](https://apps.odoo.com/apps/modules/17.0/eloapps_hr_cnas_reports), [Algérie Eco](https://algerie-eco.com/?p=233782))
- **G50 / Jibayatic e-filing helper.** Mandatory since 1 January 2026, but the free DGI portal plus local accounting software and accountants cover it. Not much is re-entered between systems. ([Radio Algérie](https://news.radioalgerie.dz/fr/node/78103), [Zoom Algérie](https://zoomalgerie.com/g50-algerie/))
- **E-invoicing compliance.** The mandate has slipped beyond 2026 with no legal framework, so there is no why-now yet. Worth re-checking in 2027. ([SSL](https://sharedserviceslink.com/news/algeria-s-e-invoicing-mandate-slips-beyond-2026-as-regulatory-framework-lags))
- **Law 25-11 data-protection compliance.** Mostly one-time work (appoint a DPO, keep a register), already offered by ConformePro and law firms. Generic. ([algeriatech.news](https://algeriatech.news/algeria-law-25-11-data-protection-enterprise-compliance-checklist-2026/), [TSA](https://www.tsa-algerie.com/protection-de-donnees-personnelles-nouvelle-obligation-en-algerie/))
- **Pharmacy psychotropes register.** Killed by a government-provided tool: Law 23-05 creates a national digital prescription register (pharmacy module reported ready), and a national pharmacy management platform has been announced. ([WeAreTech](https://www.wearetech.africa/fr/fils/actualites/tech/lalgerie-annonce-la-mise-en-place-dune-plateforme-numerique-pour-revolutionner-la-gestion-des-pharmacies-dofficine), [Algérie360](https://www.algerie360.com/fraude-aux-ordonnances-ce-que-les-pharmaciens-reclament-au-ministere-de-la-sante/))
- **NIF/RC customer authentication.** Already automated by ConformePro.

## 4. Attractive problem, poor distribution

- **Pharmacy Chifa third-party-payment reconciliation** (over 11,000 pharmacies under CNAS/CASNOS agreements). Pharmacies are locked into installed local officine software (vendors not verified), the state platform is coming, and a foreign vendor cannot bill them. ([Algérie Eco](https://algerie-eco.com/?p=33484))
- **Tender-dossier assembly for BTPH (construction) and government vendors.** The new procurement portal (order of 4 February 2026) is mainly for publication, buyers are fragmented by wilaya, and domestic preference applies. ([TESIM factsheet](https://www.interregnextmed.eu/wp-content/uploads/2025/12/TESIM_Factsheet-public-procurement-Algeria.pdf))
- **Special-waste generator declarations.** The pain is real on paper (about 325,000 t/year), but there is no digital trigger and no reachable buyer list. ([Algérie Eco](https://algerie-eco.com/?p=163307))

## 5. Too competitive

- Payroll and CNAS/CASNOS/IRG compliance (PC Paie, Sage, Talenteo, Odoo localizations).
- General accounting and G50 (local accounting packages, accountants).

## 6. Bottom line

The best workflow lead in Algeria is the **PPI import-programme regime**. It is brand new and mandatory, recurs every semester, has high rejection rates and changes constantly. It is still only a 5/10 for three reasons:

- ConformePro is already there.
- The regime itself may be dropped.
- A foreign solo founder practically cannot sell into Algeria. Service imports now need PPI authorization, the dinar is not convertible, and royalties carry withholding tax.

Pursue this only with an Algerian co-founder or reseller.
