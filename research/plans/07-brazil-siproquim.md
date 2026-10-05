# Plan #7: Brazil, NF-e to Polícia Federal monthly control map (SIPROQUIM 2) generator

Prepared 2026-10-05. Source: `research/countries/brazil.md` (Opportunity 1). Global rank #7, original score 6.5 (provisional).
Searches used: 15 of 15 (Portuguese and English). WebFetch is blocked, so every finding below comes from search-result snippets. Citations follow each claim.
Currency: about R$5.5 per US$1 (estimate).

---

## 1. Verdict up front

**Interview first, and lean toward not building this as a standalone SME product.** The legal trigger is real and current. But verification moved three things against the idea. I would only build if interviews show that small licensees whose software cannot produce the file spend a meaningful amount of time on maps each month. The best wedge is probably a tool for the **regulatory consultants and despachantes** who file maps for many clients, not for individual pharmacies.

The three deciding facts:

1. **Incumbent ERPs already generate the SIPROQUIM 2 TXT file.**
   - TOTVS Datasul (FT0536 "Exporta Arquivo Polícia Federal").
   - TOTVS Logix (VDP52250 "Mapa Polícia Federal versão SIPROQUIM 2", plus inbound invoices).
   - Rech's SIGER ERP (routine 5.4-M "Geração de Mapas Químicos").
   - Fagron Technologies, a compounding-pharmacy software vendor, has a help article titled "Mapa Polícia Federal" (what it covers is unverified).

   PF has also offered a **free TXT validator inside SIPROQUIM 2 since 17 Feb 2025**. That removes the "validation" half of our value.
2. **The penalty regime is softer than the report implied.** IN 338/2026 sets graded fines from R$2,128.20 to R$350,000 in four bands. It also provides **warnings for simple omissions**, with fines for repeat violations. A first late map probably earns a warning (this inference needs checking against the IN text). That weakens the fear-based pitch.
3. **Buyers are hard to list.** PF deliberately does not publish its list of licensed companies, for security reasons. The only size figure found is about **20,000 active companies in SIPROQUIM**, from an undated older Atech article. Compounding pharmacies, the planned first segment, number **9,320** (Anfarmag, end of 2025), but the share holding a PF licence is unknown.

---

## 2. Verification results

