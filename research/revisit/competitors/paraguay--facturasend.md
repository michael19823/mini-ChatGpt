# FacturaSend (Paraguay)

Dropped ideas: C0758 (Paraguay SIFEN SME e-invoicing), C0762 (SIFEN issuance all segments).
Searches used: 5 of 6 (English and Spanish). WebFetch not used; the FacturaSend site was not read directly.

## Verdict: beatable (low confidence)

FacturaSend looks like a real but niche API and service provider. Nothing found shows it is entrenched with SMEs. The evidence is thin, so the verdict rests mostly on absence of evidence.

## Evidence
- Third-party MCP and integration listings describe FacturaSend as a service that generates, digitally signs and transmits Documentos Electrónicos to SIFEN (DNIT e-Kuatia) from the merchant's own account, with an API to create documents, query by CDC and check status. Sources: https://glama.ai/mcp/servers/lz9popz53k, https://mcp.so/ja/servers/paraguay-invoice-mcp. These are community listings, not FacturaSend's own pages.
- It is developer-oriented (API, "bring your own credentials"). This suggests an integrator tool more than a finished SME app. This is an inference and is unverified.
- Market context: DNIT reports more than 50,000 electronic invoicers. 88.6% are small taxpayers, via e-Kuatia and the free government e-Kuatia'i tool. Source: https://www.dnit.gov.py/web/e-kuatia/w/paraguay-supera-los-50.000-facturadores-electr%C3%B3nicos-y-avanza-en-la-digitalizaci%C3%B3n-tributaria. The free government tool for small taxpayers weakens any SME idea regardless of FacturaSend.
- Complaints: none found. The Spanish and English searches returned no reviews, app-store ratings, forum posts or outage news about FacturaSend. This is "no complaints found", not proof that it is good.
- Momentum: unverified. The MCP listings suggest it is still maintained and integrated with newer tooling, but no dates or release history were seen.

## Pricing
Not found. No published prices or minimums surfaced. Unverified.

## Fit gaps
- Likely API-first, so a non-technical SME may need a developer or an ERP integration (inference, unverified).
- Unverified: offline use, mobile app, multi-entity support, and an SME-friendly UI.
- The free government e-Kuatia'i tool covers many small taxpayers, so the paid gap is narrow.

## Opening
A no-code, SME-friendly SIFEN layer (invoicing plus Marangatu/IVA reporting) could sit where API-only providers leave a gap. It competes against the free DNIT tool, so the opening is small and needs direct checking of FacturaSend's site and pricing.
