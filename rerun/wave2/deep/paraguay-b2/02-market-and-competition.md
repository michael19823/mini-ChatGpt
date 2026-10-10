# Paraguay SEPRELAD compliance pack: market size, buyers and competition (deep dive 02)

Date: 10 Oct 2026. Builds on [the B2 report](../reports/paraguay-b2.md). Scope: market size, buyers, competition, channels and regional expansion. Law, product, go-to-market and payments are covered in the other section files.

## Summary

- **Hard buyer counts, from SEPRELAD's own downloads.** I exported SEPRELAD's public register (9,795 obligated subjects) and its statistics portal on 10 Oct 2026 and counted the rows myself ([register lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); [statistics portal](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml)).
  - **Real estate:** 2,233 registered (79% companies), **1,451 paid the 2025 canon**. 71% are in Asunción or Central.
  - **Car dealers:** 1,719 registered (62% individuals), **845 paid in 2025**.
  - **Others in the same regime:** 189 jewellers, 31 pawn shops, 45 virtual-asset firms, 35 remitters, 6 art dealers, 8 cash or safe-deposit firms. Non-profits (3,435) and notaries (1,406) are large but use other rulebooks.
  - **Working market: about 2,300 paying real-estate and car-dealer firms, plus about 190 small others.**
- **The compliance gap is measurable.** In 2025 only 492 real-estate firms and 160 car dealers sent the external audit report (about 1 in 3 and 1 in 5 payers). In 2024 SEPRELAD sent 1,238 + 456 warning letters, but issued just one fine in 2025 (statistics portal).
- **Channel: 182 registered AML auditors, about 140 practices** (Big Four, mid-tier firms and about 90 individuals). Each must review every compliant client every year (my count of the auditor export).
- **Buyers are small and price-anchored low.** The state canon is about Gs 330,000 (US$45) a year. SEPRELAD courses sell for Gs 150,000-800,000 (US$20-110). The trade body says there are only 300-400 "real" agencies with about 4,000 agents; the rest of the register is developers, lot sellers, investment companies and individuals ([Infonegocios, Aug 2026](https://infonegocios.com.py/infomicasa/mercado-del-corretaje-inmobiliario-cambia-de-ritmo-redes-sociales-ia-e-inversion-extranjera-reconfiguran-el-negocio)).
- **Competition is partial.** Free SIRO files reports only, and from 2025 bulk RO upload needs a JSON file small firms cannot make ([SEPRELAD, Aug 2025](https://www.seprelad.gov.py/?p=3156)).
  - **New finding:** Uruguay's Devsys Cumplo360 already serves a Paraguayan real-estate firm (Fortaleza Inmuebles), Grupo Condor and the Asunción stock exchange. It covers screening, KYC files and risk scoring, but not SEPRELAD filings. Its price is not public ([Devsys](https://www.devsys.com.uy/clientes.html)).
  - Pirani has a free tier, and HADA starts at US$10. No Paraguayan product runs the full SEPRELAD file.
- **Positioning:** "your SEPRELAD file, always audit-ready", sold first through auditors to the about 650 firms that already buy an audit. Suggested price: about US$25-35 a month, a US$10 basic plan, and US$100-150 a month for practices. A realistic year-3 range is about US$90k-180k (my estimate).
- **Regional:** Ecuador is the best second market: 4,446 real-estate and construction firms, 542 car dealers, US$ fines and RUC-linked enforcement ([UAFE 2025 report](https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf)). Uruguay is crowded. Bolivia covers only large taxpayers.

## Buyer segments

**How I counted.** SEPRELAD publishes two public tools. I downloaded their Excel exports on 10 Oct 2026 and counted the rows myself.
- The register lookup lists every obligated subject on the SEPRELAD register, with RUC (tax ID), name, sector, date of registration and department. It held **9,795 rows** ([SEPRELAD lookup of obligated subjects and external auditors](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml), option "Sujetos obligados", export "SujetosObligados.xls"). SEPRELAD's footnote says a row is not proof of compliance.
- The statistics portal gives, per year and sector, new registrations, canon (annual fee) payers, reports received, audit reports received and sanctions ([SEPRELAD statistics portal](https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml)).
- RUC numbers that start with "80" belong to companies. Other RUCs are individuals (sole traders). I used this to split firms from individuals.

| Segment | Count | Source | Year | Confidence |
|---|---|---|---|---|
| **Real estate (inmobiliarias, brokers, developers) on the SEPRELAD register** | **2,233** (1,759 companies, 474 individuals) | my count of the register export | Oct 2026 | high for "registered"; the register keeps some inactive firms |
| Real estate firms paying the annual canon | 1,181 (2023), 1,428 (2024), **1,451 (2025)**, 1,039 (2026 to early Oct) | statistics portal, "Aranceles" | 2023-2026 | high. Best count of active, paying firms. |
| Real estate: where they are | Capital (Asunción) 1,171 (52%), Central 424 (19%), Alto Paraná 244 (11%), Itapúa 109 (5%), rest 285 | my count of the register export | Oct 2026 | high |
| Real estate: new registrations a year | 835 (2022, SIRO re-registration year), 444 (2023), 346 (2024), 323 (2025), 227 (2026 to date) | my count of the register export (by registration date) | 2022-2026 | high |
| Real estate: what kind of firm (by name) | 283 names say agency/brokerage (13%), 309 developer/construction/investment (14%), 40 lots/urbanisation (2%), 1,136 other company names (51%), 465 individuals (21%). Legal forms: 1,244 S.A., 313 E.A.S. (simplified company), 117 S.R.L. | my keyword count of the register export | Oct 2026 | low-medium (names are a rough guide) |
| Real-estate agencies in the trade's own estimate | 300-400 agencies with about 4,000 agents; "no official statistics" | ACIP president Daniel Ortiz in [Infonegocios, Aug 2026](https://infonegocios.com.py/infomicasa/mercado-del-corretaje-inmobiliario-cambia-de-ritmo-redes-sociales-ia-e-inversion-extranjera-reconfiguran-el-negocio) | 2026 | low (an estimate) |
| Taxpayers with brokerage as main / secondary activity (CIIU 68201) | 915 / 2,192 (of 38,768 taxpayers with any real-estate activity, mostly landlords) | [SEPRELAD real-estate risk guide, 2021](https://www.seprelad.gov.py/userfiles/files/Guia_de_Riesgos_LA_FT_Sector_Inmobiliario.pdf), from tax-office data 2017-2019 | 2019 | medium (old) |
| **Car dealers (importación, compra y venta de vehículos automotores) on the register** | **1,719** (653 companies, 1,066 individuals) | my count of the register export | Oct 2026 | high |
| Car dealers paying the canon | 782 (2023), 838 (2024), **845 (2025)**, 658 (2026 to date) | statistics portal | 2023-2026 | high |
| Car dealers: where they are | Central 527 (31%), Alto Paraná 365 (21%), Capital 320 (19%), Caaguazú 168 (10%), Itapúa 118 (7%) | my count of the register export | Oct 2026 | high |
| Non-profits (OSFL) on the register | 3,435 | my count of the register export | Oct 2026 | high |
| Non-profits paying the canon | 1,898 (2024), 1,919 (2025), 1,255 (2026 to date) | statistics portal | 2024-2026 | high |
| Jewellers and precious-metal dealers | 189 registered; 108 canon payers (2025) | register export; statistics portal | 2025-2026 | high |
| Pawn shops (casas de empeño) | 31 registered; 23 canon payers (2025) | same | 2025-2026 | high |
| Art, antiques, stamps and coins dealers | 6 registered | register export | Oct 2026 | high |
| Cash-in-transit and safe-deposit firms | 6 + 2 registered | register export | Oct 2026 | high |
| Virtual-asset providers | 45 registered; 29 canon payers (2025) | same | 2025-2026 | high |
| Remitters (remesadoras) | 35 registered; 24 canon payers (2025) | same | 2025-2026 | high |
| **Subtotal: SEPRELAD-supervised commercial subjects (real estate, cars, jewels, pawn, art, cash, VASP, remitters)** | **4,266 registered; about 2,490 canon payers (2025)** | sum of the rows above | 2025-2026 | high |
| Adjacent: notaries (escribanos), supervised by the Supreme Court but filing in SIRO | 1,406 registered; 1,144 canon payers (2025) | register export; statistics portal; supervisor per [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf) | 2025-2026 | high. A different rulebook and supervisor. |
| Adjacent: casas de crédito (non-bank lenders) | 155 registered; 122 canon payers (2025) | same | 2025-2026 | high count; supervisor and rulebook (unverified) |
| **Channel: SEPRELAD-registered external AML auditors** | **182 valid registrations**: 92 individuals with no firm named, plus 90 auditors attached to 49 firms (including PwC, EY, Deloitte, BDO, Grant Thornton, Baker Tilly, Amaral). About **140 distinct practices**. | my count of the auditor export ("AuditoresExternos.xls") from the same lookup | Oct 2026 | high |

**Compliance gap, real estate and car dealers** (statistics portal, "Cumplimiento" and "Sanciones"; 2025 unless stated)

| Measure | Real estate | Car dealers | Source |
|---|---|---|---|
| Registered (Oct 2026) | 2,233 | 1,719 | register export |
| Paid the 2025 canon | 1,451 (65% of today's register; 72% leaving out 2026 registrants) | 845 (49%; 55% leaving out 2026 registrants) | statistics portal; register export |
| Negative reports filed (quarterly duty) | 7,474 (about 1,870 a quarter) | 2,490 | statistics portal |
| Operation reports (RO) filed | 3,385 | 2,147 | statistics portal |
| External audit reports received | 589 (2024), **492 (2025)**: about 1 in 3 payers | 177 (2024), 160 (2025): about 1 in 5 payers | statistics portal |
| Internal control reports received | 790 (2024), 683 (2025) | 287 (2024), 272 (2025) | statistics portal |
| Annual Form (Formulario Anual) sent in 2024 | 526 | 357 | [SEPRELAD Memoria 2024, p. "Formulario Anual"](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf) |
| Warning notes (notas de apercibimiento) | 1,238 (2024) | 456 (2024; 4 later revoked) | statistics portal; Memoria 2024 |
| Fines | 0 | 1 (2025, under court appeal) | statistics portal |

Reading the table:
- About two-thirds of active real-estate firms do not send the external audit report. About 80% of car dealers do not. This is the clearest sign of a gap between the rule and practice.
- Enforcement is by mass warning letter, driven by SIRO data. SEPRELAD says it checked 2,043 subjects in 2024 for missing negative reports, ROs, the Annual Form, the external audit report and the internal control report ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).
- The register adds 300-450 real-estate firms a year. Every new firm must register in SIRO, and 532 of 2,042 registration requests were annulled in 2024 for not meeting SIRO's requirements (same source).


## Buyer profile and pain

**Who the buyers are**
- **Real estate is mostly small companies in Asunción and Central.** Of 2,233 registered real-estate subjects, 79% are companies and 21% individuals; 71% sit in Asunción or Central (my count of the [SEPRELAD register export](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml)). The register mixes agencies, brokers, developers and lot sellers (loteadoras).
- **The brokers' association is small.** ACIP groups about 90 agencies and more than 1,000 agents ([Infonegocios, Aug 2025](https://infonegocios.com.py/default/mercado-inmobiliario-en-transformacion-acip-impulsa-ley-de-corretaje-y-modernizacion-digital-en-el-sector)). Most of the 2,233 are outside it.
- **Agents live on commission.** SEPRELAD's own sector study says most agents earn no salary and are paid commissions of 5-6% ([SEPRELAD real-estate risk guide, 2021](https://www.seprelad.gov.py/userfiles/files/Guia_de_Riesgos_LA_FT_Sector_Inmobiliario.pdf)).
- **Many more firms could be caught.** The tax office counted 38,768 active taxpayers with a real-estate activity in 2017-2019. Of these, 915 had "intermediation in buying, selling and renting property" (CIIU 68201) as their main activity and 2,192 as a secondary one (same guide). Most of the 38,768 are landlords, who are not obliged. But the broker codes alone (about 3,100) exceed the 2,233 on the SEPRELAD register, so some obliged firms are not registered (my inference).
- **Car dealers are smaller and more often individuals.** Of 1,719 registered dealers, 62% are individuals. They cluster in Central, Alto Paraná (Ciudad del Este) and Caaguazú (my count). In November 2019 SEPRELAD counted 1,142 used-car lots ("playas"), said under half filed reports, and had warned 704. The used-car importers' centre CIVU then had only 110 member lots ([Última Hora, 2 Nov 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685)). The same article names Civemup as a second used-car association. New-car distributors (more than 90 brands) sit in CADAM ([Ferrere on Res 196/2020](https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/)).

**How they comply today**
- **Filing in SIRO by hand.** Small firms key ROs into SIRO one operation at a time. Bulk upload needs a JSON file and a formal request by e-mail. Once JSON is switched on, the one-by-one form is no longer available ([SEPRELAD notice, 22 Aug 2025](https://www.seprelad.gov.py/?p=3156)). RO windows are 11-20 January, April, July and October ([Res 003/2025 notice](https://www.seprelad.gov.py/?p=1528)).
- **New SIRO demands keep coming.** From 5 Oct 2026 every real-estate user must complete a data-update form before SIRO lets them continue ([SEPRELAD notice, 2 Oct 2026](https://www.seprelad.gov.py/?p=4412)).
- **Documents from consultants or courses.** Freelancers sell one-off packs (manual, risk management, client forms, training plan) ([Clasipar ad, 2021](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578)). Accounting-training sites sell SEPRELAD courses to accountants ([Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/)).
- **Audit firms sell the yearly "Informe de Cumplimiento SEPRELAD".** Mid-size firms such as Cáceres & Schneider market it directly to real-estate firms ([Cáceres & Schneider](https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/)). There are about 140 registered audit practices (my count).
- **A few larger firms use real software.** Fortaleza Inmuebles uses Devsys Cumplo360 for list checks ([Devsys clients](https://www.devsys.com.uy/clientes.html)).
- **Free help from SEPRELAD.** About 100 real-estate compliance staff joined a virtual session on the Annual Form on 8 Apr 2026 ([SEPRELAD](https://www.seprelad.gov.py/?p=3859)). SEPRELAD and the credit bureau Criterion S.A. ran a real-estate AML webinar in June 2026 ([SEPRELAD](https://www.seprelad.gov.py/?p=4038)). In 2024 SEPRELAD ran 27 regional trainings for 533 people, and its E-porandu help desk got 855 questions in about 4.5 months, mostly on how to file ROS and RO, SIRO access and registration ([Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf)).

**Pain, in order of evidence**
1. **Missed calendar items lead to warning letters.** 1,238 real-estate firms and 456 car dealers got one in 2024 for missing objective filings (statistics portal; Memoria 2024). The firm then carries a record.
2. **The yearly audit and internal-control reports are mostly missing.** Only about 1 in 3 paying real-estate firms and 1 in 5 car dealers sent an external audit report in 2025 (statistics portal). Firms that do buy an audit need an audit-ready file.
3. **SIRO is a learning curve.** Registration annulments (532 of 2,042 in 2024), help-desk volume and repeated training show this (Memoria 2024).
4. **Re-keying.** The quarterly RO is either typed in by hand or needs a JSON file most small firms cannot produce (SEPRELAD notice, Aug 2025).
5. **The canon itself.** It is due by 30 June, with a 2% monthly surcharge on late payment ([Perspectivas](https://perspectivas.com.py/noticias/bancos-financieras-inmobiliarias-y-casas-de-cambio-tienen-plazo-hasta-el-30-de-junio-para-pagar-su-cuota-al-sistema-antilavado)).
6. **KYC forms cost sales (car dealers).** In 2019 CIVU's vice-president said customers often refuse to fill in the sworn source-of-funds form and that "many sales were lost" because of the form-filling, not because buyers had something to hide ([Última Hora, 2 Nov 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685)). A quick mobile KYC form the customer can fill in himself speaks to this.
- **No forum evidence found.** I found no public forum or social-media thread in which agents complain about SEPRELAD duties (unverified; Facebook groups were not searchable). Pain evidence comes from the regulator's own numbers.

## Willingness to pay

**What buyers already pay** (Gs 7,300 = about US$1)

| Item | Price | Source |
|---|---|---|
| SEPRELAD annual canon, real estate | about Gs 329,000-333,000 (US$45) a firm a year (Gs 476.7m / 1,451 firms in 2025; Gs 345.8m / 1,039 in 2026 to date) | statistics portal |
| SEPRELAD registration fee (one-off), real estate | about Gs 322,000 (Gs 104.4m / 324 registrants in 2025) | statistics portal |
| Online SEPRELAD course for accountants (6 hours) | Gs 150,000 (US$20); 894 enrolled | [Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/) |
| Online LD/FT workshop for "other obligated subjects" (risk matrix, self-assessment) | Gs 800,000 (US$110) a person; Gs 600,000 each for 2+ | [Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/) |
| Annual external AML audit by a registered auditor | not published; firms quote on request | [Cáceres & Schneider](https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/) (price unverified) |
| Freelance compliance-document pack | not published | [Clasipar ad](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578) |
| Regional list-search tool | from US$10 + tax prepaid; annual plans on request | [HADA](https://hada.com.uy/) |
| Late canon surcharge | 2% a month | [Perspectivas](https://perspectivas.com.py/noticias/bancos-financieras-inmobiliarias-y-casas-de-cambio-tienen-plazo-hasta-el-30-de-junio-para-pagar-su-cuota-al-sistema-antilavado) |

**Costs firms carry today without software**
- **Staff time.** A staff accountant costs about Gs 3.6m-10.9m a month and a bookkeeping assistant about Gs 3.0m-6.0m in 2026 ([Cazvid, accountant](https://cazvid.com/es/blog/cuanto-gana-un-contador-en-paraguay); [Cazvid, assistant](https://cazvid.com/es/blog/cuanto-gana-un-auxiliar-contable-en-paraguay)). One day of an assistant's time is roughly Gs 140,000-270,000 (my estimate, 22 working days).
- **The external audit.** About 650 firms (492 real estate, 160 car dealers) bought one in 2025 (statistics portal). Fees are not published (unverified). These firms already spend money on compliance and are the warmest leads.
- **Risk of a warning letter.** Fines are rare (one in 2025). A warning is the realistic consequence, so fear alone will not carry a high price (statistics portal).

**What this says about price**
- The anchors are low: the state fee is about US$45 a year, a course US$20-110, and a regional list tool starts at US$10. The only paid software seen in use (Devsys) is aimed at firms with a compliance team.
- A price of **Gs 150,000-250,000 a month (about US$20-35), or Gs 1.5m-2.5m a year prepaid (about US$200-340)**, sits above the canon and below one assistant-day a month. That looks defensible for a firm that already buys an audit (my estimate; needs interviews).
- Firms that only want "stay off the warning list" (calendar, reminders, negative-report and RO help) may pay only Gs 50,000-100,000 a month (US$7-14) (my estimate).
- Auditors and consultants who serve 10-30 clients each are the buyers with the clearest return. A practice plan at about US$100-150 a month fits (B2 report estimate; unverified).


## Competitor table and discussion

"Duty list" means what Res 201/2020 and later SIRO resolutions ask of a real-estate firm: registration and data updates in SIRO; compliance officer; AML manual and code of ethics; risk assessment every 2 years; KYC files with thresholds; list screening (UN, PEP); quarterly operation report (RO, Res 003/2025, due 11-20 Jan/Apr/Jul/Oct); quarterly negative report; Annual Form by 31 May; internal control report within 90 days; external audit report within 180 days; 5-year records.

| Product | Country | What it covers vs the duty list | Price | Customers | Verdict |
|---|---|---|---|---|---|
| **SEPRELAD SIRO** | PY (state) | Registration, data update, ROS, negative report, RO (web form one-by-one or JSON bulk upload), Annual Form, upload of audit and internal-control reports. Keeps no KYC file, no screening log, no manual, no risk matrix, no reminders. | Free (the firm pays the canon, about Gs 329,000 a year) | All 2,233 registered real-estate subjects | The filing end-point, not a competitor for the record-keeping. Its JSON format is an integration hook. ([SEPRELAD JSON notice, 22 Aug 2025](https://www.seprelad.gov.py/?p=3156); [Res 003/2025 notice](https://www.seprelad.gov.py/?p=1528)) |
| **Devsys Cumplo360 Cloud** | Uruguay | Watch-list search (Dow Jones data plus local lists), KYC records with document storage, ongoing screening, client risk scoring, transaction monitoring. No SEPRELAD-specific filings, Annual Form, RO JSON, Res 201/2020 manual or audit pack are mentioned. | Not published ("planes escalables") (unverified) | Says 18 countries, 350+ clients, 8,000+ users. Paraguayan testimonials: **Fortaleza Inmuebles** (real estate), Grupo Condor, Bolsa de Valores de Asunción. | **The real incumbent at the top end.** Proves a Paraguayan real-estate firm will pay for screening and KYC software. Built for compliance teams, not for one-owner agencies. ([Devsys clients](https://www.devsys.com.uy/clientes.html); [Cumplo360 Cloud](https://www.devsys.com.uy/cumplo360-cloud.html)) |
| **Pirani AML** | Colombia | Risk matrix, risk factors, list-screening add-on, suspicious-operation workflow. Has a SEPRELAD guide page. No Paraguayan forms. | Free plan (200 records, 5 users); Starter, Basic, Enterprise prices shown only at checkout | No Paraguayan client named | Generic risk tool. A free tier exists, so "free risk matrix" is not a differentiator. ([Pirani AML plans](https://www.piranirisk.com/es/planes-y-precios/aml); [Pirani SEPRELAD page](https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro)) |
| **HADA (GNS Software)** | Uruguay | List search (2,000+ lists, PEP), alerts, monitoring, risk matrix, simple/normal/enhanced due diligence, document manager with expiry dates, ROS generation (Uruguayan format) | From US$10 + tax (prepaid search plan); Lite and Full plans on annual membership, prices not shown | Uruguayan DNFBPs (no Paraguay client seen) | Shows the price floor for list search in the region. Not localised for Paraguay. ([HADA](https://hada.com.uy/)) |
| **Compliance Paraguay** (Gregorio Mayor) | PY | PEP database of 9,000+ people, built on SEPRELAD Res 50/2019 positions. Screening only. | Not published | Sold to banks, finance firms, real-estate firms, exchange houses | Feature competitor or data partner for PEP screening. ([La Nación, 13 Aug 2024](https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/)) |
| **Freelance compliance-officer packs** (e.g. a Clasipar ad, Villa Elisa, Oct 2021) | PY | One-off document set for car dealers under Res 196/2020: AML manual, job descriptions, risk management, client ID forms, client risk rating form, SEPRELAD filing guide, note to SEPRELAD, annual training and work plans | Not stated in the ad | Unknown | Proves the "document pack" service exists informally. Static Word files, no upkeep. ([Clasipar ad](https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578)) |
| **Training providers** | PY | Explain duties; do not run them | Gestión Contable online SEPRELAD course Gs 150,000 (894 enrolled); Best Practices online LD/FT course for "otros sujetos obligados" Gs 800,000 (Gs 600,000 each for 2+); SEPRELAD's own sessions are free | Accountants, compliance officers | Channel and price anchor, not a competitor. ([Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/); [Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/); [SEPRELAD Form Anual training, 8 Apr 2026](https://www.seprelad.gov.py/?p=3859)) |
| **SEPRELAD free guidance** (sector risk guide, form instructions, Annual Form webinars, YouTube recordings) | PY (state) | Explains risks, red flags and how to fill forms. Res 240/2020 risk matrix and Res 241/2020 forms are published. No record-keeping. | Free | All subjects | Product input. Lowers the value of a paid "document pack" for the risk matrix. ([Risk guide](https://www.seprelad.gov.py/userfiles/files/Guia_de_Riesgos_LA_FT_Sector_Inmobiliario.pdf); [form instructions](https://www.seprelad.gov.py/userfiles/files/biblioteca/instructivo-informacion-inmobiliaria.pdf); [Annual Form training](https://www.seprelad.gov.py/?p=3859)) |
| **Registered external auditors** (182 people; PwC, EY, Deloitte, BDO, Grant Thornton, Baker Tilly, Amaral, Russell Bedford and about 40 smaller firms, plus about 90 individuals) | PY | The yearly compliance audit (Res 201/2020 art. 14). Some also design programmes. | Not published (unverified) | About 650 audits filed by real estate and car dealers in 2025 | Not a software competitor. Their clients' poor files are their cost. **Best channel.** ([auditor export](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); [Cáceres & Schneider](https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/)) |
| **Law firms** (Ferrere, Vouga and others) | PY | Programme design, legal updates | Not published | Larger firms | Not aimed at small agencies. Source of content and referrals. ([Ferrere](https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-empresas-y-personas-involucradas-en-la/); [Vouga](https://www.vouga.com.py/en/la-seprelad-establece-nuevo-procedimiento-para-la-presentacion-de-informes-a-traves-del-siro/)) |
| **Criterion S.A.** (credit bureau) | PY | Credit reports, scoring, people search, free risk alerts, training. No AML module seen. Co-hosted a SEPRELAD real-estate AML webinar in June 2026. | Per report (prices not seen) | Lenders, businesses | Possible data partner (ID data) or entrant. ([Criterion](https://criterion.com.py/); [SEPRELAD, 11 Jun 2026](https://www.seprelad.gov.py/?p=4038)) |
| **Global KYC/ID APIs** (theKYB, Shufti Pro and similar) | Global | PEP/sanctions data and ID checks; list Paraguay as covered | Quote or per-check | Fintechs | Back-end data feed, not a workflow. ([theKYB Paraguay](https://thekyb.com/our-data/paraguay/); [Shufti Pro Paraguay](https://shuftipro.com/supported-countries/paraguay/)) |
| **Real-estate tech** (Place Analyzer with ACIP; ACIP MLS with Grupo ITTI) | PY | Appraisal, listings, analytics. No AML. | Member benefits | ACIP members | Possible future entrant or integration partner. ([Infonegocios on ACIP and Place Analyzer](https://infonegocios.com.py/default/acip-y-place-analyzer-se-unen-para-digitalizar-el-mercado-inmobiliario-permitira-acceder-en-tiempo-real-a-la-oferta-del-sector)) |
| **Car-dealer and lot-sale software** | PY | Searches for Paraguayan dealer or lot-sale systems with a SEPRELAD report found none | - | - | No incumbent found (2 searches; unverified beyond that). |


**Discussion**
- **Nobody runs the whole SEPRELAD job for a small firm.** About 13 competitor searches in this pass (Spanish and English), direct checks of vendor sites (Devsys, HADA, Pirani, Criterion), and 12 searches in earlier passes found no Paraguayan product that combines KYC records, list checks, the Res 201/2020 documents, the deadline calendar, the RO JSON file, the Annual Form data and an audit-ready export.
- **The B2 report missed one real competitor.** Devsys's Cumplo360 Cloud (Uruguay) names a Paraguayan real-estate firm (Fortaleza Inmuebles), Grupo Condor and the Asunción stock exchange as clients. It covers screening, KYC files and risk scoring well. It does not claim SEPRELAD filings, templates or deadlines, and its price is not public. It shows that bigger firms pay for screening. It also means "list screening" alone will not win the top of the market.
- **Free tools cover pieces.** SIRO takes the filings. SEPRELAD publishes the risk matrix, guides and training. Pirani has a free tier. So a product must sell the *running* of the file (calendar, records, evidence, exports), not the documents or a risk matrix alone.
- **The service market is the real incumbent.** About 140 audit practices and an unknown number of freelance compliance officers and accountants do this work by hand. They are better treated as resellers than as rivals.
- **Partial and overpriced incumbents mean an opening.** Devsys and Pirani are partial (no Paraguayan filings) and priced for compliance teams. Freelancers sell static files. The gap is a low-priced, Paraguay-specific "compliance file" for the about 2,300 paying real-estate and car-dealer firms.

## Channels

| Channel | Size and reach | Why it matters | Source |
|---|---|---|---|
| **SEPRELAD-registered external auditors** | 182 valid registrations; about 140 practices (49 firms plus about 90 individuals). 64 new auditors admitted in 2024; 104 registrations dated 2025 and 70 in 2026. Registrations last two years. | Every firm that complies must buy their yearly report. They spend hours on clients' messy files. A practice licence with client read-only access and an audit export turns them into resellers. | my count of the [auditor export](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf) |
| **The SEPRELAD register itself** | 9,795 subjects with name, RUC, sector, department and registration date; about 300-450 new real-estate firms a year | A public, sector-by-sector lead list and a trigger (new registration, warning letter). Use it with care: Paraguay's personal-data law 7593/2025 takes effect in Nov 2027 (secondary source, unverified) and individuals are 21% of real-estate rows. | [register lookup](https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml); [Marcasur on Ley 7593/2025](https://marcasur.com/en/noticia/paraguay-launches-comprehensive-personal-data-protection-law-key-points-for-companies-and-regulated-sectors&f=-2025) |
| **SEPRELAD training (CECAD)** | 27 regional events and 533 people in 2024; about 100 real-estate officers on the 8 Apr 2026 Annual Form webinar; recordings on YouTube | Shows when and where demand peaks (Annual Form in April-May, RO windows each quarter). A vendor cannot sell at these, but can publish free guides timed to them. | [Memoria 2024](https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf); [SEPRELAD, 8 Apr 2026](https://www.seprelad.gov.py/?p=3859) |
| **ACIP** (brokers' association) | About 90 agencies, 1,000+ agents; president Daniel Ortiz; Agent Day 12 Aug; pushing a brokerage licensing law; Place Analyzer partnership and an MLS project | Endorsement and a member discount. Res 201/2020 allows trade associations to adopt a collective code of ethics, a natural joint project. | [Infonegocios, Aug 2025](https://infonegocios.com.py/default/mercado-inmobiliario-en-transformacion-acip-impulsa-ley-de-corretaje-y-modernizacion-digital-en-el-sector); [Ferrere EN](https://ferrere.com/en/news/new-regulations-for-the-prevention-of-asset-laundering-and-financing-of-terrorism-for-companies-and-individuals-involved-in-the/) |
| **CAPADEI** (developers' chamber) | President Raúl Constantino; panels at Constructecnia (May 2026); investor trip to Curitiba (Jun 2026) | Developers sell to foreign buyers, where KYC and source of funds matter most. | [Infonegocios on Constructecnia 2026](https://infonegocios.com.py/infoconstruccion/arranco-constructecnia-2026-el-termometro-de-la-industria-paraguaya-que-busca-redefinir-el-futuro-del-sector); [La Nación, May 2026](https://www.lanacion.com.py/negocios/2026/05/24/comitiva-viajara-a-brasil-a-buscar-inversiones-en-el-sector-inmobiliario/) |
| **Car-dealer groups** | CADAM (new-car distributors, 90+ brands); CIVU (110 member lots in 2019); Civemup | Second vertical. Dealers are 62% individuals and spread outside Asunción, so association and accountant channels matter more. | [Ferrere on Res 196/2020](https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/); [Última Hora, 2019](https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685) |
| **Accountants and their training sites** | Colegio de Contadores del Paraguay (110 years in 2026; president Javier Machaín; runs training events). Gestión Contable's SEPRELAD course has 894 enrolments. | Accountants keep the books of small agencies and dealers and often file for them. A white-label or referral deal reaches the long tail. | [Última Hora, Jul 2026](https://www.ultimahora.com/contadores-conmemoraron-110-anos-y-anunciaron-triple-evento-de-capacitacion); [Gestión Contable](https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/) |
| **Compliance trainers** | Best Practices (Juan Báez), BNF/Fotriem certification, Criterion S.A. webinars | Co-marketing: a course plus three months of the tool. | [Best Practices](https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/); [Fotriem PDF](https://www.fotriem.edu.py/wp-content/uploads/2023/08/Ref.-17-BNF-Programa-Certificacion-en-Prevencion-de-Lavado-de-Activos-en-Paraguay-Formacion-de-Oficial-de-Cumplimiento.pdf); [SEPRELAD, 11 Jun 2026](https://www.seprelad.gov.py/?p=4038) |
| **Trade media and events** | Infonegocios (InfoMiCasa section), La Nación, Última Hora; Foro Inmobiliario (Nov 2024, 450+ expected); Constructecnia (May 2026); an "Expo Real Estate Paraguay" on 23-24 Jun 2026 (unverified) | Content marketing around deadlines and warning letters. | [Infonegocios, IV Foro Inmobiliario](https://infonegocios.com.py/infomicasa/llega-el-iv-foro-inmobiliario-es-un-momento-clave-para-que-todos-los-actores-del-sector-inmobiliario) |

**Influencers to approach first:** two or three mid-size audit practices with many real-estate clients (for example Cáceres & Schneider, which markets the SEPRELAD report), ACIP's board, and one accounting-training site such as Gestión Contable (my suggestion).

## Regional expansion

The reusable core is the same everywhere: client and deal register, KYC thresholds, list checks with a log, deadline calendar, document templates and an auditor export. What changes per country is the filing format, the forms and the language of the rules.

| Country | Fit | Size signal | Incumbents seen | Verdict |
|---|---|---|---|---|
| **Ecuador** | Real estate, construction and car dealers report to the UAFE under sector rules (real estate: Res UAFE-DG-2021-0362, per [Andersen Ecuador](https://ec.andersen.com/wp-content/uploads/2021/10/TIPS-025-2021-Resolución-UAFE.pdf); unverified detail) in a set report format. Since 10 Sep 2025 the tax office flags obliged subjects on the RUC and they must get a UAFE code within 30 working days or risk RUC suspension ([NMS Law, Sep 2025](https://nmslaw.com.ec/blog/2025/09/14/ecuador-registro-uafe-ruc/)). | At end-2025 the UAFE directly supervised 9,539 subjects: **4,446 real estate and construction firms, 542 car dealers, 528 jewellers**, 355 foundations, 78 money-transfer firms. It sent 946 non-compliance notices to real estate in 2025 and fined 136 subjects US$341,670 in total ([UAFE accountability report 2025, Tables 3-6](https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf)). | Not checked (budget) (unverified) | **Best second market.** About twice Paraguay's real-estate base, US dollar economy, real fines. Needs its own report format. |
| **Uruguay** | Real-estate firms, developers and builders are obliged under Ley 19.574 art. 13 ([IMPO](https://www.impo.com.uy/bases/leyes/19574-2017/13)). SENACLAFT fines real estate (28 fines in five years) ([El Observador](https://www.elobservador.com.uy/economia-y-empresas/lavado-activos-senaclaft-aplico-156-sanciones-y-estos-fueron-los-sectores-mas-multados-n5959380)). | About 13,677 non-financial subjects registered at end-2023, all sectors ([Vaccotti Fer summary](https://vaccottifer.com/2025/01/20/sistema-de-control-de-lavado-de-activos-en-uruguay/); secondary, unverified) | HADA (from US$10), Devsys Cumplo360, Precodata ([HADA](https://hada.com.uy/); [Devsys](https://www.devsys.com.uy/); [Precodata](https://www.precodata.com.uy/prodyservPrev.html)) | **Crowded.** Local vendors already sell to inmobiliarias. Low priority. |
| **Argentina** | Real-estate brokers are obliged (Ley 25.246 art. 20 inc. 19); UIF Res 43/2024 replaced Res 16/2012 ([ADEBA](https://www.adeba.com.ar/?p=36553)); the UIF has a systematic-reporting guide for property sales ([UIF](https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles)). A practitioner says monthly reports apply since Feb 2025 and many firms have not complied (LinkedIn, secondary). | Large (count not found) | Not checked by name (unverified) | Big, but price-sensitive and likely served by local vendors. Later. |
| **Peru** | Construction and real-estate firms are obliged subjects of the UIF-Perú (Res SBS 789-2018, amended 2023; alert guide Res SBS 01219-2026) ([SBS list of obliged subjects](https://www.sbs.gob.pe/prevencion-de-lavado-activos/Sujetos-Obligados/Relacion-de-Sujetos-Obligados)) | Count not found | Not checked (unverified) | Possible, after Ecuador. |
| **Bolivia** | The 2023 UIF instructivo for DNFBPs (Res UIF/25/2023) covers real-estate firms **only if they are large taxpayers** ([Ferrere, May 2023](https://www.ferrere.com/en/news/instructivo-para-apnfd-con-enfoque-basado-en-gestion-de-riesgos-contra-lgi-ft-y-fpadm/)) | Small | - | **Skip.** Small agencies are outside the rule. |
| Brazil | Portuguese, different regulator (COFECI/COAF) | Large | Many | Out of scope. |

## Implications for positioning and pricing

1. **Size the market on payers, not on registrations.** The honest core is about **2,300 paying firms** (1,451 real estate plus 845 car dealers in 2025), plus about 190 jewellers, pawn shops, remitters, VASPs and cash firms. The register holds 3,952 real-estate and car-dealer rows, so there is a further pool of registered but non-paying firms that SEPRELAD will keep chasing.
2. **Start with the about 650 firms that already buy an external audit.** They spend money on compliance every year and their auditor wants a clean file. The 1,238 + 456 firms warned in 2024 are the second wave.
3. **Position as "your SEPRELAD file, always audit-ready", not as AML screening.** Devsys and Pirani already sell screening and risk scoring. The unserved part is Paraguay-specific: the calendar (RO 11-20 Jan/Apr/Jul/Oct, negative reports, Annual Form by 31 May, internal control in 90 days, audit in 180 days, canon by 30 June), the RO JSON export, the Annual Form data, Res 201/2020 documents, the client file with thresholds and a screening log, and an export the auditor accepts.
4. **Sell through auditors first.** About 140 practices can each bring 10-30 clients. Give them a practice plan (multi-client dashboard, read-only client access, audit-sample export). A direct, self-serve plan catches the rest.
5. **Price low and simple.** Suggested starting points (my estimates; test in interviews):
   - Basic "deadlines and filings" plan: about Gs 75,000 a month (US$10).
   - Full "audit-ready file" plan: about Gs 180,000-250,000 a month (US$25-35), or about Gs 1.9m (US$260) a year prepaid.
   - Auditor or consultant practice plan: about US$100-150 a month for up to 30 clients.
   - Optional paid PEP/sanctions data at cost plus margin.
6. **Revenue reality check** (my estimate): 15% of 2,300 payers at US$260 a year is about US$90k. 30% is about US$180k. Twenty practice plans add about US$25k-35k, partly overlapping. This is consistent with the B2 report's US$100k-150k by year 3. Ecuador could roughly double it later.
7. **Car dealers need a lighter, mobile-first version.** 62% are individuals, and the 2019 complaint was about customers refusing paper KYC forms. A link the buyer fills in on his phone is the selling point.
8. **Watch SEPRELAD.** It keeps adding SIRO modules (data update Oct 2026, JSON RO 2025, supervision module 2024). Anything that only fills forms could be absorbed. The record-keeping and audit-evidence side is less likely to be.

## Open questions

- What do registered auditors charge a small real-estate firm or car dealer for the yearly report? (Ask 5 practices.)
- Which exact filings drove the 1,238 real-estate warnings in 2024, and did repeat offenders face fines?
- What is Devsys Cumplo360's price for a small Paraguayan firm, and does it have a local reseller?
- How many registered real-estate rows are inactive (registered but no canon, no filings)? A per-RUC filing status is not public.
- Would ACIP or CAPADEI back a collective code of ethics plus a member discount?
- How many accountants or freelance compliance officers act as compliance officer for several small firms? (No count found.)
- Is the JSON RO format published as a schema, and will SEPRELAD accept files generated by third-party software?
- Ecuador: which local vendors already serve small inmobiliarias, and at what price? (Not checked.)
- Notaries (1,406 registered, 5,140 ROs in 2025) file in SIRO but answer to the Supreme Court. Is that a second product line or a distraction?

## Sources

**Primary (official)**
- SEPRELAD lookup of obligated subjects and external auditors; Excel exports "SujetosObligados.xls" (9,795 rows) and "AuditoresExternos.xls" (183 rows), downloaded 10 Oct 2026: https://www.seprelad.gov.py/siro/consultaExterna/consultaExternaSoAe.xhtml
- SEPRELAD statistics portal ("SO sin supervisión natural registrados", "Aranceles", "Cumplimiento", "Sanciones"; years 2021-2026; Excel exports), queried 10 Oct 2026: https://www.seprelad.gov.py/siro/estadisticaExterna/estadistica.xhtml
- SEPRELAD Memoria Anual 2024: https://www.seprelad.gov.py/wp-content/uploads/2025/06/2024.pdf
- SEPRELAD, Res 003/2025 quarterly RO for real estate (8 Jan 2025): https://www.seprelad.gov.py/?p=1528
- SEPRELAD, JSON bulk upload notice to the real-estate sector (22 Aug 2025): https://www.seprelad.gov.py/?p=3156
- SEPRELAD, mandatory SIRO data update for real estate (2 Oct 2026): https://www.seprelad.gov.py/?p=4412
- SEPRELAD, Annual Form webinar for real estate (8 Apr 2026): https://www.seprelad.gov.py/?p=3859
- SEPRELAD and Criterion S.A. real-estate webinar (11 Jun 2026): https://www.seprelad.gov.py/?p=4038
- SEPRELAD real-estate sector risk guide (2021): https://www.seprelad.gov.py/userfiles/files/Guia_de_Riesgos_LA_FT_Sector_Inmobiliario.pdf
- SEPRELAD real-estate form instructions: https://www.seprelad.gov.py/userfiles/files/biblioteca/instructivo-informacion-inmobiliaria.pdf
- UAFE Ecuador, Informe de Rendición de Cuentas 2025: https://www.uafe.gob.ec/wp-content/uploads/downloads/2026/rendicion_cuentas/Informe_de_RC_publicado_en_pag_web.pdf
- Uruguay Ley 19.574 art. 13 (IMPO): https://www.impo.com.uy/bases/leyes/19574-2017/13
- Argentina UIF guide on systematic reports for property sales: https://www.argentina.gob.ar/uif/instructivos/rsm-compra-yo-venta-de-bienes-inmuebles
- Peru SBS list of obliged subjects: https://www.sbs.gob.pe/prevencion-de-lavado-activos/Sujetos-Obligados/Relacion-de-Sujetos-Obligados

**Vendors and service providers**
- Devsys clients and testimonials: https://www.devsys.com.uy/clientes.html
- Devsys Cumplo360 Cloud: https://www.devsys.com.uy/cumplo360-cloud.html
- Devsys home (18 countries, 350+ clients): https://www.devsys.com.uy/
- Pirani AML plans: https://www.piranirisk.com/es/planes-y-precios/aml
- Pirani SEPRELAD guide: https://www.piranirisk.com/es/hub-regulatorio/seprelad-prevencion-lavado-dinero-paraguay-siro
- HADA (GNS Software): https://hada.com.uy/
- Precodata: https://www.precodata.com.uy/prodyservPrev.html
- Criterion S.A.: https://criterion.com.py/
- theKYB Paraguay data: https://thekyb.com/our-data/paraguay/
- Shufti Pro Paraguay: https://shuftipro.com/supported-countries/paraguay/
- Cáceres & Schneider, Informe de Cumplimiento SEPRELAD: https://consultoria.com.py/caceres-schneider-informe-de-cumplimiento-seprelad-plazos-para-entrega/
- Clasipar ad, compliance-officer service for car dealers (2021): https://clasipar.paraguay.com/motor/otros-rodados/servicio-de-oficial-de-cumplimiento-seprelad-1924578
- Gestión Contable SEPRELAD course: https://gestioncontableparaguay.com/courses/curso-seprelad-6-hs-de-estudio/
- Best Practices LD/FT course for other obligated subjects: https://bestpractices.com.py/curso-taller-administracion-de-riesgos-ldft/
- Fotriem/BNF certification: https://www.fotriem.edu.py/wp-content/uploads/2023/08/Ref.-17-BNF-Programa-Certificacion-en-Prevencion-de-Lavado-de-Activos-en-Paraguay-Formacion-de-Oficial-de-Cumplimiento.pdf

**Press and secondary**
- La Nación on Compliance Paraguay PEP tool (Aug 2024): https://www.lanacion.com.py/negocios/2024/08/13/consultora-presenta-herramienta-que-identifica-a-personas-expuestas-politicamente/
- Infonegocios, ACIP estimate of 300-400 agencies and 4,000 agents (Aug 2026): https://infonegocios.com.py/infomicasa/mercado-del-corretaje-inmobiliario-cambia-de-ritmo-redes-sociales-ia-e-inversion-extranjera-reconfiguran-el-negocio
- Infonegocios on ACIP (Aug 2025): https://infonegocios.com.py/default/mercado-inmobiliario-en-transformacion-acip-impulsa-ley-de-corretaje-y-modernizacion-digital-en-el-sector
- Infonegocios on ACIP and Place Analyzer: https://infonegocios.com.py/default/acip-y-place-analyzer-se-unen-para-digitalizar-el-mercado-inmobiliario-permitira-acceder-en-tiempo-real-a-la-oferta-del-sector
- Infonegocios on Constructecnia 2026: https://infonegocios.com.py/infoconstruccion/arranco-constructecnia-2026-el-termometro-de-la-industria-paraguaya-que-busca-redefinir-el-futuro-del-sector
- Infonegocios on the IV Foro Inmobiliario: https://infonegocios.com.py/infomicasa/llega-el-iv-foro-inmobiliario-es-un-momento-clave-para-que-todos-los-actores-del-sector-inmobiliario
- La Nación on CAPADEI trip to Brazil (May 2026): https://www.lanacion.com.py/negocios/2026/05/24/comitiva-viajara-a-brasil-a-buscar-inversiones-en-el-sector-inmobiliario/
- Última Hora on used-car lots and CIVU (2 Nov 2019): https://www.ultimahora.com/seprelad-el-50-playa-autos-eluden-el-control-antilavado-n2852685
- Última Hora on the Colegio de Contadores (Jul 2026): https://www.ultimahora.com/contadores-conmemoraron-110-anos-y-anunciaron-triple-evento-de-capacitacion
- Ferrere on Res 196/2020 (car dealers): https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-personas-fisicas-o-juridicas-involucrad/
- Ferrere on Res 201/2020 (ES): https://ferrere.com/es/novedades/nuevo-reglamento-de-prevencion-de-lavado-de-activos-y-financiamiento-del-terrorismo-para-empresas-y-personas-involucradas-en-la/
- Ferrere on Res 201/2020 (EN): https://ferrere.com/en/news/new-regulations-for-the-prevention-of-asset-laundering-and-financing-of-terrorism-for-companies-and-individuals-involved-in-the/
- Ferrere on the Bolivian DNFBP instructivo (May 2023): https://www.ferrere.com/en/news/instructivo-para-apnfd-con-enfoque-basado-en-gestion-de-riesgos-contra-lgi-ft-y-fpadm/
- Vouga Abogados on SIRO report procedure: https://www.vouga.com.py/en/la-seprelad-establece-nuevo-procedimiento-para-la-presentacion-de-informes-a-traves-del-siro/
- Perspectivas on the 2026 canon deadline and surcharge: https://perspectivas.com.py/noticias/bancos-financieras-inmobiliarias-y-casas-de-cambio-tienen-plazo-hasta-el-30-de-junio-para-pagar-su-cuota-al-sistema-antilavado
- Marcasur on Paraguay's data-protection law 7593/2025: https://marcasur.com/en/noticia/paraguay-launches-comprehensive-personal-data-protection-law-key-points-for-companies-and-regulated-sectors&f=-2025
- Cazvid on accountant pay: https://cazvid.com/es/blog/cuanto-gana-un-contador-en-paraguay
- Cazvid on bookkeeping-assistant pay: https://cazvid.com/es/blog/cuanto-gana-un-auxiliar-contable-en-paraguay
- NMS Law on Ecuador UAFE registration via RUC (Sep 2025): https://nmslaw.com.ec/blog/2025/09/14/ecuador-registro-uafe-ruc/
- El Observador on SENACLAFT sanctions: https://www.elobservador.com.uy/economia-y-empresas/lavado-activos-senaclaft-aplico-156-sanciones-y-estos-fueron-los-sectores-mas-multados-n5959380
- Vaccotti Fer on Uruguay's registered subjects: https://vaccottifer.com/2025/01/20/sistema-de-control-de-lavado-de-activos-en-uruguay/
- ADEBA on UIF Res 43/2024: https://www.adeba.com.ar/?p=36553
- Andersen Ecuador on the UAFE real-estate resolution (2021): https://ec.andersen.com/wp-content/uploads/2021/10/TIPS-025-2021-Resolución-UAFE.pdf

**Method notes**
- Budget used: 40 web searches, 2 WebFetch calls; other pages were read with plain HTTP downloads. All registry counts are my own counts of the official exports. Name-based splits of the real-estate register are a rough keyword guide.
- Exchange rate used: about Gs 7,300 = US$1 (from the B2 report).
