# Monaco: country research

**Market type:** Microstate (about 2 km², population around 38,000 to 39,000). Search budget was 4 (microstate rule), and all 4 were used.
**Accessibility:** Fully accessible to a foreign solo founder. There are no sanctions, the euro is the currency, it is in the SEPA payment area, and French is the business language. Monaco uses French VAT under the 1963 Franco-Monegasque convention.
**Bottom line:** **Monaco does not support a viable standalone opportunity.** It has very few buyers in each vertical, big firms and consultants (KPMG, CMS, local compliance boutiques) dominate, and most of its recurring compliance either follows the French regime or is an annual AMSF filing. Monaco works best as an **add-on to a French product**: (a) AML/CFT compliance tools for real-estate agents and other designated non-financial businesses (DNFBPs), and (b) French e-invoicing (Sept 2026 / Sept 2027) for Monaco firms registered at the SIE of Menton.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Real-estate agencies | AML/CFT-P-C (Law 1.362): KYC, risk classification, AMSF STRIX annual questionnaire, suspicious-activity reports | Weak, add-on only | Real and enforced (AMSF sanction on an agency in Nov 2025, Bill 271 reform filed Sept 2025), but there are only about a few hundred buyers (estimate). KPMG VigiLAB and consultants already serve this, and the questionnaire is annual. |
| Company service providers / family offices / accountants (DNFBPs) | STRIX questionnaire data gathering from scattered systems | Weak, add-on only | KPMG says data is "non-centralised" across IT systems, which is a real pain. The buyer pool is tiny and served by Big-4 and law firms. |
| Construction / trades with jobs in France | French e-invoicing and e-reporting from Sept 2026 for Monaco firms registered at the SIE of Menton | Weak, add-on only | Cross-border rules are confusing (e-invoicing, e-reporting, or out of scope), but French certified platforms (PDPs) and accountants absorb this. The Monaco-specific slice is small. |
| General SMEs | Declaration of service exchanges (DES) / VAT on services to the EU | Rejected | Handled by accountants and French tax tooling. Low frequency and few filers. |
| Yachting / superyacht services | Crew and vessel compliance | Not researched in depth (budget) | Probably global yacht-management SaaS territory rather than Monaco-specific. Unverified. |

## Opportunities (weak; listed for completeness)

### Opportunity: STRIX-ready AML/CFT register for Monaco real-estate agents and small DNFBPs

**Industry:**
Real estate (sales, plus rentals of €10,000 per month or more), company service providers, small family offices

**Buyer:**
Owner or compliance officer (responsable LCB-FT) of an independent Monaco real-estate agency or small corporate-services firm

**Trigger / Why now:**
The AMSF is enforcing actively: it published a sanction decision against a real-estate agency on 18 Nov 2025 and other sanctions in 2025. Bill 271, filed 24 Sept 2025, reforms the real-estate professions and tightens AML transparency. The STRIX questionnaire is due every year.

**Current workflow:**
1. The agent collects ID, beneficial-owner and source-of-funds documents by email or paper for each buyer, seller or tenant.
2. The agent risk-scores clients in a spreadsheet, or not at all.
3. Once a year, staff rebuild the quantitative data for the STRIX questionnaire (client counts, risk levels, transactions, PEPs) from scattered files.
4. The agent pays a consultant for help, or risks findings at an AMSF inspection.

**Pain:**
Real but annual. KPMG Monaco says STRIX data must come from "various and often non-centralised sources". Sanctions are published, which also damages reputation.

**Existing solutions:**
KPMG Monaco VigiLAB (an AML compliance tool built around STRIX), KPMG/CMS/local compliance consultants, generic KYC vendors (for example Didit, LexisNexis screening), and French real-estate AML tools (unverified for Monaco fit).

**The gap:**
A cheap, self-serve per-file AML register whose fields map directly to the STRIX questionnaire, so the annual return becomes an export. The key question is whether VigiLAB already covers small agencies at a low price; this was not verified.

**Possible product:**
A per-transaction AML file (KYC checklist, beneficial owner, risk score, retained evidence) for Monaco agents, with a one-click STRIX data summary.

**MVP:**
A form-based client file with Law 1.362 checklists, a risk matrix, and an annual STRIX figures report.

