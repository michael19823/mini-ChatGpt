# Poland: offline-industries pass (2026-10-05)

Scope: quiet, regulator-facing industries only. Opportunities already in `research/countries/poland.md` (nurseries/RKZ-5, tourist fee, e-Doręczenia, EUDR sawmills; also BDO waste, funeral homes, SENT, KSeF, spray records) are not repeated here.

Budget used: about 41 WebSearch calls (2 more were refused for a usage limit and then retried), almost all in Polish. WebFetch was blocked, so all evidence comes from search-result snippets. Anything a snippet does not state directly is marked "unverified" or "estimate".

**Headline finding:** Poland's quiet industries are better served by software than the pattern predicted. In almost every regulated niche with a recurring filing, a small Polish vendor already exists, and often the state or a vendor offers a free tool. This holds for septic haulers, livestock traders, chimney sweeps, hunting clubs, care agencies, scrap yards, pawnshops and driving schools. Only two leads survive, and both are weak or medium.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Regional bus/minibus carriers (busiarze, ex-PKS) | Act of 31 Jul 2026: timetables in NeTEx (or NeTEx-compatible GTFS), published by the marshal and the National Access Point (KPD); existing timetables must be converted by 31 Dec 2027. Monthly statutory-discount (ulgi ustawowe) refund claims to the marshal; FRPA subsidy per vehicle-km | Paper timetables at stops, ticket printers, claims under a contract with each marshal's office | ~1,000 domestic bus carriers listed on e-podroznik (Teroplan); 9,039 FRPA-subsidised lines in Q1 2026 (MI) | **Candidate** | New mandatory format with a hard deadline. Teroplan is the incumbent, but the long tail of 1-10-bus firms is plausible |
| Chimney sweeps (zakłady kominiarskie) | Every chimney inspection must be entered as an e-protocol in CEEB/ZONE (GUNB) since 18 Sep 2023; paper protocols are no longer valid | Field work, no internet in cellars, outages of CEEB | Unknown; KIK publishes no count (unverified) | **Candidate (weak)** | Per-job and mandatory, but the state portal is free and KominiarzPro, ePrzeglądy and others exist |
| Septic/cesspool haulers (firmy asenizacyjne) | Quarterly report to *every* municipality served (water-law amendment of 7 Jul 2022), plus lists of properties and contracts; municipal permit | Municipality-specific paper/PDF forms on BIP | Unknown (permits are issued per municipality) | **Rejected** | The Polish Florida-grease analogue is already solved: Aquarius GO (free), Asenizacja.online, BioKontrol, Monitoring Ścieki Polskie (free for municipalities) |
| Livestock traders / collection points | IRZplus movement notifications to ARiMR | Many farmers report via office visits | Not found | **Rejected** | IRZplus.pl and Byczkomat.pl already use the ARiMR API with OCR for cattle traders |
| Scrap yards (skupy złomu) | ID-verified register of every purchase, scrap-acceptance form, BDO records, annual reports | Counter trade, cash/transfer | Not found | **Rejected** | itopen.pl scrap program plus the crowded BDO tool market (see country report) |
| Pawnshops (lombardy) | AML obliged entities since 7 Jan 2024, new lombard rules, risk assessment, AML officer | Counter business | Not found | **Rejected** | AML is sold as a done-for-you document pack (iAML, systemaml.pl, Lombard Pod Nadzorem). One-off documents, little recurring workflow |
| Currency exchange (kantory) | NBP register, AML controls, GIIF reporting | Counter business | 2,137 operators / 4,555 kantory at 31 Dec 2025 (NBP) | **Rejected** | NBP ran 325 inspections and imposed 18 fines worth only 321k PLN in 2025: low pain. AML vendors are present |
| Household employers (nannies on umowa uaktywniająca) | Monthly ZUS DRA + RCA by the 15th | Parents file themselves or use an accountant | Not found | **Rejected** | Consumers, low WTP, and the state budget pays most contributions. Payroll tools and accountants cover it |
| Polish care agencies posting carers to Germany | A1 certificate per posting (electronic only), German rules on the posting model | Rotations every few weeks | Poland issued 676.7k A1s in 2021, 51% for Germany (ZUS); agency count not found | **Rejected** | HRappka, Hrily, SilverGo, Lockstep and Atomerp all target care agencies |
| Parish cemeteries | Planned electronic grave register under a new cemeteries act | Paper cemetery books | ~10k parishes (estimate) | **Watch** | The act is still not passed (the 2026 target date has lapsed). Grobonet and eCmentarze already serve the market |
| Hunting clubs (koła łowieckie) | Electronic hunt-entry book (art. 42b Prawo łowieckie), annual plans | Was paper until the reform | Not found | **Rejected** | ~80% were already electronic before the mandate; several vendors plus the state EKP+ app |
| Tattoo studios | Sanepid notification, 2004 hygiene regulation | Local inspections, inconsistent rules | Not found | **Rejected** | No recurring filing. A Nov 2025 interpellation asks only for uniform standards |
| Dog/cat microchipping (vets, breeders, shelters) | KROPiK act of 15 May 2026: mandatory chip + registration; the vet registers within 2 days | New state register | All vet clinics (unverified count) | **Watch** | In force 3 years after publication (~2029). Vet PMS vendors will absorb it |
| Driving schools (OSK) | Draft UD402: digital trainee card, GPX route logging, video of internal exams (1 Jul 2027 / 1 Jan 2029) | Paper trainee cards today | 5,302 OSK (snippet, source unverified) | **Too competitive** | OSKAdmin, CarDriveManager ("we are ready"), biz.prawko.pl, eZapisOSK, pJazdy, Infomat Kierowca. Still a draft |
| Vehicle inspection stations (SKP) | CEPiK entry per inspection; mandatory vehicle photos proposed | Diagnostician workflow | Not found | **Rejected** | CEPiK-certified station software already exists. The photo rule is still a draft |
| Plant nurseries (szkółki) | PIORiN register of professional operators, plant passports | Exam and registration at the counter | Not found | **Rejected** | Low frequency and low value; the passport is a label, not a filing |
| Well drillers | Notify geology authority + wójt 2 weeks before works; geological project approval | Paper notification | Not found | **Rejected** | Per-job but low volume. Most domestic wells (<30 m) fall outside geology law |

