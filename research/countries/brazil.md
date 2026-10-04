# Brazil: Indie-Hacker Opportunity Research (as of 2026-10-04)

> **Research status (read first).** This track was cut short. The session-wide WebSearch budget (200 calls, shared across parallel agents) ran out after 9 searches by this agent. WebFetch is blocked by the egress proxy for every domain tried (gov.br, legisweb, anfarmag, intertox, i9ce, trenchrossi, sincofarmasp). As a result:
> - **[V]** marks claims taken from search results retrieved in this session. The URL is listed under Sources.
> - **[U]** marks prior knowledge or inference that was not re-verified in this session. Treat these as hypotheses.
> - Competitor diligence is **incomplete** for all three opportunities, so every score is **provisional**. Section 6 lists the exact checks to run next.
> - Currency assumption: about R$5.5 per US$1 [U].

---

## 1. Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason | Evidence |
|---|---|---|---|---|---|
| 1 | Chemical distributors, compounding pharmacies, labs and manufacturers using Polícia Federal (PF)-controlled chemicals | Monthly "Mapas Mensais de Controle" filed in SIPROQUIM 2 | **Opportunity #1** | New IN DG/PF 338/2026 in force since 3 Aug 2026, with graded fines. Monthly and mandatory, with a strict fixed-width TXT import | V |
| 2 | Waste collectors serving many small generators (health-care waste, auto shops, grease/septic) | Waste transport manifests (MTR) per shipment in SINIR or a state system, plus destination certificates (CDF) | **Opportunity #2 (provisional)** | Per-job, mandatory, and split between national and state systems. No verified 2025–26 trigger, and competitors not yet checked | V for rules, U for competitors |
| 3 | Pesticide retailers (revendas de agrotóxicos) and their software houses | Sending each agronomic prescription or sale to the state agricultural agency | **End-user app rejected. B2B multi-state API kept as lead #3** | Paraná offers a free state tool, Senior's ERP has a module, and Goiás runs a webservice that software houses already use | V |
| 4 | Universities and public research labs | Combining controlled-chemical monthly reports across many labs | Poor distribution | Universities wrote internal procedures for this, which shows the pain is real, but the buyers are public institutions that buy through tenders | V |
| 5 | Drugstores | ANVISA SNGPC controlled-drug reporting | Too competitive (desk only) | Pharmacy ERPs already include it | U |
| 6 | Occupational health (SST) providers | eSocial health-and-safety events, plus NR-1 psychosocial-risk assessments (enforced from May 2026) | Too competitive (desk only) | Established SST software and many consultancies | U |
| 7 | All SMEs and accountants | 2026 tax-reform test year: new CBS/IBS fields on NF-e invoices and the national NFS-e | Too competitive (desk only) | ERPs and invoice-API vendors own this workflow | U |
| 8 | Coffee, cocoa and cattle exporters | EU Deforestation Regulation (EUDR) farm geolocation and due diligence | Poor distribution / crowded (desk only) | Enterprise vendors plus a federal platform, and the EU keeps postponing | U |
| 9 | Cattle ranchers, feedlots, slaughterhouses | State e-GTA animal-transit permits plus the national individual bovine ID plan (PNIB) | Poor distribution (desk only) | Rural buyers, hardware ear tags, long rollout | U |
| 10 | Payroll bureaus | "Crédito do Trabalhador" payroll-loan deductions through eSocial and FGTS Digital (2025) | Too competitive (desk only) | Payroll suites have already absorbed it | U |

**Not screened (no search budget left). Recommended for a follow-up pass, all [U]:**
- Private security under the new private-security statute (Lei 14.967/2024) and the PF GESP portal.
- Dumpster-rental (caçamba) companies and municipal electronic waste-transport control (e-CTR) systems.
- Pest-control service records under ANVISA RDC 622/2022.
- Documentation for Farmácia Popular audits.
- SISAGUA water-quality reporting by alternative water suppliers (wells, water trucks).
- Subcontractors uploading the same monthly labour documents to several client portals.

---

## 2. Opportunities

### Opportunity: NF-e to Polícia Federal monthly control map (SIPROQUIM) generator

