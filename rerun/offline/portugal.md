# Portugal: offline quiet-industry screen (offline_v2)

Date of research: 2026-10-08. Market size: medium. Languages: Portuguese first, then English.

Scope note. The earlier general report (inputs/countries/portugal.md) already covered tourist tax, SIBA, TVDE, rent receipts, wine registers, e-GAR, PPP records for contractors, CATCH, livro de obra, SAF-T, energy communities and payroll. This pass screens other seed groups and licensing-register groups and does not repeat those leads.

Result in one line: two narrow, scoreable leads (F-gas records for certified HVAC-R service firms, and Legionella record-keeping), both 4-4.5/10. Neither is a strong build. Portugal remains a weak market for a solo founder.

## Quiet industries screened

| industry | obligation | evidence it's offline | rough count (with source) | verdict | one-line reason |
|---|---|---|---|---|---|
| HVAC-R service firms certified for fluorinated gases | Per-circuit equipment record (RAE), leak checks every 3/6/12 months by CO2e tier, intervention forms, annual SILiAmb form by 31 March (DL 145/2017; Reg. (EU) 2024/573) | APA offers the RAE as an Excel model; the intervention form is a paper form with copies (APA FAQ, 2021); annual form is typed into SILiAmb | 2,070 distinct SAC certificate numbers in the CERTIF list alone (PDF created 2026-10-06, counted by me); three other bodies (eiC, SGS, APCER) not counted | Opportunity (4.5) | No Portuguese F-gas-aware tool found; enforcement is thin |
| Legionella duty holders: hotels, care homes, clinics, gyms/spas, public-access buildings with hot-water networks or cooling towers | Maintenance and cleaning programme plus updated register of actions; plan, 5-year records, 3-yearly IPAC-accredited audits for cooling towers etc. (Lei 52/2018; Portaria 25/2021) | Consultancies sell plans and paper/Excel logs; no Portuguese software found; DGS register platform still "not yet operational" | Not found (no register of duty holders). Context only: 7,433 elderly-care social responses in 2024, all types (Carta Social 2024, via press) | Opportunity (4.0) | Large duty base, no local software, but buyer is diffuse |
| Used precious-metal buyers and jewellers ("compro ouro") | Daily register; weekly list to the Polícia Judiciária by post, fax or email; annual declaration by 31 Jan (Lei 98/2015, amended by DL 120/2017; ASAE FAQ via search summary, page fetch failed) | Paper or electronic register; submission by post/fax/email | Not found | Rejected | Ponto25 "Ourives" already has a used-gold module with PJ transaction reports |
| Scrap-metal dealers and waste operators handling non-precious metals | Daily register (paper or electronic) with seller ID, origin, payment; 5-year retention; CCTV 90 days; cash only below EUR 50 (Lei 54/2012, arts. 2-4) | Paper book is the baseline in the statute; no Portuguese tool found in one search | Not found (no public count located) | Near-miss (3) | Duty confirmed, but competitor check incomplete and count missing |
| Driving schools | Student/lesson records on an IMT-accessible application, updated within 2 working days (Portaria 185/2015, per search summary) | Already electronic | About 300 schools use AGE Online (vendor claim) | Rejected | AGE/AGE Online, Alsis ER-Sigestec and Gescola/Gesdriver already serve it |
| Plant nurseries (phytosanitary operators) | Register in DGAV's CERTIGES; keep plant-passport traceability records 3 years (DL 67/2020; Reg. (EU) 2016/2031, per search summary) | Official platform CERTIGES; passports printed with label vendors | Not found | Rejected | State platform plus label/printer vendors (Linx, Floralabels) |
| Small-scale fishing vessels (under 12 m) | Catch recording under Reg. (EU) 2023/2842; paper logbook stays until the electronic logbook is generalised for under-12 m | Paper logbook for small boats; about 90% of registered units are under 12 m (DGRM page via search summary) | Not found (total fleet not located) | Rejected | The State and the Commission supply the simplified app; no paying gap |
| Olive mills (lagares) | Monthly olive-oil survey to GPP (SIAZ) | Survey looks voluntary and sample-based | Not found | Rejected | No mandatory per-mill register found |
| Hunting zones (associative, municipal, tourist) | Annual exploitation results to ICNF before the new season; turtle-dove quota via the official RegROLA app (ANPC FAQ, via search summary) | Volunteer-run associations; no national harvest platform found | Not found | Rejected | Official app for the only recent trigger; very low willingness to pay (estimate) |
| Livestock and apiary keepers | Annual stock declarations (sheep/goats to IFAP; apiaries to DGAV) | Free government declarations (titles seen in search results only) | Not found | Not pursued | Free official forms; hobbyist buyers (estimate) |

