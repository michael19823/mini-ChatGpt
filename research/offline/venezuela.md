# Venezuela: offline (quiet) industries pass

Date: 2026-10-05. Searches used: 8 of 8 (Spanish, extended mode). WebFetch not used. All facts come from search-result summaries. Anything else is marked "unverified" or "estimate". Accessibility caveats (payment rails, low purchasing power, SENIAT homologation, sanctions screening) are in `research/countries/venezuela.md` section 0 and apply here too. A foreign solo founder would need a local partner for any of these.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Residential building staff (conserjes) employed by condominium boards | Special Law for the Dignification of Residential Workers (Decreto 8.197, 2011): social benefits, IVSS affiliation, working hours; the employer is the condominium board | Boards are volunteer co-owners (min. 3 members, one-year terms, per the Ley de Propiedad Horizontal); odoocondominio.com and Procondominios blogs sell advice, suggesting Excel/administrator work | Unverified; no count found | Weak candidate (#1) | Real recurring payroll and prestaciones burden, but money per building is tiny and Odoo-based condominio software already exists |
| Household domestic workers | IVSS registration, employer registry of the worker | Only legal-theory sources found; no portal or enforcement evidence | Unverified | Rejected | No enforcement or trigger found; households will not pay |
| Funeral services and cemeteries | Registration with the National Council for Funeral Services and Cemeteries (Ley 2014); municipal tariffs (Caracas ordinance, May 2023); burial permits from the civil registry | Search results note many informal funeral companies operating without mandatory permits | Unverified | Rejected for now | Council registry/count not found; informality and the civil-registry permit sit with the state |
| Scrap metal dealers | Decreto 2.258 (Gaceta 40.861) and joint resolution (Gaceta 40.931) set a registry (REGCHAT) for acquiring solid metal waste, aluminium, copper and iron scrap | The registry is an official government web system | Unverified; the site's current status is unknown (the page may be dead; not checked) | Rejected | Government system already exists; 2015-era rule with unverified enforcement |
| Pawnshops, gold and jewellery buyers, antique dealers | Non-financial "sujetos obligados": AML compliance and suspicious-activity reports (RAS) to UNIF; customer ID and transaction records (KPMG, UNIF) | Obligation is real; whether small shops comply on paper is unverified | Unverified | Weak, local-only | Real obligation, but enforcement is political and SUDEBAN/UNIF contact is via compliance officers; payment and trust barriers |
| Livestock traders and ranchers | INSAI movement permits: since 1 December (year unverified) cattle, buffalo, sheep, goat, pig and poultry movements require a permit through SIGESAI; producers must register first | Moved to an online system (SIGESAI/SIGMAV); a Sept 2026 INSAI "Registro Único" profile launch was reported; blogs explain the steps | Unverified | Rejected | Government portal is the system; no private integration layer visible, and the process looks already digital |
| Small abattoirs and butchers | SACS sanitary permit (type IV for butchers); SACS abattoir inspections (Sept 2026) | SACS inspections reported; permits via SIACVISA | Unverified | Rejected | State portal with consultant guides; small money per butcher |
| Minibus and taxi lines, cooperatives | INTT Certificación de Prestación de Servicio (CPS), unit incorporation (certificado de idoneidad / permiso), turns and route extensions; cooperatives need a certificate from SUNACOOP; municipal endorsement | Many INTT procedures are listed as separate forms; page content suggests paperwork per unit | Unverified; no count in results | Weak candidate (#2) | Real recurring unit and route paperwork, but low-income operators and the process is already in INTT's hands |
| Beekeepers, farriers, tattoo studios, hunting outfitters | No evidence found in the 8 searches | n/a | n/a | Not screened | Budget exhausted |
| Money changers, street vendors | Not searched | n/a | n/a | Not screened | Budget exhausted; in a dollarised, informal economy a regulator-led approach has little to find |

## 2. Strongest opportunities

I found no opportunity that clears the bar. The two weakest-but-least-bad are below, scored honestly low.

### Opportunity: Condominium payroll and prestaciones pack for building boards and administradoras

**Industry:**
Residential condominium administration (workers covered by the Residential Workers Law)

**Buyer:**
Professional condominium administradoras (companies managing many buildings), not the volunteer boards.

**Trigger / Why now:**
No new trigger found. The law dates from 2011. A Prodavinci piece and a September 2026 2001online piece on conserjes in earthquake-damaged buildings suggest there is public attention, but that is a one-off.

**Current workflow:**
1. The administrator collects monthly expenses and splits them across co-owners.
2. Staff pay, IVSS/FAOV contributions and prestaciones sociales are worked out by hand or in Excel.
3. The board approves and the co-owners are billed.

**Pain:**
Unverified. Sources only describe legal rights, and blogs sell condominio software.

**Existing solutions:**
Odoo Condominio (odoocondominio.com, a local Odoo-based product), Excel, Procondominios and other advisory blogs, general payroll modules (Galac, Profit Plus Nómina, per the country report).

**The gap:**
Staff-liability calculation (prestaciones, housing term) inside condominio billing, but local condominio tools probably already cover it (unverified).

**Possible product:**
A payroll and prestaciones module designed for conserjes inside condominio accounts.

**MVP:**
Prestaciones and vacation calculator tied to monthly condominio statements.

**Pricing hypothesis:**
$10-20 per building per month (estimate); poor.

**How to find first customers:**
Local administradora associations and condominio WhatsApp groups (unverified existence).

**Risks:**
Low price, local-only trust, payment rails.

**Kill condition:**
Odoo Condominio or Galac already covers staff payroll; administradoras say Excel is enough.

**Score:** 2/10

**Offline evidence:** Boards are volunteer co-owners with one-year terms; advice comes from blogs and administrators (Ley de Propiedad Horizontal text; odoocondominio.com).
**Offline channel:** Administradora associations, building assemblies, WhatsApp groups (all unverified).
**Market count:** Unverified; no count found.

**Sources:**
- https://www.mpppst.gob.ve/mpppstweb/wp-content/uploads/2014/03/LEY_ESPECIAL_PARA_LA_DIGNIFICACION_DE_TRABAJADORES_Y_TRABAJADORAS_RESIDENCIALES.pdf
- https://odoocondominio.com/blog/condominios-venezuela-3/entendiendo-la-ley-de-propiedad-horizontal-de-venezuela-lph-una-guia-para-principiantes-36
- https://procondominios.com.ve/deberes-legales-ineludibles-de-un-administrador-de-condominios-en-venezuela/
- https://prodavinci.com/que-esta-pasando-con-los-conserjes/

### Opportunity: INTT permit pack for transport lines and cooperatives

**Industry:**
Urban and intercity public transport lines and cooperatives

**Buyer:**
Line/cooperative administrators (junta directiva or the person who files paperwork).

**Trigger / Why now:**
INTT updated the steps to validate the legal paperwork of cooperatives and lines, and published CPS requirements (Noticias24, 2001online; dates not confirmed by me).

**Current workflow:**
1. Gather the municipal endorsement and the SUNACOOP certification (for cooperatives).
2. File CPS, new route, turn, unit-incorporation and extension applications at INTT.
3. Re-file when units change.

**Pain:**
Unverified; only official procedure pages found.

**Existing solutions:**
INTT's own forms and procedures, gestores and local lawyers (unverified), no software found.

**The gap:**
A tracker of units, documents and expiry dates per line. The market may be too poor and informal to pay.

**Possible product / MVP / Pricing:**
Document and expiry tracker per line, $5-15 per month (estimate).

**How to find first customers:**
Line leaders at terminals (unverified); no register of counts found.

**Risks:**
Very low willingness to pay, informal cash economy, local-only access.

**Kill condition:**
Line administrators do not hold paperwork themselves or will not pay.

**Score:** 2/10

**Offline evidence:** Procedures run through INTT pages and forms; no vendor results surfaced.
**Offline channel:** Terminal visits and line leaders.
**Market count:** Unverified.

**Sources:**
- https://www.intt.gob.ve/inttweb/?page_id=3656
- https://www.intt.gob.ve/inttweb/?page_id=3690
- https://www.noticias24hrs.com.ve/instituto-nacional-de-transporte-terrestre-actualiza-los-pasos-para-validar-la-permisologia-legal-de-cooperativas-y-lineas/
- https://2001online.com/servicios/intt-fija-condiciones-requisitos-para-obtener-la-certificacion-de-prestacion-de-servicio-de-transporte-publico-2026411800

## 3. Rejected

- Livestock movement (INSAI SIGESAI): already a state portal.
- Scrap dealers (REGCHAT): state registry exists; status unverified.
- Funeral homes/cemeteries: informal sector, counts and registry not found.
- Pawnshops/jewellers AML reports to UNIF: real but compliance-officer work and the political risk is high.
- Domestic workers (households): no trigger, no willingness to pay.
- Butchers/abattoirs (SACS): permits through a state portal, low value.

## 4. Method notes

- The regulator-first Spanish queries returned official law texts and procedure pages but almost no counts, fines or enforcement news. Enforcement evidence was not findable.
- No register counts for any of these sectors surfaced, so the market counts are all unverified.
- Search results were dominated by SEO guide sites (ecu11, tramitespublicos, consultasvenezuela). They describe procedures but give no pain evidence.
- The 8-search budget covered 9 groups. Beekeepers, tattoo studios, hunting, money changers and farm-input sellers were not searched.

## Opus review

**Verdict:** sound. A short, honest weak-lead report within an 8-search budget. Both leads are correctly scored 2/10, and existing tools (Odoo Condominio, Galac) are named.

**Claims checked:** none by search (0 searches; nothing scores 4 or higher). Desk check: Decreto 8.197 (2011) on residential workers and the REGCHAT scrap registry (Gaceta 40.861 / 40.931) are cited with specific gazette numbers. They are plausible but **unverified** here.

**Re-scores:** none.

**Treat as unreliable:** the INTT "updated steps" trigger (the report says its dates are unconfirmed); the SIGESAI start date ("1 December, year unverified").

Research model: Sonnet
