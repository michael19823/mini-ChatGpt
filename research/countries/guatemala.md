# Guatemala: opportunity research

Research date: 2026-10-04. Market size: medium (about 18M people; about 310k VAT general-regime taxpayers). I used 12 searches, in Spanish and English. WebFetch was not used, so the findings come from search-result summaries. Some details are marked "unverified".

**Accessibility:** Guatemala is open. It is not under US, EU or UK sanctions, and there are no internet restrictions. Cards, PayPal and USD invoicing work. Most compliance happens through SAT systems (Agencia Virtual, FEL, customs), and a third-party vendor can only reach those systems through the client's own credentials or through files the client exports.

**Bottom line:** The real 2025–2026 trigger is SAT's forced migration from Declaraguate to Agencia Virtual with pre-filled returns. Phase 1 started in June 2026 for about 6,400 special taxpayers. Phase 2 started on 1 September 2026 for about 310k general-regime VAT taxpayers. However, the accountant tooling around FEL is already crowded. I did not find a "5,000 buyers, weak competition, simple MVP" winner in Guatemala. The best leads below are moderate and need customer interviews before anyone builds anything.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / small accounting firms | Monthly IVA/ISR filing moving to Agencia Virtual pre-filled returns; checking FEL against books against the return | Weak opportunity (5/10) | Strong 2026 trigger and many buyers, but Contaplus, SmartConta, ERP add-ons and a free open-source tool already exist |
| AML-obligated non-financial businesses (real estate, car dealers, insurance brokers, armored transport, possibly notaries) | IVE customer due diligence, cash-transaction registers, compliance-officer reporting | Weak opportunity (4–5/10) | Mandatory and recurring, but the new law adding notaries and professionals is still pending, and form details are unverified |
| Coffee exporters | EUDR geolocation and due-diligence data per lot | Rejected | The Anacafé + Enveritas + JDE Peet's national verification scheme, plus many EUDR SaaS vendors |
| Palm oil / rubber | EUDR traceability | Rejected | A few large, vertically integrated firms (GREPALMA members). Enterprise sales. |
| Air cargo consolidators / couriers | CUSCAR electronic cargo manifest (2 hours before arrival); new SAT air dispatch model 2026 | Too competitive / mature | The requirement dates from the 2000s. Local vendors (e.g. Aster "CuscarWeb") and forwarder systems cover it. |
| Agricultural exporters | MAGA/VISAR phytosanitary export certificate | Poor distribution / low leverage | The process is in person with physical inspection; e-phyto runs government to government. Only about 10.5k certificates in 9 months. |
| Employers / payroll | MINTRAB "Informe del Empleador" (AM 64-2025, now electronic); IGSS monthly payroll | Rejected | Filed once a year. Payroll and HR software and IGSS's own system already cover it. |
| Pharmacies | MSPAS/DRCPFA control of narcotics and psychotropics | Unverified / not pursued | I could not confirm a recurring electronic reporting obligation. Paper books visa'd by the regulator appear to remain. |
| Wastewater generators | MARN AG 236-2006 discharge regulation (no further extensions since 2024) | Poor distribution | Mostly municipalities. For companies, the "estudio técnico" is done by environmental consultants and lab sampling, not a SaaS workflow. |
| Government suppliers | Guatecompras bids; reform to the Contracting Law (Ley de Contrataciones) in 2025 and a new law proposed | Unverified | The reform is in motion, but I found no concrete new recurring supplier obligation |

## Opportunities

### Opportunity: Pre-filing discrepancy checker for multi-client accountants (Agencia Virtual migration)

**Industry:**  
Accounting firms / independent contadores serving SMEs

**Buyer:**  
Independent contador or small accounting firm (1–10 staff) filing monthly IVA (SAT-2237) and ISR (SAT-1311 / SAT-1361) for 20–200 client NITs

**Trigger / Why now:**  
SAT is retiring Declaraguate. From 2 June 2026, about 6,400 special taxpayers must file only in Agencia Virtual. From 1 September 2026, 310,499 general-regime VAT taxpayers must do the same, starting with the August 2026 returns. Returns are pre-filled from FEL data, and the system validates them automatically for inconsistencies. Any mismatch between the client's books, FEL and the pre-filled return becomes visible to SAT immediately.

**Current workflow:**  
1. The accountant logs into each client's Agencia Virtual account, or uses their accountant link, and exports FEL issued and received documents.
2. They reconcile those in Excel against the client's purchase and sales book, retention certificates, and invoices from suppliers that were cancelled or are missing.
3. They compare the result with SAT's pre-filled SAT-2237 or SAT-1311 and adjust or justify the differences.
4. They file, then repeat for each client every month.

