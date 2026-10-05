# Mexico: offline-industries pass (as of 2026-10-05)

Scope: quiet industries only, found through regulator records (DOF, SEMARNAT, CONAPESCA, SENASICA, PROFECO, IMSS, STPS, COFEPRIS). The opportunities in `research/countries/mexico.md` (hazardous-waste manifests, multi-site hours registry, payroll-bureau bridge, LFPIORPI/AML) are **not** repeated here.

Budget used: 44 of 45 WebSearch calls. WebFetch was not used. Facts come from search-result summaries of the cited pages; the pages themselves were not opened. Tags: **[V]** = from a search-result summary citing the URL; **[BK]** = background knowledge, not checked this session; *estimate* = my own number.

**Bottom line:** Mexico's quiet industries are regulated mostly by *federal* agencies with their own portals or paper counters (SEMARNAT, CONAPESCA, SENASICA). That gives less fragmentation than the US, and the receiving authority's own system is usually the substitute. The best fit is **forest-product storage and transformation centres (sawmills, lumber yards)**. They keep a mandatory entry/exit ledger, issue reembarques, and file semiannual reports that cost them their licence if missed twice. PROFEPA is closing sawmills in 2026 for missing ledgers, and a November 2025 regulation reform pushes the procedures to electronic means. Buyers are poor and partly informal, though, so even this scores only 5/10. No Mexican quiet industry reached the brief's 7+ bar.

---

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Sawmills, lumber yards and other forest-product storage/transformation centres (CAT) | Libro de registro de entradas y salidas (printed or digital), reembarques forestales per outbound load, semiannual inventory report (first 10 working days of Jan and Jul; two missed = licence revoked), 5-year retention | SEMARNAT publishes a fill-in **paper ledger format**; reembarques are requested at SEMARNAT state counters (ECC); PROFEPA 2026 closures cite missing ledgers and semiannual reports [V] | ">12,000 primary transformation centres" (INIFAP, Rev. Mex. Cienc. Forestales vol. 14 no. 79) [V]; Michoacán alone had 3,756 sawmills/workshops in 2004 [V] | **Opportunity 1** | Mandatory, frequent, enforced; no vertical software found. Buyers are poor and partly informal |
| 2 | Cattle traders (introductores), assembly corrals and feedlots | REEMO electronic movement guide + state transit guide + TB/brucellosis certificates + screwworm (GBG) treatment certificate; state systems differ (e.g., Coahuila SIMOGA) | Guides issued at association counters (ventanillas) and by authorised vets; rules change state by state month to month [V] | No national count found. Export target ~400,000 head for 2026 (El Imparcial) [V] | **Opportunity 2** (weak) | Real "why now" (US border reopening from 2026-08-24), but the association counters do the paperwork |
| 3 | Inshore fishing cooperatives and permit holders | Aviso de arribo per landing (paper original + 5 copies, or SIPESCA with e.firma), guías de pesca to move product; US MMPA import rules from 2026-01-01 | Paper form filed at CONAPESCA fishing offices; the digital route needs e.firma [V] | ~3,200 fishing cooperatives (2015 figure, Duke DNOP summary) [V] | **Opportunity 3** (weak) | Per-trip and mandatory, but very low willingness to pay and a free government portal |
| 4 | Households employing domestic workers | Mandatory IMSS registration since 2023 (pilot from 2019); monthly fee payment; fines up to ~MXN 41k | IMSS's own web portal plus line-of-capture payment at the bank [V] | 59–61k registered vs ~2.5M workers (IMSS via Cimac, 2026) [V] | Rejected | Symplifica plus the free IMSS portal and calculators; enforcement too weak to drive payment |
| 5 | Scrap-metal dealers (chatarrerías) | Searched for a state seller-ID register | No Mexican statute or 2025–26 reform found; hits were Argentine municipal ordinances [V] | Not found | Rejected | No verified obligation, so no trigger |
| 6 | Pawnbrokers (casas de empeño) | PROFECO Public Registry (RPCE), annual renewal; also an LFPIORPI vulnerable activity | Registry list published in DOF; Feb 2026 PROFECO suspension campaign [V] | 4,042 registered (DOF list of 2026-09-21, per Xataka/UnoTV) [V] | Rejected | Annual renewal only; AML side crowded (see country report); pawn POS exists [BK] |
| 7 | Water-refill shops (purificadoras) | NOM-201-SSA1-2015: weekly coliform tests, cleaning and quality logs; unannounced COFEPRIS/COPRIS inspections | Paper or Excel bitácoras; free Excel templates circulate [V] | 2,068 in CDMX alone (DENUE via Publimetro, 2023) [V]; national figure not found | Rejected | AquaOS already targets this exact log (guide + free template); revenue per shop tiny |
| 8 | Urban pest-control firms | NOM-256-SSA1-2012 sanitary licence; a per-service certificate (folio, data) to every client | Public tenders (SCJN) demand NOM-256 paperwork [V] | Not found | Rejected | Not really quiet; generic field-service apps cover service certificates [BK] |
| 9 | Mezcal palenques | NOM-070 certification per lot by CRM/COMERCAM; samples per batch; certificate ≤1 year | Certifier inspects on site; MXN 30–60k to certify a palenque [V] | ~1,300 CRM-associated firms (2018 figure) [V] | Rejected | The certifier does the recordkeeping; no buyer-side software gap found |
| 10 | Hunting ranches (UMA cinegéticas) | Annual harvest report within 30 working days of season end; harvest-rate request; tags (cintillos) | SEMARNAT DGVS paper/portal formats [V] | 926 UMAs, 5,860 tags, 837 reports (2021–22 season) [V] | Rejected | Too few buyers, annual frequency |
| 11 | Honey collectors/exporters | SENASICA honey traceability registration (beekeeper, collector, packer ID, annual update); EU honey labelling from 2026-06-14; EU antimicrobial rules (Art. 118 Reg. 2019/6) for third countries from 2026-09-03 | Registration via SENASICA portal; collectors buy from many small beekeepers [V] | 25 firms authorised for EU export (older figure, gob.mx traceability doc) [V] | Watchlist | Strong trigger, but too few paying buyers; EU importers push their own systems [BK] |
| 12 | H-2A labour recruitment agencies | STPS authorisation (Form AC-1), 5-year validity, labour-market participation report | Paper filing at federal labour offices [V] | Not found (STPS publishes a list) [V] | Rejected | Small count, infrequent filing; exploitation risk around the sector |
| 13 | Water-well drillers | CONAGUA permits per well | Consultants handle permits [V] | Not found | Rejected | One-off per well; no driller register or 2025–26 driller obligation found |
| 14 | Special-handling (non-hazardous) waste haulers | State authorisation + state padrón (e.g., Jalisco); state generator registers; manifests | Jalisco runs its own portal and publishes a PDF list of authorised haulers [V] | Jalisco list exists, count not read [V] | Follow-up | Closest to the Florida-grease pattern (32 state regimes), but overlaps country-report Opp 1; evidence too thin |
| 15 | Street vendors, tianguis traders, taxis/colectivos, tortillerías | Municipal permits, state concessions | Not searched (budget) | — | Not screened [BK] | No recurring structured filing known; low money |

