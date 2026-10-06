# C0758 / C0762 · Paraguay · SIFEN SME e-invoicing

## Verdict and score
**Still closed. 4/10.** The why-now is real but small, and both ends of it are covered.
- **Small pool.** DNIT RG 52/2026 designates about **3,000 taxpayers** in total across groups 19–24. Start dates run from 1 Jun 2026 to 1 Sep 2027, and pre-printed and self-printed stamps lapse the day after. Paraguay already has **more than 50,000 electronic invoicers**, so most of the addressable base has already chosen a solution.
- **The smallest firms have a free route.** "Small" taxpayers with one establishment and one point of issue can use **e-Kuatia'i free**, and DNIT also supplies the qualified digital-signature certificate free. That certificate otherwise costs about Gs 450,000 a year. More than 10,000 small taxpayers already use it.
- **The designated groups have suppliers.** These firms are larger SMEs with ERPs. EDICOM, Sovos, FacturaSend (API, MCP wrapper), SNI and ERP vendors sell to them, and open-source libraries (jsifen, PHP fertandil87/sifen) make integration cheap for local developers.

No meaningful exception layer is left for a newcomer. It is a commodity issuance market.

## What changed versus the Sonnet evidence
- Sonnet called EDICOM and FacturaSend "beatable" on absence of evidence. I could not find FacturaSend prices either (unverified), but the market-size data changes the picture.
  - The mandatory pool is about 3,000 firms over 15 months, against more than 50,000 already electronic.
  - DNIT gives the certificate free with e-Kuatia'i.
- Sonnet's "free tool limits" angle is weak. e-Kuatia'i limits eligibility to single-establishment "small" taxpayers, and that is exactly the SME segment the idea targeted.
- The jsifen verdict (not a real competitor) holds for end users, but open-source libraries lower the cost for every local software house, which increases supply.

## Competitors (corrected list)
| Competitor | Notes | Evidence |
|---|---|---|
| DNIT e-Kuatia'i | Free issuance plus free certificate for small single-establishment taxpayers | Verified (dnit.gov.py) |
| EDICOM | SIFEN page, enterprise | Verified |
| Sovos, SNI Technology | SIFEN coverage | Verified (pages) |
| FacturaSend | SIFEN sign-and-transmit API; has public procurement presence | Verified; prices unverified |
| jsifen, PHP sifen packages | Open source | Verified |
| Local ERP/POS vendors | SIFEN modules | Generic; names unverified |

## Barriers
- Free government tool and certificate for the smallest firms.
- Small mandatory cohort (about 3,000).
- The SIFEN technical spec is public, so there is no regulatory moat for a newcomer either.

## Buyer and price
- **Buyer.** Administrator of a Group 22–24 company with a pre-printed-invoice workflow, e.g. a distributor or a multi-branch retailer.
- **Price anchors.** The certificate costs about Gs 450,000 a year. SaaS issuance prices were not found (unverified). Public tenders for "servicio procesamiento DTE e integración SIFEN" exist, which implies an integrator market.

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 5 | One-off switch; issuance itself is routine. |
| 2 | Frequency | 9 | Every invoice. |
| 3 | Mandatory | 9 | By group date. |
| 4 | Fragmentation | 2 | One national schema. |
| 5 | Competition | 3 | Free tool plus many providers and open source. |
| 6 | Incumbent gap | 3 | No exception layer evident. |
| 7 | Buyer access | 6 | DNIT notifies via Marandú; group lists are not public (unverified). |
| 8 | WTP | 4 | Commodity. |
| 9 | MVP simplicity | 6 | Open-source libraries make the MVP easy, and the same is true for everyone. |
| 10 | Distribution | 4 | Small, already partly served pool. |
| | **Overall** | **4** | |

## Sources
- https://impuestospy.com/impuestos/resolucion-general-dnit-n-52-2026/
- https://www.ultimahora.com/dnit-incorpora-mas-contribuyentes-a-facturacion-electronica
- https://www.dnit.gov.py/web/portal-institucional/w/la-dnit-fomenta-el-uso-masivo-del-sistema-gratuito-de-facturaci%C3%B3n-electr%C3%B3nica-e-kuatia-i-
- https://www.dnit.gov.py/web/e-kuatia/w/paraguay-supera-los-50.000-facturadores-electr%C3%B3nicos-y-avanza-en-la-digitalizaci%C3%B3n-tributaria
- https://edicomgroup.com/es/factura-electronica/paraguay
- https://glama.ai/mcp/servers/lz9popz53k (FacturaSend API wrapper)
- https://www.contrataciones.gov.py/reporte/convocatoria/422818-servicio-procesamiento-documentos-tributarios-electronicos-e-integracion-sifen-siste-1/consultas.pdf
- https://www.mintlify.com/hugomrj/jsifen
