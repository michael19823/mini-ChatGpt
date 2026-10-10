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
| Rivals | "No local product does the whole job"; Regcheq and Gesintel quote-only | C-ONLINE sells a UAF module to "notarios, corredores" at UF 2.5 a month + VAT + setup ([C-ONLINE](https://uaf.conline.cl/)). Lexizum is launching screening at UF 3-65 a month ([Lexizum](https://www.lexizum.com/)). Regcheq (600+ clients; [Regcheq](https://regcheq.com/es-cl)) is plugged into the developer CRMs PlanOK, Moby Suite and SCI ([Regcheq partners](https://regcheq.com/es-cl/partners)) | **Weaker.** Developers with a CRM belong to Regcheq. The opening is the small office and the sole broker |
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

- **Brokers.** Almost half (664 of 1,459) are sole agents. A broker earns about 2% of the price from each side of a sale: about UF 60 on a UF 3,000 home ([Anacopro](https://anacopro.cl/producto/curso-de-corredor-de-propiedades/)). They already pay UF 2.5 a year for an association and CLP 156,000-289,000 for a course ([Anacopro](https://anacopro.cl/como-ser-socio-anacopro/)). Their CRMs (Tokko Broker, Kiteprop) show no AML feature ([Tokko](https://www.tokkobroker.com/es-ar/); [Kiteprop](https://www.kiteprop.com/ar)).
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

---

## 5. Product

### Positioning

> "Tu cumplimiento UAF al día, listo para la fiscalización" (my wording): your UAF compliance up to date and ready for inspection.

- **A record keeper and deadline engine** for the one-to-ten-person office, the developer group with many SPVs, and the notary. Not a screening engine and not a filing tool.
- **Every plan has every legal feature.** A sole broker has the same duties as a notary. Plans differ only by users, entities and screening volume (04).
- **We prepare, you file.** Only the OdC may send a ROS ([UAF FAQ](https://www.uaf.cl/es-cl/preguntas-frecuentes)), and the portal has no API. The product never asks for UAF or Clave Única credentials.
- **A tool, not legal advice.** The titular approves the manual. The OdC decides cases. Every template shows "revisada por [abogado] el [fecha]".
- **Screening is included, not sold.** The law requires it and the data is free (UN list, InfoProbidad). Four vendors already compete on it.

### Users

| Role | Who | Main jobs | Access |
|---|---|---|---|
| Titular / legal representative | Sole broker, firm owner, developer manager, the notary | Approves the manual and PEP or high-risk clients; pays | All of own entities; billing; grants partner access |
| Compliance officer (OdC) | Often the owner in micro and small firms (C62 b.3); one person for many SPVs in a group | Runs the programme; case log; sends ROS, ROE and nil ROE | Everything, plus the confidential case area |
| Staff | Agents, sales staff, notary clerks | Record deals, onboard clients, send BO links, raise concerns, take training | Own clients and deals; never case outcomes |
| Group admin | Finance or legal manager of a developer group | All SPVs in one view | All group entities; cases only if also OdC |
| Partner | Accountant or compliance boutique | Sets up and watches many entities; cannot be the OdC | Per-entity grant; no case access |
| End client | Buyer, seller, landlord, tenant, company | Fills in and signs BO and PEP forms | One-time secure link, no account |
| Content editor | Our Chilean AML lawyer | Edits templates, red flags, rules, course | Content only; never customer data |
| Platform admin | The founder | Support, billing, list feeds | Customer data only by logged, time-limited grant; **never** case data (Law art. 6) |
| UAF inspector | UAF supervision division | Reviews documents | No login; gets the inspection pack via the portal |

### Feature map

| Module | MVP (end of week 3) | Sellable (weeks 6-8) | v1 (months 3-6) | Later |
|---|---|---|---|---|
| Accounts and entities | Many entities per account; roles; MFA; status "activity ended, closure pending" | Partner role and portfolio; group admin; invitations | Bulk actions | SSO |
| Set-up | RUT check digit; prefill from the UAF register and SII names; category, legal form, size; OdC and legal representative | OdC eligibility checklist and appointment letter; registration certificate (60-day validity); yearly portal-password reminder | | |
| Deadline engine | Chilean business days and holidays; ROE task per entity per semester; 10-day change; 2-year manual; 12-month training and client review; 40-day BO; weekly digest | Combined view across entities; calendar export | WhatsApp share links | |
| Manual and risk policy | Generator with the 9 required parts in 4 sector variants; approval; delivery receipts | Lawyer-approved templates; threat-vulnerability-impact risk policy; "update needed" flag after a law change | | |
| Deals | Amount, currency, date, means of payment; dólar observado or UF conversion; one-off threshold with linked deals | CSV import | Import from CRM and notary exports | CRM API (Tokko, Kiteprop, PlanOK) |
| Client file | 7 C62 items; permanent and suspicion switches; refusal opens a case; risk rating with enhanced fields; verification log | Simplified measures; purpose-versus-deals check | ID card MRZ scan | |
| Beneficial owner | UAF BO form by link or print; ownership-chain calculator tested on the UAF help sheet ([AyudaBF](https://www.uaf.cl/media/documentos/AyudaBF.pdf)); 40-day clock | Verification record; foreign companies; "update without changes" | Advanced e-signature add-on | SII BO register, if enacted (unverified) |
| PEP | PEP question and UAF PEP form; approval before activation; PEP register | Match against InfoProbidad open data; longer PEP period by policy | Foreign PEPs via OpenSanctions, pay per check | |
| Screening | UN list at onboarding, on every list change and weekly; 3-year evidence; hit review; immediate-ROS task | FATF and SII country lists with dates; hashed PDF certificate | Accredited timestamp | Adverse media |
| Cases and ROS | Red-flag library (Red Flags Guide 15.1-15.30 plus general); case record with all C62 c.8 fields; ROS draft in portal order with counters and checks; only the OdC marks "sent" | Elapsed-time warning | | Filing via the Of. 543 machine channel, if vendors are allowed (unverified) |
| ROE | Cash register; data or nil task per entity per semester; ROE Simplificado view for brokers; status and certificate | Correction workflow | Fill the non-bank Excel template once a pilot shares it | Machine-channel filing (unverified) |
| Training | Register (method, date, content, attendees); overdue list | Short course on the firm's manual and the Red Flags Guide, with quiz and certificate; upload of UAF campus certificates | More micro-courses; course sold to broker schools | |
| Registers and inspection | 4 registers with Excel and PDF export; retention clocks; inspection-pack ZIP; hash-chained audit trail | UAF information-request log; inspection and remediation record | | Read-only "inspection room" link |
| Billing | None (pilots free) | Paddle checkout; Solo, Oficina, Notaría, Grupo, Partner plans | Yearly prepay discount | |
| Data protection | Processor terms draft; one person's data export | DPA with Chilean model clauses; breach procedure; data map | | |

The MVP column covers all ten gaps on the UAF's 2025 list ([DFC 2025](https://www.uaf.cl/media/documentos/Informe_Resultados_DFC_2025_y_Plan_2026_VF_xsmFFOU.pdf), p. 9).

### Key flows

1. **First hour: a manual ready to approve in under 45 minutes.** Sign up with MFA. Type the RUT; the app checks it and says whether the UAF lists the entity. Pick the category (this sets the threshold, ROE form and red flags). Enter size, people and 15-25 business questions. Preview the manual, approve it ("Apruebo"), and send it to staff ("Recibí y leí"). Tasks appear: the next ROE window, training, manual review, portal password. A developer group pastes a list of RUTs and gets one ROE task per SPV per semester.
2. **New deal and client check on a phone: about 5 minutes.** Enter the deal. The app converts at the day's rate and adds linked deals. If a check is needed: the 7 items, a BO link by e-mail or WhatsApp (a `wa.me` link, no API), the PEP question, instant UN screening, a risk rating, and cash above USD 10,000 goes to the cash register. The file gets a 12-month review date.
3. **The client signs the BO and PEP forms without an account.** A one-time code, a typed name, a stored hash. Reminders on business days 10, 20 and 30. On day 41 a case opens for "unjustified delay". (Whether a simple e-signature is enough for the sworn BO form is open for the lawyer; "print and sign" is always offered.)
4. **Screening, automatic.** The UN XML is pulled every 6 hours and diffed; changed entries are screened against all clients; full re-screen weekly; InfoProbidad PEP data twice a week. A possible hit goes to the OdC; a confirmed one creates an urgent "ROS now" task.
5. **Something looks odd.** A staff member ticks a red flag or presses "Reportar inquietud" and sees only "sent". The OdC records the analysis and decision. For a ROS, the app builds a draft in the order of the portal's 4-step form with copy buttons; the OdC pastes it into the portal and uploads the certificate.
6. **ROE semester.** Ten days before each January and July window, a task per entity: the data in portal order, or "send nil ROE" with the three clicks. The task stays open until the user records "Aprobado"; "Aprobado Fuera de Plazo" is flagged as a breach. Groups see one row per SPV.
7. **Yearly cycle and inspection.** Overdue training, client files and the manual show on the dashboard. When a UAF letter arrives: log it, press "Preparar carpeta de fiscalización", see gaps in red, download the ZIP and upload it in the portal.
8. **Partner with many entities.** A portfolio view with traffic lights per entity; the titular can revoke access at any time.

### Screens

1. Panel (dashboard): 8 traffic-light tiles that mirror the UAF verification standards, plus "Vence esta semana" and "Coincidencias por revisar"; one row per entity for groups and partners.
2. Set-up wizard (one question per card, phone-friendly).
3. Manual (versions, approval, delivery table, diff on regeneration).
4. People (staff, training status, manual receipt, OdC and representative data, 10-day tasks).
5. Operaciones (deals, built for a phone).
6. Client file (identity, ownership tree, PEP, screening history, risk and approvals, documents, timeline, reviews).
7. Client form (public link for BO and PEP).
8. Screening hit review (side by side, required reasons).
9. Casos (OdC only).
10. ROE (one row per entity per semester).
11. Training (plan, sessions, attendance, course player, certificates).
12. Registers (four tabs, retention dates, exports).
13. Inspection pack.
14. Partner portfolio.
15. Content admin for the lawyer (each publish approved by a second person; golden tests must pass).

Design rules: Chilean Spanish everywhere, with the C62 point label ("literal g.3.8") in a tooltip. Phone-first for deals and client files; desktop-first for the manual, cases and exports. Everything prints.

**Requirements list.** The 68 legal requirements, each with a test and a source, are in [01 §PRODUCT REQUIREMENTS](01-law-and-requirements.md#product-requirements). The 47 marked [v1] define the MVP. Treat the list as the acceptance checklist.

---

## 6. Technical design

**Stack: one plain web app that agents can build and the founder can run alone** (03).

- **App:** Python, Django 5.2 LTS, server-rendered pages with HTMX and a little Alpine.js, built mobile-first; a PWA manifest instead of a native app.
- **Database:** PostgreSQL 17+, with row-level security per entity, `pg_trgm` for fuzzy names and JSONB for form answers and rule tables.
- **Jobs:** Procrastinate (a Postgres-backed queue), so no Redis. Jobs: UN list every 6 hours, delta and weekly screening, InfoProbidad twice a week, exchange rates daily, reminders, digest, retention sweep.
- **Documents:** `docxtpl` Word templates the lawyer edits; Gotenberg (LibreOffice) for PDF; WeasyPrint for certificates; `pypdf` and `openpyxl` for packs and Excel registers.
- **Matching and IDs:** `rapidfuzz` scoring with birth year and nationality; `python-stdnum` for RUT check digits.
- **Security libraries:** Argon2 passwords, `django-otp` MFA, envelope encryption per entity (AES-256-GCM) with a second key for case files, ClamAV on uploads.
- **Services:** Postmark e-mail (USD 15 a month for 10,000 e-mails; [Postmark](https://postmarkapp.com/pricing)); Paddle webhooks for plans; Sentry or self-hosted GlitchTip with personal data scrubbed.
- **Deploy:** Docker Compose on 2-3 VMs behind Caddy; infrastructure as code; CI with unit, tenant-isolation, golden-rule, template and Playwright tests plus `ruff`, `bandit` and `pip-audit`.
- **No AI calls on customer data.** Agents build the software and draft content. The running product sends no client, BO, PEP or case data to any AI service, because of the tipping-off ban (Law art. 6) and Ley 21.719's transfer rules.

**Hosting: Santiago.** Vultr offers its Santiago region with 2 vCPU / 4 GB VMs at USD 20 a month ([Vultr plans](https://api.vultr.com/v2/plans); [Santiago availability](https://api.vultr.com/v2/regions/scl/availability)). It has no object storage in Chile ([Vultr clusters](https://api.vultr.com/v2/object-storage/clusters)), so files sit on encrypted block storage in Santiago behind a small S3-compatible store, and only encrypted backups go abroad. Google Cloud's Santiago region is the managed alternative ([Google Cloud regions](https://cloud.google.com/compute/docs/regions-zones); prices unverified). Hosting in Chile lets us tell notaries "your clients' data stays in Chile" and removes most of the transfer question.

**Data model principles.** The tenant is the obliged entity (one RUT). An account pays and can own many entities. Every legal decision is reproducible: thresholds store the rate used, ratings the rule-set version, screening the list version, documents the template version. History is append-only with a hash-chained audit log. Every personal record carries a `retention_until` date. Thresholds, deadlines and UAF form fields are data the lawyer can change, protected by golden tests (the UAF BO help-sheet cases, the CLP 9.6 million cash example at two rates, the Friday-before-a-holiday deadline).

**Data sources** (all checked by 03 on 10 Oct 2026):

| Source | Use | Access | Cost |
|---|---|---|---|
| UN consolidated list | Binding screening (C62 c.9-c.11) | XML; 736 individuals and 274 entities on 9 Oct 2026 ([UN XML](https://scsanctions.un.org/resources/xml/en/consolidated.xml)) | Free |
| InfoProbidad open data | Chilean PEPs (the UAF keeps no PEP list: [UAF PEP page](https://www.uaf.cl/es-cl/normativa/personas-expuestas-politicamente-pep)) | CSV/JSON, **CC BY 4.0**, updated twice a week; no RUN, so match by name and position ([InfoProbidad](https://www.infoprobidad.cl/DatosAbiertos/Catalogos)) | Free |
| OpenSanctions | Foreign PEPs, optional | API, EUR 0.03-0.10 per query ([OpenSanctions](https://www.opensanctions.org/api/)) | Pass-through add-on |
| FATF and SII country lists | Risk countries | The UAF's FATF page still showed the October 2025 lists ([UAF](https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/listas-de-paises-no-cooperantes)), so we curate 3 times a year | Staff time |
| Dólar observado and UF | Thresholds | CMF API (free key), mindicador.cl fallback | Free |
| Holidays, regions, comunas | Business days; ROS/ROE pick-lists | Own table checked each December; SUBDERE codes | Free |
| UAF register | Onboarding prefill; leads | XLSX every six months; RUT and sector only | Free |
| SII legal-entity lists | Company names, closure dates | ZIP files, updated August 2026 ([SII](https://www.sii.cl/sobre_el_sii/nominapersonasjuridicas.html)) | Free |
| Registro Civil ID validity | ID check | Public page blocks automation; institutional web service needs an agreement (unverified for a private SaaS) | Manual in the MVP |
| UAF portal | ROS, ROE, nil ROE | Web forms and an in-portal Excel template; no API | Copy-paste hand-off |

**Security and privacy.**

- **Our role.** The obliged entity is the controller; we are its processor. Ley 21.719 applies to us from 1 Dec 2026 as a processor for controllers in Chile, wherever we are (art. 1 bis) ([BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=21719)).
- **What it asks:** a processor contract with set contents and no unapproved sub-processors (art. 15 bis); state-of-the-art security (art. 14 quinquies); breach notice to the controller (art. 14 sexies; we promise 24 hours); a lawful basis for transfers abroad, such as the model clauses approved in December 2025 (art. 27-28; [Guerrero Olivos](https://guerrero.cl/wp-content/uploads/2026/01/DOC_Aprobacion-Clausulas-Contractuales-Tipo.pdf)); a contact channel for a controller without a Chilean domicile (art. 14). Fines reach 20,000 UTM, about USD 1.47 million (art. 35).
- **AML retention beats erasure.** Records stay at least 5 years after the relationship ends (C62 e.2), screening evidence 3 years (c.9). After that, deletion is a logged admin action.
- **Tipping off.** Case data has its own key and is visible only to the OdC and people the OdC names. Nothing a client sees reveals a case. The platform admin cannot open cases even in support mode. Staff and sub-processors sign a clause citing Law art. 6.
- **Baseline:** MFA for titular, OdC, group admin and partner; row-level security plus tenant tests on every endpoint; envelope encryption; WAL archiving and nightly encrypted dumps, 30-day point-in-time recovery, monthly restore test; secrets in a vault; agents only see synthetic data; **external penetration test before the paid launch**, then yearly.
- **Ley 21.663 (cybersecurity).** It is unclear whether a small foreign SaaS counts as an "essential service" ([BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=21663); unverified). The incident runbook meets its 3-hour and 72-hour marks anyway.

**Running cost** (USD a month, my estimates from 03):

| Customers | Infrastructure | Paddle fees | Share of revenue (infra) |
|---|---|---|---|
| 50 | about 77 | about 90 | about 4.4% |
| 300 | about 249 | about 540 | about 2.4% |
| 1,000 | about 495 | about 1,790 | about 1.4% |

Payment fees cost more than hosting. People (support, list updates, the lawyer) are the real running cost. Claude Max for maintenance adds USD 100-200 a month ([Claude pricing](https://claude.com/pricing/max)).

---

## 7. Development steps

### Reconciled timeline

03 and 04 agree on the dates, and they fit the owner's frame (MVP in 3 weeks, sellable in 6-8):

- **Start Monday 12 Oct 2026.** MVP on **Friday 30 Oct** (04 says 31 Oct; same week). Free pilots from 2 Nov. Lawyer review in weeks 4-7. External security test **16-22 Nov**. Paid launch **Tuesday 1 Dec 2026**, the day Ley 21.719 takes effect, five weeks before the **4-15 Jan 2027** nil-ROE window.
- **The critical path is content and the lawyer, not code.** No Chilean AML lawyer rates are published (unverified), and one must be found and contracted in week 1. Agents draft every manual paragraph with its C62 point beside it, so the review is fast.
- **Fallback.** If the lawyer's sign-off slips past 27 Nov, keep pilots free and move the paid launch to Monday 4 Jan 2027. The free calendar still carries the January hook. If the build slips, move the course player and the partner view to the sellable stage; the MVP still covers all ten UAF gaps (03).

### Agent work streams

| Stream | Scope | Requirements | Depends on |
|---|---|---|---|
| **S0 Foundation** (founder + 1 agent, week 1) | Repo, CI, infrastructure as code, users, MFA, account/entity/membership, tenant middleware and RLS, task engine with business days, hash-chained audit log, synthetic data generator, acceptance-test skeletons for R1-R68 | R1-R4, R68 | — |
| **S1 Entities and deadlines** | Set-up wizard, RUT check, register and SII prefill, OdC and representative, 10-day tasks, group and partner views, digest, calendar export | R1-R10 | S0 |
| **S2 Clients and deals** | Deals and thresholds, client file, BO link and calculator, PEP form, verification log, risk rules and approvals, 40-day clock | R18-R39 | S0 |
| **S3 Screening and lists** | UN download and diff, InfoProbidad import, matching, hit review, re-screen jobs, country tables, certificates | R40-R43 | S0, S2 |
| **S4 Documents and training** | Template engine, manual generator in 4 variants, approval and delivery, training register, course and quiz, content admin with golden tests | R11-R17, R63-R65 | S0 |
| **S5 Cases, ROE and registers** | Red flags, concerns and cases with a separate key, ROS draft, ROE tasks and views, cash register, registers export, inspection pack, information requests | R44-R62, R66 | S2, S3 |
| **S6 Platform** (background) | Backups and restore test, Caddy, monitoring, Postmark, Paddle (week 5), security headers, rate limits, Spanish copy | R67 | S0 |
| **S7 QA** (background) | Acceptance, tenant-isolation and Playwright tests at phone and desktop size | all | S0 |

**Working rules.** Each stream gets a short spec, a `CLAUDE.md`, frozen interfaces and its acceptance tests, and works in its own git worktree. A second agent reviews every pull request against the spec and a security checklist. **The founder personally reviews all code for authentication, row-level security, encryption and case access**, and merges. Four build streams at a time, because the founder's review time is the bottleneck.

### Calendar

| Week | Dates | Engineering | Content and legal | Pilots and sales | Gate |
|---|---|---|---|---|---|
| 1 | 12-18 Oct | S0; S6 infra | Agents draft the manual outline from C62 J; digitise BO and PEP forms. Brief two lawyers; book the security tester | Segment the register; landing page and free autodiagnóstico; apply to Paddle | Interfaces frozen Friday; lawyer chosen |
| 2 | 19-25 Oct | S1-S4 in parallel | Manual drafts for 4 sectors; red-flag library | **Clave Única e-mail and post (19 Oct)**; 10 discovery calls | Streams demo on staging |
| 3 | 26 Oct-1 Nov | S5; integration | Course and quiz; risk rules with golden tests; content pack v0 to the lawyer | 10 more calls; pick 3 friendly pilots (broker, developer group, notary); contact ACOP, ANACOPRO, COPROCH | **MVP done 30 Oct**; 5 of 20 calls say they would pay |
| 4 | 2-8 Nov | Hardening; Playwright; inspection pack timing test | Lawyer review round 1 | 3 pilots set up with the founder's help (free) | Pilots live |
| 5 | 9-15 Nov | Paddle billing; group and partner features | Lawyer comments in; terms, DPA and privacy policy drafted; INAPI trademark filing | Grow to 10 pilots (2+ notaries, 2+ developers, 1 accountant) | Billing works in test mode |
| 6 | 16-22 Nov | **External security test** on staging with synthetic data | Data-protection review | Pilot feedback calls | Test report in |
| 7 | 23-29 Nov | Fix high and critical findings; retest; restore drill; incident runbook | **Lawyer signs template set v1.0** | Webinar with the partner lawyer (25 Nov); ask pilots to convert at the founding price | Retest clean; 3 pre-orders |
| 8 | 30 Nov-6 Dec | Launch; monitoring; 10 help articles | Publish privacy policy and contact channel | **Public launch 1 Dec**; founding offer to 31 Jan | **Sellable** |
| 9-13 | Dec-Jan | v1 backlog: non-bank ROE Excel, ID scan | Watch FATF and UAF changes | "ROE negativo de enero" campaign; support the **4-15 Jan** window | First real ROE window |

### MVP definition of done (30 Oct)

1. All 47 [v1] requirements in [01](01-law-and-requirements.md#product-requirements) pass their acceptance tests.
2. Flows 1-6 pass end to end at phone and desktop sizes.
3. A broker, a developer group with 3 SPVs and a notary can each be set up in under 45 minutes with synthetic data.
4. Tenant-isolation tests pass on every endpoint; case data is invisible to staff, partners and the platform admin.
5. Golden tests pass for thresholds, BO arithmetic and business-day deadlines.
6. Backups run and one restore has been tested.
7. No high-severity finding open from `bandit`, `pip-audit` or a ZAP baseline scan.

### Sellable definition of done (1 Dec)

1. Template set v1.0 signed by a named Chilean AML lawyer, with the date on every document.
2. External penetration test done; all critical and high findings fixed and retested.
3. Paddle live; terms, DPA with the model clauses, privacy policy and contact channel published.
4. At least 5 pilot entities used it for real for 2+ weeks, including a developer group and a notary; at least 3 agree to pay.
5. The lawyer, or an OdC who has been through a UAF inspection, has reviewed the inspection pack.
6. Incident runbook ready; restore drill passed; uptime monitoring on.

### Build budget (cash to a sellable product; founder unpaid; from 03)

| Item | Low (USD) | High (USD) |
|---|---|---|
| AI tools: Claude Max 20x plus a second plan for parallel sessions, 3 months | 800 | 1,200 |
| Chilean AML lawyer: 4 manual variants, forms, red flags, rules, course, inspection pack (30-50 hours) | 3,000 | 6,000 |
| Data-protection review: terms, DPA, privacy policy, Ley 21.663 question | 1,000 | 2,500 |
| External security test, 3-5 days ([7ASecurity](https://7asecurity.com/blog/2026/04/the-2026-guide-to-penetration-testing-pricing-and-scoping/)) | 3,000 | 6,000 |
| Hosting during build and pilots | 150 | 300 |
| Domains, Postmark, workspace, password manager | 150 | 300 |
| Chilean Spanish proofreading | 300 | 1,000 |
| Contingency 15% | 1,260 | 2,600 |
| **Total to a sellable product** | **about 9,700** | **about 19,900** |

- **Reconciled with 04.** 04 budgets the lawyer at CLP 4.5 million fixed (about USD 4,600, covering templates, terms and DPA) and the security test at USD 4,000. Both sit inside 03's ranges. I keep 03's separate data-protection line as the cautious figure.
- Not included: insurance (about USD 1,500 a year), trademark (about CLP 1.2 million, unverified), marketing and local support. These are in the year-1 costs in §10.

---

## 8. Go-to-market

### Pricing (reconciled)

The three files proposed slightly different prices: the re-assessment UF 6 / 15 / 24 a year for broker / group / notary; 02 UF 5 / 10 / 24 plus a group plan; 04 fixed CLP prices. **I use 04's CLP prices.** They sit inside 02's ranges, card checkouts need a fixed amount, and the financial model uses them.

| Plan | Who | Yearly (net, + IVA) | Monthly option | About UF / USD a year |
|---|---|---|---|---|
| **Gratis: Autodiagnóstico + Calendario UAF** | Anyone on the register | 0 | — | Lead magnet: gap check against the UAF top-ten list; reminders for nil ROE, 10-day changes, manual and training |
| **Solo** | Sole broker or conservador; 1 user, 1 entity | **CLP 199,000** | CLP 19,900 | UF 4.8 / USD 203 |
| **Oficina** | Broker firm or small developer; 5 users, 3 entities | **CLP 399,000** | CLP 39,900 | UF 9.7 / USD 406 |
| **Notaría** | Notary or conservador; 15 users, higher volume | **CLP 890,000** | CLP 89,000 | UF 21.6 / USD 906 |
| **Grupo** | Developer group | **CLP 690,000** for 5 entities + CLP 59,000 per extra | — | UF 16.8 + 1.4 each |
| **Partner** | Accountant or compliance boutique | **CLP 1,190,000** for 10 client entities, then CLP 99,000 each; or 25% commission on referred sales | — | UF 29 |

- **Against the rivals:** C-ONLINE is about CLP 1.23 million a year + VAT + setup ([C-ONLINE](https://uaf.conline.cl/)); Lexizum Starter about UF 36 a year ([Lexizum](https://www.lexizum.com/)). Our Solo is about 8% of what a broker earns from one side of one sale, and below one typical fine.
- **Add-ons** (sold with partners, revenue split 50/50): "Puesta en marcha" (done-for-you start) CLP 149,000 for Solo/Oficina, CLP 390,000 for Notaría/Grupo; inspection-pack review by a partner lawyer CLP 190,000.
- **Founding offer:** 50% off the first year for the first 15 paying customers, December 2026 to January 2027. Pilots are free in November and convert at this price.
- **Rules:** every plan has every legal feature; yearly is the default (monthly costs 12 months, yearly 10); prices in CLP "+ IVA", re-set yearly with the UF; 14-day trial without a card for Solo and Oficina; a 20-minute demo for Notaría and Grupo; 15% off for association members.
- **Model price.** List mix about CLP 425,000 per customer; after discounts and partner margins the base model uses **CLP 330,000 (year 1), 380,000 (year 2), 420,000 (year 3)** (04).

### Channels, in priority order

1. **The public register, worked directly.** All 4,278 entities by RUT and sector, joined to names (see §3). Start with the newest entrants (87 brokers, 242 real-estate entities, 43 notaries in the last year) and with names on the sanctions list ([UAF sanctions](https://www.uaf.cl/es-cl/publicaciones-uaf/sanciones-ejecutoriadas)). Phone and WhatsApp first; contacts from websites, association lists and the notaries' directory (enrichment cost unverified).
2. **Notaries as the paying anchor.** Direct approach through the directory ([Notarios y Conservadores](https://notariosyconservadores.cl/)); partnerships with digital-notary networks such as Despapeliza/Legaliza.io ([Descubre](https://www.descubre.vc/noticia/despapeliza-y-fundaci-n-red-notarial-impulsan-la-digitalizaci-n-notarial-en-chile-2025-09-03)); new notaries appointed under Ley 21.772. Ten notaries bring as much revenue as about 45 Solo brokers.
3. **Compliance boutiques and accountants, on referral.** Regcheq already works with law firms that write AML manuals ([Regcheq partners](https://regcheq.com/es-cl/partners)); smaller boutiques and the accountants of small brokers are open. Use a **referral** model, not resale, until a tax adviser clears resale (see §9).
4. **Broker associations and schools.** ACOP (its broker course runs 19 Oct-16 Dec 2026; [ACOP](https://www.acop.cl/)), COPROCH ([COPROCH](https://www.coproch.cl/)) and ANACOPRO ([Anacopro courses](https://anacopro.cl/catalogo-cursos/)). Offer a free "UAF para corredores" session inside their courses and a member discount.
5. **Content and search.** Plain-Spanish guides for brokers and notaries: nil ROE, the BO declaration, the 40-day red flag, the training record. 02 found none written for brokers. Small Google and LinkedIn tests only (no Chile CPC figure found; unverified).
6. **Developer CRMs, later and carefully.** PlanOK, Moby Suite and SCI already integrate Regcheq. Broker CRMs (Tokko, Kiteprop) have no UAF feature and are better partners.

**Sales motion.** Solo and Oficina self-serve: free autodiagnóstico → e-mail with the three biggest gaps → 14-day trial → card checkout (target 15% of trials, my estimate). Notaría and Grupo assisted: WhatsApp or phone by a part-time Chilean rep from month 3, a 20-minute video demo, then a Paddle link; 2-4 week cycle. Urgency hooks: the two nil-ROE windows, a UAF visit or "representación" letter, a new registration.

### Selling calendar

| When | What happens | Our action |
|---|---|---|
| 19 Oct 2026 | UAF portal moves to Clave Única | First e-mail and post: "what changes for your OdC" |
| 19 Oct-16 Dec 2026 | ACOP broker course | Guest AML session |
| 1 Dec 2026 | Ley 21.719 in force; our launch | "Your client files and ID copies under the new data law" |
| **4-15 Jan 2027** | Nil-ROE window, every entity and SPV | **Biggest campaign**; daily reminders; live help |
| January and July | UAF publishes its register | Outreach to new entrants |
| February | Summer holidays (unverified) | Content and partner work only |
| March | Back to work | **Main push**; founder trip to Santiago |
| April | Tax season ("Operación Renta"), accountants busy (unverified) | No partner launches |
| 1-14 Jul 2027 (2026 pattern; dates unverified) | Second nil-ROE window | Second campaign |
| Mid-September | Fiestas Patrias | Slow fortnight |

### Marketing budget, year 1 (Nov 2026-Oct 2027): CLP 14.7 million (about USD 15,000)

| Item | CLP '000 |
|---|---|
| Contact data and enrichment | 1,500 |
| Spanish content and SEO (freelance writer, 4 guides a month) | 3,000 |
| Webinars, association course modules, small events | 2,500 |
| Google and LinkedIn tests | 3,000 |
| Partner kit and co-marketing | 1,200 |
| Training video | 1,500 |
| Reserve | 2,000 |

Plus partner commissions (25% of the first-year fee, 10% on renewals; about 9% of new bookings and 3% of renewals in the model) and a USD 3,000 founder trip each March (04).

### First 90 days (from Monday 12 Oct 2026)

- **Days 1-21 (to 1 Nov):** build to MVP; lawyer chosen; Paddle applied; landing page and free autodiagnóstico live before 19 Oct; Clave Única campaign; 20 discovery calls; associations contacted; 30 boutiques and accountants listed.
- **Days 22-49 (to 29 Nov):** 10 free pilots (2+ notaries, 2+ developers); lawyer review; security test and fixes; terms and DPA; trademark filed; webinar 1 on 25 Nov; 5 partner meetings; 3 pre-orders.
- **Days 50-63 (to 13 Dec):** public launch 1 Dec; founding offer; "ROE negativo de enero" e-mail to all enriched contacts; free nil-ROE reminders.
- **Days 64-90 (to 10 Jan 2027):** light over the holidays; then daily help during the 4-15 Jan window; convert free-calendar users.
- **Day-90 targets (10 Jan 2027):** 20 paying customers, 400 free-calendar sign-ups, 3 signed partners, 2 paying notaries. **Fewer than 8 paying is the warning line.**

---

## 9. Payments, company and legal

### Payments: sell from the founder's foreign company through Paddle

- **Paddle as merchant of record.** It sells into Chile, charges in CLP (minimum CLP 800) and remits Chile's 19% VAT on sales to buyers who are not VAT taxpayers. Fee 5% + USD 0.50 per transaction ([Paddle tax list](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/); [Paddle currencies](https://developer.paddle.com/concepts/sell/supported-currencies); [Paddle pricing](https://www.paddle.com/pricing)). On a CLP 399,000 plan that is about 5.1%; on a CLP 19,900 monthly plan about 7.5%, so push yearly billing (04).
- **Who pays VAT.** Many buyers are not VAT taxpayers: notaries have been VAT-exempt since 2023 (partly unverified; [Transtecnia](https://transtecnia.cl/noticias/servicios-prestados-por-notarios-quedaran-exentos-a-partir-del-1-de-enero-de-2022/)) and sole brokers issue fee receipts without VAT (unverified). They pay 19% on top, as they do with C-ONLINE. VAT-registered buyers (broker companies, developers) self-assess through a "factura de compra" and take the VAT back as a credit ([SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)). Give their accountants a one-page guide. Whether Paddle drops VAT when a buyer enters a RUT is unverified; ask Paddle.
- **No withholding tax expected.** Payments abroad for standard software are exempt from the 15% Impuesto Adicional ([PwC](https://taxsummaries.pwc.com/chile/corporate/withholding-taxes)). Write "licencia de uso estándar, no exclusiva" into the terms. No SII ruling on SaaS specifically was found (unverified).
- **Company country.** A seller in a Chile treaty country (US, UK, Spain, Ireland) is a safer base than Germany or Estonia, which are not in PwC's Chile treaty table. This matters only if the SII ever treated the fee as a royalty (low risk; 04).
- **Plan B: Stripe direct.** Then we must register in Chile's simplified VAT regime from the first B2C sale (no threshold) and file form F129 online ([Stripe Tax Chile](https://docs.stripe.com/tax/supported-countries/latin-america-and-caribbean/chile); [SII, June 2026](https://www.sii.cl/noticias/2026/PPTIVASD08062026_2.pdf)). Fees on an Irish account: 3.15% + EUR 0.25 for international cards, plus 2% conversion, Billing 0.7% and Tax 0.5% ([Stripe IE pricing](https://stripe.com/ie/pricing)).
- **Card friction.** Some debit cards need "uso internacional" switched on ([24horas](https://www.24horas.cl/te-sirve/bancoestado/cuentarut/cuentarut-como-activar-el-uso-internacional-de-mi-tarjeta)); some banks charge cardholders a foreign-purchase fee (current rates unverified). Decline rates for Chilean cards on foreign gateways are unknown; track them from the first pilot.
- **Bank transfer is the weak spot.** Chilean SMEs like local transfers; Paddle takes transfers only in EUR, GBP and USD. Use cards for everyone; a partner for buyers who insist on transfer plus a Chilean factura; a local SpA only when a trigger fires. dLocal (Webpay, Khipu, Mercado Pago) is an option at about 300 customers ([dLocal](https://docs.dlocal.com/docs/chile)).

### Company: no Chilean company at launch

**Reconciled.** 03 and 04 agree. Paddle removes the only seller-side Chilean tax duty, and Ley 21.719 asks a foreign controller only for a contact channel (art. 14), not a local entity. 01's open question on a mandatory Chilean representative under the data law is still unverified; ask the lawyer in week 1.

**Form a Chilean SpA only when one trigger fires** (04):

1. More than 30% of lost B2B deals cite "no Chilean factura" or "no local transfer";
2. a notary network, association or developer group wants a Chilean counterparty;
3. we want to employ staff in Chile;
4. sales pass about CLP 150 million a year.

The base model assumes an SpA from May 2028; the low case never.

**What a Chilean SpA costs** (04):

| Route | One-off cost | Notes |
|---|---|---|
| Online register "Tu Empresa en un Día" | **Official fee: none** ("sin costo") ([Lofwork](https://www.lofwork.cl/emprender-en-chile-siendo-extranjero/)) | Needs a RUT and Clave Única or an advanced e-signature first |
| Notarial route, founder in person | Deed CLP 50,000-200,000; commerce register 0.2% of capital + CLP 300 a page; Diario Oficial extract CLP 8,000-20,000 ([Holafly](https://esim.holafly.com/es/blog/expatriados/abrir-empresa-chile/); [Damalion](https://www.damalion.com/how-to-register-a-company-in-santiago-chile-costs-timelines-2026/); both unverified) plus travel about USD 1,500-2,500 (my estimate) | One shareholder and 100% foreign ownership allowed; nominal capital |
| Remote, with a provider | **USD 750** (Starter: power of attorney, bylaws, set-up) or **USD 2,400** (Full: adds bank-account support, e-invoicing, tax and municipal set-up, 1 year of tax address), plus about USD 300 notary, apostille and courier ([NSS](https://www.nss.cl/en/services/international)) | 2-6 weeks; bank account is each bank's decision |
| Non-resident founder's RUT | Form F4415.1, signed by a representative resident in Chile; powers signed abroad must be apostilled ([SII FAQ](https://www.sii.cl/preguntas_frecuentes/rut_inicio_actividades/001_105_6823.htm)) | A resident representative is needed in practice |
| Tax structure advice (SpA ↔ foreign company) | about USD 1,500 (my estimate) | Avoid 15% withholding on intra-group software fees |

**Ongoing cost of a remotely run SpA:** about **USD 8,600 a year**: legal representation USD 4,800, bookkeeping and monthly returns USD 2,400, annual tax return USD 700, tax address USD 400, municipal licence from 1 UTM (about USD 75), bank fees about USD 200 ([NSS](https://www.nss.cl/en/services/international); [Simplo patente](https://simplo.cl/calculadoras/patente-municipal/providencia/)). Corporate tax under the Pro Pyme regime: 12.5% to 2027, 15% in 2028, then 25% ([SII Circular 53](https://www.sii.cl/normativa_legislacion/circulares/2025/circu53.pdf)).

**Ongoing cost without an SpA:** about USD 150 a month for the home-country accountant to book foreign sales (my estimate).

**Partners: referral, not resale.** A Chilean firm that pays a foreign company for the right to resell software may owe 15% withholding; the SII looked at such a distributor in Ordinario 810 of 2020 ([vLex](https://vlex.cl/vid/ordinario-n-810-servicio-844315896); full conclusion unverified). In a referral model Paddle bills the client and we pay the partner a commission, so the question does not arise.

### Legal documents before the first paid customer (all in Spanish)

1. **Términos y condiciones** with a standard, non-exclusive use licence.
2. **DPA (contrato de encargo de tratamiento)** meeting Ley 21.719 art. 15 bis, with the sub-processor list, Santiago hosting, model clauses for anything abroad, breach notice within 24 hours and deletion or return on exit.
3. **Política de privacidad** and a contact channel for data subjects and the Agency.
4. **Partner/referral agreement**; the partner, not us, gives legal advice.
5. **Engagement letter with the AML lawyer**: fixed fee in UF for the template set, then a monthly retainer for rule changes (04 budgets CLP 4.5 million, then CLP 250,000 a month; my estimates, no published rates).

**Key clauses:**

- "Herramienta, no asesoría legal." The customer and its OdC stay responsible; we never file a ROS.
- Confidentiality citing Law art. 6; logged access to the case register.
- Template warranty: reflects C62 at a stated date, reviewed by a named lawyer; updated within 30 days of a UAF change.
- Capped "inspection promise": if the UAF finds a defect in a generated document caused by our error, we fix it in 5 business days and refund that year's fee. We never pay fines.
- **Liability cap at 12 months of fees, but kept reasonable.** Ley 20.416 art. 9 applies consumer-law control of abusive clauses to contracts between micro or small firms and their suppliers ([Revista Chilena de Derecho](https://revistadisena.uc.cl/index.php/Rchd/article/download/24969/20171/58693)). Do not exclude liability for our own gross fault. Choose Chilean law and Santiago courts for Chilean customers.
- Yearly plans renew automatically with a 30-day reminder.

**Insurance:** professional indemnity plus cyber, about USD 1,500 a year for USD 250,000-500,000 cover, naming Chile (my estimate, unverified). **Trademark:** file at INAPI in classes 9, 42 and 41 before launch; budget CLP 1.2 million with an agent (unverified; [BioBioChile](https://www.biobiochile.cl/noticias/servicios/toma-nota/2025/03/30/como-inscribir-una-marca-y-una-patente-en-chile-los-pasos-y-costos.shtml)).

---

## 10. Financials

From the 04 model: Chile only, month 1 = November 2026, month 36 = October 2029, founder builds with AI agents and takes no pay. Amounts in CLP converted at USD 1 = CLP 982.

**Main assumptions** (04, my estimates there):

| | Low | Base | High |
|---|---|---|---|
| New paying customers, years 1 / 2 / 3 | 45 / 55 / 50 | 130 / 140 / 120 | 230 / 250 / 220 |
| First / later renewal | 60% / 75% | 70% / 85% | 80% / 90% |
| Effective price a year (after discounts and partner margins), years 1 / 2 / 3 | CLP 300k / 330k / 350k | CLP 330k / 380k / 420k | CLP 360k / 420k / 470k |
| Part-time Chilean sales and support, from month 3 (CLP a month, years 1 / 2 / 3) | 400k / 600k / 700k | 700k / 1.3m / 1.6m | 0.9m / 2.0m / 3.0m |
| Marketing a year | USD 8,000 | USD 15,000 | USD 25,000 |
| Chilean SpA | never | from May 2028 | from Nov 2027 |

Fixed lines in all cases: lawyer CLP 4.5 million in months 1-2, then CLP 250,000 a month; security test USD 4,000 in month 2 and USD 3,000 in months 14 and 26; AI tools USD 300 a month in year 1, then USD 250; insurance USD 1,500 a year; trademark CLP 1.2 million; home accounting USD 150 a month; a USD 3,000 trip each March; Paddle 5.5% of cash in; partner commissions 9% of new bookings and 3% of renewals.

**Results:**

| | Low | Base | High |
|---|---|---|---|
| Customers at month 6 / 12 / 24 / 36 | 18 / 45 / 82 / 103 | 51 / 130 / 231 / 295 | 91 / 230 / 434 / 586 |
| ARR at month 12 / 24 / 36 (CLP million) | 13.5 / 27.1 / 36.1 | 42.9 / 87.8 / **124.0** | 82.8 / 182.3 / 275.2 |
| ARR at month 36 (USD) | about 37,000 | **about 126,000** | about 280,000 |
| Cash in, years 1 / 2 / 3 (CLP million) | 13.1 / 27.9 / 36.9 | 42.7 / 91.3 / 127.0 | 84.0 / 191.0 / 282.9 |
| Costs, years 1 / 2 / 3 (CLP million) | 38.0 / 36.5 / 39.0 | 52.7 / 67.8 / 77.6 | 71.0 / 103.5 / 123.5 |
| Year-3 profit before founder pay | CLP -2.1 million | **CLP 49.4 million (USD 50,000)** | CLP 159.4 million (USD 162,000) |
| Break-even, trailing 12 months | not reached | month 14 (Dec 2027) | month 12 (Oct 2027) |
| Peak cash need, no founder pay | CLP 40.8 million (USD 41,600) if never stopped; CLP 20.5 million (USD 21,000) at the April 2027 gate | **CLP 17.8 million (USD 18,100), month 5** | CLP 16.0 million (USD 16,300) |
| Peak cash need with founder pay (USD 3,000 a month in year 2, 5,000 in year 3) | CLP 130 million | CLP 38.0 million (USD 38,700), still CLP -31.5 million at month 36 | CLP 16.0 million |

**Base year-1 costs: CLP 52.7 million (about USD 53,700):** marketing 14.7; legal 7.0; local sales and support 7.0; security test 3.9; partner commissions 3.9; AI tools 3.5; hosting and tools 2.9; travel 2.9; payment fees 2.3; home accounting 1.8; insurance 1.5; trademark 1.2 (CLP million).

**Unit economics (base):**

| Measure | Value |
|---|---|
| First-year price | about CLP 330,000 (USD 336) |
| Blended acquisition cost, year 1 | about CLP 193,000 (USD 197) |
| Payback | about 8 months |
| Gross margin after payment fees and hosting | about 88% |
| Lifetime value (5-year horizon) | about CLP 1.1 million (USD 1,100) |
| Lifetime value / acquisition cost | about 5-6 |

**Reconciliation notes.**

- **02 versus 04 on year-3 revenue.** 02's size check gives about UF 3,760 (USD 158,000) at list prices; 04's base gives CLP 124 million (about UF 3,015, USD 126,000). Both have about 300 customers. The gap is discounts and partner margins. **I use 04's figure** because it is net.
- **October 2026 is outside the model**, which starts in November. Add about USD 1,000-2,000 for October's AI tools, hosting and the first lawyer hours (my estimate). It does not change the picture.
- **The base is not conservative.** It needs about 11 new customers a month in year 1. The low case is what happens if small brokers do not pay; the kill gates catch it by April 2027.

**What it means.**

- **Cash need is small:** about USD 18,000 in the base case. Keep USD 25,000 available to the April 2027 gate, and USD 40,000 if the founder wants pay in year 2.
- **Chile alone pays the founder modestly.** The base year-3 profit of about USD 50,000 covers about USD 4,000 a month. More needs adjacent sectors and Peru (§11).
- **The limit is the small pool, not the unit economics.**
- **Exit.** Small bootstrapped SaaS firms sell for about 2.5-4x revenue ([beancount.io](https://beancount.io/blog/2026/07/11/bootstrapped-saas-valuation-multiples-2026-acquire-com-indie-founders-guide)): about USD 200,000-400,000 in the base case. Likely buyers: Regcheq (it raised USD 2 million and bought Mexico's UBCubo; [TLA](https://thelatinamericanlawyer.com/vei-counsels-regcheq-on-2m-investment-round/)), C-ONLINE, the screening vendors, broker CRMs and digital-notary platforms.

---

## 11. Regional expansion

**Step 1 is not a new country.** The same circular covers 1,453 other small obliged firms in Chile: vehicle dealers (538), exchange houses (346), auction houses (290) and customs agents (279) ([UAF register](https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx), counted in 02). They need new sector variants of the manual and red flags, not a new law layer. Their ROE frequency and thresholds may differ (unverified). Add them from month 9-12 if the core segments work. They are not in the 04 model.

**Then neighbours** (02, 04):

| Market | Buyers | Rivals | Payments and tax for a foreign seller | When |
|---|---|---|---|---|
| **Peru** | Real-estate agents and construction or real-estate firms are obliged ([SBS list](https://www.sbs.gob.pe/prevencion-de-lavado-activos/Sujetos-Obligados/Relacion-de-Sujetos-Obligados)); about 10,946 obliged subjects had an approved compliance officer in July 2025 (unverified) | General-purpose only; Regcheq has a Peru site | Paddle charges 18% VAT B2C. **Digital services from non-domiciled providers face 30% withholding** ([El Peruano](https://elperuano.pe/noticia/223591-impuesto-a-la-renta-consejos-para-los-contribuyentes-no-domiciliados)) | Prepare from month 18; launch about month 24 through a Peruvian reseller who invoices locally |
| **Paraguay** | About 1,450 real-estate firms; 1,238 warned in 2024 for missing filings ([SEPRELAD 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)) | None found | Not checked (unverified) | Year 3, as a deadline-calendar product at low prices |
| **Uruguay** | 2,058 estate agencies and 7,368 notaries (2019) ([GAFILAT](https://biblioteca.gafilat.org/wp-content/uploads/2024/07/IEM-Uruguay.pdf)) | Cumplo360; HADA from USD 10 + tax ([HADA](https://hada.com.uy/)) | Paddle charges 22% VAT B2C | Partnership or licence only |
| **Argentina** | 10,365 real-estate agents registered with the UIF (March 2024) ([GAFILAT/FATF](https://biblioteca.gafilat.org/wp-content/uploads/2024/12/IEM-Republica-de-Argentina-2024-GAFI-GAFILAT.pdf)) | AMLify, a member benefit of the Buenos Aires colegio ([CUCICBA](https://colegioinmobiliario.org.ar/novedades/245)) | Currency controls (unverified) | Not head-on |
| **Mexico** | Property intermediaries and developers are "actividades vulnerables" ([BHR](https://www.bhrmx.com/wp-content/uploads/2025/11/INTERMEDIACIÓN-EN-LA-TRANSMISIÓN-DE-INMUEBLES-Y-LA-LFPIORPI.pdf)) | Crowded; Regcheq present | Paddle charges 16% VAT | Later or never |

**What carries over:** the client file, BO, PEP and UN screening, deadline engine, registers, training record and inspection pack. **What changes per country:** the rule pack, national lists, templates, a local lawyer, local prices and the payment route. With AI agents, a new rule pack is about 2-4 weeks of build plus the lawyer review (04, my estimate there).

---

## 12. Risks and mitigations

| Risk | Likelihood / impact | Mitigation |
|---|---|---|
| **Small firms feel little pressure** (about 1.2% inspection odds for brokers; fines UF 15-60; no new sanction procedures in 2025) | High / High | Sell deadlines and saved time, not fear of fines; target notaries (about 8% odds) and new registrants; free calendar as the entry; kill gates on 15 Dec and 30 Apr |
| **C-ONLINE cuts its price, or Regcheq launches a self-serve tier** | Medium / High | Public low price from day 1; lead on what they do not show (deadlines, per-SPV nil ROE, case register, inspection pack); lock in partners early |
| **Notaries stay with C-ONLINE, Gesintel or Neitcom** | Medium / High | Notary variant from day 1 (1,000 UF threshold, higher volume); target newly appointed notaries; digital-notary partnerships; if no notaries pay by April 2027, stop (04's rule) |
| UAF adds free tools (MiUAF registers, more e-learning) | Medium / Medium | Link to the free campus; stay about the entity's own records and evidence, which a regulator portal is unlikely to hold for the firm |
| Template or rule error leads to a fine | Low / High | Named lawyer review; versioned templates with dates; 30-day update promise; capped inspection promise; insurance |
| Security hole in agent-written code; breach of ID and BO data under Ley 21.719 | Low / High | Founder reviews all security code; reviewer agent; scans in CI; external test before money changes hands; encryption; incident plan |
| Paddle refuses or drops the account | Low / High | Apply in week 1; Stripe plus Chile simplified VAT registration as plan B |
| Lawyer not found fast, or sign-off slips | Medium / Medium | Brief two lawyers in week 1; agents pre-cite every paragraph; fallback paid launch on 4 Jan 2027 |
| Chilean cards decline on a foreign gateway | Medium / Medium | Charge in CLP; checkout help on "uso internacional"; partner payment link as fallback; track declines weekly |
| Portal or form changes (Clave Única now, MiUAF in 2027) break the hand-off | Medium / Medium | UAF form fields stored as data; hand-off in its own module; watch uaf.cl weekly |
| Non-bank ROE Excel template is not public | High / Low | The nil ROE (the common case) needs no file; get the template from a pilot; ship in v1 |
| Unclear who a broker's "client" is (buyer, seller, landlord, tenant) | Medium / Medium | Per-entity policy setting with a lawyer-chosen default; ask the UAF through SIAC |
| Name-only PEP matching (InfoProbidad has no RUN) | High / Low | Score with position and comuna; show reasons; always ask the PEP question |
| SII treats the fee as a royalty (15% withholding) | Low / Medium | Standard-licence wording; treaty-country seller; written tax opinion before month 6 |
| Liability cap voided under Ley 20.416 | Medium / Low-Medium | Balanced terms; insurance |
| Founder abroad; one-person operation during the January ROE window | Medium / Medium | Part-time Chilean rep from month 3; Chilean WhatsApp number; help articles; status page; March trip |
| Broker licensing bill stalls | High / Low | Upside only; not in the model |

---

## 13. Milestones and kill criteria

| Date | Target (base) | Stop or pivot if |
|---|---|---|
| 30-31 Oct 2026 | MVP done; 20 discovery calls | **Fewer than 5 of 20 say they would pay CLP 200,000+ a year:** rethink scope or price before the main lawyer and security spend (about USD 6,000-12,000) |
| 30 Nov 2026 | Lawyer sign-off; security test passed; 10 pilots; 3 pre-orders | Paddle refuses the account: switch to Stripe plus Chile VAT registration |
| 15 Dec 2026 | First paid customers | **Fewer than 3 paid pilots or pre-orders from 40 conversations:** stop, or pivot to a partner-only offer |
| 31 Jan 2027 (after the nil-ROE window) | 20 paying; 400 free-calendar users; 3 partners | Fewer than 8 paying: cut marketing to the minimum and test notaries only |
| 30 Apr 2027 | 51 paying; 3 active partners | **Fewer than 20 paying: stop investing.** Keep it running only if notaries are paying |
| 31 Oct 2027 | 130 paying; 15 notaries; ARR about CLP 43 million | **Fewer than 50: stop, or sell the code and customer list to a rival** |
| Jan 2028 | First renewal cohort | **First-year renewal below 50%: stop.** It is a one-off product |
| May 2028 | SpA decision; Peru partner shortlisted | SpA only if a trigger in §9 fired |
| Oct 2028 | 231 customers; ARR about CLP 88 million | Below 120: hold costs flat; no Peru |
| Oct 2029 | 295 customers; ARR about CLP 124 million; profit about CLP 49 million | — |
| Any time | | C-ONLINE or Regcheq launches a self-serve plan below our price, or MiUAF adds free registers: re-plan within 30 days |

---

## 14. Open questions to settle first

1. **Will small firms pay?** Do sole brokers and small developers accept CLP 199,000-399,000 a year? Settle in the 20 discovery calls by 31 Oct.
2. **What do rivals really charge?** C-ONLINE's setup fee and client count; Regcheq, Gesintel and Neitcom quotes for a small broker, developer and notary. Ask as a prospect.
3. **Who is a broker's "client"?** Buyer, seller, landlord, tenant, or all? Is a rental-management mandate a "permanent relationship"? This shapes the data model (01, open question 1). Ask the lawyer, and the UAF through SIAC.
4. **Is a simple e-signature enough** for the sworn BO and PEP declarations under Ley 19.799 ([BCN](https://www.leychile.cl/Consulta/obtxml?opt=7&idLey=19799))?
5. **Must an ID copy be kept,** or only the number and a verification note? This decides whether we store ID photos at all.
6. **Data law:** does Ley 21.719 require a foreign processor to name a representative in Chile? Do remote access and offsite backups count as transfers? Does Ley 21.663 apply to us?
7. **Paddle:** will it accept an AML-compliance SaaS, and does it drop VAT when a Chilean business enters its RUT?
8. **Tax:** a written opinion that the subscription is "standard software"; the full conclusion of SII Ordinario 810 (referral versus resale); the notaries' VAT status; and whether the founder's company sits in a treaty country.
9. **The non-bank ROE Excel template** and the portal's "Formularios Recomendados DDC": get both from a pilot.
10. **Machine channel:** can a vendor use the Of. 543 channel to file ROE for many entities, and what will MiUAF offer?
11. **Leads:** what does it cost to find e-mails and phones for the register, and how many registered brokers are dormant?
12. **Extra lever:** do banks ask brokers or developers for proof of UAF compliance?
13. **Dates and bills:** the July 2027 ROE window; progress of bills 18.241-03 and 15.975-25.
14. **Hosting:** does Vultr offer managed PostgreSQL in Santiago, or is Google Cloud's Santiago region the better fit at our size?

---

## 15. Next steps this week (Monday 12 to Friday 16 October 2026)

1. **Confirm the selling company** (and whether it sits in a Chile treaty country) and **apply to Paddle on Monday**.
2. **Start S0 foundation** with the agents: repository, CI, Santiago VMs, tenant model, task engine with business days, audit log, synthetic data. Freeze the interfaces by Friday.
3. **Brief two Chilean AML lawyers.** Ask for a fixed fee in UF for the template set, terms and DPA, and for quick answers to open questions 3-6. Choose one by Friday.
4. **Book the external security tester** for 16-22 November.
5. **Build the lead list:** June 2026 register (RUT, sector) + names from the June 2025 CIPER copy and the SII lists + the notaries' directory. Flag new entrants and sanctioned entities.
6. **Put the landing page and the free "Autodiagnóstico + Calendario UAF" online,** and draft the Clave Única e-mail for Monday 19 October.
7. **Book 20 discovery calls** for weeks 2-3 (10 brokers, 5 developers, 5 notaries), each with the price question.
8. **Request quotes** from C-ONLINE, Regcheq and Gesintel as a small-broker prospect.
9. **E-mail ACOP** about a guest AML session in its broker course (19 Oct-16 Dec), and check the brand name at INAPI.
