# Guinea (Guinée, Conakry): opportunity research

Research date: 2026-10-04. Treated as a **small market** (search budget: 10 searches, all used). The searches were in French and English.

## Context and accessibility

- **Economy:** Mining dominates. Guinea is the world's largest bauxite exporter (Boké region), and the Simandou iron-ore project moved from construction to operation in 2025–2026. The formal SME base outside mining, trade and telecoms is thin, and many businesses are informal.
- **Politics:** The military-led transition (in power since 2021) ran a constitutional referendum in 2025, a presidential election in Dec 2025 and parliamentary elections in 2026 (https://en.wikipedia.org/wiki/2026_in_Guinea). Institutions are being renamed: the tax authority is now styled DGI, formerly the DNI.
- **Sanctions:** Guinea is not under comprehensive US, EU or UK sanctions on software or IT services. ECOWAS lifted its transition-era sanctions in 2024. This comes from background knowledge and was not re-verified by search this session.
- **Payments:** Orange Money and MTN MoMo dominate. Card or Stripe-style payouts for a foreign founder are hard (estimate/unverified), so a foreign solo founder would probably need a local reseller or partner for collection.
- **Verdict:** The market is legally accessible but practically hard. Use French. Expect low software prices and relationship-driven sales.

## The digital "why now" (2024–2026)

Three government portals now force SMEs online:

1. **eTax** (DGI): online filing and payment of taxes. In 2026 the new **e-Bilan** module made filing the SYSCOHADA financial statements online mandatory (CGI art. 108-III). The DGI moved the deadline from 30 April to **30 July 2026**, citing "major technical constraints" (https://www.guinee360.com/22/05/2026/declaration-fiscale-la-dgi-repousse-au-30-juillet-le-depot-des-etats-financiers-sur-etax/).
2. **E-CNSS:** online wage declarations and social-contribution payments, the nominative social declaration (DSN), hiring declarations and the online *certificat de conformité sociale*. It launched officially in July 2025 (https://guineenews.org/2025/07/10/digitalisation-des-services-sociaux-la-plateforme-e-cnss-officiellement-lancee/).
3. **DAMANDA:** the official mining-title management platform, with a Chamber of Mines workshop in May 2026 (https://guineematin.com/2026/05/21/conakry-les-acteurs-miniers-outilles-sur-la-plateforme-damanda-un-outil-incontournable-du-secteur/).

There is **no** national certified e-invoicing (FNE/SFEC) yet. It was presented in 2021 (https://mbudget.gov.gn/2021/12/presentation-de-la-facture-electronique-normalisee/), and neighbours rolled theirs out in 2025–2026: Côte d'Ivoire's FNE and DRC's normalized invoice on 1 Dec 2025, and Congo-Brazzaville's SFEC. Guinea is a likely follow-on, but no date has been announced.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / payroll bureaus | Monthly payroll → RTS/VF on eTax + CNSS DSN on E-CNSS | **Candidate (weak-moderate)** | Two new portals in 18 months, many SMEs and cabinets are re-keying, but price ceiling is low and PaySpace/Sage/Odoo cover payroll |
| Accountants (year-end) | SYSCOHADA trial balance → e-Bilan file on eTax | **Candidate (weak)** | Real 2026 pain (deadline slipped 3 months), but annual-only and OHADA accounting tools will add export |
| Mining subcontractors | Agrément (3-yr), mining-list duty-exemption tracking, contract filing, annual report, local-content reporting | **Candidate (moderate)** | Mandatory, paper-heavy, ministry is auditing bauxite-transport subcontractors; buyers concentrated in Boké/Simandou corridor |
| Customs brokers / freight forwarders | Declarations via SYDONIA World + GUCEG single window | Rejected | GUCEG/SYDONIA are state-run, plus brokers' existing tools; no accessible API for a small foreign vendor |
| Pharmacies / wholesalers | Traceability, DNPM reporting | Rejected | No 2025–2026 traceability mandate found for Guinea (only Guinea-Bissau); only about 53 licensed wholesalers |
| E-invoicing (all VAT payers) | Future certified e-invoice | Watch only | No Guinean mandate or technical specification yet; when it comes, the state or its integrator usually supplies the device or platform |
| Agricultural exporters (coffee/cocoa, EUDR) | EU deforestation traceability | Rejected (not searched deeply) | Guinea's coffee and cocoa export volumes are small; cashew is out of EUDR scope; NGO/donor tools are likely substitutes (estimate) |

## Opportunities

### Opportunity: Guinea mining-subcontractor compliance register ("dossier sous-traitant minier")

**Industry:**
Mining subcontracting, mainly bauxite haulage, earthworks, catering, security and equipment rental around Boké, Kindia and the Simandou corridor.

**Buyer:**
The administrative/compliance manager (*responsable administratif / juriste*) of Guinean SME mining subcontractors. A secondary buyer is the contractor-management or local-content team at the mining title holders, who must keep subcontractor lists and exemption lists consolidated.

**Trigger / Why now:**
- The Ministry of Mines ran a control mission on bauxite-transport subcontractors. It recommended a ministry database of subcontractors holding their administrative and statutory documents, and mandatory filing of the full list of bauxite-transport subcontractors.
- The ministry launched a local-content evaluation across all companies in construction or operation phase, and recruited an international firm to do it.
- The DAMANDA platform became the official mining-title tool in 2026.
- Simandou's move into operation is raising local-employment and local-supplier pressure.

**Current workflow:**
1. The subcontractor applies for, and every 3 years renews, the mining-subcontractor *agrément*, granted by joint decree of the Mines and Budget ministers. This needs proof of technical and financial capacity.
2. Its equipment and consumables list has to be attached to the title holder's approved "mining list" to get duty exemption. Imports are then tracked against that list for post-control.
3. Each subcontract must be communicated to the Mining administration, and an annual activity report is filed.
4. In parallel, the mining majors ask for their own supplier qualification documents: tax and CNSS certificates, insurance, HSE and local-employment figures. Those documents expire and are re-sent by email or USB.
5. All of this lives in folders, Excel and WhatsApp. Lapses mean lost exemptions, recovery of duties plus penalties, or being dropped by the title holder.

**Pain:**
- The exemption regime is large: it was over one third of customs revenue historically.
- Misuse of an exemption is a customs offence, punished by recovery of duties plus penalties.
- The ministry openly found that subcontractor documentation is poorly tracked.
- A legal commentator notes that the code's definition of "subcontractor" causes confusion over who gets the fiscal and customs benefits.

There is no first-hand operator complaint (a gap in the evidence).

**Existing solutions:**
- Guinean business-law firms and consultants doing it manually, e.g. Thiam & Associés publishes a mining/business-law gazette.
- The Chamber of Mines (CMG), which has a local-content commission.
- The majors' own supplier portals, typically global systems such as SAP Ariba or Avetta-type contractor management (name the specific portal per major: unverified).
- DAMANDA, which covers titles rather than subcontractor dossiers.
- Generic document-expiry tools.

**The gap:**
No Guinea-specific tool ties together the agrément expiry, the mining-list quantities consumed against those approved, the contract-filing register, the annual-report pack and the majors' requalification packs. The majors' portals only collect *their* requirements, and consultants are episodic.

**Possible product:**
A French-language compliance register for mining subcontractors. It tracks every regulatory and client document with its expiry, reconciles exempted imports against the approved mining list, and produces the annual report and requalification packs in one click.

**MVP:**
A document-expiry register plus a mining-list reconciliation spreadsheet importer. Inputs are the approved list and import declarations; outputs are remaining balances and alerts. Add Word/PDF templates for the annual report and contract filing letter.

**Pricing hypothesis:**
USD 80–200 per month per subcontractor (estimate). Alternatively, sell to the title holder at USD 1–3k per month to manage its whole subcontractor base.

**How to find first customers:**
- Chamber of Mines member list (cmg.com.gn), which admitted new members in 2026.
- Ministry of Mines lists of approved subcontractors (agrément decrees are published).
- EITI Guinea reports (itie-guinee.org), which list companies.
- Supplier days at the Simandou and Boké projects.

**Risks:**
- The ministry may build the database itself, possibly inside DAMANDA.
- Relationship-driven sales mean you need an in-country partner.
- Payment collection is hard.
- Political and regulatory volatility.
- Many subcontractors are small trucking outfits with little admin capacity, and some of the exemption tracking is done by the title holders themselves.

**Kill condition:**
- The Ministry or DAMANDA launches a subcontractor module with document upload and exemption tracking.
- Or 10 interviews show that the title holders' procurement teams already handle mining-list reconciliation for subcontractors.

**Score:** 4.5/10

**Sources:**
- https://mines.gov.gn/ministere-des-mines-et-de-la-geologie-restitution-du-rapport-de-mission-de-controle-des-societes-sous-traitantes-dans-le-transport-de-bauxite/
- https://loidici.biz/2020/02/17/chapitre-3-agrement-des-sous-traitants-miniers/lois-article-par-article/codes/le-code-minier/17579/naty/
- https://www.village-justice.com/articles/definition-sous-traitant-dans-code-minier-guineen-source-confusion-pour,35162.html
- https://www.village-justice.com/articles/les-conventions-etablissement-les-exonerations-fiscales-douanieres-guinee,39308.html
- https://www.wto.org/french/tratop_f/tpr_f/s251-03_f.doc
- https://www.agenceecofin.com/actualites/2309-141805-simandou-de-la-construction-a-l-exploitation-la-course-a-l-emploi-local-en-guinee
- https://guineematin.com/2026/05/21/conakry-les-acteurs-miniers-outilles-sur-la-plateforme-damanda-un-outil-incontournable-du-secteur/
- https://cmg.com.gn/
- https://www.africaguinee.com/guinee-la-chambre-des-mines-valide-son-plan-strategique-2026-2028-et-accueille-de-nouveaux-adherents/

---

### Opportunity: Payroll-to-portal filing pack for Guinean accounting cabinets (eTax + E-CNSS)

**Industry:**
Accounting firms and payroll bureaus.

**Buyer:**
A Guinean *cabinet comptable* or chartered accountant managing payroll and tax filings for 20–200 SME clients. A secondary buyer is the in-house accountant at a mid-size firm.

**Trigger / Why now:**
- E-CNSS (launched July 2025) moved monthly wage declarations, the DSN, hiring declarations and the social-compliance certificate online.
- eTax already requires online tax filing and payment, and the e-Bilan module was added in 2026.
- So every month the same payroll data has to reach two different portals in two different formats.

**Current workflow:**
1. Payroll is computed in Excel or in a generic or old payroll tool: gross pay, RTS (income-tax withholding), CNSS at 18% employer and 5% employee, VF (*versement forfaitaire*), and similar items.
2. The accountant re-keys the employee-level data into E-CNSS for the DSN and the contribution payment.
3. The accountant re-keys the aggregates into eTax for RTS/VF and the other monthly taxes.
4. The accountant reconciles the payments, then downloads and keeps the receipts for each client.
5. The accountant requests the *certificat de conformité sociale* when a client bids on tenders or mining contracts.

**Pain:**
The portals are new and the DGI itself admits "major technical constraints" (the e-Bilan deadline slipped three months). Online calculators for RTS/CNSS in Guinea exist, which suggests people are checking payslips by hand. There is no direct complaint about E-CNSS re-keying in the sources (unverified).

**Existing solutions:**
- PaySpace, which supports Guinea Conakry CNSS rules; enterprise/EOR-oriented.
- Sage Paie through regional partners (Guinea localization unverified).
- Odoo OHADA localizations and CassKai, which markets accounting/invoicing for Guinea.
- Afrotools calculators.
- EOR providers such as Playroll.
- Manual Excel.

**The gap:**
None of the products found output an E-CNSS-ready DSN file or a client-by-client eTax filing worksheet, or track filing status and receipts across many clients. Whether E-CNSS accepts a file upload or only form entry is unverified, and it decides whether this is automation or just a checklist.

**Possible product:**
A multi-client cabinet tool. You import a payroll Excel file and get Guinea-correct RTS, CNSS and VF calculations. It produces E-CNSS and eTax upload or entry sheets, keeps a monthly filing-status board across clients, and archives receipts and compliance certificates.

**MVP:**
An Excel import, a Guinea payroll rules engine, and printable/exportable declaration sheets in the order of the portal screens. Add a client × month status grid.

**Pricing hypothesis:**
USD 30–80 per month per cabinet, or about USD 2–4 per client company per month (estimate; the local price ceiling is low).

**How to find first customers:**
- The Ordre National des Experts-Comptables de Guinée member roster (existence and roster access unverified).
- CNSS employer-training sessions on E-CNSS.
- DGI eTax workshops.
- Accounting firms' Facebook and LinkedIn pages in Conakry.

**Risks:**
- Small market: the number of formal employers registered with CNSS was not found.
- Portal changes.
- PaySpace or Sage partners localize first.
- WhatsApp-and-cash buying culture.
- Payment collection.

**Kill condition:**
- E-CNSS and eTax offer bulk upload that Excel already fills well.
- Or fewer than about 150 cabinets or payroll bureaus exist.
- Or interviews show cabinets will not pay more than USD 20 per month.

**Score:** 3.5/10

**Sources:**
- https://guineenews.org/2025/07/10/digitalisation-des-services-sociaux-la-plateforme-e-cnss-officiellement-lancee/
- https://www.osiris.sn/la-guinee-lance-la-plateforme-ecnss-pour-moderniser-la-securite-sociale.html
- https://guineenews.org/2024/10/12/modernisation-des-services-de-la-cnss-une-nouvelle-ere-avec-une-plateforme-de-teleprocedure/
- https://dgi.gov.gn/wp-content/uploads/2022/09/N%C2%B09-guide-utilisateur-Etax.pdf
- https://support.payspace.com/portal/en/kb/articles/guinea-conakry-increase-in-cnss-minimum-wage-limit-effective-1-june-2022
- https://afrotools.com/fr/blog/rts-cnss-guinee-controle-salaire-net/
- https://casskai.app/solutions/guinee
- https://wf.playroll.com/compliance-hub/paying-employees-in-guinea-conakry

---

### Opportunity: e-Bilan converter for Guinean accountants (SYSCOHADA trial balance → eTax e-Bilan)

**Industry:**
Accountants.

**Buyer:**
Chartered accountants and salaried company accountants who must certify (*viser*) and file financial statements on eTax.

**Trigger / Why now:**
The e-Bilan module on eTax made online filing of the SYSCOHADA financial statements mandatory in 2026. The deadline was moved from 30 April to 30 July 2026 because of "major technical constraints".

**Current workflow:**
1. Close the books in the accounting tool, which is often Sage, an older local tool or Excel.
2. Map the trial balance by hand onto the SYSCOHADA model file required by the DGI.
3. Fix validation errors.
4. Get the statements certified and upload them on eTax.

**Pain:**
The deadline slipped by three months. Benin and Cameroon went through similar e-Bilan/DSF transitions, which produced a cottage industry of converters.

**Existing solutions:**
- Accounting software adding an e-Bilan export: Sage partners, Odoo OHADA, CassKai, SangoCompta (Cameroon).
- DGI templates.
- Accountants' own Excel macros.

**The gap:**
A Guinea-specific mapping and validation tool that runs before upload, so errors are caught before eTax rejects the filing.

**Possible product / MVP:**
Upload the trial balance in Excel. The tool auto-maps it to the SYSCOHADA model, runs consistency checks, and outputs the file in the format eTax requires.

**Pricing hypothesis:**
USD 30–60 per company file, or USD 300–600 per cabinet per season (estimate).

**How to find first customers:**
Chartered-accountant bodies, the DGI e-Bilan trainings, and Conakry accounting firms.

**Risks:**
Annual-only use. Accounting vendors close the gap within one season. The DGI may improve its own template.

**Kill condition:**
The DGI or the main accounting tools ship a working direct export for the 2027 filing season.

**Score:** 3/10

**Sources:**
- https://www.guinee360.com/22/05/2026/declaration-fiscale-la-dgi-repousse-au-30-juillet-le-depot-des-etats-financiers-sur-etax/
- https://dgi.gov.gn/wp-content/uploads/2022/09/N%C2%B09-guide-utilisateur-Etax.pdf
- https://ebilan.impots.bj/ (Benin comparison)
- https://casskai.app/solutions/guinee
- https://sangocompta.com/

## Rejected after competitor research

- **Customs-declaration / single-window automation for brokers:** SYDONIA World (customs) and the GUCEG single window (launched 2019) are state-run monopolies. There is no public API found for third parties, and brokers' declarations already live there. Killed by the government system plus the lack of an API (https://guineenews.org/2019/09/03/guinee-alpha-conde-lance-les-activites-du-guichet-unique-pour-le-commerce-exterieur/).
- **E-invoicing compliance middleware:** There is no Guinean FNE/SFEC mandate or technical specification yet; it was only presented in 2021. In neighbouring countries the state or its integrator supplies the platform or device for free (Côte d'Ivoire FNE, DRC DEF). Watch for a Guinean finance-law announcement (https://mbudget.gov.gn/2021/12/presentation-de-la-facture-electronique-normalisee/, https://www.fne.dgi.gouv.ci/index.php).
- **Pharmacy traceability:** No Guinean traceability mandate was found; the 2026 mandate found was Guinea-Bissau's. Only about 53 wholesalers remain after rationalization, and donor-funded supply-chain systems (GHSC) are the likely substitute (https://www.ghsupplychain.org/sites/default/files/2019-11/138_GHSC%20Summit%20Poster%20Guinea%20FINAL%20%281%29.pdf).
- **General payroll SaaS for Guinea:** PaySpace (Guinea rules supported), EOR platforms and Sage/Odoo partners already cover the calculation. The only surviving angle is the narrow cabinet filing pack above.

## Attractive problem, poor distribution

- **Mining-subcontractor compliance** (scored above): the pain is credible, but reaching buyers depends on in-person relationships in Conakry and Boké and on mobile-money collection.
- **Monthly eTax/E-CNSS filing for SMEs directly:** the SMEs are mostly informal or tiny, and the cabinet channel is the only practical route.

## Too competitive

- Generic accounting/invoicing for Guinea: CassKai, Odoo, Sage and regional OHADA tools.

## Bottom line

Guinea has no strong standalone indie opportunity in 2026. The best lead is **mining-subcontractor compliance (4.5/10)**, which works only with a local partner. Guinea is better served as a French-language add-on to a regional OHADA product (eTax/e-Bilan and CNSS modules) built for a larger francophone West African market such as Côte d'Ivoire or Senegal. Re-check if Guinea announces a certified e-invoicing mandate.
