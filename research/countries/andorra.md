# Andorra: country research

**Market type:** Microstate (about 85k residents, 7 parishes). Search budget: 4 searches, all used.
**Accessibility:** Accessible. Andorra is not sanctioned, uses the euro and is outside the EU but has an EU monetary agreement. A foreign solo founder can sell SaaS there. Buyers are reachable in Catalan, Spanish and French.

**Bottom line:** This study found no viable standalone indie opportunity in Andorra. Each regulated workflow below has at most a few hundred buyers in Andorra. For any of them, Andorra is best treated as a localisation add-on to a product that already serves Spain/Catalonia or France. The two leads below are add-on modules, not standalone businesses.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / gestories | IGI (VAT) returns (forms 900/910) and annual-accounts deposit under the new General Accounting Plan | Weak lead (add-on) | Real 2025–26 trigger (new PGC, new e-deposit templates), but buyers are few (estimate: under 200 firms) and Spanish/local accounting software already covers most of it |
| Tourist rentals (HUT / EGHUT operators) | HUT registration, classification, activity upkeep, guest reporting | Weak lead (add-on) | 107 EGHUT firms / 2,358 HUTs (2025). New 2026 rule auto-cancels inactive registrations. Tiny market, and new HUT licences are frozen |
| AML obliged entities (real-estate agents, gestories, lawyers, VASPs) | KYC files, risk assessment, 10-year retention, UIFAND reporting | Rejected | Decret 46/2025 created new implementing rules, but banks use enterprise RegTech and small obliged entities are a few hundred at most. Generic KYC tools and the AML module of the Andorran Banking compliance consultants substitute (detail unverified) |
| B2B/B2G e-invoicing | Structured invoices to government via portal | Rejected | E-invoicing is optional for B2B/B2C. B2G has used the government portal since Jan 2025, and B2Brouter already serves Andorra |
| Public administration procedures | Repetitive e-tràmits filings | Rejected | Government is digitising itself (330,129 procedures in 2025, rising electronic share). No intermediary gap identified |

## Opportunities (weak; add-on only)

### Opportunity: New-PGC annual-accounts e-deposit + IGI pack for Andorran gestories

**Industry:**
Accounting firms / gestories

**Buyer:**
Owner or partner of a small Andorran gestoria or accounting firm handling dozens to hundreds of SL/SA clients

**Trigger / Why now:**
In December 2025 Andorra approved a new General Accounting Plan, with new official templates for annual accounts and statistics. Those templates are deposited electronically and separate fiscal, accounting and statistical elements. IGI returns remain monthly, quarterly or semi-annual depending on turnover (form 900 or 910 via e-tramits.ad).

**Current workflow:**
1. Keep the client's books in Spanish or local accounting software, or in spreadsheets.
2. Map the ledger to the new Andorran PGC templates by hand, then fill in the annual-accounts and statistical forms.
3. Upload the files to the government portal with a digital certificate. File the IGI 900/910 for each client and period.

**Pain:**
The new templates create a one-off remapping job, followed by an annual deposit. The IGI returns repeat each period. Evidence of manual effort is indirect: a Consell General question documented problems using the virtual tax office. That question is from an older legislature.

**Existing solutions:**
- Spanish accounting suites with Andorran localisation (vendor-specific support unverified)
- Local Andorran accounting/ERP vendors (not identified within the search budget)
- In-house Excel templates
- The government's own e-tramits forms

**The gap:**
A possible gap is a mapping layer from the trial balance to the new-PGC deposit templates and IGI boxes. It would include validation before upload. Whether local vendors already shipped this for the 2025–26 PGC change is unverified.

**Possible product:**
Upload a trial balance to get validated new-PGC annual-accounts and statistics files, plus a draft IGI return. The tool would track filing status for each client.

**MVP:**
A trial-balance CSV to new-PGC template mapper with validation rules and output in the official format.

**Pricing hypothesis:**
€30–80 per month per firm, or €15–25 per client per filing. Estimated total market below €100k ARR.

**How to find first customers:**
Andorran association of economists/accountants (Col·legi d'Economistes d'Andorra; membership list unverified), the CCIS (Cambra de Comerç), and the Andorran business directory.

**Risks:**
Very small market. The work is mostly annual. Local vendors probably updated for the new PGC. The government may provide a free filling tool.

**Kill condition:**
The main local or Spanish accounting software already outputs the new PGC deposit files, or there are fewer than about 100 firms.

**Score:** 3/10

