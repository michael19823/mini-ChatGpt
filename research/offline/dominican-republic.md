# Dominican Republic: Offline (Quiet) Industries Pass

Date: 2026-10-05. Budget: 20 WebSearch calls. 14 were made; the 13th and 15th were refused with a usage-limit error, so I stopped there as the instructions say. This is a short report. Some rows below could not be checked for competitors, and they are marked as such.

The existing country report (`research/countries/dominican-republic.md`) already covers AML/goAML for DGII-supervised non-financial businesses, including pawnshops, jewellers, car dealers and notaries. It also covers MIPYME procurement under Ley 47-25 and EUDR for cocoa. None of these is repeated here.

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Households employing domestic workers | Written contract, registration on the Ministerio de Trabajo portal (domesticas.mt.gob.do), and a fixed TSS contribution of RD$600 a month (RD$571.50 from the employer, RD$28.50 from the worker) under the pilot plan | Registration goes through a government web form. Employers have to be reminded publicly, and requirements are reported as unclear (El Día, "Requisitos para inscribir en TSS a domésticas no existen") | About 240,000 domestic workers (figure cited in coverage of the labour-code reform; estimate) | **Reject** | The legal basis is unstable: the Constitutional Court (TC) annulled Resolución 14-2022 in 2023, and the new labour code was still in the legislature. The fee is fixed and paid once a month, so there's almost nothing to automate and households won't pay for software |
| 2 | Employers of foreign (mostly Haitian) workers: construction contractors, farms | Ley 16-92 "80/20" quota (at least 80% Dominican staff). Since a March 2026 DGM resolution, renewing a temporary work permit requires a formal employment contract processed through the Ministerio de Trabajo | Labour inspectors issue paper warning notices ("actas de apercibimiento") on site. The work runs through migration lawyers and gestores | The Ministerio de Trabajo reports about 90,000 infraction notices a year for 80/20 violations (El Nuevo Diario); the number of employers is unknown | **Opportunity (weak)** | The rule is enforced at scale and got stricter in 2026. But the topic is politically sensitive, the buyer would only pay for a done-for-you service, and a local founder is required |
| 3 | Lottery betting shops (bancas) and their consortia | Plan Nacional de Regularización under Decreto 197-26 (26 Mar 2026); DGII tax registration; sales-and-winners reports to the Dirección de Casinos; a new gambling law creating a DGJA, a unified register and a 10-year freeze on new bancas | Regularization is done through declarations and dossiers. The regulator threatens closures and seizures, and the operators' association ASONABIL complains about "trabas" (obstacles) | More than 71,000 bancas registered for tax purposes (Dirección de Casinos, via focusgn) | **Opportunity (hypothesis)** | A real 2026 trigger with a huge count. But the competition among existing banca point-of-sale vendors was not checked (the search was refused) |
| 4 | Motoconcho (moto-taxi) operators | Mandatory registration, reflective vest showing the plate number, licence, and membership in a recognised association ("comunidad") of their municipality (Ley 63-17 and the INTRANT/MIP plan) | Registration happens in person at drives with queues, and INTRANT granted a 15-day extension | Not found; registration drives drew "multitudes" of riders | **Reject** | The individual rider pays nothing. The associations ("sindicatos") and municipalities run registration themselves, so there's no software buyer |
| 5 | Colmados and liquor outlets | Alcohol-sale hours (Resolución ESP/001-2022) enforced by COBA, the alcohol-sales control office | Enforcement is by police patrol, with no filing | Not found | **Reject** | The obligation is a curfew, not a recurring filing. e-CF invoicing is already covered in the country report |
| 6 | Cattle farmers and livestock traders | DIGEGA cattle traceability: ear tags plus registration of the producer and the farm | Only about 500,000 of 2.5 million head registered since 2014 (El Caribe) | 2.5 million head; producer count unknown | **Reject** | Uptake is low because enforcement is weak. DIGEGA runs the registry itself, and there's no trigger |
| 7 | Beekeepers and honey exporters | RAEX export registration, the LINEAM exporter list, and residue monitoring (Res. 07-2015) | DIGEGA runs a national beekeeper census project | About 3,500 beekeepers and 74,654 hives (DIGEGA figures, older data) | **Reject** | Too small. Exports are about US$1.4M a year (2016) |
| 8 | Fishermen and fish traders | CODOPESCA registration of fishermen, boats and gear; fishing licence; closed seasons ("vedas") | Done through CODOPESCA visits to landing sites ("caletas") | Not found | **Reject** | No recurring filing that a small operator would pay to automate |
| 9 | Agrochemical shops and fumigation companies | Registration with the Ministerio de Agricultura plant-health department (Sanidad Vegetal), under Ley 311 of 1968; post-registration inspections | Paper registration and inspections | Not found | **Reject** | The law is 1968-era with no new reporting trigger found |
| 10 | Scrap metal exporters | National register for exporting non-ferrous scrap, held by a licensing council (per search summary; unverified detail) | Unclear | Not found | **Insufficient evidence** | Search results were mostly about Colombia |
| 11 | Pawnshops and compraventas (second-hand dealers) | A police register book was searched for; only Spanish and Uruguayan rules came up | — | — | **Covered elsewhere** | They are already in the country report's AML/goAML item (Ley 155-17) |
| 12 | Pharmacies (controlled drugs, DNCD) | Not screened: the search was refused | — | — | **Not screened** | — |

