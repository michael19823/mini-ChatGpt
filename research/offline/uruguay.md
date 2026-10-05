# Uruguay: Offline-Industries Pass

Research date: 2026-10-05. Searches used: 7 of 20. The 7th search was refused with a usage-limit error, so I stopped there, as the instructions say. This is a **short, partial report**. Many seed groups were screened only from desk knowledge and are marked "not verified". None of them should be treated as researched.

Context from the existing country report (not repeated here): Uruguay is small (about 3.4M people) and well digitized. The state ships free unified tools: BPS–MTSS payroll, SNIG cattle traceability, and the MGAP DGSA online services. That pattern shows up again in the quiet industries below. The regulator's own free portal is usually the substitute.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Pesticide application contractors and large own-use sprayers (ground, aerial, drone) | Register in RUO, enrol equipment in REA, and log **every application in RAPF within 7 calendar days**. Applicators need a carnet (renewed every 4 years). Agronomist prescriptions must name the applying company | Field work is logged on paper or by phone. Carnet courses are held in person. RAPF is a web form re-keyed after the job | Unknown. RUO list not found. Colza alone reached a record of about 400,000 ha (Urupov/Blasina), and RAPF has been mandatory for colza, camelina and carinata since 10 Aug 2026 | **Candidate** | Per-job, mandatory, rising scope in 2026. The free MGAP portal is the main substitute |
| Lift / vertical-transport maintenance companies (Montevideo) | Register with the Intendencia (Decreto 34.812). File an **annual safety report per device** to the SIME service. Sworn statement signed by the responsible engineer | Documents must be filed **on paper and in digital form** | Unknown. Probably dozens of firms, covering thousands of lifts (estimate) | **Weak candidate** | Real per-device filing, but very few buyers, and one municipality |
| Second-hand dealers, pawnbrokers, scrap dealers | Police-facing register of goods bought (assumed) | Not found online | Unknown | **Not enough evidence** | The search did not surface a Uruguayan police register or its rules. Only Ley 12.367 (1957) listing "casas de compraventa de objetos usados" as a business category |
| Beekeepers | Annual hive declaration to the MGAP register and hive transit permits (not verified) | Not verified | Not verified | **Not researched** | The search was refused at this point |
| Livestock producers and traders (DICOSE) | Annual sworn stock declaration, transit and ownership guides through SNIG | Rural agents (escritorios rurales) do it for producers (not verified) | Not verified | **Rejected (prior)** | SNIG is a free, mature state system. The existing report already killed the traceability angle |
| Households employing domestic workers | BPS registration and monthly contributions | BPS online services | Not verified | **Rejected (prior)** | BPS–MTSS unified filing is free. Accountants handle the rest |
| Waste transporters | Ministry .xlsm service report | Excel macro template | Ministry Excel list (see country report) | **Already covered** | In the existing country report. Not re-reported here |
| Well drillers (DINAGUA) | Driller registration and well reports (not verified) | Not verified | Not verified | **Not researched** | Budget cut off |
| Septic trucks (barométricas) | Departmental registration (not verified) | Not verified | Not verified | **Not researched** | Budget cut off |
| Artisanal fishers (DINARA) | Permits and catch reports (not verified) | Not verified | Not verified | **Not researched** | Budget cut off |
| Tattoo studios, feriantes, taxis | Departmental or MSP licences (not verified) | Not verified | Not verified | **Not researched** | Budget cut off. Likely low value |

---

## 2. Strongest opportunities

### Opportunity: RAPF spray-log bridge for application contractors

**Industry:**
Agricultural pesticide application services (ground rigs, aircraft and drones), plus producers who spray their own extensive or forest crops with tanks of 1,000 L or more.

**Buyer:**
The owner-operator of a small spray-contracting business (one to a few rigs or a drone), or the office person who does the MGAP data entry for them. Secondary buyer: the agronomist or input distributor who writes the prescriptions and wants the records to match.

**Trigger / Why now:**
- RAPF (Res. DGSA 959/2022, which replaced Res. 672/022) requires every application to be registered online within 7 calendar days, on the MGAP DGSA platform.
- On **10 Aug 2026**, MGAP made RAPF registration mandatory for **colza/canola, camelina and carinata**, from the start of flowering to harvest. Colza reached a record of about 400,000 ha, so this adds many applications in the 2026 season.
- MGAP's new prescription program requires the applying company to be named on the agronomist's prescription and to be registered with DGSA. MGAP has said that application companies will soon have to log these prescribed products in RAPF, and the company doing the job must match the one on the prescription. This adds a cross-check between two documents.