---

## 2. Opportunities

### Opportunity: Forest-ledger and semiannual-report keeper for sawmills and lumber yards (centros de almacenamiento y transformación)

**Industry:**
Forest-product storage and transformation centres: sawmills (aserraderos), ejido and community sawmills, box and pallet makers, lumber yards (madererías) that receive forest raw materials.

**Buyer:**
Owner or manager of the centre (often family-run), or the forestry technical service provider (prestador de servicios técnicos forestales, PSTF) who already does their SEMARNAT paperwork.

**Trigger / Why now:**
- **2025-11-20:** decree reforming the Regulation of the General Law on Sustainable Forest Development. Authorisations and notices are to be managed electronically, and centre-authorisation requirements were cut from 19 to 9 (Hogan Lovells summary) [V]. The reform makes it easier for new centres to register, and those centres then carry the ledger duties.
- **2025-08-19:** SEMARNAT environmental procedures can be done electronically [V].
- **2026 enforcement:** PROFEPA closed centres in the State of Mexico (June 2026) and in Puebla. The cited failings include **"omission of entry and exit registry books, forest remittances, reshipments, semiannual reports"** [V].

**Current workflow:**
1. A load arrives with a paper **remisión forestal** (original + 2 copies, valid 3 days, single use) issued by the harvest-right holder [V].
2. The manager writes the entry by hand in the **libro de registro de entradas y salidas** (SEMARNAT format; volumes in m³; inventory balance) [V].
3. Sawing converts roundwood to products. The manager computes the equivalence of transformed raw material, usually by hand or in Excel [V; method BK].
4. Every outbound load needs a **reembarque forestal** (valid 7 days, single use). New reembarque books are requested at the SEMARNAT state counter (ECC) when the current stock runs out [V].
5. In the first 10 working days of **January and July**, the manager files the semiannual inventory report (IS-REX). **Two missed reports mean the authorisation is revoked** [V].
6. Remisiones, reembarques and tax invoices are kept for 5 years [V].

