# Finland - research report (2026-10-05)

Method note: 15 web searches, mostly in Finnish. WebFetch was not used, so the evidence comes from search-result summaries of official pages (ym.fi, syke.fi, ymparisto.fi, suomi.fi, stm.fi, wellbeing-county PDFs), not full reads. Competitor diligence is thin: anything not confirmed in a search result is marked "unverified". Finland is an accessible market. It is in the EU, has no sanctions issues, and a foreign software seller needs no licence. Selling usually needs a Finnish-language UI, and many official integrations ask for a Finnish business ID or Suomi.fi credentials.

Overall verdict: Finland is a well-digitised, state-run market. Government builds free central registers (SIIRTO, Rapu, Varda, Kanta, Incomes Register) and established Finnish vendors (Pinja, Enpros, Provet, Visma, Procountor and others) integrate with them quickly. This report found no 7+/10 opportunity. The best remaining gaps are small "exception and reconciliation" layers around the new waste and construction registers. All of them need interviews before anyone builds.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Demolition / construction | Building Act 2025: demolition-material and construction-waste report (Rapu), first at permit stage and again with actual quantities at completion | Candidate (Opp. 1) | New since 2025. The completion form must be built from several haulers' receipts and transfer documents. Rapu itself is a free government tool |
| Waste / septic-sludge haulers | SIIRTO e-transfer documents, quarterly reports to the municipal waste authority under Waste Act s.39, annual summary | Candidate, weak (Opp. 2) | Mandatory and recurring, but Pinja, Enpros and the regional waste companies' portals already serve it |
| Private social care (home care, personal assistance, cleaning vouchers) | Service-voucher rulebooks and reporting per wellbeing county; Kanta connection by 1 Sep 2026 | Candidate, weak (Opp. 3) | Rules split across 21 wellbeing counties. The Kanta core needs Class A certification, which rules it out for an indie |
| Social-care client records (Kanta) | Joining Kanta by 1 Sep 2026 with a certified system | Rejected (barrier) | Class A certification is needed; small-provider systems (Nappula, Domacare) already exist |
| Early childhood education (private daycares) | Varda data submission (15th and last day of each month by UI, or 1 day by integration) | Too competitive | Daycare systems integrate with Varda (vendors unverified). The mandate dates from 2019, so there is no new trigger |
| Accounting firms / SMEs | Mandatory iXBRL financial statements from 2027 (phased) | Rejected | PRH plans a free conversion service, and accounting software (Procountor, Netvisor and others; unverified that they cover it) will absorb it |
| Veterinary | Antimicrobial-use reporting to Ruokavirasto within 14 days (by API or UI) | Too competitive / small | In force since about 2022–23. Practice-management systems (e.g. Provet Cloud, unverified integration) handle it. Few ambulatory vets left doing it manually |
| Agriculture | Electronic plant-protection-product records (EU 2023/564) | Not concluded | No Finnish-specific evidence found. Farm software (Wisu and others) is likely to cover it (unverified) |
| Chimney sweeping | Reporting to rescue services after the 2019 deregulation | Rejected | No 2026 trigger or new electronic reporting duty found |
| Cross-border waste shipments | EU Waste Shipment Regulation, DIWASS e-procedures from 21 May 2026; green-list waste goes electronic on 1 Jan 2027 | Too competitive / niche | Run in an EU central system, used by a small number of brokers and recyclers |

## Opportunities

### Opportunity: Rapu completion pack (demolition and construction-waste actuals reconciler)

**Industry:**
Demolition contractors, renovation contractors, building owners' project managers, and consultants who prepare demolition-material surveys.

**Buyer:**
Project or site managers at small and mid-size demolition and renovation contractors (purkuurakoitsijat). Also the hazardous-substance and demolition survey consultancies that prepare Rapu reports for property owners.

**Trigger / Why now:**
The new Building Act took effect on 1 Jan 2025. A project needs a demolition-material and construction-waste report at the building or demolition permit or notification stage. On completion, the report must be updated with the actual waste quantities transported, their delivery sites and their treatment, and the data goes into Syke's Rapu system (rapuselvitys.fi). The authority must process the preliminary form before the completion form can be filled in. Syke updated the filling instructions on 22 May 2026, and municipalities (e.g. Tampere) are still publishing calculators and guidance. The process is still bedding in.

**Current workflow:**
1. At permit stage, the initiator, contractor or consultant estimates material quantities, using a municipal calculator or Excel, and enters them into Rapu.
2. During the job, waste leaves the site with several haulers. Each issues weighbridge receipts and SIIRTO transfer documents in its own portal (Pinja, Enpros, regional waste-company portals) or as PDFs.
3. At completion, someone gathers all receipts and transfer documents and maps them to Rapu's waste and material categories and treatment routes. They total them per category, re-key the totals into Rapu's completion form and send it to building control.

