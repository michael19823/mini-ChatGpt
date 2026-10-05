# Paraguay: Offline (Quiet) Industries Pass

Research date: 2026-10-05. Budget: 20 WebSearch calls, all used. WebFetch not used. Most queries were
in Spanish. Anything marked "unverified" or "estimate" was not confirmed by a source. This pass does
not repeat the opportunities in `research/countries/paraguay.md`: the Marangatu accountant workbench,
SIAP/SIGOR cattle sync and DINAVISA controlled drugs.

**Summary:** Paraguay's quiet industries are mostly informal and low-margin. The one with real scale
and a regulator is the **private water-provider sector**: about 5,800 aguaterías, juntas de saneamiento
and neighbourhood commissions under ERSSAN. But Paraguayan vendors already sell billing software for
it. The **scrap metal and PET trade** has a new national register coming, but whether the law has been
promulgated is unverified. Everything else is too informal, too small, or already handled by a free
state system.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Private water providers (aguaterías) | ERSSAN regulation (Law 1614/2000, Decree 18880/2002): water-quality analyses, documents submitted to ERSSAN (reported as monthly), ERSSAN charge on bills, tariffs need state approval. The monthly bill per household is now subject to SIFEN e-invoicing as groups are designated | Software sold through classified ads (Clasipar, Hendyla). ERSSAN opened proceedings against providers that did not submit lab analyses | ~5,800 providers including juntas and commissions; 400+ in CAPA (ERSSAN data via InfoNegocios) | **Opportunity (moderate)** | Large, regulated, monthly per-customer workflow. Local incumbents exist (AGUASYS, MejorSys, RedTouch) |
| Juntas de saneamiento (community water boards) | Same ERSSAN quality rules; supported by SENASA (the sanitation service) in places under 10,000 people | Volunteer boards, rural | Included in the ~5,800 above | Folded into the aguatería idea | Non-profit with volunteer treasurers. They will pay little, but incumbents already target them too |
| Scrap metal and PET collectors (chatarreros, acopiadores) | New law regulating trade in ferrous and non-ferrous metal waste and PET. It creates a national register under the MIC (Ministry of Industry and Commerce), with fines of 100–5,000 daily minimum wages and suspension of registration. It was sanctioned by Deputies on 22 Jul 2025 and sent to the Executive | No register exists yet. The trade is described as a black market tied to cable theft | Unknown (no official count found) | **Opportunity (conditional)** | A new mandatory register is coming, but promulgation and implementing rules are unverified |
| Pesticide applicators (aerial and tractor) | Decree 2048/04: register with SENAVE (the plant-health agency) and keep application records that count as sworn statements. Law 3742/09 Art. 59: application certificate | Paper or "physical or digital" record books. No Paraguayan software listings found | Unknown. SENAVE has 4,182 registered formulations (agribrasilis); no applicator count found | **Opportunity (weak)** | Per-job and mandatory, but enforcement evidence is thin and farm-management apps may already cover it |
| Domestic workers / household employers | IPS registration (employer and worker) in REI, contributions of 9% (worker) + 16.5% (employer), full minimum wage (Law 5407/15), part-time contract PDF uploaded to REI (Law 6339/19, MTESS Res. 2660/19) | Only ~7% are insured. MTESS runs door-to-door formalization visits | ~200,000–280,000 workers, of whom ~17,000–20,000 are insured (Última Hora) | Rejected | Formal households are few. Free calculators plus a free IPS portal. Consumers would have to change behaviour |
| Pawnbrokers, jewellers, gold buyers | SEPRELAD (the anti-money-laundering office) "sujeto obligado" registration in SIRO since 2022–2023; transaction reporting | Web registration, then supporting documents filed within 10 days | Unknown | Rejected | Few operators. The AML reports are filed through SEPRELAD's own system, so there is little workflow to own |
| Money changers (cambistas) | BCP (central bank) registration and a carnet issued by the Superintendencia de Bancos | ~1,200 operate informally | 140 registered, only 15 currently authorized (Última Hora, 2026) | Rejected | 15 legal buyers. The rest are informal on purpose |
| Livestock auctions and consignors (ferias, rematadores) | SENACSA transport guide required before any auction; venue authorization (Decree 5655/05) | Guides issued at SENACSA offices | Unknown | Rejected | Already covered by SIGOR/SIAP in the country report. The state system is free |
| Beekeepers | SENACSA certification for export, extraction-room approval | Mostly family plots of 5–10 hives | ~15,000 beekeepers, a few with 100–500 hives (InfoNegocios) | Rejected | Subsistence scale, with only a handful of exporters |
| Charcoal producers (carboneros) | INFONA (forestry institute) permits and transport guides for charcoal | Guides bought at INFONA regional offices; seizures of loads without guides (ABC) | Unknown | Not assessable | Couldn't verify the current INFONA guide system within budget |
| Well drillers | No driller register found (MADES/ERSSAN) | — | Unknown | Not assessable | No obligation found |
| Moto-taxis, tattoo studios, market vendors | Municipal licences | — | Unknown | Not screened | Budget; municipal and informal, so unlikely to pay |