**Pain:**  
Search results describe mismatches between the books, FEL and the declarations as "the most common audit trigger". The migration forces about 310k taxpayers, mostly served by accountants, onto a new interface within one quarter. Pre-filling moves the work from typing figures to defending differences.

**Existing solutions:**  
- SAT's own pre-filled returns and validation (free).
- Contaplus: 21 years in the market and over 30M FEL processed.
- SmartConta, a Guatemala accounting ERP.
- Softland and Business Central / Odoo localizations, e.g. the Odoo app "ktx_satgt_reports" and AlfaPeople's Business Central localization.
- declara-gt, a free MIT-licensed tool that imports FEL issued and received from Agencia Virtual and has a multi-client mode for accountants.
- FEL certifiers' reporting portals (e.g. INFILE, Digifact; I did not verify their feature depth).

**The gap:**  
This is possibly a dashboard showing the exceptions across a portfolio. It would cover all clients' FEL, the books and SAT's pre-filled figures, plus a per-client list of differences with reasons: a supplier invoice cancelled after month-end, an unapplied retention certificate, wrong goods/services classification. The ERPs work one company at a time, and the free tool calculates rather than reconciles. **I have not verified whether Contaplus already does this.**

**Possible product:**  
The accountant uploads each client's monthly FEL XML/CSV export and their books. The tool shows a portfolio-wide "ready to file / needs attention" board, with each difference explained against SAT's pre-filled values.

**MVP:**  
CSV/XML import of FEL received and issued, plus the client's purchase/sales book (Excel). It produces a per-client list of differences and the expected SAT-2237 lines. There is no scraping of SAT.

**Pricing hypothesis:**  
US$25–60/month per accountant (Q200–450), or about US$1 per client NIT per month. Willingness to pay is limited: local accounting software is cheap and a free tool exists.

**How to find first customers:**  
- Colegio de Contadores Públicos y Auditores de Guatemala and the Instituto Guatemalteco de Contadores Públicos y Auditores (membership lists not verified).
- Accountant Facebook groups and SAT migration webinars.
- Universities' CPA alumni networks.

**Risks:**  
- SAT keeps improving its validation and pre-filling, which shrinks the gap.
- Incumbents add the same feature.
- Getting data requires credentials or a manual export from each client.
- Low price ceiling.

**Kill condition:**  
If 5 of 10 interviewed accountants say Contaplus, SmartConta or SAT pre-filling already shows them the differences, or that the migration added under 1 hour per client per month.

**Score:** 5/10

**Sources:**  
- https://emisorasunidas.com/nacional/2026/08/31/sat-controles-tributarios-migracion-formularios-agencia-virtual/
- https://softland.com/gt/erp-guatemala-sat-declaraguate-agencia-virtual/
- https://livinginguatemala.com/es/tramites/declaraguate-fin-migracion-agencia-virtual/
- https://www.g-talent.net/blogs/finanzas-administracion/factura-electronica-fel-guatemala-2026-sat-planilla-iva
- https://github.com/HEMBAT/declara-gt
- https://micontaplus.com/
- https://www.smartconta.app/
- https://apps.odoo.com/apps/modules/19.0/ktx_satgt_reports
- https://dca.gob.gt/noticias-guatemala-diario-centro-america/contadores-podran-darse-de-baja-en-la-agencia-virtual/

### Opportunity: AML compliance kit for IVE-obligated non-financial businesses

**Industry:**  
Real estate brokers and developers, car dealers, insurance brokers, art and antiques dealers, armored transport. If the pending law passes: notaries, legal and economic professionals, and betting and lottery operators.

**Buyer:**  
Owner or designated compliance officer ("oficial de cumplimiento") at a small obligated business

**Trigger / Why now:**  
- IVE (Intendencia de Verificación Especial, the financial intelligence unit) already lists non-financial obligated persons.
- A legislative initiative would add virtual-asset providers, notaries, university professionals giving legal or economic services, and bingo, lottery and betting companies.
- AML reports rose in March 2026 (Infobae, April 2026).
- **The timing depends on the law passing. Its status as of October 2026 is unverified.**

**Current workflow (partly unverified):**  
1. The business collects customer identification and fills IVE customer-onboarding forms on paper or PDF.
2. It keeps a register of cash transactions above the threshold and reports to IVE on schedule (form names and frequency unverified).
3. It screens customers against lists and keeps records for 5 years.
4. The compliance officer prepares unusual-transaction reports and training evidence.

**Pain:**  
- The obligation is mandatory, with sanctions and IVE supervision.
- Small dealers and brokers have no compliance staff.
- Notaries would face this for the first time if the law passes.

