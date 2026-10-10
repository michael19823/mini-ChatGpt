# Mexico: Registro Nacional compliance keeper for private-security firms — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): the federal law (LFSP) and its Reglamento (RLFSP), ten state regimes, filing channels, enforcement, and 88 testable requirements (R1-R88), each traced to an article.
- [02 Market and competition](02-market-and-competition.md): buyer counts from INEGI, AMESP and state lists, what firms pay today, 15 competitors checked, channels and other countries.
- [03 Product and technical design](03-product-and-tech.md): users, feature map, flows, screens, data sources, data model, stack, security, running costs, agent work streams and build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, 90-day launch, payments and tax friction, company options and costs, contracts, a 36-month model and kill criteria.

This page reconciles the four files where they disagree and gives one plan. Facts carry a source link, mostly taken from those files. "My estimate" marks numbers derived here. "(unverified)" marks facts no source confirmed. Money is in MXN unless stated; USD 1 = MXN 18 and EUR 1 = MXN 21 are planning rates (as in 02 and 04). "+ IVA" means before Mexico's 16% VAT.

Short names: **DGSP** = Dirección General de Seguridad Privada (federal regulator, inside the SSPC). **Registro** = Registro Nacional de Empresas, Personal y Equipo de Seguridad Privada. **Federal firm** = a firm authorised by the DGSP because it works in two or more states. **Alta / baja** = a hire or new item / a leaver or removed item. **Acuse** = stamped receipt. **Gestor** = the person (in-house or a "gestoría") who does government paperwork. **UMA** = the unit fines are set in, MXN 117.31 in Sep 2026 ([SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650)).

---

## 1. Decision in one page

**Verdict: worth a cheap, staged test. New score: 6/10, the same as the re-assessment, but for different reasons.**

At best this is a small, profitable niche business run from abroad: about USD 70,000-250,000 of yearly recurring revenue by year 3. It is not a large business. The build is cheap, so the test is cheap. The question the test must answer is whether small guard firms will pay for something they mostly do badly today and are rarely punished for.

**The case for it.**