---

## 2. Strongest opportunities

### Opportunity: SIFEN + ERSSAN compliance layer for aguaterías

**Industry:**
Private drinking-water providers (aguaterías) and, secondarily, juntas de saneamiento

**Buyer:**
The owner-manager of a family aguatería (well, elevated tank, a few hundred to a few thousand
connections), or the accountant who keeps its books. Some billing vendors explicitly target
"contadores que administran estas instituciones" (accountants who run these bodies).

**Trigger / Why now:**
- **SIFEN e-invoicing:** DNIT is designating new mandatory groups from June 2026 to September 2027
  (see the country report). For an aguatería that issues a monthly bill per connection, this
  means hundreds or thousands of electronic documents every month instead of a pre-printed
  timbrado. Exactly which aguaterías fall in which group is unverified.
- **ERSSAN enforcement:** ERSSAN has opened proceedings against providers that did not submit lab
  analyses.
- **Cost squeeze:** the sector is under pressure from costs it cannot pass on. Tariffs need state
  approval, and the CAPA president says investing in an aguatería "has no profitability". That
  raises the value of cutting admin time and getting paid faster.

**Current workflow:**
1. A meter reader walks the route and writes readings on paper or in a phone app.
2. Readings are keyed into the local billing system (e.g. AGUASYS). It calculates consumption,
   excess, IVA and the ERSSAN amount.
3. Bills are printed and delivered, and payment is collected at the counter, through a collector,
   or through payment networks (unverified).
4. Separately, water samples go to a lab, and the results and documents are submitted to ERSSAN
   (reported as monthly).
5. The accountant reconciles billing against the IVA filing in Marangatu.

**Pain:**
- The work repeats every month for every connection.
- Missing lab analyses lead to ERSSAN proceedings (one documented case, in ABC Color).
- E-invoicing turns each monthly bill into a signed XML submitted to DNIT. That is a new technical
  burden for family operators running older desktop software.
- No direct operator complaints were found (unverified).

**Existing solutions:**
- **AGUASYS (EDYDSI SA):** advertised as "the most used system" for aguaterías and juntas. It
  handles readings, billing, IVA and the ERSSAN charge.
- **MejorSys (EDYDSI):** the same vendor's newer app.
- **RedTouch "Sistema de Gestión para Aguaterías":** a meter-reading app, georeferenced customers.
- **Freelance-built systems** advertised on Hendyla and Clasipar.
- **Generic SIFEN issuers:** FactPy, BillPy, Sifende, KuatiApp, and DNIT's free e-Kuatia'i.

**Offline evidence:**
- Vertical software is sold through classified-ad sites (Clasipar, Hendyla) rather than SaaS
  directories.
- The operators are family businesses represented by a trade chamber.
- ERSSAN enforcement concerns paper lab reports.

**Offline channel:**
- **CAPA (Cámara Paraguaya del Agua):** 400+ member aguaterías. Approach it for a member deal or a
  talk at its assembly.
- **Water-analysis labs** that every provider must use. They are a natural referral partner for
  ERSSAN reporting.
