# Portugal: research report

Deep pass (about 57 searches, no WebFetch). Evidence comes from search-result snippets of official sites (DGAV, DGRM, IVV, IMPIC, Diário da República, ERSE/E-REDES, gov.pt), trade press and vendor sites. Primary documents were not read in full, so anything marked "unverified" or "estimate" needs checking before interviews.

**Accessibility:** Portugal is accessible to a foreign solo founder. It is an EU member state with SEPA payment rails and no sanctions or data-localisation barriers. One structural barrier: invoicing and billing software must be certified by the tax authority (AT), which keeps newcomers out of anything that issues invoices.

**Bottom line:** Portugal has many 2026 regulatory triggers, but local vertical-SaaS vendors fill most of the gaps quickly. That includes tourist tax, TVDE fleets, rent receipts, e-GAR waste guides, wine registers and energy communities. No opportunity reaches the brief's "build" standard. The best leads are two narrow EU-driven niches, each scoring 4/10. One is electronic plant-protection-product records for spraying contractors and non-farm users. The other is CATCH catch-certificate data entry for seafood importers. Both are better treated as Iberian or EU products than as Portugal-only ones.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Agriculture: plant-protection product (PPP) application | Records must be machine-readable electronic from 1 Jan 2026 (EU Impl. Reg. 2023/564). Records made before 1 Jan 2027 can be converted after that date (Impl. Reg. 2025/2203). | Narrow lead (4/10) | Farm-side records are covered by Wisecrop, a free government Caderno de Campo Digital (CC+) and co-op templates. A gap may remain for **spraying contractors and non-agricultural users** (green spaces, golf, roads and rail). |
| Seafood importers and processors (bacalhau) | EU CATCH (TRACES NT) catch certificates and importer declarations, mandatory from 10 Jan 2026 | Narrow lead (4/10) | Real pain from manual entry of paper certificates. However, Norway, Iceland, the Faroes and Greenland (Portugal's main cod sources) are interoperable with CATCH, and iCustoms, TransGenie and brokers already serve the space. |
| Construction: livro de obra digital | Site logbook must be kept on the PEPU government platform for works started after 5 Jan 2026 | Weak (3/10) | Mandatory and new, but it lives inside a free government platform. Rollout is uneven and no third-party API was found. |
| Accountants: SAF-T (accounting) | Accounting SAF-T for 2027 periods, filed in 2028, pre-fills the IES | Weak (3/10) | Timing is confirmed but the obligation is annual. ERPs and the free AT validator will cover it. |
| Short-term rental: municipal tourist tax | Monthly declaration per unit to each municipality's portal (40+ municipalities by Jan 2025, more since) | Reject | Hostkit's "Agente TMT" already auto-submits through iTaxas (dozens of municipalities) and AI for closed portals. |
| Short-term rental: SIBA guest reporting, EU STR Reg. 2024/1028 (from 20 May 2026) | Report each foreign guest within 3 working days. Platforms must enforce registration numbers. | Reject | Chekin, Hostkit, GuestReady and Lodgify already automate it. |
| TVDE (ride-hailing) fleet operators | New Lei 59/2026 in force 1 Sep 2026: IMT data-sharing platform, 10 h per 24 h limit across apps, written driver contracts | Reject | 14,649 active operators, but at least 7 local fleet SaaS products (Frota360, Prisma Fleet, NexiaFleet, AutoTVDE, TVDEHub, SomaFleet, TVDEManager). The platforms carry most of the new duties. |
| Landlords and property managers: e-recibos de renda | Monthly electronic rent receipts on the Portal das Finanças. A third party can be authorised to issue them. | Reject | Gesar (sold through APEMIP), Rentila, RendaOK and RentPackage. |
| Real-estate agencies: IMPIC AML | Quarterly report of each transaction and of rents of EUR 2,500/month or more through the IMPIC portal (Reg. 276/2019, Lei 58/2020) | Reject | No new trigger. The form has been simplified. The eGO CRM includes the record book. |
| Wine producers and bottlers | IVV current-account registers (paper books still sold), DCP, stock declaration (DE) in SIvv, e-DA for excise | Reject | ENOGESTÃO/ENOCONTAS (IVV current accounts), Bacosoft (Isagri, integrated with CentralGest), AdegaGest. |
| Energy communities and collective self-consumption (EGAC) | Register with DGEG, send sharing coefficients to E-REDES, split benefits among members | Too competitive | Sinersol, Energy Ring, Cleanwatts (Kiome), Greenvolt Comunidades, Poupa Energia. These vendors often act as the EGAC themselves. |
| Waste: e-GAR / MIRR (SILiAmb) | Per-shipment e-GAR waste guide and annual MIRR | Reject (first pass, still holds) | SMARTGAR, Kortex eGar, MyEGAR (API), EasyGAR, TOP-eGAR. |
| Invoicing, ATCUD, SAF-T, B2G CIUS-PT | B2G structured e-invoices from SMEs required from 1 Jan 2027 (PDF accepted until 31 Dec 2026 per OE2026). Qualified signature also from 2027. | Reject | Certified vendors (Moloni, InvoiceXpress, Vendus, TOConline, Cegid, Sage) plus Saphety, Sovos and B2Brouter. |
| Payroll: Segurança Social new contributory model (DL 127/2025) | Employers validate or correct pre-calculated contributions by the 20th. Voluntary in 2026, mandatory from 1 Jan 2027. | Reject | It simplifies the work, and Primavera, Cegid, Sage and others adapt. |
| Accounting bureaus: e-fatura reconciliation and bookkeeping automation | Import AT e-fatura data and reconcile | Reject | TOConline, Sage, Primavera, PHC, Moloni and AutoEntry-type tools. |
| Immigration: labour-migration protocol ("via verde") | Employer gathers visa documents and emails them to DGACCP | Reject (buyer mismatch) | Only firms with 150+ staff and EUR 20M+ turnover, or large associations, may join. These are not indie buyers. |
| Veterinary: PEMV e-prescription | Mandatory DGAV prescription platform (v5, 2026 FAQ) | No gap found | Central government platform. Integration is an objective, so practice software or the platform itself covers it. |
| Lifts (ascensores) | Municipal inspections under DL 320/2002, maintenance by EMAs | Reject | Buyers are few and dominated by multinationals (Otis, Schindler, Kone, TK). No new trigger. Unverified detail. |
| Fire safety (SCIE) | Maintenance entities registered with ANEPC (Portaria 773/2009), inspections | Not viable | No 2025–2026 trigger found. |
| Funeral homes | Death registration, funeral subsidy, transfers | Not viable | No digital-mandate trigger found. Paperwork is mostly done in person at registry offices. |
| Pest control | Biocides, EN 16636, HACCP reporting to clients | Not screened in depth | Searches returned mostly Brazilian or generic results. |

## Opportunities

### Opportunity: Electronic PPP application records for spraying contractors and non-agricultural professional users

**Industry:**  
Agricultural spraying service providers. Green-space, golf-course and road/rail vegetation-control contractors. Municipal parks departments.

**Buyer:**  
Owner or technical lead of a contractor that applies plant-protection products for many clients or sites. Secondary buyer: the person responsible for the DGAV authorisation for urban, leisure and communication-route zones.

**Trigger / Why now:**  
EU Implementing Regulation 2023/564 requires professional users to keep PPP records in machine-readable electronic form from 1 Jan 2026, with paper records converted within 30 days. Implementing Regulation 2025/2203 lets Portugal accept conversion of pre-2027 records after 1 Jan 2027, so the effective crunch is January 2027. DGAV publishes separate record models for agricultural/forestry use and for non-agricultural use (Mod.08.01/DSMDS/2023).

**Current workflow:**  
1. The applicator sprays at a client's farm or a public or private site.
2. The applicator fills in a paper or Excel record (DGAV model): product authorisation number, dose, area, target, date, applicator card.
3. The contractor sends a copy to each client, which the farmer re-types into their own caderno de campo (Wisecrop, CC+, co-op sheet). For urban zones, it is kept to show DGAV or municipal inspectors, alongside the Art. 19 Lei 26/2013 authorisation.
4. From 2027 every record must exist in a machine-readable format, so contractors must digitise and keep their own copies.

**Pain:**  
The obligation is mandatory and per application. Paper is no longer compliant after the transition. A contractor serving dozens of farms produces the same record once for itself and once per client. Complaint evidence was not found. Pain is inferred from the rule and the conversion deadline (unverified).

**Existing solutions:**  
- Wisecrop: digital Caderno de Campo Único (PEPAC), farm-centric.
- Government Caderno de Campo Digital (CC+), free, farm-centric. Seen on a test-domain page, so production status is unverified.
- DGAV Excel/PDF models and CONFAGRI templates.
- Spanish and generic farm-management software (Agrivi and others). Field-service tools that are not PPP-aware.

**The gap:**  
All found tools are built around the farm holding, not the contractor. Nothing was found that lets a contractor record once in the field and push a compliant record to each client's notebook format (Wisecrop export, CC+ import, PDF/CSV). Nothing was found for non-agricultural users who need the urban-zone fields plus authorisation evidence. Absence of a competitor is unverified, since sector ERPs may cover it.

**Possible product:**  
A mobile-first spray log for contractors, pre-loaded with the DGAV authorised-product list. It produces the machine-readable record, a client copy and a per-site or per-authorisation audit pack.

**MVP:**  
A PWA with a product catalogue, a site/client list, an application form matching the DGAV models, CSV/XML export, and per-client PDF and CSV delivery by email.

**Pricing hypothesis:**  
EUR 19–49/month per contractor depending on number of applicators (estimate).

**How to find first customers:**  
- DGAV lists of authorised application companies and of urban-zone authorisations (existence unverified).
- Golf federation and club lists (Algarve).
- Municipal tenders for green-space maintenance on base.gov.pt (winners are public).
- APAP and landscaping associations (unverified).
- Agricultural co-ops and CONFAGRI.

**Risks:**  
- Wisecrop or the government CC+ adds a contractor mode.
- Glyphosate and urban-use restrictions keep shrinking non-farm spraying.
- The market is small in Portugal. An Iberian version is needed, and Spain has its own CUE digital notebook.

**Kill condition:**  
Ten contractor interviews show that clients simply accept a PDF and contractors keep Excel without inspection pressure. Another kill: CC+ or Wisecrop already offers multi-client contractor accounts.

**Score:** 4/10

**Sources:**  
- https://www.dgav.pt/destaques/noticias/produtos-fitofarmaceuticos-registos-relativos-a-sua-utilizacao-em-contexto-profissional/
- https://www.agroportal.pt/produtos-fitofarmaceuticos-registos-relativos-a-sua-utilizacao-em-contexto-profissional/
- https://www.confagri.pt/disponivel-o-modelo-de-registo-de-aplicacao-de-produtos-fitofarmaceuticos/
- https://www.cm-aguiardabeira.pt/files/DGAV_Modelo-de-registo-de-aplicacao-de-PF_002.pdf
- https://www.gpp.pt/images/PEPAC/Orientacoes_Tecnicas/OTE_2023_3_versao2_24052023.pdf
- https://lp.wisecrop.com/pt/caderno-de-campo-digital
- https://tst-agricultura.gov.pt/portal/w/caderno-de-campo-digital-cc-

### Opportunity: CATCH importer-declaration preparation for seafood importers (non-interoperable origins)

**Industry:**  
Seafood import and processing: salt-cod (bacalhau) processors, frozen-fish importers, and the customs brokers (despachantes) serving them.

**Buyer:**  
Import or compliance clerk at a seafood importer, or at a customs-brokerage firm that files on importers' behalf.

**Trigger / Why now:**  
The EU CATCH module in TRACES NT has been mandatory since 10 Jan 2026 for all importer declarations and catch certificates, with no transition. DGRM says there is no alternative procedure. Six months in, industry bodies (CLECAT, the German fish association whitepaper, SeafoodSource) report a heavy manual-entry burden. Many flag states still issue paper certificates that importers must re-key. The weight must now be reported in the original, pre-processing state.

**Current workflow:**  
1. The exporter sends a paper or PDF catch certificate, plus processing statements for third-country processing.
2. The importer's clerk re-keys the certificate data into CATCH, completes the importer declaration (box 11) and links it to the consignment.
3. The clerk reconciles weights against the invoice and customs declaration, and fixes rejections.
4. The clerk tracks partial uses of the certificate across several consignments.

**Pain:**  
Documented manual data entry and staffing strain (CLECAT position, Fischverband whitepaper). EU expert reports cite missing data standards and error codes. Cargo was held up: 16,000 t stranded, leading to an extended exemption for US fish. Penalties include blocked consignments.

**Existing solutions:**  
- iCustoms (document extraction and TRACES validation).
- TransGenie (CATCH guidance and tooling).
- infox and other back-office services that key data into TRACES.
- Customs brokers doing it manually.
- The TRACES NT API, which exists since late 2024, so integration is possible.
- Seafood-traceability suites (Trace Register, Mindsprint TruTrace).

**The gap:**  
For Portugal the gap is narrower than it first looks. Norway, Iceland, the Faroes and Greenland are interoperable with CATCH, and they supply most Portuguese cod. The remaining manual work comes from paper-issuing flag states and from processing chains in China and other third countries. That covers other species too: hake, octopus and squid from Morocco, Latin America and Asia (volume split unverified).

**Possible product:**  
Upload a paper or PDF catch certificate and processing statement. The tool extracts and validates fields against CATCH rules and pushes a draft to TRACES via the API. It also tracks how much of each certificate's balance has been used.

**MVP:**  
Extraction plus a validation checklist plus a CSV or clipboard-ready field map for CATCH, without API push. Sold first to 3–5 customs brokers.

**Pricing hypothesis:**  
EUR 5–15 per certificate processed, or EUR 150–400/month per brokerage (estimate).

**How to find first customers:**  
- AIB (Associação dos Industriais do Bacalhau; members are over 80% of Portuguese cod-processing output).
- ALIF (fish processors).
- The Câmara dos Despachantes Oficiais directory.
- DGRM CATCH information sessions.

**Risks:**  
- The Commission fixes CATCH usability or raises interoperability with more flag states.
- iCustoms or broker software adds it.
- The Portuguese base is small (dozens to low hundreds of importers, estimate), so this only works as an EU-wide product.

**Kill condition:**  
Portuguese importers report that over 80% of their certificates arrive electronically through interoperable flag states. Another kill: brokers say CATCH keying takes under 10 minutes per consignment.

**Score:** 4/10

**Sources:**  
- https://www.dgrm.pt/documents/20143/875286/INFORMA%C3%87%C3%95ES+UTEIS_CATCH_JAN2026.pdf/863662a5-6a04-b9f7-91e1-a1b3bbb05805
- https://www.dgrm.pt/documents/20143/875286/FAQs_CATCH_December2025.pdf/b716013c-eec0-0436-f368-95f8b943ebde
- https://www.clecat.org/positions/customs/clecat-position-on-the-mandatory-implementation-of
- https://www.fischverband.de/download/grundsatzpapier-catch-in-practice-bridging-regulatory-intent-and-operational-reality-under-regulation-eu-2023-2842
- https://www.seafoodsource.com/news/seafood-industry-iuu-campaigners-declare-eu-s-catch-system-a-letdown-six-months-in
- https://www.customswise.ie/post/guide-eu-catch-catch-certificates
- https://island.is/en/o/directorate-of-fisheries/news/new-catch-certificate-system
- https://www.icustoms.ai/blogs/traces-classic-vs-traces-nt/
- https://www.transgenie.io/eu-catch-system-explained

### Opportunity: Livro de obra digital companion for site directors (speculative)

**Industry:**  
Construction: small builders and independent engineers acting as site director (diretor de obra) or site supervisor (diretor de fiscalização).

**Buyer:**  
Small general contractor (alvará holder), or an engineer who signs the logbook for several small works.

**Trigger / Why now:**  
Under the Simplex Urbanístico (DL 10/2024) and Portaria 71-C/2024, the site logbook must be kept electronically on PEPU for works started after 5 Jan 2026, and paper is no longer allowed. Portaria 336/2026/1 (13 Aug 2026) adjusted the supervisor's role. From 1 Oct 2026, false entries are treated as document forgery.

**Current workflow:**  
1. The site director keeps notes in a phone, WhatsApp or a paper diary.
2. The director re-types relevant facts into PEPU, where the municipality has it operational.
3. The director keeps photos and evidence separately.
4. Where PEPU is not working locally, the director runs paper or ad-hoc processes in parallel.

**Pain:**  
Forum posts and consultants report confusion and "silence" about the platform. Municipalities move at different speeds and procedures run in parallel. Complaint evidence is thin.

**Existing solutions:**  
- PEPU itself (free).
- Generic site-diary apps (PlanRadar, Fieldwire, Procore, Brazilian RDO apps).
- WhatsApp and Excel.

**The gap:**  
Capture in the field once (photos, weather, workforce, inspections), then produce PEPU-ready entries and a legally defensible evidence archive. No PEPU API for private software was found, so integration would be copy-assist only (unverified).

**Possible product:**  
A mobile site diary that drafts PEPU entries in the legally required categories and archives signed evidence.

**MVP:**  
A daily log template mapped to the Portaria entry types, with a photo and evidence bundle and clipboard export.

**Pricing hypothesis:**  
EUR 15–30/month per engineer (estimate).

**How to find first customers:**  
- IMPIC licensed-contractor (alvará) register.
- Ordem dos Engenheiros and OET members.
- AICCOPN and AECOPS associations.

**Risks:**  
- PEPU improves its own UX.
- No API exists.
- Generic site-diary apps localise.
- Low willingness to pay for small works.

**Kill condition:**  
PEPU's logbook proves usable on mobile, or engineers say entries are infrequent (a few per work).

**Score:** 3/10

**Sources:**  
- https://diariodarepublica.pt/dr/detalhe/portaria/71-c-2024-853867973
- https://www.4paredes.info/livro-de-obra-o-que-e-quem-preenche-e-o-que-muda-em-2026/
- https://forumdacasa.com/discussion/104998/livro-de-obra-digital/
- https://www.seibysusana.com/pepu-estava-previsto-era-obrigatorio-e-agora/
- https://anmp.pt/file-viewer/?pstid=60476
- https://www.lexpoint.pt/conteudos/995/125767/noticias/alterado-livro-de-obra-eletronico

### Opportunity: Accounting SAF-T (PT) readiness checker for small accounting bureaus (speculative, carried over)

**Industry:**  
Accounting: certified accountants (OCC members).

**Buyer:**  
Small accounting practices (gabinetes de contabilidade) serving micro-SMEs.

**Trigger / Why now:**  
The accounting SAF-T is required for periods from 2027, delivered in 2028. The OE2026 postponement is confirmed by vendor sources (InvoiceXpress, Edicom). The AT already pre-fills IES sections from the accounting SAF-T. Portaria 31/2019 governs it. The file must also be produced on demand in tax inspections.

**Current workflow:**  
1. Export the SAF-T from accounting software.
2. Validate it in the free AT validator.
3. Fix chart-of-accounts and taxonomy mismatches and re-export.
4. Reconcile with the IES and Modelo 22.

**Pain:**  
Plausible, since errors affect IES pre-filling, but no complaint evidence was found.

**Existing solutions:**  
- Accounting ERPs (Primavera/Cegid, Sage, PHC, Artsoft, TOConline).
- The free AT validator.
- Consultants.

**The gap:**  
An independent cross-ERP validator and exception fixer. There is no evidence that this is unsolved.

**Possible product:**  
A SAF-T file linter and reconciliation tool that works across ERPs.

**MVP:**  
Upload a SAF-T file, check it against the AT schema and business rules, and get an error report.

**Pricing hypothesis:**  
EUR 20–50/month per bureau (estimate).

**How to find first customers:**  
OCC member directory, OCC training sessions, accounting forums.

**Risks:**  
- Annual cadence.
- The AT validator is free.
- ERP vendors will build this in.
- The deadline is not until 2028.

**Kill condition:**  
Interviews show the ERPs and the AT validator already catch the errors.

**Score:** 3/10

**Sources:**  
- https://edicomgroup.com/pt/blog/declaracao-saft-portugal
- https://invoicexpress.com/tags/saf-t-contabilidade/
- https://marclant.pt/blog/ies-2025-prazo-julho-2026-saft-coimas
- https://www.occ.pt/sites/default/files/public/2026-03/Essencial_IES2026-DIG.pdf

## Rejected after competitor research

- **Municipal tourist-tax router for alojamento local:** killed by Hostkit. Its "Agente TMT" auto-submits declarations through iTaxas (a platform with protocols with dozens of municipalities) and uses AI for closed municipal portals. Funchal (XML) and Almada (new 2026 platform) are also standardising. Sources: https://hostkit.pt/suporte/knowledgebase.php?article=115, https://eco.sapo.pt/2026/06/02/almada-lanca-plataforma-eletronica-para-a-taxa-municipal-turistica/, https://funchal.pt/?p=36589, https://rr.pt/noticia/pais/2025/01/01/taxa-turistica-ja-e-cobrada-em-pelo-menos-40-municipios-portugueses/407974/
- **SIBA guest reporting and EU STR Regulation 2024/1028:** killed by Chekin, Hostkit, GuestReady and Lodgify. Sources: https://chekin.com/pt/blog/siba-aima-alojamento-local/, https://www.guestready.com/pt/blog/siba-comunicacao-boletim-sef-aima/
- **TVDE operator compliance after Lei 59/2026:** killed by Frota360, Prisma Fleet, NexiaFleet, AutoTVDE, TVDEHub, SomaFleet and TVDEManager. The new verification duties fall mainly on the platforms (Uber, Bolt) through the IMT data-sharing platform. Sources: https://diariodarepublica.pt/dr/detalhe/lei/59-2026-1161801432, https://crncontabilidade.pt/blog/nova-lei-tvde-portugal-o-que-muda-a-partir-de-1-de-setembro-para-motoristas-veiculos-taxis-e-plataformas/, https://observador.pt/2026/04/07/plataforma-dos-tvde-regista-num-ano-mais-motoristas-e-menos-inconformidades/, https://frota360.pt/, https://www.autotvde.pt/
- **Bulk electronic rent receipts for property managers:** killed by Gesar (distributed through APEMIP), Rentila, RendaOK and RentPackage. Sources: https://webteam.pt/gesar-software-gestao-de-arrendamento/, https://www.rentila.pt/, https://rendaok.com/blog/como-emitir-recibo-renda-portal-financas
- **Wine cellar registers, IVV current accounts and declarations:** killed by ENOGESTÃO (ENOCONTAS module for IVV current accounts), Bacosoft (Isagri, integrated with CentralGest) and AdegaGest. Sources: https://agrogestao.com/home/software/gama-agro-industrial/enogestao-solucao-de-gestao-de-adegas/, https://www.isagri.pt/bacosoft-software-para-vinicultura, https://barcelbal.com/produtos/adegagest/, https://www.ivv.gov.pt/np4/688/
- **Real-estate AML and IMPIC quarterly reporting:** no new trigger. The IMPIC form has been simplified and is filed through the IMPIC reserved area, and the eGO CRM includes the record book. The EU AMLR (from July 2027) may revive this. Sources: https://www.idealista.pt/news/node/61389, https://imojuris.vidaimobiliaria.com/actualidade/noticias/Reporte-de-transacoes-imobiliarias-ao-IMPIC-I-P-pa/, https://www.egorealestate.pt/
- **e-GAR waste-guide issuing and MIRR:** killed by SMARTGAR, Kortex eGar, MyEGAR (API), EasyGAR and TOP-eGAR. Source: https://apoiosiliamb.apambiente.pt/temas/e-gar
- **Transport-document communication to AT:** built into the certified invoicing packages Vendus, TOConline, InvoiceXpress and GesFaturação. Source: https://www.vendus.pt/blog/questoes-frequentes-guias-transporte/
- **ATCUD, SAF-T and B2G CIUS-PT (SMEs from 2027):** killed by the certified invoicing vendors plus Saphety, Sovos and B2Brouter. Sources: https://sovos.com/pt/blog/iva/portugal-faturacao-eletronica-b2g/, https://invoicexpress.com/blog/regras-faturacao-contabilidade-2026/
- **Payroll adaptation to the new Segurança Social contributory model (DL 127/2025):** killed by Primavera, Cegid and Sage. The change also reduces work. It is voluntary in 2026 and mandatory in 2027. Source: https://pt.primaverabss.com/pt/blog/novo-modelo-comunicacao-remuneracoes-seguranca-social/
- **Labour-migration protocol paperwork:** rejected on buyer fit, since only firms with 150+ staff and EUR 20M+ turnover qualify. Source: https://www.cuatrecasas.com/pt/portugal/laboral-1/art/protocolo-de-cooperacao-para-a-migracao-laboral-regulada-1

## Attractive problem, poor distribution

- **CATCH manual entry (Portugal-only view):** the pain is real, but the buyer base in Portugal is small, and the main cod origins are already interoperable. It is viable only as an EU-wide product sold through customs-broker networks.
- **Non-agricultural PPP users:** municipal and public users are reached mainly through procurement, while private green-space contractors are fragmented and hard to list.

## Too competitive

- Energy communities and collective self-consumption (EGAC) management: Sinersol, Energy Ring, Cleanwatts/Kiome, Greenvolt Comunidades, Poupa Energia. Sources: https://www.sinersol.pt/empresas-autoconsumo-coletivo, https://www.energyring.pt/pt/, https://www.jornaldenegocios.pt/empresas/energia/detalhe/comunidades-de-energia-cleanwatts-lanca-nova-ferramenta-que-facilita-adesao
- TVDE fleet management (7+ local SaaS products).
- Alojamento local compliance (tourist tax, SIBA, INE statistics): Hostkit, Chekin.
- Certified invoicing and e-invoicing; e-GAR; payroll; accounting automation.

## Pass history

- **First pass:** 6 searches. It found no qualifying opportunity, and its only candidate was the accounting SAF-T checker (3/10).
- **Deep pass (this file, 2026-10-05):** about 57 searches, mostly in Portuguese.
  - Industries newly screened: agriculture PPP records, seafood CATCH, construction logbook (PEPU), municipal tourist tax, SIBA and the EU STR regulation, TVDE (new Lei 59/2026), rent receipts, real-estate AML (IMPIC), wine (IVV), energy communities, immigration protocol, veterinary PEMV, lifts, fire safety and funeral homes.
  - Claims verified: the accounting SAF-T timing (periods from 2027, filed in 2028) and the B2G e-invoicing dates (SMEs from 2027, with PDF accepted through 2026).
  - Claim corrected: the payroll change is voluntary in 2026 and mandatory in 2027.
  - New 4/10 leads: PPP contractor records and CATCH.
  - Reasons for rejection documented with named competitors: Hostkit (tourist tax), the TVDE fleet vendors, Gesar, ENOGESTÃO and the energy-community platforms.
  - Overall verdict unchanged: Portugal has no build-ready opportunity, and the two best leads are better treated as Iberian or EU products.
