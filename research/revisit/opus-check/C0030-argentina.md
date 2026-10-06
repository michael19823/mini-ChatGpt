# C0030 · Argentina · Obras sociales / prepagas billing and claim rejections (débitos)

## Verdict and score
**Narrow. 5/10.**
- **Billing half: still closed.** Clinic software already does monthly obra-social liquidation and billing:
  - YoFacturo has a dedicated clinics module with service codes, authorizations, copays and a monthly settlement report for each obra social.
  - RAS Salud documents "liquidación de obra social" flows.
  - Many more systems are listed in the source's developargentina 2026 roundup.
  - Individual professionals often bill through their círculo or colegio médico, which presents to the payers on their behalf. Catamarca's Círculo Médico alone has agreements with 52 obras sociales.
- **Debit (rejection) half: narrow opening.** Pre-billing audit, debit tracking and on-time re-billing are left for **mid-size clinics and sanatorios** to handle. Today this is done by in-house billing analysts and consultants: Crowe Argentina publishes debit-reduction services, and job ads exist for "analista de facturación" handling débitos.
  - Each payer's norms and its fixed 1st–15th presentation and re-billing calendar fragment the work, which is good for defensibility.
  - Peso pricing, provider fee squeeze and inflation cap willingness to pay.

## What changed versus the Sonnet evidence
- Sonnet called YoFacturo "not-a-real-competitor" with no health features. That is **wrong**: yo-facturo.com/clinicas/ bills obras sociales with codes, authorizations and monthly settlement reports. It does not appear to manage débitos.
- Sonnet's Traditum reading holds: it is a payer-side validation and connectivity network, so providers are forced users, not customers. Its role as a rail is also a dependency.
- Sonnet missed two categories: billing intermediaries (círculos and colegios médicos) and debit-audit consultants (Crowe).
- TusFacturasAPP is correctly not a competitor.

## Competitors (corrected list)
| Competitor | Covers | Evidence |
|---|---|---|
| YoFacturo Clínicas | Obra-social billing and monthly liquidation for consultorios; from about AR$20–50k a month for generic plans | Verified (site) |
| RAS Salud | Obra-social liquidation and billing | Verified (help center) |
| Other clinic systems in the developargentina 2026 roundup | Billing to obras sociales and prepagas | Partly verified |
| Círculos and colegios médicos | Bill obras sociales on behalf of member doctors | Verified (news) |
| Crowe Argentina and other consultants | Hospital debit-reduction advisory | Verified (crowe.com/ar) |
| In-house billing analysts | Débitos handling | Verified (job ads) |
| Traditum | Payer-side eligibility, authorization and validation rail | Verified; not a direct competitor |

## Barriers
- Per-payer norms, padrones and portals: dozens of obras sociales plus PAMI and IOMA, each with its own formats.
- Integration with Traditum and other payer validation networks.
- The intermediary layer (círculos) absorbs the work for solo doctors.
- Inflation and low fees: the sector reports "bajísimos" aranceles, and delayed payment (3 months in practice) erodes the value of recovered debits.

## Buyer and price
- **Buyer.** Billing manager (jefe de facturación) at a 30–150 bed sanatorio, or at a multi-specialty clinic billing 20+ obras sociales.
- **Price anchor.** Generic clinic SaaS runs AR$20–50k a month (YoFacturo). A debit-recovery tool could price as a share of recovered debits, but there is no verified anchor. Consulting fees are unverified.

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 8 | Debits cut revenue directly; manual audit is acknowledged as inefficient. |
| 2 | Frequency | 9 | Monthly presentation and re-billing cycles, every claim. |
| 3 | Mandatory | 6 | Operationally required to get paid. |
| 4 | Fragmentation | 9 | Each obra social and prepaga has its own norms. |
| 5 | Competition | 4 | Clinic SaaS covers billing; debit analytics are thinly served. |
| 6 | Incumbent gap | 6 | The classic 80–90% gap: billing is done, exceptions and debits are manual. |
| 7 | Buyer access | 6 | Clinic and sanatorio associations (ADECRA, CONFECLISA) are findable. |
| 8 | WTP | 4 | Peso-denominated, margin-squeezed providers. |
| 9 | MVP simplicity | 5 | Debit tracker and rules are easy; each payer's rule library is laborious. |
| 10 | Distribution | 5 | Through associations and consultants; slow sales to sanatorios. |
| | **Overall** | **5** | |

## Sources
- https://yo-facturo.com/clinicas/
- https://intercom.help/ayuda-ras-salud/en/articles/3443941-leccion-1-de-facturacion-avanzada-agregar-liquidacion-de-obra-social
- https://developargentina.com/blog/software-clinicas-consultorios-argentina-2026
- https://www.crowe.com/ar/insights/como-reducir-debitos-hospitalarios-con-una-gestion-eficiente
- https://e-legis-ar.msal.gov.ar/htdocs/legisalud/migration/pdf/29214.pdf (billing and re-billing calendar)
- https://www.elancasti.com.ar/edicion-impresa/cualquier-trabajador-que-realiza-una-actividad-cobra-tiempo-real-salud-no-n579394 (Círculo Médico Catamarca, 52 obras sociales)
- https://jobs.techstars.com/companies/medicus/jobs/70509276-analista-de-facturacion
- https://www.lacapital.com.ar/suscriptores/inflacion-y-bajisimos-aranceles-medicos-ponen-jaque-la-salud-privada-n10070302.html