**Pain:**
Reconciling several haulers' documents to Rapu categories at the end of each project is manual. The completion form is mandatory before building-control sign-off. Evidence of complaints was not found (unverified). The pain is inferred from the workflow and from the volume of guidance municipalities are issuing.

**Existing solutions:**
- Rapu itself, a free Syke web form.
- Haulers' customer portals and reports (Pinja e-transfer document service, Enpros, Lassila & Tikanoja and other major haulers; their reporting depth is unverified).
- Consultancies that prepare surveys manually.
- Municipal Excel calculators (e.g. Tampere).

**The gap:**
No tool was found that takes all the haulers' transfer documents and receipts for one site and produces the Rapu completion data, flagging missing or unmatched loads. Whether Rapu has an import API is unverified.

**Possible product:**
A per-project workspace. It ingests transfer documents and receipts (CSV or PDF from the hauler portals, or an API where SIIRTO data access allows), maps waste codes to Rapu categories, flags gaps against the permit-stage estimate, and outputs ready-to-enter Rapu completion values plus an evidence pack for building control.

**MVP:**
Upload PDF or CSV receipts from 2–3 major haulers, use a mapping table to Rapu categories, and produce a summary sheet plus a variance report against the estimate. No integrations yet.

**Pricing hypothesis:**
EUR 49–149 per project, or EUR 99–199 per month for contractors with ongoing jobs (estimate).

**How to find first customers:**
- Members of the Finnish Demolition Association (Purkuliikkeiden liitto, fda.fi), which hosts Syke Rapu talks at its "Purkupäivä".
- Contractor and consultant names on public demolition permit decisions in municipal meeting minutes.
- RAKLI and Rakennusteollisuus member lists.

**Risks:**
- The total market is small (the number of demolition firms is unverified; likely in the hundreds).
- Rapu or SIIRTO could add direct linking of transfer documents to Rapu projects, which would kill the gap.
- Big haulers may offer per-site Rapu reports for free.

**Kill condition:**
Kill the idea if Syke links SIIRTO transfer documents to Rapu projects automatically, if the major haulers already export Rapu-ready summaries, or if interviews show that consultants absorb the work cheaply inside survey fees.

**Score:** 5/10

**Sources:**
- https://www.ymparisto.fi/fi/luvat-ja-velvoitteet/jatteiden-kerays-kuljetus-ja-valitys-suomen-sisalla/purkumateriaalin-ja-rakennusjatteen-maarien-raportointi
- https://wwwi.ymparisto.fi/rapu/rapu_tayttoohje.pdf (filling instructions, updated 22.05.2026)
- https://www.suomi.fi/palvelut/purkumateriaali-ja-rakennusjateselvityksen-laatiminen-ja-kasittely-rapu-jarjestelmassa-suomen-ymparistokeskus-syke/c18aa6b6-0b06-49bd-b62c-9cc47ee944bc
- https://www.tampere.fi/ajankohtaista/2025/06/04/purkumateriaalilaskuri-ja-uusia-ohjeita-purkumateriaali-ja
- https://fda.fi/wp-content/uploads/2025/09/8_Purkupaiva_25092025_Martin_Excell_SYKE.pdf
- https://www.rakennuslehti.fi/wp-content/uploads/2025/09/Purkumateriaalien-uudet-raportointivaatimukset-Martinkauppi.pdf

### Opportunity: Small-hauler compliance router (SIIRTO, s.39 quarterly municipal reports, annual summary)

**Industry:**
Septic and sealed-tank sludge haulers, grease-trap and sand-separator emptiers, and small skip and construction-waste haulers.

**Buyer:**
Owner-operators with 1–5 trucks who are registered in the waste-management register (registration has been mandatory for all waste carriers since 1 Jan 2023).

**Trigger / Why now:**
- Since 1 Sep 2022, sludge, grease and sand-separator sludge, construction and demolition waste, hazardous waste and contaminated soil need e-transfer documents whose data goes to Syke's SIIRTO register by API.
- Under Waste Act s.39, carriers must send the municipal waste authority property-level emptying data at least quarterly, in an editable electronic format (deadlines 30 Apr, 31 Jul, 31 Oct and 31 Jan), plus an annual summary by waste type. Sludge transports are exempt from the quarterly report only if the data has gone to SIIRTO.
- Syke ran a training webinar for waste carriers on 12 May 2026, and ELY centres run roadside "tehotarkkailu" checks on waste transports.
- Many municipalities are reviewing their transport systems in 2025–26 (e.g. a Jämijärvi report dated 30.3.2026).