**Industry:**
Anyone who buys, sells, stores, moves or uses PF-controlled chemicals: chemical distribution and retail, compounding pharmacies (farmácias de manipulação), industrial QC labs, and small manufacturers.

**Buyer:**
The owner, responsible pharmacist, or regulatory/quality analyst at an SME that holds a PF licence (compounding pharmacy, small chemical distributor, lab). A second buyer is the regulatory consultant who files maps for many client companies.

**Trigger / Why now:**
- [V] IN DG/PF nº 338 is dated 29 Jul 2026, was published on 3 Aug 2026, and took effect on publication.
  - It consolidates the PF chemical-control rules and revokes IN 166/2020 and IN 211/2021.
  - SIPROQUIM is confirmed as the official electronic channel.
  - The list of controlled products does not change (still Portaria MJSP 204/2022).
- [V] Penalties are now graded by severity: warning, then fine, then suspension, then licence cancellation.
  - The reported fine range is R$2,128.20 to R$1,064,100.00.
  - Some sources say fines reach up to R$350k per infraction for the most serious conduct, such as operating without a licence or falsifying documents.
  - Inspections now produce a "Relatório de Fiscalização", replacing the old "Auto de Fiscalização".
- [V] There is a new 48-hour deadline to report theft or robbery of controlled chemicals in SIPROQUIM.
- [V] Trade bodies are telling members about the change right now:
  - Sincofarma SP published two pieces in Aug 2026, one specifically on compounding pharmacies.
  - Anfarmag and Sinproquim also published alerts.

**Current workflow:**
1. During the month the company buys, sells and uses controlled chemicals. Every purchase and sale has an NF-e electronic invoice. Consumption, losses and stock are tracked in spreadsheets or the ERP. ([V] obligation; [U] tooling)
2. By the 15th of the following month, every operation must be declared in SIPROQUIM 2. For example, January purchases and consumption are due by 15 Feb. [V]
   - Secondary sources report the map is due even in months with no deliveries or movement. Verify this against the IN text.
3. Staff either type each record into the online forms, or produce a fixed-position .txt file and import it. [V]
   - The file follows the PF chemical-control division's layout: UTF-8, uppercase, no special characters, comma decimals.
   - PF describes the import as meant for companies "with a large volume of transactions" whose corporate systems can generate the file.
4. They fix validation errors, submit, and keep evidence for inspections. [V]
   - They must also keep the licence itself current. For example, a product they no longer handle must be removed through an "Alteração Cadastral", or they commit an infraction under Lei 10.357/2001.

**Pain:**
- [V] Reporting is mandatory, monthly and per operation, in a strict format. Not complying is an infraction under Lei 10.357/2001, and the graded fines were publicised in Aug 2026.
- [V] Universities wrote internal procedures and training just to coordinate the monthly maps across their labs:
  - UNIR IN 9/2020
  - UFRJ Instituto de Química IT-5 "Gerenciamento de Mapas" (2023)
  - UFV training deck (2024)

  This points to recurring manual coordination.
- [V] PF has published several versions of the import-layout manual: "manual técnico 030125", mt17, mt18, and a "transição S2" document. Anyone generating these files has to keep up with layout changes. [U] SMEs without IT staff probably cannot.
- [U] Hours spent per month and error rates are not yet evidenced. Ask about them in interviews.

**Existing solutions:**
- **SIPROQUIM 2 itself.** Free web forms plus the TXT import. [V]
- **Corporate ERPs that generate the TXT.** The import was built for them, but which ERPs support it out of the box is unverified. [U]
- **Regulatory consultancies and law firms writing about IN 338/2026:**
  - Consultancies: I9 Consultoria Empresarial (OEA Group), Intertox, Chemical Risk.
  - Law firms: KLA, Trench Rossi Watanabe, Nascimento Mourão.
  - [V] that they publish on the topic. [U] whether any of them file maps as a managed service.
- **Compounding-pharmacy management systems** (e.g., FórmulaCerta). They may or may not export PF maps. [U]
- **Dedicated SaaS for SIPROQUIM maps: not verified either way.** The competitor search was blocked by the exhausted budget. **This is the #1 kill check.**

