# Mexico ICSOE/SISUB tool: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B2 report](../reports/mexico-b2.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product and go-to-market detail are covered by the other section files.

Status: work in progress. Counts below are final; other sections are being filled.

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

**What the counts mean.**
- The real buyer pool is about **47,000 contractors with live contracts**, not 89,000 or 142,000. The 96,000-plus nil filers must still file, but have little work to do.
- The pool is **stable**: 142,000-147,000 filers and 46,000-47,000 contract filers in each of the last four periods, despite the mass REPSE cancellations of 2025 reported in the press.
- Most contract filers are **small**: half report 11 or fewer workers, and 55% have one client.
- About **a third of all returns are filed late**. Late filing is the most common failure, not bad data.