Not screened for budget: households as employers (domestic workers), pawnbrokers, money changers, taxis and market traders, tattoo studios, childminders, armourers, cemeteries. No claim is made about them.

## Opportunities

### Opportunity: F-gas equipment records and leak-check scheduler for certified HVAC-R service firms

**Industry:**
Air-conditioning, refrigeration and heat-pump maintenance. Small certified service companies (many are "Unipessoal, Lda" in the CERTIF list) that look after shops, restaurants, hotels and clinics.

**Buyer:**
Owner or office manager of a certified HVAC-R maintenance firm that services many client sites under maintenance contracts. Secondary: equipment owners with several circuits.

**Trigger / Why now:**
Regulation (EU) 2024/573 replaced Regulation 517/2014. The CERTIF list shows firms moving to certificates under Implementing Regulation 2024/2215 (which replaces 2015/2067) and to decommissioning certification. Leak-check scope extends to vehicle and trailer refrigeration units from 12 March 2027 (search summary, unverified). An APA document from December 2025 says DL 145/2017 is under revision (unverified in full). No hard Portuguese deadline is new, so the "why now" is moderate.

**Current workflow:**
1. The technician visits a site and fills in a paper intervention form (APA FAQ, 2021: copies to the certification body, the owner and the technician).
2. The owner or firm keeps an Excel or paper RAE for each independent circuit and updates it at each intervention that touches fluorinated-gas parts.
3. Someone tracks leak-check due dates by CO2e tier (every 12 months for 5 to under 50 t; every 6 months for 50 to under 500 t; every 3 months from 500 t; doubled with a leak-detection system) in a diary or spreadsheet.
4. By 31 March the operator (the owner, or the service firm if the contract says so) enters last year's totals in the SILiAmb Gases Fluorados form, by equipment type and fluid.

**Pain:**
The leak-check interval is the most-missed duty found. In the IGAMAOT 2019 enforcement campaign, 6 of 17 units had infringements; the most frequent (2 units) was not respecting the leak-check interval, classed "grave". One unit had a "muito grave" infringement for missing buyer and seller records of gas sales. Late SILiAmb submission is a "contraordenação ambiental" under art. 23 DL 145/2017 (APA manual); the APA page calls late reporting "leve". Fine amounts were not found. The sample is small and old (17 units, 2019), so enforcement pressure is weak.

**Existing solutions:**
- Webcraft "Folha de Obra" (Leiria): Portuguese online HVAC service software with work orders, equipment records, technician mobile view and an optional preventive-maintenance module. Fetched. It does not mention gases fluorados, RAE, leak checks or SILiAmb. Price not shown.
- MSA Parasense refrigerant tracking and compliance platform: equipment register, refrigerant stock, automatic leak-check scheduling, F-gas reports. Vendor article fetched. It says nothing on Portuguese language or SILiAmb. Price not stated.
- APA's free RAE Excel model and CO2e converter.
- Consultancies and associations offering the annual SILiAmb communication as a service (titles seen in search results: Sinambi, SIA, Noctula, AmbiSolutions, Plusfroid; prices not found, pages not opened).
- Other UK-oriented F-gas logbook tools (Collabit, Field Ascend) and generic CMMS: not localised.

