# Chile: UAF anti-money-laundering kit for property brokers, real-estate firms and notaries — full plan

Combined plan from four deep-research parts (written 10 Oct 2026):

- [01 Law and product requirements](01-law-and-requirements.md): Ley 19.913, UAF Circular 62, the UAF forms, enforcement data, and 68 testable requirements, each traced to its legal source.
- [02 Market and competition](02-market-and-competition.md): buyer counts from the UAF register, sanctions counts, rivals, price anchors, channels and neighbouring countries.
- [03 Product and technical design](03-product-and-tech.md): users, features, flows, screens, data sources, architecture, security, the agent build plan and the build budget.
- [04 Go-to-market, company and finance](04-gtm-company-finance.md): pricing, channels, the 90-day launch, payments and tax, company set-up, the 36-month model and kill criteria.

Every fact below is sourced in those files. Key sources are linked inline. This page reconciles the files where they disagree and gives one plan. "My estimate" marks numbers derived here. Money: UF 1 = CLP 41,136 and USD 1 = CLP 982 on 9-10 Oct 2026 ([mindicador.cl](https://mindicador.cl/api)), so UF 1 is about USD 42.

Short names: **UAF** = Unidad de Análisis Financiero, the financial intelligence unit and the only AML supervisor for these sectors. **C62** = UAF Circular 62 ([UAF PDF](https://www.uaf.cl/media/documentos/Circular_N62.pdf)). **OdC** = compliance officer. **ROS** = suspicious operation report. **ROE** = cash operation report. **BO** = beneficial owner. **PEP** = politically exposed person. **SPV** = a one-project real-estate company.

---

## 1. Decision in one page

**Verdict: conditional go. Run a cheap, staged test: build the MVP in 3 weeks, set up free pilots in November, launch paid on 1 December 2026. Continue only if the gates in §13 are met. Chile alone is a solid side business, not a full-time living.**

**New score: 6/10** (re-assessment 6/10; first score 4/10). The deep dive moved the case both ways, by about a point each, and the two cancel out:

- **Down:** real rivals exist, one with a public price aimed at the same buyers. Fines have almost stopped: the UAF opened no new sanction procedures in 2025 ([UAF Stats 2025](https://www.uaf.cl/media/documentos/Informe_Estadistico_2025.pdf), p. 20).
- **Up:** every one of the 4,278 entities must file a cash report, or a nil report, twice a year, and each SPV must keep filing until it is formally closed. The UAF is now sampling those nil reports. Supervision of these sectors nearly doubled in a year. The build costs USD 10,000-20,000 in cash and needs no Chilean company.

**The case for it.**

- **The duty is real, recurring and checked.** Ley 19.913 art. 3 and C62 (in force since 1 June 2025) oblige every property broker, real-estate firm, notary and conservador, whatever its size ([Law](https://www.uaf.cl/media/documentos/LEY-19913_18-DIC-2003_3.pdf); [C62](https://www.uaf.cl/media/documentos/Circular_N62.pdf)). The UAF's own top-ten list of gaps found in 2025 inspections is PEP checks, training, ROE, client files, UN screening, the manual and registration upkeep ([UAF DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf), p. 9). That list is the product.
- **The free UAF portal is only a filing pipe.** It takes registration, the ROS, the ROE and the nil ROE. It holds no manual, client file, BO or PEP declaration, screening evidence, case register, training record or deadline calendar ([UAF ROE guide](https://www.uaf.cl/media/documentos/2025_Env%C3%ADo_del_ROE_gxRNfwu.pdf), p. 7).
- **The incumbents are partial or overpriced for small firms.** C-ONLINE charges UF 2.5 a month + VAT + a setup fee, about USD 1,260 a year ([C-ONLINE](https://uaf.conline.cl/)). Regcheq, Gesintel and Neitcom sell by quote and demo ([Regcheq](https://regcheq.com/es-cl/cumplimiento-uaf); [Gesintel](https://www.gesintel.cl/); [Neitcom](https://neitcom-compliance.cl/soluciones/ley-19913/)). None shows a deadline calendar, a nil ROE per SPV, the C62 case register or an inspection pack.
- **It is cheap to build and sell.** Forms, documents, registers, free list data and reminders. No filing integration. Paddle can sell into Chile and handles Chilean VAT on sales to non-VAT buyers ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)).

**What changed versus the re-assessment.**

| Topic | Re-assessment said | Deep dive found | Effect |
|---|---|---|---|
| Rivals | "No local product does the whole job"; Regcheq and Gesintel quote-only | C-ONLINE sells a UAF module to "notarios, corredores" at UF 2.5 a month + VAT + setup ([C-ONLINE](https://uaf.conline.cl/)). Lexizum is launching screening at UF 3-65 a month ([Lexizum](https://www.lexizum.com/)). Regcheq (600+ clients) is plugged into the developer CRMs PlanOK, Moby Suite and SCI ([Regcheq partners](https://regcheq.com/es-cl/partners)) | **Weaker.** Developers with a CRM belong to Regcheq. The opening is the small office and the sole broker |
| Free training | None found | The UAF runs a free e-learning campus. 1,531 people from 610 entities took it in late 2025 ([UAF campus](https://capacitacion.uaf.cl/campus/); [Stats 2025](https://www.uaf.cl/media/documentos/Informe_Estadistico_2025.pdf), p. 23) | **Weaker** for course content. The training record and training on the entity's own manual stay with the firm (C62 l.2) |
| Enforcement | About 1% inspection odds; fines of 27-42 UF | No new sanction procedures in 2025. The committee chose a sanction in 3 of 134 decided cases. Fines run UF 15-60. But supervision of the four sectors rose from 43 to 83 actions, notaries face about 8% odds a year, and 2026 adds cheap "coverage" reviews and nil-ROE sampling ([DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf); [DFC 2024](https://www.uaf.cl/media/documentos/Informe_Resultados_2024_y_Enfasis_2025.pdf)) | **Mixed.** Pressure has moved from fines to remediation orders and deadline checks |
| ROE | Frequency and nil report unverified | Semi-annual for all four sectors. A nil ROE is compulsory. Each SPV files until the UAF confirms its de-registration ([C62](https://www.uaf.cl/media/documentos/Circular_N62.pdf) d.1, d.3, a.5-a.6; [UAF ROE calendar](https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf)) | **Stronger.** A hard, twice-yearly deadline for every entity |
| Compliance officer | Owner as officer unverified | Micro and small firms may name the owner (C62 b.3). An outside person may not hold the role ([AZ](https://www.az.cl/claves-para-entender-el-impacto-regulatorio-de-la-circular-n62-de-la-uaf/)) | Neutral. Confirms "a tool, not an outsourced service" |
| Registers | Five | Four apply to this segment. The transfer register does not (C62 e.1, I) | Smaller scope |
| Buyers | 3,980 entities (June 2025) | 4,278 entities (June 2026), up 298 net in a year; about 3,000-3,500 buying decisions ([UAF register](https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx)) | Slightly stronger |
| Year-3 revenue | About USD 160,000 | Base ARR about USD 126,000 at month 36, after discounts and partner margins (04) | Slightly weaker |
| Build and company | Not costed | USD 10,000-20,000 cash to a sellable product. No Chilean company needed at launch (03, 04) | **Stronger** |

**What it is worth** (month 36 = October 2029; Chile only; no founder pay; from the 04 model):

| | Low | Base | High |
|---|---|---|---|
| Paying customers | 103 | **295** | 586 |
| Recurring revenue (ARR) | about USD 37,000 | **about USD 126,000** | about USD 280,000 |
| Year-3 profit before founder pay | about USD -2,000 | **about USD 50,000** | about USD 162,000 |
| Peak cash need | USD 41,600 if never stopped; about **USD 21,000** if stopped at the April 2027 gate | **USD 18,100** (month 5) | USD 16,300 |
| Sale value at 2.5-4x revenue | — | USD 200,000-400,000 | USD 600,000-1,000,000 |

- **Honest read.** The base case needs 130 paying customers in the first 12 months. That is about 4% of the buying decisions, in a market where I found no public complaints and no outcry. The low case is a real possibility. The kill gates cap the loss at about USD 21,000.
- **The swing factors** are notary uptake (one notary plan is worth about 4.5 Solo plans) and the first renewal rate in January 2028.

**Key conditions.**

1. **Small firms pay about CLP 200,000 a year.** At least 5 of 20 discovery calls by 31 Oct 2026 say yes; at least 3 paid pilots or pre-orders by 15 Dec 2026.
2. **Notaries buy.** They are the paying anchor and the most inspected group. Target: 15 paying notaries by Oct 2027.
3. **A named Chilean AML lawyer signs the template set before the 1 Dec launch.** The lawyer's name is part of what the customer buys.
4. **Paddle approves the account.** AML is a sensitive topic. Plan B: Stripe plus Chile's simplified VAT registration.
5. **First-year renewal of at least 50% in January 2028** (the base assumes 70%).

**What to do first** (cash at risk to the 15 Dec gate: about USD 13,000-15,000, my estimate):

1. Start the build on Monday 12 Oct. Put the free "Autodiagnóstico + Calendario UAF" online before the Clave Única switch on 19 Oct.
2. Hold 20 discovery calls (brokers, developers, notaries) by 31 Oct, with the price question.
3. In week 1: brief two Chilean AML lawyers, apply to Paddle and book the security tester for 16-22 Nov.

---

## 2. Why now: the law and enforcement

**Who is obliged** (Law art. 3; [Law](https://www.uaf.cl/media/documentos/LEY-19913_18-DIC-2003_3.pdf)):

- corredores de propiedades (property brokers), people and companies;
- empresas dedicadas a la gestión inmobiliaria (real-estate firms, including one-project SPVs);
- notarios;
- conservadores (property registrars).

There is no size or turnover exemption. The only size relief: a natural person, or a micro firm (sales up to 2,400 UF) or small firm (up to 25,000 UF), may name the owner, a partner or a manager as compliance officer (C62 b.3; [SII size bands](https://www.sii.cl/preguntas_frecuentes/factura_electronica/001_003_6503.htm)).

**What must exist, and when** (C62 points; [C62](https://www.uaf.cl/media/documentos/Circular_N62.pdf)):

| Duty | Deadline or frequency | Basis | Penalty class |
|---|---|---|---|
| Register with the UAF; report any change of data, OdC or legal representative | From the first day of activity; changes **within 10 business days** | Law art. 40; C62 a.1-a.4, b.6 | Minor |
| Stay registered until the UAF accepts closure (SII "término de giro") | Until then, every duty continues, including nil ROEs | C62 a.5-a.6; [UAF FAQ](https://www.uaf.cl/es-cl/preguntas-frecuentes) | Minor |
| Compliance officer (senior, no relevant conviction) | Before registration | Law art. 3; C62 b.1-b.5 | Serious if none at all |
| Prevention manual with 7 required parts, including a risk policy; approved by the top body; delivered to every worker with proof | Update **at least every 2 years**, and soon after a law change | C62 j.1-j.3 | Minor |
| Client file with 7 data items; risk rating; enhanced checks for high risk | Before a permanent relationship, or a one-off deal from **USD 3,000** (notaries and conservadores: **1,000 UF**); update **yearly** | C62 f.1-f.12; Annex 2 | Minor; less serious if records are missing |
| Beneficial owner: sworn declaration on the UAF form (10% of capital or votes, or control); verified and recorded | Per legal-person client; yearly update. **Over 40 business days of delay is a red flag** | C62 g.1-g.3.8; [BO form](https://www.uaf.cl/media/documentos/Declaraci%C3%B3nBFJun2025_giwIbRd.pdf) | Minor |
| PEP check (17 roles plus relatives and partners), senior approval, source of funds and wealth, PEP register | At onboarding and during the relationship | C62 h.1-h.4; [PEP form](https://www.uaf.cl/media/documentos/DeclaracionPEP.pdf) | Minor |
| UN sanctions screening of clients and prospects | "Periodic and systematic"; evidence kept **3 years**; a match goes in an **immediate** ROS | Law art. 38; C62 c.9-c.11 | Serious if a match is not reported |
| Risk countries (FATF lists, SII preferential tax regimes) | Per client and deal | C62 k.1-k.4 | Minor |
| Register of analysed unusual cases: open and close dates, trigger, analysis, conclusion, reasons | Per case; kept 5 years | C62 c.6-c.8 | Minor; serious if a due ROS is missed |
| ROS through the UAF portal, **by the OdC only** | "As soon as possible", no threshold | Law art. 3; C62 c.1-c.5; [UAF FAQ](https://www.uaf.cl/es-cl/preguntas-frecuentes) | **Serious**, up to 5,000 UF |
| ROE for cash above USD 10,000, **including a compulsory nil ROE** | **Every six months**: first 10 business days of January and July. Next window **4-15 Jan 2027** | Law art. 5; C62 d.1-d.7; Annex 1; [ROE calendar](https://www.uaf.cl/media/documentos/Calendario_ROE_2026_fJZ3WvN.pdf) | **Less serious**, up to 3,000 UF |
| Four permanent registers: cash, suspicious (sent and discarded), client due diligence, PEP | Kept **5 years** after the relationship ends | Law art. 5; C62 e.1-e.2 | Less serious |
| Training of all staff, including the OdC, on the entity's own manual and the UAF Red Flags Guide; a record per attendee | **Yearly** | C62 l.1-l.2; [Red Flags Guide](https://www.uaf.cl/media/documentos/GuiaSe%C3%B1alesAlerta2023.pdf) | Minor |
| No tipping off. This binds anyone who provides services to the entity, including a software vendor | Always | Law art. 6-7 | **Criminal** |

Electronic means are allowed for every duty, and the registers may be electronic (C62 SEGUNDO, e.1). So software can lawfully hold the whole programme.

**Fines** (Law art. 19-21): minor up to 800 UF; less serious up to 3,000 UF; serious up to 5,000 UF. Up to three times as much for a repeat within 12 months. Directors and legal representatives can be fined too. Every fine comes with a written reprimand and public listing by name ([UAF sanctions](https://www.uaf.cl/es-cl/publicaciones-uaf/sanciones-ejecutoriadas)).

**Enforcement evidence.**

- **Supervision is rising.** Actions on the four sectors rose from 43 (2024) to 83 (March 2025-February 2026): notaries 12 → 38 (the top sector of all), real-estate firms 17 → 27, brokers 13 → 17 ([DFC 2024](https://www.uaf.cl/media/documentos/Informe_Resultados_2024_y_Enfasis_2025.pdf); [DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf), p. 6). Odds per year: about 8% for a notary, about 1.2% for a broker or real-estate firm (02).
- **Outcomes are remediation, not fines.** From March 2025 to February 2026 the UAF committee chose a sanction in 3 cases, follow-up in 50, a formal observation letter ("representación") in 63, and closure in 18 (DFC 2025, p. 5). A remediation order needs documentary proof of fixes, which is a buying moment.
- **Fines are small.** In 2025, 17 notaries paid UF 660 in total, 4 real-estate firms UF 105 and 1 broker UF 40 ([Stats 2025](https://www.uaf.cl/media/documentos/Informe_Estadistico_2025.pdf), p. 21). Single fines in this group run UF 15-60, about USD 630-2,500 ([UAF 087-2023](https://www.uaf.cl/media/archivos_sanciones/087-2023.pdf); [UAF 090-2023](https://www.uaf.cl/media/archivos_sanciones/090-2023.pdf); [UAF 007-2024](https://www.uaf.cl/media/archivos_sanciones/007-2024.pdf)).
- **Brokers have almost dropped out of sanctions.** 245 broker sanctions from 2011 to 2025, but only 4 since 2021. Notaries are now the main target: 26 sanctioned in 2024-2025 (02, from the [UAF sanctions register](https://www.uaf.cl/es-cl/publicaciones-uaf/sanciones-ejecutoriadas)).
- **Sanctions lag inspections by 2-3 years.** A broker inspected in November 2022 was fined in September 2025 ([UAF 087-2023](https://www.uaf.cl/media/archivos_sanciones/087-2023.pdf)). So the 2025 inspection rise should show in 2026-2028 sanctions (my inference, from 02).
- **New cheap checks in 2026.** "Coverage" reviews of the basics across groups of entities, and "technical report supervision": sample checks that each entity filed its ROE and nil ROE on time ([DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf)).
- **The expected fine is under UF 1 a year for a broker** (1.2% odds × UF 15-60; 02). The levers are the public listing, the deadlines, remediation orders, new registrations and saved time, not the fine.

**Still moving.**

| Change | Status on 10 Oct 2026 | Effect on us |
|---|---|---|
| Clave Única login to the UAF portal | From **19 Oct 2026**; a separate machine channel for automated ROE/ROS senders ([Of. 543](https://www.uaf.cl/media/documentos/Oficio_Circular_N543__Implementaci%C3%B3n_Clave_Unica_VF.pdf)) | Outreach hook. Possible future ROE filing by software (unverified for vendors) |
| MiUAF platform | Replaces the portal gradually during 2027 (Of. 543) | Keep the filing hand-off in its own module |
| Ley 21.719, personal data | In force **1 Dec 2026**; reaches foreign processors ([BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=21719); [Diario Constitucional](https://www.diarioconstitucional.cl/2026/06/12/la-ley-21-719-entra-en-vigor-el-1-de-diciembre-y-expone-vacios-en-regulacion-de-pequenas-empresas/)) | Duties for us; also a sales hook for client files and ID copies |
| Bill 15.975-25, higher UAF fines | In a joint committee since 5 Aug 2026, no urgency ([Senate](https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=15975)) | Upside only |
| Bill 18.241-03, broker licensing | Senate Economy Committee since May 2026, no report ([Senate](https://tramitacion.senado.cl/wspublico/tramitacion.php?boletin=18241)). An earlier bill stalled in 2018 | Upside only: 5,000-20,000+ unregistered brokers ([Emol](https://www.emol.com/noticias/Economia/2025/08/27/1176126/corredores-de-propiedades.html)). Not in the model |
| Ley 21.772, notary reform | In force 2 Apr 2026: age limit 75, posts filled by public contest ([Meganoticias](https://www.meganoticias.cl/nacional/520237-cambios-por-ley-de-notarias-23-04-2026.html)) | Each new notary must set up a UAF system from zero. 43 joined the register in 12 months (02) |
| UAF e-learning tracks for high-risk sectors | "Gradual" from 2026 ([Stats 2025](https://www.uaf.cl/media/documentos/Informe_Estadistico_2025.pdf), p. 23) | Free content grows; keep our training about the firm's own manual and the record |

**Reading.** The "why now" is real but not dramatic. The dates give hooks: 19 Oct (Clave Única), 1 Dec (data law), 4-15 Jan 2027 (nil ROE). The pressure is deadlines, remediation and public naming, not big fines.

---

## 3. Customers

**Count.** I use the UAF register of 30 June 2026, as counted in 02 ([UAF xlsx](https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx)). It is the newest. 01 also quotes the UAF's own end-2025 counts (4,143 in total; [Stats 2025](https://www.uaf.cl/media/documentos/Informe_Estadistico_2025.pdf), p. 7), which agree within 4%.

| Segment | Entities (30 Jun 2026) | Buying decisions (my reading) | Confidence |
|---|---|---|---|
| Property brokers | **1,459** (664 natural persons, 795 companies) | about 1,400 | high |
| Real-estate firms | **2,244** (only 4 natural persons) | about 1,000-1,500 developer groups (02's name grouping; B4 guessed 700). Large groups already buy Regcheq through their CRM | high for entities, low for groups |
| Notaries | **483** | 483 | high |
| Conservadores | **92** | 92 | high |
| **Core target** | **4,278** | **about 3,000-3,500** | |
| Adjacent small obliged firms (vehicle dealers 538, exchange houses 346, auction houses 290, customs agents 279) | 1,453 | same tool, later | high |
| Active brokers outside the register | 5,000 to 20,000+ ([Emol](https://www.emol.com/noticias/Economia/2025/08/27/1176126/corredores-de-propiedades.html)) | not buyers until the licensing bill passes | low |

- **Growth.** Net +298 target entities in a year: brokers +87 new, real-estate +242 new, notaries 43 new and 56 gone (02). New entrants are the warmest leads.
- **Reconciled: names in the register.** 02 and 04 say the register lists entities "by name". 03 downloaded the June 2026 file and found only a number, the RUT and the sector. Both are right about different files: the June 2025 copy republished by CIPER has names ([CIPER copy](https://www.ciperchile.cl/wp-content/uploads/Buscador_sujetos_obligados_inscritos_en_la_UAF_al_30.06.2025.xlsx-Entidades-Supervisadas.pdf)); the 2026 UAF file does not. So the lead list = 2026 RUTs, joined to names from the 2025 CIPER copy and the free SII company-name list ([SII nóminas](https://www.sii.cl/sobre_el_sii/nominapersonasjuridicas.html)). Notaries come from the notaries' directory ([Notarios y Conservadores](https://notariosyconservadores.cl/)). No file has e-mails or phones.

**Buyer profile.**

- **Brokers.** Half are sole agents. A broker earns about 2% of the price from each side of a sale: about UF 60 on a UF 3,000 home ([Anacopro](https://anacopro.cl/producto/curso-de-corredor-de-propiedades/)). They already pay UF 2.5 a year for an association and CLP 156,000-289,000 for a course ([Anacopro](https://anacopro.cl/como-ser-socio-anacopro/)). Their CRMs (Tokko Broker, Kiteprop) show no AML feature ([Tokko](https://www.tokkobroker.com/es-ar/); [Kiteprop](https://www.kiteprop.com/ar)).
- **Developers.** Mostly SPVs. 47 name stems have 5 or more SPVs each, holding 422 entities (02). Each SPV files its own nil ROE twice a year until formally closed. Large developers use PlanOK, Moby Suite or SCI, which link to Regcheq ([Moby Suite](https://www.mobysuite.com/cl/integraciones?integration=regcheq)).
- **Notaries and conservadores.** Office holders, natural persons. The most inspected group. Some already use Gesintel or Neitcom for screening (share unverified).

**How they comply today.** Badly, by the UAF's own evidence. A sanctioned broker had no client files, no PEP procedure, no UN checks, no training and no manual ([UAF 087-2023](https://www.uaf.cl/media/archivos_sanciones/087-2023.pdf)). A one-employee developer had no manual and "contracted the Gesintel system" after the inspection ([UAF 090-2023](https://www.uaf.cl/media/archivos_sanciones/090-2023.pdf)). A notary had no ROE, no client files, no PEP or UN checks and no proper manual ([UAF 102-2023](https://www.uaf.cl/media/archivos_sanciones/102-2023.pdf)).

**The jobs, in their words** (03):

1. "Tell me what is due, for every entity I run."
2. "Let me do the client check on my phone in five minutes."
3. "Get me through an inspection."
4. "Help me decide when something looks odd, and keep it secret."
5. "Give me a manual that fits my business."
6. "Train my people once a year and prove it."
7. "Keep 15 SPVs compliant without 15 spreadsheets."

**A quiet market.** My Spanish searches (02) found no forum posts, press stories or association statements in which brokers complain about UAF work (unverified; WhatsApp and Facebook groups are not searchable). The sale will be led by deadlines and education, not by an existing outcry.

---

## 4. Competition

| Alternative | What it does | Price | What it means for us |
|---|---|---|---|
| **UAF portal** | Registration, ROS, ROE and nil ROE filing; inspection uploads. Clave Única from 19 Oct 2026 ([Of. 543](https://www.uaf.cl/media/documentos/Oficio_Circular_N543__Implementaci%C3%B3n_Clave_Unica_VF.pdf)) | Free | Filing pipe. Keeps none of the records. **No public API** (01) |
| **UAF e-learning campus** | 4 generic AML courses; staff enrolled by the OdC in periodic intake windows ([UAF campus](https://capacitacion.uaf.cl/campus/)) | Free | Covers generic content, not the firm's own manual or the yearly record. Link to it; don't fight it |
| UAF forms and guides | BO form, PEP form, Red Flags Guide, ROE calendar | Free | Product inputs |
| **C-ONLINE** (Talagante) | UAF module: KYC form, PEP and UN search, enhanced checks, ROS and ROE alerts, manual, training. Names "notarios, corredores, agentes" as targets ([C-ONLINE](https://uaf.conline.cl/)) | **UF 2.5 a month + VAT + setup** (about USD 1,260 a year + VAT) | **Closest rival.** Proves the niche and sets the price anchor. Fine for a notary, about 6 times our Solo price for a sole broker. Depth and client count unknown |
| **Regcheq** (Las Condes) | Near-full cycle: screening on 1,500+ lists, BO tree, declarations, ROE file, ROS workflow, certified course, advisory add-on ([Regcheq](https://regcheq.com/es-cl/cumplimiento-uaf)). No manual generator or deadline calendar shown | Quote only | 600+ companies; partners with three developer CRMs and with law firms ([partners](https://regcheq.com/es-cl/partners)). **Owns larger developers.** Could launch a self-serve tier |
| **Gesintel AMLupdate** | Due diligence, monitoring, UBOfinder, PEP lists ([Gesintel](https://www.gesintel.cl/)) | Quote only | Strong with notaries; small developers buy it for list checks after an inspection |
| **Neitcom** | PEP database with family links, UN and OFAC lists, PDF certificates ([Neitcom](https://neitcom-compliance.cl/soluciones/ley-19913/)) | Quote only | Screening only; lists notaries and conservadores |
| **Lexizum** | Screening with hashed PDF evidence and C62 due diligence ([Lexizum](https://www.lexizum.com/)) | UF 3 / 8 / 12 / 65 a month | Launch status unverified ("Próximamente"). No manual, training, registers or ROE/ROS workflow seen |
| Law firms and boutiques | Manuals, training, reviews; several are Regcheq partners | Not published | One-off documents. **A channel as much as a rival** |
| Simplo | Free generic guide and editable document ([Simplo](https://simplo.cl/prevencion-lavado-activos-uaf-empresa/)) | Free | A free manual template only |
| Broker CRMs (Tokko, Kiteprop, Wasi) | No AML feature seen | — | Possible partners |

**What the free tools and the rivals leave undone** (03, mapped to the UAF's 2025 gap list):

| Duty | Portal | Rivals | Our product |
|---|---|---|---|
| Deadlines in Chilean business days: nil ROE per entity and per SPV, 10-day changes, 40-day BO chase, 2-year manual, 12-month training and client files | No | Not shown by anyone | **Core** |
| Manual per sector, approval, delivery receipt per worker | No | C-ONLINE mentions a manual | Core |
| Client file, BO form by link, ownership calculator, PEP form and approval | No | Regcheq, C-ONLINE | Core, simpler and cheaper |
| UN screening with stored evidence | No | Four vendors | Included as hygiene, not a selling point |
| C62 register of analysed cases, with a ROS draft in the portal's field order | Filing only | Regcheq has a ROS workflow | Core |
| Four registers and a one-click inspection pack mapped to the UAF's 8 verification standards | Upload only | Not shown | **Core** |
| Public price, self-serve sign-up for a one-person office | — | Only C-ONLINE and Lexizum publish prices; none targets the sole broker | **Core** |

**Conclusion.** The market is not empty. But no product does the whole job for a one-to-ten-person office at a visible small-firm price. Screening is a commodity; the money is in **running the file and the deadlines**. Under the owner's criteria, a partial or overpriced incumbent is an opening. The main threat is C-ONLINE cutting its price or Regcheq launching a self-serve tier.

<!-- continue -->
