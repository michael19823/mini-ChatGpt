# C0253 — Dominican Republic: ARS claims plus e-CF for clinics

## Verdict and score
**Narrow: 5.4/10.** Combined ARS billing plus e-CF is not open. HMLR (from US$60, DGII e-CF + ARS
billing) and Claro's Gestión Salud (online claims to each ARS, monthly claim reports per ARS)
already cover it, and the e-CF half is a commodity: 47 certified providers plus a free DGII tool.
What *is* new and open is **glosa (claim-objection) tracking and conciliation for private
providers (PSS: clinics, diagnostic centres, labs)**. On 19 Aug 2026 SISALRIL issued Circular
SSRL-INT-2026-002960, which puts Resolution 00238-2021 on medical audit, glosas and payments into
effect. It sets audit types, deadlines and conciliation and arbitration mechanisms, introduces a
new reporting scheme (Esquema 0039) and gives ARS and PSS **three months** (to about Nov 2026) to
adapt their systems. A glosa desk that sits beside the clinic's existing billing system is the
narrow segment.

## What changed versus the Sonnet evidence
- Sonnet found that 4 of the 5 named "killers" (Onniprac, Core Salud, SolMed, Dentera) could not be
  found at all. My searches also found none of them. The original "[V]" kill list was largely
  unverifiable.
- The real competitors were missing from the triage list: **Claro Gestión Salud** (a large telco
  platform linking clinics and ARS, with ARS Yunén integrated) and **HMLR**, which fully overlaps
  the original idea.
- There is a new trigger that neither the report nor Sonnet had: the Aug 2026 SISALRIL circular on
  glosas, conciliation and the Esquema 0039 reporting. It gives a concrete why-now for the
  disputes and reconciliation slice, not for billing.
- Physician–ARS conflict (CMD strikes, payment delays, fee-schedule fights) is confirmed as
  long-running, but much of it is about fee levels, which software can't fix.

## Competitors (corrected)
| Competitor | Type | Coverage |
|---|---|---|
| HMLR | DR healthcare ERP (GetApp/Capterra, from US$60, 0 reviews) | e-CF + ARS billing + POS + accounting; depth of glosa handling unverified |
| Claro Gestión Salud | Telco health platform | Online claims to each ARS with standard codes, monthly per-ARS claim reports, authorizations, EHR |
| ARS provider portals (Humano, Universal, Senasa, etc.) | Free payer tools | Authorizations and claim submission per payer (unverified per-payer detail) |
| 47 DGII e-CF providers + free DGII Facturador | e-CF | Commodity |
| Hospital information systems and in-house billing staff | Incumbent process | Manual glosa follow-up in Excel (unverified) |
| Onniprac, Core Salud, SolMed, Dentera | Named in the report | Not found by Sonnet or by me; treat as unverified |

## Barriers
- Each ARS has its own portal and formats, and there is no public API. Integration would mean
  file import and RPA.
- The new circular's details (glosa deadlines, Esquema 0039 fields) are known only from press
  coverage. The document itself was not read.
- Claro or HMLR could add a glosa module quickly.
- Fee-level disputes are political, not operational.

## Buyer and price
The buyer is the billing/accounts-receivable manager (encargado de facturación/cuentas por cobrar
a ARS) at a private clinic, diagnostic centre or lab billing several ARSs. The price anchor is
HMLR's US$60/month entry price for a full ERP. A glosa-recovery tool could price on recovered
value, or at about US$100–300/month for a mid-size clinic. That range is unverified; no
glosa-specific product price was found.

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 7 | Glosas and late payment directly hit clinic cash flow; long-running dispute |
| 2 | Frequency | 8 | Per claim, monthly per ARS |
| 3 | Mandatory | 6 | New SISALRIL audit/glosa rules and reporting from ~Nov 2026 |
| 4 | Fragmentation | 7 | ~Dozens of ARSs, each with its own rules and portal |
| 5 | Competition | 4 | Billing is covered (HMLR, Claro); the glosa niche is less so (unverified) |
| 6 | Incumbent gap | 6 | Billing systems submit claims; objection follow-up and conciliation are likely manual |
| 7 | Buyer accessibility | 6 | SISALRIL-registered PSS list; ADCLIP (private-clinic association) (unverified) |
| 8 | Willingness to pay | 5 | Recovered revenue is measurable; low software price anchors |
| 9 | MVP simplicity | 5 | Spreadsheet/remittance import + glosa queue is simple; per-ARS formats aren't |
| 10 | Distribution | 4 | Clinic associations; Claro already sells into the same buyers |
| | **Overall** | **5.4** | Narrow glosa/conciliation niche with a fresh trigger; billing itself is closed |

## Sources
- https://www.elcaribe.com.do/panorama/pais/sisalril-aplica-la-norma-de-auditoria/ (19 Aug 2026)
- https://eldinero.com.do/377062/sisalril-pone-en-marcha-la-normativa-de-auditoria-medica/
- https://www.elcaribe.com.do/panorama/pais/claro-introduce-novedosa-solucion-para-gestionar-sistema-de-salud-a-nivel-nacional/
- https://www.getapp.com/all-software/a/hmlr/ ; https://www.capterra.in/software/1107530/HMLR
- https://eldia.com.do/dida-responde-preocupacion-de-medicos-por-retrasos-pagos-ars/
- https://acento.com.do/el-financiero/medicos-extienden-huelga-contra-ars-humano-y-amenazan-a-senasa-8948572.html
- https://beancount.io/es/blog/2026/09/28/dominican-republic-e-cf-electronic-invoicing-november-2026-deadline-guide
- research/revisit/competitors/dominican-republic--{core-salud,dentera,hmlr,onniprac,solmed}.md
- Searches used: 8 of 8.