| Claim from report | What you found | Source | Status |
|---|---|---|---|
| IN DG/PF 338/2026 published 3 Aug 2026, replaces IN 166/2020 and 211/2021, in force | Confirmed. Published in the official gazette (DOU) on 3 Aug 2026; replaces IN 166/2020 and 211/2021; covers manufacturers, importers, distributors, warehouses, transporters, merchants and users | KLA: https://www.klalaw.com.br/produtos-quimicos-controlados-nova-regulamentacao-policia-federal-pf/ ; LegisWeb: https://www.legisweb.com.br/legislacao/?id=498786 | confirmed |
| Fines R$2,128.20 to R$1,064,100.00 | KLA describes 4 standardised bands from R$2,128.20 to **R$350,000**, with dosimetry (aggravating and mitigating factors), **warnings for simple omissions**, fines for repeat offences, and **180-day licence suspension for 5+ violations in 12 months**. The R$1,064,100 figure was not found again; it may be the statutory ceiling in Lei 10.357/2001 (unverified) | KLA (above) | changed |
| Maps due by the 15th of the following month | Confirmed: activities from the 1st to the last day of the month, sent by the 15th of the next month. An older PF "programa Mapas" page says "10th working day", but that refers to the legacy system | PF Mapas de Controle page: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/mapa-de-controle/mapas-de-controle ; PF FAQ: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/faq-siproquim2-mapas.pdf | confirmed |
| A map is due even in months with no movement | Search snippets state that a map is mandatory even with no activity. Not yet read in the IN 338 text itself | Snippet tied to the PF FAQ and Contábeis forum: https://www.contabeis.com.br/forum/topicos/325860/mapa-siproquim2/1 | confirmed (secondary) |
| Late or missing map is an infraction | PF FAQ: not delivering, or delivering late, is an administrative infraction, recorded at inspection | PF dúvidas frequentes: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/duvidas-frequentes-mapas | confirmed |
| Fixed-layout TXT import exists, meant for high-volume companies | Confirmed. Technical Manual v1.1 published 3 Jan 2025. A **"Novo Validador TXT"** was added inside the SIPROQUIM2 Mapas module on 17 Feb 2025 | Intertox: https://intertox.com.br/policia-federal-atualiza-manual-tecnico-para-importacao-do-arquivo-do-mapa/ ; PF Manual Técnico: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/manual-tecnico | confirmed, and the free validator is new |
| No API, only web forms plus TXT import | No API found. Data goes in through online forms or TXT import only; there is no XML submission in SIPROQUIM 2. A digital certificate (e-CNPJ/e-CPF) is required to log in | Regularize Consultorias: https://www.regularizeconsultorias.com.br/noticias/produtos-quimicos-controlados-siproquim2-assinador-pf/ ; PF certification guide: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/roteiros-e-apresentacoes/roteiros-cadastro-e-licenca/01-certificacao-digital.pdf | confirmed |
| Corporate ERPs generating the TXT: "unverified" | **TOTVS Datasul, TOTVS Logix and Rech SIGER all have SIPROQUIM 2 map exports** | TOTVS TDN Datasul: https://tdn.totvs.com/pages/viewpage.action?pageId=496802061 ; TDN Logix: https://tdn.totvs.com/display/public/LLOG/DMANVENLGX1-9530+DT+VDP52250+Mapa+Policia+Federal+versao+SIPROQUIM+2 ; TOTVS Logix inbound invoices: https://centraldeatendimento.totvs.com/hc/pt-br/articles/10783557043223 ; Rech: https://rech.com.br/blog/geracao-dos-mapas-quimicos-para-a-policia-federal/ | contradicted (incumbents exist) |
| Compounding-pharmacy systems "may or may not" export PF maps | Fagron Technologies' help centre has an article "Mapa Polícia Federal - Gestão de Estoque de Psicotrópicos". It was not possible to confirm whether it produces the SIPROQUIM 2 TXT or whether this is the FórmulaCerta product | https://fagrontechnologiesbc.zendesk.com/hc/pt-br/articles/360034147031 | unverified, leaning toward incumbent coverage |
| Dedicated SaaS for SIPROQUIM maps: unknown | Three searches (PT) found **no dedicated self-serve SaaS** that turns NF-e XML into maps. They did find **service providers**: Anzi Serviços Regulatórios sells "Envio de mapa mensal no Siproquim 2"; M2Farma publishes SIPROQUIM 2 guides for pharmacies; Regularize Consultorias; despachantes such as Dinâmica, Thalq and RS Produtos Controlados; and LICENSER (produtoscontrolados.com.br), a free controlled-products tool with an app (its scope was not checked) | Anzi: https://anziservicosregulatorios.com.br/produto/envio-de-mapa-mensal-no-siproquim-2-importacao-arquivo-passo-a-passo/ ; M2Farma: https://m2farma.com/blog/controle-produtos-quimicos-siproquim-2-farmacias/ ; LICENSER: https://produtoscontrolados.com.br/ ; Thalq: https://www.thalq.com.br/licen%C3%A7a-pol%C3%ADcias-e-ex%C3%A9rcito | confirmed (gap in SaaS, but manual services exist) |
| Market size: "fewer than ~5,000 licensees" is a kill condition | About **20,000 active companies in SIPROQUIM**, from an undated older article about Atech, which built the system. **PF does not publish the licensee list.** There were 9,320 compounding pharmacies at the end of 2025 | Atech/Baguete: https://www.baguete.com.br/noticias/atech-cria-software-anti-drogas-para-pf ; PF statement summarised in the same search; CFF/Anfarmag: https://site.cff.org.br/noticia/Noticias-gerais/30/07/2026/farmacias-de-manipulacao-cresceram-11-1-em-cinco-anos-revela-panorama-setorial-2025 | changed: the market is big enough, but the list is closed |
| Exemption thresholds in Portaria MJSP 204/2022 | Not verified within the search budget | none | unverified |
| Sincofarma piece specific to compounding pharmacies | Search did not resurface the article; the KLA and Sinproquim coverage was confirmed | none | unverified |

