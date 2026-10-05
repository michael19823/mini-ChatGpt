# Corporate ERP systems (Brazil) - competitor check for C0133 (SIPROQUIM filing tool for large chemical companies)

## Verdict
strong (medium confidence). For large firms the in-house ERP/IT route is a real substitute, backed by the PF's own TXT import design. Based on official PF documentation only; no vendor or user evidence found.

## Evidence
- The Federal Police (PF) designed SIPROQUIM 2 file import for regulated companies with large transaction volumes that use their own systems to generate a TXT file, because manual entry would be unfeasible. The PF publishes the fixed-position TXT layout (DCPQ). Source: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/roteiros-e-apresentacoes/roteiros-mapas/17-importar-arquivo.pdf and https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/documentos/mt17.pdf
- A PF-linked news item says the project aims to continue negotiating integration with other corporate systems. Source: https://www.baguete.com.br/noticias/atech-cria-software-anti-drogas-para-pf (from search summary; unverified in detail).
- Complaints: no complaints about ERPs and SIPROQUIM were found. The only error reports found are PF's own troubleshooting sheets for SIPROQUIM (e.g. NullPointerException when submitting an earlier month, product missing for entry), which concern the government system, not ERPs. Source: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/roteiros/erro-java-lang-nullpointer-versao-1-0.pdf
- A contabeis.com.br forum thread titled "mapa siproquim2" exists (https://www.contabeis.com.br/forum/topicos/325860/mapa-siproquim2/2). I only saw the title, not the content, so no claims about it.
- No evidence found of specific ERP vendors (SAP, TOTVS, Senior, Sankhya) shipping a SIPROQUIM module. Searches returned nothing either way. Unverified.
- Momentum: PF issued a new normative instruction in 2026 (IN 338/2026, https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/legislacao/in-338-2026.pdf), so the layout may change and ERP teams must keep adapting. I did not read its contents.

## Pricing
No published pricing found for ERP SIPROQUIM modules or custom integrations. Unverified. ERP customization is typically paid per project, but no source found.

## Fit gaps
- ERPs are not shown to lack anything for large firms; they already export the TXT. Any gap is unverified.
- Possible gaps (inferred, not confirmed): layout changes after IN 338/2026 need ERP customization; multi-site or multi-CNPJ consolidation; reconciliation of ERP stock against the PF's inventory view; the validation step before upload.
- Small and mid-size firms without a capable ERP or IT team are not served by this route (this is why the original idea pivoted to SMEs).

## Opening
Little for large firms, since their ERP/IT teams already generate the PF TXT; a narrow opening may exist in a layout validator or mid-size firms with weak ERPs, but this check found no complaint evidence.
