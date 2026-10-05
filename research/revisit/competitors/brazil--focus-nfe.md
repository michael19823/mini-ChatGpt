# Focus NFe (Brazil)

Dropped idea: C0134, 2026 tax-reform invoice changes (CBS/IBS on NF-e, national NFS-e).

## Verdict: strong

Focus NFe is an active fiscal-document API (NF-e, NFS-e, NFC-e and more) with cheap published plans. It has already shipped the CBS/IBS fields. Only a narrow opening is left for a different buyer or workflow.

## Evidence
- Its API already carries the Tax Reform fields for NF-e and NFC-e, and it says it follows the Receita Federal schedule for the rest. Sources: https://focusnfe.com.br/guides/reforma-tributaria/ (search snippet; page not opened).
- CBS/IBS invoice emission started on 2026-08-03. Source: https://www.opovo.com.br/noticias/economia/2026/08/03/emissao-de-notas-fiscais-com-cbs-e-ibs-comeca-nesta-segunda-feira.html. The competitor nfe.io also documents the IBS/CBS NFS-e scenarios, so the space is crowded: https://nfe.io/docs/documentacao/nota-fiscal-servico-eletronica/duvidas/cenarios-de-emissao/cenarios-reforma-tributaria-ibs-cbs/index.md
- Momentum: active, with a separate guide per municipality, for example Planalto/BA: https://focusnfe.com.br/guides/nfse/municipios-integrados/planalto-ba/
- Complaints: found one on Reclame Aqui, filed 2026-04-01 under the parent entity Acras Tecnologia da Informação. A customer waited 19 hours for a reply on a critical NF-e/MDe integration issue and asked for real-time chat. Focus NFe replied that its SLA counts business hours. Source: https://www.reclameaqui.com.br/acras-tecnologia-da-informacao/demora-excessiva-no-suporte-da-focus-nfe-para-integracao-critica-de-nf-e-e-mde_5yNu9AriDtqL8CSV/. I found no other complaints, no app-store reviews and no G2/Capterra data (limited searches). I found no outage or failed-filing news.

## Pricing (from search snippets of https://focusnfe.com.br/precos/; verify before relying on it)
- Solo: R$89.90/month, 1 CNPJ, 100 notes included, R$0.10 per extra note.
- Start: R$113.90/month, 3 CNPJs, R$37.90 per extra CNPJ.
- Growth: R$548/month, unlimited CNPJs, 4,000 notes, R$0.12 per extra note.
- Retail (NFC-e): R$59.90/month.
- Enterprise: custom pricing above 50,000 notes per month.
- No setup fee, no lock-in period, 30-day free trial.
- This is not overpriced for small buyers.

## Fit gaps
- It is a developer API (REST), so it needs integration work. Its buyers are software vendors and tech-capable firms. Non-technical small businesses and accountants are served only through third-party software, which is unverified.
- Support is email-based with business-hours SLAs, with no real-time chat for urgent cases (one complaint).
- No offline, mobile or hardware gaps found. This is unverified.

## Opening
Little. A product for non-technical users (accountants or microentrepreneurs) that handles CBS/IBS compliance as a no-code workflow, or one with faster support, could still sit on top of or beside APIs like this. Competing on the API layer is not viable.
