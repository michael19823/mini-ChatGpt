# Peru gaming SPLAFT kit: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B1 report](../reports/peru-b1.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product design and go-to-market detail are covered by the other section files.

Status: work in progress (counts done; competitors, prices, channels and regional still being researched).

## Summary

(pending)

## Buyer segments

All counts below are my own, from MINCETUR's live public registers, pulled on 10 Oct 2026. The registers sit behind the DGJCMT consultation site ([salas de juego](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos); [online licence holders](https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html); [sports-betting rooms](https://apuestasdeportivas.mincetur.gob.pe/Registro_Salas_apuestas_deportivas.html)). Each page loads a full list from a public web service (`wsConsultaWeb.asmx/listarConsultasRegistros` and `.../listarConsultasRegistros_AD`), which I queried with an empty search to get every row.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| Authorised slot and casino rooms (salas de juego) | **675 rooms** (622 with a validity date after today; 53 with no date shown) | my count of the [MINCETUR room register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_salasjuegos) | Oct 2026 | high |
| **Land-based operating firms (the obligated legal entities)** | **301 distinct RUCs** (283 if only rooms with a future validity date are counted) | same, distinct RUC numbers | Oct 2026 | high. Groups with several RUCs are counted once per RUC, which is right, because each RUC is a separate obligated subject that files its own IAOC. |
| - single-room firms | 185 (85 of them outside Lima and Callao) | same | Oct 2026 | high |
| - firms with 2-3 rooms | 89 | same | Oct 2026 | high |
| - firms with 4-10 rooms | 21 | same | Oct 2026 | high |
| - firms with 11+ rooms | 6 (Nevada Entretenimientos 75 rooms, Gaming and Services 29, Corporación Empresarial Holding 26, Alpamayo Inversiones 24, Rubi Gaming 13, Myagui Gaming 11) | same | Oct 2026 | high |
| Slot machines in authorised rooms | 69,601 (median single-room firm: 80 machines; middle half 56-122) | same | Oct 2026 | high |
| Rooms with table games (casinos) | 15 rooms, run by 9 firms, 219 tables | same (table count field) | Oct 2026 | medium. MINCETUR quoted 19 casinos in 2026 ([El Peruano via B1](../reports/peru-b1.md)); the register's "mesas" field may be incomplete. |
| Online licence registrations (remote games and/or remote sports betting) | **95 registrations; 49 distinct companies**; 85 "vigente", 10 temporarily suspended; 49 sports-betting and 46 games authorisations; 53 domains | my count of the [MINCETUR licence-holder register](https://apuestasdeportivas.mincetur.gob.pe/Titulares_autorizacion.html) | Oct 2026 | high. B1's "about 91 licences" counted registrations, not companies. |
| Registered physical sports-betting points (salas de apuestas deportivas) | **4,497 points under 23 licence holders** (La Tinka 1,949; King Tech 1,083; Free Games 413; Interplay 228; Livesport 184; Perumatic 159) | my count of the [MINCETUR betting-room register](https://apuestasdeportivas.mincetur.gob.pe/Registro_Salas_apuestas_deportivas.html) | Oct 2026 | high |
| - of which run by a named third-party local operator (agent) | 2,882 points, about **1,448 distinct local operators** after name clean-up (1,102 run one point; 249 run 2-3; 97 run 4+) | same | Oct 2026 | medium. Names are typed inconsistently; I normalised legal suffixes and punctuation. |
| - point types | 3,147 exclusive shops, 702 multi-service shops, 298 pharmacies, 217 malls, 84 corner shops (bodegas), 37 inside slot rooms | same | Oct 2026 | high |

**What this means for the buyer count.**

- The core buyer is the **301 land-based firms**. B1's figure of 325 (undated MINCETUR slide) is close. The new number is firmer and current.
- About **274 of the 301 firms run three rooms or fewer**. These are the firms least likely to have an in-house compliance team or a casino-management system with AML features.
- The **27 firms with 4+ rooms** hold 287 rooms and 32,946 machines, almost half the sector. They are few but they pay more and set the norms that small firms copy.
- **Online: 49 companies, not 91.** Several hold both a games and a betting licence, or several domains.
- **The 23 betting-licence holders with 4,497 shops are a new and interesting segment.** Under the new rules the licence holder is the obligated subject, and anonymous betting is gone (B1). The holder must collect client data at every shop, and must run due diligence on the agents who run them (supplier due diligence is new in 01015-2026, per [PRCP](https://prcp-r2-prd.postedin.com/FT-y-FP-incorporadas-por-la-Resolución-SBS-N°-01015-2026.pdf)). Whether the ~1,448 local agents are themselves obligated subjects is not confirmed (unverified). If they are not, they are still the people who capture the data, so they are users even if not buyers.

## Interim notes (to be merged)

- Full text of Res. SBS 01015-2026 is on MINCETUR's SPLAFT page ([PDF](https://consultasenlinea.mincetur.gob.pe/casinos/Splaft/pdf/Resoluci%C3%B3n_SBS_01015_2026.pdf)). Scope (art. 1.1 and def. 29): legal entities that run casinos and/or slot machines authorised by MINCETUR. Online and betting-shop licence holders fall under Res. SBS 03622-2025 instead.
- In force the day after publication (Artículo Octavo), i.e. 9 Apr 2026; 1695-2016 repealed the same day. No adaptation window found in the text.
- Art. 4.1: the formal risk assessment and client segmentation apply only to firms that run a casino, run 500+ machines in total, or run rooms in Tacna, Puno, Ucayali, Loreto, Tumbes or Madre de Dios. My count: 60 of 301 firms (9 casino, 20 with 500+ machines, 41 with a room in those regions, overlapping). 241 firms are on the lighter regime.
- Art. 19.2: one person can be compliance officer of only one obligated firm at a time, unless a corporate officer of a group. Art. 19.3: the officer may be non-exclusive (part-time). Art. 19.4: the general manager may be the officer if the firm is MEPECO, has 10 or fewer workers, is not in a group, and runs only casino/slot activity.
- Fines (sanctions annex amended by 01015-2026): fixed amounts per infraction. Examples: no RO or missing RO minimum data 7 UIT; not sending the RO as required 5 UIT; no RO backup 4 UIT; not keeping SPLAFT information 4 UIT; no approved manual 4 UIT; missing 30-day induction 1-2 UIT; failing to file a ROS on time or to check UN lists 8 UIT. UIT 2026 = S/ 5,500.
- Training price anchor: Seminarios Top "Curso Anual para Oficiales de Cumplimiento y Sujetos Obligados", 3 h on Zoom, S/ 211.25 list, S/ 169 with 20% off ([page](https://seminariostop.com/seminarios-y-talleres/curso-anual-a-oficiales-de-cumplimiento-y-sujetos-obligados-a-informar-a-la-uif-sbs-laft/)). UIF ran a free 3-hour virtual course 26 Mar-10 Apr 2026 ([Boletín UIF 158](https://www.sbs.gob.pe/Portals/5/jer/BOLETIN-INFORMATIVOS/2026/BOLETIN%20UIF%20N%C2%B0%20158.pdf), via search summary).
- Pirani compliance plans: free tier (200 records, 5 users); Starter US$ 304/month billed US$ 3,645/year; AML needs Starter plus the AML+ extension, price not public ([Pirani pricing](https://piranirisk.com/es/planes-y-precios/cumplimiento-normativo?hsLang=en), via search summary).
- SUCTR system vendors registered with MINCETUR: 29 firms, 94 model registrations (IGT 20, Win Systems/WIGOS 15, Cirsa 8, Link Tek SAC 6, Bally 5, DRGT 4, Modulus 4, LNW 4, plus local SACs: Interactive Technical Systems, Inversiones Cerro Blanco, Integrated Services for Gaming, Feral Electronics, Orion Consulting, Integrated Gaming System, Canadian Games, Wargos Technologies, DRGT Peru). My count of the [SUCTR model register](https://consultasenlinea.mincetur.gob.pe/casinos/Registros/registros.html?c=r_modelosuctr).
- Online licence register "platform" field: temporary platform 31, VPL 5, SoftConstruct 4, Techsson 4, Calimaco PAM 3.
- Associations: ATCE (Asociación de Turismo y Centros de Entretenimiento del Perú), 50+ operators at its 2023 PGS assembly, president Marcelino Oyola in 2023 ([Yogonet](https://www.yogonet.com/latinoamerica/noticias/2023/06/16/94981-la-asociacion-de-centros-de-entretenimiento-de-peru-reunio-a-mas-de-50-operadores-durante-su-asamblea-en-pgs-2023)). IAGR 2026 conference in Lima 19-22 Oct 2026 with MINCETUR ([SiGMA](https://sigma.world/es/news/lima-sera-sede-de-la-iagr-2026/)). PGS 2026 was 17-18 Jun, 23rd edition ([Yogonet](https://www.yogonet.com/international/news/2026/06/17/124217-peru-gaming-show-2026-latam-39s-gaming-and-networking-hub-kicks-off-today-in-lima)).

## Buyer profile and pain

(pending)

## Willingness to pay

(pending)

## Competitor table and discussion

(pending)

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