**Pain:**
Closure and seizure of timber and machinery when ledgers, remisiones or semiannual reports are missing (PROFEPA 2026 cases) [V]. Licence revocation after two missed reports [V]. Per-load data entry plus volume-equivalence arithmetic. A mismatch between remisiones received, reembarques issued and stock is exactly what an inspector checks.

**Existing solutions:**
- The paper SEMARNAT ledger format itself (free PDF) [V].
- SEMARNAT's own National Forest Management System (SNGF, built on GeneXus). It is used by officials, not as a ledger for centres [V].
- PSTFs and forestry consultants who fill in reports for clients [V for their legal role; fee levels unverified].
- Generic sawmill or lumber-inventory software. No Mexico-specific product handling remisión/reembarque/IS-REX was found in two searches [V negative].
- Excel.

**Offline evidence:**
A printable ledger format published by SEMARNAT; reembarque books collected at a counter; PROFEPA findings of missing ledgers; no SaaS listings, reviews or forums found for this workflow.

**Offline channel:**
- PSTFs: registered in the Registro Forestal Nacional, and each serves many ejidos and centres [V that the register exists; count unverified].
- Regional forest-management associations (UMAFOR) [V that they exist in the Registro].
- Chainsaw and sawmill-equipment dealers in Durango, Chihuahua and Michoacán [BK].
- Queues at SEMARNAT state offices in the weeks before the January and July deadlines.

**Market count:**
">12,000 primary transformation centres" (INIFAP journal article) [V]. State concentration in 2004: Michoacán 3,756, Durango 1,134, Chihuahua 802, Puebla 443, Jalisco 376, Veracruz 285 [V]. The number of *authorised* centres in the Registro Forestal Nacional was not found. Many centres are informal: *estimate* that 30–50% would never keep records voluntarily.

**The gap:**
Nobody turns the per-load flow (remisión in → transformation → reembarque out) into a running m³ balance that automatically produces the semiannual report and an inspection-ready file.

**Possible product:**
A phone-first ledger. Photograph each incoming remisión and outgoing reembarque. The app parses folio, species and volume, keeps the inventory balance with species-specific yield factors, warns when the reembarque stock runs low, and prints the SEMARNAT ledger format and the semiannual report. Sell it to the PSTF as a multi-client dashboard.

**MVP:**
Web app with manual entry plus photo attachment. Output: the SEMARNAT ledger PDF and the semiannual totals. Target: one PSTF with 10 client centres in Durango or Michoacán.

**Willingness to pay:**
Mostly for a done-for-you service. Centre owners already pay PSTFs; a PSTF would pay for software that makes them faster. Price: *estimate* MXN 300–600/month per centre through the PSTF, or MXN 1,500–3,000/month per PSTF seat.

**Founder access:**
Needs a local Spanish speaker who can travel to forest regions; a non-local solo founder is unrealistic. The PSTF channel is relationship-driven.

**How to find first customers:**
- The Registro Forestal Nacional list of PSTFs (via SEMARNAT, or a transparency request).
- PROFEPA press releases, which show where enforcement is active (State of Mexico, Puebla, Michoacán, Jalisco).
- Forestry faculties (UACh Chihuahua, Chapingo) whose graduates become PSTFs.

**Risks:**
- SEMARNAT's electronic shift could include a free state-run e-remisión/e-reembarque that keeps the ledger automatically. The 2025 reform points this way, and it would kill the product.
- Informal and clandestine sawmills avoid records on purpose.
- Low ability to pay.
- Coordination with ejido assemblies.

**Kill condition:**
- SEMARNAT announces mandatory electronic remisiones/reembarques with auto-generated inventory reports in 2026–27; or
- 10 PSTF interviews show they already handle this in Excel in under 1 hour per client per semester.

**Score:** 5/10
(Pain 6, Frequency 7, Mandatory 9, Fragmentation 3, Competition 7, Incumbent gap 6, Buyer access 5, WTP 3, MVP 8, Distribution 5.)

