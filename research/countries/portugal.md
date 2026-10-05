# Portugal: research report

Search-limited pass: 6 searches, no WebFetch, and no primary-source (government portal) reads. Evidence comes from search snippets, so all findings are preliminary. Portugal is accessible to a foreign solo founder: EU member state, standard payment rails, no sanctions. The main barrier is that invoicing software must be AT-certified.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Invoicing / accounting software | ATCUD, QR code, monthly SAF-T, certified software, CIUS-PT B2G e-invoicing extended to SMEs from 2026 | Reject | Dense market of certified vendors (Vendus, InvoiceXpress, TOConline, Moloni, GesFaturação and others). A new entrant needs AT certification. |
| Transport and logistics | Transport document (guia de transporte) communicated to AT before goods leave (Portaria 161/2013) | Reject | Handled by every certified invoicing package, including automatic communication. |
| Waste: transporters, producers, operators | e-GAR through SILiAmb, annual MIRR (1 Jan to 31 Mar), SIRER | Weak lead, crowded | At least four dedicated vendors (SMARTGAR, Kortex eGar, MyEGAR, EasyGAR, plus TOP-eGAR). Webservices and APIs exist. MIRR is pre-filled from e-GAR data. |
| Payroll / HR (Segurança Social) | Decree-Law 127/2025 "SCC" simplification from 1 Jan 2026: DMR replaced by exception-only communication, TSU payment window changed to days 1 to 25 | Not viable | Primavera, Cegid, Sage and the other payroll vendors adapt quickly. Unclear whether pain remains. |
| Relatório Único (annual employer report) | Annual submission, May 2026 | Reject | Annual only, and bundled into payroll software (Cegid and others). |
| Veterinary clinics | PEMV mandatory e-prescription platform run by DGAV (live since Jan 2022, v5 and 2026 FAQ published) | Unverified | Pain and incumbents not researched. Likely handled by clinic management software. |
| Accountants (OCC) | IES, Modelo 22, Modelo 3, IVA. Accounting SAF-T applies to 2027 periods, delivered in 2028. | Watch, unproven | SAF-T accounting filing in 2028 may create a tool niche for small bureaus. Too far out and unverified. |

## Opportunities

No opportunity reached the brief's evidence standard (competitor diligence, buyer list, workflow evidence) within the search budget. The closest candidate is below, and it is weak.

### Opportunity: Accounting SAF-T (PT) readiness checker for small accounting bureaus (speculative)

**Industry:**  
Accounting / certified accountants (TOC/OCC members)

**Buyer:**  
Small accounting practices (gabinetes de contabilidade) serving micro-SMEs

**Trigger / Why now:**  
The accounting SAF-T is required for periods from 2027 (delivered 2028). In 2026 the AT already pre-fills IES sections A and I from the 2025 accounting SAF-T. Dates come from search snippets (marclant.pt, artsoft.pt) and are unverified against the AT or Portaria 31/2019 text.

**Current workflow:**  
1. Export the SAF-T from accounting software.
2. Validate it against the AT schema in the AT validator or by hand.
3. Fix mismatches (accounts, taxonomies) and re-export.
4. Reconcile with IES and Modelo 22.

**Pain:**  
Unverified. Plausible, since errors affect IES pre-filling, but no complaint evidence was found.

**Existing solutions:**  
Accounting ERPs (Primavera/Cegid, Sage, PHC, Artsoft). The AT validator is free. Consultants.

**The gap:**  
An independent cross-ERP validator and exception fixer. No evidence it is unsolved.

**Possible product:**  
A SAF-T file linter and reconciliation tool across ERPs.

**MVP:**  
Upload a SAF-T file, then get a rule check against AT schema and business rules, with an error report.

**Pricing hypothesis:**  
EUR 20 to 50/month per bureau (estimate).

**How to find first customers:**  
OCC member directory, accounting forums, OCC training sessions.

**Risks:**  
Annual cadence, free AT validator, ERP vendors build it in, 2027 timing.

**Kill condition:**  
Interviews show the ERPs and the AT validator already catch the errors.

**Score:** 3/10

**Sources:**  
- https://marclant.pt/blog/ies-2025-prazo-julho-2026-saft-coimas
- https://www.artsoft.pt/blog-fiscalidade/ies/
- https://www.occ.pt/sites/default/files/public/2026-03/Essencial_IES2026-DIG.pdf

## Rejected after competitor research

- **e-GAR waste-guide issuing and MIRR:** killed by SMARTGAR (smartgar.com), Kortex eGar (kortexworld.com), MyEGAR (myegar.com, with an API), EasyGAR (easygar.pt) and TOP-eGAR (topdata.pt). It is a mandatory per-shipment workflow with free SILiAmb webservices, but the vendor field is already full. Sources: https://apoiosiliamb.apambiente.pt/temas/e-gar, https://noctula.pt/mirr-residuos-siliamb/
- **Transport-document (guia de transporte) communication to AT:** killed by built-in features of Vendus, TOConline, InvoiceXpress and GesFaturação. Sources: https://manual.toconline.pt/support/solutions/articles/3000121650-emiss%C3%A3o-e-comunicac%C3%A3o-de-guias-de-transporte, https://www.vendus.pt/blog/questoes-frequentes-guias-transporte/
- **ATCUD/SAF-T/e-invoicing compliance helper:** killed by certified invoicing vendors and many consultancy guides. Source: https://www.vatupdate.com/2026/05/29/portugals-e-invoicing-rules-certified-software-atcud-qr-codes-and-saf-t/
- **Payroll adaptation to the 2026 SCC (DMR elimination):** killed by Primavera, Cegid and similar payroll vendors, which published guidance already. Sources: https://pt.primaverabss.com/pt/blog/novo-modelo-comunicacao-remuneracoes-seguranca-social/, https://www.revistagerente.pt/inicio/noticias-laborais/novas-regras-e-prazos-da-seguranca-social-em-2026

## Attractive problem, poor distribution

None identified.

## Too competitive

- Certified invoicing and e-invoicing (ATCUD, SAF-T, CIUS-PT)
- e-GAR and waste-guide software
- Payroll and Segurança Social filing software

## Not researched (due to search cap)

Veterinary PEMV, customs and import/export agents, agriculture (IFAP, SIRCA), alojamento local, funeral homes, fuel stations, fire-safety contractors, pharmacies, and the AIMA immigration documents backlog. A follow-up pass should start with agriculture and food-chain compliance, and with immigration-related employer documentation.
