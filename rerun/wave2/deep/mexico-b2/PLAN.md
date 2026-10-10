# Mexico: ICSOE/SISUB workbench for REPSE contractors and their accountants — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the laws, the IMSS and INFONAVIT rules, filing channels, enforcement data from the IMSS public lists, and 78 testable product requirements.
- [02 Market and competition](02-market-and-competition.md): buyer counts from IMSS's own filing lists and INEGI, prices, competitors and channels.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, security, the agent build plan and the build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, the 90-day launch, payments, company setup, the 36-month model and kill criteria.

The section files hold the full sources. This page reconciles them where they disagree and gives one plan. Key source links are repeated here. "My estimate" marks numbers derived on this page. "(unverified)" marks claims no file could confirm. Money is in Mexican pesos (MXN). USD uses about MXN 18 per USD (unverified rate). Prices are net of 16% IVA (Mexican VAT) unless stated.

---

## 1. Decision in one page

**Verdict: maybe. Worth a cheap, time-boxed test aimed at the January 2027 filing window. Not worth more than about USD 10,000 and four months until accounting firms show they will pay.**

**New score: 5/10.** The re-assessment gave 6/10. Before that, the report summary gave 5/10 and the first screen 4/10.

**Why 5.**
- **Up:** the buyer pool is now counted from IMSS's own data, and it is large and stable. Payments work from abroad without a Mexican company. The build is cheap.
- **Down:** the core job (file generation) is already sold for about MXN 300 per RFC a year. The "check against IMSS's rules" pitch turned out weak. The revenue estimate fell by about half.
- **Net:** a real but modest niche. The case now rests on the work around the filing: contract register, salary reconciliation, a deadline board across clients, and the monthly evidence pack for clients. None of that has been tested with buyers yet.