**Existing solutions:**  
- Bank-grade AML suites (enterprise).
- Local compliance consultants and law firms doing it manually.
- Generic KYC/list-screening SaaS from the region (specific Guatemalan DNFBP-focused products not verified).

**The gap:**  
A cheap Spanish-language tool that matches IVE's specific forms and registers for very small obligated businesses. This is unverified; it needs a look at IVE's portal and forms.

**Possible product:**  
A per-transaction onboarding form that matches IVE fields, an automatic cash register and threshold alerts, a 5-year record vault, and a generator for the periodic report.

**MVP:**  
For a single vertical (used-car dealers or real-estate brokers): IVE customer form, cash-transaction register and export in the format IVE requires.

**Pricing hypothesis:**  
US$30–80/month per business. Notaries: US$20–40/month.

**How to find first customers:**  
- IVE's registry of obligated persons, if published.
- Car-dealer and real-estate associations (e.g. the Asociación Guatemalteca de Agentes de Bienes Raíces; not verified).
- The Colegio de Abogados y Notarios, if the law passes.

**Risks:**  
- The law may stall.
- IVE may offer its own electronic forms.
- Enforcement on small DNFBPs may be weak, which lowers willingness to pay.
- Data-sensitivity concerns.

**Kill condition:**  
If the expansion law is not approved, or IVE's reporting is already a simple online form with low volume per obligated business.

**Score:** 4/10

**Sources:**  
- https://www.infobae.com/guatemala/2026/04/28/guatemala-las-denuncias-por-lavado-de-dinero-y-financiamiento-del-terrorismo-registraron-un-aumento-en-marzo-de-2026/
- https://www.prensalibre.com/?p=25505810
- https://oas.org/cicaddocs/Document.aspx?Id=5835

## Rejected after competitor research

- **EUDR traceability for coffee exporters:**
  - Anacafé signed a national scheme with Enveritas and JDE Peet's to verify deforestation-free coffee. Anacafé also runs its own GIS geolocation of production units.
  - Many EUDR SaaS vendors are listed in the COSA EUDR Central America provider database (Coolx, Koltiva-type platforms, osapiens, and others).
  - Timing has also slipped: as I understand it, the EU postponed application again to Dec 2026 for large operators and Jun 2027 for micro and small ones. Verify this.
  - Sources: https://www.anacafe.org/Anacafe-JDEPeets-Enveritas/ , https://eudrcentralamerica.thecosa.org/investigacion/
- **EUDR for palm oil / rubber:** A handful of large integrated producers (GREPALMA) buy enterprise tools such as osapiens. This is not a solo-founder market. Source: https://es.mongabay.com/2024/12/guatemala-palma-aceite-se-expande-pais-se-enfrenta-reto-cumplir-ley-contra-deforestacion-union-europea/
- **CUSCAR cargo manifest / air dispatch model:**
  - Transmission has been mandatory for years. Local vendors such as Aster CuscarWeb already serve couriers and consolidators.
  - The new 2026 air dispatch model is SAT-built.
  - Sources: https://agn.gt/sat-nuevo-modelo-de-despacho-aereo-de-mercancias-sera-digital/ , https://courier.aster.com.gt/cuscarweb3/index.php
- **Informe del Empleador (MINTRAB AM 64-2025):** It went fully electronic in 2025, but it is annual and HR/payroll software covers it. Source: https://agn.gt/instan-a-patronos-a-entregar-informe-del-empleador-y-nomina-de-trabajadores

## Attractive problem, poor distribution

- **Phytosanitary export certificates (MAGA/VISAR):** Inspection is physical and certificates are issued in person; e-phyto runs government to government. Software has little to act on. Source: https://agn.gt/maga-fortalece-las-exportaciones-agricolas-con-mas-de-10-mil-certificados-fitosanitarios-emitidos/embed/
- **MARN wastewater regulation (AG 236-2006):** No more extensions since 2024. The burden falls mainly on municipalities (procurement) and on environmental consultants and labs. Source: https://agn.gt/ministra-de-ambiente-rescatar-nuestros-rios-no-debe-ser-una-batalla-politica/

## Too competitive

- **FEL e-invoicing itself:** There are many certified FEL providers, plus SAT's free FEL app with more than 500k users.
- **Accounting and FEL tools for contadores:** Contaplus, SmartConta, Softland, Odoo and Business Central localizations, and the free declara-gt. This is why the opportunity above scores only 5.

## Not verified / dropped

- **Pharmacy reporting of controlled substances (MSPAS DRCPFA, Technical Standard 32-2020):** I could not confirm a recurring electronic report.
- **Guatecompras / Contracting Law reform:** No concrete new recurring obligation for suppliers found.
