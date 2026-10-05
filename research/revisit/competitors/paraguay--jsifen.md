# jsifen (Paraguay) - competitor check for C0758 (Paraguay SIFEN SME e-invoicing)

## Verdict
not-a-real-competitor

## Evidence
- jsifen is an open-source Java/Quarkus library that exposes a REST API for generating, signing and submitting SIFEN e-invoices, querying by CDC and validating taxpayers. Its repo owner appears to be "hugomrj" (per the mintlify docs page). Source: https://www.mintlify.com/hugomrj/jsifen
- It is a developer building block, not a product for SME owners: there is no UI, onboarding, support or hosted service in what I found.
- Similar open-source libraries exist (PHP: ionysdev/pkuatia, fertandil87/sifen). Sources: https://packagist.org/packages/ionysdev/pkuatia, https://packagist.org/packages/fertandil87/sifen
- The real commercial competition is hosted e-invoicing services (for example FacturaSend, per an MCP listing at https://mcp.so/ja/servers/paraguay-invoice-mcp), large vendors (EDICOM, Sovos) and the state's free e-Kuatia'i tool. Context: Paraguay has more than 50,000 electronic invoicers (https://www.dnit.gov.py/web/e-kuatia/w/paraguay-supera-los-50.000-facturadores-electr%C3%B3nicos-y-avanza-en-la-digitalizaci%C3%B3n-tributaria). I did not check these competitors individually. This file covers jsifen only.
- Complaints: none found. Searches in Spanish and English returned no app-store reviews, forum threads or outage reports about jsifen. This is a valid result.

## Pricing
Free open source (licence unverified). A small buyer would still pay for hosting, a digital certificate and developer time. No published price for a managed service.

## Fit gaps
- Needs a developer to integrate; no end-user interface.
- Does not provide a service: no support, no SLA, no hosting.
- Mobile, offline and multi-entity features: unverified (the docs mention none).
- Momentum: unverified. I could not check commit history because GitHub tools and WebFetch were not allowed.

## Opening
jsifen does not serve SME owners directly, so it does not block the idea. The competitors to check are FacturaSend, e-Kuatia'i (free) and EDICOM or Sovos.
