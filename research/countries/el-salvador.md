# El Salvador: Indie-Hacker Opportunity Research

Research date: 2026-10-05. Budget: small market, 10 WebSearch calls used. WebFetch was not used (the environment blocks it). Claims come from search-result summaries. Anything not confirmed in a search is marked **unverified** or **estimate**.

**Bottom line:** this is a small, dollarized market (about 6.3M people, **estimate**). The government is digitizing quickly, and it usually ships its own free tool alongside each new obligation: the free DTE invoicer, the SPU payroll system, Aduana 360 and the ITC's DFTG platform for coffee. The most visible why-now trigger, e-invoicing (DTE) and its spin-off workflows, already has a crowded field of cheap local tools. Only one opportunity is moderately interesting: the new AML law, which drew lawyers, notaries, accountants and real-estate brokers in as obligated parties from October 2025. Even that one scores only 5/10. El Salvador is better served as an add-on to a Central America / Guatemala / Costa Rica product than as a standalone market.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | Accountants / all VAT taxpayers | Turning DTE JSON files into the IVA purchase and sales books and the F07 annexes (new columns from Jan 2026) | **Too competitive** | Facxi, IVAFast, FactuDTE (a free local JSON reader) and DataTech PRO already do exactly this |
| 2 | Micro and small businesses | Issuing e-invoices (DTE). Every taxpayer must issue them by mid-2026 | **Rejected** | Hacienda's free invoicer covers small issuers; paid vendors start around $100/yr; Edicom, Softland and many local providers compete |
| 3 | Software houses / in-house ERPs | Migrating to DTE schema v2.0 (new events, validations, catalogs, contingency) by 1 Dec 2026 | **Weak opportunity** | Real deadline, but it is a one-time migration and the incumbent vendors will absorb it |
| 4 | Lawyers, notaries, accountants/auditors, real-estate brokers, precious-metal dealers | KYC files, risk-based assessment and suspicious-transaction reporting under the new AML law (Decreto 426, in force 17 Oct 2025) | **Opportunity (moderate)** | These obligated parties are new or redefined, and many are small professional practices with no compliance tooling. The UIF's reporting format is unverified |
| 5 | Coffee exporters / cooperatives | EUDR geolocation and due-diligence packages | **Poor distribution / free substitute** | About 47 exporters are already in the ITC's free DFTG platform. Deadline moved to 30 Dec 2026 (large) and 30 Jun 2027 (micro/small), and small operators now file a simplified declaration |
| 6 | Employers / payroll bureaus | Monthly ISSS and AFP contributions through the SSF's Single Payroll System (SPU) | **Rejected** | SPU is a free government system and has been mandatory since 2023. Payroll software exports to it. No 2026 trigger found |
| 7 | Importers / customs brokers | Sworn declaration on forced and child labour in DUCA filings (from 1 Jun 2026); DUCA simplification | **Rejected** | It is a field inside the DUCA, filed through the brokers' existing systems, plus the DGA's own Aduana 360 app (May 2026). No separate workflow |
| 8 | Pharmacies | Controlled-drug books and DNM controlled prescriptions | **Rejected** | The DNM already runs online controlled prescriptions and reviews the books once a year. Pharmacies were removed from the AML list. Low frequency, government tool in place |

---

## Opportunity: AML compliance kit for newly obligated professionals (lawyers, notaries, accountants, real-estate brokers)

**Industry:**
Legal and notarial practices, accounting/audit firms, real-estate intermediaries, precious-metal dealers.

**Buyer:**
The managing partner of a small law or notary office or an accounting firm, or the owner of a real-estate brokerage. The law requires each obligated party to appoint a compliance officer, and that person is the day-to-day user.

**Trigger / Why now:**
The *Ley Especial para la Prevención, Control y Sanción del Lavado de Activos, Financiamiento del Terrorismo y de la Proliferación de Armas de Destrucción Masiva* (Decreto 426) took effect on 17 Oct 2025 and replaced the 1998 law. It cuts the list of obligated sectors from 20 to 10, adds lawyers and bitcoin/virtual-asset providers, and requires a risk-based approach: internal controls, customer identification and suspicious-transaction reports. The Supreme Court of Justice (CSJ) supervises lawyers and notaries. Firms were still publishing explainers in Feb 2026, which suggests implementation is still under way.

**Current workflow (inferred; not confirmed by interviews):**
1. Collect the client's ID (DUI/NIT), proof of address, and the source of funds for the transaction, by email or WhatsApp or on paper.
2. Fill in a Word or Excel customer due-diligence (CDD) form and an ad-hoc risk matrix. Check PEP and sanctions lists by hand.
3. Keep the file for each notarial deed or property sale. Decide by hand whether to report it to the UIF.
4. Rebuild the evidence when the CSJ or the UIF supervises or asks for information.

