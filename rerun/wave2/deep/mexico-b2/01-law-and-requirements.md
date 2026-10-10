# Mexico ICSOE/SISUB law for REPSE contractors, turned into product requirements

Status: complete as of 2026-10-10 (open questions listed at the end). Law texts were read in the consolidated versions published by the Chamber of Deputies (Cámara de Diputados), the IMSS rules were read in the DOF text hosted by IMSS, and the STPS rules were read on dof.gob.mx. The IMSS public filing lists were downloaded and analysed by me (method and caveats in "Supervisors and enforcement evidence").

Abbreviations:
- **REPSE** = Registro de Prestadoras de Servicios Especializados u Obras Especializadas, the STPS public register of contractors (LFT art. 15).
- **ICSOE** = Informativa de Contratos de Servicios u Obras Especializados, the four-monthly return to IMSS (LSS art. 15-A).
- **SISUB** = Sistema de Información de Subcontratación, the four-monthly return to INFONAVIT (Ley INFONAVIT art. 29 Bis).
- **LSS** = Ley del Seguro Social. **LINFONAVIT** = Ley del INFONAVIT. **LFT** = Ley Federal del Trabajo. **CFF** = Código Fiscal de la Federación. **LISR / LIVA** = income tax and VAT laws.
- **Lineamientos** = IMSS "Lineamientos generales para el cumplimiento de la obligación establecida en el tercer párrafo del artículo 15 A de la LSS", Acuerdo ACDO.AS2.HCT.300322/68.P.DIR, DOF 13 Apr 2022.
- **Acuerdo REPSE** = STPS "Acuerdo por el que se dan a conocer las disposiciones de carácter general para el registro de personas físicas o morales que presten servicios especializados o ejecuten obras especializadas", DOF 24 May 2021.
- **RIM** = INFONAVIT regulation on fines (Reglamento para la imposición de multas).
- **NSS** = social security number. **CURP** = population ID. **SBC** = salario base de cotización (IMSS contribution wage). **SBA** = salario base de aportación (INFONAVIT wage). **NRP** = registro patronal (employer number). **SUA / SIPARE** = IMSS self-assessment software / referenced payment system. **UMA** = Unidad de Medida y Actualización, MXN 117.31 a day from 1 Feb 2026 to 31 Jan 2027 ([Alegra](https://blog.alegra.com/mexico/valor-de-la-uma-2026/); [Tax Today](https://www.taxtodaymexico.com/?p=13057)).

## Summary

- **Two filings, one trigger.** Every REPSE contractor must file the ICSOE with IMSS (LSS art. 15-A, third paragraph) and the SISUB with INFONAVIT (LINFONAVIT art. 29 Bis). Both are due by the 17th of January, May and September for the previous four-month period. Both articles were rewritten by the outsourcing reform of DOF 23 Apr 2021 and have not changed since ([LSS](https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf); [LINFONAVIT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIFNVT.pdf)).
- **The two returns do not cover the same thing.**
  - ICSOE reports the contracts that **started** in the period. All of them go in one return per period. A "Sin Información" (nil) return is filed when no contract started ([Lineamientos 5.6](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf); [IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf)).
  - SISUB reports **all contracts active** in the period, with money per worker per two-month block (bimester): contributions, mortgage repayments, fixed and variable pay ([contadormx, citing the INFONAVIT guide](https://contadormx.com/salario-de-los-trabajadores-sisub/)).
  - This gap is a natural place for errors, and so for a checker.
- **Filing channels.**
  - ICSOE is a web portal (s-icsoe.imss.gob.mx). It is signed with the company's SAT e.firma. Contract data is typed in by hand. Worker lists upload as a 3-column CSV: NSS, CURP, SBC ([Lineamientos 4.2, 5.1](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf); [IMSS template page](https://www.imss.gob.mx/icsoe/plantilla)).
  - SISUB takes three CSV layouts plus PDFs through INFONAVIT's employer portal (Portal Empresarial), using the main NRP. It is validated asynchronously. Errors come back as a "Logmensaje" CSV ([contadormx](https://contadormx.com/salario-de-los-trabajadores-sisub/); [Tax Today](https://www.taxtodaymexico.com/publica-infonavit-reglas-para-informar-prestacion-de-servicios-especializados/)).
- **Penalties at the 2026 UMA.**
  - ICSOE missing or late: 500-2,000 UMA = MXN 58,655-234,620 (LSS art. 304-A fr. XXII, 304-B fr. V). No fine if the filer corrects on its own before IMSS detects it (art. 304-C).
  - SISUB: 251-300 UMA = MXN 29,445-35,193 (RIM art. 6 fr. XVIII and 8 fr. IV) ([IDC calendar](https://cms.idconline.mx/store/uploads/attachments/DOCUMENT_f68c94b3e9aa911480312be19518a31e.pdf)). I did not see the official RIM text.
  - Providing services without REPSE, or using such a provider: 2,000-50,000 UMA = MXN 234,620-5,865,500 (LFT art. 1004-C).
  - The bigger costs are indirect. The client loses its income tax deduction and VAT credit (CFF art. 15-D; LISR art. 27 fr. V; LIVA art. 5 fr. II). The client also carries joint liability. An unpaid, firm fine can lead to a negative IMSS compliance opinion and then to cancellation of the REPSE registration (Acuerdo REPSE art. 15 c).
- **The duty is widely and visibly missed.** I analysed IMSS's own public list for January-April 2026:
  - 142,661 contractor names filed. 67% of their returns were nil.
  - 49,705 contractors reported at least one contract.
  - **About one contractor in three (46,361 of 139,515) made its first filing for the period after the 18 May 2026 deadline.**
  - Sep-Dec 2025 looks the same: 31% late ([IMSS list LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); [LPT2025](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx)).
  - The public "inconsistent information" list, by contrast, is tiny: 15 rows for Jan-Apr 2026 ([LIIP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIP2026.xlsx)). Lateness, not format, is the measurable failure.
- **Enforcement is mostly by data matching and warning letters.** IMSS and STPS have shared data since 22 Nov 2023 and warned 34,302 REPSE firms (Feb 2024), more than 22,000 (Feb 2025) and 14,455 (Jul 2025) with non-positive opinions ([Tax Today](https://www.taxtodaymexico.com/exhortan-imss-y-stps-a-34-mil-empresas-inscritas-en-repse-a-regularizarse/); [IDC](https://idconline.mx/seguridad-social/2025/02/11/imss-exhorta-a-empresas-de-servicios-especializados-a-cumplir-obligaciones); [IMSS-STPS Boletín 396/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf)). I found no published count of ICSOE or SISUB fines actually imposed (unverified).
- **No regional variation in the duty itself.** It is federal. Deadlines run on Central Mexico time (Lineamientos 5.3). State payroll tax (ISN) withholding on specialised services differs by state, and that matters for the client evidence pack.
- **Recent and coming changes.**
  - STPS cut REPSE paperwork for firms with up to 10 workers (DOF 9 Jun 2026) and updated the REPSE portal (Jul 2026).
  - INFONAVIT issued a June 2026 SISUB guide with a new "datos continuos" report type.
  - Electronic working-time records become mandatory under rules due from 1 Jan 2027 (LFT art. 132 fr. XXXIV).
  - None of these changes the ICSOE/SISUB articles.
- **Product.** 78 testable requirements follow. The core is:
  - a contract register that also holds the REPSE folio;
  - worker assignment by bimester;
  - a period engine that applies the two different scopes (contracts started vs contracts active);
  - generators for the ICSOE worker CSV, a contract capture sheet and the three SISUB CSVs;
  - a check suite that mirrors IMSS's seven published inconsistency rules plus cross-checks against SUA/payroll;
  - a deadline engine with roll-forward to the next business day;
  - an acknowledgement archive kept at least 5 years;
  - a monthly client evidence pack (LISR/LIVA).
  - The product must never hold the e.firma private key. Lineamientos 4.2 makes its safekeeping the holder's exclusive responsibility.

## Who is obliged

**Contractors (the buyer)**
- **ICSOE.** "La persona física o moral que preste servicios especializados o ejecute obras especializadas" (LSS art. 15-A, third paragraph). The Lineamientos apply to these contractors and to their clients (Lineamientos 3) ([LSS](https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf); [Lineamientos](https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf)).
- **SISUB.** Persons "registradas en términos del artículo 15 de la LFT" for specialised services or works that are not part of the client's corporate purpose or main economic activity (LINFONAVIT art. 29 Bis) ([LINFONAVIT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIFNVT.pdf)).
- **Who must be on REPSE.**
  - Anyone who places its own workers at a client to deliver specialised services or works outside the client's core activity (LFT art. 13).
  - Intra-group shared or complementary services, which count as specialised (LFT art. 13, second paragraph; Acuerdo REPSE art. 1) ([LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf); [Acuerdo REPSE](https://dof.gob.mx/nota_detalle.php?codigo=5619148&fecha=24/05/2021)).
- **Both natural persons and companies.** In the Jan-Apr 2026 IMSS list, 36% of filers were personas físicas (50,956 of 142,661) (my analysis of [LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx)).
- **No thresholds and no size exemption.**
  - The law sets no minimum number of workers, contracts or revenue.
  - The June 2026 relief for firms with up to 10 workers only cuts REPSE application documents. It does not touch ICSOE or SISUB ([DOF 9 Jun 2026](https://dof.gob.mx/nota_detalle.php?codigo=5790015&fecha=09/06/2026)).
- **Nil periods.**
  - **ICSOE:** a contractor with no new contract in the period files "Sin Información" (Lineamientos 5.6). Practitioners treat it as mandatory while REPSE is active ([BHR México, Aug 2026](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)). The statute itself speaks only of "contratos celebrados", so whether a missing nil return can be fined is legally arguable (my reading, unverified).
  - **SISUB:** "informe sin actividad" only when no contract was signed, none was in force and no worker was placed at a client. If earlier contracts are still running, the "datos continuos" report applies ([contadormx, Jul 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
- **Not obliged.**
  - Employment agencies and recruiters (LFT art. 12, second paragraph).
  - Firms that do not provide specialised services. They cannot legally place workers at all (LFT art. 12).
  - Foreign providers without a permanent establishment are not reported in ICSOE (IMSS FAQ, [imss.gob.mx/icsoe/preguntas](https://www.imss.gob.mx/icsoe/preguntas); read in an earlier pass, unverified this pass).

**Scale (from IMSS's own public list; my analysis)**

| Period | Contractor names filing | of which personas morales / físicas | Contractors with ≥1 contract | Nil returns ("Sin información") | Normal returns | Corrections | First filing late |
|---|---|---|---|---|---|---|---|
| Sep-Dec 2025 ([LPT2025](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx)) | 146,016 | 92,910 / 53,106 | 49,580 | 96,538 | 46,719 | 2,870 | 44,488 of 143,150 (31%) |
| Jan-Apr 2026 ([LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx)) | 142,661 | 91,705 / 50,956 | 49,705 | 93,055 | 46,566 | 3,149 | 46,361 of 139,515 (33%) |

- Among contractors with contracts in Jan-Apr 2026, the median was 2 contracts (90th percentile 11). The median summed contract headcount was 11 workers (90th percentile 102).
- 24,186 contractors had 10 or fewer workers. 16,287 had 11-50, 7,251 had 51-250 and 1,981 had more than 250.
- Caveats:
  - The list has names, not RFCs, so variants of the same name count twice.
  - The deadline used is the next business day after the 17th: 18 May 2026 and 19 Jan 2026.
  - "Late" is measured by the "Fecha de presentación" column.
  - 142k filers is more than the roughly 89,000 firms said to be on the REPSE register in May 2026 ([LexLatin](https://lexlatin.com/entrevistas/repse-mexico-nuevas-auditorias)). The gap is unexplained: name variants, or deregistered firms still filing (unverified).

**Clients (the "contratante" or "beneficiaria")**
- **Joint liability.** The client is jointly liable for the social security obligations (LSS art. 15-A, second paragraph) and the INFONAVIT obligations (LINFONAVIT art. 29 Bis, third paragraph) for the workers used, and for labour obligations (LFT art. 14, second paragraph).
- **Tax deduction conditions.** At each payment the client must verify the contractor's REPSE registration and obtain copies of: payroll CFDI, the bank receipt for the withheld-tax payment, the IMSS payment and the INFONAVIT payment (LISR art. 27 fr. V, third paragraph). It must also obtain the contractor's VAT return and payment acknowledgement, by the last day of the month after payment. If it does not, it must file a complementary return reducing its VAT credit (LIVA art. 5 fr. II, second paragraph). No deduction or credit is allowed without REPSE (CFF art. 15-D) ([LISR](https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf); [LIVA](https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf); [CFF](https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf)).
- **Fine for benefiting from unregistered or improper subcontracting:** 2,000-50,000 UMA (LFT art. 1004-C, second paragraph).
- **IMSS information requests.** IMSS may ask clients for data, which must be supplied within 15 days of notice (Lineamientos 10.1).
- **Authorised access.** A contractor may authorise a client, through Buzón IMSS, to see the detailed contracts it filed (Lineamientos 7).
- **Client demand turns this into a monthly job.** Large clients require these documents monthly through supplier portals. AXA's supplier rules ask REPSE suppliers for monthly IMSS, INFONAVIT and SAT opinions, SUA files, payroll CFDI XML and a worker list. In April, August and December they also ask for the ICSOE and SISUB acknowledgements plus an Excel file of contracts and workers ([AXA REPSE document](https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf), from the earlier pass).

## Duty-by-duty table

Penalties use the 2026 UMA of MXN 117.31, valid to 31 Jan 2027. The UMA in force when the breach happens applies (LINFONAVIT art. 55, first paragraph; general practice under LSS, unverified for LSS).

| # | Duty | Legal basis | What must exist or be done | Frequency / deadline | Evidence an inspector asks for | Penalty |
|---|---|---|---|---|---|---|
| 1 | Hold REPSE registration before providing any specialised service | LFT art. 13, 15; Acuerdo REPSE art. 8-13 | Registration on repse.stps.gob.mx. The aviso de registro carries a registration number and **one folio per registered service** (Acuerdo art. 12). Only registered services may be provided (art. 15 a). | Before the first contract. Valid 3 years (LFT art. 15; Acuerdo art. 13). | Aviso de registro. Folio per activity. Public register entry (Acuerdo art. 19). | LFT art. 1004-C: 2,000-50,000 UMA = MXN 234,620-5,865,500, for provider and client. Possible tax fraud for simulated schemes (CFF art. 108, para i). |
| 2 | Renew REPSE every 3 years | LFT art. 15, second paragraph; Acuerdo art. 16, 15 g | Start renewal in the 3 months before expiry. Since 9 Jun 2026: single online procedure STPS-086-002. Firms with 10 or fewer workers need only the form plus RFC certificate or articles of incorporation. Firms with more than 10 also need ID, power of attorney, payroll receipt, NRPs and SUA cédula ([DOF 9 Jun 2026](https://dof.gob.mx/nota_detalle.php?codigo=5790015&fecha=09/06/2026)). | Window opens 3 months before expiry. | Renewal acuse. Updated aviso. | Cancellation of the registration (Acuerdo art. 15 g). Only about 53% of 2021 registrants re-qualified in 2024 ([IDC](https://idconline.mx/seguridad-social/2025/12/18/repse-una-deuda-pendiente-en-la-formalizacion-empresarial)). |
| 3 | Stay current with SAT, IMSS and INFONAVIT | LFT art. 15, first paragraph; Acuerdo art. 8(2), 14 b, 15 c-d | No firm tax or social security debts. Positive compliance opinions. The IMSS opinion requires at least one active NRP, no firm credits (including fines, LSS art. 287), guarantees where challenged, and no revocation cause in instalment plans ([IDC, 3 Jul 2026](https://idconline.mx/seguridad-social/2026/07/03/opinion-de-cumplimiento-imss-requisitos-para-un-resultado-positivo)). | Continuous. Clients usually check monthly. | SAT 32-D opinion. IMSS opinion. INFONAVIT opinion or certificate. | Cancellation (Acuerdo art. 15 c). STPS gives 5 business days to respond (art. 15, last paragraph). |
| 4 | Written contract with each client | LFT art. 14; Acuerdo art. 18 | Written contract stating the object of the service or works and the **approximate number of workers**. It must state the contractor's REPSE registration and the **folio of the registered activity**. | Before work starts. Keep amendments. | The contract PDF, which is also uploaded to SISUB once (see #10). | LFT art. 1004-C covers breaches of arts 14 and 15 (2,000-50,000 UMA). |
| 5 | Stay within scope | LFT art. 12-13; Acuerdo art. 15 a-b; CFF art. 15-D | Service must be registered and must not be part of the client's corporate purpose or main activity. Workers must not be the client's ex-workers transferred in (CFF art. 15-D, fr. I). | Every contract. | REPSE activity vs contract object vs client's activity. | Cancellation. Client loses deduction and VAT credit (CFF 15-D). LFT 1004-C. |
| 6 | ICSOE, normal return | LSS art. 15-A, third paragraph, fr. I-III; Lineamientos 4-5 | One return per period containing **every contract that started in the period**. Parties: name, RFC, address if different from tax address, e-mail, phone (fr. I). Per contract: object, term, workers with name, CURP, NSS and SBC, client name and RFC (fr. II). Copy of STPS registration (fr. III). In the portal: contract "Objeto", "Servicio u obra especializado contratado", start date, end date if known. Workers as NSS + CURP + SBC ([IMSS guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf)). Signed with the company e.firma (Lineamientos 4.2, 5.2). | Days 1-17 of May (Jan-Apr), September (May-Aug) and January (Sep-Dec). Rolls to the next business day if the 17th is a Saturday, Sunday or holiday (Lineamientos 5.4-5.5). Central Mexico time (5.3). | Electronic acuse, which is proof of date and time (5.7). Public list entry (6.1). | LSS art. 304-A fr. XXII + 304-B fr. V: 500-2,000 UMA = MXN 58,655-234,620 for "no presentar o presentar fuera del plazo". No fine if the filer corrects spontaneously (304-C); not spontaneous once IMSS has found it or notified a requirement. IMSS may cancel a fine on documents (304-D). |
| 7 | ICSOE nil return ("Sin Información") | Lineamientos 5.6; LSS 15-A (arguable) | Return stating that no contract started in the period. | Same windows as #6. | Acuse. | Treated in practice as the same 304-A XXII fine ([BHR](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)). Legal basis arguable (unverified). |
| 8 | ICSOE corrections | Lineamientos 5.6, 5.9, 8.1, 9.3, 10.2 | **Corrección** replaces the earlier return and must repeat all unchanged data. **Sin Efectos** cancels a return filed in error, or a nil return when contracts did exist. **Actualización** reports later changes to a reported contract. At most 4 complementary returns per period, excluding Actualización. | Corrección and Sin Efectos: any time. Actualización: only in May, September or January, covering the previous period (5.9). IMSS e-mail correction request: **10 business days** (8.1). Notice of unreported information or differences: **15 business days** (10.2). | Acuses of each complementary return. Buzón IMSS messages. | Uncorrected errors can be treated as an incorrect return. IMSS keeps full audit powers (12.1). |
| 9 | Answer IMSS and STPS requests | LSS art. 15 fr. IV; Lineamientos 8-11; Acuerdo REPSE art. 11, 15 f | Supply data and documents on request. Notices go through Buzón IMSS with an SMS alert (Lineamientos 11). | 10 or 15 business days as above. STPS: 5 business days to answer a cancellation notice. | The reply and the proof of sending. | Refusal is a REPSE cancellation cause (Acuerdo art. 15 f). |
| 10 | SISUB, normal return | LINFONAVIT art. 29 Bis a)-f); INFONAVIT "Reglas de Carácter General que establecen los procedimientos a que se refiere el Artículo 29-BIS segundo párrafo" (published on infonavit.org.mx, mid-2021) ([Tax Today](https://www.taxtodaymexico.com/publica-infonavit-reglas-para-informar-prestacion-de-servicios-especializados/)) | One filing per RFC through the main NRP, covering all NRPs and all REPSE registrations. Covers **all contracts active in the period**. Three CSV layouts: obligated party, contracts, worker detail. Contract data: number, type, object, amount, term, NRPs, estimated workers, client data. Money per worker per bimester: contributions, repayments, fixed and variable pay, days of incapacity, non-integrable pay, salary cap. PDFs: contracts, STPS registration, articles of incorporation (company) or tax status certificate (individual). PDFs are needed once, then again only for new or changed documents ([contadormx FAQ](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/); [contadormx 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)). | By the 17th of January, May and September. Rolls to the next business day under CFF art. 12 ([contadormx](https://contadormx.com/informe-cuatrimestral-del-sisub-ante-el-infonavit/)). | Acuse from the portal after validation. E-mail of the result. | RIM art. 6 fr. XVIII + 8 fr. IV: 251-300 UMA = MXN 29,445-35,193 ([IDC](https://cms.idconline.mx/store/uploads/attachments/DOCUMENT_f68c94b3e9aa911480312be19518a31e.pdf); RIM text not seen). LINFONAVIT art. 55 general range 3-350 UMA. INFONAVIT reports breaches to STPS (29 Bis, last paragraph). |
| 11 | SISUB other report types | INFONAVIT SISUB guide, June 2026 (secondary source) | **Sin actividad:** no contract signed or in force and no workers placed. Filed "bajo protesta de decir verdad" with the STPS registration number and articles or tax certificate. **Datos continuos:** no new contract, but earlier contracts still running. Load only the 3 layouts; amounts must match SUA/SIPARE. **Complementario:** modifies a normal report ([contadormx, 17 Jul 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)). | Same deadlines. | Acuse. | As #10. |
| 12 | Keep payroll and accounting records | LSS art. 15 fr. II; CFF art. 30 | Payroll and attendance records with days worked and wages. Accounting and supporting documents. | **5 years** (LSS: from the record's date. CFF: from the date the related return was filed or due). | Payroll, SUA files, CFDI, contracts, acuses. | LSS art. 304-A/304-B, fraction not identified (unverified). CFF fines. |
| 13 | Deliver tax and social security evidence to each client | LISR art. 27 fr. V, third paragraph; LIVA art. 5 fr. II, second paragraph | Per payment received: payroll CFDI of the workers used, bank receipt for withheld taxes, IMSS payment, INFONAVIT payment, the VAT return and its payment acuse. | VAT documents by the last day of the month after the client's payment (LIVA). The others "when the payment is made" (LISR). | The documents. Client supplier-portal uploads. | No direct fine on the contractor in these articles. The client loses its deduction or VAT credit, so the contractor loses the client. |
| 14 | Identify workers at the client's premises | Acuerdo REPSE art. 17 | Image, name, badge or ID code linking each worker to the contractor. | While working on site. | Badges. Worker list. | REPSE cancellation for breach of requirements (art. 15 d-e, my reading). |
| 15 | Tell clients about renewal or changes | Acuerdo REPSE as amended DOF 3 Feb 2023 and 21 Feb 2024 (art. 18, second paragraph, per a consolidated copy) | Inform clients of renewal of the registration. | On renewal. | Notice to client. | Not stated (unverified). I did not read the amending DOF texts this pass. |
| 16 | Protect workers' personal data | LFPDPPP (DOF 20 Mar 2025, last reform 14 Nov 2025) art. 2 fr. XII, 14-20 | Privacy notice. Security measures. Breach notice to data subjects. Confidentiality of everyone who handles the data, continuing after the relationship ends ([LFPDPPP](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf)). | Continuous. | Privacy notice. Security policy. Processor contract. | Art. 58-59 (Secretaría Anticorrupción y Buen Gobierno). |
| 17 | Electronic working-time record (coming) | LFT art. 132 fr. XXXIV (DOF 1 May 2026); fifth transitory article | Record each worker's working time electronically. The STPS general rules set scope and exceptions. | Rules in force from 1 Jan 2027. | Electronic time records. | LFT art. 994 fr. IV Bis: 250-5,000 UMA = MXN 29,328-586,550. |
| 18 | Client side: verify and collect | LISR art. 27 fr. V; LIVA art. 5 fr. II; CFF 15-D; Lineamientos 10.1 | Verify REPSE at each payment. Collect the documents in #13. Answer IMSS requests within 15 days. | Per payment. Monthly VAT. | Supplier files. | Loss of deduction or credit. Joint liability. LFT 1004-C. |

## Filing channels and formats

**ICSOE (IMSS)**
- **URL and login.**
  - The portal is https://s-icsoe.imss.gob.mx, with a help microsite at https://imss.gob.mx/icsoe (Lineamientos 5.1-5.2).
  - Login and signing use the SAT e.firma (.cer, .key and password). For a company, it must be the company's e.firma (IMSS guide 1, [link](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/1-Guia-Ingreso-Registro-Datos-Generales-Contratista.pdf); [IMSS ICSOE](https://www.imss.gob.mx/icsoe)).
  - A "capturista" user can prepare the return and pass it to the contractor for signature (guide 10; [guide 5](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/5-Guia-Firma-y-Presentacion.pdf)).
- **General data, entered once.**
  - The contractor's e-mail is mandatory. The last e-mail given counts for notices (Lineamientos 2 fr. V).
  - Conventional and social address, if different from the tax address.
  - Upload of the STPS "Acuse de registro en el padrón" PDF (guide 1).
- **Per return.**
  - Year, period and type: Normal or Sin Información.
  - One return holds every contract that started in the period ([guide 2](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf)).
- **Per contract.**
  - **Contractor:** conventional address, only if different from the tax address.
  - **Client:** RFC, checked by the portal, which fills in the name. Then e-mail, mobile, landline (optional), and social and conventional address if different.
  - **Contract:** "Objeto del contrato", "Servicio u obra especializado contratado", start date, end date if known.
  - **Workers:** one by one, or by bulk CSV.
  - In the public list the contract gets an IMSS folio such as "A26P3662382" ([LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx)).
  - The IMSS FAQ says the "Servicio" field should hold the REPSE folio plus the authorised service text (earlier pass, [FAQ](https://www.imss.gob.mx/icsoe/preguntas)).
- **Worker CSV.**
  - Three columns: NSS (11 digits, formatted as text so leading zeros survive), CURP (18 alphanumeric), SBC (numeric, 2 decimals). No spaces. Comma-delimited.
  - IMSS offers an XLSM template with macros that checks format only. It does not check NSS or CURP against official sources. The maximum file is 15 MB ([IMSS template page](https://www.imss.gob.mx/icsoe/plantilla); [template guide](https://www.imss.gob.mx/sites/all/statics/icsoe/Guia-para-usar-la-plantilla-de-carga.pdf)).
  - On upload the portal rejects rows for bad structure, an NSS or CURP not valid in IMSS records, or an NSS or CURP already registered. The rejected rows can be downloaded as Excel ([guide 3](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf)).
  - Per the IMSS FAQ: SBC is the last SBC registered in the period. One worker may appear on several contracts, but not twice in one contract (earlier pass).
- **Acuse.**
  - After signature the system issues a final folio, for example "N262253432" for Normal or "SI262202734" for Sin Información.
  - The acuse can be downloaded under "Acuses de presentación" (guide 5; [guide 6](https://www.imss.gob.mx/sites/all/statics/icsoe/guias/6-Guia-Informativa-Sin-Informacion.pdf)).
  - The acuse is the proof of date and time (Lineamientos 5.7).
- **No API.** I found no API or system-to-system channel. Contract data has to be keyed into the portal (my inference from guides 1-6).
- **Public list.**
  - IMSS publishes every contract reported, at least monthly, in the first five business days of each month.
  - Fields: names and type of both parties, contract folio, service, dates, number of workers, period, year, type, return folio and filing date (Lineamientos 6; [IMSS public list page](https://www.imss.gob.mx/icsoe/listado-publico)).

**SISUB (INFONAVIT)**
- **Channel.**
  - The SISUB module in INFONAVIT's Portal Empresarial, entered with the NRP marked as main, or the one whose address matches the tax address ([contadormx FAQ](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/)).
  - The 2021 rules mention NRP login. Whether an e.firma is now needed is unverified ([Tax Today](https://www.taxtodaymexico.com/publica-infonavit-reglas-para-informar-prestacion-de-servicios-especializados/)).
- **Files.**
  - Three CSV layouts, built from INFONAVIT's .xls guide files: "Información sujeto obligado", "Detalle de contratos", "Detalle de trabajadores".
  - PDFs: contracts, the STPS registration, and the articles of incorporation (company) or tax status certificate (individual).
  - Several contracts may be zipped or uploaded as multiple files ([contadormx](https://contadormx.com/salario-de-los-trabajadores-sisub/); [contadormx 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
- **Worker layout fields** ([contadormx](https://contadormx.com/sisub-plantilla-de-trabajadores/)):
  - Cuatrimestre: 1, 2 or 3.
  - Year: 4 digits.
  - Bimester: two rows per worker per return.
  - RFC of the obligated party.
  - Contract number: up to 30 numeric characters, matching the contract layout; "0" if the contract has no number.
  - NRP. NSS (11).
  - Work-centre street, exterior number, interior number, colonia, postcode, municipio and state.
  - Variable pay, fixed pay, days of incapacity, non-integrable pay, salary not exceeding the cap.
  - Contributions and repayments.
  - Fixed pay is what was actually paid in the bimester. Variable pay is from the previous bimester ([contadormx FAQ](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/)).
- **Fill rules** ([contadormx](https://contadormx.com/sisub-plantilla-de-trabajadores/)):
  - No formulas or links.
  - "N/A" where there is no data, and no empty cells.
  - Dates DD/MM/AAAA, with 31/12/9999 for open-ended dates.
  - No commas, full stops, hyphens, slashes, quotes or accents.
  - Ñ becomes N with English Office.
  - The work-centre address is repeated on every worker row.
- **Special cases** (INFONAVIT answers at an IMCP session on 17 Sep 2021, [contadormx](https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/)):
  - Client without an NRP: enter 1-9 consecutively, or repeat the contractor's NRP.
  - Foreign client: generic RFC, plus the address of its representation or of the work centre.
  - Contract value that changes monthly: give the value at the end of the period and attach all amendments.
  - Worker at several sites: give the last site in the bimester, or the client's address.
  - No duplicate workers. Present workers as they appear in SUA/SIPARE.
- **Wage base.** SBA follows Reglamento de Inscripción INFONAVIT art. 32 and the cap in art. 13 ([contadormx](https://contadormx.com/sisub-plantilla-de-trabajadores/)).
  - The 2023 practitioner guidance says not to force the bimester amounts to match SUA when a worker did not serve the whole bimester ([contadormx](https://contadormx.com/salario-de-los-trabajadores-sisub/)).
  - The June 2026 guide is reported to say that amounts must match SUA/SIPARE ([contadormx 2026](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)).
  - This conflict is unresolved (see open questions).
- **Validation and acuse.**
  - Validation is asynchronous. An e-mail says when results are ready.
  - Errors arrive in a "Logmensaje" CSV, also visible in the "Mensajes" tab. The acuse is downloadable after acceptance ([contadormx](https://contadormx.com/salario-de-los-trabajadores-sisub/)).
- **Known portal fragility.**
  - In September 2022 the SISUB upload failed near the deadline. INFONAVIT accepted e-mailed files to named staff as a fallback ([IDC](https://idconline.mx/seguridad-social/2022/09/19/sisub-presenta-problemas-de-ultima-hora)).
  - Users report "layout incorrecto" errors and confusion over header rows ([contadormx](https://contadormx.com/errores-comunes-del-sisub-al-infonavit/), earlier pass).

**ICSOE vs SISUB at a glance**

| Point | ICSOE | SISUB |
|---|---|---|
| Contracts covered | Started in the period | Active in the period |
| Unit of filing | One return per contractor per period | One file set per RFC, through the main NRP, for all NRPs and registrations |
| Worker data | NSS, CURP, SBC per contract | NSS, NRP, work-centre address, pay and contributions per bimester |
| Money | None | Contributions, repayments, fixed, variable and non-integrable pay, contract amount |
| Contract document | No PDF (REPSE acuse PDF once) | Contract PDFs, once and on change |
| Signature | Company e.firma | Portal login with NRP (e.firma unverified) |
| Nil period | "Sin Información" | "Sin actividad", or "datos continuos" if old contracts still run |
| Corrections | Corrección / Sin Efectos (any time), Actualización (May/Sep/Jan only), max 4 per period | "Complementario" |
| Fine | 500-2,000 UMA | 251-300 UMA (RIM) |

## Supervisors and enforcement evidence

**Who supervises**
- **IMSS**, Dirección de Incorporación y Recaudación. It runs the ICSOE, interprets the Lineamientos (15.2) and publishes the lists. It audits with full powers (12.1) and sends warnings by e-mail or Buzón IMSS (9.1-9.3, 11).
- **INFONAVIT** runs the SISUB and reports breaches to STPS (LINFONAVIT art. 29 Bis, last paragraph).
- **STPS**, through the Unidad de Trabajo Digno and the Dirección General de Inspección Federal del Trabajo. It grants, refuses, cancels and renews REPSE (Acuerdo art. 4, 12-16) and imposes LFT art. 1004-C fines.
- **SAT** enforces the deduction and VAT-credit rules (CFF 15-D) and tax fraud (CFF 108).
- **Data sharing.** IMSS, INFONAVIT and STPS must sign data-sharing agreements (LSS 15-A, fourth paragraph; LINFONAVIT 29 Bis, fourth paragraph; Acuerdo art. 5). The IMSS-STPS agreement dates from 22 Nov 2023 ([STPS-IMSS communiqué](https://www.gob.mx/cms/uploads/attachment/file/872321/COMUNICADO_CONJUNTO_STPS_Intercambio_de_Informaci_n_REPSE_revisi_n_conjunta_221123.pdf)).

**Inspection practice and checklists**
- **IMSS's published inconsistency rules** are the nearest thing to an inspector's checklist. IMSS lists seven conditions on mandatory fields ([IMSS public list page](https://www.imss.gob.mx/icsoe/listado-publico); [IMSS Boletín 300/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf)):
  1. Contractor and client are the same.
  2. Normal or Corrección return with no description of the service or works.
  3. No contract start date, or an inconsistent one.
  4. Contracts with no workers.
  5. Returns with no contract information.
  6. More than one return per period.
  7. Number of contracts declared differs from the contracts in the return.
  - The remedy for each is a Complementaria de Corrección.
- **What a reviewer checks** (practitioner list, BHR Aug 2026):
  - Does the REPSE activity match the contracted activity?
  - Does the contract match ICSOE and SISUB?
  - Are the workers the ones registered?
  - Are salaries and contribution bases consistent?
  - Is the provider filing on time?
  - BHR says IMSS reviews cover the client, the contract, workers, REPSE, ICSOE and how the services were delivered ([BHR](https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf)).
- **IMSS 2026 audit plan.** It stresses data cross-matching and predictive models ([elconta](https://elconta.mx/fiscalizacion-imss-2026-paradigma-control-digital/); [AMCPDF](https://amcpdf.org.mx/fiscalizacion-del-imss-en-la-era-repse/), earlier pass).

**Enforcement evidence**
- **Lateness is common.** My analysis of the IMSS public lists shows that 31% (Sep-Dec 2025) and 33% (Jan-Apr 2026) of contractors made their first filing for the period after the deadline.
  - Jan-Apr 2026: 30,279 nil, 16,149 normal and 2,711 correction returns were filed after 18 May 2026.
  - Another 26,139 returns were filed on the deadline day itself ([LPP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx); [LPT2025](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx)).
  - Each late return is formally a 304-A fr. XXII breach unless it counts as spontaneous (304-C).
- **The inconsistent list is small.** 15 rows (5 contractors) for Jan-Apr 2026 and 5 rows for Sep-Dec 2025 ([LIIP2026](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIP2026.xlsx); [LIIT2025](https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIT2025.xlsx)). Either the portal now blocks most of these errors at capture, or filers correct them quickly (my inference).
- **Warning sweeps of REPSE firms** with non-positive IMSS opinions:
  - 34,302 in Feb 2024 ([Tax Today](https://www.taxtodaymexico.com/exhortan-imss-y-stps-a-34-mil-empresas-inscritas-en-repse-a-regularizarse/));
  - 22,352 in Feb 2025 ([IDC](https://idconline.mx/seguridad-social/2025/02/11/imss-exhorta-a-empresas-de-servicios-especializados-a-cumplir-obligaciones));
  - 14,455 on 31 Jul 2025 ([IMSS-STPS Boletín 396/2025](https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf)).
- **Cancellations.** STPS cancelled more than 51,000 REPSE registrations in 2025. The source does not say whether ICSOE or SISUB failures were a cause ([Tiempo](https://www.tiempo.com.mx/economia/cancelo-stps-51-mil-inscripciones-del-repse-por-incumplimientos-septiembre-2026/)).
- **SISUB.** In 2021 INFONAVIT gave a grace period without fines until 18 Oct 2021 (search snippet of [IDC](https://idconline.mx/seguridad-social/2021/09/24/infonavit-apoya-a-patrones-para-cumplir-con-el-sisub), unverified). I found no data on SISUB fines since.
- **Fine counts.** I found no published count of ICSOE or SISUB fines imposed (unverified). The visible tools are e-mail correction requests (10 business days), difference notices (15 business days), monthly public lists, warning sweeps and REPSE cancellation.

## Regional differences

- **The duty is federal and uniform.** LSS, LINFONAVIT, LFT and the STPS and IMSS rules apply nationwide.
- **Time zone.** All ICSOE deadlines run on Central Mexico time (Lineamientos 5.3). A filer in Baja California (Pacific time) or Quintana Roo (Southeast time) has less or more local clock time on deadline day. The product must store deadlines in America/Mexico_City.
- **Holidays.** Deadline roll-forward depends on federal non-working days (Lineamientos 5.5; CFF art. 12). IMSS, INFONAVIT and STPS each publish yearly non-working-day calendars ([Tax Today on STPS 2026](https://www.taxtodaymexico.com/stps-dias-inhabiles-en-2026-para-repse-inspeccion-y-sanciones/)). The calendars are national, not state-based.
- **State payroll tax (ISN).**
  - States differ on whether the client must withhold ISN on payments for specialised services. Nuevo León does so under Ley de Hacienda art. 158 Bis, taxing services provided in the state wherever the payer is based ([El Financiero](https://www.elfinanciero.com.mx/monterrey/2022/10/18/jorge-e-galindo-causacion-del-impuesto-sobre-nominas-en-nl/)).
  - EY's 2025 matrix lists the states with withholding regimes ([EY ISN matrix 2025](https://ey.com/content/dam/ey-unified-site/ey-com/es-mx/services/tax/documents/ey_matrizisn2025_vf.pdf)). 26 of 32 states kept their 2025 ISN rate in 2026 ([BHR](https://www.bhrmx.com/wp-content/uploads/2026/01/CONTRIBUCIONES-LOCALES-CAMBIOS-RELEVANTES-2026-2.pdf)).
  - This affects the monthly client evidence pack, not ICSOE or SISUB. The state-by-state list is unverified.
- **Work-centre state.** The SISUB worker layout records the state of each work centre ([contadormx](https://contadormx.com/sisub-plantilla-de-trabajadores/)), so multi-state contractors need clean site addresses.
- **Language.** All filings, forms and guidance are in Spanish only.

## Upcoming changes

- **Nothing pending on ICSOE or SISUB law.** LSS 15-A and LINFONAVIT 29 Bis are unchanged since DOF 23 Apr 2021. The latest LSS reform (DOF 15 Jan 2026) only changed gendered language in arts 2, 3, 202, 286 J, 303 and 111 A ([LSS](https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf)). One search found no bill to amend art. 15-A (unverified beyond that).
- **SISUB layouts keep moving.** They changed in Dec 2023 ([contadormx](https://contadormx.com/informe-cuatrimestral-del-sisub-ante-el-infonavit/), earlier pass) and again with the June 2026 guide ("datos continuos", SUA matching) ([contadormx](https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/)). Expect more changes. The product needs versioned layouts.
- **ICSOE "Complementaria de Actualización" and "Sin Efectos".**
  - The Lineamientos define both (5.6). Numeral 14.1 says the Actualización release would be announced on the microsite.
  - The 2025-2026 public lists show only Normal, Sin información and Corrección types (my analysis). Whether Actualización is live is unverified.
- **REPSE simplification (DOF 9 Jun 2026).**
  - One procedure STPS-086-002 (alta, actualización, cancelación).
  - Fewer documents for firms with 10 or fewer workers.
  - In force the next business day ([DOF](https://dof.gob.mx/nota_detalle.php?codigo=5790015&fecha=09/06/2026); [IDC](https://idconline.mx/laboral/2026/06/10/adios-trabas-del-repse-stps-facilita-la-renovacion-y-registro)).
- **REPSE portal update (July 2026).**
  - INFONACOT affiliation is now validated.
  - Cancellation can be requested online with a free-form letter.
  - A history of procedures is available.
  - IMSS and INFONAVIT no-debt clarifications now go by e-mail ([IDC](https://idconline.mx/laboral/2026/07/23/actualizacion-en-portal-repse-que-cambia-para-ti)).
  - A simplified e.firma sign-up for micro and small firms was reported for September 2026 ([Siempre al Día](https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/)).
  - Easier entry may raise the number of filers.
- **Working-time reform (DOF 1 May 2026).**
  - The weekly maximum falls from 48 hours (2026) to 46 (2027), 44 (2028), 42 (2029) and 40 (2030).
  - Electronic working-time records become mandatory under STPS rules in force from 1 Jan 2027. The fine is 250-5,000 UMA ([LFT](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf), transitory articles and art. 994 fr. IV Bis).
  - This is an adjacent record a contractor must keep for workers placed at clients. It is a possible add-on.
- **IMSS compliance opinion only via Buzón IMSS since 1 Oct 2025** (search snippet citing a Consejo Técnico agreement; unverified). The opinion is reportedly valid only on the day it is issued (unverified).
- **UMA update.** A new UMA takes effect on 1 Feb 2027. INEGI publishes it in January ([Tax Today](https://www.taxtodaymexico.com/?p=13057)). Fine calculators must take the UMA by breach date.
- **Data protection.** The new LFPDPPP has been in force since 21 Mar 2025, with the Secretaría Anticorrupción y Buen Gobierno as regulator ([Littler](https://www.littler.com/es/news-analysis/asap/mexico-tiene-nueva-ley-en-materia-de-proteccion-de-datos-personales)). A new implementing regulation is expected (unverified).

## PRODUCT REQUIREMENTS

Each requirement is testable. "Basis" gives the legal or official source:
- LSS, LINFONAVIT, LFT, LISR, LIVA, CFF, LFPDPPP = the laws above;
- "Lin." = IMSS Lineamientos DOF 13 Apr 2022;
- "AR" = Acuerdo REPSE DOF 24 May 2021;
- "IG-n" = IMSS ICSOE guide number n;
- "IT" = IMSS template page;
- "IR" = INFONAVIT Reglas 2021;
- "SG" = SISUB guide and FAQ as reported by contadormx.

Sources are linked in the sections above. Requirements marked [verify] depend on a layout I have not seen first-hand.

**A. Scope, profile and set-up**

1. The system must store, per contractor RFC: type (persona física or moral), REPSE registration number, the folio and name of each registered activity, issue date and expiry date. Test: a contract can only be linked to an activity folio that exists in the profile. Basis: AR art. 12, 13; LSS 15-A fr. III.
2. The system must compute REPSE expiry as issue date + 3 years and open a renewal task 3 months before expiry. It escalates at 60, 30 and 7 days. Test: registration issued 15 Mar 2024 shows "renewal window open" on 15 Dec 2026. Basis: LFT art. 15; AR art. 13, 16, 15 g.
3. The system must store the contractor's headcount and show which REPSE renewal document list applies: form plus RFC certificate or articles for 10 or fewer workers; the full list for more than 10. Test: changing the headcount from 9 to 11 changes the checklist. Basis: DOF 9 Jun 2026, art. 3.
4. The system must store all NRPs of the RFC and require one to be marked "principal" for SISUB. Test: SISUB export is blocked until a main NRP is set. Basis: IR; SG FAQ q1-2.
5. The system must store the contractor's ICSOE contact e-mail and warn that IMSS uses the last e-mail given in ICSOE for notices. Test: changing the e-mail creates a task "update e-mail in ICSOE general data". Basis: Lin. 2 fr. V, 8.1, 9.1.
6. The system must hold, per RFC, the PDF of the STPS aviso de registro and flag when a newer one is uploaded, because ICSOE general data and SISUB need it. Test: a renewal upload creates tasks to replace the PDF in both portals. Basis: LSS 15-A fr. III; LINFONAVIT 29 Bis f); IG-1.
7. The system must ask whether the RFC provides specialised services at all, and show "not obliged" guidance for pure recruiters or agencies. Test: answering "recruitment only" suppresses filing tasks and shows LFT art. 12, second paragraph. Basis: LFT art. 12-13.

**B. Contract register**

8. Each contract record must hold: client RFC, client name, client e-mail, client mobile, client landline (optional), client social and conventional address (if different from tax address), contract number, object, specialised service text, linked REPSE activity folio, approximate number of workers, start date, end date (optional), amount, client NRP(s), and the contract PDF with amendments. Test: a record missing any mandatory field cannot be marked "ready". Basis: LSS 15-A fr. I-II; LFT art. 14; AR art. 18; IG-2; IR.
9. The system must warn when the contract PDF does not show the REPSE registration number and activity folio. This is a manual tick with text search where the PDF has a text layer. Test: a PDF without the folio string raises a warning. Basis: AR art. 18.
10. The system must block client RFC = contractor RFC. Test: entering the contractor's own RFC as client shows IMSS inconsistency #1. Basis: IMSS inconsistency list (Boletín 300/2025).
11. The system must require a non-empty service description for every contract in a Normal or Corrección return, and pre-fill it as "[REPSE folio] + [registered activity text]". Test: an empty description blocks export. Basis: IMSS inconsistency #2; IMSS FAQ.
12. The system must require a start date, reject end date < start date, and flag a start date outside the REPSE validity or after the period end. Test: start 01/05/2026 in a Jan-Apr return is rejected for ICSOE. Basis: IMSS inconsistency #3; Lin. 5.6; IG-2.
13. The system must accept a foreign client with the generic RFC and an address of its representation or the work centre, and mark it "check ICSOE reportability". Test: a foreign client without a Mexican PE is excluded from ICSOE by default but included in SISUB. Basis: SG FAQ q12; IMSS FAQ (unverified).
14. The system must allow contract number "0" when the contract has no number, but warn that SISUB matching across layouts then depends on other keys. Basis: SG FAQ q5.
15. The system must store contract amendments with an effective date. The SISUB contract amount must be the value at the end of the period, with all amendment PDFs listed for attachment. Test: amendment dated 15/03/2026 changes the Jan-Apr amount. Basis: SG FAQ q10.
16. The system must check the contract's service against the REPSE registered activities and against a client "core activity" field. It warns when the client's activity text contains the service keyword. Test: cleaning services for a client whose declared activity is "cleaning services" raises a scope warning. Basis: LFT art. 13; AR art. 15 a-b; CFF 15-D.

**C. Workers and assignments**

17. Worker records must store NSS as an 11-character string, keeping leading zeros. Test: NSS "01234567890" exports unchanged in every CSV. Basis: IT; IG-3; SG.
18. CURP must be 18 alphanumeric characters, upper case, and pass the CURP check-digit algorithm. Test: a CURP with a bad check digit is flagged before export. Basis: IT; IG-3 (format); check digit is my addition.
19. NSS must pass the IMSS modulus-10 check digit. Test: a mistyped NSS is flagged before upload, so the portal does not reject it. Basis: IG-3 rejection reasons (NSS not valid); the algorithm is my addition.
20. Each assignment must link a worker to a contract with from-to dates, NRP and work-centre address (street, exterior and interior number, colonia, postcode, municipio, state). Test: a worker at two sites in one bimester gets the last site of the bimester by default. Basis: SG worker layout; SG FAQ q11.
21. A worker may be assigned to several contracts but not twice to the same contract in one return. Test: a duplicate NSS in one contract blocks ICSOE export. Basis: IMSS FAQ; IG-3 (NSS/CURP already registered).
22. The ICSOE SBC for each worker must default to the last SBC registered for that worker in the period, with 2 decimals, taken from SUA or payroll import. A manual override needs a reason. Test: SBC changes on 10/03 and 20/04 export the 20/04 value. Basis: LSS 15-A fr. II; IMSS FAQ; IT.
23. The system must flag every contract with zero assigned workers in the period. Test: such a contract blocks a Normal return. Basis: IMSS inconsistency #4.
24. The system must compare each contract's approximate worker number (contract text) with the workers actually assigned, and warn on a big gap (default ±50%). Basis: LFT art. 14; BHR review list.

**D. Period, scope and deadline engine**

25. The system must map dates to periods: 1 = Jan-Apr, 2 = May-Aug, 3 = Sep-Dec, and the SISUB bimesters within each (Jan-Feb, Mar-Apr; May-Jun, Jul-Aug; Sep-Oct, Nov-Dec). Test: 31/08/2026 maps to period 2, bimester 4. Basis: LSS 15-A; Lin. 5.4; SG.
26. **ICSOE scope:** the system must put in a period's return only the contracts whose start date falls in that period. Test: a contract that started in Feb and is still running in June is excluded from the May-Aug ICSOE. Basis: IG-2 ("todos ellos debieron iniciar en el periodo"); LSS 15-A ("celebrados en el cuatrimestre").
27. **SISUB scope:** the system must include every contract active on any day of the period. Test: the same Feb contract appears in the May-Aug SISUB. Basis: SG ("contratos ... activos en el cuatrimestre").
28. The system must choose the return type automatically and show its reasoning:
    - ICSOE "Normal" if at least one contract started, otherwise "Sin Información".
    - SISUB "Normal con actividad" if any contract started; "Datos continuos" if none started but earlier contracts are still active with workers placed; "Sin actividad" if none was active and no worker was placed.
    - Test: four scenarios produce the four expected types.
    - Basis: Lin. 5.6; SG June 2026.
29. The deadline must be the 17th of January, May and September at 23:59:59 America/Mexico_City. If that day is a Saturday, Sunday or official non-working day, the deadline rolls to the next business day. Test: the Sep-Dec 2026 deadline shows Monday 18 Jan 2027 (the 17th is a Sunday). Basis: Lin. 5.3-5.5; CFF art. 12.
30. The non-working-day calendar must be data, editable per year and per authority (IMSS, INFONAVIT, STPS), with the source URL stored. Test: adding a holiday on 18 Jan 2027 moves the deadline to 19 Jan 2027. Basis: Lin. 5.5; CFF art. 12.
31. The system must send reminders at least on the 1st, 10th and 15th of each filing month and on the deadline day, plus a "not yet filed" alert to an escalation contact. Test: a contractor with no acuse logged by the 15th gets the alert. Basis: lateness evidence (31-33% late in IMSS lists).
32. The system must track the ICSOE signing window as days 1-17. It must warn that an ICSOE Actualización can only be filed in May, September or January, while Corrección and Sin Efectos can be filed any time. Test: an Actualización task created in March is scheduled for May. Basis: Lin. 5.4, 5.9.

**E. ICSOE outputs**

33. The system must generate, per contract, the worker CSV in IMSS layout: columns NSS, CURP, SBC; comma-delimited; NSS as text; SBC with 2 decimals; no spaces. Test: the file passes the IMSS XLSM template's format check. Basis: IT; IG-3. [verify whether a header row is expected]
34. The system must split worker files that would exceed 15 MB and warn. Test: a 16 MB list produces two files. Basis: IT.
35. The system must produce an "ICSOE capture sheet" for each return. It lists, in portal order, every field the user must key in: period, type, contractor address answer, and per contract the client RFC, contact, address answers, object, service, dates, and the CSV file name. Test: the sheet's field order matches IG-2 steps 4-35. Basis: IG-1, IG-2. (There is no upload channel for contract data. My inference: confirm there is no API.)
36. Each return must contain all contracts of the period. The system must block producing a second Normal return for the same period and instead propose a Corrección that repeats all unchanged data. Test: adding a forgotten contract after filing generates a full Corrección package, not a one-contract return. Basis: Lin. 5.6 (Corrección is substitutive); IMSS inconsistency #6.
37. The system must count complementary returns per period and block a fifth Corrección or Sin Efectos. Actualización is excluded from the count. Test: after 4 corrections, the button is disabled with the Lin. 5.6 reference. Basis: Lin. 5.6.
38. The system must reconcile the number of contracts in its package with the number keyed into the portal, using a manual confirmation step, and record it. Test: a mismatch shows IMSS inconsistency #7. Basis: IMSS inconsistency #7.
39. The system must support a "capturista" workflow. Staff prepare the package and the contractor signs in the portal. The system records who prepared and who signed. Test: the audit trail shows preparer and signer for each return. Basis: Lin. 4.2; IG-5, IG-10.

**F. SISUB outputs**

40. The system must generate the three SISUB CSV layouts ("sujeto obligado", "contratos", "detalle de trabajadores") from the current INFONAVIT .xls guide files, version-stamped. Test: each export names the layout version used. Basis: LINFONAVIT 29 Bis; IR; SG. [verify columns against the June 2026 files]
41. The SISUB worker layout must emit two rows per worker per return, one per bimester. Each row carries: period, year, bimester, contractor RFC, contract number, NRP, NSS, the seven work-centre address fields, variable pay, fixed pay, incapacity days, non-integrable pay, salary not exceeding the cap, contributions and repayments. Test: a worker active all period yields 2 rows; a worker active only in bimester 2 yields 1 row (or 2 with zeros) [verify]. Basis: SG worker layout.
42. Fixed pay must be what was paid in the bimester. Variable pay must be the previous bimester's variable pay. Test: May-June variable pay equals March-April variables. Basis: SG FAQ q14.
43. The system must compute SBA per INFONAVIT Reglamento de Inscripción art. 32 (included and excluded items, with limits) and apply the upper cap. Every exclusion is logged with its legal basis. Test: an attendance bonus above 10% of SBA is integrated. Basis: Reglamento INFONAVIT art. 32, 13 (via SG).
44. The SISUB sanitiser must, on every text field: remove commas, full stops, hyphens, slashes, quotes and accents (except "/" in date fields); replace Ñ with N when the user selects "English Office"; write "N/A" for missing alphanumeric data; and refuse empty cells. Test: "Av. Juárez, No. 5-B" becomes "Av Juarez No 5B". Basis: SG fill rules.
45. Dates must export as DD/MM/AAAA, with 31/12/9999 for open-ended contracts. Test: a contract with no end date exports 31/12/9999. Basis: SG fill rules.
46. Contract numbers must be numeric and at most 30 characters, identical in the contract and worker layouts. Test: a worker row whose contract number is missing from the contract layout blocks export. Basis: SG worker layout.
47. Client NRP fallback: when the client has no NRP, export the contractor's own NRP (or the guide's 1-9 convention), and log it. Basis: SG FAQ q9.
48. The system must consolidate all NRPs and all REPSE registrations of the RFC into one file set, and state the total number of workers who served in the period. Test: an RFC with 3 NRPs produces one file set. Basis: IR; SG.
49. The system must produce the PDF attachment list for SISUB: contracts and amendments that are new or changed since the last accepted filing, the STPS registration if changed, and the articles of incorporation (company) or tax status certificate (individual) on first filing. Test: a second filing with no new contracts lists no contract PDFs. Basis: SG FAQ q13; SG 2026.
50. The system must build the "sin actividad" package: a statement "bajo protesta de decir verdad" with the STPS registration number and the articles or tax certificate. Basis: SG 2026.
51. The system must package multiple contract PDFs as a zip when there are many. Basis: SG.
52. For individual contractors the system must fill the articles-of-incorporation fields with the guide's convention: deed number 0, administrator = the person's name, notary "noaplica", notary number 0. Basis: SG FAQ q15.

**G. Pre-filing consistency checks**

53. The system must run all seven IMSS inconsistency rules (#1-#7 above) before any ICSOE export, and block export on any failure. Test: seed data with each defect produces seven distinct blocking errors. Basis: IMSS public list page; Boletín 300/2025.
54. **ICSOE-SISUB parity.** Every contract in the period's ICSOE must appear in the same period's SISUB. Every ICSOE worker on such a contract must appear in SISUB under that contract. Test: removing a worker from SISUB raises "missing in SISUB". Basis: LSS 15-A and LINFONAVIT 29 Bis report the same contracts; BHR review list.
55. **SBC consistency.** The ICSOE SBC must equal the worker's SBC in the SUA/IDSE import at the end of the period, within MXN 0.01. Test: a payroll SBC of 450.00 vs SUA 455.00 raises a warning. Basis: LSS 15-A fr. II; Praxium (main delay is payroll-vs-IMSS SBC differences).
56. **Registration check.** Each assigned worker must appear in the SUA or payroll import as active under the contractor's NRP on the assignment dates. Test: a worker dismissed on 31/03 but assigned to 30/04 is flagged. Basis: LSS 15 fr. I; LSS 15-A.
57. **SISUB money vs SUA/SIPARE.** Bimester contributions and repayments per worker must reconcile to the SUA/SIPARE import, or carry a documented reason (partial days on the contract). The mode is configurable: "must match" (June 2026 guide) or "pro-rata allowed" (2023 guidance). Basis: SG 2026; SG 2023 (conflict noted). [verify]
58. **No duplicate workers across SISUB rows** beyond what SUA shows. Test: the same NSS twice in one bimester for one contract is blocked. Basis: SG FAQ q4.
59. **Scope warnings.** Contract start dates must fall within REPSE validity. The service must be among the registered activities. Workers who were the client's employees before must be flagged (manual flag). Basis: AR art. 15 a; CFF 15-D fr. I.

**H. Filing, acknowledgements and corrections**

60. The system must never ask for, store or transmit the e.firma private key (.key) or its password. Signing happens only in the official portals. Test: a security review shows no field or upload path that accepts .key files. Basis: Lin. 4.2 ("exclusiva responsabilidad el resguardo ... de la clave privada").
61. For each filing the system must record: portal, type, period, folio, date and time of filing (Central time), filer, and the uploaded acuse PDF. A filing is "complete" only with the acuse. Test: without an acuse, status stays "pending". Basis: Lin. 5.7; IG-5; SG.
62. The system must mark a filing "late" when the acuse time is after the deadline. It must then show the spontaneous-compliance rule: no fine if filed before IMSS detects it or notifies a requirement. Test: an acuse dated 19/05/2026 for Jan-Apr shows "late, file now; LSS 304-C". Basis: LSS 304-A XXII, 304-B V, 304-C.
63. The system must import INFONAVIT's "Logmensaje" error CSV and map each error to the row and field that caused it. Test: a sample Logmensaje line highlights the offending cell. Basis: SG. [verify file structure]
64. The system must import the IMSS rejected-workers Excel and map rejections to worker records (bad structure, NSS/CURP invalid, already registered). Basis: IG-3.
65. The correction workflow must produce a full substitute package (Corrección), a cancel package (Sin Efectos, including converting a nil return into a Normal one), or an Actualización scheduled for the next permitted month. Basis: Lin. 5.6, 5.9.

**I. Authority messages and monitoring**

66. The system must log authority notices (IMSS e-mail, Buzón IMSS, STPS, INFONAVIT) with date received, and compute response deadlines: IMSS correction request 10 business days; IMSS difference notice 15 business days; STPS cancellation notice 5 business days; client-side IMSS information request 15 days. Test: a notice received Fri 2 Oct 2026 shows the correct business-day deadline. Basis: Lin. 8.1, 10.1, 10.2; AR art. 15.
67. The system must check monthly, after the first five business days, the IMSS public list for the contractor's own filings and the inconsistent list for its name. It alerts on absence or on any listing. Test: a filed return missing from the latest list raises "not yet in public list"; a match in the LII file raises "IMSS flagged inconsistency". Basis: Lin. 6.1-6.2; IMSS public list page.
68. The system must hold monthly compliance-opinion status (SAT, IMSS, INFONAVIT), with the date and PDF of each opinion. It warns when an unpaid fine or credit could make the IMSS opinion negative. Test: a "negative" upload creates a REPSE-risk alert citing AR art. 15 c. Basis: LFT art. 15; AR art. 15 c; IDC Jul 2026.
69. The fine calculator must use the UMA by date of breach, held as a table with source URL and validity dates. It shows ICSOE 500-2,000 UMA, SISUB 251-300 UMA, and LFT 1004-C 2,000-50,000 UMA. Test: a breach on 19 Jan 2027 uses UMA 117.31; a breach on 2 Feb 2027 uses the 2027 UMA once entered. Basis: LSS 304-B V; RIM 6 XVIII/8 IV; LFT 1004-C; LINFONAVIT art. 55.

**J. Client evidence pack and client access**

70. Per client and per payment received, the system must build an evidence pack: payroll CFDI of the workers on that contract, the withheld-tax payment receipt, the IMSS payment, the INFONAVIT payment, the VAT return and its payment acuse, the current REPSE aviso, and the latest ICSOE and SISUB acuses. Test: a payment dated 10/06/2026 creates a pack due 31/07/2026 for the VAT items. Basis: LISR art. 27 fr. V; LIVA art. 5 fr. II.
71. The system must export the pack in the folder or naming scheme of common client portals (configurable), and log delivery date and method. Basis: AXA supplier rules (example); LIVA art. 5 fr. II deadline.
72. The system must remind the contractor that it may authorise the client, through Buzón IMSS, to view the detailed contracts, and record whether that was done. Basis: Lin. 7.
73. The system must produce a worker identification list (name, photo optional, ID code) per client site. Basis: AR art. 17.

**K. Records, security and data protection**

74. All filings, acuses, contracts, imports and evidence packs must be kept read-only for at least 5 years after the later of the record date and the related return's due date. The default is 6 years, configurable to 10. Deletion before the minimum is blocked. Basis: LSS art. 15 fr. II; CFF art. 30.
75. The system must act as "persona encargada" (processor) for the contractor. It needs: a processor agreement; a privacy notice template for the contractor's workers covering ICSOE/SISUB processing; encryption at rest and in transit; role-based access; an access log; breach notification to the customer without delay; and confidentiality undertakings for staff. Basis: LFPDPPP art. 2 fr. XII, 14-15, 18-20.
76. The system must state where data is hosted. It must document the legal basis for any international transfer or remission (the founder's company is abroad). Basis: LFPDPPP art. 35-36 (whether processor hosting abroad counts as a "transfer" under the 2025 law is unverified).

**L. Rule maintenance and multi-client use**

77. Every rule must be versioned data with an effective date and a source URL. This covers layouts, sanitiser rules, inconsistency checks, deadlines, holidays, UMA and fines. A change log must be visible to users. Test: switching the SISUB layout version re-validates all draft packages. Basis: frequent SISUB layout changes (Dec 2023, Jun 2026).
78. Accounting-firm users must see a multi-RFC dashboard with, per RFC and period: ICSOE status, SISUB status, deadline, days left, late flag, open authority notices, REPSE expiry and opinion status. Test: 25 RFCs load in one view, sortable by days left. Basis: workflow need (the portals are single-filer, Lin. 4.1-4.2).

## Open questions

1. **Official SISUB files.** I could not open the June 2026 SISUB guide or the current .xls layouts. INFONAVIT hosts them inside the Portal Empresarial or behind contadormx forms. The exact column order, lengths, header-row rule and Logmensaje structure must come from the official files before build (requirements 40-46, 63).
2. **SISUB login.** Does SISUB now need an e.firma, or still only NRP plus password (2021 rules)? This matters for the "who files" workflow.
3. **SUA matching rule for SISUB money.** The June 2026 guide (as reported) says amounts must match SUA/SIPARE. 2023 guidance said not to force a match for partial bimesters. Which applies now?
4. **ICSOE CSV header row.** Does the upload expect a header row? The IMSS XLSM exports the CSV, so test with it.
5. **ICSOE Actualización and Sin Efectos.** Are they live in the portal? The public lists show only Normal, Sin información and Corrección.
6. **Nil-return fine.** Is a missing ICSOE "Sin Información" return finable under LSS 304-A XXII, given that 15-A speaks of contracts "celebrados"? Look for court rulings (tesis) or IMSS criteria.
7. **RIM text.** Get the official text of RIM art. 6 fr. XVIII and 8 fr. IV, and check whether the 2025 LINFONAVIT reform changed fines.
8. **Fines actually imposed.** How many ICSOE and SISUB fines have IMSS and INFONAVIT imposed? A transparency request (Plataforma Nacional de Transparencia) to IMSS would answer this.
9. **Filer count gap.** 142k ICSOE filers vs about 89k REPSE registrants. Download the STPS padrón, if it can be exported, and match by name.
10. **Acuerdo REPSE amendments.** Read the DOF texts of 3 Feb 2023 and 21 Feb 2024 to confirm the duty to inform clients of renewal (art. 18, second paragraph) and any other new duties.
11. **Data protection.** Confirm the processor rules and international-hosting position under the 2025 LFPDPPP. The 2011 regulation may still apply until a new one is issued.
12. **State ISN withholding.** Which states require client withholding on specialised services in 2026? This only matters for the evidence pack.
13. **IMSS opinion via Buzón only (since 1 Oct 2025), valid one day.** Confirm against the Consejo Técnico agreement.

## Sources

Primary (laws and official rules)
- Ley del Seguro Social, consolidated, last reform DOF 15 Jan 2026: https://www.diputados.gob.mx/LeyesBiblio/pdf/LSS.pdf
- Ley del INFONAVIT, consolidated, last reform DOF 21 Feb 2025: https://www.diputados.gob.mx/LeyesBiblio/pdf/LIFNVT.pdf
- Ley Federal del Trabajo, consolidated, last reform DOF 14 May 2026: https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf
- Ley del ISR, consolidated: https://www.diputados.gob.mx/LeyesBiblio/pdf/LISR.pdf
- Ley del IVA, consolidated: https://www.diputados.gob.mx/LeyesBiblio/pdf/LIVA.pdf
- Código Fiscal de la Federación, consolidated, last reform DOF 9 Apr 2026: https://www.diputados.gob.mx/LeyesBiblio/pdf/CFF.pdf
- LFPDPPP, consolidated, last reform DOF 14 Nov 2025: https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf
- IMSS Lineamientos ICSOE, DOF 13 Apr 2022: https://www.imss.gob.mx/sites/all/statics/icsoe/ACUERDO_68PDIR_LINEAMIENTOS_ICSOE.pdf
- STPS Acuerdo REPSE, DOF 24 May 2021: https://dof.gob.mx/nota_detalle.php?codigo=5619148&fecha=24/05/2021
- STPS Acuerdo de simplificación, DOF 9 Jun 2026: https://dof.gob.mx/nota_detalle.php?codigo=5790015&fecha=09/06/2026

Official IMSS and STPS pages, guides and data
- https://www.imss.gob.mx/icsoe
- https://www.imss.gob.mx/icsoe/listado-publico
- https://www.imss.gob.mx/icsoe/plantilla
- https://www.imss.gob.mx/icsoe/preguntas
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/1-Guia-Ingreso-Registro-Datos-Generales-Contratista.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/2-Guia-Registro-de-Informativa-y-Contrato.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/3-Guia-Carga-Masiva-de-trabajadores.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/5-Guia-Firma-y-Presentacion.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/guias/6-Guia-Informativa-Sin-Informacion.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/Guia-para-usar-la-plantilla-de-carga.pdf
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPP2026.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LPT2025.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIP2026.xlsx
- https://www.imss.gob.mx/sites/all/statics/icsoe/listadopublico/LIIT2025.xlsx
- https://www.imss.gob.mx/sites/all/statics/i2f_news/IMSS%20Boletin%20300.pdf
- https://www.imss.gob.mx/sites/all/statics/i2f_news/Boletin%20Conjunto.%20396.pdf
- https://www.gob.mx/cms/uploads/attachment/file/872321/COMUNICADO_CONJUNTO_STPS_Intercambio_de_Informaci_n_REPSE_revisi_n_conjunta_221123.pdf

Secondary (practitioner and press)
- https://www.taxtodaymexico.com/publica-infonavit-reglas-para-informar-prestacion-de-servicios-especializados/
- https://cms.idconline.mx/store/uploads/attachments/DOCUMENT_f68c94b3e9aa911480312be19518a31e.pdf
- https://contadormx.com/sisub-infonavit-guia-art-29-bis-informe-continuo/
- https://contadormx.com/15-preguntas-frecuentes-del-sisub-del-infonavit/
- https://contadormx.com/sisub-plantilla-de-trabajadores/
- https://contadormx.com/salario-de-los-trabajadores-sisub/
- https://contadormx.com/informe-cuatrimestral-del-sisub-ante-el-infonavit/
- https://contadormx.com/errores-comunes-del-sisub-al-infonavit/
- https://idconline.mx/seguridad-social/2022/09/19/sisub-presenta-problemas-de-ultima-hora
- https://idconline.mx/seguridad-social/2021/09/24/infonavit-apoya-a-patrones-para-cumplir-con-el-sisub
- https://idconline.mx/seguridad-social/2026/07/03/opinion-de-cumplimiento-imss-requisitos-para-un-resultado-positivo
- https://idconline.mx/seguridad-social/2025/02/11/imss-exhorta-a-empresas-de-servicios-especializados-a-cumplir-obligaciones
- https://idconline.mx/seguridad-social/2025/12/18/repse-una-deuda-pendiente-en-la-formalizacion-empresarial
- https://idconline.mx/laboral/2026/06/10/adios-trabas-del-repse-stps-facilita-la-renovacion-y-registro
- https://idconline.mx/laboral/2026/07/23/actualizacion-en-portal-repse-que-cambia-para-ti
- https://siemprealdia.co/mexico/derecho-laboral/simplificacion-del-repse-stps/
- https://www.taxtodaymexico.com/exhortan-imss-y-stps-a-34-mil-empresas-inscritas-en-repse-a-regularizarse/
- https://www.taxtodaymexico.com/stps-dias-inhabiles-en-2026-para-repse-inspeccion-y-sanciones/
- https://www.taxtodaymexico.com/?p=13057
- https://blog.alegra.com/mexico/valor-de-la-uma-2026/
- https://www.bhrmx.com/wp-content/uploads/2026/08/Servicios-especializados-el-riesgo-no-termina-con-el-REPSE.pdf
- https://www.bhrmx.com/wp-content/uploads/2026/01/CONTRIBUCIONES-LOCALES-CAMBIOS-RELEVANTES-2026-2.pdf
- https://lexlatin.com/entrevistas/repse-mexico-nuevas-auditorias
- https://www.tiempo.com.mx/economia/cancelo-stps-51-mil-inscripciones-del-repse-por-incumplimientos-septiembre-2026/
- https://www.elfinanciero.com.mx/monterrey/2022/10/18/jorge-e-galindo-causacion-del-impuesto-sobre-nominas-en-nl/
- https://ey.com/content/dam/ey-unified-site/ey-com/es-mx/services/tax/documents/ey_matrizisn2025_vf.pdf
- https://www.littler.com/es/news-analysis/asap/mexico-tiene-nueva-ley-en-materia-de-proteccion-de-datos-personales
- https://axa.mx/documents/51602/20700179/DOCUMENTO%20REPSE.pdf
- https://praxiumconsultores.com/blog/icsoe-y-sisub-cuanto-cuesta-cumplir-cada-cuatrimestre
- https://elconta.mx/fiscalizacion-imss-2026-paradigma-control-digital/
- https://amcpdf.org.mx/fiscalizacion-del-imss-en-la-era-repse/