**Sources:**
- https://www.alto.ad/business/2025/12/andorra-approves-new-general-accounting-pla
- https://ivacalculator.com/andorra/declaracion-igi-formularios/
- https://www.alto.ad/business/2026/08/andorra-public-procedures-2025-increase-electron
- https://www.consellgeneral.ad/ca/activitat-parlamentaria/control-i-impuls-de-laccio-politica-i-de-govern/preguntes/preguntes-amb-resposta-escrita/vii-legislatura-2015-2019/preguntes-amb-resposta-escrita-del-govern-presentades-per-carles-naudi-conseller-general-del-gpl-relatives-als-problemes-a-lhora-dutilitzar-loficina-virtual-de-tributs/at_download/PublicacioRespostaPDF

### Opportunity: HUT compliance module (Andorran localisation for Spanish/French tourist-rental tools)

**Industry:**
Tourist accommodation (HUT / EGHUT management companies)

**Buyer:**
Manager of an EGHUT (licensed tourist-flat management company)

**Trigger / Why now:**
In 2026 the government approved auto-cancellation of HUT registrations that are inactive for a year. The new housing law freezes new HUTs, which makes existing registrations valuable. Operators must work under Llei 16/2017 and the HUT/EGHUT regulation. Guest-registration duties to police likely apply but are unverified.

**Current workflow:**
1. Hold the HUT registration number and classification for each unit.
2. Prove ongoing activity and keep the classification valid.
3. Register guests and file statistics with the authorities (exact channel unverified).

**Pain:**
A lost registration cannot be replaced while the freeze is in place, so the downside of non-compliance is large. Monitoring the activity rule across a portfolio is manual (estimate).

**Existing solutions:**
- Spanish PMS and guest-registration tools (for example Chekin; Andorran coverage unverified)
- Avantio / Smoobu-class PMSs
- Manual spreadsheets
- Gestories

**The gap:**
A possible gap is tracking Andorra-specific registration status, activity evidence and classification deadlines for each unit. This is unverified.

**Possible product:**
A registry tracker for each unit, with activity-evidence logging and renewal and inactivity alerts. It would integrate with an existing PMS.

**MVP:**
A unit-registry tracker spreadsheet-replacement with alerts.

**Pricing hypothesis:**
€2–5 per unit per month. About 2,358 units gives an estimated maximum of under €100k ARR.

**How to find first customers:**
The government list of classified EGHUTs (107 firms) and the Andorra Turisme registry.

**Risks:**
The market is tiny, the shrinking HUT stock is policy-driven, and the product is closer to a feature than a business.

**Kill condition:**
Main PMSs already cover Andorran guest reporting, or registration status is simple enough to track in a spreadsheet.

**Score:** 2/10

**Sources:**
- https://www.alto.ad/business/2026/03/andorra-auto-cancels-inactive-tourist-housi
- https://www.altaveu.com/uploads/s1/24/34/51/7/nota-allotjaments-turistics-2025.pdf
- https://www.consellgeneral.ad/fitxers/documents/lleis-2017/llei-16-2017-general-de-l2019allotjament-turistic
- https://www.vilaweb.cat/noticies/andorra-projecte-cessio-temporal-obligatoria-pisos-buits/

## Rejected after competitor research

- **E-invoicing compliance:** Rejected. E-invoicing is optional for B2B/B2C, B2G goes through the government portal, and B2Brouter already serves Andorra. Sources: https://www.b2brouter.net/es/ca/international/andorra/, https://sovos.com/es-es/iva/reglas-de-impuestos/facturacion-electronica-en-andorra/, https://www.ccis.ad/wp-content/uploads/2024/07/Decret-296-2024-del-24-7-2024-del-Reglament-que-regula-les-obligacions-de-facturacio-1.pdf
- **AML/KYC for small obliged entities (Decret 46/2025):** Rejected. There are few buyers, banks use enterprise RegTech, and generic EU KYC SaaS tools are a substitute. Sources: https://www.consellgeneral.ad/fitxers/documents/lleis-2017/llei-14-2017-de-prevencio-i-lluita-contra-el-blanqueig-de-diners-o-valors-i-el-financament-del-terrorisme, https://www.andorranbanking.ad/wp-content/uploads/2026/07/Mapa-regulatori.pdf

## Attractive problem, poor distribution

- No Andorra-specific case. Every candidate's problem is real, but the buyer pool is too small (hundreds at most).

## Too competitive

- E-invoicing (B2Brouter, Sovos).

## Notes

- Industries were not screened in depth beyond the five above, because of the four-search microstate cap.
- Recommendation: Andorra only as a Catalan-language localisation add-on for a product already serving Spain/Catalonia, mainly for gestories and tourist-rental managers.
