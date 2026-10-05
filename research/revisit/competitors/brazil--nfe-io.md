# NFE.io (Brazil) - competitor check for C0134 (2026 tax-reform invoice changes: CBS/IBS on NF-e, national NFS-e)

## Verdict: strong

NFE.io is an active, developer-focused invoice API that has already shipped the reform fields and the national NFS-e. It is not a gap in the market. A small buyer who wants one-click compliance still has to integrate an API.

## Evidence
- NFE.io has a dedicated tax-reform documentation section, and its blog says staging and production environments are available for NF-e (model 55), NFC-e (model 65) and NFS-e with the new IBS/CBS fields. Sources: https://nfe.io/docs/documentacao/reforma-tributaria/ , https://nfe.io/blog/?p=13882
- National-model NFS-e (adapted to the dual VAT) is stated to be available in both staging and production (same blog post, via search snippet).
- It is updating its calculation engine so the API can estimate IBS/CBS rates from product, value and location. This is described as a goal, not a finished feature (unverified how complete it is).
- Developer docs exist for a reform-specific ("RTC") NF-e/NFC-e emission API: https://nfe.io/docs/desenvolvedores/rest-api/reforma-tributaria/nota-fiscal-de-produto-consumidor-rtc/api-de-emissao-de-nota-fiscal-de-produto-nfe-nfce-rtc/
- Momentum: actively developed, with 2026 reform content and docs.
- Complaints: only a Reclame Aqui search snippet for "Nfe.io Hub" (https://www.reclameaqui.com.br/empresa/nfe-io-hub/lista-reclamacoes/). It shows rating "Ótimo", 8.1/10 over 6 months, 28 complaints, 100% answered, 91.7% resolved, average response about 1 day 3 hours. The main categories are product quality and cancellation. Consumer score is 6.0 across 12 rated complaints, and 75% would do business again. These figures come from the snippet and I did not open the page. I found no specific complaint text, app-store reviews or outage news in the searches run.

## Pricing (from nfe.io/precos pages via search snippet; verify before use)
- NF-e: Base R$190/month (250 notes), Crescimento R$265 (500), Escala R$375 (1,000).
- NFC-e: Base R$220/month (2,000), Crescimento R$410 (5,000).
- NFS-e: Base R$190/month (250), Crescimento R$265 (500), Escala R$375 (1,000).
- Annual discounts exist (amounts not found), and there is a custom Enterprise tier.
- All plans include unlimited CNPJs, API access, business-hours support and 11-year storage.
- Sources: https://nfe.io/precos/ , https://nfe.io/precos/emissao-nfe , https://nfe.io/precos/emissao-nfse/ , https://nfe.io/precos/emissao-nfce
- R$190/month is reasonable for a company with a developer, but pricey for a micro-business with a few notes a month.

## Fit gaps
- It is API-first and aimed at developers and software vendors (docs, SDKs, a financial-sector segment page), not at end-user bookkeeping. Whether there is a no-code UI for small firms was not verified.
- IBS/CBS fields are mandatory only for Lucro Real and Presumido. Simples Nacional and MEI are exempt for now, so the reform pain is concentrated in mid-size firms. NFE.io covers those firms.
- Tools aimed at SMEs or accountants (rather than developers) were not researched here.

## Opening
Little room against NFE.io on reform-field emission for API-integrating buyers. Any opening is in a low-cost, no-integration product for micro and small firms or accountants, and NFE.io's entry price is above what such firms would pay for light volume.
