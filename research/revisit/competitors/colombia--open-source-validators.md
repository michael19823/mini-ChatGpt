# Colombia: Open-source validators (generic) — idea C0196 (FEV-RIPS JSON generator/validator)

## Verdict: not-a-real-competitor (as a class). The real blocker is MinSalud's official free validation mechanism, not open source.

## Evidence
- Searched (4 of 6 searches, Spanish and English) for open-source FEV-RIPS validators or generators. No open-source project was identified. The search tool does not index GitHub well and GitHub tools were out of scope, so "none found" is unverified for GitHub itself.
- MinSalud publishes an official validation mechanism with technical docs, including an API consumption manual and a Docker consumption manual (manual-consumo-api-docker-fev-rips). This is the free government tool that makes a generic validator redundant. Source: https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/OT/manual-consumo-api-docker-fev-rips.pdf and https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/OT/doc-tec1-tecnicas-datos-validacion-rips-fev-salud.pdf
- The validation is mandatory and run by the Ministry (MUV), which issues the CUV. A third-party validator can only pre-check. Source: https://consultorsalud.com/ministerio-salud-fev-rips-optimiza-registros/
- Resolution 948 of 2026 reportedly repeals 2275/2023, 558 and 1884 of 2024 and re-regulates RIPS as FEV support. The rules are still changing. Source: https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/OT/pres-resolucion-0948-de-2026.pdf
- Commercial and payer-side generators exist: Medesk (https://www.medesk.net/es/rips) and a Colsanitas RIPS generation function for natural-person providers (https://prestadores.colsanitas.com/documents/d/guest/instructivo-generacion-rips-2024). These are the more realistic competitors, not open source.
- Momentum: the official validator is actively maintained. Version 1.4.4 fixes were reported, covering JSON with CUV on rejection, period validation, and user type vs. coverage checks. Source: https://consultorsalud.com/ministerio-salud-fev-rips-optimiza-registros/

## Complaints
- No user reviews of any open-source validator found.
- Only complaint-like evidence concerns the official service: providers reported errors when consulting the CUV, tied to intermittent Ministry web-service availability (same consultorsalud source). No quotes available.

## Pricing
- Official tool: free (unverified exact terms). Open source: n/a, nothing found. Medesk and others: pricing not checked.

## Fit gaps
- Nothing known about open-source gaps. Official tool gap (unverified): it validates but does not build JSON from a clinic's own data, so small providers still need software that generates RIPS.

## Opening
Little room as a standalone validator, because MinSalud's free validator covers it. Any opening is in generating and pre-checking JSON for small providers, and it must track the Resolution 948/2026 changes.