---

## 3. Customer and problem

**Buyers and users:**
- **Primary (revised): the regulatory consultant, despachante or small regulatory-affairs firm** that files PF maps for 10–100 client companies. They pay for anything that cuts per-client hours, and they already charge for the service (Anzi, Regularize and despachantes show the role exists).
- **Secondary: the licensed SME without an ERP export.** Examples are a compounding pharmacy on a light system, a small chemical reseller using Bling/Omie-class tools (whether these export the file is unverified), or an industrial QC lab. The user is the responsible pharmacist or chemist, or the office/fiscal assistant.

**Job to be done:** "Every month, turn what we bought, sold, used and lost into an accepted SIPROQUIM 2 map by the 15th, with zero rejections, and be able to show the inspector how the numbers tie to the invoices."

**Current workflow, with all times and costs as labelled estimates:**

| Step | Who | Time per month (estimate) | Cost |
|---|---|---|---|
| 1. Pull the month's NF-e (in and out) for controlled items from the accounting firm or ERP | Admin | 15–45 min | — |
| 2. Identify which lines are PF-controlled and convert units and concentrations to the PF product code | Pharmacist or chemist | 20–90 min | — |
| 3. Record consumption, transformation, losses and stock (spreadsheet) | Pharmacist | 15–60 min | — |
| 4. Log in with the e-CNPJ certificate; type each line into the web forms, or build the TXT | Admin or consultant | 15 min (few lines) to 4 h (many lines) | — |
| 5. Fix validation errors, submit, save the protocol | Admin | 10–30 min | — |
| 6. File evidence for inspection | Admin | 10 min | — |
| **Total, small licensee** | | **about 1.5–5 h/month (estimate)** | about R$100–500/month of staff time (estimate); consultants likely charge R$150–600 per client-month (**estimate, not verified**) |

**Cost of failure:**
- Late or missing maps are an infraction. Under IN 338 that can mean a warning, fines from R$2,128.20 up to R$350,000 by band, and **suspension after 5+ violations in 12 months** (KLA).
- Suspension stops purchases of controlled inputs. For a compounding pharmacy or distributor that is a real revenue risk.
- The realistic risk is accumulated omissions or mismatches that surface at inspection, rather than a single late file.

---

## 4. Product definition

**Core loop:**
1. Ingest the month's NF-e XMLs and ERP exports.
2. Auto-classify controlled lines using a stored product-to-PF-code mapping.
3. Prompt for consumption, losses and stock in one screen.
4. Reconcile opening stock + entries − exits = closing stock.
5. Generate the TXT to the current PF manual and pre-check it.
6. The user (or consultant) imports it into SIPROQUIM 2 and uploads the protocol back.
7. The evidence pack is archived.

**MVP (must-have):**
- Multi-client workspace, for consultants first.
- NF-e XML upload (ZIP).
- Mapping table: NCM/SKU to PF product code, concentration, density and unit conversion.
- Monthly consumption and loss entry.
- Stock reconciliation with discrepancy flags.
- TXT generator to Manual Técnico v1.1, plus our own pre-validator.
- A "zero-movement month" path.
- Deadline dashboard across all clients, with email/WhatsApp-link reminders on the 5th, 10th and 14th.
- Protocol upload and a PDF evidence pack.

**v1:**
- Automatic NF-e download using the client's A1 certificate (Distribuição DF-e).
- Import of the previous month's closing stock from the PF map consultation export (if available).
- CSV importers for common ERPs and pharmacy systems.
- Consultant white-label reports.
- Licence-validity tracker (CRC/CLF expiry) and change-of-registration reminders.
- 48-hour theft/loss incident checklist.

**Later:**
- Browser-automated import into SIPROQUIM 2 with the client's certificate (only if legally and technically safe).
- Army-controlled product (PCE/SisGCorp) and state Civil Police controlled-product reporting.
- ANVISA links.