- **Accountants** who already keep aguatería books.
- **Phone or WhatsApp outreach** from ERSSAN's provider list (whether the list is public is
  unverified).

**Market count:**
~5,800 providers including juntas and commissions (ERSSAN data cited by InfoNegocios). Of these,
400+ are CAPA members. An older ABC article gives 2,800 aguateras. The number of commercial,
taxpaying aguaterías is probably in the low thousands (estimate).

**The gap:**
Whether AGUASYS and the others already issue SIFEN e-invoices in batch is unverified. If they don't,
the gap is a bridge that takes the billing run (CSV or database export) and does three things:
- mass-issues the signed DEs (electronic documents) to SIFEN, handling rejections;
- sends each KuDE (the printable invoice) by WhatsApp;
- keeps an ERSSAN compliance calendar and file of lab analyses per well.

If the incumbents already do SIFEN, the remaining gap is only the ERSSAN lab-analysis tracker,
which is too thin to sell alone.

**Possible product:**
A "monthly close" add-on for water providers. Import the billing run, batch-issue SIFEN e-invoices,
send KuDE and payment links by WhatsApp, and track ERSSAN sampling dates and lab reports per source.

**MVP:**
- CSV import of the billing run.
- Batch SIFEN issuance through an existing signing library or API (e.g. FactPy's API).
- A rejection queue.
- A per-well sampling calendar with PDF upload.

**Pricing hypothesis:**
USD 20–60/month per aguatería, scaled by connections, or about USD 0.02–0.05 per DE (estimate).
Willingness to pay: owners will likely pay for software that their accountant or vendor sets up
for them, i.e. software plus onboarding service.

**How to find first customers:**
CAPA members, water labs and accountants, as listed under "Offline channel" above.

**Risks:**
- Incumbent vendors (EDYDSI and others) add SIFEN, which is likely already in progress (unverified).
- Juntas may be exempt from or late to SIFEN.
- Tariff caps squeeze budgets.
- **Founder access:** a non-local founder would struggle. The sale is in Spanish (and Guaraní in
  rural areas), relationship-based, and runs through CAPA. It needs a local partner, ideally an
  accountant or one of the labs.

**Kill condition:**
- AGUASYS, MejorSys or RedTouch already ship batch SIFEN issuance, or
- most aguaterías are not yet in a mandatory SIFEN group and can keep pre-printed timbrados past 2027.

**Score:** 5/10

**Sources:**
- https://infonegocios.com.py/default/el-negocio-del-agua-en-paraguay-mas-de-5-800-prestadores-privados-enfrentan-desafios-de-costos-rentabilidad-y-demanda-creciente
- https://www.abc.com.py/edicion-impresa/economia/hay-2800-aguateras-y-solo-cubren-la-mitad-del-pais-1225258.html
- https://www.abc.com.py/nacionales/dudan-de-calidad-del-agua-1218702.html
- https://www.cepal.org/sites/default/files/news/files/harry_guth_paraguay.pdf
- https://www.bacn.gov.py/leyes-paraguayas/1694/general-del-marco-regulatorio-y-tarifario-del-servicio-publico-de-provision-de-agua-potable-y-alcantarillado-sanitario-para-la-republica-del-paraguay
- https://www.edydsi.com/aguasys-2020
- https://clasipar.paraguay.com/electronica/computadoras-notebooks/aguasys-el-sistema-mas-utilizado-para-su-aguateria-o-junta-de-saneamiento-533636
- https://redtouch.com.py/sistema-para-aguateria/
- https://www.hendyla.com/servicios/consultoria/sistema-para-juntas-de-saneamiento-y-aguateria-privadas-830858.html
- https://factpy.com/

---

### Opportunity: MIC scrap and PET register book for acopiadores

**Industry:**
Scrap metal and PET collection, storage and export (chatarrerías, acopiadores, recyclers)

**Buyer:**
The owner of a scrap yard or recycling depot that buys from street collectors and sells to
exporters or smelters.

**Trigger / Why now:**
- The law "que regula el comercio de residuos de metales ferrosos y no ferrosos, y plásticos de
  tereftalato de polietileno (PET)" was sanctioned by the Chamber of Deputies on 22 Jul 2025 and
  sent to the Executive.
- It creates a National Register under the MIC covering collection, storage, processing,
  re-smelting and export.
- Fines are 100–5,000 daily minimum wages, plus suspension and then cancellation of registration.
- Exports may not be priced below 70% of a market value set by the MIC.
- **Status unverified:** whether it was promulgated or vetoed, and whether implementing rules exist.
  I found no news of either.
- The driver is copper cable theft. The UIP (the industrial union) backs the law.

**Current workflow:**
Today (estimate) there is no register. Yards buy for cash with informal notes, if any. If the law
is implemented, yards will need to:
1. register with the MIC;
2. most likely record each purchase and its seller (whether the bill requires this is unverified;
   it is typical of similar laws in Argentina and Mexico);
3. document the origin of every export lot.

**Pain:**
- Very large fines relative to yard revenue.
- Registration can be suspended, which halts trading.
- Exporters will demand documented origin from yards to protect their own registration.

**Existing solutions:**
- None specific found.
- Generic POS and Excel.
- Paper purchase books (stationery).
- Customs brokers handle the export side.

**Offline evidence:**
- An informal, cash trade described in the press as a black market.
- No register exists yet.
- No software vendors found.

**Offline channel:**
- The MIC's new public register, once it exists.
- Exporters and smelters who need clean origin documentation and could require it of their
  suppliers.
- The UIP and recyclers' associations (names unverified).
- Physical visits to yard clusters.

**Market count:**
Unknown. No official count of scrap yards was found. The register itself would become the count.

**The gap:**
A simple purchase log with seller ID, a photo of the material and weight, plus a lot-origin report
for the MIC and for the exporter. Whether the law requires per-purchase records depends on the
implementing rules, which are not yet known.

**Possible product:**
A tablet app at the yard scale. It captures the seller's cédula (ID), a photo and the weight for
each purchase, and generates the MIC register report and an origin certificate for each lot sold.

**MVP:**
A mobile form, daily purchase register PDF, and a lot report.

**Pricing hypothesis:**
USD 15–40/month per yard (estimate). Willingness to pay is low unless the MIC enforces the
register. Many yards may want to avoid traceability altogether.

**How to find first customers:**
The MIC register, via phone or WhatsApp, once it is published. Exporters as the paying channel.

**Risks:**
- The law may be vetoed or never get implementing rules.
- The MIC may build its own portal.
- The trade is deliberately informal.
- Founder access: needs a local.

**Kill condition:**
- The law was vetoed or has not been implemented, or
- the implementing rules require no per-transaction record.

**Score:** 3.5/10 (watchlist; recheck when implementing rules appear)

**Sources:**
- https://diputados.gov.py/noticias/noticias/175
- https://silpy.congreso.gov.py/web/expediente/133424
- https://www.senado.gov.py/index.php/noticias/noticias-comisiones/15006-propuesta-de-ley-apunta-a-regular-el-comercio-de-desechos-de-metales-ferrosos-y-no-ferrosos-2025-04-21-15-13-09
- https://www.abc.com.py/nacionales/2025/04/21/contrabando-de-cobre-dictaminan-a-favor-de-proyecto-de-ley-que-regula-venta-de-residuos/
- https://www.rdn.com.py/2024/09/06/uip-respalda-ley-contra-robo-de-cables-y-comercio-ilegal/

---

### Opportunity: SENAVE application record book for contract applicators

**Industry:**
Agricultural spraying contractors (aerial and tractor-mounted), mainly in the soy belt (Alto
Paraná, Itapúa, Canindeyú)

**Buyer:**
The owner of an aerial-application firm or a custom-spraying contractor serving several farms.

**Trigger / Why now:**
- **Standing rules:** Decree 2048/04 requires applicators to register with SENAVE and to keep
  application records that count as sworn statements. Law 3742/09 (Art. 59) adds a SENAVE
  application certificate.
- **Weak trigger:** there is no new 2025–2026 rule. The only possible why-now is EUDR and buyer
  traceability pressure on soy, unverified for spraying records.

**Current workflow:**
1. Agronomist's prescription (needed for red-band products).
2. Application.
3. A handwritten or spreadsheet record of field, crop, product, dose, date, decision-maker and
   operator.
4. The book is kept for SENAVE inspection.
5. A separate invoice to the farmer.

**Pain:**
- The record is per job and has sworn-statement status.
- Fines are 10–100 daily minimum wages (the compendium of SENAVE rules).
- Drift complaints near communities are a known public issue (not verified with a 2026 source).

**Existing solutions:**
- Paper books and spreadsheets.
- Farm-management apps used by large soy growers (Brazilian and Argentine ones are likely;
  unverified in Paraguay).
- GPS logs from aircraft flow controllers.

**Offline evidence:**
- No Paraguayan applicator software listings were found.
- The SENAVE rules state "registros físicos o digitales" (physical or digital records).

**Offline channel:**
- SENAVE's register of aerial applicators.
- Agro-input distributors that sell the products.
- The Expo Santa Rita and Innovar farm fairs (fair names from general knowledge; unverified for 2026).

**Market count:**
Unknown. No applicator count was found.

**The gap:**
One job record that produces the SENAVE sworn record, the farmer's invoice data and a
proof-of-application PDF.

**Possible product:**
A mobile job sheet for spraying contractors with SENAVE-format record export.

**MVP:**
A job form with product master data (SENAVE registered formulations), a PDF record book, and a
per-farm history.

**Pricing hypothesis:**
USD 20–50/month per contractor (estimate).

**How to find first customers:**
SENAVE's applicator register and input distributors, as listed under "Offline channel" above.

**Risks:**
- Enforcement looks lax.
- Large growers spray with their own equipment, so the record is in-house.
- Agronomy apps already cover it.
- Founder access: needs a local.

**Kill condition:**
- SENAVE does not actually inspect application records, or
- the main farm-management platforms in Paraguay already export them.

**Score:** 3.5/10

**Sources:**
- https://informacionpublica.paraguay.gov.py/public/1779589-Compendio_Normativas_SENAVE1pdf-Compendio_Normativas_SENAVE1.pdf
- https://faolex.fao.org/docs/pdf/par47933.pdf
- https://agribrasilis.com/?p=38646
- https://www.contrataciones.gov.py/reporte/convocatoria/1f12cebf-9508-623c-8ad5-7b59741ef01f/consultas.pdf

---

## 3. Rejected

- **Household employers of domestic workers.** About 7% of 200,000–280,000 workers are insured. That
  leaves ~17,000–20,000 formal households, which are consumers, not businesses. Substitutes are
  the free IPS REI portal, free calculators (hacecuentas.com) and the family accountant. MTESS runs
  door-to-door formalization, but the low formalization rate shows enforcement is weak.
- **Pawnbrokers and jewellers (SEPRELAD SIRO).** A small population, and SEPRELAD's own system is
  the reporting channel.
- **Money changers.** Only 15 BCP-authorized changers; ~1,200 are informal by choice.
- **Livestock auctions and consignors.** SENACSA's free guide and SIGOR system; overlaps with the
  country report.
- **Beekeepers.** ~15,000, mostly with 5–10 hives; there is no money in it.
- **Charcoal (INFONA guides) and well drillers.** I could not verify a current obligation or
  system, so they were not assessable rather than rejected on merit.

## 4. Method notes

- **Worked:** Spanish queries naming the regulator plus the trade (ERSSAN + aguaterías, SEPRELAD +
  joyerías, BCP + cambistas). Paraguayan news sites (ABC, Última Hora, InfoNegocios) carry
  regulator counts. Classified-ad sites (Clasipar, Hendyla) exposed the real software substitutes
  for a quiet trade.
- **Didn't work:** INFONA, SENAVE and well-driller queries returned mostly Argentine, Mexican or
  Chilean results; extended mode did not help. No public operator registers were findable via
  search; they would need WebFetch or direct portal access.
- **Overall:** Paraguay's quiet sectors are dominated by informality and free state systems. The
  aguatería segment is the only one with scale, a regulator and a paying trade body. Even there,
  the first step is to check whether AGUASYS already does SIFEN.