## 2. Strongest opportunities

### Opportunity: NeTEx Timetable + Marshal Filing Pack for Small Bus Carriers

**Industry:**
Regional and commuter bus/minibus transport (private "busiarze", small ex-PKS firms, operators running lines for powiat/gmina organisers).

**Buyer:**
Owner-manager of a carrier with 1-30 vehicles running regular lines, either commercial (with a "potwierdzenie zgłoszenia") or for a public organiser.

**Trigger / Why now:**
The Act of 31 Jul 2026 amending the public collective transport act:
- requires operators and carriers to prepare and publish timetables in the NeTEx standard, or GTFS if it is compatible and interoperable with NeTEx;
- requires those timetables to be published on the operator's and the marshal's websites and fed into the National Access Point (KPD);
- gives until **31 Dec 2027** to convert timetables made before the act;
- makes voivodeship marshals "transport integrators" of all lines, commercial ones included;
- renames FRPA the Transport Exclusion Prevention Fund.

The national NeTEx profile has been published by the ministry.

**Current workflow:**
1. The owner designs the timetable in Excel/Word or on paper and prints it for stops and the website.
2. The owner submits it, with the line application or change, to the organiser or the marshal on paper or by ePUAP.
3. Each month the owner pulls a statutory-discount report from the ticket printer and fills in the marshal's refund form (contract per marshal's office).
4. From 2027/28 the same timetable must also exist as a valid NeTEx/GTFS file that names stops by the national stop-register ID. This step is new, and small firms have no tool for it.

**Pain:**
The format is mandatory, technical (XML, stop IDs, calendars) and alien to owner-operators. Non-compliant timetables risk the line confirmation and visibility in KPD and marshal journey planners. Ticket cash registers on subsidised lines must already produce daily and monthly discount reports. Hours spent and penalties for non-compliance are unverified.