**Current workflow:**
1. The agronomist issues a prescription in the MGAP prescription program, naming the product, dose, area and applying company.
2. The operator sprays. Field data (paddock, product, dose, time, wind and so on) goes on paper, in WhatsApp, or in the rig's own log.
3. Within 7 days, the operator or office staff log in to the DGSA platform and re-key each application into RAPF.
4. Staff send the producer a copy of the job record, for invoicing and for any buyer or certification records. This is a separate document.
5. The operator keeps the carnet (renewed every 4 years) and equipment enrolment (REA) current.

**Pain:**
The obligation is per job, has a 7-day deadline, and falls in the peak spraying season. That is when a small contractor has the least office time. The prescription-to-application matching rule creates a new way to get it wrong. I found no complaint posts. The pain level is inferred from the workflow (estimate).

**Existing solutions:**
- The MGAP RAPF web platform itself, which is free (mgap.gub.uy/dgsadayddaplicacion, web.snig.gub.uy/DGSAProductor). This is the main substitute.
- Farm-management and agronomy platforms used in the Southern Cone. I did not verify whether any of them export to or integrate with RAPF. **Unverified.**
- Rig and drone telemetry logs, which record the job but are not RAPF-formatted (estimate).
- Paper notebooks and office staff.

**Offline evidence:** applicator qualification is an in-person course leading to a carnet. MGAP announces program changes through press releases and agricultural press (Revista Verde, El Telégrafo, Todo el Campo), not through vendor ecosystems. No RAPF-integrated software surfaced in search.

**Offline channel:** carnet courses for professional ground applicators, held by course providers (one was found on sociedaduruguaya.org). Input distributors and agronomists who write the prescriptions. The aero-agricultural operators' association (name not verified). Rural press. The DGSA RUO register, if it is published (not verified).

**Market count:** **Unknown.** I could not find the number of RUO-registered applicators. I'd guess low hundreds of service companies plus some large own-use producers (estimate, not verified).

**The gap:**
Nothing (that I found) turns one field record into the RAPF entry, the producer's job sheet and a check against the prescription. The state portal only takes manual entry.

**Possible product:**
An offline-first mobile spray log. The operator picks the prescription, confirms the paddock (GPS) and conditions, and the app produces a RAPF-ready entry (assisted fill or, if possible, automated submission), a PDF job sheet for the producer, and a warning when the product, dose or company doesn't match the prescription.

**MVP:**
A mobile form plus a browser helper that fills the RAPF web form from saved jobs, and a 7-day deadline dashboard.

**Pricing hypothesis:**
USD 20–60 per month per rig or drone, seasonal. Many buyers would rather pay for a done-for-you entry service (for example, USD 2–5 per application) than for software (estimate).

**How to find first customers:**
Carnet course providers, prescribing agronomists, agrochemical distributors, and aerial and drone operators reached by phone or WhatsApp.

**Risks:**
- MGAP could add a mobile app or API, removing the gap.
- Automated portal submission may break or be prohibited.
- The market is very small and seasonal.
- Agronomy platforms may add RAPF export.
- A non-local solo founder could not realistically sell this. It needs a local with rural contacts.

**Kill condition:**
MGAP offers mobile RAPF entry or bulk upload, or fewer than about 150 service applicators are registered.

**Score:** 4/10

**Sources:**
- https://www.gub.uy/tramites/registro-aplicaciones-productos-fitosanitarios-rapf
- https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/tramites-y-servicios/servicios/registros-aplicaciones-productos-fitosanitarios-rapf
- https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/comunicacion/noticias/registro-productores-equipos-pulverizadores-para-uso-propio-nueva-plataforma
- https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/institucional/normativa/resolucion-n-672022-dgsa-registro-aplicaciones-productos-fitosanitarios-uso
- https://estrucplan.com.ar/republica-oriental-del-uruguay-resolucion-959/
- https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/comunicado (new prescription program)
- https://www.eltelegrafo.com/2026/07/registro-de-fitosanitarios-en-camelina-colza-y-carinata/
- https://todoelcampo.com.uy/archives/48780
- https://blasinayasociados.com/urupov-confirma-record-con-400-000-hectareas-de-colza/
- https://www.gub.uy/ministerio-ganaderia-agricultura-pesca/comunicacion/noticias/comunicado-inscripcion-ruo-rea-aplicadores-fitosanitarios-planta-tratamiento
- https://www.sociedaduruguaya.org/2025/08/curso-de-uso-y-manejo-seguro-de-productos-fitosanitarios-para-obtencion-del-carnet-aplicador-profesional-terrestre.html
- https://revistaverde.com.uy/agricultura/para-marcar-un-diferencial-en-los-mercados-el-mgap-actualiza-y-amplia-el-registro-de-aplicaciones-de-agroquimicos/