**The gap:**
No tool found that holds the per-circuit RAE, computes the leak-check interval from charge and GWP, produces the intervention form copies, and exports the SILiAmb annual totals in Portuguese. The gap may close if Webcraft adds fields.

**Possible product:**
A Portuguese mobile and web logbook for HVAC-R firms. It holds clients, sites and circuits with charge in kg and CO2e. It schedules leak checks, prints the intervention record and RAE, and exports the annual SILiAmb figures per client.

**MVP:**
Circuit register with a CO2e calculator, due-date reminders by SMS or email, an intervention record PDF with signature, and a CSV or table of annual totals by type and fluid. No integration with SILiAmb (none found).

**Pricing hypothesis:**
EUR 25-60 per month per firm depending on technicians and sites (estimate).

**How to find first customers:**
Outreach to the public certified-company lists of CERTIF, eiC, SGS and APCER (CERTIF's list was downloaded and has 2,070 certificate numbers). Trade fairs and association channels were not verified.

**Offline evidence:**
APA publishes the RAE as an Excel model and the intervention form as a paper form (older FAQ, 2021). The SILiAmb form is typed in by the operator. Only older sources were found; current practice is unverified.

**Offline channel:**
Outreach from the public lists of certified companies kept by the four certification bodies; phone follow-up. No association or fair channel confirmed.

**Market count:**
2,070 distinct SAC certificate numbers in the CERTIF "Serviços Certificados" list (source: https://www.certif.pt/pdf/lista_empresas_servicos_certificados.pdf, PDF created 2026-10-06; my count with grep). This covers one of four bodies, and the list may include lapsed or duplicate firms (unverified).

**Checks:**
- Competitor. Queries: (PT) "software gestão técnicos AVAC fugas gases fluorados registo equipamento RAE aplicação empresas certificadas manutenção"; (PT) "software assistência técnica AVAC refrigeração gestão de equipamentos clientes manutenção preventiva gases fluorados Portugal programa"; (EN) "F-gas leak check record software refrigeration HVAC service company Portugal Spain registro equipos gases fluorados software"; (service substitutes) "comunicação gases fluorados SILiAmb serviço consultoria preço detentor equipamento 31 de março coima não comunicar". Opened Webcraft and the MSA Parasense article. Result: no product does the core job in Portuguese; a general HVAC field-service product and an EU/UK tracking product exist. Kill condition not triggered.
- Duty. APA page (https://apambiente.pt/en/node/1205, fetched): operator keeps a RAE per independent circuit, updated at each intervention; leak checks by tier; report the previous year in SILiAmb by 31 March. APA SILiAmb manual v03 (fetched, text extracted): "Esta comunicação tem de ser efetuada de 1 de janeiro até ao dia 31 de março do ano seguinte ... as submissões que sejam efetuadas após esta data constituem uma contraordenação ambiental, tal como previsto no artigo 23.º"; operators are by default the equipment owners, or "dependendo das disposições contratuais ... o operador poderá ser a empresa prestadora de serviços". So the duty falls on the owner, and falls on the buyer only where the contract moves it. Fine amounts not found.
- Jurisdiction and currency. DL 145/2017 (Diário da República, 30 Nov 2017) and APA (apambiente.pt) are Portuguese. Reg. (EU) 2024/573 replaced 517/2014, but the APA page and manual still cite 517/2014 in places. APA says DL 145/2017 is under revision, so the text in force may change (unverified).

**Risks:**
- Weak enforcement: the campaign found only 17 units checked in 2019.
- Small firms may pay only for the annual filing, as a service, not for software.
- Webcraft or an EU vendor adds a Portuguese F-gas module.
- Spain has its own register (RD 115/2017), so a second market needs separate work.

**Kill condition:**
Ten firm interviews show that clients' RAE and leak-check dates are already handled in the firm's ERP or by the certification body, or that no firm will pay above EUR 20 per month. Another kill: Webcraft or another vendor ships RAE and leak-check scheduling.

**Willingness to pay:**
Software, but only if it saves admin time or helps sell compliance to clients. Today they pay consultancies for the filing as a service (unverified prices). Honest view: weak.

**Founder access:**
A non-local solo founder could sell this with a Portuguese interface and phone or email outreach to a public list. A local technician advisor would help.

**Score:** 4.5/10

**Sub-scores:** Pain 4, Frequency 6, Mandatory nature 7, Fragmentation 3, Existing competition 5, Incumbent gap 5, Buyer accessibility 8, Willingness to pay 3, MVP simplicity 8, Distribution 5. Average 5.4. The overall is below the average because enforcement is thin and willingness to pay is unproven.

**Sources:**
- https://apambiente.pt/en/node/1205
- https://apoiosiliamb.apambiente.pt/sites/default/files/documentos/Manual_GF_siliamb.pdf
- https://www.certif.pt/pdf/lista_empresas_servicos_certificados.pdf
- https://www.igamaot.gov.pt/wp-content/uploads/Relatorio_Tematico_Gases_Fluorados_03_08_vf-1.pdf
- https://webcraft.pt/software-assistencia-tecnica/avac-climatizacao
- https://awe.international/article/1939374/news
- https://diariodarepublica.pt/dr/detalhe/decreto-lei/145-2017-114288884 (seen in results, not opened)
- https://eur-lex.europa.eu/eli/reg/2024/573/oj?locale=pt (seen in results, not opened)
- https://apcmc.pt/noticias/gases-fluorados-com-efeito-de-estufa-2025-comunicacao-ate-31-de-marco/ (seen in results, not opened)

### Opportunity: Legionella record-keeping and audit pack for small duty holders and their service providers

**Industry:**
Hotels and guesthouses, care homes, clinics, gyms and spas, campsites, and other public-access buildings with hot-water networks, plus any site with cooling towers or evaporative condensers. Service side: water-treatment contractors, maintenance firms and consultancies.

**Buyer:**
Primary: the owner or maintenance manager of a small hotel, care home, clinic or gym (the "responsável"). Secondary: the water-treatment or maintenance firm that keeps the logs for many sites.

**Trigger / Why now:**
The statutory regime is already in force (Lei 52/2018, Portaria 25/2021, Despacho 1547/2022 per search results). The latent trigger is the DGS electronic register: the DGS page (fetched 2026-10-08, undated) still says the platform "ainda não se encontra em funcionamento". Once launched, existing equipment has six months from public announcement to register. Launch date unknown.

**Current workflow:**
1. A consultant or the in-house maintenance person writes a risk assessment and plan (Word or PDF).
2. A maintenance worker takes hot-water temperatures and does flushing and cleaning, recorded on paper or in Excel.
3. An accredited laboratory samples water periodically and sends a PDF analysis report.
4. If a risk threshold is hit, the responsible person must act and, for cooling towers and similar equipment, notify the local health authority within 48 hours using an annex form (Portaria 25/2021, annex II).
5. Records are archived at least five years for inspection.

**Pain:**
Fines in the original 2018 text (art. 19): EUR 500-4,000 for individuals and EUR 2,500-44,890 for companies for not keeping the plan, audits, risk procedure or registration; EUR 250-2,000 and EUR 1,500-20,000 for not running the maintenance and cleaning programme or not keeping records. Later amendments (Lei 40/2019, DL 9/2021, which moved fines to the economic-offences regime and gave ASAE the fining power) may have changed the amounts; not verified. Evidence of actual fines was not found. An IGAS inspection guide exists, but the fetch failed (503), so its content is unverified.

**Existing solutions:**
- Consultancies selling plans and sampling: ISQ, Medisigma, Apo Partner, SIPRP (seen in results, not opened).
- LegionellaDossier (UK vendor): digital logbooks, QR codes, scheduling, sensors. Landing page fetched; no mention of Portugal, Lei 52/2018, Portuguese language or price.
- Oxmaint and Quore: generic or US-oriented maintenance and hotel tools (search snippets only).
- Hardware with data logging (Danfoss, Caleffi, Testo), not record systems.
- The planned DGS register (a registry, not a working log).

**The gap:**
No Portuguese-language log was found that matches Portaria 25/2021 (critical-point monitoring of temperature, pH and disinfectant; updated register of all actions), ties in lab results, and prints the audit and 48-hour notification forms.

**Possible product:**
A simple web and phone app. Per site: inventory of points, scheduled temperature and flushing rounds, lab-result upload with threshold alerts, signed action log kept five years, and one-click PDF for inspectors and the annex II notification.

**MVP:**
Site and point inventory, daily and weekly checklist with technician signature, lab PDF upload with manual result entry, threshold alerts from Portaria 25/2021 annex I, and a five-year export.

**Pricing hypothesis:**
EUR 15-40 per site per month for operators, or EUR 60-150 per month for a maintenance firm managing many sites (estimate).

**How to find first customers:**
Accredited laboratories and water-treatment contractors that see the same sites every month (art. 7(2) requires lab tests by IPAC-accredited laboratories); outreach to small hotels using the national tourism establishment register (RNET, not fetched, unverified). Care homes through the Carta Social list (not fetched).

**Offline evidence:**
Providers sell "plan + registos" as services; training courses and checklists are paper or Word (consultancy pages and Viseu municipal plan seen in results). No Portuguese software found. The register platform is not live.

**Offline channel:**
Water-treatment contractors and accredited laboratories as resellers; small-hotel outreach from the tourism register. Association channel not confirmed.

**Market count:**
Not found. No register of duty holders exists because the DGS platform is not live. Context: 7,433 elderly-care social responses of all types in 2024 (Carta Social 2024, via press). Only a share are residential homes with hot-water networks.

**Checks:**
- Competitor. Queries: (PT) "software gestão plano prevenção controlo Legionella registos monitorização temperatura análises aplicação Portugal empresas manutenção"; (PT) "aplicação digital registos legionella app controlo temperaturas pontos de amostragem hotel lar ginásio plano PPCL ferramenta online"; (EN) "legionella water management compliance software logbook temperature monitoring hotels Portugal Spain app digital registos legionella". Opened LegionellaDossier. Result: foreign English-language tools and Portuguese consultancies; no Portuguese software found. Kill condition not triggered, but consultancies may bundle a log.
- Duty. Lei 52/2018 as published in DR 1.ª série n.º 159, 20 Aug 2018 (text read from a regional-government PDF copy). Art. 4: obligations fall on "qualquer pessoa singular ou coletiva ... proprietária ou titular de outro direito de gozo, desde que detenha o controlo" of the equipment, and hiring an external service "não isenta o responsável". Art. 3(3): responsible parties for building networks "devem elaborar e aplicar um programa de manutenção e limpeza ..., mantendo um registo atualizado das ações efetuadas". Art. 6(6): keep documents and records "durante um período mínimo de cinco anos". Art. 6(4)(b): the record carries the "assinatura do técnico responsável". Portaria 25/2021 (DR 1.ª série n.º 20, 29 Jan 2021) art. 3(5)-(7): programme "de acordo com a avaliação de risco", monitoring of "temperatura, do pH e do teor de desinfetante" at critical points, and "um registo atualizado de todas as ações realizadas". Exclusions in art. 2(3): residential-dominant, office-dominant and non-public buildings. The duty therefore falls on the operator, not on the service firm; the service firm buys as a way to serve operators.
- Jurisdiction and currency. Lei 52/2018 and Portaria 25/2021 are Portuguese (Diário da República). The Portaria says "na sua redação atual", confirming the law was amended. I read the 2018 original. Amendments (Lei 40/2019, DL 9/2021 per search results) not read, so fine amounts and article numbers may differ today.

**Risks:**
- Diffuse buyer; most duty holders buy a consultant's package.
- Register launch date unknown; value may not depend on it.
- Enforcement evidence not found.
- Consultancies or a hotel PMS bundle a log.
- Technical content (thresholds, sampling frequencies) must be kept in line with Portaria 25/2021 and Despacho 1547/2022.

**Kill condition:**
Ten operator or maintenance-firm interviews show that logs are already kept inside a consultancy portal or the building-management system, or nobody pays above EUR 10 per site per month.

**Willingness to pay:**
Operators pay consultancies for the plan and sampling (a done-for-you service). Whether they would pay for software alone is unverified; I expect weak.

**Founder access:**
Harder than the F-gas lead. A non-local founder would need a Portuguese regulatory adviser and a reseller (laboratory or water-treatment firm). Feasible, but slow.

**Score:** 4.0/10

**Sub-scores:** Pain 5, Frequency 8, Mandatory nature 8, Fragmentation 4, Existing competition 6, Incumbent gap 6, Buyer accessibility 3, Willingness to pay 3, MVP simplicity 7, Distribution 4. Average 5.4. The overall is 1.4 below the average because the buyer is diffuse and no count or enforcement evidence was found.

**Sources:**
- https://www.madeira.gov.pt//Portals/53/Documentos/DLSA/Lei52-2018.pdf (regional copy of the 2018 original; downloaded)
- https://www.madeira.gov.pt//Portals/53/Documentos/DLSA/Portaria%2025-2021.pdf (downloaded)
- https://www.dgs.pt/paginas-de-sistema/saude-de-a-a-z/legionella/plataforma-de-registo.aspx
- https://www.legionelladossier.com/landing/legionellacontrol
- https://edificioseenergia.pt/noticias/legionella-novaportaria-0202/ (seen in results, not opened)
- https://observador.pt/2023/08/22/legionela-medida-de-2019-nao-sera-implementada-antes-de-2025/ (seen in results, not opened)
- https://www.igas.min-saude.pt/wp-content/uploads/2023/02/IGAS_Guiao_para_a_Fiscalizacao_da_Prevencao_e_do_Controlo_da_Legionella.pdf (fetch failed)
- https://www.isq.pt/noticia/legionella-nova-lei/ (seen in results, not opened)

No third opportunity cleared the bar. Best near-miss below the line: scrap-metal dealers (Rejected section).

## Rejected

- **Used precious-metal buyers (Lei 98/2015, weekly list to the PJ).** Killed by Ponto25 "Ourives", whose used-goods module lists "Mapas de transações para a polícia judiciária", lot purchases, barcodes and stock (page fetched; it does not confirm the PJ-approved format). DL 120/2017 also simplified the register. The ASAE page fetch failed (503), so duty details come from search summaries. Sources: https://ourives.ponto25.pt/modulos-ourives, https://diariodarepublica.pt/dr/detalhe/lei/98-2015-70042475
- **Scrap-metal dealers (Lei 54/2012). Near-miss, 3/10, not scored higher because checks are incomplete.** Duty confirmed from the statute page (pgdlisboa, "versão actualizada", no amendments listed): art. 3 daily register "em suporte de papel ou informático", kept five years; art. 4 payments by cheque or transfer, cash only below EUR 50; art. 2 CCTV with 90-day retention; art. 10 classes missing records as "grave" and refers amounts to DL 178/2006 (not read). 2026 context: 685 vehicle-component thefts in H1 2026, up 18.72%, 178 catalytic-converter cases (Observador, 24 Jul 2026, fetched). A GNR plan to inspect scrap yards appeared only in a search snippet and the fetched article does not mention it. Competitor check: one Portuguese software query found no local product, but I did not run the second Portuguese and the English queries or check the e-GAR vendors from the earlier report. Operator count not found. Sources: https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=1795&tabela=leis&ficha=1&pagina=1, https://observador.pt/2026/07/24/gnr-alerta-para-subida-do-furto-de-catalisadores-no-primeiro-semestre-de-2026/
- **Driving-school records.** Killed by AGE / AGE Online (about 300 schools, webservice, vendor claim), Alsis ER-Sigestec and Gescola with the IMT-licensed Gesdriver device. Sources: https://ensinaraconduzir.pt/, https://www.alsis.pt/, http://www.gesdriver.com/
- **Plant-nursery plant-passport records.** DGAV's own CERTIGES platform handles registration; passport printing is served by Linx and Floralabels. Source: https://www.dgav.pt/plantas/conteudo/sanidade-vegetal/registo-fitossanitario/
- **Small-scale fishing logbook (under 12 m).** The State supplies the tools (DGRM Diário de Pesca Eletrónico for 12 m and over; the Commission builds a simplified app for smaller boats under Reg. 2023/2842). Source: https://www.dgrm.pt/diariodepescaeletronico
- **Olive-mill production reports.** The only recurring report found is a voluntary GPP survey (SIAZ). Source: https://www.gpp.pt/index.php/sistemas-de-informacao/sistema-de-informacao-do-azeite-e-azeitona-de-mesa
- **Hunting-zone results and harvest records.** No national harvest platform; the 2025/26 turtle-dove quota uses the official RegROLA app; buyers are volunteer associations. Source: https://www.icnf.pt/api/file/doc/0d9022824970350e (ICNF activity report, seen in results)
- **Livestock and apiary declarations.** Free official declarations; hobbyist buyers. Source: https://www.dgav.pt/destaques/noticias/declaracao-de-existencias-de-apiarios-2025/
- Extra ideas, not researched: household employers, taxi and market-trader registers, tattoo studios, childminders, armourers.

## Search log

WebSearch calls: 25. WebFetch calls: 16 (WebFetch failed for the ASAE FAQ (503), the IGAS Legionella guide (503) and dre.tretas.org (403); the DR consolidated-law page came back empty; one Webcraft call hit a redirect and was repeated; two PDFs came back as binary and I extracted them with pdftotext). I also downloaded three official PDFs with curl through the proxy (CERTIF certified-company list, Lei 52/2018 copy, Portaria 25/2021) and read them locally.

Competitor queries run (exact text):
- (PT) software compra ouro usado registo diário Polícia Judiciária envio semanal ourivesaria programa
- (PT) Lei 98/2015 registo diário metais preciosos usados PJ plataforma eletrónica envio relações compra ouro
- (PT) software gestão técnicos AVAC fugas gases fluorados registo equipamento RAE aplicação empresas certificadas manutenção
- (PT) software assistência técnica AVAC refrigeração gestão de equipamentos clientes manutenção preventiva gases fluorados Portugal programa
- (EN) F-gas leak check record software refrigeration HVAC service company Portugal Spain registro equipos gases fluorados software
- (PT, service substitute) comunicação gases fluorados SILiAmb serviço consultoria preço detentor equipamento 31 de março coima não comunicar
- (PT) software gestão plano prevenção controlo Legionella registos monitorização temperatura análises aplicação Portugal empresas manutenção
- (PT) aplicação digital registos legionella app controlo temperaturas pontos de amostragem hotel lar ginásio plano PPCL ferramenta online
- (EN) legionella water management compliance software logbook temperature monitoring hotels Portugal Spain app digital registos legionella
- (PT) software gestão sucata sucateiro balança registo diário entradas Lei 54/2012 programa parque de sucata
- (PT) escolas de condução IMT obrigações ficheiro alunos exames software gestão escola de condução plataforma
- (PT) viveiros passaporte fitossanitário operadores profissionais DGAV registo obrigatório plantas registos software viveirista

Other searches covered the statutes, platform status, fines, enforcement and counts (lagares, hunting zones, small-scale fishing, scrap-yard enforcement, F-gas Regulation 2024/573, Carta Social).

Query patterns that worked:
1. "<obligation> + <platform name> + <deadline>" in Portuguese (for example "gases fluorados SILiAmb 31 de março") reached the regulator's own manual and FAQ quickly.
2. "software <industry> <register name>" in Portuguese found the Portuguese vendor pages (Ponto25, AGE, Alsis, Webcraft); the English version mainly returned UK and US tools that do not mention Portugal.
3. Searching for the certification body's published company list (CERTIF) gave a countable register; statute copies on regional-government sites (madeira.gov.pt) opened when dre.pt and dre.tretas.org would not.