**Current workflow:**
1. The driver records the job on paper, in Excel or in a hauler app.
2. A transfer document is created in an e-service (Pinja, Enpros, or the regional waste company's portal) and pushed to SIIRTO.
3. For waste outside SIIRTO, or for authorities wanting their own format, the hauler compiles quarterly property-level emptying lists in Excel for each municipal waste authority it operates in, and then an annual summary.

**Pain:**
The duty is mandatory and recurring (per job, quarterly, annual), and roadside enforcement exists. There are around 20–30 regional municipal waste authorities, but whether their formats really differ is unverified.

**Existing solutions:**
- Pinja's electronic transfer document service (browser and mobile).
- Enpros Sähköinen Siirtoasiakirja.
- MaterialPort (used by Pirkanmaan Jätehuolto).
- Regional waste companies' own portals (e.g. LSJH, Lapeco).
- Larger fleet and ERP systems (unverified).

**The gap:**
The gap is unproven. The likely remaining piece is one cheap tool for micro-haulers that turns a single job record into the SIIRTO document, every municipal s.39 file and the annual summary. Pinja and Enpros may already do all of this (unverified).

**Possible product:**
A mobile job log that creates the e-transfer document and pushes it to SIIRTO, then automatically generates each municipal authority's quarterly s.39 file and the annual summary.

**MVP:**
Job log, s.39 quarterly export in the formats of 3–5 regional authorities, and an annual summary. SIIRTO API integration comes in phase 2, because it needs Syke interface onboarding.

**Pricing hypothesis:**
EUR 29–79 per month per truck (estimate).

**How to find first customers:**
- The public waste-management register (jätehuoltorekisteri) of registered carriers, kept by ELY centres.
- Municipal waste authorities' lists of contract-based sludge carriers.
- Hauler lists in municipal meeting minutes.

**Risks:**
- Strong incumbents (Pinja, Enpros).
- Municipalities moving to municipally-tendered transport shrinks the base of independent haulers for mixed and bio waste. Sludge often remains contract-based (unverified per area).
- SIIRTO API onboarding effort.

**Kill condition:**
Kill the idea if Pinja or Enpros already generate the s.39 reports, or if prices for micro-haulers are already under about EUR 30 per month.

**Score:** 4/10

**Sources:**
- https://ym.fi/-/siirto-rekisteri-kayttoon-tiettyjen-jatteiden-kuljetuksissa-1.9.2022-alkaen
- https://ym.fi/documents/1410903/38678498/Siirtoasiakirja+muistio_p%C3%A4ivitys_15092023.pdf/180fb9c1-4a37-9fe1-c0ac-4629862be205/Siirtoasiakirja+muistio_p%C3%A4ivitys_15092023.pdf?t=1696240625010
- https://www.suomi.fi/palvelut/jatteen-siirtoasiakirjojen-tietojen-toimittaminen-siirto-rekisteriin-suomen-ymparistokeskus-syke/e771b4b9-bd80-48e1-b9fd-7194f7c4a5e0
- https://www.syke.fi/sites/default/files/documents/Koulutuswebinaari%2012.5.2026%20Koulutus%20j%C3%A4tteenkuljettajille%20esitys.pdf
- https://pinja.com/fi/ratkaisut/sahkoinen-siirtoasiakirjapalvelu
- https://www.enpros.fi/ratkaisumme/sahkoinen-siirtoasiakirja/
- https://jamijarvi.fi/wp-content/uploads/2026/05/Jamijarvi-kuljetusjarjestelmaselvitys-30.3.2026.pdf
- https://www.sttinfo.fi/tiedote/71293023/jatekuljetukset-olivat-jalleen-viranomaisten-tehotarkkailussa-hameessa?lang=fi

### Opportunity: Multi-county service-voucher rulebook and reporting tracker for small care providers

**Industry:**
Private social-care and support services that are paid through wellbeing-county service vouchers or purchase contracts: home care, personal assistance, home cleaning, and service housing.

**Buyer:**
Owner-managers of small private care and support firms that serve several wellbeing counties.

**Trigger / Why now:**
- Since 2023, the 21 wellbeing counties each publish their own voucher rulebooks (sääntökirja) per service type, with separate reporting, quality and billing rules. Examples are a Pohjois-Pohjanmaa cleaning-voucher rulebook from June 2026 and a Päijät-Häme bulletin for 2026 voucher and purchase-service providers.
- Private social-service providers that have a client-data system must join Kanta by 1 Sep 2026, and the counties are running onboarding sessions in April–August 2026.

**Current workflow:**
1. The provider reads each county's rulebook and its updates.
2. Service events and staff qualifications are tracked in Excel or a basic system.
3. Billing and reporting go through each county's voucher system, with requirements that differ by county and service.

**Pain:**
The rules are split by county and by service type. Rulebooks change yearly, and a breach can cost the provider its approved-provider status. Direct complaint evidence was not found (unverified).

**Existing solutions:**
- Care ERPs and client-record systems (Nappula and Domacare are noted as small-environment systems; others unverified).
- The counties' own voucher portals (Vaana / PSOP is believed widely used, unverified).
- Consultants and the trade association Hyvinvointiala HALI.

**The gap:**
A cross-county rulebook-requirements tracker and evidence checklist (staff qualifications, self-monitoring plan, reporting dates) for a provider active in several counties. This avoids the certified client-record core.

**Possible product:**
A compliance calendar plus a checklist engine, preloaded with each county's voucher rulebooks for 3–4 service types, that tracks staff certificates and the provider's evidence.

**MVP:**
Rulebook requirements for 5 counties and 2 service types (cleaning and home care), with a deadline calendar and certificate expiry alerts.

**Pricing hypothesis:**
EUR 39–99 per month (estimate).

**How to find first customers:**
- The counties' public lists of approved voucher providers.
- The Soteri / Valvira provider register.
- HALI members.

**Risks:**
- Low willingness to pay among micro firms.
- Care ERPs may add this.
- Rules change often, so content upkeep is heavy.
- Close to "generic compliance calendar", which the brief warns against.

**Kill condition:**
Kill the idea if interviews show that most providers work in only one county, or if Vaana or the care ERPs already carry the rulebook requirements.

**Score:** 3.5/10

**Sources:**
- https://stm.fi/-/asiakastietolakiin-muutoksia-sosiaalihuollon-kanta-palveluun-liittymisen-maaraaikoja-muutetaan
- https://paijatha.fi/wp-content/uploads/2026/08/Tiedote-ostopalvelu-ja-palveluseteliyrittajat-2026.pdf
- https://pohde.fi/wp-content/uploads/2026/06/Pohjois-Pohjanmaan-hyvinvointialueen-siivouspalvelun-palvelusetelin-saantokirja.pdf
- https://etelasavonha.fi/wp-content/uploads/2026/08/Sosiaalihuollon-kirjaamisen-ja-Kanta-palvelujen-info-yksityisille-palveluntuottajille-12.8.2026.pdf
- https://www.kanta.fi/documents/20143/132911/Sosiaalihuollon+asiakastiedon+arkisto%2C+yksityinen+palveluntuottaja+liittyjana.pdf/702870bd-a3d0-ef38-d9df-9eff69a0b30e

## Rejected after competitor research

- **Kanta-compliant client-record system for small social-care providers (deadline 1 Sep 2026).** The trigger is strong, but the provider must use a Class A certified system, which is a multi-step certification and not indie-friendly. Small-provider systems such as Nappula and Domacare already exist. Source: https://www.kanta.fi/documents/20143/132911/Sosiaalihuollon+asiakastiedon+arkisto%2C+yksityinen+palveluntuottaja+liittyjana.pdf/702870bd-a3d0-ef38-d9df-9eff69a0b30e and https://journal.fi/finjehew/article/view/113710/69801
- **iXBRL financial-statement filing for SMEs and accounting firms (from 2027).** PRH will offer a free conversion service, and Finnish accounting software will build it in. Source: https://www.xbrl.org/news/finland-moves-to-mandatory-xbrl-reporting-for-company-accounts/
- **Electronic waste transfer documents (SIIRTO) as a standalone product.** Pinja, Enpros, MaterialPort and the regional waste companies' portals already cover it. Source: https://pinja.com/fi/ratkaisut/sahkoinen-siirtoasiakirjapalvelu
- **Veterinary antimicrobial-use reporting.** In force for several years, with API integration through practice systems (Provet Cloud is the dominant Finnish one; integration unverified). Source: https://www.edilex.fi/mt/mmvm20210018
- **Intrastat.** The arrivals reporting obligation is removed from 1 Jan 2026 (about 4,400 companies freed), so the pain is shrinking. Source: https://www.vatcalc.com/finland/finland-raises-2023-intrastat-thresholds/

## Attractive problem, poor distribution

- Service-voucher compliance across the 21 wellbeing counties: the buyers are thousands of very small firms with low willingness to pay.
- Sole-practitioner production-animal vets entering antimicrobial data by hand: too few buyers.

## Too competitive

- Varda reporting for private daycares (daycare system vendors integrate; the specific vendors are unverified).
- Construction-site reporting (monthly contractor and worker reporting to Vero, Valtti cards, Tilaajavastuu): established vendors exist. Not searched this round, so this is based on prior knowledge and unverified.
- Housing-company share register (HTJ) and property-manager compliance: dominated by property-management suites (unverified).
- EUDR and packaging EPR for Finnish forestry and producers: handled by large forest companies and producer-responsibility organisations (Rinki) (unverified).
