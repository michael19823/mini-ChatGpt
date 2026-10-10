# Mexico ICSOE/SISUB tool: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B2 report](../reports/mexico-b2.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product and go-to-market detail are covered by the other section files.

Method: I downloaded the IMSS public ICSOE lists for the last four periods and counted the filers myself. I also downloaded INEGI's business register for the accounting sector, read vendor price pages and technical notes directly, and ran about 22 web searches in Spanish and English in this pass. Prices are in Mexican pesos (MXN). Where I give US dollars, I use about MXN 18 per USD (unverified rate).

## Summary

- **The buyer pool is real, stable and countable.** IMSS publishes every ICSOE return in Excel. My count for Jan-Apr 2026:
  - **142,661 filers** in total;
  - **49,705 of them reported at least one contract**;
  - about 96,000 filed only a nil ("sin información") return.

  The numbers barely moved over four periods (142,000-147,000 and 49,600-50,300), despite the mass REPSE cancellations of 2025. **30,491 firms reported contracts in all four periods.** They are the core recurring buyers. About 73,000 different firms reported a contract at least once in 16 months ([IMSS public list](https://www.imss.gob.mx/icsoe/listado-publico)).
- **The typical buyer is a small industrial-services or construction subcontractor, not a cleaning firm.** Among contract filers:
  - the median firm reports 11 workers and 2 contracts, and 55% have a single client;
  - by my keyword classification, 13,211 are mainly maintenance and technical services and 12,817 construction;
  - only 5,879 are mainly cleaning and 2,946 security.

  About 17,000 firms have 3 or more contracts and 6-250 workers. That is the sweet spot for a tool.
- **The pain is real but narrower than B2 assumed.**
  - **Lateness is the biggest failure.** 34-43% of the contract ("normal") returns in each 2025 period were filed after the deadline. Tens of thousands of returns land in the last three days.
  - **The portal blocks most bad data at upload.** IMSS's "inconsistent information" list names only 4-5 contractors a period.
  - **A pre-filing check against IMSS's published inconsistency rules is therefore worth little.** Checks earlier in the process are worth more: matching workers to contracts, reconciling salaries (SBC) with SUA, and matching SISUB amounts with SUA/SIPARE.
- **The B2 report's biggest unknown is now answered: incumbents already generate the files.**
  - **CONTPAQi Nóminas**, the leading desktop payroll suite, has exported the worker part of both ICSOE and SISUB to CSV since version 15.1.2 (2022) ([CONTPAQi SISUB note](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html); [CONTPAQi ICSOE note](https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html)).
  - **SIFO's "REPSE-Fácil"** is a multi-RFC web tool. It keeps contracts, clients and workers (loaded from payroll XML) and generates the ICSOE file and all three SISUB reports. It costs **MXN 1,500 a year (VAT included) for 1-5 RFCs**, up to MXN 7,500 for 21-25 ([SIFO prices](https://sifo.com.mx/precios_sifo.php)).
  - **A niche ERP for machinery-rental firms (MueveTierras)** includes ICSOE/SISUB in plans from MXN 999 a month ([MueveTierras](https://muevetierras.mx/precios)).
  - No product found does cross-checks, a monthly client evidence pack, or deadline management across many clients.
- **Willingness to pay is anchored low for "file generation" and higher for everything around it.**
  - The anchors are SIFO (about MXN 300 per RFC a year), courses (MXN 798-1,190) and payroll licences (MXN 4,956-7,690 a year).
  - A failed filing costs much more. The ICSOE fine is MXN 58,655-234,620, and REPSE status decides whether clients pay at all.
  - No published accountant fee for ICSOE/SISUB was found. Praxium says these filings are usually billed separately or in an annual package, "range to be validated" ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-contador-tramitar-repse)).
- **Client-side REPSE platforms are a crowded, separate market.** Vigía Legal, BDO, Xternall, SISE and Portal de Proveedores México sell to the 59,200 client firms, priced per supplier on quote. They collect the ICSOE/SISUB acknowledgements; they do not produce them. They are partners or a demand signal, not competitors.
- **Channels:**
  - the IMCP federation (60-61 colleges, about 21,000-24,000 members, per its own pages via search snippet);
  - Colegio de la Contaduría Pública de México workshops on exactly this topic;
  - COFIDE courses;
  - CONTPAQi's network of about 6,000 distributors (search snippet);
  - practitioner media whose traffic spikes at each deadline.
- **Regional expansion is weak.** ICSOE/SISUB exist only in Mexico. Chile (the F30-1 contractor certificate) and Peru (outsourcing rules, TR9 third-party staff records) have similar contractor-compliance duties, but different data and mature or informal local markets. Growing within Mexico, into neighbouring REPSE duties, is a better path than going abroad.
- **Revised year-3 revenue: MXN 1-2.5 million a year (about USD 55k-140k).** The B2 re-assessment said MXN 2.3-5.4 million. The main reason for the cut is that a MXN 1,500-a-year incumbent sets the price for plain file generation.
- **Positioning:** do not sell a "file generator". Sell a "REPSE compliance workbench" for accountants and payroll bureaus. It should have:
  - a contract register built from client purchase orders;
  - worker-to-contract mapping from payroll CFDI;
  - SUA reconciliation;
  - ICSOE-SISUB parity checks;
  - a deadline board across clients;
  - an archive of acknowledgements;
  - the monthly client evidence pack.

  Price it near SIFO for small accounting firms and charge more as contracts and RFCs grow.

## Buyer segments

The best count is not the REPSE register. It is the IMSS public list of ICSOE filings ("Listado Público"). IMSS publishes it in Excel for every four-month period since 2021 ([IMSS ICSOE public list page](https://www.imss.gob.mx/icsoe/listado-publico)). I downloaded the last four periods and counted the filers myself. Each row is one contract (or one nil return). The list gives names but not RFCs, so I counted distinct normalised names. Treat the counts as accurate to within about 1%.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| **All ICSOE filers in one period** (normal, nil or correction) | **142,661** (Jan-Apr 2026); 146,016 (Sep-Dec 2025); 146,489 (May-Aug 2025); 147,270 (Jan-Apr 2025) | my count of [LPP2026.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx), [LPT2025.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx), [LPS2025.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPS2025.xlsx), [LPP2025.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2025.xlsx) | 2025-2026 | high |
| of which companies (personas morales) / individuals (personas físicas) | 91,705 / 50,956 (Jan-Apr 2026) | same | 2026 | high |
| **Filers with at least one contract** - the core buyers | **49,705** (Jan-Apr 2026): 33,034 companies and 16,671 individuals. Range 49,580-50,261 over four periods. About 46,300-47,000 of these filed a "normal" return; the rest filed only corrections. | same | 2025-2026 | high |
| **Firms reporting contracts in all four periods** (recurring core) | **30,491** | same (my cross-match of the four files) | 2025-2026 | high |
| Distinct firms reporting a contract at least once in four periods | 72,956 | same | 2025-2026 | high |
| Retention: contract filers of Jan-Apr 2025 that filed again in Jan-Apr 2026 | 90.8% filed something; 71.7% again reported contracts. 5,742 contract filers in Jan-Apr 2026 had not reported a contract in 2025. | same | 2025-2026 | high |
| Filers with only a nil ("sin información") return | about 96,000-101,000 per period | same | 2025-2026 | high. Low-value buyers: a nil return takes minutes. |
| Contract filers by number of contracts | 1 contract: 22,020; 2: 7,823; 3-5: 9,608; 6-10: 5,171; 11-25: 3,439; 26-100: 1,493; over 100: 151 | same (Jan-Apr 2026) | 2026 | high |
| Contract filers by number of client firms | 1 client: 27,285; 2: 8,092; 3-5: 7,955; 6-10: 3,525; 11-25: 2,040; 26-100: 742; over 100: 66 | same | 2026 | high |
| Contract filers by workers reported (summed over contracts, so a worker on two contracts counts twice) | 1-5: 16,022; 6-10: 8,164; 11-20: 7,846; 21-50: 8,441; 51-100: 4,185; 101-250: 3,066; 251-1,000: 1,577; over 1,000: 404. Median 11. | same | 2026 | medium-high |
| **Sweet spot: 3 or more contracts and 6-250 workers** | **17,052** (18,288 if defined as 2 or more clients and 6-250 workers; 22,900 companies with 6-250 workers) | same (my cross-tab) | 2026 | high |
| Micro individuals: personas físicas with contracts and 1-5 workers | 7,782 | same | 2026 | high. Price-sensitive; accountant files for them. |
| Large filers (over 250 workers) | 1,981 | same | 2026 | high. Use enterprise payroll or in-house teams; not a target. |
| Contracts reported per period | 263,040 contracts; 3.73 million worker-contract lines | same | 2026 | high |
| **Client firms named in ICSOE returns** (secondary buyers, joint liability) | **59,200** distinct clients (Jan-Apr 2026); 37,457 use one REPSE contractor; 2,643 use 11 or more | same | 2026 | high |
| Largest client firms by number of REPSE contractors | OXXO 759, RUBA Desarrollos 544, Bimbo 454, Coppel 359, Liverpool 328, CFE 284, Cemex 278 (plus other Cemex entities), Deacero 277, Ternium 254, Walmart 238 | same | 2026 | high |
| Returns filed after the deadline (any type) | 49,139 of 142,780 returns (34%) for Jan-Apr 2026; 46,940 (33%) for Sep-Dec 2025; 52,770 (36%) for May-Aug 2025; 68,018 (40%) for Jan-Apr 2025 | same. Deadlines were 18 May 2026, 19 Jan 2026, 17 Sep 2025 and 19 May 2025 (the 17th moves to the next business day). | 2025-2026 | high for dates. "Late" assumes the listed date is the filing date. |
| **Contract ("normal") returns filed late** | 15,833 of 46,719 (34%) Sep-Dec 2025; 17,022 of 47,017 (36%) May-Aug 2025; 19,746 of 46,312 (43%) Jan-Apr 2025 | same | 2025 | high (same caveat) |
| Returns filed in the last 3 days before the deadline | 32,509 (Sep-Dec 2025); 42,192 (May-Aug 2025); 24,619 (Jan-Apr 2025) | same | 2025 | high |
| Correction returns ("Corrección") per period | 2,870-3,809 (about 6-8% of contract filers) | same | 2025-2026 | high |
| Filers on the IMSS "inconsistent information" list | only 5 contractors (15 rows) for Jan-Apr 2026 and 4 for Sep-Dec 2025 | my count of [LIIP2026.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIP2026.xlsx) and [LIIT2025.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIT2025.xlsx) | 2025-2026 | high. The portal already blocks most inconsistencies. |
| REPSE register, press figure | "more than 89,000" firms (Jan 2026, attributed to STPS, no link) | [twind.io](https://twind.io/mx/repse-mexico-2026/); [LexLatin](https://lexlatin.com/entrevistas/repse-mexico-nuevas-auditorias) | 2026 | low. It conflicts with 142,000+ ICSOE filers, so I do not use it. |
| Private security firms, sector-wide | about 5,400 registered firms employing about 900,000 people (ASUME data) | [Excélsior, 9 May 2024](https://www.excelsior.com.mx/nacional/el-repse-y-la-seguridad-privada/1651176) | 2024 | medium. My ICSOE count finds 2,946 security contract filers. |
| **Accounting and audit firms (SCIAN 541211)** - channel buyers | **16,356** establishments: 12,130 with 0-5 staff, 2,604 with 6-10, 1,307 with 11-30, 315 with more than 30. Plus 580 in "other accounting services" (541219). | my count of the [INEGI DENUE bulk file for sector 54](https://www.inegi.org.mx/contenidos/masiva/denue/denue_00_54_csv.zip) (May 2026 release) | 2026 | high for listed establishments. Home-based accountants are under-counted. |
| Accounting firms that actually file ICSOE/SISUB for clients | not counted; my estimate is 3,000-6,000 (unverified) | - | - | low |

**Sector mix of the 49,705 contract filers.** This is my keyword classification of the "Servicios u obras contratados" field in [LPP2026.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx). Each filer goes in the sector of most of its contracts. Confidence is medium, because the field is free text.

| Primary sector | Contract filers | Contracts | Median workers per filer |
|---|---|---|---|
| Industrial maintenance and technical services (machinery, elevators, scales, HVAC, installations) | 13,211 | 70,765 | 9 |
| Construction and works | 12,817 | 51,029 | 12 |
| Cleaning, gardening, pest control, waste | 5,879 | 39,684 | 12 |
| Private security | 2,946 | 25,455 | 21 |
| Professional services (consulting, accounting, engineering, training, marketing) | 2,331 | 11,366 | 11 |
| Transport and logistics | 1,773 | 6,249 | 11 |
| IT and software | 1,212 | 5,756 | 11 |
| Food and canteens | 838 | 2,867 | 11 |
| Health and laboratories | 517 | 2,853 | 9 |
| Promotion and sales staff | 297 | 1,172 | 13 |
| Other or unclassified (mostly one-off technical jobs, painting, flooring) | 7,884 | 45,844 | 11 |

**What the counts mean.**
- The real buyer pool is about **50,000 contractors with live contracts each period**, 30,500 of them every period. It is not 89,000 or 142,000. The 96,000-plus nil filers must still file, but they have little work to do.
- The pool is **stable**: 142,000-147,000 filers and about 50,000 contract filers in each of the last four periods, despite the mass REPSE cancellations of 2025 reported in the press.
- Most contract filers are **small**: half report 11 or fewer workers, and 55% have one client.
- The buyer is mostly an **industrial-services or construction subcontractor**. Many "contracts" are single purchase orders; the text often starts with an SAP order number such as "4500010070 ...". A maintenance firm can therefore report dozens of short contracts a period, each with its own worker list. That is where the work and the errors pile up.
- About **a third of all returns are filed late**. Late filing is the most common failure, not bad data.

## Buyer profile and pain

**Who they are**
- A Mexican company (two-thirds) or a self-employed individual (one-third) that places its own staff at a client's site: technicians, installers, construction crews, cleaners, guards (my count, above).
- Typical size: 6-50 workers, 1-5 client firms, 2-10 contracts a period (my count, above).
- Their clients are often big firms with formal supplier portals. OXXO alone named 759 REPSE contractors in Jan-Apr 2026 (my count, above). Large clients make suppliers upload monthly and four-monthly evidence. AXA's portal asks for the ICSOE and SISUB acknowledgements plus an Excel list of contracts and workers in April, August and December ([AXA REPSE document](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf)). SAP-based supplier portals list "Acuses de ICSOE y SISUB" among required uploads. They hold payment while a supplier is not "green" ([repse.org.mx](https://www.repse.org.mx/repse-portal.html)).

**How they comply today**
- **Through their outside accountant or payroll bureau, in most cases** (inferred; unverified). The evidence is indirect:
  - the many paid courses aimed at accountants ([Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub); [COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas));
  - Praxium's description of ICSOE/SISUB as work usually billed by the accountant ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-contador-tramitar-repse)).
- **Data sources:**
  - payroll software, most often CONTPAQi Nóminas or Aspel NOI (no market-share figure found; unverified);
  - SUA for IMSS/INFONAVIT contributions;
  - payroll CFDI XML files.

  CONTPAQi users can export the worker lists for both returns ([CONTPAQi ICSOE note](https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html)). They still type contract numbers and work-site addresses by hand, and must decide which workers belong to which contract ([CONTPAQi SISUB note](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html)).
- **Templates:** the IMSS bulk template ([IMSS guide](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf)), and SISUB CSV layouts from INFONAVIT or practitioner sites ([elconta](https://elconta.mx/archivos-csv-sisub-infonavit/); [contadormx](https://contadormx.com/?p=61792)).
- **Time:** about 12 staff hours a period for a contractor with 5 clients and 18 workers ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).

**Pain, with evidence**
- **Deadlines.**
  - 34-43% of contract returns are filed late each period.
  - 25,000-42,000 returns are filed in the last three days (my count, above).
  - Clients withhold payment until they get the acknowledgement ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).
- **Fragile SISUB format.**
  - Users report "layout incorrecto, fila 3" errors.
  - Files must be saved as comma-delimited CSV, and filled-in blank cells cause rejection ([contadormx tag page](https://contadormx.com/tag/error-sisub/); [contadormx](https://contadormx.com/errores-comunes-del-sisub-al-infonavit/)).
  - IDC ran a video in 2022 on problems filling in the SISUB layouts ([IDC Online video](https://idconline.mx/video/seguridad-social/2022/04/12/problematicas-del-llenado-de-layouts-del-sisub)).
  - The layouts changed again in June 2026 ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
- **Portal failures near the deadline.** In Sep 2022, INFONAVIT told filers to email screenshots and files instead ([IDC Online](https://idconline.mx/seguridad-social/2022/09/19/sisub-presenta-problemas-de-ultima-hora)).
- **Corrections.** 2,870-3,809 correction returns are filed each period, about 6-8% of contract filers (my count, above).
- **Reconciliation.**
  - SBC differences between payroll and IMSS are the biggest delay ([Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre)).
  - The June 2026 SISUB guide requires amounts to match SUA/SIPARE ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
  - A 2026 payroll-with-AI course sells "CFDI-SISUB/ICSOE (REPSE)" cross-checks as a skill. That shows practitioners want this check ([El Contribuyente course outline](https://www.elcontribuyente.mx/wp-content/uploads/2026/04/Temario-IAnominas2026.pdf), search snippet; the PDF did not open for me).
- **Training demand.** Paid courses run every season:
  - COFIDE: MXN 1,190 for 5 hours ([COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas));
  - Colegio de la Contaduría Pública: a 2-hour workshop on 2 Oct 2026 at MXN 1,156, or MXN 798 for members ([Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub)).

**Counter-evidence (be honest about it)**
- Only 4-5 contractors a period appear on IMSS's inconsistency list (my count, above). The portal catches structural errors at upload. Most firms get a valid filing in the end. The pain is time, lateness and reconciliation, not rejected filings.
- I found no published count of fines actually imposed for late ICSOE/SISUB (unverified). Late filing that is voluntary and made before IMSS acts is not fined (LSS art. 304-C, per the B2 report). That weakens the "avoid the fine" pitch. The stronger pitch is "get paid by your client on time".

## Willingness to pay

| What buyers pay today | Price | Source | Note |
|---|---|---|---|
| ICSOE fine (late or missing) | 500-2,000 UMA, about MXN 58,655-234,620 (2026) | [ContrataBien guide](https://www.contratabien.mx/guias/icsoe-sisub-declaraciones-cuatrimestrales-repse); B2 report | Rarely imposed (no data; unverified) |
| SISUB fine | 251-300 UMA, about MXN 29,445-35,193 | [ContrataBien guide](https://www.contratabien.mx/guias/icsoe-sisub-declaraciones-cuatrimestrales-repse) | same |
| REPSE registration file by an accountant | MXN 8,000-25,000; from about MXN 5,000 in simple cases | [Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-contador-tramitar-repse) | one-off. ICSOE/SISUB are billed separately or in an annual package; "range to be validated". |
| SME accounting retainer (company with payroll) | MXN 3,000-7,000 a month; MXN 8,000-15,000 for medium firms | [Praxium, Guadalajara](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara) | ICSOE/SISUB may sit inside or outside it |
| Ad-hoc advice | MXN 700-1,000 an hour | [Praxium, Guadalajara](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara) | |
| Payroll outsourcing (Runa) | from MXN 250 per employee a month, minimum MXN 7,500 a month plus VAT | [Runa](https://runahr.com/mx/landing/maquila-de-nomina/) | no ICSOE/SISUB claim found |
| CONTPAQi Nóminas desktop licence | MXN 5,590 a year (one RFC); MXN 7,690 (multi-RFC, "for accounting firms"); extra user MXN 1,690-1,790 | [CONTPAQi Nóminas](https://www.contpaqi.com/nominas) | VAT treatment not stated. Includes the ICSOE/SISUB worker exports. |
| CONTPAQi Nóminas cloud | MXN 3,290 (1 company, 5 employees) to MXN 8,690 (100 employees) | [CONTPAQi Nóminas](https://www.contpaqi.com/nominas) | billing period not stated (unverified) |
| Aspel NOI (Siigo) | MXN 413 a month paid yearly (MXN 4,956 a year) before VAT; MXN 590 monthly | [Siigo Aspel NOI](https://www.siigo.com/mx/nomina-en-linea-aspel-noi/) | no ICSOE/SISUB feature found (unverified) |
| **SIFO REPSE-Fácil** (direct competitor) | **MXN 1,500 a year for 1-5 RFCs**, 3,000 (6-10), 4,500 (11-15), 6,000 (16-20), 7,500 (21-25), VAT included | [SIFO prices](https://sifo.com.mx/precios_sifo.php) | about MXN 300 per RFC a year |
| MueveTierras (machinery ERP with ICSOE/SISUB) | MXN 999 or 2,499 a month before VAT (MXN 799 or 1,999 if paid yearly) | [MueveTierras](https://muevetierras.mx/precios) | whole ERP, not a REPSE tool |
| ICSOE/SISUB course | MXN 798-1,190 | [COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas); [Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub) | per person, per course |
| Staff time | about 36 hours a year for a small contractor; about MXN 10,800 at an assumed MXN 300 an hour | [Praxium](https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre); my rate assumption (unverified) | |

**Reading the anchors**
- **Plain file generation is worth about MXN 300 per RFC a year**, because SIFO sells it at that price. CONTPAQi users get worker exports at no extra cost.
- **An accounting firm already spends about MXN 5,000-8,000 a year** on its payroll licence (CONTPAQi or NOI). A REPSE add-on at MXN 6,000-12,000 a year (MXN 500-1,000 a month) is plausible if it saves 5-10 hours per client a period. At MXN 300 an hour, that saving is worth MXN 4,500-9,000 per client a year (my estimate, unverified).
- **A direct contractor pays its accountant MXN 3,000-7,000 a month in total.** A separate MXN 250-400 a month tool is hard to sell to the contractor directly unless it also produces the monthly client evidence pack, which unlocks payment.
- **The cost of failure is high, but enforcement is light.** The stronger lever is commercial: client portals block payment without the acknowledgements ([repse.org.mx](https://www.repse.org.mx/repse-portal.html); [AXA](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf)).

## Competitor table and discussion

Duty list used for scoring:
- (1) a contract register with client RFC, purpose and dates;
- (2) worker-to-contract mapping;
- (3) the ICSOE file (contract data plus worker bulk CSV);
- (4) the three SISUB layouts (obligated party, contract, worker), including amounts;
- (5) cross-checks: SBC against SUA, SISUB amounts against SUA/SIPARE, ICSOE against SISUB;
- (6) deadline and multi-client management;
- (7) an archive of acknowledgements and the monthly client evidence pack.

| Product | Who it serves | Duties covered | Price | Customers | Verdict |
|---|---|---|---|---|---|
| IMSS ICSOE portal and bulk template | contractor | submission; bulk worker upload up to 3,000 a file; checks NSS against the IMSS database at upload | free | all 142,000+ filers | The filing channel, not a rival. Leaves (1), (2), (5), (6) and (7) undone ([IMSS ICSOE](https://imss.gob.mx/icsoe); [bulk guide](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf)). |
| INFONAVIT SISUB module | contractor | submission of 3 CSV layouts | free | all filers | Same. Fragile format ([contadormx](https://contadormx.com/errores-comunes-del-sisub-al-infonavit/)). |
| **CONTPAQi Nóminas** (since 15.1.2, 2022; REPSE menu since 16.2.2, 2024) | payroll users, accounting firms | (3) worker part: NSS, CURP, SBC to CSV; (4) SISUB worker detail with bimonthly income and SBA build-up to CSV. Contract number and site address are typed in by hand. Workers are filtered by employer registration, department or job, not by contract. | inside a MXN 5,590-7,690 a year licence | CONTPAQi claims more than 1.2 million clients across its products ([El Financiero, May 2023](https://www.elfinanciero.com.mx/empresas/2023/05/30/contpaqi-supera-los-12-millones-de-clientes-en-mexico-y-va-por-mas/), search snippet) | **Partial incumbent for the worker data.** No contract register, contract or obligated-party layouts, cross-checks, or deadline view ([SISUB note](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html); [ICSOE note](https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html)). Its exports are a good input for our tool. |
| **SIFO REPSE-Fácil** (Autlán, Jalisco) | contractors and accountants, multi-RFC | (1) contracts, contract purposes, clients; (2) workers loaded from payroll XML or by hand and linked to contracts; (3) ICSOE Excel; (4) three SISUB reports. Claims to "ensure all mandatory fields are complete". | MXN 1,500-7,500 a year, VAT included, by RFC band | unknown. The contact address is a Gmail account and the firm looks small (unverified) | **Direct competitor, very cheap.** No SUA reconciliation, cross-checks, evidence pack or deadline board are claimed ([SIFO product page](https://sifo.com.mx/sistema-para-repse.php); [SIFO blog](https://sifo.com.mx/blog_post/como-presentar-las-informativas-cuatrimestrales-para-sisub-e-icose.php)). It shows the job can be done and sets the price ceiling for "generation only". |
| MueveTierras | heavy-machinery rental firms | (1)-(4) inside an ERP; claims exporter updates when IMSS changes the layout | MXN 999-2,499 a month before VAT; Stripe card, SPEI and OXXO | unknown | Vertical niche. Shows the "ICSOE falls out of your operations data" idea ([MueveTierras](https://muevetierras.mx/precios); [ICSOE guide](https://muevetierras.mx/icsoe-imss)). |
| Aspel NOI (Siigo) | payroll users | SUA interface; no ICSOE/SISUB export found | MXN 4,956 a year | large, unknown | Gap or possible entrant (unverified) ([Siigo](https://www.siigo.com/mx/nomina-en-linea-aspel-noi/); [Aspel manual](https://www.aspel.com.mx/manuales/manual-aspel-sistema-nomina-integral.pdf)). |
| Runa, Worky, Buk, Nomipaq, Tress | payroll SaaS and outsourcing | no ICSOE/SISUB generation found. Runa publishes ICSOE guides only. | Runa outsourcing from MXN 250 per employee a month | - | Not competing today (unverified; one support call each would settle it) ([Runa ICSOE guide](https://runahr.com/mx/recursos/aspectos-legales/que-es-icsoe/)). |
| elconta.mx, contadormx.com | accountants | free blank SISUB CSV files and layouts by email; paid recorded courses | free; course price not found | large readership (unverified) | Free alternative for (4) only ([elconta](https://elconta.mx/archivos-csv-sisub-infonavit/); [contadormx](https://contadormx.com/?p=61792)). |
| Vigía Legal | client firms | supplier file validated against SAT/IMSS/INFONAVIT/STPS; payment gate; tax reconciliation module | annual subscription by active suppliers; tiers from 10-50 suppliers; price on proposal | not stated | Client-side. Complementary ([Vigía Legal prices](https://www.vigialegal.mx/precios)). |
| BDO REPSE SaaS | client firms | weekly REPSE status check, document store, ERP link | on quote, by number of suppliers | not stated | Client-side ([BDO webinar](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf)). |
| Xternall, SISE (TaxSAT), Portal de Proveedores México, SAP S/4HANA REPSE portals | client firms | supplier document collection, including ICSOE/SISUB acknowledgements | on quote | Xternall claims more than 100 large groups ([El Contribuyente](https://www.elcontribuyente.mx/2023/03/evita-multas-por-incumplimiento-de-proveedores-repse-con-xternall-y-automatiza-su-revision/)) | Client-side. They create demand for clean supplier packs ([SISE](https://sise.taxsat.tax/software-repse-la-solucion-para-evitar-multas-y-automatizar-procesos); [PPM](https://portaldeproveedoresmexico.com/gestion-proveedores-repse/); [repse.org.mx](https://www.repse.org.mx/repse-portal.html)). |
| ContrataBien.mx | client firms buying building services | directory of REPSE-verified suppliers; guides tell buyers to ask for ICSOE/SISUB acknowledgements | free to buyers | not stated | Lead source or partner ([ContrataBien](https://www.contratabien.mx)). |
| Consultancies and accountants (Praxium, BHR, Consolidé payroll bureau, thousands of local firms) | contractors | everything, by hand | fees not published | - | The main "competitor" is the accountant's own time with Excel. They are also the main buyer ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-contador-tramitar-repse); [Consolidé](https://consolide.com/blog/guia-registro-repse-icsoe-y-sisub/)). |

**Discussion**
- **B2 said "no dedicated software found". That was wrong.** SIFO sells a dedicated, multi-RFC ICSOE/SISUB generator for MXN 1,500 a year. CONTPAQi Nóminas has exported the worker lists since 2022. MueveTierras bundles it for one vertical. The first-pass searches missed them because they sit inside wider accounting and payroll products.
- **Nobody does (5), (6) and (7) for the contractor side.** No product found reconciles SBC and amounts with SUA/SIPARE, checks that ICSOE and SISUB match, gives an accountant a deadline board across 20-50 client RFCs, or builds the monthly evidence pack that client portals demand. This is the opening. It is a quality and time-saving opening, not a "nothing exists" opening.
- **Threats:**
  - CONTPAQi could add a contract register in one release, because it already has the reports. It has had four years and has not done so (as of 16.2.2).
  - SIFO could add checks.
  - A client-side platform (Vigía, BDO) could add a "supplier workbench".

  None of these is visible today.

## Channels

| Channel | Size or reach | Source | How to use |
|---|---|---|---|
| IMCP and its 60-61 federated colleges | about 21,000-24,000 public accountants (figures differ across IMCP pages) | [IMCP who we are](https://imcp.org.mx/quienes_somos/) (search snippet; page returned 403 to my direct check); [IMCP CROSS bulletin](https://imcp.org.mx/wp-content/uploads/2025/07/NOTICIAS-SEGURIDAD-SOCIAL-2025-03.pdf) | sponsor or speak at social-security committee (CROSS) sessions; bulletins already cover the ICSOE lists |
| Colegio de la Contaduría Pública de México | runs ICSOE/SISUB workshops every season (MXN 798-1,156) | [Colegio](https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub); [IMSS/INFONAVIT session](https://www.contadoresmexico.org.mx/Vida-colegiada/Autoridades-del-IMSS-Infonavit-explican-sistema-ICSOE-y-SISUB) | offer a free tool licence to attendees; co-run a "file in 30 minutes" workshop before each deadline |
| COFIDE, El Contribuyente, IDC Online, elconta, contadormx | paid courses and practitioner media; article spikes at each deadline | [COFIDE](https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas); [IDC Online](https://idconline.mx/seguridad-social/2025/01/17/fecha-limite-para-presentar-icsoe-y-sisub-tercer-cuatrimestre-2024) | SEO on error messages ("layout incorrecto SISUB"); sponsored webinars in the first two weeks of Jan, May and Sep |
| CONTPAQi distributor network | more than 6,000 distributors; more than 1.4 million taxpayers stamping through CONTPAQi (undated) | [Líder Empresarial](https://www.liderempresarial.com/contpaqi-40-anos-de-innovacion-contable-para-mipymes/) (search snippet; page returned 403 to my direct check) | an add-on that imports CONTPAQi's ICSOE/SISUB CSVs and adds the contract layer; resellers take a margin (terms unverified) |
| Accounting firms (direct) | 16,356 accounting establishments; 4,226 with 6 or more staff | my DENUE count, above | outbound to firms whose clients appear in the IMSS list; free tier for nil-only clients |
| Client-side platforms and large clients | 59,200 client firms; 2,643 with 11 or more REPSE contractors | my count, above; [Vigía Legal](https://www.vigialegal.mx/precios) | partner: suppliers using our pack pass the portal check. Large clients (OXXO 759 suppliers) could recommend the tool to suppliers. |
| Sector bodies | security: about 5,400 firms (ASUME); CNSP and ANERPV together about 230 member firms; construction: CMIC (in 2022 it argued construction firms should not need REPSE) | [Excélsior](https://www.excelsior.com.mx/nacional/el-repse-y-la-seguridad-privada/1651176); [The Logistics World](https://thelogisticsworld.com/historico/firma-anerpv-convenio-de-seguridad-en-transporte/) (search snippet); [El Contribuyente](https://www.elcontribuyente.mx/2022/05/empresas-de-la-construccion-rechazan-inscribirse-a-repse/) | secondary. The largest sectors (industrial maintenance, construction) have no obvious single association. |
| IMSS public list as a lead list | names of 142,000 filers and their clients each period | [IMSS public list](https://www.imss.gob.mx/icsoe/listado-publico) | prospect research only. Using names of individuals (personas físicas) for marketing raises personal-data law questions (unverified). |

## Regional expansion

- **No other country has ICSOE/SISUB.** The file formats, the rules and the portals are Mexican. The reusable parts are the engine (payroll import, contract-worker mapping, rule checks, deadline board) and the go-to-market playbook with accountants.
- **Chile, closest analogue.**
  - Contractors and subcontractors get a monthly-to-six-monthly certificate of labour and pension compliance (F30-1) from the Labour Directorate. Clients use it to release payments.
  - Since 30 Aug 2023 it is issued only through the "Mi DT" portal ([Dirección del Trabajo](https://dt.gob.cl/portal/1627/w3-article-124815.html); [KPMG Chile](https://assets.kpmg.com/content/dam/kpmg/cl/pdf/2023/tax-legal/2023-09-05-Alerta-Laboral.pdf)).
  - Mining clients already run contractor-accreditation platforms ([Webcontrol manual](https://yamana.webcontrol.cl/ese/soporte/ManualAcreditacionMML_EECC.pdf)).
  - Verdict: a mature, different market. Not a quick second country.
- **Peru.**
  - Outsourcing firms must give workers written notice, and the client is jointly liable.
  - SUNAFIL inspections can ask for the list of outsourcing firms, contracts, displaced workers, and the TR9 T-Registro export of third-party staff.
  - The national register of outsourcing firms was long satisfied by declaring displaced workers in the electronic payroll ([La Cámara](https://lacamara.pe/reglas-basicas-sobre-la-tercerizacion-de-servicios/?print=pdf); [PRCP](https://blog.prcp.com.pe/wp-content/uploads/2022/05/PPT-Webinar-Restricciones-a-la-tercerizacion-de-servicios-y-fiscalizacion-de-estas-nuevas-exigencias.pdf)).
  - Verdict: no separate periodic return to automate.
- **Colombia and Central America:** not researched in this pass (unverified).
- **Better expansion: neighbouring duties inside Mexico for the same buyers.**
  - REPSE renewal every three years.
  - The monthly evidence pack under LISR art. 27 and LIVA art. 5 (see section 01).
  - State payroll-tax (ISN) withholding by clients in Jalisco ([Praxium](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara)).
  - Supplier onboarding for client portals.

## Implications for positioning and pricing

1. **Do not sell "we generate your ICSOE/SISUB files".** SIFO does it for about MXN 300 per RFC a year, and CONTPAQi users get the worker lists at no extra cost. Generation must be included, but it cannot be the headline.
2. **Sell a REPSE compliance workbench for accountants and payroll bureaus.** It should cover:
   - a contract register built from client purchase orders (many "contracts" are POs);
   - worker-to-contract mapping from payroll CFDI XML or CONTPAQi/NOI exports;
   - SBC and amount reconciliation with SUA/SIPARE;
   - ICSOE-SISUB parity checks;
   - a deadline board across all client RFCs;
   - an archive of acknowledgements;
   - the monthly client evidence pack.

   The message: "file on time, first time, and pass your clients' supplier portals."
3. **Price** (proposals, unverified):
   - **Accounting firm:** MXN 690 a month (MXN 6,900 a year) for up to 15 client RFCs, MXN 1,290 a month for up to 40, then MXN 30 per RFC a month. That is above SIFO's band price, justified by the checks and the evidence pack, and below a CONTPAQi licence.
   - **Direct contractor:** MXN 249 a month or MXN 2,490 a year for one RFC with up to 10 contracts. Add MXN 99 a month per extra 10 contracts, because maintenance firms with 26-100 contracts (1,493 firms) carry most of the work.
   - **Nil filers (96,000):** free deadline reminders and a nil-return checklist, as lead generation.
   - **Payments:** cards via Stripe, plus SPEI and OXXO. MueveTierras already sells this way, and it shows Mexican SMEs pay by card for such tools ([MueveTierras](https://muevetierras.mx/precios)).
4. **Revenue, year 3 (estimate, unverified):**
   - Base case:
     - accounting firms: 4,000 (assumed) x 4% = 160 x MXN 9,000 = MXN 1.44 million;
     - direct contractors: 30,500 recurring filers x 0.8% = 245 x MXN 3,000 = MXN 0.73 million;
     - total about **MXN 2.2 million (about USD 120k)**.
   - Low case: 2% of firms and 0.3% of contractors, about MXN 1.0 million.
   - Either case supports a one-person online business. It does not support a large company.
5. **Seasonality:** sell annual plans before each deadline window (1-17 Jan, May, Sep). Use the monthly evidence pack to keep users active between deadlines.
6. **Partnerships first:** a CONTPAQi-export importer and a Colegio/COFIDE workshop deal would reach most target accountants at low cost.

## Open questions

- What do accountants actually charge per ICSOE/SISUB period? Ten interviews would settle it. No published figure exists.
- How many accounting firms file ICSOE/SISUB for clients? My 3,000-6,000 is a guess.
- How many customers does SIFO REPSE-Fácil have, and does it do any validation? A demo request would show it.
- Do Aspel NOI, Worky, Buk, Nomipaq or Tress export ICSOE/SISUB? One support call each.
- How much do CONTPAQi users rely on the built-in exports, and what do they still do by hand?
- How often are ICSOE/SISUB fines actually imposed? An IMSS transparency request (Plataforma Nacional de Transparencia) could answer it.
- Would large client firms or client-side platforms (Vigía, BDO, Xternall) pay to have suppliers deliver a standard evidence pack?
- What share of the 49,705 contract filers are personas físicas filing through an accountant, compared with companies filing in-house?

## Sources

Official and primary data
- https://www.imss.gob.mx/icsoe/listado-publico
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPS2025.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2025.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIP2026.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIT2025.xlsx
- https://imss.gob.mx/icsoe
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf
- https://www.inegi.org.mx/contenidos/masiva/denue/denue_00_54_csv.zip
- https://dt.gob.cl/portal/1627/w3-article-124815.html

Competitors and prices
- https://sifo.com.mx/sistema-para-repse.php
- https://sifo.com.mx/precios_sifo.php
- https://sifo.com.mx/blog_post/como-presentar-las-informativas-cuatrimestrales-para-sisub-e-icose.php
- https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html
- https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html
- https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/repse___reportes_de_apoyo_icsoe_y_sisub.html
- https://www.contpaqi.com/nominas
- https://www.siigo.com/mx/nomina-en-linea-aspel-noi/
- https://www.aspel.com.mx/manuales/manual-aspel-sistema-nomina-integral.pdf
- https://muevetierras.mx/precios
- https://muevetierras.mx/icsoe-imss
- https://runahr.com/mx/landing/maquila-de-nomina/
- https://runahr.com/mx/recursos/aspectos-legales/que-es-icsoe/
- https://www.vigialegal.mx/precios
- https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf
- https://www.elcontribuyente.mx/2023/03/evita-multas-por-incumplimiento-de-proveedores-repse-con-xternall-y-automatiza-su-revision/
- https://sise.taxsat.tax/software-repse-la-solucion-para-evitar-multas-y-automatizar-procesos
- https://portaldeproveedoresmexico.com/gestion-proveedores-repse/
- https://www.repse.org.mx/repse-portal.html
- https://www.contratabien.mx
- https://www.contratabien.mx/guias/icsoe-sisub-declaraciones-cuatrimestrales-repse
- https://elconta.mx/archivos-csv-sisub-infonavit/
- https://contadormx.com/?p=61792
- https://consolide.com/blog/guia-registro-repse-icsoe-y-sisub/
- https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf

Fees, training and pain
- https://praxiumconsultores.com/blog/cuanto-cobra-contador-tramitar-repse
- https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara
- https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre
- https://www.cofide.mx/cursos/icsoe-y-sisub-infonavit-e-imss-declaraciones-infomativas
- https://www.contadoresmexico.org.mx/Curso/Repse-y-sus-informativas-en-el-ICSOE-y-Sisub
- https://www.contadoresmexico.org.mx/Vida-colegiada/Autoridades-del-IMSS-Infonavit-explican-sistema-ICSOE-y-SISUB
- https://www.elcontribuyente.mx/wp-content/uploads/2026/04/Temario-IAnominas2026.pdf (search snippet)
- https://contadormx.com/errores-comunes-del-sisub-al-infonavit/
- https://contadormx.com/tag/error-sisub/
- https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/
- https://idconline.mx/seguridad-social/2022/09/19/sisub-presenta-problemas-de-ultima-hora
- https://idconline.mx/video/seguridad-social/2022/04/12/problematicas-del-llenado-de-layouts-del-sisub
- https://idconline.mx/seguridad-social/2025/01/17/fecha-limite-para-presentar-icsoe-y-sisub-tercer-cuatrimestre-2024

Market context and channels
- https://twind.io/mx/repse-mexico-2026/
- https://lexlatin.com/entrevistas/repse-mexico-nuevas-auditorias
- https://www.excelsior.com.mx/nacional/el-repse-y-la-seguridad-privada/1651176
- https://imcp.org.mx/quienes_somos/ (search snippet)
- https://imcp.org.mx/wp-content/uploads/2025/07/NOTICIAS-SEGURIDAD-SOCIAL-2025-03.pdf
- https://www.liderempresarial.com/contpaqi-40-anos-de-innovacion-contable-para-mipymes/ (search snippet)
- https://www.elfinanciero.com.mx/empresas/2023/05/30/contpaqi-supera-los-12-millones-de-clientes-en-mexico-y-va-por-mas/ (search snippet)
- https://thelogisticsworld.com/historico/firma-anerpv-convenio-de-seguridad-en-transporte/ (search snippet)
- https://www.elcontribuyente.mx/2022/05/empresas-de-la-construccion-rechazan-inscribirse-a-repse/

Regional
- https://assets.kpmg.com/content/dam/kpmg/cl/pdf/2023/tax-legal/2023-09-05-Alerta-Laboral.pdf
- https://yamana.webcontrol.cl/ese/soporte/ManualAcreditacionMML_EECC.pdf
- https://lacamara.pe/reglas-basicas-sobre-la-tercerizacion-de-servicios/?print=pdf
- https://blog.prcp.com.pe/wp-content/uploads/2022/05/PPT-Webinar-Restricciones-a-la-tercerizacion-de-servicios-y-fiscalizacion-de-estas-nuevas-exigencias.pdf