**Pain:**
The obligation is mandatory, applies to every transaction, and is new to small practices that have never run a compliance program. Firms are publishing explainers on the new obligations, such as Aguirre Arias y Asociados in Feb 2026 and an EY tax alert. Penalties and the UIF's exact report format are **unverified**.

**Existing solutions:**
Compliance consultants and law firms that sell manuals and training (substitute). Banking AML suites from LatAm vendors aimed at SSF-supervised banks and cooperatives; specific products in El Salvador are **unverified**. Generic global KYC/PEP screening APIs. Excel templates. I found no product built for Salvadoran notaries or real-estate brokers in the searches I ran, but this diligence is thin.

**The gap:**
A per-transaction CDD file for a deed or property sale, written to the new law's risk-based requirements, sized and priced for a practice of one to five people. It would also produce a ready-made evidence pack for CSJ or UIF supervision.

**Possible product:**
A web workspace in Spanish. For each deed or sale it runs a guided CDD questionnaire, collects documents by link, screens for PEPs and sanctions, scores risk with a configurable matrix, and gives a "report / don't report" decision log with an exportable file. Templates for the compliance manual come built in.

**MVP:**
A client intake link, a CDD checklist, a risk score, PEP and sanctions screening against public lists (OFAC/UN), and a PDF file pack for each transaction. Built for notaries first.

**Pricing hypothesis:**
$25–60/month per practice (**estimate**; local professional-services price levels are low). Possibly per transaction ($2–5) for occasional users.

**How to find first customers:**
The CSJ's public register of authorized lawyers and notaries; the professional associations, including the Instituto Salvadoreño de Contadores Públicos (ISCP), which is already active on tax updates; real-estate associations; partnerships with the compliance consultants who are running training on the new law.

**Risks:**
Enforcement on small practices may be weak, so nobody buys until there is a supervisory push. The market is small: the number of active notaries and brokers is **unverified**, probably a few thousand. A consultant can bundle an Excel kit cheaply. There may be no UIF API, so reports would still be filed by hand.

**Kill condition:**
Interviews show that the CSJ and the UIF are not supervising lawyers, notaries or brokers in practice, or that the UIF supplies a free portal that covers CDD as well as reporting.

**Score:** 5/10

**Sources:**
- Text of Decreto 426 (SSF, 2026): https://ssf.gob.sv/wp-content/uploads/2026/01/Ley-Especial-para-la-Prevencion-Control-y-Sancion-del-Lavado-de-Activos-Financiamiento-del-Terrorismo-y-de-la-Proliferacion-de-Armas-de-Destruccion-Masiva.pdf
- Asamblea Legislativa decree: https://www.asamblea.gob.sv/sites/default/files/documents/decretos/99292FE3-90E2-4084-95A1-A034902EE904.pdf
- EY tax alert: https://www.ey.com/es_ce/technical/tax/tax-alerts/el-salvador---nueva-ley-especial-para-la-prevencion--control-y-s
- Changes (20→10 sectors; lawyers and bitcoin providers added): https://diario.elmundo.sv/politica/asamblea-aprueba-nueva-ley-contra-el-lavado-de-dinero-cuales-son-los-cambios
- Risk-based approach analysis: https://lexlatin.com/opinion/ley-lavado-activos-el-salvador-enfoque-basado-riesgos
- Firm explainer (Feb 2026): https://aguirreariasyasociados.com/2026/02/06/%F0%9F%93%A2-nueva-ley-fortalece-la-prevencion-del-lavado-de-activos-en-el-salvador/

---

## Opportunity: DTE schema v2.0 compliance validator / migration kit for small software houses

**Industry:**
Local software developers and businesses with in-house or custom invoicing and ERP systems that transmit DTEs directly.

**Buyer:**
The lead developer or owner of a small local software house that maintains a POS or ERP; the IT manager of a mid-size firm that integrates its own systems.

**Trigger / Why now:**
Hacienda published DTE compliance regulations v2.0, with new electronic events, changed structure and validations, new catalogs and a revised contingency scheme. Systems must be adapted before 1 Dec 2026. Hacienda has registered about 84,500 DTE issuers.

**Current workflow:**
1. Read the v2.0 PDF regulations and JSON schemas.
2. Hand-code the changes and test them against Hacienda's test environment.
3. Debug rejections one at a time.

**Pain:**
A hard deadline and rejected documents, which stop invoicing. But this is a one-time migration and the frequency is low.

**Existing solutions:**
Large providers (Edicom, Softland, Sovos) and the local providers update their own platforms. Hacienda supplies the schemas and a test environment. Free JSON readers such as FactuDTE.

**The gap:**
A hosted validator for v2.0 JSON plus a contingency/event simulator for developers who maintain their own integration (**hypothesis**).

**Possible product:**
Paste or upload a DTE JSON file and get v2.0 validation with plain-Spanish error explanations. Later, a small API that sits in front of Hacienda for signing, retries and contingency.