**The gap:**
[Hypothesis] SMEs already have every purchase and sale as NF-e XML, but nothing turns those XMLs plus a consumption log into a validated PF map. Three things stay manual:
- Mapping each product code (NCM/SKU) to the PF product code and concentration.
- Reconciling stock on the books against physical stock.
- Ongoing compliance: licence validity, the 48-hour theft notice, and maps for months with no movement.

**Possible product:**
A web app that:
- Takes the month's NF-e XMLs. Upload in v1; later, fetch them automatically using the client's A1 digital certificate.
- Stores a one-time mapping from each product to its PF product code and concentration.
- Adds a two-minute consumption/loss entry and reconciles stock.
- Exports a validated SIPROQUIM TXT plus an evidence pack ready for inspection.
- Sends deadline alerts, zero-movement reminders and a 48-hour incident checklist.

**MVP:**
One segment only (compounding pharmacies):
- Upload XMLs.
- Fill in the mapping table.
- Validate the layout and export the TXT.
- Send reminders on the 5th, 10th and 14th.

No SIPROQUIM automation and no SEFAZ (state tax authority) integration in v1. Estimated build: 4–8 weeks for one developer [U].

**Pricing hypothesis:**
- R$149–399/month per company, tiered by volume (about US$27–73).
- Consultant plan: R$1,200–2,500/month for 20–50 client companies (about US$220–450).
- Value anchor: the minimum fine (R$2,128.20) costs more than a year of the subscription.

**How to find first customers:**
- **Trade bodies** [V]: Sincofarma SP and Anfarmag (compounding pharmacies), and Sinproquim (chemical industry, SP). All three published alerts on IN 338. Pitch a joint webinar or content partnership on the new IN.
- **Open company data** [U]: Receita Federal's open CNPJ dataset, filtered by CNAE (activity code) 4771-7/02 (compounding pharmacies) and the chemical-wholesale codes.
- **Consultancies as resellers** [U]: white-label for the firms listed above.

**Risks:**
- ERP and pharmacy-system vendors add the export themselves (cheap for them to build).
- PF pre-fills maps from NF-e data, giving away a free government substitute.
- Liability if a filed declaration is wrong.
- Market size unknown: neither the number of licensees nor the exemption thresholds were verified.
- Low price per company.
- Low fragmentation: one federal system, so little defensibility.

**Kill condition:**
- At least two established SaaS already generate SIPROQUIM maps from NF-e for R$150/month or less, or FórmulaCerta-class pharmacy systems already export PF maps.
- Interviews show a typical SME spends under 2 hours a month on maps.
- There are fewer than about 5,000 PF licensees.

**Score:** 6.5/10 (provisional)

| Criterion | Score |
|---|---|
| Pain | 7 |
| Frequency | 8 |
| Mandatory nature | 10 |
| Fragmentation | 3 |
| Competition | Unverified; assumed 5 |
| Incumbent gap | 6 |
| Buyer access | 7 |
| Willingness to pay | 5 |
| MVP simplicity | 8 |
| Distribution | 6 |

If the competitor scan finds no SaaS priced for SMEs, this rises to about 8. If ERPs already export the file, it drops to about 4.

**Sources:**
- IN DG/PF 338/2026:
  - Official PDF: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/legislacao/in-338-2026.pdf
  - Annotated copy (Sinproquim): https://sinproquim.org.br/wp-content/uploads/2026/08/InstrucaoNormativaDGPFN338de29dejulhode2026comgrifos.pdf
  - LegisWeb: https://www.legisweb.com.br/legislacao/?id=498786
  - PF notice: https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/comunicados-e-circulares/Nova_IN