**Out of scope:**
- Licensing and registration filings themselves (consultants keep that work).
- Fiscal invoicing.
- Storing certificates server-side in the MVP.
- Any claim of being PF-approved.

**Key screens and flows:**
1. **Client board (consultant home):** one row per client, showing month status (no data, data in, reconciled, TXT ready, protocol filed), days to the 15th, and red flags.
2. **Monthly intake:** drag-in XML ZIP → classified lines (controlled, not controlled, unknown) → resolve unknowns with the mapping dialog.
3. **Reconciliation:** per product, opening + in − out − consumption − loss = closing, compared with the count the user enters, and a required justification for any variance.
4. **Generate and check:** TXT preview with line-level validation messages, download, a "mark as filed" button and protocol upload.
5. **Evidence pack:** a PDF per month linking every map line to its NF-e key.

---

## 5. Technical design

**Architecture:**
- A single web app with a server-rendered UI.
- A background worker parses XML and generates files.
- Object storage holds uploaded XMLs and evidence PDFs.
- A Postgres database.

Data flow: upload → parse (NF-e 4.00 schema) → staging lines → classification against the mapping → reconciliation → TXT writer → stored artefact.

**Hosting:** a Brazilian region (AWS São Paulo sa-east-1 or similar) to simplify LGPD conversations. It is not legally required.

**Stack (solo developer):**
- Django or Rails, with Postgres, a Sidekiq/Celery worker and S3.
- Reasons: mature XML parsing, admin UI for free (useful for concierge mapping work), easy PDF generation, and one deployable unit.
- The front end can be HTMX or similar; no SPA is needed.

**Data model:**
- Account (consultancy or company)
- Client (CNPJ, PF licence numbers, CRC/CLF validity)
- Product (internal SKU, NCM)
- PFProduct (PF code, name, concentration)
- ProductMapping
- Invoice (NF-e key, direction, date, counterparty CNPJ)
- InvoiceLine
- StockMovement (type: entry, exit, consumption, transformation, loss, adjustment)
- MonthlyMap (period, status, generated file, hash, protocol)
- ValidationIssue
- AuditEvent

**Integrations:**

| Integration | Method | Fallback |
|---|---|---|
| NF-e XMLs | File upload (ZIP), or a mailbox address that receives XMLs | Ask the accountant for the monthly XML export; manual line entry |
| Auto-fetch NF-e (v1) | SEFAZ Distribuição DF-e web service with the client's A1 certificate, or a commercial invoice-API vendor (e.g., the vendors named in the report: Focus NFe, NFE.io, TecnoSpeed; pricing unverified) | Upload |
| SIPROQUIM 2 | **TXT file to the PF Manual Técnico v1.1**, imported by the user, then checked with PF's own validator | Printable line list for manual keying into the web forms |
| ERP / pharmacy systems | CSV templates per system | Manual spreadsheet template |

**Rules engine and validation:**
- A versioned layout definition: field positions, padding, uppercase, no accents, comma decimal, UTF-8 (per the report and PF manual).
- Business rules: every exit needs a counterparty CNPJ; units must convert to the PF unit; concentration must be inside the PF range; closing stock must not be negative; zero-movement months must still produce a map.
- The layout version is a config file, so PF manual updates (mt17 → mt18 → 030125) become a data change.

**Security, privacy and residency:**
- **LGPD (Lei 13.709/2018)** applies. We are an *operador* (processor) for the client, so we need a data processing agreement, a named contact for the ANPD and data subjects (encarregado/DPO-equivalent), and breach-notification procedures.
- The data is mostly corporate (CNPJs), plus some names and CPFs of responsible people.
- Treat the data as security-sensitive: PF itself withholds the licensee list for security reasons. Encrypt at rest, use per-tenant access control, and never expose cross-client data.
- Do not store A1 certificates in the MVP. In v1, if they are stored, use a KMS-encrypted vault with explicit consent.

