# Paraguay: Opportunity Research

Research date: 2026-10-05. Budget: 11 WebSearch calls (small/medium market). WebFetch not used.
Local-language (Spanish) searches used throughout. Anything marked "unverified" or "estimate" was
not confirmed by a source.

**Accessibility:** Paraguay has no US, EU or UK sanctions on software or IT services, no internet
restrictions and no data-localization rule found that would block a foreign solo founder. Card
and USD payments are workable. A local partner or accountant would still be needed for invoicing
local customers once SIFEN e-invoicing is mandatory for every taxpayer. **Accessible.**

**Big picture:** Paraguay's 2026–2027 regulatory triggers are concentrated in three places:
1. **Tax:** the DNIT (the tax authority that replaced the SET in 2024) is phasing in mandatory SIFEN e-invoicing in six groups, from June 2026 to September 2027. State suppliers already had to switch on 2 January 2026.
2. **Cattle:** mandatory individual cattle identification (SIAP, Law 7221/2023).
3. **Exports:** EUDR-driven soy and beef traceability.

Most of the obvious pain is already claimed:
- **E-invoicing:** many vendors plus a free government tool.
- **EUDR:** centralized industry and government platforms.
- **Cattle ID:** a state-run system.

The remaining room is in **post-e-invoicing accounting work** and **narrow monthly regulator declarations**.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| All taxpayers / software | SIFEN e-invoice issuance (groups 19–24, Jun 2026–Sep 2027) | Too competitive | The free government tool (e-Kuatia'i), FacturaSend, EDICOM, local ERPs and open-source SIFEN libraries already cover it |
| Accountants (estudios contables) | Monthly purchase/sales registration (RG 90) in Marangatu across many client RUCs | **Opportunity** | E-invoicing sends every received invoice into a "Compras a Imputar" queue that must be classified and confirmed per client, every month |
| State suppliers | Mandatory e-invoicing on public contracts from 2 Jan 2026 (RG 41/2025) | Rejected | It is the same e-invoicing product, just a subsegment, and it is commoditized |
| Cattle ranchers | SIAP individual RFID ID plus SIGOR movements and vaccinations (SENACSA) | Opportunity (weaker) | Mandatory and recurring, but the state system is free and most producers are small; mid/large ranches are the only payers |
| Soy / beef exporters | EUDR geolocation traceability (SISE-UE) | Rejected | A centralized industry and government system, with a few large buyers (exporters and crushers) |
| Pharmacies | Monthly sworn statement of controlled-drug movements to DINAVISA, plus new unit traceability (Res. 91/2026) | Opportunity (narrow) | A monthly, mandatory declaration done on a Word/manual form, but the market is small and the competing pharmacy POS systems are unverified |
| Employers / payroll bureaus | IPS REI monthly payroll plus annual MTESS planillas | Watchlist | The workflows are mandatory, but REI is free and adequate, MTESS is annual, and local payroll vendors exist (not mapped) |

---

## Opportunity: Marangatu "Compras a Imputar" workbench for accounting firms

**Industry:**
Accounting / tax outsourcing (estudios contables, independent accountants)

**Buyer:**
Owners of small accounting firms (1–10 staff) who run monthly IVA/IRE/IRP compliance for 20–200 client RUCs. A second buyer is the in-house accountant at mid-size companies.

**Trigger / Why now:**
- DNIT RG 52 makes SIFEN e-invoicing mandatory for six new taxpayer groups between 1 Jun 2026 and 1 Sep 2027. Pre-printed and self-printed timbrados lose validity the day after each group's start date.
- RG 41/2025 forces all state suppliers onto e-invoicing from 2 Jan 2026.
- DNIT reports more than 50,000 e-invoicers. As a result, nearly every purchase invoice a client receives will arrive as an electronic DE in Marangatu's "Compras a Imputar" queue, under RG 90 as amended by RG 12/2024.
- Marangatu already cross-checks issued KuDE against Form 501/IVA declarations and flags inconsistencies.

**Current workflow:**
1. For each client RUC, the accountant logs into Marangatu with that client's credentials.
2. They open "Declaraciones Informativas / Gestión de Comprobantes Informativos", then "Compras a Imputar" or "Ventas a Imputar".
3. They review each electronic or virtual receipt and decide whether it goes to IVA, IRE and/or IRP, or is excluded (personal, non-deductible, or a duplicate of a manually registered paper invoice).
4. They confirm the records, then register by hand any remaining paper or foreign receipts, one by one or by file import.
5. They re-key or export the same purchases into their own accounting system (local ERP or Excel) for the books and the IVA calculation.
6. They file the IVA/IRE returns, and later fix the inconsistencies Marangatu flags against what was issued.

**Pain:**
- The work repeats every month for every client RUC.
- It is done inside a government portal with per-RUC logins.
- Classification is judgment-heavy (which tax each purchase goes to).
- Errors trigger DNIT inconsistency flags and penalties.
- The volume of electronic receipts to classify will rise sharply as groups 19–24 go live.
- An official DNIT step-by-step guide exists for both manual registration and for obtaining electronic receipts, which shows the workflow is manual and portal-driven.
- I found no direct user complaints, so the pain is inferred from the workflow (unverified).

**Existing solutions:**
- Marangatu itself (free, one RUC at a time, no bulk classification rules).
- Local accounting ERPs with RG 90 import/export files (vendors not mapped; assume they exist).
- E-invoicing vendors (FacturaSend, EDICOM): these focus on issuing, not on classifying received invoices.
- Excel macros and in-house RPA built by larger firms (assumed, unverified).
- The manual labour of junior staff.

**The gap:**
No product found that gives a firm one multi-client inbox of received DEs across all client RUCs, with:
- reusable classification rules per supplier and per client (supplier X always goes to IVA-IRE 100%, supplier Y to IRP),
- duplicate detection against paper receipts that were already registered,
- an export back to the RG 90 import file and to the firm's accounting software.

**Possible product:**
A web workbench where the firm uploads (or, later, syncs) each client's received-DE list. A rules engine pre-classifies every line for IVA/IRE/IRP. A human approves only the exceptions. The tool outputs the RG 90 import file and an accounting-ledger CSV.

**MVP:**
- Upload of the Marangatu "Compras a Imputar" export (or the SIFEN XMLs) per client.
- Per-supplier rule memory.
- An exception queue.
- RG 90 import-file generator.
- No portal automation in v1, to avoid credential and legal risk.

**Pricing hypothesis:**
USD 30–80/month per firm for up to 50 RUCs, or about USD 1–2 per client RUC per month (estimate).

**How to find first customers:**
- Colegio de Contadores del Paraguay and the Consejo de Contadores Públicos member lists (existence assumed; directory access unverified).
- Facebook and WhatsApp groups of Paraguayan accountants.
- DNIT training events on SIFEN.
- Firms advertising "liquidación de IVA" in Asunción, Ciudad del Este and Encarnación.

**Risks:**
- DNIT may add bulk or auto-imputation features to Marangatu.
- Local ERP vendors may add the same feature.
- The market is small: the number of firms is unverified, plausibly 1,000–3,000 (estimate).
- Pricing power is low, because accountant fees are low.
- Data sensitivity: firms would be uploading client tax data.

**Kill condition:**
- Interviews show that the "Compras a Imputar" export cannot be extracted in a usable structured form, or
- that the main local accounting systems already import it with rule-based classification, or
- that firms spend under 15 minutes per client per month on it.

**Score:** 6/10

**Sources:**
- https://www.dnit.gov.py/web/portal-institucional/w/dnit-designa-nuevos-facturadores-electr%C3%B3nicos
- https://edicomgroup.com/es/blog/como-es-la-factura-electronica-en-paraguay
- https://www.dnit.gov.py/web/portal-institucional/w/dnit-establece-obligatoriedad-de-adhesi%C3%B3n-al-sifen-para-proveedores-del-estado
- https://www.dnit.gov.py/web/e-kuatia/w/paraguay-supera-los-50.000-facturadores-electr%C3%B3nicos-y-avanza-en-la-digitalizaci%C3%B3n-tributaria
- https://www.ferrere.com/en/news/se-modifican-disposiciones-sobre-el-registro-electronico-de-comprobantes-electronicos/
- https://www.dnit.gov.py/en/web/portal-institucional/w/resolucion-general-dnit-n-12/2024
- https://www.dnit.gov.py/documents/20123/203596/Gu%C3%ADa+Paso+a+Paso-C%C3%B3mo+obtener+comprobantes+Electr%C3%B3nicos+y+Virtuales+RG.N%C2%B090.pdf/df88997f-e9e6-b7b2-127e-e4f9373b4cbb?t=1684165228356
- https://www.dnit.gov.py/documents/44828/0/Guia+Paso+a+Paso-+Registro+manual+de+comprobantes+a+trav%C3%A9s+del+sistema+Marangatu.pdf/5dc720af-2425-187a-ff92-0bbfbbfbb578?t=1682430319323

---

## Opportunity: SIAP/SIGOR sync for mid-size and large cattle ranches

**Industry:**
Cattle ranching (beef export chain)

**Buyer:**
The administrator of an estancia with more than 1,000 head, or the livestock consultancies and veterinarians who manage several estancias.

**Trigger / Why now:**
- Law 7221/2023 makes individual animal identification mandatory: SIAP, with a visual tag plus an RFID button, phased in since February 2024.
- SENACSA reports 2.78 million animals identified and more than 75,000 producers registered in 2025.
- Calf identification campaigns run on deadlines (the 2026 deadline was extended to 10 July).
- SENACSA wants to merge SIGOR (mandatory, group-level: vaccinations and movements) with SITRAP (voluntary, individual, EU market) into one platform. That transition changes the data formats ranches must supply.

**Current workflow:**
1. During each identification campaign, staff tag the calves and read the RFID with a wand reader.
2. They export the reader file and upload or key it into the SIAP Módulo Ganadero.
3. Separately, they record vaccinations and movement guides (guías) in SIGOR through SENACSA offices or the portal.
4. They maintain their own herd records in a spreadsheet or in ranch software, and reconcile those with SENACSA's balances.

**Pain:**
- Mandatory, deadline-driven campaigns.
- Duplicate entry between the reader, ranch records and SENACSA systems.
- Movement and vaccination records gate sales to slaughterhouses (frigoríficos).
- No direct complaint evidence found (unverified).

**Existing solutions:**
- SENACSA's free SIAP/SIGOR modules.
- Scale and reader vendors' herd software (Gallagher/Tru-Test-type ecosystems).
- Brazilian and Argentine herd-management SaaS sold regionally (not verified for Paraguay).
- Livestock consultants doing the work by hand.

**The gap:**
A bridge from reader files and ranch records into the SENACSA formats, with reconciliation of herd balances against the official records. Whether this gap exists depends on whether SENACSA accepts file uploads at all, which is unverified.

**Possible product:**
A herd ledger that ingests RFID reader exports, keeps per-animal and per-lot history, and produces SIAP/SIGOR-ready uploads and reconciliation reports.

**MVP:**
Reader-CSV import, a herd balance by category per establishment, and a SENACSA-format export plus a discrepancy report.

**Pricing hypothesis:**
USD 40–150/month per estancia, scaled by head count (estimate).

**How to find first customers:**
- Asociación Rural del Paraguay (ARP) regional branches and the Expo Mariano Roque Alonso fair.
- FUNDASSA (the foundations that run vaccination campaigns).
- Consultant veterinarians.

**Risks:**
- SENACSA may build the integration itself, especially in the planned unified platform.
- No API may be available.
- The market is rural and relationship-driven, sold in Spanish and Guaraní.
- Most of the 75,000 producers are too small to pay.

**Kill condition:**
- SENACSA offers no file or API ingestion, so everything must be keyed in the portal, or
- the existing reader-vendor software already exports SIAP-compatible files.

**Score:** 5/10

**Sources:**
- https://infonegocios.com.py/amp/infoganaderia/con-trazabilidad-record-y-gestion-optimizada-senacsa-proyecta-un-2026-mas-eficiente-y-tecnologico
- https://infonegocios.com.py/infoganaderia/tener-la-identificacion-individual-de-los-animales-es-el-paso-inicial-para-lograr-una-trazabilidad-total
- https://www.lanacion.com.py/negocios/2026/07/01/senacsa-prorrogo-hasta-el-10-de-julio-el-registro-del-siap/
- https://www.lanacion.com.py/negocios/2025/12/30/identificacion-de-terneros-de-la-especie-bovina-iniciara-el-1-de-febrero/
- https://www.abc.com.py/economia/2025/02/15/identificacion-animal-arranco-con-el-pie-derecho-dice-fundassa/

---

## Opportunity: Controlled-drug monthly declaration and traceability helper for pharmacies

**Industry:**
Pharmacies (retail, small chains)

**Buyer:**
The regente (responsible pharmacist) or owner of an independent pharmacy or small chain.

**Trigger / Why now:**
- DINAVISA requires each establishment to declare monthly the income, outflows and balance of every controlled substance or product, within the first 10 business days of the month.
- The form for this sworn statement is published as a Word document.
- DINAVISA Res. 91/2026 makes unit-level identification (GTIN plus Data Matrix or QR) mandatory for tirzepatide products from 1 July 2026.
- DINAVISA has announced a national traceability system, which signals more serialized molecules are coming.
- DINAVISA's 2026 report also mentions a new regulation for distance (online) medicine sales.

**Current workflow:**
1. The pharmacy keeps a controlled-substances book and its prescriptions.
2. Each month it totals income, outflows and balance per product, usually from the POS or by hand.
3. It fills in the sworn-statement form and submits it to DINAVISA by the 10th business day.
4. It answers inspections with paper evidence.

**Pain:**
- Monthly, mandatory, with sanction risk.
- Done on a manual Word/paper form.
- DINAVISA is actively investigating diversion (it reported tracing irregular fentanyl sales in July 2026), which raises enforcement pressure.

**Existing solutions:**
- Pharmacy POS/ERP systems in Paraguay (vendors not verified).
- Spreadsheets.
- Regulatory consultancies (asuntos regulatorios firms).

**The gap:**
If the POS systems do not generate the DINAVISA form, an add-on is needed: take the POS sales/purchases export, map products to controlled-substance lists, and produce the monthly declaration plus a serial-number scan log.

**Possible product:**
A controlled-substances ledger: import POS movements, auto-tag controlled items, run a monthly declaration generator, and keep a scan log for serialized units.

**MVP:**
CSV import, a controlled-product master list, the monthly form generator, and balance reconciliation.

**Pricing hypothesis:**
USD 15–30/month per pharmacy (estimate).

**How to find first customers:**
- DINAVISA lists of authorized pharmacies (existence assumed).
- Círculo de Farmacéuticos / pharmacy owners' associations (unverified).
- Distributors.

**Risks:**
- Possibly a small number of pharmacies (unverified).
- DINAVISA may launch an online submission system.
- POS vendors may add the form cheaply.
- Low willingness to pay.

**Kill condition:**
- The dominant pharmacy POS already outputs the DINAVISA declaration, or
- DINAVISA moves to a portal fed directly by distributors.

**Score:** 4.5/10

**Sources:**
- https://dinavisa.gov.py/psicotropicos-y-estupefacientes/
- https://dinavisa.gov.py/wp-content/uploads/2024/12/COMUNICADO-D.E.P.P.Y-P.Q.-N°005-2024-1.pdf
- https://www.asuntosregulatorios.com.py/2026/03/12/resolucion-dinavisa-n-91-2026/
- https://www.abc.com.py/nacionales/2026/07/23/dinavisa-exige-trazabilidad-estricta-para-medicamentos-con-tirzepatida/
- https://dinavisa.gov.py/paraguay-contara-con-un-sistema-nacional-de-trazabilidad/
- https://dinavisa.gov.py/wp-content/uploads/2026/07/Informe-primer-semestre-DINAVISA_2026-1.pdf
- https://www.ultimahora.com/dinavisa-rastrea-venta-irregular-fentanilo-y-apunta-un-posible-esquema-n3011132

---

## Rejected after competitor research

- **SIFEN e-invoicing for SMEs (groups 19–24, 2026–2027).** This is the clearest "why now" in the country, but it is killed by:
  - the government's free e-Kuatia'i tool and certificate for small taxpayers,
  - commercial providers such as FacturaSend and EDICOM,
  - open-source SIFEN libraries (e.g. jsifen),
  - existing ERP modules.

  It is a commodity market racing to the bottom.
  Sources: https://edicomgroup.com/es/blog/como-es-la-factura-electronica-en-paraguay, https://www.mintlify.com/hugomrj/jsifen
- **E-invoicing for state suppliers (RG 41/2025).** Same product and same competitors as above. Procurement itself also runs through DNCP portals.
- **EUDR soy traceability for exporters.** Killed by SISE-UE, a centralized georeferenced lot-to-port system coordinated by the soy chain. The buyers are a handful of large exporters and crushers, which means enterprise sales. Sources: https://infonegocios.com.py/infoagro/productores-aceleran-la-implementacion-del-sistema-de-identificacion-de-soja-rumbo-a-la-union-europea, https://datamarnews.com/?p=72281
- **IPS monthly payroll filing.** Killed by IPS's free and adequate REI web system, plus local payroll and ERP vendors (not individually verified). The MTESS planillas are only annual. Source: https://www.deel.com/es/blog/aportes-ips-en-paraguay/

## Attractive problem, poor distribution

- **EUDR compliance for smallholder soy producers.** They often lack property titles and are a real compliance gap, but they cannot pay; the cost will fall on cooperatives and exporters.
- **SIAP compliance for small cattle producers.** Mandatory, but tens of thousands of low-revenue rural producers who are served free by SENACSA and FUNDASSA campaigns.

## Too competitive

- SIFEN e-invoice issuance (all segments).
- Generic payroll/IPS calculation, including free calculators and EOR players such as Deel and Rivermate.

## Notes

- **Searches not run because of the budget:** fuel stations (MIC fuel reporting), customs brokers (DNA Sofía), maquila exporters, private schools (MEC), and DINAPI. Any of these could hide a better niche.
- **Overall verdict:** Paraguay is a modest market. The best bet, the Marangatu accountant workbench, is a narrow add-on that would also fit as a module of a regional "LatAm accountant post-e-invoicing reconciliation" product. It needs interviews with 5–10 Asunción accounting firms before building.