- Analyses of the new IN (2026):
  - Sincofarma SP: https://sincofarmasp.com.br/2026/08/20/produtos-quimicos-controlados-pela-policia-federal/
  - Sincofarma SP, compounding pharmacies: https://sincofarmasp.com.br/2026/08/18/instrucao-normativa-da-policia-federal-estabelece-novas-regras-para-farmacias-de-manipulacao/
  - Anfarmag: https://anfarmag.org.br/conteudos/policia-federal-atualiza-procedimentos-de-fiscalizacao-de-produtos-quimicos-controlados/
  - Sinproquim: https://sinproquim.org.br/pf-atualiza-o-controle-de-produtos-quimicos-que-podem-ser-usados-na-elaboracao-de-entorpecentes/
  - Trench Rossi Watanabe: https://www.trenchrossi.com/alertas-legais/policia-federal-reforca-fiscalizacao-de-produtos-quimicos/ (EN: https://www.trenchrossi.com/en/legal-alerts/federal-police-step-up-inspections-of-chemical-products/)
  - KLA: https://www.klalaw.com.br/produtos-quimicos-controlados-nova-regulamentacao-policia-federal-pf/
  - Nascimento Mourão: https://nascimentomourao.adv.br/novas-regras-para-controle-de-produtos-quimicos-pela-policia-federal-in-dg-pf-n-338-2026/
  - Intertox: https://intertox.com.br/policia-federal-publica-nova-instrucao-normativa-sobre-o-controle-de-produtos-quimicos-confira-a-in-dg-pf-no-338-2026/
  - I9 Consultoria: https://i9ce.com.br/in-dg-pf-338-2026-produtos-quimicos-controlados/
  - Chemical Risk: https://www.chemicalrisk.com.br/combate-a-fabricacao-de-drogas/
  - VG Notícias: https://www.vgnoticias.com.br/policia/pf-endurece-fiscalizacao-e-preve-multas-de-ate-r-350-mil-para-produtos-quimicos/149880
  - Portal Comex: https://portalcomexbr.com/pf-n-338-de-29-de-julho-de-2026-722724354/
- Monthly map rules and FAQ:
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/mapa-de-controle/mapas-de-controle
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/faq-siproquim2-mapas.pdf
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/duvidas-frequentes-mapas
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos/ManualMapas.pdf
- TXT import layout and versions:
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/documentos/manual-tecnico-030125-1.pdf
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/documentos/mt17.pdf
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/documentos/mt18.pdf
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/roteiros-e-apresentacoes/roteiros-mapas/17-importar-arquivo.pdf
  - https://www.gov.br/pf/pt-br/assuntos/produtos-quimicos/arquivos-siproquim2/documentos/transicaos2.pdf
- Signals of manual effort:
  - UNIR IN 9/2020: https://prad.unir.br/uploads/85858585/arquivos/INSTRUCÃO_NORMATIVA_N__9__DE_18_DE_NOVEMBRO_DE_2020_220542936.pdf
  - UFRJ IQ IT-5: https://www.iq.ufrj.br/arquivos/2023/06/IT-5-CSQiq_GerencMapas.pdf
  - UFV training: https://www.dmt.ufv.br/wp-content/uploads/2024/11/Treinamento-Pordutos-controlados-compactado.pdf
  - A 2024 UEL undergraduate project found in the same searches (weak signal, content not reviewed): https://sites.uel.br/dc/wp-content/uploads/2024/08/PROJETO_TCC_BEATRIZ_BARRIOS_CAPORUSSO.pdf

---

### Opportunity: Bulk MTR/CDF issuance for collectors serving many small waste generators ("one route, N compliant manifests")

**Industry:**
Waste collection and transport: health-care waste (RSS) collectors, industrial and hazardous-waste transporters, grease-trap and septic haulers, and small receiving/disposal sites.

**Buyer:**
The owner or operations manager of a small-to-mid collector with dozens to hundreds of small clients that generate waste (dental offices, clinics, vet clinics, auto shops, restaurants).

**Trigger / Why now:**
- [V] MTR waste-transport manifests have been mandatory nationally through SINIR since Portaria MMA 280/2020.
- [V] States may run their own systems if they connect to SINIR. References were found for SP (SIGOR), SC (IMA) and MS (IMASUL).
- [U] **No 2025–26 trigger was verified in this session.** Candidates to check:
  - states migrating to or away from SINIR;
  - changes to the waste-movement declaration (DMR);
  - verification of reverse-logistics credits under Decreto 11.413/2023.