- **The duty is monthly, fixed and stacked.** A federal firm must report the status of, and every change to, each Registro heading "within the first 10 calendar days of each month" ([LFSP art. 13](https://mley.mx/LFSP/articulo/13/)). Most states add their own monthly report, usually due in the first 5 business days (CDMX, Estado de México, Baja California, Tamaulipas and others; [01](01-law-and-requirements.md#regional-differences)). A federal firm working in CDMX and Estado de México owes three monthly reports, with two deadlines and three formats.
- **There is no portal to compete with.** The DGSP keeps the Registro in internal systems; its staff type in what firms bring to the "ventanilla única", and firms have no login ([ASF audit 2020](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf)). Baja California takes an 8-part Excel and Word pack by email, due even in a month with no changes ([BC guide](https://www.seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)). So the state leaves everything undone: the firm's own register, the match with payroll, the packs, the proof of filing and the inspection file.
- **Nobody sells this.** 02 checked 15 products and alternatives. None keeps the Registro data or builds the DGSP or state reports. The closest, Vigon, has staff files, payroll and expiry alerts but no regulatory reports ([Vigon](https://vigonops.com/erp-seguridad-privada-mexico/)). The real incumbent is a paid gestor at about MXN 18,000 a month ([Computrabajo ad](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405)).
- **The market is bigger than the re-assessment assumed.** INEGI's 2026 census counts 5,155 firms registered with 31 state governments at end-2025 ([INEGI CNSPF-E 2026](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf)), plus 1,147 in CDMX ([Excélsior](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura)). AMESP counts 1,487 DGSP-registered (federal) firms ([AMESP at ANTAD 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)). The paying segment is about 3,500 firms (02's estimate).
- **It is easy to build.** A small register of people, equipment and offices, where every change is a dated event with a cause, plus official Excel and Word templates. No government integration. Cash to a sellable product: about USD 7,000-19,000 ([03](03-product-and-tech.md#budget)).

**What the deep dive changed** (compared with the re-assessment, which scored it 6/10):

| Topic | Re-assessment | Deep dive | Effect |
|---|---|---|---|
| Paying buyers | about 2,000 firms with 30+ staff | **about 3,500** (3,300-3,700), of which about 1,100-1,200 federal ([02](02-market-and-competition.md#buyer-segments)) | Up |
| Price | MXN 3,000 a month for a typical federal firm | **MXN 750 (single-state) to 1,900 (federal) a month.** Cloud payroll for 150 staff costs only about MXN 11,700 a year ([CONTPAQi 2026](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf)) | Down |
| Year-3 revenue, base | MXN 5.6M | **MXN 3.9M cash in year 3; MXN 4.5M recurring revenue (ARR) at month 36** ([04](04-gtm-company-finance.md#scenario-summary)) | Down |
| Filing channel | Unknown federally; email in Baja California | **No firm-facing portal anywhere found.** Paper and Excel at the DGSP ventanilla; email (BC) or in person (Puebla) for states ([01](01-law-and-requirements.md#filing-channels-and-formats)). The federal monthly format itself is still unseen | Up, with one hole |
| State duties | BC and Tamaulipas | **Monthly duties read in the law texts of 10 states** ([01](01-law-and-requirements.md#regional-differences)) | Up |
| Enforcement | "Real and recent" | **Real but thin.** The DGSP made 67 inspection visits in 2020 for about 1,650 firms ([ASF](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf)) and sanctioned "more than 20" firms in 2025 ([Infobae](https://www.infobae.com/mexico/2025/12/16/sancionan-a-mas-de-20-empresas-de-seguridad-privada-en-2025-revelan-desafios-estructurales-en-la-regulacion-del-sector/)). A missed monthly report alone is only a reprimand (RLFSP art. 60-I, [RLFSP](https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFSP.pdf)) | Down |
| Regulator builds its own tool | Possible | **A deadline exists.** A Feb 2026 SSPC Acuerdo gives the DGSP one year to adapt its registry systems ([SIDOF 5784083](https://sidof.segob.gob.mx/notas/docFuente/5784083)). Guatemala (Apr 2026) and Neuquén, Argentina (Mar 2026) launched online platforms for the same job ([AGN](https://agn.gt/?p=535356); [Noticias NQN](https://www.noticiasnqn.com.ar/noticias/2026/03/26/330095-neuquen-lanzo-una-plataforma-digital-para-regular-la-seguridad-privada)) | Down |
| Company and payments | Not studied | **No Mexican company needed at launch.** Two buyer-side frictions: whether Mexican IVA applies to this SaaS (LIVA art. 18-B is contested) and Mexican firms' habit of demanding a CFDI e-invoice ([04](04-gtm-company-finance.md#buyer-side-tax-friction)) | Neutral |

The gains and losses roughly cancel, so the score stays at 6/10.

**What it is worth** (04's monthly model; the founder builds with AI agents and takes no pay; company abroad):

| | Low | Base | High |
|---|---|---|---|
| Paying firms at month 12 / 36 | 26 / 77 | 67 / 228 | 121 / 453 |
| Recurring revenue (ARR) at month 36 | MXN 1.24M (USD 69k) | **MXN 4.52M (USD 251k)** | MXN 10.06M (USD 559k) |
| Year-3 profit before founder pay and tax | MXN 0.24M | **MXN 2.18M (USD 121k)** | MXN 6.05M (USD 336k) |
| Peak cash need | MXN 727k (USD 40k) | **MXN 312k (USD 17k)** | MXN 294k (USD 16k) |

Source: [04 scenario summary](04-gtm-company-finance.md#scenario-summary). My reading: plan on the band between low and base. The base case needs partners (gestorías, payroll accountants) to bring about a third of sales, because the founder is abroad and the sector runs on relationships.

**Key conditions.**

1. **A real federal monthly pack and its acuse** from 2-3 firms in the first two weeks. Without it the federal pack stays a guess ([01 open question 1](01-law-and-requirements.md#open-questions)).
2. **At least 3 pilots from 20 interviews by 30 Nov 2026**, and no more than half saying they would never pay MXN 750 a month ([04 kill criteria](04-gtm-company-finance.md#milestones-and-kill-criteria)).
3. **A written Mexican tax opinion** on IVA (LIVA art. 18-B) and withholding before the first charge, and a selling company in a country with a tax treaty with Mexico ([04](04-gtm-company-finance.md#buyer-side-tax-friction)).
4. **A lawyer's sign-off on sensitive data**: guards' medical, psychological and drug-test results are sensitive data under the 2025 data-protection law ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf), arts. 2-VI, 8).
5. **A partner channel that works**: gestorías on a multi-firm plan with a referral fee.

**Do this first** (week of 12 Oct 2026, under USD 1,000 cash): 10-12 interviews, collect real packs and acuses, file a transparency request to the SSPC, put up a Spanish landing page, start the code foundation with agents, and get quotes from a lawyer and a tax adviser. **Gate:** spend on the lawyer and the security test (about USD 8,000-10,000) only after 3 pilots have signed.

### Where the files disagree, and what this plan uses

| Item | What the files say | This plan uses | Why |
|---|---|---|---|
| Federal firms | 01: 863 firms with staff in the Registro, 1,186 per the SSPC (Jul 2020) and 1,651 "subject to verification" (2020, [ASF](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf)). 02: 1,232 on the 2018 open-data list ([datamx](https://www.datamx.io/dataset/direccion-general-de-seguridad-privada/resource/9e1109a2-5762-4a75-8f27-e221a815661d)), 1,487 per AMESP 2025 | **About 1,500; about 1,100-1,200 that pay** | Newest figure, inside the 2018-2020 range. The 2020 figures differ by definition (active with staff vs. on the books) |
| Paying segment | Re-assessment: 2,000. 02 and 04: 3,300-3,700 | **About 3,500** | 02 builds it from the official INEGI census, not from industry claims |
| Federal plan price | Re-assessment: MXN 3,000 a month. 02 and 04: MXN 1,900 | **MXN 1,900 list; test 3,000 in pilots** | Software budgets are small; the gestor's salary is the real anchor |
| Year-3 revenue | Re-assessment MXN 5.6M; 02 MXN 3.8M; 04 MXN 3.9M cash in year 3 and MXN 4.5M ARR at month 36 | **04's model** | 02 and 04 agree on year-3 revenue; 04 also carries costs and cash by month |
| MVP date | 04's 90-day table: MVP by 1 Nov. 03: code-complete about 6 Nov, tested MVP 13 Nov, sellable 11 Dec | **03: MVP 13 Nov, sellable 11 Dec 2026** | 04 skips the discovery week and the integration week. Three weeks of coding is still the core (19 Oct-6 Nov) |
| First paid charges | 03: paid launch week of 7 Dec. 04: January | **January 2027** | Guard firms pay the aguinaldo before 20 December ([LFT art. 87](https://mley.mx/LFT/articulo/87/)); pilots run free to 31 Dec |
| Cash to sellable | 03: USD 7,100-18,900. 04: about USD 11,000 in months 1-2 (legal, tax and trademark MXN 95,000; security test MXN 90,000; AI tools) | **USD 11,000 planning figure, range 7,000-19,000** | Same items; 04 sits mid-range |
| DGSP system deadline | 01: about Apr 2027 (publication date unverified). 04: about Feb 2027 | **Feb-Apr 2027** | I searched to settle the publication date and could not; treat the window as early 2027 |
| Federal online filing | 02: "unknown". 01 and 03: no firm-facing portal | **No portal; email possible** | The ASF audit describes staff keying in paper filings. A May 2020 SSPC acuerdo opened an e-mail "ventanilla electrónica" for DGSP filings during COVID ([Justia copy of the DOF](https://docs.mexico.justia.com/recursos/covid-19/2020-05-29/secretaria-de-seguridad-y-proteccion-ciudadana-01.pdf), search snippet; whether it still runs is unverified) |
| Order of state packs | 03: v1 = CDMX, Estado de México, Nuevo León, Jalisco, Puebla. 04: Tamaulipas, CDMX, Estado de México, Nuevo León by month 3 | **Baja California in the MVP; then CDMX and Estado de México; then Nuevo León and Tamaulipas; others as pilots bring forms** | CDMX and Estado de México hold over half of federal head offices (444 and 204 of 1,232 in 2018, [02](02-market-and-competition.md#buyer-segments)) |
| Mexican company | 03 defers. 04: not at launch; base case about month 16 | **Not at launch; open on triggers** | Matches the owner's preference; see section 9 |

---

## 2. Why now: the law and enforcement

**The texts.** The Ley Federal de Seguridad Privada ([LFSP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFSP.pdf), last reform 2011) and its Reglamento ([RLFSP](https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFSP.pdf), 2011, never reformed) still apply. No Ley General de Seguridad Privada has been issued, although Congress has had the power since May 2021 ([ASF](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf); [Zeta Tijuana, Aug 2026](https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/)). The old, stable texts are good for a product: the rules are known.

**Who is obliged.**

- Any firm or person providing private security in **two or more states** needs a DGSP authorisation, valid one year (LFSP art. 1, 16, 17). It also needs a local authorisation in each state where it works ([LGSNSP 2025 art. 122](https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNSP.pdf)).
- **Single-state firms** answer only to their state's law and register (LFSP art. 1).
- **No size exemption.** A one-guard firm has the same duties ([01](01-law-and-requirements.md#who-is-obliged)).
- Seven modalities (persons, property, transport of valuables, alarms, information security, background checks, linked activities) switch some duties on or off (LFSP art. 15).

**What must be done, and when** (federal; full list of 33 duties in [01](01-law-and-requirements.md#duty-by-duty-table)):

| Duty | Deadline | Basis | Penalty |
|---|---|---|---|
| **Monthly report** of status and changes for every Registro heading: offices and branches, legal representatives, corporate changes, managers and admin staff, each guard's file (altas, bajas with cause, transfers, training, exam results), arms, vehicles, uniforms, radios | **First 10 calendar days of each month**, also with no changes | LFSP 12, 13; RLFSP 48 | Reprimand; 1,000-3,000 UMA if repeated within 6 months (RLFSP 60-I, 62-I) |
| Onboard each guard: police-record check, RNPSP inscription (CUIP), DGSP ID card, passing exams | Before the guard works | LFSP 28, 32-XVI; RLFSP 30, 32 | Reprimand up to suspension; staff with records: 3,000-5,000 UMA |
| Record each baja with its cause; **return the ID card** | Card back within **3 business days** | RLFSP 31, 32 | Reprimand |
| Medical, psychological and toxicology exams for every guard | At least **once a year** | LFSP 32-VI; RLFSP 47-50 | Suspension |
| Training in the modality and in human rights, proven by DC-3 certificates | At least **once a year** per guard | RLFSP 42 | Up to 3,000-5,000 UMA |
| Register every uniform model (4 photos), vehicle, arm, radio and dog | **Before use** | LFSP 32-IV; RLFSP 34 | Up to revocation; in practice reprimand plus 1,000 UMA |
| Report office and branch openings, moves and closures | On each change, then monthly | LFSP 12-IV, 32-V | Suspension |
| Report theft or loss of documents or IDs; suspension of activity | **3 business days** | LFSP 32-XXI, XXIII | Reprimand to suspension |
| Tell each state about a federal authorisation or revalidation | **30 calendar days** | LFSP 32-XXVII | Suspension |
| Revalidate the authorisation | At least **30 business days** before expiry | LFSP 19 | Suspension; after expiry a new authorisation is needed |

Federal fees add up per event: about MXN 411 to onboard one unarmed guard (record check 77.46, RNPSP inscription 260.11, ID card 73.51) and MXN 78.91 per uniform item or radio registered ([LFD art. 195-X](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFD.pdf); 01's arithmetic). The per-item fee is a likely reason firms leave uniform altas unreported (01's inference).

**The state layer** ([01](01-law-and-requirements.md#regional-differences)):

| State | Monthly deadline | Channel | Notable |
|---|---|---|---|
| CDMX | First 5 business days (art. 35-V) | Not found | Exam results within 10 business days; **clients fined 3,500-5,000 Unidades de Cuenta for hiring a non-compliant firm** ([CDMX law](https://www.congresocdmx.gob.mx/archivo-5fd271a8a8d62a47b21b414c89e8b6390a77423a.pdf), art. 37 Bis) |
| Estado de México | First 5 business days (art. 30) | Not found | Bajas with causes, court cases ([Edomex law](https://legislacion.edomex.gob.mx/sites/legislacion.edomex.gob.mx/files/files/pdf/ley/vig/leyvig078.pdf), snippets) |
| Baja California | First 5 business days, **due even with no changes** | **Email** with Excel and Word files | "The cardex, the private-security system and the payroll must be exactly the same" ([BC guide](https://www.seguridadbc.gob.mx/Planeacion/padron/GUIA%20LLENADO%20CORRECTO%20DEL%20INFORME%20MENSUAL.pdf)) |
| Nuevo León | First 10 calendar days, plus a monthly activity report | Not found | A 22 Apr 2026 reform not yet read ([NL law](https://www.hcnl.gob.mx/trabajo_legislativo/leyes/pdf/2880.pdf)) |
| Jalisco | Monthly written notice | Written | State ID card back within 3 calendar days ([Jalisco Reglamento](https://info.jalisco.gob.mx/sites/default/files/leyes/Reglamento_de_los_Servicios_Privados_de_Seguridad_Jalisco_0.pdf)) |
| Puebla | Monthly | **In person**, .xlsx annexes; email only for "no movements" ([Puebla ficha](https://ventanilla.puebla.gob.mx/web/fichaAsunto.do?opcion=0&asas_ide_asu=2414&ruta=%2Fweb%2FasuntosMasUsuales.do%3Fopcion%3D0%21periodo%3D0), snippet) | |
| Tamaulipas, Guanajuato, Aguascalientes, Guerrero | First 5 days | Not found | From law texts read in snippets ([01](01-law-and-requirements.md#regional-differences)) |
| Other 21 states | Not checked | | Open question |

**How the federal filing works today.**

- No firm-facing portal. DGSP staff type filings into internal systems; in 2020 they handled 5,966 Registro procedures this way ([ASF](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf)).
- Equipment altas and bajas go to the ventanilla in an Excel layout with a signed request; uniforms need the invoice and four images each (search snippet of the [DGSP equipment guide](https://dgsp.sspc.gob.mx/static/contenido/Guia_Solicitud_Alta_Baja_Equipo.pdf); the DGSP site refused every connection).
- Standard forms replaced free-form letters in 2025 and 2026 ([SIDOF 5758085](https://sidof.segob.gob.mx/notas/docFuente/5758085); [SIDOF 5784083](https://sidof.segob.gob.mx/notas/docFuente/5784083)).
- **The monthly report format was not found.** This is the largest single gap in the research.
- Real-world timing: a CDMX gestoría lists 8 steps and 45-90 business days to put one armed guard to work ([RACEK](https://www.racekcdmx.com/tramites-dgsp.html)). So the product must track pending steps, not just done or not done.

**Enforcement: real, public, but thin.**

- **Capacity is small.** In 2020 the DGSP planned 350 visits, cut the target to 76 after a 75% budget cut, and made 67, for 1,651 firms ([ASF](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf)). In 2025 it sanctioned "more than 20" firms, with a top fine of MXN 325,710 ([Infobae](https://www.infobae.com/mexico/2025/12/16/sancionan-a-mas-de-20-empresas-de-seguridad-privada-en-2025-revelan-desafios-estructurales-en-la-regulacion-del-sector/)).
- **Sanctions are public.** Each is published in the DOF and a national newspaper at the firm's cost, naming the firm (LFSP art. 42). That hurts a firm bidding for corporate or government contracts (reasoned).
- **The 2026 findings are all register gaps:**

| Firm | Date | Gap | Sanction | Source |
|---|---|---|---|---|
| COSSEPPA | 11 Sep 2026 | Manager and 7 admin altas not reported; 205 uniforms not registered; a baja reported only after the visit | Reprimand + 1,000 UMA (MXN 117,310) | [SIDOF 5799650](https://sidof.segob.gob.mx/notas/docFuente/5799650) |
| GCH Seguridad Privada | 28 Aug 2026 | Baja of 112 uniforms not reported | Reprimand | [SIDOF 5798715](https://sidof.segob.gob.mx/notas/docFuente/5798715) |
| Multisistemas Uribe | 20 Jul 2026 | Altas of 2 and bajas of 114 guards not recorded | Reprimand | [SIDOF 5795770](https://sidof.segob.gob.mx/notas/docFuente/5795770) |
| Oblak | Jul 2026 | Training not reported in the first 10 days of the month | Reprimand | [SIDOF 5795399](https://sidof.segob.gob.mx/notas/docFuente/5795399) |
| Diagnóstico DRP | 9 Apr 2026 | Head-office address change not updated | Reprimand + 1,000 UMA (MXN 113,140) | [SIDOF 5795553](https://sidof.segob.gob.mx/notas/docFuente/5795553) |
| Servicios Terrestres | 23 Feb 2026 | Branch closures not reported; vehicle photos missing; training of 76 staff not proven | Reprimand + 1,500 UMA (MXN 169,710) | [SIDOF 5797220](https://sidof.segob.gob.mx/notas/docFuente/5797220) |

- **Fixing a gap during the visit does not avoid the sanction** (COSSEPPA). Fines appear when several gaps stack up.
- **Most firms under-report.** In 2020 the DGSP received 3 personnel bajas and 1 ID-card return against about 25,000 new guard registrations ([ASF](https://www.asf.gob.mx/Trans/Informes/IR2020b/Documentos/Auditorias/2020_0095_a.pdf)).
- **States are tightening.** Baja California found 80 of 300+ firms with no record of activity and is revalidating every firm ([El Imparcial, Jul 2025](https://www.elimparcial.com/mxl/mexicali/2025/07/04/pausa-en-certificaciones-de-guardias-es-por-irregularidades-en-empresas-de-seguridad/)). Jalisco proposed a public state register with sanctions in Sep 2026 ([Crónica Jalisco](https://www.cronica.com.mx/jalisco/guadalajara/2026/09/29/buscan-ejercer-mayor-control-sobre-las-empresas-de-seguridad-privada-en-jalisco/)).

**The honest reading.** With about 20-30 federal sanctions a year among about 1,500 federal firms, a firm's yearly chance of a fine is low, perhaps 1-2% (my estimate from the figures above). The expected fine is a few thousand pesos a year. **Fear of fines will not carry the sale on its own.** The product must sell on time saved (the gestor), on one clean record across three or four monthly reports, and on proof for clients, who in CDMX are fined themselves for hiring a non-compliant firm.

**What is changing** ([01](01-law-and-requirements.md#upcoming-changes)):

- **SSPC Acuerdo of 12 Feb 2026:** nine procedures merged into one authorisation procedure, standard inventory annexes, and **one year for the DGSP to adapt its registry systems** ([SIDOF 5784083](https://sidof.segob.gob.mx/notas/docFuente/5784083)). A DGSP online channel may appear in 2027.
- **Press on the 2026 reform:** "real-time" bajas and supervision of "the information" rather than each operation ([Diario de Juárez, Feb 2026](https://diario.mx/nacional/2026/feb/22/apuntan-a-empresas-patito-de-seguridad-privada-1106610.html)).
- **Bill of 8 Sep 2026:** keeps the 10-day monthly report, adds proof of human-rights and use-of-force training, and would publish reprimands in the Registro so clients can check a firm ([Gaceta](https://gaceta.diputados.gob.mx/Gaceta/66/2026/sep/20260908-II-1-2.html)). A bill, not law.
- **Ley General de Seguridad Privada:** overdue since 2021; AMESP asks for a single national register ([Zeta Tijuana](https://zetatijuana.com/2026/08/advierten-aumento-de-empresas-irregulares-de-seguridad-privada-piden-padron-unico/)). It could unify formats (good for a tool) or bring a state portal (a threat).

---

## 3. Customers

| Segment | Count | Confidence | Source |
|---|---|---|---|
| Firms registered with 31 state governments (end-2025) | 5,155, with 108,426 staff | High (official census; counts firm-state registrations) | [INEGI CNSPF-E 2026](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf) |
| CDMX registered firms (2024) | 1,147 | High | [Excélsior](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura) |
| Federal (DGSP) firms | about 1,500 (1,487 per AMESP, 2025) | Medium-high | [AMESP at ANTAD 2025](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf) |
| Unique licensed firms | about 6,000-6,800 | Medium (02's estimate) | [02](02-market-and-competition.md#buyer-segments) |
| **Paying segment: firms with 11+ staff and a guard workforce** | **about 3,500** (3,300-3,700): about 1,100-1,200 federal plus 2,200-2,500 single-state | Medium (02's estimate) | [02](02-market-and-competition.md#buyer-segments) |
| Gestorías and payroll accountants serving guard firms | about 150 | Low (unverified) | [04 assumptions](04-gtm-company-finance.md#assumptions) |
| Formal sector, for scale | 7,670 IMSS employer registrations, 466,587 insured jobs (Jul 2026) | Medium-high | [Excélsior](https://www.excelsior.com.mx/nacional/personas-detras-empresa-segura) |

Top states by registered firms (end-2025): Nuevo León 516, Estado de México 478, Baja California 316, San Luis Potosí 300, Chihuahua 286, Puebla 248, Coahuila 234, Quintana Roo 219 ([INEGI](https://www.inegi.org.mx/contenidos/programas/cnspe/2026/doc/cnspe_2026_resultados.pdf)). Industry claims of "8,000+" firms include informal ones ([Gaceta](https://gaceta.diputados.gob.mx/Gaceta/66/2026/sep/20260908-II-1-2.html)) and are not used.

**Buyer profile.**

- **Small.** Registered firms report 21 staff on average; 78% of establishments in the industry have 50 staff or fewer ([Data México](https://www.economia.gob.mx/datamexico/en/profile/industry/investigation-and-security-services)).
- **The buyer is the owner or director general. The user is the gestor, an assistant or the payroll clerk.**
- **They already pay** an in-house gestor about MXN 18,000 a month ([Computrabajo ad](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405)), payroll software at MXN 3,290-8,690 a year ([CONTPAQi 2026](https://www.contpaqi.com/hubfs/Listas%20de%20precios/Lista_de_Precios_Sistemas_CONTPAQi_2026.pdf)), federal fees of about MXN 33,700 per modality a year ([LFD](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFD.pdf)), and sometimes MXN 2,990-9,990 a month to be listed for leads ([MercadoSeguridad](https://www.mercadoseguridad.mx/planes)).
- **Clients push compliance down.** Corporate buyers ask guard vendors for permits, REPSE registration and association membership ([AMESP at ANTAD](https://simposioseguridad.antad.net/simposio2025/presentaciones/7-Los-paradigmas-de-la-seguridad-privada-en-Mexico.pdf)) and already collect REPSE evidence monthly ([BDO](https://www.bdomexico.com/getmedia/514a6f9e-9faf-406d-b485-82f4be6a21c6/Webinar-REPSE-070825.pdf?ext=.pdf)).
- **Pain evidence comes from regulators and associations, not users.** 02 found no forum threads where owners complain about the monthly report. Interviews must confirm the pain.
- **Not targeted:** micro firms, informal firms (perhaps half the sector), and large groups with their own systems such as EULEN ([EULEN](https://www.eulen.com/mx/wp-content/uploads/sites/8/2025/07/02-Grupo-EULEN-Mexico-Seguridad-formal-frente-al-riesgo-de-la-informalidad-en-el-sector.pdf)).

**Target order.**

1. **Federal firms with 30-500 staff** (about 1,100-1,200): DGSP report plus a report per state; a gestor budget.
2. **Gestorías and payroll accountants:** one sale reaches many firms.
3. **Single-state firms with 11+ staff** in heavy-reporting states (Baja California, Tamaulipas, CDMX, Estado de México, Nuevo León).

**The jobs, in the buyer's words** ([03](03-product-and-tech.md#jobs-to-be-done-in-the-buyers-words)):

1. "Tell me what is due this month, for the DGSP and each state, and what is missing."
2. "When I hire or let go of a guard, make sure every step is done and proven."
3. "Make the monthly report from what already happened, even when nothing happened."
4. "Make sure the cardex, the register and the payroll match before I send."
5. "Warn me before an exam, a course, a licence or the authorisation expires."
6. "When the inspector comes, give me everything in one file."
7. "Show the client that the guards on their site are legal."
8. (Gestoría) "Let me run month-end for all my firms from one screen."

---

## 4. Competition

| Alternative | What it does | Price | Verdict |
|---|---|---|---|
| **In-house gestor, gestorías, Excel and paper** | All duties by hand | about MXN 18,000 a month in-house ([Computrabajo](https://mx.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-gestor-gubernamental-en-cuauhtemoc-BA3B0D3F75D2544A61373E686DCF3405)); gestoría fees not published | **The real incumbent.** Sell to the gestor, not against them |
| Official DGSP forms and state formats | Blank forms and an inbox; no record keeping | Free | Baseline. Creates the reconciliation job ([BC formats](https://www.seguridadbc.gob.mx/contenidos/DSP.php)) |
| **Vigon** (Mexico-focused guard ERP) | Shifts, payroll from attendance, staff files with expiry alerts for ID, exams and training. No DGSP, state reports, CUIP, uniforms, arms or vehicles | Not published | **Closest; partial.** Most likely entrant, or an integration partner and exit buyer ([Vigon](https://vigonops.com/erp-seguridad-privada-mexico/)) |
| Edit Innovation (Guadalajara) | Guard profiles, certifications, documents, shifts, GPS | Not published | Partial; no reports ([Edit Innovation](https://editinnovation.com/software-seguridad-privada.html)) |
| Track Vigilante, Evidence, Secusoft, Kizeo | Rounds, shifts, incidents, field forms | Not published | Does not do the job ([Track Vigilante](https://www.trackvigilante.com/); [Evidence](https://www.evidence.com.mx/docs/app-y-software-para-empresas-de-seguridad-privada)) |
| C-Guard Pro; GuardsPro | Patrols, shifts, payroll; licence expiry alerts | USD 5-10 per user a month ([C-Guard Pro](https://www.comparasoftware.com/c-guard-pro); [GuardsPro](https://www.guardspro.com/pricing)) | Does not do the job; per-user pricing would cost a 150-guard firm USD 750-1,500 a month |
| TrackTik / Trackforce Valiant | Global guard platform for large firms | Enterprise quotes | Not aimed at this market ([Trackforce](https://www.trackforce.com/es/?p=5088)) |
| Payroll: CONTPAQi, Aspel NOI, Runa, Worky | CFDI payroll, IMSS; holds the staff master | MXN 3,290-8,690+ a year | **The data source to import from**, not a rival |
| REPSE portals (BDO module, Xternall) | Clients collect vendors' monthly labour evidence | Paid by clients | Adjacent; proves firms already upload monthly evidence ([Xternall](https://elceo.com/negocios/xternall-la-plataforma-que-ayuda-a-las-empresas-a-supervisar-a-sus-proveedores-repse/)) |
| MercadoSeguridad.mx | Directory of DGSP-authorised firms; paid lead plans | MXN 2,990-9,990+ a month | **A channel** ("verified compliant" badge), not a rival ([MercadoSeguridad](https://www.mercadoseguridad.mx/empresas-autorizadas-dgsp/cdmx)) |

**Conclusion.**

- No local product does the job, and the free baseline is weak: 2016 PDF forms federally (the gob.mx links now return 404, per 03) and Excel plus email in the states.
- The existing tools are partial (expiry alerts) or priced per user. That is an opening, per the owner's criteria.
- **The threat is a fast follower, not an incumbent.** Vigon could add a DGSP pack. Answer: move first on state formats and the gestoría channel, and offer Vigon an import or a partnership.
- **The other threat is the regulator.** A DGSP or national platform would turn the federal "report builder" into a pre-filler. The register, the state packs, the payroll match and the evidence trail would still be needed.

---

## 5. Product

### Positioning

> "Registro al día: tu Registro y tus informes mensuales, siempre listos para la visita." Your register and monthly reports, always ready for the inspection.

- **Not another guard-operations app.** It sits next to payroll (CONTPAQi, NOI) and guard apps (Vigon, C-Guard Pro), imports their staff lists, and produces the DGSP and state packs plus an inspection file.
- **It prepares; the firm signs and files.** The legal representative signs every pack. The vendor never claims to file for the firm, which keeps it out of the gestor's role and limits liability ([03](03-product-and-tech.md#liability-and-how-to-limit-it)).
- **Never promise "zero fines".** Promise "every change recorded and reported on time, with proof".

### Users

| Role | Main jobs | Rights |
|---|---|---|
| Owner or legal representative | Sign packs; approve altas and bajas; pay | Everything; billing; grant consultant access |
| Compliance coordinator or in-house gestor | Keep the register; prepare packs; chase expiries; upload acuses; prepare inspections | Everything except billing and users |
| HR or payroll clerk | Hires and leavers; monthly payroll upload; fix name and CURP mismatches | People, imports; no exam results |
| Operations supervisor | Post guards to sites; incidents; equipment | Sees "fit / not fit", never exam detail |
| External gestor or consultant | Month-end for 5-20 firms | Per-firm access granted by each owner, logged |
| Guard (v1) | Upload own documents; sign the privacy consent by a one-time link | Own file only |
| Inspector or corporate client | No login; gets the inspection pack or a site certificate | Read-only exports |

### Feature map

Condensed from [03](03-product-and-tech.md#feature-map-mvp--v1--later). Requirement numbers refer to [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements).

| Module | MVP (by 13 Nov 2026) | v1 (Jan-Mar 2027) | Later |
|---|---|---|---|
| Firm set-up and calendar | Profile (RFC, DGSP number, dates, modalities, states); state authorisations; obligation calendar (R1-R3) | Modality switches; 30-day state notices (R5, R6) | Multi-company groups |
| Rules engine | Deadlines, fields, fees as data with effective date, legal basis and URL; business-day calculator with holiday tables (R4, R7) | Rule editor for the lawyer; "what changed" notices | Public change feed |
| People | One record per CURP with check-digit validation; RLFSP art. 33 fields; roles; dated events with causes; CUIP status; ID-card tracking (R8-R14) | Eligibility checks per role; sanctions and court cases (R11, R17, R21) | Paid RENAPO CURP lookup |
| Onboarding gate | Checklist with dates and DGSP folios; block posting an unfit guard, logged override; age of pending DGSP requests (R18, R20, R22) | Record-check list; pre-filled CUIP form; company credential (R15, R19) | Guard self-service by WhatsApp |
| Bajas | Cause and proof; DGSP baja form; 3-business-day card return; BC "cédula de baja" (R23, R24) | Loss and closure paths (R25, R26) | |
| Exams and training | Exam records with certificate; due = last + 12 months, alerts at 60/30/7 days; DC-3 per participant; modality and human-rights flags (R27, R28, R31, R32) | Failed-exam workflow; CDMX 10-day exam notice; training plan (R29, R30, R33) | |
| Equipment | Uniform models with 4 photos; stock from invoices; vehicles (VIN check); arms; radios; DGSP equipment Excel export; block unregistered items (R34-R35, R37-R39, R41-R42) | Photo size checks; dogs; SEDENA licence tracker (R36, R40, R85) | QR labels |
| Offices and corporate | Offices with evidence; branch closure creates a report line; partners and legal reps (R43, R44, R46) | Signage checklist; "Cambios" pack (R45, R47) | |
| Clients, sites, incidents | One services register feeding all reports; incident log (R62, R67) | Site compliance certificate for clients (R86) | Client portal |
| Import and reconciliation | Excel mapper with saved mappings; CFDI payroll XML (ZIP) import; "paid but not registered" and the reverse; BC three-way block (R16, R57) | IMSS movement files and SUA | Payroll or Vigon connectors |
| **Federal monthly pack** | Period, due date, status; events under the 12 headings plus snapshot; exams, training, incident statement; "no changes" report; signed cover, Excel and PDF annexes, indexed evidence folder; pre-export checks; late items; acuse required (R48-R55) | Swap to the real DGSP layout (configuration only) | Upload file or API if the DGSP opens a portal |
| State packs | **Baja California** in the official files (R56, R57) | CDMX, Estado de México, then Nuevo León, Tamaulipas, Jalisco, Puebla (R58-R61) | Others on demand |
| Event notices | — | Theft or loss, suspension, asset freeze, alarm-firm notices with clocks (R63-R66) | 6-monthly buyer register (R68) |
| Authorisation | Revalidation date and alerts from 90 days (R69) | Revalidation pack with Anexo III inventories; bond tracker (R70-R72) | |
| Inspection | One-click inspection pack for a date (R73) | Self-audit score with sanction ranges; 6-month reincidence window (R74, R75) | |
| Audit, retention, privacy | Append-only hash-chained log; hashed evidence files; retention and legal hold; consent templates; field-encrypted exam data; processor agreement; MFA, backups (R77-R83) | Guard consent by link; ARCO helper | Qualified time-stamps |
| Gestoría | One login for many firms; portfolio due-list | Bulk month-end; own logo | White-label |
| Adjacent | — | REPSE and ICSOE/SISUB reminders (R84) | Client compliance pack; REPSE evidence pack |
| Language and billing | Mexican Spanish, legal terms, DD/MM/YYYY (R87, R88); email reminders; card checkout | WhatsApp reminders; yearly and consultant plans | |

**Why this cut.** It covers the 2026 sanction findings one for one (unreported altas, bajas, uniforms, branches, managers, training). Baja California goes first because its formats are public and downloadable, its channel is email, and it is revalidating every firm ([03](03-product-and-tech.md#why-this-cut-for-the-mvp)).

**The full list of 88 legal requirements, each with a test, is in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements). Treat it as the acceptance checklist.**

### Key flows

1. **First day: dashboard in under 2 hours.** Sign up with MFA → firm profile wizard (states, modalities, dates) → calendar is built → upload the current cardex or payroll Excel; the column mapper suggests matches → validation report (bad CURPs and RFCs, duplicates, missing CUIPs) → optional ZIP of last month's CFDI payroll XMLs for the payroll match → equipment quick start from an Excel template → traffic-light dashboard and "missing data" list.
2. **Hiring a guard (alta).** Person added, or flagged from payroll as "paid, not registered" → onboarding checklist with dates, folios, files and fees → the guard cannot be posted until inscribed (or with a valid folio), exams valid and trained → the alta lands in the next federal report and each relevant state report.
3. **A guard leaves (baja).** Date, cause, proof → DGSP baja form and BC cédula → card-return task due in 3 business days → equipment issued to the guard is returned or written off.
4. **Buying uniforms.** Upload the invoice → new model gets 4 photos and the marks check → pending alta of N items → DGSP equipment Excel and request → acuse uploaded → items become "registered" and can be issued.
5. **Month-end close (the monthly ritual).** Day 1: draft pack per jurisdiction → pre-export blockers and warnings (bajas without cause, unregistered equipment, expired exams, payroll mismatches, BC cardex differences) → fix or explain; late items carry their real date → owner signs → download the ZIP for the ventanilla, or the BC pack with the exact email address and subject line → upload the acuse or sent email → the pack is frozen.
6. **Inspection visit.** Press "Inspection pack", pick the date → ZIP of authorisations, current staff with CUIP, ID card, exam and training status, managers and branch heads, equipment with proofs, last 12 monthly reports with acuses, service register and contracts.
7. **Gestoría month-end.** Portfolio list of firms and jurisdictions with blockers → open each pack, fix, send to the owner for sign-off → file and upload acuses.
8. **A rule changes.** DOF or state change spotted in the weekly law watch → the lawyer edits the rule row with an effective date → periods from that date use the new rule; customers see "what changed and from when".

### Screens

1. **Panel** (dashboard): a traffic-light card per obligation and jurisdiction, e.g. "Informe DGSP noviembre: vence 10/12/2026, 3 bloqueos"; expiring exams, courses, licences, revalidation; pending DGSP requests by age.
2. **Personal**: people grid with filters (role, state, site, status, CUIP, exams, training).
3. **Expediente**: person file with tabs (data, events, onboarding, exams (restricted), training, equipment, sites, documents); red banner when unfit.
4. **Alta and baja wizards**, each showing which reports the event will land in.
5. **Equipo**: uniforms (4 photo slots, registered vs. physical counts), vehicles, arms, radios, dogs.
6. **Oficinas y empresa**: offices with evidence; partners and legal representatives.
7. **Clientes y servicios**: clients, contracts, sites, assignments, incidents.
8. **Importar** and 9. **Conciliación** (register vs. payroll vs. state cardex).
10. **Informes**: periods by jurisdiction; blockers; annex previews; sign-off; download; acuse upload.
11. **Calendario**: every obligation with its legal basis.
12. **Inspección**: pack builder; v1 self-audit.
13. **Configuración**, 14. **Cartera** (gestoría portfolio), 15. **Bitácora** (audit log), 16. **Privacidad** (consents, ARCO log), 17. **Admin** (founder: rules, holidays, fees, templates, consented support access).

Design rules: desktop first for the gestor; lists and the person file must work on a phone for supervisors; plain Spanish labels with the legal term in brackets; no native app ([03](03-product-and-tech.md#screens)).

---

## 6. Technical design

**Stack: one plain monolith that one founder and several AI agents can keep consistent** ([03](03-product-and-tech.md#architecture-and-stack)):

- **App:** Python 3.12+ and Django 5.2 LTS; server-rendered pages with HTMX; the Django admin as the founder's back office.
- **Database:** managed PostgreSQL, with row-level security as a second tenant guard and JSON snapshots of filed packs.
- **Jobs:** a Postgres-backed queue (Procrastinate or Django-Q2) plus cron for day-1 drafts and daily reminders. No Redis at first.
- **Documents:** openpyxl writes into the official Excel workbooks without breaking their header blocks; docxtpl fills Word templates the lawyer can edit; LibreOffice headless (or Gotenberg) makes PDFs; pypdf merges; lxml parses CFDI payroll XML.
- **Files:** Cloudflare R2, private bucket, 5-minute signed URLs, SHA-256 hash per file, virus scan on upload.
- **Auth:** django-allauth with MFA; passkeys in v1. Email by Resend. Sentry for errors.
- **Why Python:** the product is Excel, Word and XML work, and Python has the best libraries for it.

**Data model principles.**

1. Every row belongs to one tenant (firm); consultants get access by membership.
2. **Events, not overwrites.** Each change has an event date, an entry date, a cause, a user and evidence. Current state is derived.
3. **Filed packs are frozen** as snapshots with file hashes; later corrections become "late" events in the next period.
4. **Rules are data** with effective dates, legal basis and source URL (R7).
5. **Sensitive fields are separate and encrypted** with a per-tenant data key.

Main entities: Tenant, Authorisation, Office, CorporateParty, Person (keyed by CURP), Employment, PersonEvent, OnboardingStep, IdCard, Exam (sensitive), Training, UniformModel, StockMovement, Vehicle, Firearm, Device, Dog, EquipmentEvent, Client, Contract, Site, Assignment, Incident, ImportBatch, PayrollRecord, Discrepancy, Rule, HolidayCalendar, FeeSchedule, Obligation, Filing, TemplateVersion, Document, Consent, User, Membership, AuditLog, Task ([03 data model](03-product-and-tech.md#data-model)).

**Data sources: no government API exists, so the product makes the filing and proves it.**

| Source | Use | Access | Phase |
|---|---|---|---|
| DGSP monthly report (LFSP art. 13) | Generate the pack; store the acuse | **Format not found**; ventanilla (possibly email) | MVP with a configurable layout |
| DGSP equipment Excel and request | One file per filing, one row per item | Ventanilla; layout from a pilot | MVP |
| DGSP CUIP form, baja form, incidents form | Pre-fill; indexed personnel folder | PDFs seen only in search snippets | MVP (baja), v1 (CUIP) |
| Baja California formats | Fill the official Cardex and arms workbooks and 3 Word forms exactly | Downloaded on 10 Oct 2026 from the [BC formats page](https://www.seguridadbc.gob.mx/contenidos/DSP.php); sent by email | MVP |
| Other state formats | Template sets | Collect from pilots (unverified) | v1 |
| CFDI 4.0 payroll XML (complemento 1.2) | Who was paid, with CURP and NSS; payroll match | User uploads a ZIP ([SAT guide copy](https://bhrmx.com/wp-content/uploads/2022/01/GuiallenadoNominaCFDI4.0.pdf)); never hold the firm's e.firma | MVP |
| IMSS movement files (168-position text) | Altas and bajas the register missed | User upload ([IMSS layout](https://www.imss.gob.mx/sites/all/statics/sua/dispmag/EstructuraMovimientosAfiliatorios.pdf)) | v1 |
| CURP and RFC | Structure and check-digit validation offline | Free; RENAPO lookup only via vendors at about USD 0.20 a check (vendor claim, [Didit](https://didit.me/es/blog/mexico-curp-database-validation-es/)) | MVP offline |
| Holidays, UMA, fees | Business-day deadlines; fee table; sanction ranges | Data tables with sources; the SSPC's own 2026 non-working-day list was not found (unverified) | MVP |
| WhatsApp Cloud API | Reminders | USD 0.0085 per utility message in Mexico ([Meta pricing](https://developers.facebook.com/docs/whatsapp/pricing)) | v1 |

The content is kept separate from the layout, so a future DGSP upload file or API is one more output format ([03](03-product-and-tech.md#what-the-product-does-about-the-portal-does-not-exist)).

**Security and privacy** ([03](03-product-and-tech.md#security-privacy-and-liability)).

- **Law.** The new data-protection law ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf), DOF 20 Mar 2025, reformed 14 Nov 2025) treats health data as sensitive and needs express written consent for it (arts. 2-VI, 8), unless an art. 9 exception applies (a question for the lawyer).
- **Our role.** The firm is the controller ("responsable"); the vendor is the processor ("encargado"). Passing data to a processor is not a "transfer" (art. 2-XX), but a written processing agreement is needed.
- **Penalties.** Fines up to 320,000 UMA (about MXN 37.5M), doubled for sensitive data, and prison for profit-driven breaches (arts. 59, 62-64).
- **Minimise.** Store exam pass/fail, date, institution and the certificate file; no scores or diagnoses.
- **Security-sector data.** Registry data on private-security staff and equipment is reserved information under [LGSNSP art. 101](https://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNSP.pdf). Whether that limits a firm's own copy held abroad is a lawyer question.
- **Controls:** MFA; tenant isolation in the app and in Postgres row-level security, with a test that calls every URL as another tenant; field encryption; hash-chained audit log; nightly encrypted dumps to a second account and a restore drill; a penetration test before launch, then yearly.
- **AI agents never see real personal data.** Development uses synthetic guards (Faker es_MX); pilot data never enters an AI tool.

**Hosting.** Render (US region) for web, worker, cron and Postgres; R2 for files. No rule in the LFPDPPP text forces data to stay in Mexico (03's reading; confirm with the lawyer). Keep an AWS Mexico (Querétaro) migration plan for buyers who ask ([AWS](https://aws.amazon.com/blogs/aws/aws-weekly-roundup-new-aws-mexico-central-region-simultaneous-sign-in-for-multiple-aws-accounts-and-more-january-20-2025)); budget 1.5-2x the cost and a week of work (03's estimate).

**Running cost (excluding staff)** ([03](03-product-and-tech.md#monthly-running-cost-estimate-usd-excluding-taxes-and-staff); prices from [Render](https://render.com/pricing), [R2](https://developers.cloudflare.com/r2/pricing/), [Resend](https://resend.com/pricing)):

| Customers | USD a month | Share of revenue |
|---|---|---|
| 50 | about 110-170 | about 3-5% |
| 300 | about 330-450 | about 2% |
| 1,000 | about 850-1,150 | about 1.5% |

Servers are not the cost of this business. The founder's time and selling are.

---

## 7. Development steps

### How the build works

- **The founder is product owner, architect, reviewer and integrator.** Claude Code agents write most of the code, each in its own git worktree and branch, each owning one Django app and its tests. No hired developers.
- **Foundation first, then parallel.** Shared code (tenancy, roles, audit, rules engine, event base classes, template interface, UI shell) is built in one week. Parallel streams start once those contracts are frozen.
- **Tests first, from the law.** Most of 01's requirements already carry a "Test:" sentence. Each agent turns its list into failing acceptance tests on day one.
- **Helper agents:** a fixtures agent (a synthetic firm with 150 guards, 2 states and 12 months of events), a reviewer agent (tenant leaks, permissions, file handling, English strings), and a docs agent (Spanish help pages).
- **Tool limits:** 4-6 parallel sessions can hit plan usage windows. Stagger streams and keep an API overflow budget. Claude Max costs USD 100-200 a month per third-party summaries ([heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/); check [claude.com/pricing](https://claude.com/pricing)).

### Agent work streams

| Stream | Scope | Requirements |
|---|---|---|
| **F. Foundation** (week 1; founder + 2 agents) | Tenancy with RLS, users, roles, MFA, audit chain, encrypted fields, file store, rules and holiday tables, business-day calculator, obligation generator, event base class, template interface, CI/CD, staging | R4, R7, R77-R83, R87-R88 |
| **S1. People** | Person file, CURP/RFC validators, alta and baja wizards, onboarding gate, ID cards, exams, training | R8-R14, R18, R20, R22-R24, R27-R28, R31-R32 |
| **S2. Equipment** | Uniform models and stock, vehicles, arms, radios, equipment events, DGSP equipment export | R34-R35, R37-R39, R41-R42 |
| **S3. Organisation** | Firm profile, authorisations, offices, partners, clients, contracts, sites, assignments, incidents | R1-R3, R43-R44, R46, R62, R67 |
| **S4. Imports** | Excel mapper, CFDI ZIP parser, discrepancy list, BC three-way check | R16, R57 |
| **S5. Reports** | Report engine, federal pack, BC pack, pre-export checks, late items, acuse, freeze, inspection pack | R48-R56, R73 |
| **S6. Shell and money** | Dashboard, calendar, tasks, email reminders, gestoría portfolio, fee table, checkout and webhooks, Spanish copy pass | R3, R69, R76 |

### Calendar (start Monday 12 Oct 2026)

| Week | Dates | Engineering | Content, legal and sales | Exit check |
|---|---|---|---|---|
| 0. Discovery | 12-16 Oct | Repo, CLAUDE.md with the glossary, backlog from R1-R88, hosting accounts, CI | 8-12 calls (DOF-sanctioned firms, AMESP members, BC and CDMX firms, 1-2 gestorías). **Collect a real federal monthly report with acuse**, the DGSP equipment Excel, CDMX and Estado de México forms, a payroll export. Lawyer and tax adviser quotes. PNT request | One real federal pack in hand, or a firm date for it |
| 1. Foundation | 19-23 Oct | Stream F | Lawyer starts on privacy notice, consent, processor agreement, terms (only if the gate allows) | Contracts frozen; staging live |
| 2-3. Parallel modules | 26 Oct-6 Nov | S1-S6 in parallel; daily merges | Gestor reviews the rule table and BC templates; recruit 3-5 pilots | **Code-complete MVP** (about 3 weeks of coding) |
| 4. Integration | 9-13 Nov | End-to-end tests over 12 synthetic months; security pass by the reviewer agent; backup and restore drill | Pilot agreements: free to 31 Dec for feedback and a reference | **MVP done** (below); demo |
| 5-6. Legal and pilots | 16-27 Nov (16 Nov is a holiday) | Pilot fixes; CDMX and Estado de México packs start as forms arrive | Lawyer and gestor sign off templates, rules, privacy papers and terms; pilot data imported on calls | Signed approvals; pilots live |
| 7. Security test | 30 Nov-4 Dec | External penetration test; fix high and critical findings | Pilots close November in the tool. BC pack due Mon 7 Dec (5th business day) | No open high or critical findings |
| 8. Sellable | 7-11 Dec | Retest; hardening; monitoring | Federal November reports due Thu 10 Dec; collect acuses as proof; founding offer opens, first charge in January | **Sellable** (below) |
| Months 2-4 | Jan-Mar 2027 | v1: more state packs, IMSS import, WhatsApp, guard self-service, self-audit, revalidation pack, event notices | First paid customers; gestoría partners | Monthly releases |

**Is "MVP in about 3 weeks" realistic?** For code, yes: three weeks from 19 Oct, if week 1 freezes the foundations. Add a week for integration. The real bottleneck is the federal format (from pilots) and the legal sign-off. If the format is late, ship with the configurable layout (signed cover plus annexes) and swap it when the sample arrives ([03](03-product-and-tech.md#calendar-start-monday-12-oct-2026)).

### MVP definition of done (13 Nov 2026)

1. Every MVP requirement has a passing acceptance test, including 01's cases: a business-day deadline over a holiday (R4); baja on Fri 5 Jun 2026 gives a card-return date of Wed 10 Jun (R23); exam on 1 Jan 2026 flags the guard on 2 Jan 2027 (R28); an invoice for 205 shirts creates a pending alta of 205 (R35); the March report is due 10 Apr (R48); an empty month still yields a signed "no changes" report (R51); a baja without cause blocks export (R53); a late January baja appears in February marked "late" (R54); a month without an acuse shows "not proven filed" (R55); one misspelt name blocks the BC export (R57); a site supervisor cannot open exam results (R81).
2. The synthetic firm produces a federal pack and a BC pack; the BC workbooks pass cell-by-cell golden tests with the official headers unchanged.
3. A 500-row cardex imports in under 30 seconds; 500 CFDI XMLs reconcile in under 60 seconds.
4. Tenant-isolation test passes on every URL; MFA enforced; audit chain verifies; a restore from backup done.
5. All screens in Spanish; staging and production with error tracking and uptime alerts.
6. A new firm completes flows 1-6 on staging in under 2 hours.

**Sellable (11 Dec 2026)** adds: lawyer and gestor sign-off on templates, rules, privacy papers and terms; no open high or critical penetration-test findings; at least 3 pilots have produced a real month with the tool and uploaded acuses; billing live.

### Build budget (cash, founder unpaid, company and marketing excluded)

| Item | USD low | USD high | Basis |
|---|---|---|---|
| Claude Max 20x, 2 months | 400 | 400 | [heyuan110](https://www.heyuan110.com/posts/ai/2026-02-25-claude-code-pricing/) |
| API overflow for parallel agents | 200 | 800 | 03's estimate |
| GitHub, CI, hosting during build and pilots, domain, email, error tracking | 150 | 500 | [Render](https://render.com/pricing), [R2](https://developers.cloudflare.com/r2/pricing/), [Resend](https://resend.com/pricing) |
| Mexican lawyer: rules and template review, privacy notice and consent, processor agreement, terms | 2,200 | 4,500 | MXN 40,000-80,000; no published fees found (unverified) |
| Private-security gestor or ex-DGSP adviser, 10-20 hours, sample filings | 500 | 1,500 | Unverified |
| Mexican tax opinion (IVA art. 18-B, withholding) | 1,400 | 1,400 | MXN 25,000 ([04](04-gtm-company-finance.md#recommendation-and-setup-checklist)) |
| Penetration test with retest | 3,000 | 8,000 | Vendors quote USD 5,000-15,000 for a narrow web app ([Blaze](https://www.blazeinfosec.com/post/how-much-does-penetration-testing-cost/)) |
| Pilot visits (CDMX, Tijuana), optional | 0 | 1,500 | 03's estimate |
| Contingency (10%) | 800 | 1,900 | |
| **Total to sellable** | **about 8,650** | **about 20,500** | Planning figure about USD 12,000 |

This is 03's budget plus the tax opinion from 04. After launch, running costs are about USD 480-700 a month in year 1 (hosting, one AI plan, a small lawyer retainer). **Year-1 cash for build and running, excluding the company, marketing and sales staff: about USD 13,000-28,000** ([03](03-product-and-tech.md#budget); my addition of the tax opinion).

Each extra state pack costs about 1-3 agent-days plus a lawyer check ([04](04-gtm-company-finance.md#regional-expansion)).
