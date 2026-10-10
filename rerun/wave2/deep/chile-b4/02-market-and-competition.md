# Chile UAF kit: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B4 report](../reports/chile-b4.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product design and go-to-market detail are covered by the other agents.

Status: work in progress. Buyer counts, enforcement data and main competitors done; channels, regional and pricing being filled.

## Summary
(pending)

## Buyer segments

**Hard count.** The UAF publishes its register of reporting entities every January and July ([UAF, Inscritos en la UAF](https://www.uaf.cl/es-cl/sujetos-obligados/sector-privado/inscritos-en-la-uaf)). I downloaded the newest file, dated 30 June 2026 and posted on 6 August 2026 ([UAF xlsx](https://www.uaf.cl/media/documentos/Sujetos_Obligados_inscritos_en_la_UAF_al_30.06.2026.xlsx)), and counted it myself. It has 9,784 rows, each with a distinct RUT. I also counted the 30 June 2025 file ([CIPER copy](https://www.ciperchile.cl/wp-content/uploads/Buscador_sujetos_obligados_inscritos_en_la_UAF_al_30.06.2025.xlsx-Entidades-Supervisadas.pdf)) to see the yearly change.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| Property brokers (corredores de propiedades), total | **1,459** (2025: 1,382) | my count, UAF register | 30 Jun 2026 | high |
| of which natural persons (RUT below 50 million) | 664 | same | 2026 | high (RUT rule of thumb) |
| of which companies | 795 | same | 2026 | high |
| Real-estate management firms (empresas de gestión inmobiliaria) | **2,244** (2025: 2,009) | my count, UAF register | 30 Jun 2026 | high |
| distinct developer groups behind them | about 1,000-1,500 | my grouping by name stem; 1,226 stems appear once, 47 stems have 5+ SPVs (for example MPC 34, Armas 27, Maestra 27, Ecomac 22, 3L 18) | 2026 | low-medium |
| Notaries | **483** (2025: 496) | my count, UAF register | 30 Jun 2026 | high |
| Conservadores (property registrars) | **92** | same | 2026 | high |
| **Core target (brokers + real-estate firms + notaries + conservadores)** | **4,278 entities**, about 3,000-3,500 buying decisions | same | 2026 | high for entities, low for decisions |
| New registrations in 12 months | brokers +87 (10 left); real-estate +242 (7 left); notaries 43 new, 56 left | my comparison of 2025 and 2026 RUT lists | 2025-26 | high |
| Adjacent small obliged sectors | vehicle dealers 538 (2025: 278); exchange houses 346; auction houses 290; customs agents 279; factoring 195; money transfer 183; jewellers 31 | same | 2026 | high |
| All UAF-registered entities | 9,784 (2025: 8,970; 2015: 5,640) | same; [DIPRES 2015](https://www.dipres.gob.cl/597/articles-60655_doc_pdf.pdf) | 2026 | high |
| Active brokers outside the register | 5,000 to 20,000+ (estimates vary) | [Emol, Aug 2025](https://www.emol.com/noticias/Economia/2025/08/27/1176126/corredores-de-propiedades.html) | 2025 | low |

### Enforcement by segment (my count of the UAF sanctions register)

The UAF lists every final sanction ("sanciones ejecutoriadas") with the sector and the cause ([UAF, Sanciones ejecutoriadas](https://www.uaf.cl/es-cl/publicaciones-uaf/sanciones-ejecutoriadas)). I counted 1,546 final sanctions from November 2011 to 25 September 2025 (appeal rows removed; sector names normalised).

| Year of resolution | Brokers | Real-estate firms | Notaries | All sectors |
|---|---|---|---|---|
| 2012 | 75 | 22 | 12 | 260 |
| 2018 | 24 | 26 | 3 | 176 |
| 2019 | 19 | 32 | 3 | 176 |
| 2020 | 14 | 17 | 0 | 79 |
| 2021 | 1 | 3 | 2 | 18 |
| 2022 | 1 | 10 | 0 | 20 |
| 2023 | 1 | 7 | 0 | 65 |
| 2024 | 0 | 5 | 10 | 57 |
| 2025 (to 25 Sep) | 1 | 1 | 16 | 45 |
| **Total 2011-2025** | **245** | **167** | **50** | **1,546** |

What this shows:
- **Brokers have almost dropped out of enforcement.** They had 245 sanctions in total, but only 4 since 2021.
- **Real-estate firms get a handful a year.** Most older cases were for late or missing cash-operation reports (ROE).
- **Notaries are now the main target in this group.** 26 notaries were sanctioned in 2024-2025, all after on-site inspections ("Fiscalización"). With about 490 notaries, that is roughly 5% of all notaries sanctioned in two years.
- **Overall sanction volume is a third of the 2018-2019 level** (45-65 a year against 176).

**Typical fines are small.** I read the resolutions for all five 2023-2025 broker and real-estate cases ([UAF sanction PDFs](https://www.uaf.cl/media/archivos_sanciones/087-2023.pdf)):

| Case | Entity | Sector | Fine |
|---|---|---|---|
| [087-2023](https://www.uaf.cl/media/archivos_sanciones/087-2023.pdf) | Corretajes Sierpe y Sierpe Ltda. | broker | written reprimand + UF 40 (25 Sep 2025) |
| [056-2024](https://www.uaf.cl/media/archivos_sanciones/056-2024.pdf) | E Molina Morel Inmobiliaria Ltda. | real estate | reprimand + UF 40 (2 Jun 2025) |
| [088-2023](https://www.uaf.cl/media/archivos_sanciones/088-2023.pdf) | Iknow Gestión Inmobiliaria SpA | real estate | reprimand + UF 30 (26 Sep 2024) |
| [095-2023](https://www.uaf.cl/media/archivos_sanciones/095-2023.pdf) | Inmobiliaria Gigi S.A. | real estate | reprimand + UF 20 (8 Nov 2024) |
| [090-2023](https://www.uaf.cl/media/archivos_sanciones/090-2023.pdf) | Inmobiliaria e Inversiones MMC S.A. | real estate | reprimand + UF 15 (8 Nov 2024) |
| [028-2024](https://www.uaf.cl/media/archivos_sanciones/028-2024.pdf) | Notary Nancy de la Fuente Hernández | notary | reprimand + UF 40 (5 Sep 2025) |

All six were classed as "leve" (minor), where the legal ceiling is UF 800. The notary case shows the typical list of failures: no ROE of cash operations above USD 10,000, no client file ("Ficha de Cliente") for operations above UF 1,000, no screening against UN Security Council lists, and no staff training ([028-2024](https://www.uaf.cl/media/archivos_sanciones/028-2024.pdf)).

(more pending)

## Buyer profile and pain
(pending)

## Willingness to pay
(pending)

## Competitor table and discussion

The duty list below is the Circular 62 list from the [B4 report](../reports/chile-b4.md): registration upkeep, compliance officer, manual, annual training, client file (KYC), beneficial owner (BF), PEP check, UN list screening, ROE, ROS analysis log and filing, the five registers, and deadlines.

| Product | What it covers against the duty list | Price | Customers / focus | Verdict |
|---|---|---|---|---|
| **UAF Portal de Entidades Reportantes** (free) | Registration, ROS and ROE filing only. Clave Única login from 19 Oct 2026 ([Prieto](https://www.prieto.cl/en/uaf-implementa-autenticacion-mediante-clave-unica-en-el-portal-de-entidades-reportantes-2/)) | free | all 9,784 entities | Filing pipe. Keeps none of the files, registers, screening evidence or deadlines. |
| **UAF e-learning campus** (free) | Moodle "Malla Formativa": 4 e-learning courses on AML basics, a technical line ("not available") and a specialist line. Only for staff of registered entities; the compliance officer enrols them during announced intake windows (last one closed 8 Jun 2026) ([UAF campus](https://capacitacion.uaf.cl/campus/)) | free | registered entities | A free substitute for generic training content. It does not train on the entity's own manual, and intake is periodic, so the annual all-staff record still needs a tool. |
| **Regcheq** (Las Condes) | Nearly full cycle: list screening (PEP, UN, OFAC, courts, adverse media, 1,500+ lists), beneficial-owner tree, auto-generated BF, PEP and source-of-funds declarations, ROE file "ready to upload", ROS investigation workflow, 2.5-hour certified LA/FT course with team tracking, and a "Protect" advisory add-on with a yearly mock inspection ([Regcheq UAF page](https://regcheq.com/es-cl/cumplimiento-uaf); [Regcheq training](https://regcheq.com/es-cl/capacitaciones)). No manual generator or deadline calendar shown. | quote only ("Agendar demo") | "+600 companies" in Chile, Mexico, Peru, Brazil, incl. developer Moller & Pérez-Cotapos ([Regcheq](https://regcheq.com/es-cl)). Partners include three real-estate CRMs: PlanOK, Moby Suite and SCI ([Regcheq partners](https://regcheq.com/es-cl/partners)); Moby Suite lists Regcheq as a Chile integration ([Moby Suite](https://www.mobysuite.com/cl/integraciones?integration=regcheq)) | **Strongest rival for developers** with a CRM. Enterprise sales motion; no visible plan for a solo broker. |
| **Gesintel AMLupdate** | Due diligence, continuous monitoring, UBOfinder, related parties, onboarding, transaction monitoring, conflicts of interest, whistleblowing ([gesintel.cl](https://www.gesintel.cl/)) | quote only | "+350" clients; lists Notarios, banks, casinos, car dealers, municipalities, free-zone users; not brokers or real estate ([gesintel.cl](https://www.gesintel.cl/)) | Strong for notaries. Small real-estate firms also buy it for list checks after an inspection: one-employee Inmobiliaria e Inversiones MMC S.A. "contracted the Gesintel system" after the UAF found it had no screening and no manual ([UAF 090-2023](https://www.uaf.cl/media/archivos_sanciones/090-2023.pdf)). |
| **C-ONLINE** (Talagante) | "Sujetos Obligados - UAF" module: KYC form, automatic PEP and UN list search, enhanced due diligence, "automatic" ROS and ROE with alerts, prevention manual, user training ([C-ONLINE UAF](https://uaf.conline.cl/)) | **UF 2.5 a month + VAT** (about UF 30 a year, CLP 1.2 million), plus a one-off setup fee "case by case" ([C-ONLINE UAF](https://uaf.conline.cl/)) | Names "notarios, corredores, agentes" as targets. Client logos include Fuenzalida Propiedades (a broker) ([conline.cl](https://conline.cl/)) | **The closest direct rival.** It proves the niche exists and sets a public price anchor. Small firm; depth, quality and number of UAF clients unknown (unverified). |
| **Lexizum** | Screening (UAF, InfoProbidad, OFAC, OpenSanctions, UN), immutable PDF evidence with SHA-256 timestamp and 7-year retention, DDC per Circular 62, adverse media ([Lexizum](https://www.lexizum.com/)) | Starter UF 3/month (300 credits, 5 users), Profesional UF 8, Business UF 12, Enterprise UF 65 ([Lexizum](https://www.lexizum.com/)) | New; search listing says "Próximamente", launching Q4 2026 (unverified) | A screening tool with a public price. No manual, training, registers or ROE/ROS workflow seen. |
| **Neitcom** (since 2004) | PEP database with family links, UN and OFAC lists, PDF certificates "for UAF audits" ([Neitcom Empresas](https://neitcom-compliance.cl/productos/empresas/)) | quote only | Lists "Notarios y conservadores" among Ley 19.913 sectors ([Neitcom 19.913](https://neitcom-compliance.cl/soluciones/ley-19913/)) | Screening only. A rival for the list-check step, not the whole kit. |
| **Law firms and compliance boutiques** | Manuals, training, gap reviews. Carey, Guerrero Olivos, Aninat, HD Group Compliance and Compliance Metrics are Regcheq partners "focused on implementing AML manuals" ([Regcheq partners](https://regcheq.com/es-cl/partners)) | no public prices (unverified) | mid-size and large firms | One-off documents, no registers. A channel as much as a rival. |
| **Simplo** (free guide) | Explainer plus an editable document on UAF duties ([Simplo](https://simplo.cl/prevencion-lavado-activos-uaf-empresa/)) | free | SMEs in general | Manual template only. |
| **Real-estate CRMs** (PlanOK, Moby Suite, SCI) | No own UAF module seen; they connect to Regcheq instead ([Regcheq partners](https://regcheq.com/es-cl/partners); [Moby Suite](https://www.mobysuite.com/cl/integraciones?integration=regcheq)). PlanOK's home page has no UAF or AML mention ([PlanOK](https://www.planok.com/es-cl/)) | n/a | developers | Integration partners, or Regcheq's channel. |
| **Broker portals and CRMs** (Tokko Broker, Kiteprop and others) | No UAF, AML or due-diligence mention on their home pages ([Tokko Broker](https://www.tokkobroker.com/es-ar/); [Kiteprop](https://www.kiteprop.com/ar)) | n/a | brokers | No rival today; possible partners. |

**What the table says.**
- **The market is not empty any more.** The B4 report found "no broker-specific tool". In fact C-ONLINE sells a UAF module to notaries and brokers at UF 2.5 a month, and Lexizum is launching with public prices. Regcheq covers almost the whole duty list for larger firms and is wired into developer CRMs.
- **Nobody yet owns the solo broker and the small developer.** C-ONLINE's UF 30 a year plus a setup fee is about 5 times the UF 6 a year the B4 report assumed. Regcheq, Gesintel and Neitcom sell by demo and quote.
- **The gaps are the "paperwork" duties.** No product page I read shows a deadline calendar (10-day registration changes, two-year manual review, yearly training, ROE periods), a ROS analysis register with the Circular 62 fields, or an inspection-ready export of the five registers. Only C-ONLINE mentions a manual. These are exactly the items the UAF cites in fines (see "Buyer profile and pain").
- **Screening is becoming a commodity.** Four vendors sell PEP and UN list checks. A new product should include screening, but it should not compete on screening depth.


## Channels
(pending)

## Regional expansion
(pending)

## Implications for positioning and pricing
(pending)

## Open questions
(pending)

## Sources
(pending)