**Current workflow:**
1. [V] Before each shipment, the waste generator must issue an MTR in SINIR or the state system. It requires:
   - the generator's company number (CNPJ) and responsible person;
   - waste type and class, and quantity in m³ and kg;
   - transporter details, planned date, driver and vehicle plate.
2. [U, inference] Small generators rarely do this themselves. The collector's office or the client's consultant logs into each client's account and issues the MTRs for the day's route.
3. [V] Transporters and receiving sites are registered parties in the system. [U] The receiving site accepts the MTR (weights may be corrected on receipt) and issues the destination certificate (CDF).
4. [U] Generators later file periodic waste-movement declarations (DMR) and keep the CDFs, so collectors resend CDFs and reports to every client.

**Pain:**
- [V] Documentation is mandatory for every shipment, the legal responsibility sits with the generator, and state and national systems run in parallel.
- [U] Still to confirm in interviews:
  - managing login credentials for hundreds of client accounts;
  - re-typing data for every pickup;
  - weight differences between pickup and receipt;
  - chasing CDFs.

**Existing solutions:**
- SINIR MTR web system [V] and, possibly, its integration API [U].
- State systems such as SIGOR-SP and IMA-SC [V].
- Brazilian waste-management SaaS, e.g., GreenPlat and Vertown [U, not re-verified].
- Route and fleet tools, and environmental consultants [U].

**The gap:**
[Hypothesis] No route-first tool that, for every stop on a route:
- issues the MTR in the right system (SINIR or state) on behalf of that generator;
- reconciles the weighed quantities;
- sends CDFs and monthly reports back to each client.

Unverified whether incumbents already do this for small collectors.

**Possible product:**
Collector-side SaaS: import the day's route (CSV or form), issue the MTRs per stop through the API or browser automation, close them with actual weights, collect the CDFs automatically, and send each generator a monthly compliance pack.

**MVP:**
SINIR only (no state systems) and health-care-waste collectors only. Batch MTR issuance from a spreadsheet route, a vault for client credentials, and a monthly PDF pack per client.

**Pricing hypothesis:**
R$300–900/month per collector depending on the number of active generators, or R$1–3 per MTR (about US$55–165/month) [estimate].

**How to find first customers:**
All [U]:
- State environmental-agency lists of licensed transporters and receiving sites.
- The SINIR registry of transporters, if it is public.
- Industry associations (e.g., ABETRE).
- Google Maps searches such as "coleta de resíduos de serviços de saúde".
- Municipal registrations for health-care-waste collection.

**Risks:**
- Incumbent SaaS probably already covers much of this.
- API access terms, and different state systems.
- Acting with clients' credentials, under LGPD (Brazil's data-protection law) and legal responsibility.
- No fresh regulatory trigger.

**Kill condition:**
- An existing tool already supports batch MTR issuance on behalf of many generators at a similar price.
- SINIR forbids third-party issuance or this kind of API use.

**Score:** 5/10 (provisional)

| Criterion | Score |
|---|---|
| Pain | 6 |
| Frequency | 9 |
| Mandatory nature | 9 |
| Fragmentation | 6 |
| Competition | Unverified; assumed 4 |
| Incumbent gap | 5 |
| Buyer access | 6 |
| Willingness to pay | 5 |
| MVP simplicity | 5 |
| Distribution | 5 |

Marked down further because no 2025–26 trigger was verified.

**Sources:**
- Portaria MMA 280/2020: https://cempre.org.br/wp-content/uploads/2020/12/7-PORTARIA-Nº-280-DE-29-DE-JUNHO-DE-2020-DOU-Imprensa-Nacional.pdf
- Econet guide to who must issue an MTR and what data it needs: https://blog.econeteditora.com.br/manifesto-de-transporte-de-residuos-mtr-obrigatoriedade-e-sistema-de-emissao
- SIGOR-SP MTR step-by-step (Taubaté): https://taubate.sp.gov.br/wp-content/uploads/2021/02/Passo-a-passo_MTR-Online_SIGOR.pdf
- IMA-SC ordinance: https://consultas.ima.sc.gov.br/portarias/pdf/2289 (content not reviewed)
- IMASUL-MS: https://www.imasul.ms.gov.br/?p=87004 (content not reviewed)
- Academic overview: https://sea.ufr.edu.br/index.php/SEA/article/download/1544/1611/4695 (content not reviewed)