**Sources:**
- SEMARNAT ledger format: https://www.gob.mx/cms/uploads/attachment/file/694762/F._Libro_de_registro_de_entradas_y_salidas_de_MP.pdf
- SEMARNAT reembarque/remisión forms: https://dsiappsdev.semarnat.gob.mx/formatos/DGGFS/FF-SEMARNAT-051-SEMARNAT-03-061-A-B.pdf ; https://dsiappsdev.semarnat.gob.mx/formatos/DGGFS/FF-SEMARNAT-052-SEMARNAT-03-020-A-y-B.pdf
- Reembarque trámite (ECC counter): https://catalogonacional.gob.mx/FichaTramite?traHomoclave=SEMARNAT-03-061-A
- Semiannual report and revocation rule (LGDFS): https://mley.mx/LGDFS/articulo/92-bis/ ; https://sdv.com.mx/compendio/ley-general-de-desarrollo-forestal-sustentable/articulo-92-bis/
- 2025 regulation reform: https://www.hlc.com/es/publications/semarnat-key-reforms-to-the-forestry-regulations
- SEMARNAT digitisation of procedures: https://www.ases-eco.com/blog/semarnat-tramites-ambientales
- PROFEPA 2026 closures: https://www.elimparcial.com/mexico/2026/06/21/profepa-clausura-tres-predios-en-el-edomex-tras-detectar-tala-cambio-ilegal-de-uso-de-suelo-y-un-aserradero-sin-permisos/ ; https://www.infobae.com/mexico/2026/06/21/profepa-clausura-tres-predios-en-el-estado-de-mexico-por-dano-a-ecosistemas-forestales/ ; https://www.nmas.com.mx/puebla/medio-ambiente/aserradero-ilegal-clausurado-zaragoza-puebla-madera-maquinaria-asegurada-falta-documentacion/
- Count: https://cienciasforestales.inifap.gob.mx/index.php/forestales/article/download/1347/3417?inline=1
- SNGF (government system): https://www.genexus.com/en/company/success-stories/semarnat

---

### Opportunity: Lot-dossier for cattle movements across shifting state screwworm rules

**Industry:**
Cattle traders (introductores), assembly corrals for export (corrales de acopio) and feedlots in northern Mexico.

**Buyer:**
The owner or office manager of an assembly corral or feedlot moving several lots per week across state lines or to the border.

**Trigger / Why now:**
- **2026-08-24:** the USDA reopened Douglas, AZ to Mexican cattle after more than a year of screwworm closures. Santa Teresa/Columbus followed, and Chihuahua reopened an export point in September 2026 [V].
- Mexico targets ~400,000 head exported in 2026 [V].
- **State rules are changing fast.** Nuevo León suspended the screwworm-treatment certificate for internal movements (2026-09) but still requires it at state borders [V]. Coahuila requires tracking in its own **SIMOGA** system with follow-up by REEMO issuers [V].

**Current workflow:**
1. Animals are tagged with SINIIGA ear tags, and the unit of production is registered in the PGN [V].
2. For each movement, a REEMO guide is issued at an authorised counter or by a vet, together with a zoosanitary movement certificate [V].
3. Depending on the states crossed: a state transit guide, a TB/brucellosis certificate, a screwworm treatment certificate, and tracking in a state system (SIMOGA) [V].
4. For export: corral contract with an authorised vet (MVRA) and the USDA inspection protocol [V].

**Pain:**
Lots stopped at checkpoints when one certificate is missing or expired. Rules differ by state and change within months. Each tag number is repeated across several documents [V for the rules; pain inferred, not interviewed].

**Existing solutions:**
- REEMO/SINIIGA, run by SENASICA and the livestock confederation, with issuance at association counters [V].
- Herd-management apps such as Control Ganadero [V].
- State systems (SIMOGA) [V].
- MVRA vets and association staff who assemble the paperwork [V].

**Offline evidence:**
Guides are issued at counters and by vets; state rules are announced through local press and association notices, not software vendors.

**Offline channel:**
Local livestock associations (asociaciones ganaderas locales, which run REEMO counters); CNOG; authorised vets (MVRA); cattle auctions in Sonora and Chihuahua [V that associations and MVRAs are in the workflow].

**Market count:**
Not found. Export assembly corrals are probably a few hundred (*estimate*). Feedlots and traders, low thousands (*estimate*).

**The gap:**
A per-lot checklist that knows, for origin state → destination state or border crossing, which documents are currently required, and tracks their validity against the tag list.

**Possible product:**
Upload the tag list once. The rules engine lists required documents per route, stores scans, flags expiries, and outputs a printable packet for the driver.