---

### Opportunity: Annual lift-safety report generator for Montevideo maintenance firms

**Industry:**
Lift and vertical-transport installation and maintenance.

**Buyer:**
The owner or responsible engineer of a small or mid-sized lift maintenance company registered with the Intendencia de Montevideo.

**Trigger / Why now:**
No new 2025–2026 trigger was found. The standing obligation is Departmental Decreto 34.812. Every maintenance company must register, and must file a yearly safety report per device in its roster (a test of every safety device) with the Servicio de Instalaciones Mecánicas y Eléctricas (SIME). Filings go in on paper and digitally.

**Current workflow:**
1. A technician inspects each device yearly and fills in a checklist.
2. The office types up the per-device annual safety report.
3. The responsible engineer signs it.
4. Staff submit the paper and digital copies to SIME for each device in the roster.
5. Staff track which devices are due, across hundreds of buildings.

**Pain:**
Mandatory per-device paperwork, with a dual paper and digital filing that shows re-keying. The total count per firm is unknown.

**Existing solutions:**
Large multinational lift companies have in-house systems (assumption, not verified). Smaller firms likely use Word or Excel templates. No Uruguayan product was searched for (budget).

**Offline evidence:** the dual paper-plus-digital submission requirement, and the engineer's signature on paper.

**Offline channel:** the Intendencia's registered-company list (if published), and phone outreach.

**Market count:** Unknown. Likely dozens of firms (estimate).

**The gap:**
Turning a technician's mobile checklist into the SIME-format report and a due-date roster.

**Possible product:**
A mobile inspection checklist that produces the SIME report PDF per device, with an annual-due dashboard.

**MVP:**
A checklist template, PDF output and a due-date list.

**Pricing hypothesis:**
USD 1–3 per device per year, or USD 50–150 per month per firm (estimate).

**How to find first customers:**
The Montevideo register of maintenance companies, and phone calls.

**Risks:**
Too few buyers. Only one municipality was checked. A generic inspection app (form builder) is an easy substitute. A non-local founder would struggle.

**Kill condition:**
Fewer than about 30 small firms, or SIME accepts a simple online upload.

**Score:** 3/10

**Sources:**
- https://tramites.montevideo.gub.uy/print/pdf/node/50993
- https://tramites.montevideo.gub.uy/print/pdf/node/36117
- https://www.comprasestatales.gub.uy/Pliegos/pliego_704364.pdf

---

## 3. Rejected

- **Second-hand, pawn and scrap dealer registers.** I could not confirm a current Uruguayan police register or reporting format. The only hit was the 1957 licensing law naming the category. Without evidence I can't build a case, so it's parked, not proven absent.
- **Livestock (DICOSE/SNIG) and household employers (BPS).** Free, mature state systems plus rural agents and accountants already do the work. The existing report reached the same conclusion.
- **Waste transport.** Already in the country report.
- **Beekeepers, well drillers, barométricas, artisanal fishers, tattoo studios, feriantes.** Not researched because the search budget was cut off. Market sizes in Uruguay are likely too small for standalone products in any case (estimate).

## 4. Method notes

- What worked: Spanish regulator-first queries naming the register acronym (RAPF, RUO, REA, Decreto 34.812). gub.uy, tramites.montevideo.gub.uy and the rural press (El Telégrafo, Todo el Campo, Revista Verde) came up quickly.
- What didn't: a generic search for police registers of second-hand dealers returned Argentine results.
- Recurring finding: in Uruguay, the regulator's own free portal (MGAP DGSA, SNIG, BPS) is the default substitute. Any quiet-industry product here is a re-keying bridge with a small market, best sold as a module of a regional (Argentina/Uruguay) product.
- The session was cut short by a refused search after 7 calls.