---

### Opportunity: Multi-state API for sending agronomic prescriptions to state agencies, sold to agro software houses

**Industry:**
Pesticide retail (revendas de agrotóxicos), cooperatives, and the agro software houses that serve them.

**Buyer:**
The CTO or product owner at an agro ERP or software house, or the IT lead at a multi-state cooperative or retail chain with its own system.

**Trigger / Why now:**
[V] Each state agency runs its own channel:
- **Goiás (Agrodefesa)** requires every agronomic prescription to be sent within 7 days through a webservice. Its manual keeps being revised: v2.7.7 was uploaded in Nov 2025, and a v2.7.9 is also published.
- **Paraná (ADAPAR)** runs SIAGRO under Portaria ADAPAR 101/2018, with a 2024 manual.
- **Mato Grosso do Sul (SEMADESC)** held a technical meeting on creating its own system for pesticide sales and use. The date is not confirmed.

[U] Other states' systems, and any 2025–26 changes under the new pesticide law (Lei 14.785/2023), were not verified.

**Current workflow:**
1. The agronomist issues the prescription in an ERP, the state's tool or on paper. [V, partly]
2. The retailer's system sends each prescription or sale to the state agency. In Goiás this must happen within 7 days. [V]
3. Software houses build and maintain one integration per state. Where there is no API, staff re-type the data into state portals. [U]
4. Rejections and mismatches are handled manually. [U]

**Pain:**
- [V] Reporting is per sale, mandatory, deadline-bound and in state-specific formats whose specs keep changing.
- [U] The effort involved has not been quantified.

**Existing solutions:**
- Senior's GO UP ERP has a prescription module [V].
- ADAPAR's SIAGRO is free; Paraná says prescriptions can be issued "without any paid software" [V].
- Software houses integrate directly with Agrodefesa's webservice [V].
- Other agro ERPs (e.g., Siagri/Aliare) [U].

**The gap:**
[Hypothesis] There is no shared layer that takes one input and produces every state's format. Each ERP vendor re-implements each state's spec and every version change. In the invoice world, Brazilian software houses do buy such layers (invoice-API vendors) [U].