**MVP:**
Rules table for Sonora, Chihuahua, Coahuila, Nuevo León and Durango, plus a document checklist per lot. Sold to 5 corrals.

**Willingness to pay:**
Low for software. The association counters and MVRAs already do the work for a fee. More plausible as a tool *for* MVRA vets than for traders.

**Founder access:**
Needs a local with ranching contacts in the north; not realistic for a non-local.

**Risks:**
- Rules may stabilise once the screwworm crisis passes, so the "why now" decays.
- SENASICA/CNOG may extend REEMO to cover state documents.
- Small buyer pool.

**Kill condition:**
Interviews show the association counter already hands traders a complete packet per route.

**Score:** 4/10

**Sources:**
- Border reopening: https://www.elimparcial.com/mexico/2026/07/31/ante-la-proxima-reapertura-de-la-frontera-ganadera-por-douglas-arizona-mexico-busca-cerrar-2026-con-400-mil-reses-exportadas-a-eeuu-tras-mas-de-un-ano-de-crisis-por-el-gusano-barrenador/ ; https://grupoanimal.mx/estados/chihuahua-reanuda-exportacion-ganado-eu-gusano-barrenador
- Nuevo León change: https://mvsnoticias.com/nuevo-leon/2026/9/6/nuevo-leon-elimina-temporalmente-constancia-contra-gusano-barrenador-para-mover-ganado-744920.html
- Coahuila SIMOGA: https://www.elsiglodetorreon.com.mx/noticia/2026/coahuila-endurece-medidas-para-movilizacion-de-ganado-por-gusano-barrenador.html
- REEMO protocol: https://www.osiap.org.mx/senasica/sites/default/files/PROTOCOLO%20PARA%20LA%20EMISION%20DE%20GUIAS%20REEMO%20A1.pdf
- SINIIGA/REEMO/PGN: https://bmeditores.mx/secciones-especiales/siniiga-reemo-y-pgn-base-de-la-trazabilidad-ganadera/
- Herd app: https://apps.apple.com/co/app/control-ganadero/id664392203

---

### Opportunity: Landing-notice and fishing-guide keeper for fishing cooperatives

**Industry:**
Inshore (ribereña) fishing cooperatives and permit holders.

**Buyer:**
Cooperative secretary or administrator, or a federation office serving several cooperatives.

**Trigger / Why now:**
- US MMPA comparability findings apply from **2026-01-01** (in force through 2029). Fisheries without a finding are banned from the US market, and products from listed fisheries need a Certification of Admissibility [V]. Exporters therefore need clean landing records traceable to a fishery.
- CONAPESCA allows avisos and guías digitally through SIPESCA (e.firma login) [V].

**Current workflow:**
1. After each trip, the administrator fills in the aviso de arribo for boats under 10 t (paper original + 5 copies, plus logbook where applicable) [V].
2. The aviso is filed at the local CONAPESCA office, or in SIPESCA with e.firma [V].
3. Guías de pesca are issued to move product to buyers [V].
4. For exports to the US, the buyer/exporter assembles the origin documentation [V for the MMPA rule; workflow BK].

**Pain:**
Per-landing paperwork, permits at risk if production records lapse, and lost sales when buyers can't trace product. Evidence of the pain itself is indirect: there are reports of fraud and lost permits at CONAPESCA offices in Campeche [V headline only].

**Existing solutions:**
- SIPESCA (free) [V].
- Paper forms [V].
- Buyer/exporter staff and federation clerks [BK].

**Offline evidence:**
A 6-copy paper form; filing at fishing offices; the e.firma requirement is a barrier for small cooperatives.

**Offline channel:**
Cooperative federations; CONAPESCA local offices; seafood buyers who want clean records from suppliers [BK].

**Market count:**
~3,200 fishing cooperatives (2015 figure) [V]. In Carmen, Campeche alone: ~100 organisations and ~1,500 inshore boats [V].

**The gap:**
A cooperative-side record that generates the aviso, keeps a per-member, per-species production history, and hands buyers an export-ready origin file.

**Possible product:**
A simple per-landing form, mobile and offline-capable, that prints the aviso and produces SIPESCA-ready data plus a buyer traceability sheet.

**MVP:**
Printable aviso generator plus a monthly production summary for one federation.

**Willingness to pay:**
Very low from cooperatives. Exporters or federations might pay MXN 1–3k/month (*estimate*) for traceability.

**Founder access:**
Needs a local with coastal-community trust; not realistic for a non-local.