**The case for it.**
- **The duty is real, recurring and the same nationwide.** Every REPSE contractor files the ICSOE with IMSS (LSS art. 15-A) and the SISUB with INFONAVIT (Ley INFONAVIT art. 29 Bis) by the 17th of January, May and September ([LSS](https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf); [LINFONAVIT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIFNVT.pdf); [IMSS Lineamientos](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf)).
- **The pool is large and stable.** IMSS's public list for Jan-Apr 2026 shows 142,661 filers. 49,705 of them reported at least one contract, and 30,491 reported contracts in each of the last four periods ([IMSS list LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); 02).
- **Lateness is common.** About a third of filers made their first filing for the period after the deadline. 34-43% of contract returns in each 2025 period were late ([LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); [LPT2025](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx); 01, 02).
- **The portals leave most of the work undone.** ICSOE contract data is typed into forms one contract at a time; only the worker list uploads as a CSV ([IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf)). SISUB takes three fragile CSV layouts and e-mails errors back later ([contadormx FAQ](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/)). Neither keeps a contract register, maps workers to contracts, reconciles salaries with SUA, or gives an accountant one view of all clients.
- **Big clients make it monthly.** Supplier portals ask for monthly evidence plus the four-monthly ICSOE/SISUB acknowledgements, and hold payment until the supplier is "green" ([AXA REPSE document](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf); [repse.org.mx](https://www.repse.org.mx/repse-portal.html)).
- **The build is simple and low-risk.** Data in, files out. No API is needed, and we never touch the e.firma: the accountant prepares as the IMSS "capturista" and the contractor signs ([IMSS guide 10](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/10-Guia-Ingreso-del-Capturista.pdf)).
- **No Mexican company is needed at launch.** Paddle is on SAT's list of registered foreign digital-service providers (RFC PML120808ITA) and charges 16% IVA in Mexico ([SAT list via SDV](https://sdv.com.mx/dof/5799037/); [Paddle tax](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for)).

**What the deep dive changed** (compared with the re-assessment at 6/10):
- **"No dedicated software" was wrong.** SIFO REPSE-Fácil keeps contracts, clients and workers for many RFCs and generates the ICSOE file and all three SISUB reports. It costs MXN 1,500 a year, VAT included, for 1-5 RFCs ([SIFO prices](https://sifo.com.mx/precios_sifo.php); [SIFO product](https://sifo.com.mx/sistema-para-repse.php)). CONTPAQi Nóminas has exported the worker part of both returns since 2022 ([CONTPAQi SISUB note](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html); [CONTPAQi ICSOE note](https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html)).
- **The IMSS inconsistency check is worth little.** IMSS's "inconsistent information" list named only 5 contractors (15 rows) for Jan-Apr 2026 ([LIIP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIP2026.xlsx)). The portal already blocks most bad data. The measurable failure is lateness and staff time, not rejected files.
- **The fear pitch is weak.** No count of ICSOE or SISUB fines actually imposed was found (unverified). A late filing made before IMSS acts is not fined (LSS art. 304-C, [LSS](https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf)). The strong lever is commercial: "your client pays you on time".
- **Better buyer numbers.** The re-assessment guessed 50,000 filers and 5,000 accounting firms. The real figures are 49,705 contract filers, 17,052 of them in the sweet spot (3 or more contracts, 6-250 workers), and 16,356 accounting establishments. Perhaps 3,000-6,000 of those file for REPSE clients (unverified guess) ([LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); [INEGI DENUE](https://www.inegi.org.mx/contenidos/masiva/denue/denue_00_54_csv.zip); 02).
- **Lower prices and revenue.** The firm price falls from the re-assessment's MXN 24,000 a year to about MXN 6,000-12,000. Year-3 revenue falls from MXN 2.3-5.4 million to about MXN 1.1-2.8 million.
- **Payments are simpler than feared.** Paddle's SAT registration settles the IVA question without a Mexican company (section 9).

**What it is worth** (04 model; founder builds with AI agents and takes no pay):

| | Low | Base | High |
|---|---|---|---|
| Paying customers at month 12 / 36 | 85 / 227 | 180 / 549 | 350 / 1,157 |
| Recurring revenue (ARR) at month 36 | MXN 1.06M (USD 59k) | MXN 2.80M (USD 155k) | MXN 6.30M (USD 350k) |
| Year-3 profit before founder pay | MXN 0.35M (USD 19.5k) | MXN 1.38M (USD 77k) | MXN 4.08M (USD 227k) |
| Peak cash need | MXN 405k (USD 22.5k) | MXN 275k (USD 15.3k) | MXN 196k (USD 10.9k) |

- 02's independent estimate puts the base at about MXN 2.2M ARR. Read the base as **MXN 2.2-2.8M (USD 120k-155k)**.
- Plan cash of **MXN 300,000-450,000 (USD 17k-25k)**. That covers a slower start, the upper end of the build budget, or founder pay from year 2.
- At best a solid one-to-three-person business. Not a venture. No second country within 36 months.

**Key conditions.**
1. By 1 Nov 2026, at least 5 of 20 accounting firms interviewed say they would pay about MXN 6,000 a year for 15 client RFCs, knowing that SIFO and CONTPAQi exist.
2. On pilots' real May-Aug 2026 data, the tool cuts preparation from about 12 hours a period ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)) to under 1 hour per RFC, and catches real errors.
3. The current SISUB layouts are in hand, and the INFONAVIT portal works. It was suspended from 27 Mar 2026 ([Tax Today](https://www.taxtodaymexico.com/infonavit-suspende-temporalmente-el-portal-empresarial/)) and was reportedly back from June 2026 (one press source, unverified) ([El Cronista](https://www.cronista.com/mexico/actualidad-mx/nuevo-tramite-del-infonavit-para-patrones-en-todo-el-pais-los-avisos-de-credito-ahora-se-gestionan-en-tiempo-real/)).
4. Accountants accept Paddle's receipt instead of a Mexican "factura" (CFDI), or a CONTPAQi distributor resells with its own CFDI.
5. Someone gives same-day Spanish support in the three deadline weeks.

**What to do first** (12 Oct-1 Nov 2026, about MXN 40,000 / USD 2,200 of cash):
1. Interview 20 accountants who file for REPSE clients. Collect 5-10 anonymised past-period datasets.
2. Buy a SIFO licence (MXN 1,500) to see exactly what it does. Ask CONTPAQi and Aspel support about their roadmaps.
3. Build the 3-week MVP in parallel with agents, on synthetic and anonymised data.
4. Hold the lawyer, tax opinion and security test (about MXN 95,000-190,000) until the 1 Nov gate is passed (section 13).

---

## 2. Why now: the law and enforcement

**The duty is not new.** It dates from the outsourcing reform of 23 Apr 2021 and has not changed since ([LSS](https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf); [LINFONAVIT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIFNVT.pdf)). "Why now" rests on four other things:
- **The filings keep changing.** INFONAVIT changed the SISUB layouts in Dec 2023 and again in its June 2026 guide. The June guide added a "datos continuos" report and says amounts must match SUA/SIPARE ([contadormx, Jul 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
- **The portals are fragile.** INFONAVIT's employer portal, which hosts SISUB, was suspended from 27 Mar 2026 "until further notice" ([Tax Today](https://www.taxtodaymexico.com/infonavit-suspende-temporalmente-el-portal-empresarial/)). BHR advised that the duty continued during the suspension ([BHR, Apr 2026](https://www.bhrmx.com/wp-content/uploads/2026/04/Bolet%C3%ADn-INFONAVIT-suspende-su-Portal-Empresarial-implicaciones-clave-para-las-empresas-.pdf)). One press note says services came back in June 2026 (unverified) ([El Cronista](https://www.cronista.com/mexico/actualidad-mx/nuevo-tramite-del-infonavit-para-patrones-en-todo-el-pais-los-avisos-de-credito-ahora-se-gestionan-en-tiempo-real/)). In Sep 2022 the SISUB upload also failed near the deadline ([IDC](https://idconline.mx/seguridad-social/2022/09/19/sisub-presenta-problemas-de-ultima-hora)).
- **Enforcement is by data matching.** IMSS publishes every filing in Excel and a list of inconsistent filings ([IMSS public list](https://www.imss.gob.mx/icsoe/listado-publico); [IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf)). It shares data with STPS and runs warning sweeps (below).
- **The build cost has collapsed.** With AI agents, the MVP takes about 3-4 weeks and the product is sellable in about 8 weeks (section 7). That fits before the next window, 1-18 Jan 2027.

### Duties

| Duty | Deadline or frequency | Basis | Penalty (2026 UMA MXN 117.31) |
|---|---|---|---|
| **ICSOE, normal return**: every contract **started** in the period, one return per period. Parties, contract object, specialised service, dates; per worker NSS, CURP and SBC. Signed with the company e.firma | By the 17th of Jan, May and Sep; rolls to the next business day; Central Mexico time | LSS art. 15-A; Lineamientos 4-5 ([Lineamientos](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf)) | 500-2,000 UMA = MXN 58,655-234,620 (LSS art. 304-A XXII, 304-B V). Not fined if corrected spontaneously (304-C) ([LSS](https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf)) |
| **ICSOE nil return** ("Sin Información") when no contract started | Same | Lineamientos 5.6 | Treated in practice as the same fine ([BHR, Aug 2026](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)). The legal basis is arguable (unverified) |
| **ICSOE corrections**: Corrección repeats all data; Sin Efectos cancels; Actualización only in May, Sep or Jan; at most 4 complementary returns per period | Any time (Actualización only in filing months); IMSS correction requests: 10 business days | Lineamientos 5.6, 5.9, 8.1 | Uncorrected errors can count as an incorrect return |
| **SISUB**: every contract **active** in the period. Three CSV layouts (obligated party, contracts, worker detail) plus contract PDFs. Pay and contributions per worker per two-month block (bimester). One file set per RFC through the main employer number (NRP) | By the 17th of Jan, May and Sep | LINFONAVIT art. 29 Bis ([LINFONAVIT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIFNVT.pdf)); layouts per [contadormx](https://contadormx.com/sisub-plantilla-de-trabajadores/) | 251-300 UMA = MXN 29,445-35,193 (fines regulation art. 6 XVIII, 8 IV; official text not seen) ([IDC calendar](https://cms.idconline.mx/store/uploads/attachments/DOCUMENT_f68c94b3e9aa911480312be19518a31e.pdf)) |
| **SISUB nil types**: "Sin actividad" (nothing in force) or "Datos continuos" (old contracts still running) | Same | June 2026 SISUB guide, as reported ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)) | As SISUB |
| **REPSE registration and 3-yearly renewal**, one folio per registered service; positive SAT, IMSS and INFONAVIT standing | Renewal window 3 months before expiry | LFT art. 15; Acuerdo REPSE art. 13, 15-16 ([Acuerdo REPSE](https://dof.gob.mx/nota_detalle.php?codigo=5619148&fecha=24/05/2021)); simplified 9 Jun 2026 ([DOF](https://dof.gob.mx/nota_detalle.php?codigo=5790015&fecha=09/06/2026)) | Cancellation of REPSE. Working without REPSE: 2,000-50,000 UMA (LFT art. 1004-C, [LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf)) |
| **Monthly evidence to each client**: payroll CFDI, IMSS and INFONAVIT payment proof, withheld-tax receipt, VAT return and acknowledgement | Per payment; VAT items by the last day of the next month | LISR art. 27 fr. V; LIVA art. 5 fr. II ([LISR](https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf); [LIVA](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf)) | No direct fine on the contractor. The client loses its deduction and VAT credit, so the contractor loses the client |
| **Keep payroll and filing records** | 5 years | LSS art. 15 fr. II; CFF art. 30 ([CFF](https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf)) | LSS and CFF fines |
| **Protect workers' data** (NSS, CURP, salary) | Continuous | LFPDPPP 2025 ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)) | Up to 320,000 UMA |

**Who is obliged.** Every person or company registered in REPSE that places its own workers at a client for specialised services or works (LFT art. 13-15). There is no size threshold. 36% of Jan-Apr 2026 filers were individuals (personas físicas) ([LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); 01). The June 2026 relief for firms with up to 10 workers only cut REPSE application papers, not ICSOE or SISUB ([DOF 9 Jun 2026](https://dof.gob.mx/nota_detalle.php?codigo=5790015&fecha=09/06/2026)).

**The two returns differ, which is where errors come from.** ICSOE covers contracts that **started** in the period; SISUB covers all contracts **active** in it. ICSOE has no money; SISUB has pay and contributions per bimester. ICSOE is signed with the e.firma; SISUB is uploaded through the main NRP (01).

### Enforcement evidence

- **Lateness (the section files' own analysis of IMSS data).** 31% (Sep-Dec 2025) and 33% (Jan-Apr 2026) of contractors first filed after the deadline. 34-43% of contract returns in each 2025 period were late. 25,000-42,000 returns landed in the last three days ([LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); [LPT2025](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx); 01, 02). The two files measure different things (filers vs returns); both say about a third.
- **Inconsistencies are rare.** 15 rows (5 contractors) for Jan-Apr 2026 ([LIIP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIP2026.xlsx)).
- **Warning sweeps** of REPSE firms with non-positive IMSS standing: 34,302 (Feb 2024), 22,352 (Feb 2025), 14,455 (Jul 2025) ([Tax Today](https://www.taxtodaymexico.com/exhortan-imss-y-stps-a-34-mil-empresas-inscritas-en-repse-a-regularizarse/); [IDC](https://idconline.mx/seguridad-social/2025/02/11/imss-exhorta-a-empresas-de-servicios-especializados-a-cumplir-obligaciones); [IMSS-STPS Boletín 396/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf)).
- **Cancellations.** STPS cancelled more than 51,000 REPSE registrations in 2025. The source does not link this to ICSOE or SISUB ([Tiempo](https://www.tiempo.com.mx/economia/cancelo-stps-51-mil-inscripciones-del-repse-por-incumplimientos-septiembre-2026/)).
- **IMSS's 2026 audit plan** stresses data cross-matching ([elconta](https://elconta.mx/fiscalizacion-imss-2026-paradigma-control-digital/)).
- **No published count of fines imposed** (unverified). A transparency request to IMSS could answer it.

### Still moving

- **Electronic working-time records** become mandatory under STPS rules from 1 Jan 2027. The fine is 250-5,000 UMA ([LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf), art. 132 fr. XXXIV, 994 fr. IV Bis). It is an adjacent record for the same contractors and a possible add-on.
- **A new UMA** applies from 1 Feb 2027 ([Tax Today](https://www.taxtodaymexico.com/?p=13057)).
- **The REPSE portal** was updated in July 2026 ([IDC](https://idconline.mx/laboral/2026/07/23/actualizacion-en-portal-repse-que-cambia-para-ti)).
- **Whether ICSOE "Actualización" and "Sin Efectos" are live** is unverified; the public lists show only Normal, Sin información and Corrección (01).
- **No bill to amend LSS art. 15-A** was found (one search; unverified beyond that).

---

## 3. Customers

All counts below come from the section files' own analysis of the IMSS public lists and INEGI's business register (02), unless marked.

| Segment | Count | Confidence |
|---|---|---|
| All ICSOE filers in one period (normal, nil or correction) | 142,661 (Jan-Apr 2026); 142,000-147,000 in each of the last four periods | High |
| **Filers with at least one contract** (the real buyers) | **49,705** (33,034 companies, 16,671 individuals) | High |
| Contract filers in all four of the last periods (recurring core) | **30,491** | High |
| **Sweet spot**: 3 or more contracts and 6-250 workers | **17,052** | High |
| Many-contract firms (26 or more contracts a period) | 1,644 | High |
| Micro individuals with contracts and 1-5 workers | 7,782 | High. Price-sensitive; the accountant files |
| Nil-only filers | about 96,000 a period | High. Low value: a nil return takes minutes |
| Large filers (more than 250 workers) | 1,981 | High. Enterprise payroll; not a target |
| **Accounting establishments** (SCIAN 541211) | **16,356**; 4,226 with 6 or more staff | High for listed offices ([INEGI DENUE](https://www.inegi.org.mx/contenidos/masiva/denue/denue_00_54_csv.zip)) |
| **Accounting firms that file ICSOE/SISUB for clients** | **3,000-6,000** | Low. A guess (unverified) |
| Client firms named in returns (joint liability) | 59,200; 2,643 use 11 or more REPSE contractors | High |

**Reconciled count.** I use the IMSS-list figures. The press figure of "more than 89,000" REPSE registrants ([LexLatin](https://lexlatin.com/entrevistas/repse-mexico-nuevas-auditorias)) conflicts with 142,000 filers and is set aside. The re-assessment's 50,000 filers matches the contract-filer count. Its 5,000 accounting firms sits inside the 3,000-6,000 guess, which is still unverified and is the most important number to test.

**Who the buyer is.**
- **Primary buyer: the accounting firm or payroll bureau** that files for many REPSE clients. One sale covers many RFCs. They already buy software (CONTPAQi Nóminas at MXN 5,590-7,690 a year) ([CONTPAQi](https://www.contpaqi.com/nominas)).
- **Secondary buyer: the contractor with several contracts** that files in-house or needs the monthly evidence pack for big clients. OXXO alone named 759 REPSE contractors in Jan-Apr 2026, Bimbo 454, CFE 284 (02).
- **The typical contractor** is a small industrial-services or construction subcontractor, not a cleaning firm: 13,211 mainly maintenance and technical services, 12,817 construction, 5,879 cleaning, 2,946 security (02, keyword classification, medium confidence). The median contract filer reports 11 workers and 2 contracts; 55% have one client.
- **Many "contracts" are purchase orders.** Contract descriptions often start with an SAP order number. A maintenance firm can report dozens of short contracts a period, each with its own worker list (02).

**How they comply today.**
- Mostly through the outside accountant or payroll bureau (inferred from the many accountant courses; unverified) ([Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub); [COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas)).
- Data comes from payroll software (CONTPAQi Nóminas or Aspel NOI), SUA and payroll CFDI XML. CONTPAQi users export the worker lists but still type contract numbers and site addresses by hand ([CONTPAQi SISUB note](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html)).
- About 12 staff hours a period for a contractor with 5 clients and 18 workers: contract register 2 h, pulling CURP/NSS/SBC 3 h, reconciling with payroll and SUA 3 h, loading and fixing files 3 h, archiving 1 h ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).

**The jobs, in the buyer's words.**
1. "File ICSOE and SISUB for every client RFC, on time, first time."
2. "Know which workers worked on which contract, at which salary, without re-keying."
3. "Keep the contract register current. Most of our 'contracts' are purchase orders."
4. "Stop SISUB rejections for commas, accents and empty cells."
5. "Give each client the acknowledgements and the monthly evidence so they release payment."
6. "Never miss a nil return."
7. "Keep five years of evidence for an IMSS review."

**Pain, honestly weighed.**
- **For:** lateness (about a third); deadline crunch (tens of thousands of returns in the last three days); fragile SISUB format and repeated layout changes ([contadormx](https://contadormx.com/errores-comunes-del-sisub-al-infonavit/)); 2,870-3,809 correction returns a period (02); salary differences between payroll and IMSS are the biggest delay ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)); courses on just these two returns sell every season at MXN 798-1,190 ([COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas); [Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub)).
- **Against:** most filers get a valid filing in the end; the IMSS inconsistency list is tiny; fines appear rare; and accountants already bill this work inside a MXN 3,000-7,000 monthly retainer ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara)). No published fee for ICSOE/SISUB alone was found.

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| IMSS ICSOE portal and bulk template | Submission. Contract data typed in by hand. Worker CSV (NSS, CURP, SBC), up to 3,000 rows. The template checks format only ([IMSS template](https://www.imss.gob.mx/icsoe/plantilla)) | Free | The filing channel, not a rival. Leaves register, mapping, reconciliation, deadlines and archive undone |
| INFONAVIT SISUB module | Upload of 3 CSV layouts plus PDFs; validation later by e-mail | Free | Same. Fragile format and portal |
| **SIFO REPSE-Fácil** | Multi-RFC web tool: contracts, clients, workers (from payroll XML or by hand) linked to contracts; ICSOE Excel; three SISUB reports ([SIFO](https://sifo.com.mx/sistema-para-repse.php)) | **MXN 1,500 a year for 1-5 RFCs**, up to 7,500 for 21-25, VAT included ([SIFO prices](https://sifo.com.mx/precios_sifo.php)) | **Direct competitor and price ceiling for generation.** No reconciliation, cross-checks, deadline board or evidence pack claimed. Looks small (Gmail contact; unverified) |
| **CONTPAQi Nóminas** | Exports ICSOE worker list and SISUB worker detail to CSV since 2022. No contract register, no contract or obligated-party layouts, no checks ([CONTPAQi notes](https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html)) | Inside a MXN 5,590-7,690 a year licence ([CONTPAQi](https://www.contpaqi.com/nominas)) | **Partial incumbent and the best input.** Import its exports. The biggest threat if it adds a contract layer |
| MueveTierras | Machinery-rental ERP with ICSOE/SISUB | MXN 799-2,499 a month ([MueveTierras](https://muevetierras.mx/precios)) | Vertical niche. Shows Mexican SMEs pay for such tools by card |
| Aspel NOI (Siigo) | Payroll; SUA interface; no ICSOE/SISUB export found | MXN 4,956 a year ([Siigo](https://www.siigo.com/mx/nomina-en-linea-aspel-noi/)) | Gap or possible entrant (unverified) |
| Runa, Worky, Buk, Nomipaq, Tress | Payroll SaaS; no ICSOE/SISUB generation found; Runa publishes guides only ([Runa](https://runahr.com/mx/recursos/aspectos-legales/que-es-icsoe/)) | Runa outsourcing from MXN 250 per employee a month | Not competing today (unverified) |
| elconta.mx, contadormx.com | Free blank SISUB CSVs and layouts; paid courses ([elconta](https://elconta.mx/archivos-csv-sisub-infonavit/)) | Free | Free alternative for the SISUB format only |
| Client-side platforms: Vigía Legal, BDO, Xternall, SISE, SAP portals | Collect supplier documents, including ICSOE/SISUB acknowledgements; do not produce them ([Vigía](https://www.vigialegal.mx/precios); [BDO](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf)) | On quote, per supplier | **Complementary.** They create the demand. Later partners |
| Accountants and consultancies (Praxium, BHR, thousands of local firms) | Everything, by hand with Excel | Not published | The real "competitor" is the accountant's own time. Also the main buyer |

**Conclusion.**
- File generation is a solved, cheap commodity. We must include it but cannot charge for it.
- **Nobody does the work around it for the contractor side:** reconciling salaries and amounts with SUA/EMA, checking ICSOE against SISUB, a deadline board across 20-50 client RFCs, an acknowledgement archive, and the monthly client evidence pack. That is the opening. It is a "better and faster" opening, not a "nothing exists" opening.
- Per the owner's criteria, SIFO is a **partial and cheap** incumbent: an opening for quality, but it caps the price. CONTPAQi is partial; it is a partner more than a rival.

---

## 5. Product

### Positioning

> "ICSOE y SISUB a tiempo y sin rechazos, y el expediente REPSE que tu cliente pide cada mes."
> File on time, first time, and pass your clients' supplier portals.

- **A REPSE workbench, not a file generator.** It keeps the contract register, imports payroll data, assigns workers to contracts, reconciles, checks, and produces the ICSOE and SISUB files plus a capture sheet. It runs a deadline board across all client RFCs and keeps the acknowledgements. From v1 it builds the monthly client evidence pack.
- **Main buyer: accounting firms and payroll bureaus.** Also usable by an in-house payroll lead at a mid-size contractor.
- **It prepares and checks; the user files and signs.** It never asks for, stores or sends the e.firma. IMSS rules make its safekeeping the holder's exclusive responsibility (Lineamientos 4.2, [Lineamientos](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf)).
- **What the portals leave undone, and the product does:** contract register; worker-to-contract mapping; salary and amount reconciliation; ICSOE-SISUB parity; SISUB format cleaning; business-day deadlines across clients; acknowledgement archive; client evidence pack (01, 03).

### Users

| Role | Who | Main jobs | Rights |
|---|---|---|---|
| Firm owner | Partner of an accounting firm or payroll bureau | See all client RFCs and deadlines; assign staff; pay | Everything; billing |
| Firm staff | Payroll or social-security assistant, often the IMSS "capturista" for several contractors ([IMSS guide 9](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/9-Guia-Alta-de-usuarios.pdf)) | Import payroll; keep contracts; fix check errors; capture in ICSOE; upload SISUB; store acknowledgements | Assigned RFCs only |
| Contractor signer | Owner or legal representative; holds the e.firma | Review a one-page summary; sign in the IMSS portal; receive acknowledgements and the evidence pack | Read-only on own RFC (signer portal in v1) |
| In-house payroll lead | Direct buyer at a mid-size contractor | As firm staff, for one or a few RFCs | Own RFCs |
| Client contact | Supplier-compliance team at the contractor's client | Receive the evidence pack | No account in MVP; expiring share link in v1 |
| Founder / support | Us | Publish layout and rule updates; support | No access to worker data by default; break-glass with audit log |

### Feature map

| Area | MVP (sellable 7 Dec 2026) | v1 (Feb-Apr 2027, before the May window) | Later |
|---|---|---|---|
| Workspace | Firm workspace with many contractor RFCs; roles; two-factor login; staff per RFC | Contractor signer portal | Client-firm view |
| Contractor profile | RFC, person type, employer numbers (NRP, main flag), REPSE number, services with folio and text, dates, capturista CURPs | Read the REPSE "aviso de registro" PDF; renewal tracker (3-year term, 3-month window) | SAT, IMSS, INFONAVIT compliance-opinion tracker |
| Clients and contracts | Client register with RFC checks and postal-code address lookup. Contract register: client, stable SISUB number, object, REPSE service, dates, amount, estimated workers, sites, PDF; "started" vs "active" per period. **AI capture of purchase orders and contracts**, every field confirmed by a person | Excel bulk import; amendments | Read client PO feeds |
| Workers and salaries | Import payroll CFDI XML (zip), CONTPAQi ICSOE/SISUB exports, generic Excel; identity by NSS + CURP; salary history | Aspel NOI export; IMSS EMA/EBA Excel for SBC as IMSS sees it ([Runa](https://runahr.com/mx/recursos/nomina/descarga-de-emisiones-imss-y-confronta/)) | Payroll APIs |
| Assignment | From the CFDI "SubContratacion" node (client RFC and share of time), by department or site, or bulk; date ranges | Suggestions from earlier periods | |
| Checks | 25 rules: ICSOE I1-I12, SISUB S1-S7, cross-checks X1-X6. Errors block export; warnings do not | S8 SISUB amounts vs SUA/SIPARE; SBC vs EMA; hire and leave dates vs assignments | Learn from users' error files |
| Outputs | ICSOE worker CSV per contract (split at 3,000 rows); ICSOE capture sheet in screen order with copy buttons; three SISUB CSVs + ZIP; nil-return guide; signer summary; file hashes | Read the SISUB error file ("Logmensaje") back onto rows | Browser assistant that fills ICSOE forms while the user watches |
| Deadlines | Board of RFCs by period with statuses; business-day deadlines on Central Mexico time; e-mail reminders | Evidence-pack deadlines | WhatsApp reminders |
| Archive | Acknowledgement vault: read folio and date; tie to exact files; 5-year retention; export | IMSS public-list monitor: flag missing or mismatched filings ([IMSS list](https://www.imss.gob.mx/icsoe/listado-publico)) | |
| Evidence pack | — | Per client and month: payroll CFDI for that client's workers, IMSS/INFONAVIT payment proof, ISR and VAT acknowledgements, opinions, ICSOE/SISUB acknowledgements; index PDF + ZIP; share link | Push to client platforms if they open an API |
| Corrections | Record complementary returns by hand | Correction workflow with the 4-return counter; IMSS request tracker (10 business days) | |
| Billing | Paddle checkout in MXN; plans by RFC count | Reseller accounts | |

**Reconciling 03 and 04 on scope.** 04's plans promise the evidence pack and the SUA/SIPARE checks. 03 builds both in v1, after the January window. So:
- In December and January, sell the **firm plans and the one-period pass**, with the evidence pack and SUA reconciliation stated as "included from April 2027, before the May window".
- The founding discount (section 8) pays for that gap.
- If pilots can supply IMSS EMA Excel files, pull a simple "ICSOE SBC vs EMA" check into the MVP. Salary differences are the biggest delay in practice ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).

The full acceptance checklist is the **78 legal requirements** in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements) and the rule catalogue in [03](03-product-and-tech.md#rule-catalogue-for-the-mvp-the-products-core-ip).

### Key flows

1. **First setup of a firm** (target: under 45 minutes for 10 client RFCs). Sign up and set two-factor login. Add client RFCs from an Excel template. Add each RFC's REPSE services. Assign staff. Optionally import last period's accepted files and acknowledgements so contracts and workers carry over.
2. **Keep contracts current** (all year). Staff drop client POs or contracts (PDF) into an RFC's inbox. The app proposes client RFC, PO number, object, dates, amount and site, each shown next to its source text. Staff confirm and pick the REPSE service. The contract keeps one SISUB number for life.
3. **Prepare a period** (target: under 30 minutes per RFC after the first period). Upload the period's payroll CFDI ZIP or CONTPAQi exports. The app builds the worker list and salary history and pre-assigns workers to contracts. Staff fix gaps in an assignment grid. Checks run; errors show in plain Spanish with a link to the row. With no errors, the app generates the ICSOE capture sheet and worker CSVs (contracts **started** in the period), the three SISUB CSVs (contracts **active**), and a one-page signer summary. Files are versioned and hashed.
4. **File ICSOE** (outside the app, guided). Staff log in as capturista and pick the contractor ([IMSS guide 10](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/10-Guia-Ingreso-del-Capturista.pdf)). They copy each contract's fields from the capture sheet in screen order and upload its worker CSV ([IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf)). Rejected workers come back as an IMSS Excel; staff drop it in and the app marks them. The contractor signs ([IMSS guide 5](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/5-Guia-Firma-y-Presentacion.pdf)). Staff upload the acknowledgement; the app reads folio and date and closes the period.
5. **File SISUB** (outside the app, guided). Upload the three CSVs and the listed PDFs through the main NRP. INFONAVIT validates later and e-mails the result. If the portal is down near the deadline, the app's outage log keeps screenshots and times as evidence.
6. **Nil and continuing returns.** No contract started: ICSOE "Sin información". For SISUB the app chooses "Sin actividad" or "Datos continuos" and explains why ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
7. **Monthly evidence pack** (v1). By the 10th, the app lists what each client wants for last month. Staff drop the documents. The app checks dates and RFCs, filters payroll XML to that client's workers, and builds an index PDF and ZIP or a share link.
8. **Correction** (v1). Open a complementary return; the app shows how many of the 4 are left and sets the 10-business-day deadline for IMSS requests.

### Screens

1. Login and two-factor.
2. **Deadline board (home):** client RFCs by period, with status (no data / ready / errors / files generated / captured / signed / acknowledgement stored), adjusted deadline and days left.
3. RFC overview.
4. Clients.
5. Contracts (filter by started / active).
6. Contract inbox (AI capture): PDF on the left, proposed fields with source snippet on the right.
7. Import wizard.
8. Assignment grid: workers × contracts × bimesters.
9. Check report, grouped by rule, with source and a link to the row.
10. Outputs, with versions and hashes.
11. Filing checklist with portal links, error-file drop zone, acknowledgement upload and outage log.
12. Acknowledgement vault.
13. Settings: users, roles, billing, data export, audit log.
14. Founder admin: layout and rule versions with test status, holiday calendar, announcement banner.

All in Mexican Spanish. Desktop first, because the work happens at a desk with Excel and the portals.

---

## 6. Technical design

**Stack: one plain monolith one founder can run** (03).
- **App:** Python and Django, server-rendered pages with HTMX. Python has the right libraries for CFDI XML, Excel, CSV and PDF text.
- **Database:** PostgreSQL with row-level security on the tenant id, under the ORM's own tenant filter.
- **Jobs:** a Postgres-backed queue (Procrastinate or Django-Q2) for imports, checks, file generation and reminders. No Redis.
- **Storage:** S3-compatible object storage, encrypted, private, with short-lived download links.
- **Domain core as a pure package (`repse_core`).** Layout specs, validators, the rule engine and the generators, with no Django imports. This is the part that must be exactly right. It is tested against "golden" input and output files.
- **Layouts and rules as versioned data** (YAML, with an effective date and a source URL). When INFONAVIT changes a layout, we add a version and its golden files; the code does not change.
- **AI extraction** of contract fields from PO and contract PDFs with the Claude API, with a strict JSON schema and a person confirming every field. **No worker data goes to the model.** About USD 0.001-0.04 per document depending on the model ([Anthropic pricing](https://platform.claude.com/docs/en/about-claude/pricing); 03). Pick the model on accuracy in the pilot.
- **E-mail:** a transactional provider. **Errors and uptime:** Sentry and a monitor, with no personal data in logs. **CI:** GitHub Actions with unit, golden and end-to-end tests, dependency and secret scanning.

**Data sources** (03):

| Source | Use | Access | Note |
|---|---|---|---|
| Payroll CFDI XML (nómina complement) | Workers, NSS, CURP, salary, employer number; the "SubContratacion" node gives the client RFC and share of time | User uploads a ZIP | The node is conditional; how many payrolls fill it is unknown ([El Contribuyente](https://www.elcontribuyente.mx/2024/08/requisitos-para-deducir-cfdi-de-nomina-de-servicios-especializados-del-repse/)) |
| CONTPAQi Nóminas exports | ICSOE worker list, SISUB worker CSV, employee data | CSV and Excel | Leaves contract number and the 7 site fields to the user ([CONTPAQi](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html)) |
| IMSS EMA/EBA files (v1) | IMSS's own view of each worker's SBC | ZIP with Excel from the IMSS employer portal | Columns unverified |
| SUA | Bimester amounts (v1) | Desktop app; internal format undocumented | Use payroll exports or SUA reports, not SUA's database |
| IMSS ICSOE template and guides | Exact CSV format | Public | Header-row rule unverified ([IMSS template](https://www.imss.gob.mx/icsoe/plantilla)) |
| INFONAVIT SISUB guide and layouts | Exact SISUB columns | Inside the employer portal; INFONAVIT's site returned 503 to us | **Get the current files from a pilot in week 1** |
| IMSS public and inconsistent lists | Monitor that each filing appears correctly (v1) | Excel, monthly ([IMSS list](https://www.imss.gob.mx/icsoe/listado-publico)) | Names, not RFCs |
| Postal-code catalogue | Colonia, municipio, state | datos.gob.mx copy under the "Libre Uso MX" licence ([mexico_zipcodes](https://github.com/d3249/mexico_zipcodes)) | Correos de México's own file is for private use only |
| RFC, CURP, NSS check digits | Catch typos before upload | Offline algorithms | Confirm the NSS rule on test data (unverified) |
| UMA and holiday calendars | SBC cap; business-day deadlines | Yearly, by hand ([IDC INFONAVIT 2026 calendar](https://idconline.mx/seguridad-social/2026/01/14/calendario-infonavit-2026-dias-inhabiles)) | Stored as data with source URL |

**What we deliberately do not integrate:** the e.firma, SAT's bulk-download service, IMSS IDSE login, or any screen-scraping with the user's passwords. Each would put a tax signature or login in our hands. No ICSOE or SISUB API exists anyway (01, 03).

**Security baseline (MVP).**
1. Two-factor login for every user; session timeout; rate limits.
2. Tenant isolation in the ORM and in Postgres row-level security, with automated cross-tenant read tests on every model.
3. Field-level encryption for NSS, CURP and names, with keyed hashes for matching.
4. Append-only audit log for logins, exports, file generation, role changes and support access.
5. No e.firma and no government passwords, ever, stated in the app and onboarding e-mails to blunt phishing.
6. Daily encrypted backups kept 30 days; a restore drill before launch and each quarter.
7. External web application test before launch, then yearly.
8. Keep filed evidence 5 years by default; full export at any time; deletion within 30 days after a customer leaves.

**Privacy.**
- Mexico's new data-protection law (LFPDPPP, DOF 20 Mar 2025, reformed 14 Nov 2025) applies ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)). The customer is the "responsable" (controller); we are the "persona encargada" (processor).
- Needed: a processor agreement, our own privacy notice, a privacy-notice template for the customer's workers, breach notice to the customer without delay, and staff confidentiality.
- **Hosting abroad.** 03 reads the law's definition of "transferencia" (art. 2 fr. XX) as excluding data sent to the processor, so US hosting needs no worker consent. 01 and 04 mark this unverified. **Decision:** start in a managed US region, and get the lawyer's written view in the legal work (weeks 5-8). If the lawyer or a large customer objects, move to AWS's Mexico region in Querétaro ([AWS](https://aws.amazon.com/blogs/aws/now-open-aws-mexico-central-region)). Name every sub-processor (hosting, e-mail, Anthropic, Paddle) in the processor agreement.
- Salary data is "financial" data, which normally needs express consent, but the legal-duty and employment-relationship exceptions (art. 9) likely cover ICSOE/SISUB use (03's reading; confirm with the lawyer).
- Fines reach 320,000 UMA (about MXN 37.5 million) ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)).

**Running cost** (03's estimates, USD a month, excluding payment fees):

| Customers | Hosting and services | Paddle fees (at about MXN 500 a month average) |
|---|---|---|
| 50 | about 40-135 | about 95 |
| 300 | about 140-385 | about 570 |
| 1,000 | about 400-1,150 | about 1,900 |

Payment fees cost more than servers. Yearly billing cuts the fixed part. Gross margin is about 88-91% before support time (03).

---

## 7. Development steps

**Basis.** The founder builds with Claude Code and several agents in parallel, each on its own branch and git worktree. The founder writes the specs, reviews every merge and owns integration. No hired developers. Interfaces are frozen in week 1 so streams can run in parallel (03).

### Agent work streams (parallel from week 2; run 4-6 at once)

| Stream | Scope | Done when |
|---|---|---|
| A. Platform | Login, two-factor, tenants, roles, row-level security, audit log, settings, Paddle webhooks | Cross-tenant tests pass; two-factor forced; audit events written |
| B. Registers + AI capture | Contractor, REPSE, clients, contracts, sites, documents; postal-code lookup; PO/contract extraction and review screen | 20 sample POs extracted with measured accuracy; nothing saved without confirmation |
| C. Importers | CFDI nómina XML, CONTPAQi exports, Excel mapper, worker identity, salary history, SubContratacion | 3 real payroll sets import with no unmatched workers after review |
| D. Rules engine | Layout spec loader; NSS, CURP, RFC validators; rules I1-I12, S1-S7, X1-X6 in plain Spanish | Every rule has a passing and a failing fixture |
| E. Generators | ICSOE CSVs and capture sheet, SISUB three CSVs + ZIP, signer summary, hashing | Byte-exact match with golden files from pilots' accepted filings |
| F. Workflow + UI | Deadline board, period states, business-day calendar, reminders, filing checklist, acknowledgement reading, outage log | Time-travel test fires all reminders; folio read from 10 sample acknowledgements |
| G. QA and security | Synthetic data generator, end-to-end tests, threat model, scans, restore script | Nightly end-to-end "period" test green |

**Method.** One repository with a CLAUDE.md for conventions. A short spec file per stream. Golden files are the referee, and only the founder may change one, after the expert agrees. A review agent checks each pull request against the spec and the security list before the founder does. Real pilot data stays out of agent sessions; agents use synthetic and anonymised data only.

### Calendar (start Monday 12 Oct 2026)

03 and 04 agree on this timeline. It matches the owner's basis: MVP in about 3-4 weeks, sellable in 8.

| Week | Product, legal, pilots | Engineering | Checkpoint |
|---|---|---|---|
| 1 (12 Oct) | 8-10 accountant calls; ask each for an anonymised past period; get the current SISUB guide and layouts; hire the social-security specialist; buy SIFO | Repo, CI, hosting, skeleton; data model; layout spec format; rule interface; synthetic data | **Spec freeze** |
| 2 (19 Oct) | Specialist reviews rule catalogue and layouts; landing page and waitlist; Paddle application | Streams A-F in parallel | CI green daily |
| 3 (26 Oct) | 20 interviews done; collect 20 real POs and 3 payroll sets | First end-to-end run on a synthetic company | **1 Nov gate** (section 13) |
| 4 (2 Nov) | Specialist compares generated files with pilots' accepted filings | Integration and bug bash | **MVP feature-complete (about 6 Nov)** |
| 5 (9 Nov) | **Dry-run pilots:** 3-5 firms redo their May-Aug 2026 period in the app | Fixes; a 1,000-worker RFC performance test | Files match accepted filings, or differences explained |
| 6 (16 Nov) | Lawyer drafts terms, privacy notice and processor agreement; tax opinion starts; specialist signs off rules v1 (16 Nov is a public holiday) | Encryption, audit, backup drill, billing | **LC1:** rules and layouts signed off |
| 7 (23 Nov) | External security test (3-4 days) | Fix findings; Spanish copy pass | |
| 8 (30 Nov) | Lawyer and tax adviser sign off; pricing page; buyer FAQ; videos | Re-test; dashboards | **LC2:** legal approved; no open high or critical findings |
| 9 (7 Dec) | **Paid launch**; founding offer; pilots convert | Support rota | Sellable |
| 10-11 (14-27 Dec) | Load customers' contracts and workers; holidays from about 24 Dec | v1 starts: public-list monitor, SISUB error-file parser | |
| 1-18 Jan 2027 | **Live filing** of Sep-Dec 2026 by pilots and customers | Hot fixes only | Count on-time filings and rejections |
| Feb-Apr 2027 | Collect client evidence templates; interview customers | v1: evidence pack, EMA/SUA reconciliation, corrections, REPSE renewal tracker, signer portal | v1 live before the 1-17 May window |

**Timing risk.** Launch on 7 Dec leaves about three selling weeks before the holidays and two in January. **Fallback:** if the paid launch slips past mid-December, run the January window as a concierge service for the pilots. The founder runs the app on their data and hands back the files and capture sheets. That keeps the January learning cycle (03).

### MVP definition of done

1. For at least 3 pilot RFCs, the app's ICSOE and SISUB CSVs match what the pilot filed and IMSS/INFONAVIT accepted for May-Aug 2026, or the specialist explains and approves every difference.
2. Staff prepare a 5-contract, 20-worker RFC in under 45 minutes the first time and under 20 minutes the next period (benchmark: about 12 hours, [Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).
3. Rules I1-I12, S1-S7 and X1-X6 have passing and failing tests; IMSS's seven inconsistency types are caught.
4. AI capture: at least 90% of fields right before review on 20 real POs; nothing saved without confirmation.
5. Correct business-day deadlines for 2027: 18 Jan, 17 May, 17 Sep; reminders fire in a time-travel test.
6. Tenant isolation tests pass; two-factor forced; encryption on; a backup restored; no open high or critical security findings.
7. Terms, privacy notice and processor agreement signed off by a Mexican lawyer; rules and layouts signed off by the specialist.
8. Paddle billing works end to end in MXN.
9. At least 5 pilot firms say they will pay the planned price before the January window.

**If time slips:** drop AI capture to v1 (keep a fast manual form), then the CONTPAQi importer if pilots use CFDI XML. Never drop tenant isolation, encryption, the specialist sign-off or the security test.

### Build budget to a sellable product (cash; founder unpaid)

03 and 04 differ. 03 gives USD 6,150-15,200 but leaves out the tax opinion and trademark. 04 gives MXN 138,500 (USD 7,700) of one-off costs at single-point prices. My reconciled range:

| Item | USD low | USD high | Basis |
|---|---|---|---|
| Claude Max and extra API, 2-3 months | 400 | 1,200 | USD 100-200 a month ([noqta](https://noqta.tn/en/blog/claude-code-pricing-2026)); 03 |
| Hosting, domain, e-mail during build and pilot | 150 | 400 | 03 |
| Social-security / REPSE specialist (20-40 hours) | 900 | 2,200 | MXN 700-1,000 an hour ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara)); 04 budgets MXN 40,000 |
| Mexican lawyer: terms, privacy notice, processor agreement | 1,400 | 3,300 | MXN 25,000-60,000 (unverified) |
| Tax opinion: IVA, ISR withholding, permanent establishment | 1,100 | 1,100 | MXN 20,000 (04's estimate) |
| External security test with re-test | 2,500 | 6,000 | [7ASecurity](https://7asecurity.com/blog/2026/04/the-2026-guide-to-penetration-testing-pricing-and-scoping/); 04 budgets MXN 45,000 |
| Trademark (IMPI) | 200 | 200 | MXN 3,500 (unverified) |
| Pilot incentives | 0 | 300 | 03 |
| Contingency 15% | 1,000 | 2,200 | |
| **Total** | **about 7,700** | **about 16,900** | **Plan on about USD 10,000 (MXN 180,000)** |

Marketing and payment fees are extra (section 8). Paddle has no set-up fee ([Paddle pricing](https://www.paddle.com/pricing)).

**First-year running cash after launch** (excluding payment fees and marketing): about USD 5,300-16,000 for hosting, AI tools, the specialist's reviews of layout changes, legal updates and a yearly security re-test (03). 04's model adds a part-time Mexican support accountant on contract from January 2027 at MXN 10,000 a month in year 1 (base).

---

## 8. Go-to-market

### Pricing (reconciled)

Three files proposed three price levels:
- the re-assessment: MXN 3,600 a year per contractor and MXN 24,000 a year per firm;
- 02: MXN 2,490 per contractor and MXN 6,900 a year for a firm with 15 RFCs;
- 04: the plans below.

**I use 04's plans.** SIFO caps "generation only" at about MXN 260-300 net per RFC a year ([SIFO prices](https://sifo.com.mx/precios_sifo.php)), so the re-assessment's firm price is not credible. 04 sits close to 02 and below a CONTPAQi multi-RFC licence (MXN 7,690 a year, [CONTPAQi](https://www.contpaqi.com/nominas)).

| Plan | Who | Yearly (net) | Monthly (net) | Includes |
|---|---|---|---|---|
| **Gratis** | Nil filers (about 96,000 a period) and anyone testing | 0 | 0 | Deadline calendar and reminders for 1 RFC; nil-return checklist; SISUB CSV checker up to 25 rows. No file generation |
| **Pase de temporada** | One-off buyer in deadline panic | MXN 990 per RFC per period | — | One filing window, no evidence pack. Credited in full against a yearly plan bought within 30 days |
| **Contratista** | 1 RFC, up to 10 contracts and 150 workers | MXN 2,490 | MXN 249 | Register, imports, mapping, checks, ICSOE and SISUB files, archive; evidence pack from v1 |
| **Contratista Plus** | Maintenance or construction firm with many POs (1,644 filers have 26 or more contracts) | MXN 4,490 | MXN 449 | Unlimited contracts (fair use 500 workers), PO import, evidence pack per client |
| **Despacho 15** | Accounting firm or payroll bureau | **MXN 5,990** | MXN 599 | Up to 15 client RFCs, 3 users, multi-client deadline board |
| **Despacho 40** | Larger firm | MXN 11,900 | MXN 1,190 | Up to 40 client RFCs, 8 users; extra RFC MXN 250 a year |

- **Why these numbers.** Despacho 15 is MXN 399 per RFC a year when full: about 1.5 times SIFO, below CONTPAQi. One saved hour per client per period pays for it at an assumed MXN 300 an hour (unverified rate). Contratista is about a quarter of the staff-time cost of about MXN 10,800 a year ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)). The Pase sits next to course prices of MXN 798-1,190 ([COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas)).
- **Founding offer:** 30% off the first year for firms signing before 28 Feb 2027 (first 50 firms); 20% off for contractors. It also covers the gap until v1 ships the evidence pack.
- **Add-ons:** onboarding MXN 2,500, waived on yearly plans. "Expert review" by a partner accountant, about MXN 1,500 per RFC per period, billed by the partner (Paddle sells software only), with the partner keeping 70%.
- **Effective prices in the model** after discounts and plan mix: firms MXN 6,900 / 7,700 / 8,400 in years 1-3; contractors MXN 2,600 / 2,850 / 3,050 (04).
- **Show the total with IVA** under each net price. Accredited micro firms can complain to Profeco, and the consumer law requires the total price to be shown (LFPC art. 2 fr. I, 7 Bis, [LFPC](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPC.pdf)).

### Channels, in priority order

1. **Direct outreach to accounting firms.** Find them in INEGI's register and behind contractor names in the IMSS list. LinkedIn and e-mail, then WhatsApp. A 20-minute demo on the firm's own past-period files. Use the IMSS list for company research only; individuals' names raise data-protection questions (unverified).
2. **Accountant colleges and trainers.** The Colegio de la Contaduría Pública runs ICSOE/SISUB workshops every season ([Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub)). IMCP federates 60-61 colleges with about 21,000-24,000 members ([IMCP](https://imcp.org.mx/quienes_somos/), search snippet). COFIDE sells courses. Co-host a "file in 30 minutes" workshop 2-3 weeks before each deadline; each attendee gets one free period.
3. **Deadline-season search and SEO.** Google Ads only in the three weeks before each deadline. SEO pages for each SISUB error message. A free SISUB CSV checker as the lead magnet.
4. **CONTPAQi and Aspel distributors.** CONTPAQi has more than 6,000 business partners ([CONTPAQi, 2023](https://cdn.uc.assets.prezly.com/65d9a466-a905-4812-b5df-efce991f9d06/-/inline/no/CONTPAQi_MAR2023_Aniversario_39_VF.docx)). We import CONTPAQi's own exports, so we complement it. Offer 20% of first-year revenue for referrals, or resale where the distributor issues its own CFDI (section 9).
5. **Client-side platforms and large clients**, from month 9. 2,643 client firms use 11 or more REPSE contractors (02). Vigía Legal, BDO and Xternall collect acknowledgements but do not produce them.
6. **Sector bodies** (security, cleaning), year 2. The largest sectors, maintenance and construction, have no obvious single association (02).

**Sales motion.**
- **Contractors:** self-serve. Free tier, then the Pase or a yearly plan at Paddle checkout.
- **Accounting firms:** assisted. A 20-minute call; a free pilot run on one of their past periods showing what the tool would have caught; a 30-day trial on 3 client RFCs; a yearly plan. Target a 2-3 week cycle that lands before a deadline.
- **Support:** Spanish, by WhatsApp and e-mail. A part-time Mexican accountant on contract from January 2027. Longer hours in the 10 days before each deadline.
- **Proof points to collect:** hours saved per client per period, errors caught before filing, and on-time rates against the 34-43% late rate.

### Selling calendar

| Window | What happens | Our action |
|---|---|---|
| 1-18 Jan 2027 (17 Jan is a Sunday) | Sep-Dec 2026 period. Monthly taxes are due on the 17th too | Paid launch wave; deadline webinar; extended support |
| Feb-Apr | Companies' annual returns by 31 March; individuals' in April (LISR art. 9, 150, [LISR](https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf)). Accountants are overloaded | Quiet selling; case studies; partner deals; ship v1. Restart outreach on 20 April |
| 20 Apr-17 May 2027 | Jan-Apr period | Second wave |
| June-July | No deadline; monthly evidence packs continue | Sell the evidence pack; push yearly plans |
| 15 Aug-17 Sep 2027 | May-Aug period; 16 September is a holiday | Third wave |
| Oct-Dec | Budgets for next year | Renewals and upgrades; onboard before January; avoid 15 Dec-6 Jan |

Later deadlines: 17 Jan 2028, 17 May 2028, 18 Sep 2028 (17 Sep is a Sunday), 17 Jan, 17 May and 17 Sep 2029 (04).

### Marketing budget, year 1 (Nov 2026-Oct 2027): MXN 300,000 (about USD 16,700), plus partner commissions

| Item | MXN | Note |
|---|---|---|
| Google Ads, three deadline waves plus a low always-on budget | 90,000 | About 3,000-6,000 clicks at an assumed MXN 15-30 a click. Mexico's average is about USD 0.66 ([Merca2.0](https://www.merca20.com/?p=12486357)); B2B accounting terms likely cost more (unverified) |
| Co-branded workshops and webinars (6) | 60,000 | About MXN 10,000 each (unverified) |
| Events and founder travel (2 events, 3 trips) | 70,000 | 04's estimate |
| Content, SEO and demo videos (native Spanish editor) | 36,000 | Founder drafts with AI |
| Outreach tools (e-mail, LinkedIn Sales Navigator, WhatsApp Business API) | 24,000 | |
| Contingency | 20,000 | |
| **Total** | **300,000** | Years 2 and 3: MXN 360,000 and 400,000 |
| Partner commissions | 20% of first-year revenue on partner deals | About 6% of new bookings |

**Stage it.** Spend only the Q1 slice (MXN 90,000) until the January results are in. That keeps the low case survivable.

### First 90 days (from Monday 12 Oct 2026)

- **Days 1-21 (12 Oct-1 Nov): build and validate.**
  - Build the MVP with agents (section 7).
  - 20 accountant and 10 contractor interviews. Ask what they charge per period and what they would pay. Collect 5-10 anonymised May-Aug 2026 datasets.
  - Engage the social-security specialist. Apply to Paddle (verification can take days to weeks; unverified). Landing page and waitlist.
  - Ask CONTPAQi and Aspel whether a contract layer is on their roadmap.
  - **1 Nov gate** (section 13).
- **Days 22-56 (2 Nov-6 Dec): make it sellable.**
  - Back-test on the collected datasets and log every difference.
  - Lawyer: terms, privacy notice, processor agreement. Tax opinion. Security test by 4 Dec.
  - Paddle checkout live in MXN. Publish the "¿Me das factura?" FAQ.
  - Free SISUB checker and deadline calendar live; 10 SEO pages.
  - Pitch the Colegio (January workshop), COFIDE, 2-3 IMCP colleges and 5 CONTPAQi distributors.
- **Days 57-90 (7 Dec-9 Jan): pilots and pre-sales.**
  - Load 10-15 pilot firms with their Sep-Dec 2026 data as payroll closes.
  - Sell the founding offer from 7 to 18 December. No push from 19 Dec to 4 Jan.
  - 4-9 Jan: Google Ads; webinar no. 1 "ICSOE y SISUB sep-dic 2026 en 30 minutos" with a partner; e-mail and WhatsApp the waitlist.
- **Deadline week (11-18 Jan 2027):** support sprint; same-day answers; rejected-file escalation within 4 hours.
- **Day-90 review (22 Jan 2027):** against the milestones in section 13.

---

## 9. Payments, company and legal

### Payments: Paddle from the founder's foreign company (recommended)

- **Why Paddle.** Paddle is a merchant of record. It is on SAT's list of registered foreign digital-service providers as "Paddle.Com Market Limited", RFC PML120808ITA (cut-off 31 Aug 2026). Stripe and Lemon Squeezy are not on that list ([SAT list via SDV](https://sdv.com.mx/dof/5799037/)). Paddle charges 16% IVA to Mexican business and consumer buyers and remits it ([Paddle tax](https://www.paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for)). It prices in MXN ([Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies)).
- **Why that matters to buyers.** A Mexican buyer can credit IVA charged by a registered foreign provider using the provider's receipt instead of a CFDI (LIVA art. 18-F, [LIVA](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf)).
- **Fee:** 5% + USD 0.50 per transaction, no monthly fee ([Paddle pricing](https://www.paddle.com/pricing)). About 6% of net on a Despacho 15 yearly payment and about 9% on a MXN 249 monthly plan. The model uses 6.5% of cash.
- **Payout:** to the founder's foreign company in USD, EUR or GBP.
- **Limits:** software only, so human services (expert review) are billed by partners. OXXO cash and SPEI transfers do not seem to be offered (unverified).

**Why not Stripe directly** (the owner's other preference):
- Selling directly makes the founder's company the seller of a digital service. It must then register in Mexico's RFC within 30 days of the first sale, charge and pay IVA monthly by the 17th, file monthly information returns, and appoint a legal representative with a Mexican address and an e.firma (LIVA art. 18-D). Registration needs an apostilled deed, a sworn translation and a notarised power of attorney ([contadormx, Jun 2026](https://contadormx.com/empresas-saas-extranjeras-en-mexico-rfc-efirma-sat/)). At this scale that costs more than Paddle's extra fee.
- Stripe's own fees from a US account: 2.9% + USD 0.30, plus 1.5% for international cards and 1% for conversion; Billing 0.7%; Tax 0.5% ([Stripe pricing](https://stripe.com/pricing)).
- Stripe Managed Payments (Stripe as merchant of record) adds 3.5% and accepts Mexican buyers ([Stripe eligibility](https://docs.stripe.com/payments/managed-payments/eligibility)). Stripe is not on SAT's list, so buyers might not be able to credit the IVA (unverified). Do not use it for Mexico until that is confirmed.

**Card approvals.** A payments vendor says cross-border card payments in Mexico often clear at 50-60%, against 80% or more locally ([Nuvei](https://www.nuvei.com/posts/evaluating-payment-strategies-for-the-mexican-market-direct-acquiring-versus-cross-border-models); vendor figure, unverified). Mitigations: charge in MXN; offer PayPal and invoice payment through Paddle; push firms to yearly plans on business cards; keep the reseller route.

**Bank transfers.** An international wire costs the buyer USD 20-30 + IVA ([Banorte](https://www.banorte.com/Empresas/Internacional/Cobros-y-pagos-internacionales/Envio-de-Transferencias-Internacionales.html); [BBVA](https://www.bbva.mx/content/dam/public-web/mexico/documents/empresas/banca-electronica-y-canales/netcash/Caratula.pdf)). Offer it only on yearly invoices above about MXN 10,000.

### Buyer-side tax friction

- **"¿Me das factura?"** A foreign seller cannot issue a CFDI. A foreign invoice is deductible if it carries the seller's name, address and tax ID, the buyer's RFC, a description and the amounts (RMF rule 2.7.1.14, [Siempre al Día](https://siemprealdia.co/mexico/fiscal/deduccion-de-pagos-al-extranjero-requistios-sat/)). Make sure the buyer's RFC is on Paddle's invoice (open question). Publish a Spanish FAQ (draft in [04](04-gtm-company-finance.md#draft-buyer-faq-spanish-for-the-site)), reviewed by a tax adviser.
- **ISR withholding.** Mexican law treats payments for software use as royalties (CFF art. 15-B), with 25% withholding for non-residents (LISR art. 167) and usually 10% under a treaty ([CFF](https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf); [SDV, US treaty](https://sdv.com.mx/compendio/tratados-doble-tributacion/tratado-mexico-usa/)). Practitioners say standardised software counts as business profits under RMF rule 2.1.37, with no withholding where a treaty applies ([Contadigital](https://www.contadigital.mx/posts/gastos-pagados-a-extranjeros-son-deducibles-de-impuestos)). Paddle (UK) is the seller of record, so the UK-Mexico treaty would apply (rate unverified). **Get a written tax opinion before launch** (MXN 20,000).
- **Reseller route.** A CONTPAQi distributor or partner accounting firm buys yearly licences from us through Paddle and invoices the end client with its own CFDI, at a 20-30% margin (04 proposal). This answers the CFDI objection with no Mexican company.

### Company: no Mexican company at launch

All four files agree. Sell from the founder's foreign company through Paddle. Open a Mexican company only if one of these happens (04):
1. More than about 25% of qualified accounting-firm prospects refuse to buy without a Mexican CFDI, and the reseller route does not fix it.
2. Mexican staff must become employees.
3. A large client or platform requires a Mexican contract and CFDI for a partnership.
4. Card approvals stay below about 70%, and only local acquiring or SPEI would fix it.
5. Revenue passes about MXN 3 million a year, so the fixed cost is under 5% of revenue.

**Permanent-establishment risk.** Keep the Mexican support accountant on a support-only contract, with no authority to sign deals. Confirm in the tax opinion. Contractors in Mexico invoice the foreign company with their own CFDI; whether that is 0% IVA as an exported service is unverified.

**If a Mexican company is needed** (04):
- **Form:** an S. de R.L. de C.V. with two partners (the founder and his foreign company) ([Praxium calculator](https://praxiumconsultores.com/herramientas/calculadora-constitucion-empresa)). The online S.A.S. is free to form, but since 2026 its RFC is done in person and SAT needs each shareholder's RFC and CURP ([AMCPDF](https://amcpdf.org.mx/consideraciones-2026-para-las-sociedades-por-acciones-simplificadas-sas/)). A non-resident usually has no CURP (unverified), so the S.A.S. is not practical.
- **Steps:** name authorisation; deed before a notary (in person or by apostilled power of attorney); Registro Público de Comercio; RFC and e.firma at an in-person SAT appointment; RNIE foreign-investment registration within 40 business days ([Secretaría de Economía](https://www.economia.gob.mx/files/comunidad_negocios/registro_inversion/registro_nacional_inversiones_extranjeras_solicitud.pdf)); bank account. Allow 6-10 weeks from abroad (04's estimate).

| Set-up cost | In person (founder travels) | Remote through a law firm |
|---|---|---|
| Notary and deed | MXN 12,000-28,000 | Included |
| Registro Público de Comercio (CDMX) | MXN 2,500-9,000 | Included |
| Name authorisation | MXN 600-1,200 (the government step may be free; unverified) | Included |
| SAT RFC and e.firma | Free; MXN 0-1,500 for help | Included, but the legal representative still attends in person |
| RNIE registration | No government fee found (unverified) | Included |
| Apostille and sworn translation | MXN 5,000-15,000 (estimate) | Included |
| **Total** | **About MXN 20,000-55,000 plus travel** (third-party costs MXN 15,100-39,700 per [Praxium](https://praxiumconsultores.com/herramientas/calculadora-constitucion-empresa)) | **About MXN 70,000-160,000 (USD 3,500-8,000)** ([Global Law Experts](https://globallawexperts.com/company-formation-mexico/), search snippet) |

| Running cost | MXN a month |
|---|---|
| External accountant (monthly IVA, ISR prepayments, DIOT, e-accounting, annual return) | 3,000-7,000 ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara)) |
| Tax address / virtual office | about 2,100 ([Inmuebles24](https://www.inmuebles24.com/propiedades/clasificado/alclocin-renta-oficina-virtual-benito-juarez-2100-mxn-al-mes-146354402.html)) |
| Nominee legal representative, if the founder is not resident | 3,000-8,000 (estimate, unverified) |
| CFDI issuing | 299 + MXN 0.60 per CFDI ([Facturapi](https://www.facturapi.io/pricing)) |
| Bank fees, RNIE reports, minute book | about 1,000 (estimate) |
| **Total** | **about MXN 10,000-15,000 (USD 550-850)** |

- **Hidden requirements:** bank and SAT steps need a legal representative who is legally resident in Mexico ([Biz Latin Hub](https://www.bizlatinhub.com/es/pasos-clave-formar-empresa-mexico/), search snippet). SAT can cancel invoicing seals when it cannot find a taxpayer at a virtual office ([elconta](https://elconta.mx/riegos-sat-oficinas-virtuales-cancelar-csd/)).
- **Taxes:** 30% corporate income tax (LISR art. 9); 16% IVA monthly.
- **Model effect:** a company from month 1 adds about MXN 230,000 in year 1 and MXN 150,000 a year after, and raises the base peak cash need from MXN 275,000 to about MXN 500,000 (04).

### Legal documents and liability

- **Online contracts are valid** between merchants: acceptance by electronic means concludes the contract, and a data message satisfies written form (Código de Comercio arts. 80, 93, [CCom](https://www.diputados.gob.mx/LeyesBiblio/pdf/CCom.pdf)).
- **Two layers of terms:** Paddle's buyer terms for the sale; our Spanish licence terms for use.
- **Role clause:** we prepare and check; the customer reviews, signs with its own e.firma and files. We never handle the e.firma.
- **Liability:** cap at fees paid in the last 12 months; exclude fines, surcharges and lost client payments. Offer a narrow **"layout guarantee"**: if a portal rejects a file that passed our checks because of our error, we fix it within 4 hours in deadline week and refund that period's fee. Never promise to pay fines. Enforceability of the cap needs the lawyer's check (unverified).
- **Data protection:** processor agreement, privacy notices, sub-processor list, breach notice (section 6).
- **Governing law:** Mexican federal commercial law and Mexico City courts, unless the lawyer advises otherwise.
- **Insurance:** tech errors-and-omissions plus cyber, about MXN 15,000 a year in the founder's country (estimate, unverified).
- **Trademark:** register at IMPI in classes 9 and 42. Avoid names that use "IMSS", "INFONAVIT" or "SAT".

---

## 10. Financials

**Which model I use.** Three estimates exist:
- the re-assessment: MXN 2.3-5.4 million a year by year 3;
- 02: MXN 1.0-2.2 million (low to base);
- 04: a 36-month model with costs and cash, giving ARR of MXN 1.06 / 2.80 / 6.30 million at month 36.

I use 04's model, because it carries costs and cash. 02's base (MXN 2.2M) is 20% below 04's, so I read the base as MXN 2.2-2.8 million. The re-assessment's figures assumed MXN 24,000 per firm and are superseded.

**Main assumptions** (04; month 1 = Nov 2026, month 36 = Oct 2029; founder builds and takes no pay; no Mexican company):
- New paying firms in years 1/2/3: low 35/45/45; base 70/90/90; high 130/170/170. Base reaches about 4-7% of the 3,000-6,000 filing firms by month 36.
- New paying contractors in years 1/2/3: low 50/70/80; base 110/170/190; high 220/330/380. Base reaches about 1.1% of the 30,491 recurring contract filers.
- Renewal (base): firms 80% then 85%; contractors 60% then 72%. Only 71.7% of contract filers reported contracts again a year later, so contractors churn partly because they leave REPSE (02).
- Effective net prices (base): firms MXN 6,900 / 7,700 / 8,400; contractors MXN 2,600 / 2,850 / 3,050.
- 75% of customers pay yearly in advance. New sales follow the deadline calendar.
- Costs: AI tools MXN 5,000 a month in year 1; one-off launch MXN 138,500 in months 1-2 and a MXN 25,000 security re-test each year; hosting MXN 2,500-6,000 a month; specialist on call MXN 5,000 a month from month 4; Mexican support accountant on contract (base MXN 10,000 / 18,000 / 30,000 a month by year); foreign company admin MXN 3,000 a month; marketing MXN 300,000 / 360,000 / 400,000; payment costs 6.5%; partner commissions 6% of new bookings.

| Measure | Low | Base | High |
|---|---|---|---|
| Paying customers at month 6 / 12 / 36 | 34 / 85 / 227 | 72 / 180 / 549 | 140 / 350 / 1,157 |
| Firms / contractors at month 36 | 96 / 131 | 210 / 340 | 423 / 734 |
| ARR at month 12 / 24 / 36 (MXN) | 301k / 720k / 1.06M | 688k / 1.80M / 2.80M | 1.41M / 3.86M / 6.30M |
| ARR at month 36 (USD) | about 59k | about 155k | about 350k |
| Cash in, years 1 / 2 / 3 (MXN) | 260k / 673k / 1.02M | 594k / 1.67M / 2.68M | 1.22M / 3.58M / 6.02M |
| Costs, years 1 / 2 / 3 (MXN) | 619k / 581k / 667k | 828k / 1.01M / 1.29M | 1.04M / 1.47M / 1.94M |
| **Year-3 profit before founder pay** | **MXN 352k (USD 19.5k)** | **MXN 1.38M (USD 77k)** | **MXN 4.08M (USD 227k)** |
| Operating break-even (trailing 12 months) | month 21 (Jul 2028) | month 15 (Jan 2028) | month 12 (Oct 2027) |
| Cumulative cash positive for good | month 35 (Sep 2029) | month 19 (May 2028) | month 10 (Aug 2027) |
| Peak cash need, no founder pay | MXN 405k (Dec 2027) | MXN 275k (Jul 2027) | MXN 196k (Dec 2026) |
| Peak cash need with founder pay of MXN 60,000 a month from month 13 | MXN 1.36M, never repaid in 36 months | MXN 411k (Mar 2028), positive from May 2029 | MXN 196k |

**Honest notes on the base case.**
- It needs 16 paying firms and 25 contractors by the end of January 2027. With launch on 7 Dec and the holidays, that is about five selling weeks. Treat January's base as a stretch. The real January test is the kill line (5 firms).
- 04's one-off launch cost (MXN 138,500) is at the low end of my reconciled build budget (USD 7,700-16,900, section 7). At the high end the base peak cash rises to about MXN 440,000. Hence the plan of **MXN 300,000-450,000**.
- The firm count (3,000-6,000) is a guess. If only 2,000 firms file for clients, the base needs 10% of them by month 36. That would be hard from abroad.

**Unit economics (base, 04).**

| Measure | Accounting firm | Contractor |
|---|---|---|
| Price a year (year 2) | about MXN 7,700 | about MXN 2,850 |
| Renewal | 80%, then 85% | 60%, then 72% |
| Lifetime value | about MXN 23,000 | about MXN 6,200 |
| Fully loaded acquisition cost (year 1, blended) | about MXN 2,200 | about MXN 2,200 |
| Lifetime value / acquisition cost | about 10 | about 3 |
| Payback | under 4 months | about 10 months |

**Spend acquisition money on firms.** Let contractors come through self-serve and the deadline waves.

**Founder income.** The base pays a founder only from year 2-3. Year-3 profit before founder pay is about MXN 1.4 million (USD 77k). With founder pay of MXN 60,000 a month from month 13, the base still works; the low case never repays.

**Exit.** Likely buyers: CONTPAQi, Siigo Aspel (Siigo bought Aspel in 2022, [Accel-KKR](https://www.accel-kkr.com/siigo-empresa-colombiana-continua-su-expansion-en-america-latina-con-la-adquisicion-de-aspel-en-mexico/)), a payroll SaaS, a client-side REPSE platform, or SIFO. Small bootstrapped SaaS sells at about 2-4 times revenue ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)). On the base case that is about MXN 5.5-11 million (USD 300k-620k) (unverified multiples).

---

## 11. Regional expansion

- **No export market.** ICSOE and SISUB exist only in Mexico. The formats, portals and rules are Mexican (02). What travels is the engine (payroll import, contract-worker mapping, rule checks, deadline board) and the accountant playbook.
- **Chile** is the closest analogue: contractors get a labour and pension compliance certificate (F30-1) from the Labour Directorate, and clients use it to release payment ([Dirección del Trabajo](https://dt.gob.cl/portal/1627/w3-article-124815.html)). The market is mature and different. Not a quick second country.
- **Peru** has outsourcing rules and joint liability but no separate periodic return to automate ([La Cámara](https://lacamara.pe/reglas-basicas-sobre-la-tercerizacion-de-servicios/?print=pdf)).
- **Colombia and Central America** were not researched (unverified).
- **Do not plan a second country within 36 months.** Grow inside Mexico with neighbouring duties for the same buyers, in this order:
  1. the monthly client evidence pack and supplier-portal uploads (v1);
  2. a REPSE renewal-readiness check every three years, perhaps a MXN 1,500 one-off ([IDC](https://idconline.mx/laboral/2026/06/10/adios-trabas-del-repse-stps-facilita-la-renovacion-y-registro));
  3. electronic working-time records, mandatory from 1 Jan 2027 ([LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf), art. 132 fr. XXXIV);
  4. state payroll-tax (ISN) withholding by clients in some states ([EY ISN matrix](https://ey.com/content/dam/ey-unified-site/ey-com/es-mx/services/tax/documents/ey_matrizisn2025_vf.pdf));
  5. a light "supplier compliance inbox" for the 37,457 client firms that use only one REPSE contractor and are too small for Vigía or BDO (02).

---

## 12. Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| **Accountants say "SIFO or CONTPAQi plus Excel is enough"** | High | High | Test in 20 interviews before spending on legal and security; sell hours saved and on-time rate, not generation; kill criteria |
| SIFO's MXN 300-per-RFC price drags ours down | High | Medium | Do not compete on generation; show errors caught and hours saved in pilots; keep the Pase and Contratista near course prices |
| CONTPAQi adds a contract register and the other SISUB layouts | Medium | High | Import its exports; partner with its distributors; make the deadline board and evidence pack the value; keep an exit conversation open |
| "Three filings a year": seasonal use and churn | Medium | High | Yearly billing; the monthly evidence pack as the habit; first-renewal kill criterion |
| SISUB layout changes, a hard-to-get official guide, portal outages | High | Medium | Layouts as versioned data; specialist on call; ship updates within 72 hours; status banner; outage log |
| Wrong output causes a late filing or fine | Low-medium | High | Golden tests; specialist sign-off; liability cap; file hashes; layout guarantee; never promise to pay fines |
| "No CFDI, no sale" | Medium | Medium | Paddle's SAT registration; buyer FAQ; reseller route; local company if more than 25% refuse |
| ISR withholding confusion | Medium | Low-medium | Written tax opinion before launch; FAQ |
| Cross-border card declines | Medium | Medium | MXN pricing; PayPal and invoices via Paddle; yearly plans; reseller; track approval rates |
| IMSS pre-fills ICSOE or opens an API | Low-medium | High | Value sits in the register, reconciliation, multi-client board and evidence pack; an API would help our integration |
| Too little time before the January window | Medium | Medium | Concierge fallback for pilots; January treated as a learning window |
| Payroll does not fill the CFDI SubContratacion node | Medium | Medium | Assignment rules by department or site; carry over last period; bulk actions |
| Data breach of NSS, CURP and salary data | Low | High | No e.firma; field encryption; two-factor; external test; cyber insurance; processor agreement |
| Hosting abroad challenged under the 2025 data law | Low-medium | Medium | Lawyer's view before launch; AWS Mexico region as fallback |
| AI extraction errors on POs | Medium | Low | A person confirms every field; source text shown; accuracy measured in pilot |
| Founder abroad; single point of failure in deadline week | Medium | High | Mexican support accountant from January 2027; runbooks; a second person on call; status page; three trips a year |
| Founder bottleneck reviewing many agents' code | Medium | Medium | Frozen interfaces; 4-6 streams at most; CI gates; golden files as referee |
| REPSE regime reform or repeal | Low | High | The June 2026 reform kept all duties ([Siempre al Día](https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/)); watch Congress |

---

## 13. Milestones and kill criteria

| When | Target (base) | Stop or rethink if |
|---|---|---|
| **1 Nov 2026** (day 21) | MVP generates ICSOE and SISUB files from 3 real anonymised datasets. 20+ accountant interviews. At least 5 firms agree to a pilot, and at least 5 say they would pay about MXN 6,000 a year for 15 RFCs | **Fewer than 2 firms agree to a pilot, or most say SIFO or CONTPAQi is enough.** Stop before the lawyer, tax and security spend |
| 6 Dec 2026 (day 56) | Legal, tax opinion and security test done. Paddle live. At least 10 pilots loaded. At least 3 founding pre-orders | **No pre-orders after 30 demos** |
| 22 Jan 2027 (after the January deadline) | At least 15 paying firms and 20 contractors (base 16 and 25) | **Fewer than 5 paying firms and fewer than 10 contractors** |
| 31 May 2027 (after the May deadline) | At least 35 firms and 55 contractors. Evidence pack used by at least 30% of active users | **Fewer than 15 paying firms** |
| 31 Oct 2027 (month 12) | ARR of at least MXN 600,000 (base 688,000) | **ARR below MXN 250,000** |
| 31 Jan 2028 (first renewals) | Firm renewal at least 75% | **Firm renewal below 60%.** It is a one-off tool: run it as side income |
| 31 Oct 2028 (month 24) | ARR of at least MXN 1.5 million. Decide on a Mexican company and a second hire | **ARR below MXN 600,000:** maintenance mode, or sell |
| Any time | | CONTPAQi ships a contract register with all three SISUB layouts, or IMSS pre-fills ICSOE: re-plan within 30 days |

---

## 14. Open questions to settle first

1. **What do accountants charge per ICSOE/SISUB period, and what would they pay for the workbench?** No published figure exists. The October interviews set the price ceiling.
2. **How many accounting firms file for REPSE clients?** The 3,000-6,000 is a guess. Ask the colleges; sample firms behind IMSS-list contractors.
3. **The current SISUB layouts, column by column, and the header-row rules** for SISUB and the ICSOE worker CSV. INFONAVIT's guide URL returned 503. Get the files from a pilot.
4. **Is INFONAVIT's employer portal fully back** after the 27 Mar 2026 suspension, and how did filers meet the May 2026 deadline? One press note says June (unverified).
5. **What SIFO really does** (validation? customers?) and whether CONTPAQi plans a contract layer. Do Aspel NOI, Worky, Buk, Nomipaq or Tress export ICSOE/SISUB?
6. **Data for reconciliation:** the columns of the IMSS EMA/EBA Excel files, a usable SUA report for bimester amounts, and how many payrolls fill the CFDI SubContratacion node.
7. **Paddle:** does its invoice show the buyer's RFC and meet RMF rule 2.7.1.14? Does it give UK tax-residence evidence? OXXO or SPEI? Card approval rates in Mexico?
8. **Tax opinion:** ISR treatment of SaaS paid to Paddle (UK) under RMF rule 2.1.37 and the treaty; permanent-establishment risk of a Mexican support contractor; 0% IVA on Mexican contractors' invoices to us.
9. **Data protection:** may a processor host abroad without worker consent under the 2025 law? Is there a new Reglamento?
10. **Enforcement:** how many ICSOE and SISUB fines are actually imposed? Is a missing nil ICSOE return finable? (A transparency request to IMSS.)
11. **Are ICSOE "Actualización" and "Sin Efectos" live** in the portal?
12. **Would CONTPAQi distributors resell with their own CFDI,** and at what margin?

---

## 15. Next steps this week (12-16 Oct 2026)

1. **Decide to run the test** with a hard cash cap of about MXN 40,000 (USD 2,200) until the 1 Nov gate: AI tools, hosting, the SIFO licence, the specialist's first review and small interview incentives.
2. **Book 20 accountant interviews** through Colegio and IMCP college contacts, LinkedIn ("nóminas REPSE") and COFIDE course alumni. Ask each for an anonymised May-Aug 2026 period: accepted ICSOE and SISUB files, acknowledgements, payroll export and the current SISUB layouts.
3. **Buy SIFO REPSE-Fácil** (MXN 1,500) and run it on synthetic data. Call CONTPAQi and Aspel support about ICSOE/SISUB features and roadmaps.
4. **Engineering week 1:** repository, CLAUDE.md, data model, layout spec format, rule interface and synthetic data generator. **Spec freeze on Friday 16 Oct**, so the agent streams start on Monday 19 Oct.
5. **Hire a social-security specialist** on a fixed fee (about MXN 40,000 in all). Book only a first 10-15 hour review of the rule catalogue and layouts (about MXN 10,000-15,000) before 1 Nov; the rest after the gate. Get quotes from a Mexican lawyer and a tax adviser, and spend on them only after 1 Nov.
6. **Apply for a Paddle seller account** and put up the Spanish landing page and waitlist: "ICSOE y SISUB a tiempo y sin rechazos".