**Existing solutions:**
- Teroplan (e-podróżnik, Informica 2.0): lists about 1,000 domestic carriers, explicitly advertises GTFS/NeTEx publication and markets to small and large carriers. It is the main incumbent.
- Ticket-machine and cash-register vendors: generate the discount reports.
- Organisers or marshals may build timetables themselves for contracted lines (unverified).
- University project T-INCLUDED (Poznań University of Technology) works on timetable digitisation (scope unverified).
- Consultants and transport planners.

**Offline evidence:**
Timetables are still posted on paper at stops. Carriers rarely have websites (the act says "if it has one"). Discount refunds are claimed on per-marshal forms with signed contracts. There is no SaaS review presence for small-carrier timetabling.

**Offline channel:**
- The 16 marshals' offices: lists of carriers with discount-refund contracts and confirmations of regular services, published in voivodeship BIPs.
- Voivodes' lists of FRPA-funded lines and operators.
- Ticket-printer and cash-register dealers serving regional carriers.
- Phone outreach to carriers listed on e-podróżnik and in BIP line registers.

**Market count:**
About 1,000 domestic bus carriers listed by e-podróżnik (Teroplan's own figure); 9,039 FRPA-subsidised lines after Q1 2026 (Ministry of Infrastructure). The number of distinct carriers in BIP registers is unverified.

**The gap:**
A cheap, guided "draw your timetable → valid NeTEx/GTFS with national stop IDs → marshal and KPD upload" tool for firms too small for a full Informica deployment. A second module, a monthly discount-refund claim builder fed from ticket-printer exports, would make the product recurring.

**Possible product:**
A web form where the owner enters lines, stops (picked from the national stop register), departures and calendars. It outputs a validated NeTEx file plus a printable stop timetable, and keeps versions for each change. An add-on imports ticket-printer CSVs and fills each marshal's monthly refund form.

**MVP:**
NeTEx/GTFS export from a simple timetable editor with validation against the national profile, for one voivodeship's stop register. Done-for-you conversion of existing paper timetables as a paid onboarding service.

**Pricing hypothesis:**
One-off conversion of 500-1,500 PLN, plus 49-149 PLN/month for changes, publication and the refund-claim module (estimate). Buyers are more likely to pay for a done-for-you service than for software. Expect a service-plus-software model.

**How to find first customers:**
Marshal and voivode BIP lists (above), e-podróżnik's carrier list, and regional carrier associations (names unverified).

**Risks:**
- Teroplan may simply bundle NeTEx export for its existing carriers, cheaply.
- Marshals as integrators may offer free editors.
- Timetables change only a few times a year, so after conversion the work is low-frequency.
- Secondary legislation (format details, KPD upload method) is not yet out.
- Founder access: the buyers are Polish-only, phone-first owner-operators. **A non-local solo founder could not realistically sell this without a Polish partner.**

**Kill condition:**
Teroplan or the marshals offer free or near-free NeTEx conversion to all carriers. Or interviews show that organisers, not carriers, will produce the files for most lines.

**Score:** 5/10

**Sources:**
- https://orka.sejm.gov.pl/proc10.nsf/ustawy/2700_u.htm
- https://www.prawo.pl/samorzad/sejm-uchwalil-ustawe-o-transporcie-zbiorowym-marszalkowie-beda-integrowac-przewozy,1548832.html
- https://system.e-podroznik.pl/zmiany-przepisow-publiczny-transport-zbiorowy/
- https://www.e-podroznik.pl/public/forCarriersMain.do
- https://www.gov.pl/attachment/a76aa2b7-baf9-41f6-9892-850f385cfdbf (national NeTEx profile)
- https://www.gov.pl/web/infrastruktura/fundusz-rozwoju-przewozow-autobusowych
- https://t-included.put.poznan.pl/category/cyfryzacja-rozkladow-jazdy/
- https://bip.warmia.mazury.pl/252/zawarcie-umowy-dotyczacej-refundacji-kosztow-sprzedazy-biletow-ulgowych-osobom-uprawnionym-do-korzystania-z-ulgowych-przejazdow-autobusowych-na-podstawie-odpowiednich-ustaw.html
- https://www.bileteria-online.pl/faq/ulgi-ustawowe

### Opportunity: Offline-First CEEB Protocol Capture for Chimney Sweeps

**Industry:**
Chimney sweeping (master chimney sweeps, small family zakłady kominiarskie).

**Buyer:**
Owner/master of a 1-5 person chimney-sweep business doing annual inspections for households, housing cooperatives and municipalities.

**Trigger / Why now:**
Since 18 Sep 2023 the only valid proof of a chimney inspection is the e-protocol entered in CEEB/ZONE (GUNB). Press reports in 2026 describe controls of e-protocols and fines (500 PLN for owners, with 5,000 PLN cited). The Krajowa Izba Kominiarzy (KIK) repeated this before the 2026/27 heating season. The PIIB June 2026 position shows that chimney documents for "Czyste Powietrze" grants are also contested.

**Current workflow:**
1. The sweep visits the building and records findings on paper or in a scheduling app.
2. The sweep logs into ZONE and enters the e-protocol, either on site (often no signal in cellars or attics) or in the evening.
3. The sweep schedules next year's visit and invoices separately.
4. If ZONE is down, the visit may have to be repeated or rescheduled within 14 days (per a snippet).

**Pain:**
Each protocol takes 8-15 minutes when data is prepared in advance. ZONE outages reportedly happen about four times a year, lasting 2-11 hours. Sweeps report that the formalities now take more time and that the system freezes. At least one chimney sweep built and published his own CEEB protocol app on GitHub, a DIY signal of an unmet need.

**Existing solutions:**
- CEEB/ZONE web and mobile entry: free, state-run.
- KominiarzPro: CRM, calendar, documentation.
- ePrzeglądy: claims 150+ chimney/service firms, PDF protocols.
- Przeglądy Budynku, eDomki.app (building-side reminders), ceeb.com.pl (a service firm).
- Whether any of them pushes protocols into CEEB automatically is **unverified**, as is whether CEEB has an API for third parties.

**Offline evidence:**
Field work in places without signal. The workflow is anchored on a state portal. The industry is reached through a chamber (KIK) and municipal tenders, not SEO.

**Offline channel:**
- KIK and regional chimney-sweep guilds (cechy).
- Municipal tenders for chimney inspection of communal buildings, which name the winning firms.
- Housing cooperatives' contractor lists.
- Chimney-tool suppliers.

**Market count:**
Not found. KIK publishes no member count in the snippets. The ZONE register of authorised persons would give one (unverified).

**The gap:**
Offline capture on site in CEEB's exact field structure, then one-tap (or assisted) submission when online, plus automatic re-visit scheduling and invoicing from the same record. This is only a gap if no existing app already pushes to CEEB.

**Possible product:**
A mobile app that mirrors the CEEB protocol fields, works offline, queues submissions, pre-fills building data from last year's visit and generates the invoice and next-visit reminder.

**MVP:**
An offline form plus a "copy-to-CEEB" assisted entry (browser extension or guided paste). An API integration follows only if GUNB exposes one.

**Pricing hypothesis:**
39-99 PLN/month per sweep (estimate). Willingness to pay is modest: owners would pay for time saved, not for compliance, which the free portal already provides.

**How to find first customers:**
KIK and regional guilds, BIP tender results for chimney inspection services, and sweeps' own websites.

**Risks:**
- Without an API, automation is fragile and may breach portal terms.
- GUNB improves the ZONE mobile app.
- KominiarzPro and ePrzeglądy add the same feature.
- Small, low-margin buyers.
- Founder access: needs a Polish speaker and guild introductions; a non-local founder is unrealistic.

**Kill condition:**
CEEB has no third-party API and GUNB forbids automated entry. Or an existing app already submits to CEEB. Or interviews show that entry time is not a real complaint.

**Score:** 4/10

**Sources:**
- https://izbakominiarzy.pl/elektroniczny-protokol-kominiarski
- https://globenergia.pl/e-protokol-wymagany-do-przegladu-przewodow-kominowych/
- https://forsal.pl/gospodarka/aktualnosci/artykuly/10646170,kontrole-e-protokolow-i-kara-5000-zl-dlaczego-dokument-od-kominiarza-to-za-malo-w-2026-roku.html
- https://swiat-kominow.pl/blog/artykul-przeglad-kominiarski-ceeb-2026/
- https://github.com/kominiarzwierzchowo-hue/protokoly-ceeb
- https://kominiarzpro.pl/
- https://eprzeglady.pl/
- https://www.piib.org.pl/images/stories/aktualnosci/2026-06/Stanowisko_PIIB_w_sprawie_uznania_dokumentw_dot_przewodw_kominowych_w_programie_Czyste_Powietrze_sporzdzonych_przez_osoby_posiadajce_odpowiednie_uprawnienia_budowlane_1.pdf

## 3. Rejected

- **Septic-hauler quarterly municipal reports.** This is the closest Polish analogue to the Florida grease benchmark: one job, many municipalities, quarterly. It is already covered by Aquarius GO (free for haulers), Asenizacja.online, BioKontrol and the free Monitoring Ścieki Polskie for municipalities. Sources: https://e-awos.pl/aquarius-go/, https://asenizacja.online/faq/, https://audit-grc.pl/biokontrol/oprogramowanie-do-gospodarki-sciekowej/, https://www.biznes.gov.pl/pl/opisy-procedur/-/proc/371
- **Livestock traders and IRZplus.** IRZplus.pl and Byczkomat.pl already offer ARiMR API submission with OCR.
- **Driving-school digital trainee card (UD402).** A big new obligation, but at least 5 vendors are already "ready", the law is still a draft, and the trade body TLP opposes the cost. Sources: https://www.gazetaprawna.pl/wiadomosci/kraj/artykuly/11269603,prawo-jazdy-2027-koniec-placu-manewrowego-nowe-egzaminy-i-cyfrowa-karta-kursanta.html, https://oskadmin.pl/funkcje/cyfrowa-karta-kursanta, https://cardrivemanager.com/start/blog/cyfrowa-karta-kursanta-my-juz-jestesmy-gotowi/2
- **Care agencies and A1 postings.** HRappka, Hrily, SilverGo and Lockstep already serve them.
- **Pawnshops and kantory AML.** Served by document packs and consultants (iAML, systemaml). For kantory, NBP fines are small: 321k PLN in total in 2025 (https://bankoweabc.pl/sprawozdanie-generalnego-inspektora-informacji-finansowej-z-dzialalnosci-w-2025-roku/).
- **Scrap yards.** itopen.pl plus BDO vendors.
- **Hunting clubs.** Already about 80% electronic, with many vendors.
- **Parish cemetery registers.** The act is not passed; Grobonet and eCmentarze are present.
- **Nanny employers.** Consumer buyers, state-funded contributions.
- **Tattoo studios, plant nurseries, well drillers.** No recurring filing worth software.
- **Dog/cat chip register (KROPiK).** Mandatory only from about 2029, and vet systems will absorb it.

## 4. Method notes

- What worked: Polish queries that pair the obligation with the form or report, e.g. "sprawozdanie kwartalne … wójt formularz" or "obowiązek … ustawa 2026". Adding "program dla <zawód>" quickly surfaced the vendor that kills the idea. Sejm (orka.sejm.gov.pl), BIP and biznes.gov.pl pages gave the triggers. NBP and ZUS reports gave counts.
- What didn't: operator counts for crafts (chimney sweeps, septic haulers, scrap yards) are not in the snippets, because registers are municipal or chamber-held. Interpellations and ministerial answers are more useful than the trade press for finding "quiet" pain.
- Pattern: in Poland the state often builds the receiving portal itself (CEEB, IRZplus, BDO, KROPiK), and a small domestic vendor appears within 1-2 years. Fresh 2026-27 acts (the public-transport amendment, UD402) are the only windows, and vendors race to them fast.