**Risks:**
- SIPESCA is free and improving.
- Very low ability to pay.
- Seasonal closures (vedas).

**Kill condition:**
Exporters say SIPESCA records already satisfy their US importers.

**Score:** 4/10

**Sources:**
- Aviso de arribo trámite: https://catalogonacional.gob.mx/FichaTramite?traHomoclave=CONAPESCA-01-023-B ; https://www.gob.mx/conapesca/documentos/aviso-de-arribo-de-embarcaciones-menores-de-10-toneladas-de-registro-bruto
- Digital option: https://www.fao.org/faolex/results/details/en/c/LEX-FAOC194576/
- MMPA 2026: https://www.fisheries.noaa.gov/action/implementation-fish-and-product-import-provisions-notification-comparability-findings ; https://www.strtrade.com/trade-news-resources/str-trade-report/trade-report/september/widespread-seafood-import-restrictions-to-be-imposed-starting-jan-1 ; https://www.govinfo.gov/content/pkg/FR-2025-09-02/pdf/2025-16680.pdf
- Cooperative count: https://sites.nicholas.duke.edu/xavierbasurto/files/2018/05/Resumen-Ejecutivo-DNOP.pdf
- Campeche: https://www.poresto.com/campeche/2022/8/26/embarcaciones-piratas-en-ciudad-del-carmen-mas-de-400-trabajan-con-concesiones-vencidas.html

---

## 3. Rejected

1. **Domestic-worker employers (IMSS).** Mandatory since 2023, but only 59–61k of ~2.5M workers are registered [V]. The substitutes are the free IMSS portal, free calculators (ilovecfdi) and **Symplifica**, a Colombian app live in Mexico covering registration, contracts and monthly payroll [V]. Weak enforcement means households don't pay.
2. **Scrap-metal dealers.** No Mexican seller-ID register or 2025–26 reform was found [V negative]. CDMX's 2026 cable-removal law is aimed at telecom companies, not scrap buyers [V].
3. **Pawnbrokers.** 4,042 PROFECO-registered shops [V]. The obligation is an annual renewal, the AML side is crowded (see country report), and pawn POS software exists [BK].
4. **Water-refill shops (NOM-201).** Weekly coliform tests and logs [V], but **AquaOS** already publishes a NOM-201 guide and a free COFEPRIS log template aimed at these shops [V]. Revenue per shop is tiny.
5. **Pest control (NOM-256).** A per-service certificate is mandatory [V], but the trade is not quiet and generic field-service apps cover it [BK].
6. **Mezcal palenques.** The certifier (CRM/COMERCAM) inspects and certifies each lot [V], so it is effectively the substitute.
7. **Hunting ranches (UMAs).** About 926 UMAs and annual reports only [V]; too few buyers.
8. **H-2A recruitment agencies.** STPS authorisation is valid 5 years and the reporting is infrequent [V]; few buyers.
9. **Well drillers.** Per-well CONAGUA permits handled by consultants [V]; no recurring driller obligation found.
10. **Honey exporters (watchlist, not killed).** EU honey labelling (2026-06-14) and Art. 118 antimicrobial rules (2026-09-03) are real triggers [V]. But only ~25 firms were authorised for EU export (older figure) [V], so there are too few buyers. Revisit if collectors (acopiadores) must hold per-beekeeper treatment declarations.

## 4. Method notes

- **Worked:** Spanish regulator vocabulary such as "libro de registro de entradas y salidas", "aviso de arribo", "REEMO", "NOM-201 bitácora" and "Registro Público de Casas de Empeño". These led straight to official formats, CONAMER procedure records and DOF lists. Enforcement queries ("PROFEPA clausura aserradero 2026", "Profeco suspende") gave dated proof of pain. Local press (El Imparcial, El Siglo de Torreón, MVS) carried the fast-moving state livestock rules.
- **Didn't work:** national counts. DENUE totals, the number of authorised forest centres and the CRM producer count are not in search snippets, and WebFetch is blocked. Scrap-dealer and well-driller registers returned Argentine or Costa Rican results. Searches for competitor products in quiet trades mostly return nothing, which is weak evidence of absence.
- **Pattern for Mexico:** quiet trades answer to federal agencies with free portals or counters (SEMARNAT, CONAPESCA, SENASICA). The usual substitute is therefore the authority itself or a licensed intermediary (PSTF, MVRA vet, certifier), not a stationer. The intermediary is the realistic customer.