## 2. Opportunities

### Opportunity: Work-permit renewal and 80/20 compliance file for small construction contractors and farms

**Industry:**
Construction subcontracting (small contractors and site foremen, "maestros de obra") and agriculture (farms and estates, "fincas") that employ Haitian workers.

**Buyer:**
The owner of a small construction firm or farm, or the outside accountant or labour lawyer who handles its staff.

**Trigger / Why now:**
In March 2026 the DGM issued a resolution under which a temporary work permit can only be renewed with a formal employment contract processed through the Ministerio de Trabajo (Dominican Today, 26 Mar 2026). The Ministerio de Trabajo runs inspection campaigns on the 80/20 rule: in one 2025 operation, eight of nine companies inspected in San Antonio de Guerra were in breach, and about 90,000 infraction notices are issued each year.

**Current workflow:**
1. The employer hires workers informally, often without documents.
2. A gestor or lawyer gathers each worker's documents (passport, PNRE card, the old permit) and drafts a contract.
3. The contract is filed with the Ministerio de Trabajo, then the permit application or renewal goes to the DGM in person.
4. The employer tracks the national/foreign headcount (80/20) separately in a spreadsheet or from TSS payroll, if at all.
5. An inspection visit produces paper warning notices, which are answered through a lawyer.

**Pain:**
The inspection and infraction figures above. The 2026 rule ties each permit to a formal contract, so every renewal now involves two agencies.

**Existing solutions:**
Immigration lawyers and gestores (unnamed, many). The TSS's own system (SUIR) for payroll headcount. General payroll software. No SMB tool for tracking contracts and permits against the 80/20 ratio was found, but the check was shallow (unverified).

**Offline evidence:**
The work is filed in person at the DGM and the Ministerio de Trabajo, inspectors issue paper notices, and employers rely on gestores.

**Offline channel:**
Contractor associations (unverified which ones are active), accounting firms that handle construction clients, and farm-input suppliers and producer associations in border provinces. Requires a local partner.

**Market count:**
Not available. The proxy is about 90,000 infraction notices a year (Ministerio de Trabajo, via El Nuevo Diario), which counts notices, not employers.

**The gap:**
No single file links each foreign worker's permit expiry, the contract processed through the Ministerio de Trabajo, and the firm's current 80/20 ratio, ready to show an inspector.

**Possible product:**
A permit-and-contract register per employer. It alerts on expiries, generates the contract in the format the Ministerio expects, computes the 80/20 ratio from the TSS payroll export, and produces an inspection-ready PDF. It would be sold as a service through gestores and accountants.

**MVP:**
A spreadsheet import of workers, an expiry calendar and WhatsApp reminders, an 80/20 ratio calculator from the TSS export, and an inspection binder PDF.

**Pricing hypothesis:**
RD$1,500–3,000 per employer per month through an accountant, or a per-renewal fee paid on top of the gestor's fee. Buyers will pay for done-for-you, not for software.

**How to find first customers:**
Accounting firms with construction clients, and labour lawyers. A local is needed.

**Risks:**
Politically charged (migration enforcement); the founder could be seen as helping either evasion or deportation. Many employers want to stay informal rather than become compliant. The rules change by decree.

**Kill condition:**
Interviews show that employers prefer to pay fines and bribes, or work informally, rather than formalize; or gestores already run this in WhatsApp and Excel and won't pay.

