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

**New score: 5/10.** The re-assessment gave 6/10; the first pass gave 4/10.

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

- **Lateness (my files' analysis of IMSS data).** 31% (Sep-Dec 2025) and 33% (Jan-Apr 2026) of contractors first filed after the deadline. 34-43% of contract returns in each 2025 period were late. 25,000-42,000 returns landed in the last three days ([LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); [LPT2025](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx); 01, 02). The two files measure different things (filers vs returns); both say about a third.
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

All counts below come from my files' analysis of the IMSS public lists and INEGI's business register (02), unless marked.

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