**Audit trail and liability:**
- Every generated TXT is hashed and stored with the input XMLs and the mapping version used.
- The legal duty to declare stays with the licensee. Terms say the product prepares a file that the client reviews and submits.
- Reconciliation variances require a typed justification before generation.
- If a submission is wrong, the client files a correction in SIPROQUIM 2. We provide the diff and the evidence pack.
- Cap liability at 12 months of fees and exclude PF fines.

**Localisation:**
- Portuguese (Brazil) only; dates in DD/MM/YYYY; BRL.
- CNPJ/CPF validation (including the alphanumeric CNPJ format announced by Receita Federal for 2026; check the timing).
- NCM codes and comma decimals.

**Testing:**
- Golden-file tests of TXT output against the manual examples.
- Every generated file from concierge clients run through **PF's free validator inside SIPROQUIM 2** before anything is promised.
- Fixture library of real, anonymised NF-e XMLs.
- A regression suite rerun whenever PF publishes a new manual version.

---

## 6. Build plan

| Week | Milestone | Dev-weeks |
|---|---|---|
| 0–2 | **No code.** 12–15 interviews (section 13); obtain the PF Manual Técnico v1.1 and 3 sample TXT files from consultants | 0 |
| 1–3 | Concierge: founder plus a local consultant produce maps for 3–5 design partners using spreadsheets and a script that turns XML into a CSV-like staging sheet | 1 |
| 3–6 | MVP: XML parser, mapping table, reconciliation, TXT writer, client board | 3 |
| 6–7 | Validate with PF's validator on real client data; fix the layout | 1 |
| 7–8 | Billing, terms, onboarding; **first paying customer around week 8** (a consultant with 5–10 clients) | 1 |
| 9–14 | v1: DF-e auto-fetch, ERP CSV importers, licence tracker, evidence PDF polish | 4 |
| 15–18 | Hardening: multi-user roles, audit log UI, layout-version switching | 2 |

**Total:**
- About 6 dev-weeks to the first paying customer (8 calendar weeks including interviews).
- About 12 dev-weeks to v1.

**Concierge first:** classifying products to PF codes for new clients is done by hand in the admin panel. The mapping library grows with each client and becomes the moat.

---

## 7. Go-to-market

**Ideal first 10 customers:** 6–8 regulatory consultancies and despachantes that already file PF maps, plus 2–4 compounding pharmacies with no ERP export. The consultants can be found through:
- their own websites and blogs on IN 338 (Anzi, Regularize, M2Farma, Intertox, I9 Consultoria, Chemical Risk);
- Google searches for "despachante produtos controlados Polícia Federal" in each state (Thalq, Dinâmica and RS Produtos Controlados appeared in one search);
- LinkedIn searches for "analista de assuntos regulatórios" plus "Polícia Federal".

**Outreach angles (Portuguese):**
- "IN 338: 5 infrações em 12 meses = suspensão de 180 dias. Quantos dos seus clientes estão a uma omissão disso?"
- "Corte de 3 horas para 20 minutos por cliente/mês no mapa do Siproquim 2: o XML entra, o TXT sai validado."
- "Seu cliente não tem TOTVS? A gente gera o TXT a partir das notas."

**Channel partners:**
- Regulatory consultancies (white-label or wholesale).
- Accounting firms (escritórios contábeis) that already hold the clients' NF-e XMLs.
- Trade bodies: Anfarmag, Sincofarma SP and Sinproquim, all of which published IN 338 alerts. Offer a webinar on "mapas sob a IN 338".
- Chemical distributors could recommend the tool to their small customers, who must declare the purchases.

**Timing:** IN 338 took effect on 3 Aug 2026 and is being covered now. The first inspections under the new "Relatório de Fiscalização" regime will produce stories through 2026–27. Launch before the January 2027 map cycle (due 15 Feb 2027), when annual stock reviews make people look again.

**Content and SEO (Portuguese):** "como gerar arquivo txt siproquim 2", "mapa mensal sem movimentação siproquim", "erros validador txt siproquim", "IN 338 2026 multas mapas", "converter XML NF-e para mapa Polícia Federal". The PF manual's tutorial PDFs rank, but there are few practitioner how-tos.