**Score:** 4/10 (pain 6, frequency 5, mandatory 8, fragmentation 4, competition unknown, gap 5, accessibility 3, WTP 4 and service-only, MVP 7, distribution 3). A non-local solo founder can't sell this.

**Sources:**
- [Dominican Today, Migration strengthens controls on foreign labor permits (26 Mar 2026)](https://dominicantoday.com/dr/local/2026/03/26/migration-strengthens-controls-on-foreign-labor-permits/)
- [El Nuevo Diario, Ministerio de Trabajo revela 90 mil infracciones](https://elnuevodiario.com.do/ministerio-de-trabajo-revela-se-cometen-90-mil-infracciones-en-mano-de-obra/)
- [Diario Libre, Empresas violan el 80-20 (12 May 2025)](https://diariolibre.com/economia/empleo/2025/05/12/empresas-violan-el-80-20-al-contratar-a-extranjeros/3109062)
- [DGM, desautoriza carnets de trabajo a haitianos en agricultura (2023)](https://migracion.gob.do/transparencia/wp-content/uploads/2023/02/24-01-Migracion-desautoriza-entrega-de-carnets-de-trabajos-a-nacionales-haitianos-que-supuestamente-laboran-agricultura-en-Dajabon.pdf)

---

### Opportunity: Regularization and compliance file for lottery bancas under Decreto 197-26 and the new gambling law

**Industry:**
Lottery and sports-betting shops (bancas de lotería y deportivas) and the consortia that operate them.

**Buyer:**
The owner of a consortium with roughly 5 to 100 bancas, or a single-shop owner going through regularization.

**Trigger / Why now:**
Decreto 197-26 (26 Mar 2026) reopened the national regularization plan. It repealed Decreto 295-22 and gives the DGII the job of checking operators' tax compliance; the registration period was later extended. The Ministry of Finance warns that unregularized bancas will be closed and their equipment seized (N Digital, 25 May 2026). The Chamber of Deputies passed a gambling law on 23 Jul 2026 that creates a Dirección General de Juegos de Azar (DGJA) and a unified register, freezes new bancas for 10 years, sets minimum distances, and offers discounts on tax debts up to Dec 2025. The bill went back to the Senate; final promulgation is unverified. Resolución 184-2026 created a national self-exclusion system for problem gamblers.

**Current workflow:**
1. The owner declares each banca in the regularization plan and gathers its DGII status, municipal permits and lease.
2. The owner files periodic sales-and-winners reports to the Dirección de Casinos. A "Reporte de Ventas y Ganadores – Concesionarias" form dated Oct 2025 was mentioned in a search result (unverified).
3. Tax debts are negotiated separately with the DGII.
4. The owner answers inspections and closure threats one banca at a time.

**Pain:**
The threats of closure and seizure; ASONABIL publicly complains about obstacles to regularization; the 10-year freeze makes an existing licence a scarce asset, so losing one is costly.

**Existing solutions:**
Point-of-sale and lottery-terminal software vendors used by consortia (very likely many exist; **not checked**, because the search was refused), tax lawyers such as FC Abogados (who publish guides on gambling taxes), and the regulator's own registration system.

**Offline evidence:**
Shops are counter businesses. Regularization runs through declarations, councils and associations (ASONABIL, Fenabanca), not portals that operators talk about online.

**Offline channel:**
The banca associations ASONABIL and Fenabanca, and lottery-terminal suppliers.

**Market count:**
More than 71,000 bancas registered for tax purposes (Dirección de Casinos, via focusgn and the Chamber debate). The number of distinct owners is much smaller and unknown.

**The gap:**
Hypothesis: a per-banca compliance file (licence status, DGII status, distance rules, reports filed, self-exclusion checks) across a consortium. It may already be bundled in banca POS systems.

**Possible product:**
A licence-and-filing tracker for consortia that keeps each banca's regularization status, deadlines and reports ready for the new DGJA.

**MVP:**
A table of bancas per consortium with document expiries and report deadlines, plus a generator for the sales-and-winners report from POS exports.

**Pricing hypothesis:**
RD$300–800 per banca per month (estimate).

**How to find first customers:**
ASONABIL and Fenabanca; the public regularization lists if published (unverified).

**Risks:**
Lottery POS vendors add a compliance module. A gray-market and political sector. The law could still change in the Senate. Reputational risk for a foreign founder.

**Kill condition:**
The DGJA requires a real-time connection that existing POS vendors provide, or the main POS vendors already produce the reports.

**Score:** 4/10 (pain 6, frequency 7, mandatory 8, fragmentation 3, competition probably strong and unchecked, gap 4, accessibility 6, WTP 6, MVP 6, distribution 5). Needs a local founder.

**Sources:**
- [Dirección de Casinos, Gobierno inicia Plan de Regularización](https://www.casinos.gob.do/gobierno-inicia-plan-de-regularizacion-de-bancas-de-loteria/)
- [Yogonet, El Gobierno reactiva proyecto para regularizar juegos de azar (16 Apr 2026)](https://www.yogonet.com/latinoamerica/noticias/2026/04/16/108515-republica-dominicana-el-gobierno-reactiva-un-proyecto-para-regularizar-los-juegos-de-azar)
- [N Digital, Magín Díaz: bancas ilegales deberán regularizarse o cerrar (25 May 2026)](https://n.com.do/2026/05/25/magin-diaz-advierte-bancas-ilegales-deberan-regularizarse-o-cerrar-operaciones/)
- [Diario Libre, Cámara aprueba regulación juegos de azar (23 Jul 2026)](https://diariolibre.com/politica/congreso-nacional/2026/07/23/camara-de-diputados-aprueba-regulacion-juegos-de-azar/3608782)
- [focusgn, más de 71 mil bancas registradas](https://focusgn.com/latinoamerica/son-mas-de-71-mil-las-bancas-registradas-para-fines-tributarios-en-republica-dominicana)
- [focusgn, ASONABIL denuncia trabas](https://focusgn.com/latinoamerica/republica-dominicana-asonabil-denuncia-trabas-que-impiden-la-regularizacion-de-las-bancas-de-loterias)
- [El Brifin, La ley que regula las apuestas y juegos de azar (17 Sep 2026)](https://elbrifin.com/2026/09/17/la-ley-que-regula-las-apuestas-y-juegos-de-azar-todo-lo-que-debes-saber/)

## 3. Rejected

- **Household-employer TSS service for domestic workers:** the TC annulled Res. 14-2022 in 2023. Since then registration has been a voluntary pilot ([El Día](https://eldia.com.do/ministro-respalda-inclusion-trabajadores-domesticos/), [Presidencia](https://presidencia.gob.do/noticias/ministerio-de-trabajo-y-tss-reiteran-empleadores-registrar-trabajadores-domesticos)). The contribution is a flat RD$600 a month, so there's nothing to calculate. The new labour code passed the Senate in first reading ([El Caribe](https://www.elcaribe.com.do/panorama/senado-aprueba-en-primera-lectura-el-nuevo-codigo-de-trabajo/)), and its final status is unverified. Revisit only if the code is promulgated and makes registration mandatory.
- **Motoconcho registration:** riders don't pay. Municipalities and associations run it ([El Día](https://eldia.com.do/faride-raful-registro-de-motoconchistas-sera-obligatorio-en-el-pais/)).
- **Cattle traceability (DIGEGA):** 20% uptake in 10 years and no enforcement ([El Caribe](https://www.elcaribe.com.do/panorama/dinero/el-programa-para-registrar-ganado-lleva-ritmo-lento/)).
- **Beekeepers:** about 3,500 operators and a small export trade.
- **Fishermen (CODOPESCA):** no recurring filing.
- **Agrochemical shops and fumigators:** the law dates from 1968 and no new trigger was found.
- **Colmado alcohol hours:** an enforcement curfew, not a filing.

## 4. Method notes

The most productive queries combined a Dominican regulator's name or acronym with the obligation (DGM, Ministerio de Trabajo "80/20", Dirección de Casinos, Decreto number). Results came mostly from national newspapers (Diario Libre, El Caribe, El Día) and the gaming trade press (focusgn, Yogonet). Searches built on generic Spanish dealer-register terms ("libro registro", "compraventas", "chatarreros") returned Spanish, Uruguayan and Colombian rules instead of Dominican ones. Official registers with counts are rarely indexed; the only hard counts came from regulators quoted in the press. The search budget was cut short by a usage-limit refusal after 14 calls, so competitor checks for the bancas idea and the pharmacy (DNCD) screen were not done.