**MVP:**
A schema and business-rule validator for the v2.0 document types.

**Pricing hypothesis:**
$20–50/month per developer, or a one-off $100–300 (**estimate**).

**How to find first customers:**
Hacienda's list of authorized DTE providers and issuers (whether it is public is **unverified**); developer Facebook groups; ISCP channels.

**Risks:**
Demand is one-time and ends after Dec 2026. Hacienda's own test environment covers most of the need. The market is tiny.

**Kill condition:**
Hacienda's test environment already returns clear, granular errors, or the main providers finish their migration early.

**Score:** 3/10

**Sources:**
- DTE v2.0 deadline (1 Dec 2026): https://edicomgroup.com/es/blog/como-es-la-factura-electronica-en-el-salvador
- Universal obligation by mid-2026; 84,518 issuers: https://www.eldiariodehoy.com/negocios/guia-para-micro-y-pequenos-empresarios-como-dar-el-salto-hacia-la-facturacion-electronica/47610/2025/

---

## Rejected after competitor research

- **DTE JSON → IVA books and F07 annexes for accountants.** This looked like the textbook "human as integration layer" case: accountants download DTE JSON files from email and rebuild the purchase and sales books, and the F07 annexes gained new columns R/S from January 2026. It was killed by an existing crowd: **Facxi** (automatic F07 annexes from DTEs), **IVAFast** (imports JSON from email or folders and produces the books and the F07), **FactuDTE** (a *free* in-browser JSON reader that generates the three official books), **DataTech PRO**, and the ISCP's free annex templates.
  Sources: https://facxi.com/anexos-f07-el-salvador ; https://ivafastsv.com/ ; https://www.factudte.net/ ; https://svdata.tech/ ; https://www.iscpelsalvador.org/modificacion-a-los-anexos-de-los-formularios-de-iva-f07-y-pago-a-cuenta-f14-a-partir-del-periodo-tributario-de-febrero-2024/
- **E-invoicing for micro businesses (mid-2026 deadline).** Killed by **Hacienda's free invoicer**, which covers issuers with fewer than 100 invoices a month and up to $10k in sales, and by paid providers starting around $100/yr. Signing certificates and transmission are also free. Source: https://diario.elmundo.sv/empresarial/facturacion-electronica-en-el-salvador-requisitos-proveedores-y-mas
- **ISSS/AFP payroll filing.** Killed by the **SSF's free Single Payroll System (SPU)**, mandatory since 2023, and by existing payroll software. Source: https://ssf.gob.sv/wp-content/uploads/2023/07/Preguntas-frecuentes-sobre-el-SPU.pdf ; https://diario.elmundo.sv/economia/bcr-aprueba-las-normas-para-crear-una-planilla-unica-de-cotizantes-de-salud-y-pensiones
- **Forced-labour sworn declaration for importers (from 1 Jun 2026).** It is a field inside the electronic DUCA, already handled by brokers' customs software and the **DGA's Aduana 360 app**. Source: https://www.ey.com/es_ce/technical/tax/tax-alerts/el-salvador-el-salvador-refuerza-control-aduanero-sobre-trabajo-forzoso-obligatorio-e-infantil-en-importaciones
- **Pharmacy controlled-drug records.** The **DNM** already runs online controlled prescriptions and reviews the books once a year. Pharmacies were removed from the AML-obligated list in 2025. Source: https://transparencia.gob.sv/institutions/dnm/documents/391222/download

## Attractive problem, poor distribution

- **EUDR traceability for Salvadoran coffee exporters and cooperatives.** The requirement is real and per-lot, but it has a free substitute and a tiny buyer base. The **ITC's Deforestation-Free Trade Gateway (DFTG)** is free and already has 47 exporters and 282 farms registered through the Salvadoran Coffee Institute (ISC) pilot. The EU postponed the deadlines again (Reg. 2025/2650) to 30 Dec 2026 for large operators and 30 Jun 2027 for micro/small, and small operators now file a simplified declaration. This is only viable as part of a regional Central American coffee traceability product, not as a standalone.
  Sources: https://elsalvadorinenglish.com/2025/10/26/how-el-salvador-is-securing-market-access-for-its-premium-coffee-in-the-eu/ ; https://dinero.com.sv/en/entrepreneurship/launch-of-the-el-salvador-coffee-business-guide-navigating-the-eudr-due-diligence-obligations/ ; https://taxnews.ey.com/news/2026-0237-eu-deforestation-regulation-application-postponed-to-30-december-2026

## Too competitive

- DTE → F07/IVA books (see above).
- DTE issuing for SMEs (Edicom, Softland, Sovos, many local providers, plus Hacienda's free tool).

## Accessibility

There is no sanctions barrier for a foreign solo founder, and the economy uses USD (no FX friction). Electronic tax and customs systems are open to authorized providers. Whether a foreign provider can be authorized as a DTE provider (PSE) is **unverified**.