---

## 8. Pricing and unit economics

**Tiers (hypotheses):**
- **Empresa:** R$149/month, 1 CNPJ, up to 300 controlled lines/month.
- **Empresa Plus:** R$299/month, up to 2,000 lines, DF-e auto-fetch.
- **Consultor:** R$990/month for up to 15 clients, then R$49 per extra client.
- **Annual:** 2 months free.

**Expected ACV:** blended about R$250/month per paying account, R$3,000/year (about US$545). Consultant accounts run R$12–20k/year.

**CAC by channel (estimates):**

| Channel | CAC |
|---|---|
| Direct consultant outreach | R$600–1,200 (founder time) |
| Association webinar | R$300–800 |
| SEO | R$200–500 after month 6 |
| Paid search | R$800–1,500; small search volume, test only |

**Gross margin:** about 85–90%. Hosting is small; the main variable costs are payment fees, taxes, and an optional invoice-API fee for DF-e fetch.

**Payment rails and getting paid:**
- Brazilian SMEs expect **boleto and Pix**, and they need a Brazilian nota fiscal de serviço (NFS-e) to deduct the expense.
- Option A: a cross-border merchant of record or payment provider such as EBANX (Pix/boleto for foreign merchants). Terms and fees are unverified. This avoids an entity but probably cannot issue a local NFS-e.
- Option B (recommended once there are more than about 20 customers): a Brazilian LTDA, opened through a local accountant, with Asaas/Iugu/Stripe Brasil-class billing that issues NFS-e automatically.
- A foreign founder must appoint a resident administrator and have a CPF (see section 9).

**FX risk:** revenue is in BRL. The real has historically been volatile. Keep costs in BRL where possible, price annually, and review prices in USD terms every 6 months.

---

## 9. Company and legal setup

- **Entity:** a Brazilian sociedade limitada (LTDA) is the practical route for B2B invoicing.
  - Foreign quotaholders need a CPF/CNPJ registration and a resident legal representative or administrator (standard requirement; confirm with an accountant).
  - Expect R$3–8k setup and R$600–1,500/month accounting (estimates).
  - Simples Nacional may apply if all partners qualify; foreign-resident partners can complicate this (unverified).
- **Local partner:** strongly recommended. Ideally a regulatory consultant or pharmacist who already files PF maps acts as co-founder or paid advisor, and is also the first channel.
- **Tax:**
  - With a local entity: ISS (municipal service tax) plus federal taxes; under Simples Anexo III/V an effective rate of about 6–15% (estimate).
  - The 2026 tax-reform test year adds CBS/IBS lines to invoices; the billing provider handles this.
  - Selling from abroad without an entity: the Brazilian buyer bears import withholding (IRRF/CIDE/PIS-COFINS-Importação), which makes cross-border SaaS invoices unattractive to SMEs (verify).
- **Contracts:**
  - Terms of use with an explicit "file preparation, client submits" clause.
  - LGPD data processing agreement (DPA).
  - Consultant reseller agreement.
  - Liability cap; exclusion of PF penalties.
- **Professional liability:** general/professional civil liability insurance (RC profissional), about R$1.5–4k/year (estimate). The legal duty to declare stays with the licensee, but a wrongly mapped concentration could cause an infraction.

---

## 10. Financial model (24 months, BRL)

**Assumptions (all estimates):**
- Blended ARPA R$250/month.
- Paying accounts ramp from month 3, reaching 50 by month 12, then +6 net per month.
- Costs: R$2,500/month base (infrastructure, tools, accounting, marketing); one-off R$8,000 setup in month 1.
- Part-time local consultant/partner at R$2,000/month from month 3.
- 12% of revenue for taxes and payment fees.
- Founder salary excluded.