**Pricing hypothesis:**
€49–99 per month per agency (estimate).

**How to find first customers:**
The Chambre Immobilière Monégasque member list, the government list of licensed real-estate professionals (unverified availability), and AMSF events.

**Risks:**
The market is tiny (an estimated 150–250 agencies, unverified). Annual frequency. Relationships with Big-4 and law firms run deep. Bill 271 could change the requirements.

**Kill condition:**
VigiLAB or a consultant bundle already prices at or below €100 per month for small agencies, or fewer than about 100 reachable agencies.

**Score:** 4/10 (only as a Monaco module of a French real-estate AML product)

**Sources:**
- https://kpmg.com/mc/fr/home/newsletters/newsletters-2025-no6/kpmg-monaco_newsletter-2025-no6_questionnaire_annuel_strix_.html
- https://assets.kpmg.com/content/dam/kpmg/mc/newsletters/KPMG-Monaco-Newsletter-2024-No1-LUTTE-ANTI-BLANCHIMENT-Synthese-obligations-annuelles.pdf
- https://cms.law/en/mco/publication/cmscoop-decision-de-sanction-de-l-amsf-a-l-encontre-d-un-agent-immobilier
- https://cms.law/fr/mco/publication/cmscoop-proposition-de-loi-n-271-sur-la-reforme-des-professions-immobilieres
- https://rosemont-int.com/article/news/monaco-aml-enforcement-three-recent-amsf-sanctions-highlight-emerging-supervisory-priorities

### Opportunity: Franco-Monegasque e-invoicing / e-reporting scope router for Monaco contractors

**Industry:**
Construction and trades and service SMEs based in Monaco with work in France

**Buyer:**
Managing director or bookkeeper of a Monaco SME, or the Monaco accounting firm that serves it

**Trigger / Why now:**
The French e-invoicing reform: from 1 Sept 2026 all firms must be able to receive e-invoices, and SMEs must issue them from 1 Sept 2027. Whether a Monaco firm falls under e-invoicing, e-reporting or neither depends on its registration at the SIE of Menton and on the type of transaction.

**Current workflow:**
1. The accountant works out each client's French status (SIE Menton registration or not, French site, reverse charge).
2. The accountant picks a PDP or routes the data to the French partner for e-reporting.
3. Invoices are handled case by case.

**Pain:**
Confusion about which regime applies (described in compliance-firm guides). The work is recurring per invoice once in scope.

**Existing solutions:**
French PDPs (Yooz and others), accounting-firm tools, Monaco compliance consultants (for example Mathez Compliance).

**The gap:**
Monaco-specific scope classification. Once a firm is classified, any French PDP handles the invoices.

**Possible product:**
A scoping questionnaire plus a per-invoice classification layer in front of a French PDP.

**MVP:**
A rules-engine checker for accountants.

**Pricing hypothesis:**
€20–50 per month per client company through accountants (estimate).

**How to find first customers:**
Monaco accounting firms (Ordre des experts-comptables de Monaco) and the Fédération des Entreprises Monégasques.

**Risks:**
This is mostly a one-time classification. PDPs and accountants will absorb it, and the market is tiny.

**Kill condition:**
French PDPs add Monaco/SIE Menton handling, which is likely.

**Score:** 2/10

**Sources:**
- https://www.mathez-compliance.com/?p=8689
- https://www.mathez-compliance.com/?p=8280
- https://www.superindep.fr/blog/2024/comment-marche-tva-a-monaco/

## Rejected after competitor research
- **Monaco e-invoicing compliance as a standalone product:** French PDPs (Yooz and other certified platforms) and local accountants already cover it. The Monaco-specific part is a one-time scoping question.
- **DES / VAT-on-services filings:** handled by accountants and the French tax portal. Low frequency (KPMG Monaco DES note).

## Attractive problem, poor distribution
- AML/CFT STRIX annual data gathering for DNFBPs: the pain is real, but there are only a few hundred buyers, they are reached mostly through Big-4 and law-firm relationships, and the task is annual.

## Too competitive
- Generic KYC / AML screening for Monaco professionals (LexisNexis, KPMG VigiLAB, many KYC vendors).

## Note
Monaco could be served as an add-on to a France-focused real-estate AML or e-invoicing product. It does not support a standalone indie business.
