# C1202 · Brazil · Dumpster-rental (caçamba) e-CTR router

## Verdict and score
**Still closed. 3/10.** The "router" thesis rests on fragmentation across cities. There are many municipal e-CTR systems:
- São Paulo's CTR-E (Res. 058/AMLURB/2015, now SP Regula).
- São José dos Campos's electronic RCC control (Lei 8.696/2012, Decreto 18.185/2019).
- Jundiaí's collection-control system.
- Campo Grande's regularisation drive.

But the fragmentation does not reach the buyer. A dumpster-rental operator is almost always a local business working in **one** city, so it faces one free municipal portal, not many. Three further problems:
- **Municipal CTR systems have no public API.** None was found for SP CTR-E or the others, so a router would need screen automation against free government portals. The federal and state **MTR** (SINIR, CETESB SIGOR) does have webservices, but they are already wrapped by open-source components (ACBrMTR).
- **Enforcement is soft.** The source itself cites SP's secretary postponing electronic enforcement for caçambas, and Campo Grande's deadline was postponed. I could not confirm a 2026 SP enforcement date.
- **Incumbent price is already low.** Vertical caçamba-management tools exist from R$199.90 a month (source report: residuosonline, enkad and others). Whether they file e-CTR is still unverified, as the source asked.

## What changed versus the Sonnet evidence
- Sonnet found no named tool and called the bucket "not-a-real-competitor (low confidence)". I also could not surface the named vertical tools in search (residuosonline and enkad URLs are from the source; their CTR filing is unverified).
- The decisive new facts are structural, not competitive: municipal e-CTR portals are free, API-less and city-specific, while operators are single-city. A multi-city router solves a problem few buyers have.
- Sonnet looked mainly at MTR (state and federal). For MTR, open-source SINIR integration (ACBr) already lowers the barrier for any ERP vendor.

## Competitors (corrected list)
| Competitor | Notes | Evidence |
|---|---|---|
| Municipal e-CTR portals (SP CTR-E, SJC, Jundiaí and others) | Free, mandatory system of record | Verified |
| Vertical caçamba tools (residuosonline, enkad and about 5 others) | From R$199.90 a month (source); e-CTR filing unverified | Partly verified (source report) |
| ACBrMTR (open source) | SINIR MTR webservice component | Verified |
| CETESB SIGOR / SINIR MTR portals | Free | Verified |
| Caçamba marketplace platforms | Rental booking apps | Mentioned in procurement docs; unverified |

## Barriers
- Free government portals with no APIs; screen automation is fragile.
- Single-city buyers: little multi-portal pain.
- Enforcement repeatedly postponed (SP, Campo Grande).
- The municipal transporter registration (cadastro, renewed yearly) is the operator's real compliance task.

## Buyer and price
- **Buyer.** Owner of a 20–200 caçamba rental firm in São Paulo or another large city with e-CTR.
- **Price anchor.** Vertical tools from R$199.90 a month (source report). Caçamba rental runs about R$510–670 per unit per month (public procurement documents), so software is a small share of revenue.

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 4 | One CTR per rental; enforcement is soft. |
| 2 | Frequency | 8 | Every caçamba placement and removal. |
| 3 | Mandatory | 6 | Municipal rules, inconsistently enforced. |
| 4 | Fragmentation | 7 | Many cities, but each buyer sees one. |
| 5 | Competition | 4 | Free portals plus vertical tools at R$199.90. |
| 6 | Incumbent gap | 3 | Router value applies only to multi-city operators. |
| 7 | Buyer access | 6 | Municipal registered-transporter lists. |
| 8 | WTP | 3 | Small operators; low anchor. |
| 9 | MVP simplicity | 3 | No APIs; RPA against each portal. |
| 10 | Distribution | 4 | Local, fragmented operators. |
| | **Overall** | **3** | |

## Sources
- https://prefeitura.sp.gov.br/spregula/w/residuos_solidos/232825
- https://www.saopaulo.sp.leg.br/blog/secretario-adia-fiscalizacao-eletronica-sobre-destinacao-de-cacambas/
- https://sjc.sp.gov.br/servicos/urbanismo-e-sustentabilidade/residuos-solidos/sistema-eletronico/
- https://jundiai.sp.gov.br/noticias/2017/08/05/sistema-de-controle-de-coletas-facilita-fiscalizacao/
- https://www.campograndenews.com.br/meio-ambiente/prazo-para-empresas-de-cacambas-se-regularizarem-em-campo-grande-e-adiado
- https://solve.mit.edu/solutions/15614 (CTR-E)
- https://www.projetoacbr.com.br/forum/topic/89851-gerar-mtr-sinir-pelo-acbr/
- https://mtr.cetesb.sp.gov.br/assets/pdf/Manual_SIGOR.pdf
- https://www.residuosonline.com.br/ and https://enkad.com.br/software-para-locacao-de-cacambas/ (source report; not re-verified)
- https://mz.usp.br/wp-content/uploads/2025/05/TR-CACAMBA-1.pdf (rental price anchor)