| Period | Paying accounts | MRR (R$) | Costs (R$) | Cumulative cash (R$) |
|---|---|---|---|---|
| M1 | 0 | 0 | 10,500 | −10,500 |
| M2 | 0 | 0 | 2,500 | −13,000 |
| M3 | 2 | 500 | 4,560 | −17,060 |
| M4 | 5 | 1,250 | 4,650 | −20,460 |
| M5 | 9 | 2,250 | 4,770 | −22,980 |
| M6 | 14 | 3,500 | 4,920 | −24,400 |
| M7 | 19 | 4,750 | 5,070 | −24,720 |
| M8 | 25 | 6,250 | 5,250 | −23,720 |
| M9 | 31 | 7,750 | 5,430 | −21,400 |
| M10 | 37 | 9,250 | 5,610 | −17,760 |
| M11 | 44 | 11,000 | 5,820 | −12,580 |
| M12 | 50 | 12,500 (≈US$2.3k) | 6,000 | −6,080 |
| Q5 (M13–15, end) | 68 | 17,000 | 6,540/month | +21,340 |
| Q6 (M16–18, end) | 86 | 21,500 | 7,080/month | +60,640 |
| Q7 (M19–21, end) | 104 | 26,000 | 7,620/month | +111,820 |
| Q8 (M22–24, end) | 122 | 30,500 (≈US$5.5k) | 8,160/month | +174,880 |

**Break-even:**
- Monthly operating break-even in **month 8**.
- Cumulative cash break-even in **month 13** (founder unpaid).
- With a founder salary of R$15k/month, break-even is beyond month 24.

**Ceiling:**
- SAM: about 20,000 SIPROQUIM companies (old figure). Assume about 40% lack an ERP export, giving about 8,000 (estimate).
- Achievable share: 3–5%, i.e. 240–400 accounts.
- At R$250, that is **R$60–100k MRR (about US$11–18k)**.

This is a lifestyle-sized business, not a venture-scale one. The month-12 figure assumes 50 accounts, which is optimistic given the closed buyer list.

---

## 11. Team and founder fit

**Skills needed:**
- Solid web and back-end skills.
- Comfort with the NF-e XML schema and fixed-width file formats.
- **Fluent Portuguese**: all users, documents, sales and support are in Portuguese.
- Basic chemistry and units knowledge (concentrations, densities).

**Non-local founder:** feasible for the software, hard for distribution. The pitch depends on trust with consultants and pharmacists and on reading PF circulars. It needs a local partner who files maps today, plus a Brazilian accountant for the entity.

**Local help:** a regulatory consultant (mapping library, validation and first channel), an accountant (LTDA, NFS-e, taxes) and a lawyer (terms, LGPD) for a one-off review.

---

## 12. Risks and mitigations

| Risk | Type | Mitigation |
|---|---|---|
| PF changes the TXT layout (it has done so repeatedly: mt17, mt18, 030125, v1.1) | Regulatory / platform | Versioned layout config; monitor PF circulars; this is also a selling point |
| PF pre-fills maps from NF-e data (it has access to fiscal data via agreements; not verified) | Government substitute | Position on reconciliation, consumption and evidence, which pre-fill would not cover; kill if PF announces pre-fill |
| ERPs and pharmacy systems already export (TOTVS, Rech confirmed; Fagron possible) | Competitive | Target the segment without them; integrate *with* them as an evidence and reconciliation layer for consultants |
| Free PF TXT validator reduces perceived value | Competitive | Sell time saved on classification and reconciliation, not validation |
| Warnings for first omissions weaken urgency | Regulatory | Pitch on the 5-in-12-months suspension and inspection readiness |
| Closed licensee list makes prospecting hard | Distribution | Go through consultants, accountants and associations; CNAE filters on the open CNPJ data as a proxy |
| Wrong mapping causes an infraction | Operational / liability | Required review step, variance justification, liability cap, RC insurance |
| Handling e-CNPJ certificates | Security | Not stored in the MVP; KMS vault and consent in v1 |
| BRL volatility; cross-border billing friction | FX / payment | Local LTDA, BRL cost base, annual plans |

---

## 13. Validation plan before writing code

**Interview targets (12–15):**
- 5 regulatory consultancies or despachantes filing PF maps (Anzi, Regularize, M2Farma, Intertox, I9, Thalq and similar).
- 4 compounding pharmacies: 2 on Fagron Technologies software, 2 on other systems.
- 2 small chemical resellers or distributors.
- 2 industrial QC labs.
- 1–2 accounting firms with chemical or pharmacy clients.

