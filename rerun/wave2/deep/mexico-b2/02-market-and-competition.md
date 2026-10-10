# Mexico ICSOE/SISUB tool: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B2 report](../reports/mexico-b2.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product and go-to-market detail are covered by the other section files.

Status: work in progress (resumed run). Counts are final. Competitor notes added; other sections being filled.

## Summary

(pending)

## Buyer segments

The best count is not the REPSE register. It is the IMSS public list of ICSOE filings ("Listado Público"), which IMSS publishes in Excel for every four-month period since 2021 ([IMSS ICSOE public list page](https://www.imss.gob.mx/icsoe/listado-publico)). I downloaded the last four periods and counted the filers myself. Each row is one contract (or one nil return). The list gives names but not RFCs, so I counted distinct normalised names. Treat the counts as accurate to within about 1%.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| **All ICSOE filers in one period** (normal, nil or correction) | **142,661** (Jan-Apr 2026); 146,016 (Sep-Dec 2025); 146,489 (May-Aug 2025); 147,270 (Jan-Apr 2025) | my count of [LPP2026.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx), [LPT2025.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx), [LPS2025.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPS2025.xlsx), [LPP2025.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2025.xlsx) | 2025-2026 | high |
| of which companies (personas morales) / individuals (personas físicas) | 91,705 / 50,956 (Jan-Apr 2026) | same | 2026 | high |
| **Filers with at least one contract (a "normal" return)** - the core buyers | **about 46,500-47,000 per period**; 49,705 incl. correction-only filers (Jan-Apr 2026) | same | 2025-2026 | high |
| Filers with only a nil ("sin información") return | about 96,000-101,000 per period | same | 2025-2026 | high. Low value buyers: a nil return takes minutes. |
| Contract-filers by number of contracts | 1 contract: 22,020; 2: 7,823; 3-5: 9,608; 6-10: 5,171; 11-25: 3,439; 26-100: 1,493; over 100: 151 | same (Jan-Apr 2026) | 2026 | high |
| Contract-filers by number of client firms | 1 client: 27,285; 2: 8,092; 3-5: 7,955; 6-10: 3,525; 11-25: 2,040; 26-100: 742; over 100: 66 | same | 2026 | high |
| Contract-filers by workers reported (sum over contracts, so a worker on two contracts counts twice) | 1-5: 16,022; 6-10: 8,164; 11-20: 7,846; 21-50: 8,441; 51-100: 4,185; 101-250: 3,066; 251-1,000: 1,577; over 1,000: 404. Median 11. | same | 2026 | medium-high |
| **Sweet spot: contract-filers with 3 or more contracts and 6-250 workers** | **about 18,000-20,000** (my estimate from the two distributions above; the cross-tab was not run) | same | 2026 | medium |
| Contracts reported per period | 263,040 contracts; 3.73 million worker-contract lines | same | 2026 | high |
| **Client firms named in ICSOE returns** (secondary buyers, joint liability) | **59,200** distinct clients (Jan-Apr 2026); 37,457 use one REPSE contractor, 2,643 use 11 or more | same | 2026 | high |
| Largest client firms by number of REPSE contractors | OXXO 759, RUBA Desarrollos 544, Bimbo 454, Coppel 359, Liverpool 328, CFE 284, Cemex 278 (plus other Cemex entities), Deacero 277, Ternium 254, Walmart 238 | same | 2026 | high |
| Returns filed after the deadline (any type) | 49,139 of 142,780 returns (34%) for Jan-Apr 2026; 46,940 (33%) for Sep-Dec 2025; 52,770 (36%) for May-Aug 2025; 68,018 (40%) for Jan-Apr 2025 | same; deadlines 18 May 2026, 19 Jan 2026, 17 Sep 2025, 19 May 2025 (17th moved to next business day) | 2025-2026 | high for dates; "late" assumes the listed date is the filing date |
| Correction returns ("Corrección") per period | 2,870-3,809 | same | 2025-2026 | high |
| Filers on the IMSS "inconsistent information" list | only 5 contractors (15 rows) for Jan-Apr 2026 and 4 for Sep-Dec 2025 | my count of [LIIP2026.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIP2026.xlsx) and [LIIT2025.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIT2025.xlsx) | 2025-2026 | high. The portal already blocks most inconsistencies. |
| REPSE register, press figure | "more than 89,000" firms (Jan 2026, attributed to STPS, no link) | [twind.io](https://twind.io/mx/repse-mexico-2026/); [LexLatin](https://lexlatin.com/entrevistas/repse-mexico-nuevas-auditorias) | 2026 | low. It conflicts with 142,000+ ICSOE filers, so I do not use it. |
| **Accounting and audit firms (SCIAN 541211)** - channel buyers | **16,356** establishments: 12,130 with 0-5 staff, 2,604 with 6-10, 1,307 with 11-30, 315 with more than 30. Plus 580 in "other accounting services" (541219). | my count of the [INEGI DENUE bulk file for sector 54](https://www.inegi.org.mx/contenidos/masiva/denue/denue_00_54_csv.zip) (May 2026 release) | 2026 | high for listed establishments; home-based accountants are under-counted |
| Accounting firms that actually file ICSOE/SISUB for clients | not counted; my estimate is 3,000-6,000 (unverified) | - | - | low |


**Sector mix of the 49,705 contract filers** (my keyword classification of the "Servicios u obras contratados" field in [LPP2026.xlsx](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); each filer is put in the sector of most of its contracts; medium confidence, because the field is free text):

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

- The buyer is mostly an **industrial-services or construction subcontractor**, not a cleaning or security firm. Many "contracts" are single purchase orders (the text often starts with an SAP order number such as "4500010070 ..."). A maintenance firm can therefore report dozens of short contracts a period, each with its own worker list.

**What the counts mean.**
- The real buyer pool is about **47,000 contractors with live contracts**, not 89,000 or 142,000. The 96,000-plus nil filers must still file, but have little work to do.
- The pool is **stable**: 142,000-147,000 filers and 46,000-47,000 contract filers in each of the last four periods, despite the mass REPSE cancellations of 2025 reported in the press.
- Most contract filers are **small**: half report 11 or fewer workers, and 55% have one client.
- About **a third of all returns are filed late**. Late filing is the most common failure, not bad data.

## Working notes: competitors found so far (resumed run, to be folded into the competitor table)

- **SIFO "REPSE-Fácil"** (sifo.com.mx, a small accounting-software firm in Autlán, Jalisco). A module inside SIFO Contabilidad. It keeps contracts, contract objects, clients ("beneficiarios") and workers, loads workers from payroll CFDI XML or by hand, and generates the ICSOE Excel file and the three SISUB reports. Multi-RFC. Price: MXN 1,500 a year with VAT for 1-5 RFCs or employer registrations, MXN 3,000 for 6-10, MXN 4,500 for 11-15, MXN 6,000 for 16-20, MXN 7,500 for 21-25 ([SIFO product page](https://sifo.com.mx/sistema-para-repse.php); [SIFO prices](https://sifo.com.mx/precios_sifo.php)). No cross-checks against SUA or IMSS inconsistency rules are claimed. **This is a direct competitor at a very low price.**
- **CONTPAQi Nóminas** (market-leading desktop payroll). Since version 15.1.2 (2022) it has a "Reporte SISUB detalle de trabajadores" that exports the SISUB worker CSV, and an "ICSOE listado de trabajadores" report that exports NSS, CURP and SBC to the IMSS bulk template. Version 16.2.2 (2024) grouped them under a REPSE menu. Contract numbers and work-centre addresses are typed in by hand; workers are filtered by employer registration, department or job, not by contract ([CONTPAQi carta técnica 15.1.2, SISUB](https://conocimiento.blob.core.windows.net/conocimiento/2022/Contables/Nominas/CartasTecnicas/CT_Nominas_1512/reporte_sisub.html); [carta técnica 16.2.2, ICSOE](https://conocimiento.blob.core.windows.net/conocimiento/2024/Contables/Nominas/CartasTecnicas/CT_Nominas_1622/reporte_icsoe_listado_de_trabajadores.html)). **The B2 report's "biggest unknown" is answered: the leading payroll suite already exports the worker part of both files.** It does not keep a contract register, build the contract and obligated-party layouts, or cross-check.
- **MueveTierras** (muevetierras.mx): ERP for heavy-machinery rental firms. Starter MXN 999 a month lists "SISUB / ICSOE (REPSE)"; Pro MXN 2,499 a month (MXN 1,999 paid yearly) adds four-monthly SISUB and ICSOE, and a REPSE worker register. Prices before VAT. Card, SPEI and OXXO through Stripe ([MueveTierras prices](https://muevetierras.mx/precios); [ICSOE guide](https://muevetierras.mx/icsoe-imss)). Vertical niche only.
- **Client-side REPSE supplier platforms** (do not prepare the filings; they collect the acknowledgements): Vigía Legal (annual subscription by active suppliers, tiers from 10-50 suppliers, prices on proposal) ([Vigía Legal prices](https://www.vigialegal.mx/precios)); SISE by TaxSAT ([SISE](https://sise.taxsat.tax/software-repse-la-solucion-para-evitar-multas-y-automatizar-procesos)); Portal de Proveedores México REPSE module ([PPM](https://portaldeproveedoresmexico.com/gestion-proveedores-repse/)); a SAP S/4HANA REPSE portal page that lists "Acuses de ICSOE y SISUB" among supplier uploads ([repse.org.mx](https://www.repse.org.mx/repse-portal.html)); BDO; Xternall.
- **Accountant fees:** Praxium's 2026 fee guide puts a REPSE registration file at MXN 8,000-25,000 (from about MXN 5,000 in simple cases) and says ICSOE and SISUB are often billed separately or in an annual package, with the market range "to be validated" ([Praxium, cost of REPSE](https://praxiumconsultores.com/blog/cuanto-cobra-contador-tramitar-repse)). A monthly retainer for an SME (persona moral with payroll) is MXN 3,000-7,000, and ad-hoc advice MXN 700-1,000 an hour ([Praxium, Guadalajara fees](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-guadalajara)).
