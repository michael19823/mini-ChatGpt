# Angola: opportunity research

**Status: partial.** The session's shared WebSearch cap ran out after 3 successful searches (a parallel 4th search returned "You've hit your usage limit"). The instructions say to stop when a search is refused, so I stopped there. This report covers only what those searches verified. Anything else is marked "unverified" or "estimate". Industries I could not research are listed as **not screened** and are not rejected.

**Accessibility:** Angola is not under broad US, EU or UK sanctions, and selling software there is legal for a foreign founder (I did not check this with a search in this session). In practice, the obstacles are collecting payment in kwanza, FX convertibility and repatriation, and the fact that tax-facing invoicing software must be **certified by AGT** (Administração Geral Tributária). That certification is a real barrier for a foreign solo founder who wants to issue invoices. Portuguese is required.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered businesses / accountants | Mandatory e-invoicing (faturação eletrónica): real-time validation by AGT | Too competitive for invoicing itself. One niche is kept (see Opportunity 1) | Large taxpayers since 1 Jan 2026, everyone else from 1 Jan 2027. The free AGT portal plus 21+ certified programs (Cegid Vendus, Cacimbo, Sisgesc, EDICOM, …) cover issuing |
| Accounting firms (contabilistas) | Reconciling multiple clients' AGT-validated invoices with books and VAT | Kept, low confidence | Plausible after-issuance gap, but no direct evidence of complaints |
| Employers / payroll bureaus | Monthly IRT withholding plus INSS contributions and remuneration declarations, annual Modelo 2 | Too competitive | Covered by local ERPs/payroll tools and global EOR/payroll vendors (Mercans, Rivermate, Ontop, Pebl) |
| Oil & gas suppliers | Local-content (conteúdo local) supplier registration/certification with ANPG | Not screened (search refused) | Could be promising. Needs research |
| Customs / freight forwarders | Customs (ASYCUDA) declarations / port single window | Not screened | — |
| Pharmacies | Regulatory reporting to ARMED (medicines regulator) | Not screened | — |
| Fisheries / agri exporters | EU export traceability (catch certificates, EUDR for coffee) | Not screened | — |

## Opportunities

### Opportunity: E-invoice reconciliation and exception desk for Angolan accounting firms

**Industry:**
Accounting firms and bookkeeping bureaus that serve SMEs

**Buyer:**
Owner or partner of a small accounting firm (contabilista certificado / gabinete de contabilidade) that handles 20–200 SME clients

**Trigger / Why now:**
Since 1 Jan 2026, large taxpayers and State suppliers must issue invoices electronically, with each one validated in real time by AGT. From 1 Jan 2027 the rule covers all other taxpayers. AGT flagged 261 invoicing programs as non-compliant, and only 21 programs from 16 companies were on the first certified list (Dec 2025). Over the 2026→2027 transition there will be a messy mix of portal-issued invoices, invoices from certified software and invoices from legacy systems.

**Current workflow (inferred, unverified):**
1. Clients issue invoices through the AGT Taxpayer Portal, through various certified programs, or (for SMEs until 2027) through legacy software.
2. The accountant collects sales and purchase documents from each client by email, WhatsApp or USB in PDF/Excel/SAF-T form.
3. The accountant rekeys or imports them into their own accounting package and checks them against what AGT has validated, so that VAT returns and supplier input-VAT match.
4. Mismatches (invoices not validated, cancelled or credit-noted, or missing on AGT's side) are chased by hand.

**Pain:**
Evidence is indirect. AGT warns that invoices from non-certified software may not be validated, which carries tax penalties and puts input VAT at risk. Vendor checklists and blogs (Cegid, Sisgesc) show demand for guidance among SMEs. I found no direct complaint evidence (searches ran out).

**Existing solutions:**
AGT Taxpayer Portal (free); Cegid Vendus / Cegid Primavera; Cacimbo Electronic Invoice; Sisgesc; EDICOM (enterprise); PHC and other ERPs (unverified for Angola); other certified local vendors on the AGT list.

**The gap:**
Existing products issue invoices for a single company. Whether a multi-client view exists that lets an accountant pull AGT-validated sales and purchase invoices for every client and reconcile them against books and the VAT return is unverified. That is the hypothesis to test.

**Possible product:**
A multi-client dashboard for accounting firms. It pulls or imports each client's e-invoice and SAF-T(AO) data, matches it against AGT-validated records and the client's purchase ledger, and flags missing, unvalidated or mismatched invoices before the VAT deadline.

**MVP:**
Upload SAF-T(AO) XML files and AGT portal exports for N clients, then produce a per-client exception report (unvalidated, duplicate, or missing counterpart). No invoice issuing, so no certification is needed.

**Pricing hypothesis:**
Estimate: USD 30–80 per firm per month, or about USD 2–5 per client company per month. Willingness to pay in USD is uncertain because of FX constraints.

**How to find first customers:**
The Ordem dos Contabilistas e Peritos Contabilistas de Angola (OCPCA) member directory (unverified that it is public), accounting-firm listings, and partnerships with certified invoicing vendors that lack an accountant view.

**Risks:**
AGT may not expose an API for third parties to read data (portal access may only work with each client's credentials). Certified vendors (Cegid/Primavera) could add an accountant portal. The market is small, and payment collection and FX are hard. Portuguese-language support is required.

**Kill condition:**
Kill the idea if the AGT portal already gives accountants a consolidated, downloadable multi-client view of validated invoices, or if Primavera/Cegid already ship an accountant reconciliation module in Angola.

**Score:** 4/10 (low confidence: no interviews and only indirect pain evidence)

**Sources:**
- https://www.cegid.com/ao/o-que-e-a-facturacao-electronica/
- https://www.vendus.co.ao/blog/faturacao-eletronica-obrigatoria-angola/
- https://edicom.pt/blog/angola-obrigatoriedade-fatura-eletronica
- https://sisgesc.net/blog/posts/faturacao-eletronica-prazos-obrigacoes-pme-angola
- https://feinfo.cacimboweb.com/
- https://reclameaqui.ao/blog/software-facturacao-certificado-agt
- https://expansao.co.ao/empresas/detalhe/facturacao-electronica-ja-em-vigor-e-agt-alerta-contribuintes-para-regularizacao-fiscal-68974.html
- https://www.cegid.com/ao/wp-content/uploads/sites/14/2026/02/checklist_facturacao-electronica-angola.pdf

## Rejected after competitor research

- **E-invoice issuing software for SMEs ahead of the 2027 deadline.** Rejected because the free AGT Taxpayer Portal plus 21+ certified programs (Cegid Vendus, Cacimbo, Sisgesc, EDICOM, and others) already cover it. AGT certification is also a barrier for a foreign solo founder.
- **IRT/INSS payroll compliance tool.** Rejected because local ERPs/payroll systems (Primavera, unverified for Angola) and global payroll/EOR vendors (Mercans, Rivermate, Ontop, Pebl) already cover IRT and INSS calculations, reports and Modelo 2.

## Attractive problem, poor distribution

- E-invoice compliance for very small informal or semi-formal traders in 2027: the need is real, but they are price-sensitive, often pay in cash, and the free AGT portal is the default substitute.

## Too competitive

- E-invoicing issuance (see above).
- Payroll (IRT/INSS).

## Not screened (follow-up if budget allows)

Local-content supplier certification with ANPG (oil & gas), customs/port single-window brokers, ARMED pharmacy reporting, and EU traceability for coffee exporters (EUDR) and fisheries. A future search pass should start with ANPG local content, which is the most promising lead.