**Possible product:**
An API plus dashboard that:
- checks each prescription against the rules of its state;
- sends it to the state webservice, or uses browser automation where only a portal exists;
- tracks deadlines (such as Goiás's 7 days) and reports status back to the host ERP.

**MVP:**
Goiás and Paraná only: a REST API with schema validation and delivery/status tracking, priced per prescription sent.

**Pricing hypothesis:**
R$0.20–0.50 per prescription sent, or R$500–3,000/month per software house [estimate].

**How to find first customers:**
All [U]:
- Software houses already integrated with state agencies (the Agrodefesa webservice programme suggests a list of integrators exists).
- Agro ERP vendors at trade fairs such as Agrishow.
- Cooperatives, through the state units of OCB (the cooperatives organisation).

**Risks:**
- Small pool of buyers.
- ERP vendors prefer to build in-house.
- Free state tools.
- Some agencies have no API.

**Kill condition:**
- The leading agro ERPs already cover all major states and say maintaining the integrations is trivial.
- Fewer than 5 states offer a machine interface.

**Score:** 4.5/10 (provisional)

| Criterion | Score |
|---|---|
| Pain | 5 |
| Frequency | 9 |
| Mandatory nature | 9 |
| Fragmentation | 8 |
| Competition | 4 |
| Incumbent gap | 4 |
| Buyer access | 5 |
| Willingness to pay | 5 |
| MVP simplicity | 5 |
| Distribution | 4 |

Marked down further because the buyer pool is small.

**Sources:**
- Agrodefesa (GO) webservice manuals:
  - https://goias.gov.br/agrodefesa/wp-content/uploads/sites/49/2025/11/Manual-WebService-Receituario-Agronomico-2.7.7-1.pdf
  - https://goias.gov.br/agrodefesa/wp-content/uploads/sites/49/2014/11/Manual-WebService-Receituario-Agronomico-2.7.9-1.pdf
  - https://goias.gov.br/agrodefesa/wp-content/uploads/sites/49/2014/11/manualweb-9b7.pdf
- Paraná:
  - Portaria ADAPAR 101/2018: https://www.legisweb.com.br/legislacao/?id=359653
  - SIAGRO manual 2024: https://www.iat.pr.gov.br/sites/agua-terra/arquivos_restritos/files/documento/2024-03/manual_siagro_2024.pdf
  - ADAPAR: https://www.adapar.pr.gov.br/Noticia/ADAPAR-Participa-de-Eventos-Sobre-Uso-Correto-de-Agrotoxicos-e-Receituario-Agronomico
- MS SEMADESC meeting: https://www.semadesc.ms.gov.br/reuniao-tecnica-debate-criacao-de-sistema-de-comercializacao-e-uso-de-agrotoxicos
- Senior prescription module: https://documentacao.senior.com.br/goup/5.10.4/manuais_processos/receituario_agronomico/inicio.htm
- CONFEA (agronomists propose changes to the prescription): https://www.confea.org.br/node/111332

---

## 3. Rejected after competitor research

- **Agronomic-prescription app for agronomists and retailers (single state, end user).** [V]
  - Killed by Paraná's free SIAGRO (ADAPAR: "issue prescriptions without any paid software") and by ERP modules such as Senior GO UP's.
  - In Goiás, Agrodefesa already exposes a webservice that software houses integrate with directly.
  - Reframed as the B2B multi-state API (Opportunity 3).
- **SIPROQUIM filing tool for large chemical companies.**
  - The PF TXT import exists precisely so corporate systems can generate the file [V]. Large firms are therefore served by their ERP or IT team [U on actual adoption].
  - That is why Opportunity 1 targets SMEs only.

## 4. Attractive problem, poor distribution

- **Coordinating controlled chemicals across university and public labs** (PF maps, and possibly Army-controlled products [U]).
  - The recurring pain is evidenced: UNIR IN 9/2020, UFRJ IQ IT-5, UFV training [V].
  - But buyers are public institutions that buy through tenders (licitação), with small budgets.
- **EUDR due diligence for coffee, cocoa and cattle.** [U]
  - The data burden is real.
  - But buyers are exporters and cooperatives already served by enterprise vendors and a federal platform, and the EU timeline keeps slipping.
- **Cattle e-GTA permits plus the national individual bovine ID (PNIB).** [U]
  - State systems are fragmented.
  - But buyers are rural, the ear tags are hardware, and the rollout is long.

## 5. Too competitive (desk only, not re-verified this session)

- **2026 tax-reform invoice changes (CBS/IBS on NF-e, national NFS-e).** ERPs and invoice-API vendors (e.g., TecnoSpeed/PlugNotas, Focus NFe, NFE.io; Omie, Conta Azul, Bling, TOTVS). [U]
- **eSocial health-and-safety events and NR-1 psychosocial-risk programmes.** SST suites (e.g., SOC, RSData) plus consultancies. [U]
- **SNGPC for drugstores.** Already part of pharmacy ERPs (e.g., Trier, Vetor Farma, InovaFarma). [U]
- **"Crédito do Trabalhador" payroll-loan deductions.** Payroll suites (Domínio/Thomson Reuters, Alterdata, Questor, Fortes). [U]

## 6. Open verification items (for the next pass)

1. Search for existing SIPROQUIM map tools ("gerador de mapas SIPROQUIM", "software mapas Polícia Federal produtos químicos"). Check whether FórmulaCerta and other compounding-pharmacy systems export PF maps.
2. Find the number of PF licensees and the exemption thresholds in Portaria MJSP 204/2022, to size Opportunity 1.
3. Read the IN 338/2026 articles on the monthly maps: the zero-movement rule, deadlines, and the fine schedule by infraction.
4. Compare collector-side features and prices of waste-management SaaS (GreenPlat, Vertown, others). Confirm the terms of the SINIR MTR API.
5. List which states take prescriptions through a webservice and which only have a portal.
6. Screen the unscreened leads listed under section 1.