**Questions:**
1. Which software generates your map today? Does it export the TXT? Do you still edit the file afterwards?
2. How many controlled lines per month, and how many hours from invoices to protocol? Who does it?
3. What were the last three validation errors or rejections, and how long did each take to fix?
4. Have you had a PF inspection, a warning or a fine? What did the inspector ask for?
5. (Consultants) How many clients, how much do you charge per client-month, and what share of your time goes on maps?
6. What would you pay for XML in, reconciled TXT plus evidence pack out? Would you sign up today at R$149 (company) or R$990 (consultant)?

**Pass thresholds:**
- At least 5 of 12 say their current software does **not** produce an acceptable TXT.
- Median of 2 hours or more per company per month.
- At least 3 consultants with 15+ clients each.
- At least 3 agree to pay before build.

**Fail (kill) signals:**
- Most compounding pharmacies get the file from Fagron or another pharmacy system.
- Median time under 1 hour.
- Consultants say maps are a low-effort add-on that they will not pay to speed up.
- PF announces NF-e-based pre-fill.

**Pre-sale test:** offer 3 consultants a paid concierge pilot at R$490/month for 3 months, delivering their clients' maps with a founder-built script. Two signed pilots are needed to proceed.

---

## 14. Expansion path

**Adjacent workflows, same buyers:**
- Army-controlled products (PCE) reporting through SisGCorp.
- State Civil Police controlled-product licences (e.g., SP).
- ANVISA controlled-substance registers (SNGPC is crowded at drugstores, but compounding-pharmacy niches may remain).
- PF licence renewals and change-of-registration.
- IBAMA's annual report on polluting activities (RAPP) for chemical companies.

**Other countries with the same pattern** of monthly precursor-chemical declarations to a police or narcotics body:
- Colombia: Ministry of Justice CCITE / SICOQ.
- Peru: SUNAT "Bienes Fiscalizados" (IQBF) monthly records.
- Argentina: RENPRE (SEDRONAR).
- Mexico: COFEPRIS precursors.
- Chile: Ministry of the Interior's register of controlled chemical substances.

All are unverified in this session. The data shape is similar: e-invoices in, a monthly controlled-substance declaration out.

---

## 15. Reassessment scorecard

| Criterion | Original | New | Reason |
|---|---|---|---|
| Pain | 7 | 5 | ERPs and PF's free validator absorb much of it; small filers may have few lines |
| Frequency | 8 | 8 | Monthly, including zero-movement months |
| Mandatory nature | 10 | 9 | Mandatory, but first simple omissions draw warnings |
| Fragmentation | 3 | 2 | One federal system, one layout |
| Competition | 5 (assumed) | 5 | No dedicated SaaS found, but ERP modules (TOTVS, Rech, likely Fagron) plus consultants |
| Incumbent gap | 6 | 5 | The gap exists only for SMEs without ERP export, plus consultant multi-client work |
| Buyer access | 7 | 4 | PF withholds the licensee list; only proxies are available |
| Willingness to pay | 5 | 4 | Low ticket; the penalty fear is softened by warnings |
| MVP simplicity | 8 | 8 | XML parse plus fixed-width writer plus reconciliation; no certification needed |
| Distribution | 6 | 5 | Consultants and associations are workable, but no registry |
| **Overall** | **6.5** | **5.5** | Incumbent ERP exports, a free PF validator and a closed licensee list lower pain and access; the trigger stays real |

**Sources (all accessed via search 2026-10-05):** listed inline in section 2. Additional:
- PF technical manual page: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/manual-tecnico
- PF import guide: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/roteiros-e-apresentacoes/roteiros-mapas/17-importar-arquivo.pdf
- M2Farma submission guide: https://m2farma.com/blog/envio-mapas-controle-siproquim-2/
- Rech, page 2: https://rech.com.br/blog/geracao-dos-mapas-quimicos-para-a-policia-federal/2/
