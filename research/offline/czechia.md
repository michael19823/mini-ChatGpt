# Czechia: offline / quiet-industries pass

Researched 2026-10-05. The first session stopped after 13 searches because the search quota ran out. A second session continued after the limit reset, for **36 WebSearch calls in total** (budget 40), mostly in Czech. WebFetch was not used. Anything not confirmed in a search result is marked *unverified* or *estimate*.

The existing country report (`research/countries/czechia.md`) covers EET 2.0, EUDR timber, NIS2, JMHZ payroll, the building-permit portal, plant-protection records, veterinary antimicrobial reporting, accommodation (UbyPort/eTurista) and waste ISPOP/SEPNO. I do not re-report any of them.

**Headline:** Czech quiet industries are unusually well served. The state usually supplies a free template, web form or portal: the Customs EPP template, the eAGRI beekeeper form, Registr vinic, ISPOP online forms, IS DESK for child groups, CRZ for firearms. Tiny local vendors already sell register software to the most obvious trades: SYScore and Hradecký Pacov for distilleries, Inisoft for scrap yards, Vitipad for wine, ProfiBrew for microbreweries, iHonitba, eMyslivost and Hunterra for hunting, Moje Autoškola for driving schools, Twigsee and MáŠkolka for child groups. No quiet industry scores above 4/10.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Solid-fuel boiler inspection technicians | Each inspection of a 10–300 kW solid-fuel boiler is reported to ISPOP within 60 days (mandatory since 1 Jan 2020). Manufacturer authorisation ID on the certificate. Fee capped at 1,585 / 1,848 CZK excl. VAT | Per-inspection ISPOP form: a PDF with an XML layer, replaced by online web forms in 2022. A paper "doklad o kontrole" goes to the owner. No technician software found in two targeted searches | All technicians listed at ipo.mzp.gov.cz (count not published in any search result, *unverified*) | **Candidate (weak)** | Per-job, mandatory, capped price per job. But there has been no new rule since 2020, and ISPOP web forms are free |
| Firearms dealers, gunsmiths, ranges | Act 90/2024 from 1 Jan 2026: dealers (ZL1/ZL2), range operators and ammunition licence holders record weapons, ammunition and transfers online in the new CRZ, and keep an inventory list (Excel, paper or stock system allowed) | The law explicitly allows paper or Excel for the inventory list. Police inspect on site | Police ran **955 inspections of arms/ammunition dealers** in 2025, plus 333 of training licences and 342 of sport licences (Police report). Dealer count is roughly 1,000+ (*estimate* from inspections) | **Candidate (weak)** | New 2026 trigger and dual entry. Small population, sensitive sector, and the CRZ machine interface is unknown |
| Child-care groups (dětské skupiny) | Since 1 May 2025 (247/2014 amendment) all filings go only through the IS DESK app. Occupancy is reported by the 5th of each month and drives the monthly operating subsidy. Real attendance must be recorded, with a 120 h/month cap for under-2s whose parent draws parental allowance. Fines up to 200,000 CZK and revocation after a second offence | Small NGO/family operators. Parents sign attendance daily in neighbourhood groups. Contract data is re-keyed into IS DESK | **1,277** groups with 16,849 places in 2022 (MPSV), plus 515 new groups from NPO funding, so roughly 1,500–1,800 (*estimate*) | **Candidate (weak)** | Monthly, money-linked and penalised. But Twigsee and MáŠkolka already sell attendance apps for child groups, and IS DESK holds the contract data |
| Pěstitelské pálenice (grower fruit distilleries) | Per-batch grower record, monthly excise return to Customs with the records attached | Customs Word/Excel templates and a free "Šablona EPP" | **541** (Customs via E15) | Rejected | SYScore and Hradecký Pacov already sell distillery software with XML export. No 2026 change |
| Microbreweries | Monthly beer excise return (by the 25th) plus production records. The small-independent-brewery definition changed from 2025 | Vendor claims most use Excel or paper | About **500** (minipivovar-ujkovice.cz) | Rejected | ProfiBrew is an ERP for microbreweries that already automates excise records and the monthly Customs filing. Small market |
| Scrap-metal buy-back yards | Seller identity and payment amount recorded per purchase. Cashless-only payments to individuals (since 1 Mar 2015). ČIŽP inspections | Counter trade | Not found. MŽP has called the number of yards per capita "among the highest in Europe" (unverified figure) | Rejected | Old rule (2015), and Inisoft SKLAD Odpadů has a "zpřísněná evidence" metal buy-back module |
| Chimney sweeps (kominíci) | Cleaning and inspection reports per Decree 34/2016 (prescribed templates in annexes 3 and 4) | Paper report handed to the customer | **3,351** chimney-sweep trade licences (Společenstvo kominíků via TN.cz) | Rejected | The report goes only to the customer; nothing is filed with an authority, so there is no "one job, many authorities" routing. Report-template tools exist (e.g. revizit.cz) |
| Hunting grounds (honitby) | Annual MYSL statement to ČSÚ/MZe by 15 May. New NV 24/2026 subsidy rules from 1 Sep 2026: 2,000 CZK per wild boar shot above the 3-year average, with a list of animals per hunting ground | Volunteer hunting associations, older members | **5,778** hunting grounds (ČSÚ 2025/26). Record 273,275 wild boar shot | Rejected | Crowded: iHonitba (auto-generates MYSL forms), eMyslivost, Hunterra, the free "Evidence myslivosti", and even a comparison site (myslivecke-aplikace.cz). NV 24/2026 simplified the paperwork |
| Sheep and goat keepers | Births, deaths and movements reported to ČMSCH within 7 days. Paper herd register | Reporting by post or e-mail to ČMSCH is still allowed | Not retrieved | Rejected | Free eAGRI web services and farm software exist. Many keepers are hobbyists with no willingness to pay |
| Beekeepers | Annual colony and apiary report as of 1 Sep, due by 15 Sep | ČMSCH mails pre-filled forms. Free eAGRI web form | **63,344** beekeepers, 669,445 colonies (MZe, 2023) | Rejected | Annual, free, hobbyists |
| Small winemakers | Simplified register under 500 hl, production declaration by 15 Jan, stock declaration by 10 Sep | Simplified paper form allowed | Not retrieved | Rejected | Free Registr vinic, and Vitipad sells an e-register. Mostly annual |
| Driving schools | Training and lesson register (Decree 167/2002), electronic allowed under conditions | Paper register and class book still allowed | Not retrieved | Rejected | Existing vendors (Moje Autoškola e-evidence, Schröter SAMSOU) |
| Cemeteries | Grave register (hřbitovní kniha) under the Burial Act | Paper books | Operators are municipalities | Rejected | The buyer is a municipality (procurement), not a small business. MMR publishes model rules and software selection criteria |
| Taxis | 2020 amendment: taximeter, vehicle registration, driver licences | – | Not retrieved | Rejected | Platforms and taximeter vendors cover it. No filing workflow found |
| Pawnshops / second-hand dealers | AML identification above EUR 1,000, records kept 5 years | Counter identification | Not retrieved | Rejected | Only a generic AML duty; no police-reported dealer register found |
| Households as employers | DPP/DPČ via JMHZ | – | – | Rejected (by reference) | JMHZ payroll software. See country report |

---

## 2. Opportunities

### Opportunity: ISPOP filing and protocol app for solid-fuel boiler inspection technicians

**Industry:**
Heating trades: technicians authorised by boiler manufacturers to perform the mandatory technical-condition and operation check of solid-fuel boilers (10–300 kW) under the Air Protection Act 201/2012.

**Buyer:**
A one- or two-person heating/servicing firm (topenář, servisní technik) doing many inspections per season. Manufacturer service networks are a secondary buyer.

**Trigger / Why now:**
There is no new rule; ISPOP reporting has been mandatory since 1 Jan 2020. What is new is enforcement in 2025–2026: MŽP's November 2025 notice, municipalities told to map boilers, ISPOP filterable by street to find owners who skipped the inspection, and owner fines up to 50,000 CZK. The inspection interval needs checking (sources say every 3 years; one MŽP-based summary says every 2 calendar years). The why-now is weak.

**Current workflow:**
1. The technician visits, inspects and fills in the paper "doklad o kontrole" (the format updated in 2020), including the manufacturer authorisation ID.
2. Within 60 days they re-key the same technical data into ISPOP: an online web form since 2022, or the PDF/XML form. They send it with "Odeslat do ISPOP" or through a data mailbox.
3. They keep copies and the authorisation proof.

**Pain:**
The fee is legally capped (1,585 / 1,848 CZK excl. VAT), so per-job admin directly erodes margin. Sources stress that the technician must enter "a whole range of technical specifications". No direct complaints found (*unverified* pain level).

**Existing solutions:**
- ISPOP online forms and PDF/XML forms (free, from the state).
- Manufacturer portals (*unverified*).
- Generic field-service and attendance apps; none found that file to ISPOP.
- Paper certificate pads.

**Offline evidence:**
A paper certificate plus manual re-entry into a state form per job. Two targeted Czech searches found no technician software. The only discussion is in tzb-info forum threads.

**Offline channel:**
The public MŽP technician database (ipo.mzp.gov.cz) lists every authorised technician with contact details, so cold calls can go region by region. Manufacturer authorisation trainings (ATMOS, Verner and others; *unverified* that they run regular trainings) are a second channel.

**Market count:**
Every technician is in ipo.mzp.gov.cz, but no search result gave the total (*unverified*). Inspected boilers number in the hundreds of thousands (*estimate*).

**The gap:**
One capture on a phone that produces the owner's certificate and the ISPOP submission (an XML pre-fill or bulk upload), plus a re-inspection reminder list.

**Possible product:**
A mobile form per boiler model that prints or emails the certificate, exports ISPOP-ready XML, and tracks each customer's next due date to bring in repeat jobs.

**MVP:**
A web form that mirrors the ISPOP schema, a PDF certificate, and an XML export for manual upload.

**Pricing hypothesis:**
200–400 CZK per month, or about 20 CZK per inspection (*estimate*).

**How to find first customers:**
Phone technicians from ipo.mzp.gov.cz in solid-fuel regions (Vysočina, Zlín, Moravia-Silesia).

**Risks:**
ISPOP web forms may already be quick. The ticket is small. The solid-fuel base shrinks as heat pumps spread.

**Kill condition:**
Kill the idea if 5 technician calls show that ISPOP entry takes under 5 minutes, or if a manufacturer portal already files to ISPOP.

- **Willingness to pay:** low-price software only. A done-for-you service does not fit a capped 1,600 CZK job.
- **Founder access:** needs Czech-language phone sales. Hard for a non-local founder.

**Score:** 4/10

**Sources:**
- https://vytapeni.tzb-info.cz/vytapime-pevnymi-palivy/20879-kontroly-kotlu-novy-doklad-o-povinne-kontrole-kotle-na-pevna-paliva
- https://www.ispop.cz/casto-kladene-dotazy-faq/
- https://mzp.gov.cz/system/files/2025-11/OOO-Sdeleni_kontrola_kotlu-20251107.pdf
- https://www.businessinfo.cz/clanky/kontrolni-technik-kotlu-na-klik-ministerstvo-naostro-spustilo-vyhledavaci-databazi/
- https://www.drevostavitel.cz/clanek/stat-si-posviti-na-domacnosti-ktere-nevymenily-stary-kotel/118794
- https://energozrouti.cz/clanek/kotel-revize-vytapeni-kontrola

---

### Opportunity: Occupancy and attendance compliance for child-care groups (IS DESK subsidy)

**Industry:**
Child-care groups (dětské skupiny and sousedské dětské skupiny) under Act 247/2014.

**Buyer:**
The operator (often an NGO, a small company or a parent-founder) of one or a few groups, or the person who runs its administration.

**Trigger / Why now:**
The 2025 amendment, effective 1 May 2025, moved the agenda to the Labour Office (ÚP). All filings go only through the new IS DESK app, launched 5 May 2025. Groups must record real attendance, and children under 2 whose parent draws parental allowance may attend at most 120 h per month. The subsidy is paid monthly in arrears based on occupancy reported by the 5th, and is reconciled per third of the year. False occupancy can be fined up to 200,000 CZK, and a second offence within 5 years revokes the licence.

**Current workflow:**
1. Contracts with parents (hours and place type) are signed on paper.
2. Each contract's data is entered into IS DESK, which derives full and partial places.
3. Daily attendance is kept on paper or in an app, with daily parent signatures in neighbourhood groups.
4. By the 5th, occupancy is confirmed in IS DESK. Each third of the year the Labour Office settles overpayments and underpayments, and any overpayment is returned.

**Pain:**
Income depends on correct monthly filing, penalties are severe, and the 120 h cap must be watched per child. The rules were new in 2025 and MPSV FAQs were still being updated on 30 Aug 2026.

**Existing solutions:**
- IS DESK (state, free; it holds contracts and occupancy).
- Twigsee (kindergarten and child-group app with attendance).
- MáŠkolka (electronic attendance for child groups).
- A "Dětská skupina" attendance app on Google Play.
- The operators' association (mojedetskaskupina.cz) and consultants (vseprodetskeskupiny.cz).

**Offline evidence:**
Paper parent contracts and daily signatures. Operators are micro-organisations, many run by founders.

**Offline channel:**
The Asociace provozovatelů dětských skupin, the public ÚP register of providers (evidence.mpsv.cz/eEDS), and NPO-funded municipal groups via the municipalities.

**Market count:**
1,277 groups in 2022 (MPSV), plus 515 being built under NPO, so roughly 1,500–1,800 (*estimate*).

**The gap:**
A 120 h-per-child cap monitor and a reconciliation of contracts against attendance and IS DESK occupancy before the 5th. Whether Twigsee or MáŠkolka already do this is not verified.

**Possible product:**
An attendance app (tablet sign-in) that flags children approaching the 120 h cap, checks attendance against the contract hours, and produces the figures to type into IS DESK.

**MVP:**
A spreadsheet-like web app: contracts plus daily attendance, producing a monthly occupancy summary with cap warnings.

**Pricing hypothesis:**
300–600 CZK per group per month (*estimate*).

**How to find first customers:**
The association's newsletter, and the public provider register for e-mail and phone outreach.

**Risks:**
Twigsee or MáŠkolka may already cover it (likely). IS DESK has no API, so the last step stays manual. The sector is subsidy-dependent.

**Kill condition:**
Kill the idea if Twigsee already has 120 h monitoring and an IS DESK occupancy summary.

- **Willingness to pay:** low; software only.
- **Founder access:** needs Czech-language sales, so a local founder.

**Score:** 3/10

**Sources:**
- https://portal.gov.cz/sluzby-vs/prispevek-na-provoz-detske-skupiny-S26963
- https://portal.gov.cz/sluzby-vs/hlaseni-obsazenosti-kapacitnich-mist-v-detske-skupine-S35587
- https://mpsv.gov.cz/prispevek-na-provoz-detskych-skupin
- https://mpsv.gov.cz/cms/documents/be77d57f-dced-6520-fa63-fce02ae14a46/Dětské skupiny a sousedské dětské skupiny dotazy a odpovědi 30.8.2026.pdf
- https://www.twigsee.com/en/about-the-app-for-childrens-groups/
- https://www.maskolka.cz/elektronicka-evidence-dochazky-v-detske-skupine
- https://mojedetskaskupina.cz/hlavni-zmeny-ktere-prinasi-novela-zakona-o-detske-skupine/

---

### Opportunity: CRZ and inventory-list reconciler for small firearms dealers and ranges (Act 90/2024)

**Industry:**
Firearms trade: gun shops, gunsmiths, shooting ranges and ammunition licence holders.

**Buyer:**
The owner or manager of a small gun shop or range.

**Trigger / Why now:**
Act 90/2024 has applied since 1 Jan 2026, and the new CRZ went live that morning. Dealers record weapons, ammunition and their transfers online in CRZ, and must also keep an inventory list that is "not real-time like CRZ" but must be current for inspections. Ranges now verify shooters' permits electronically, because plastic cards were abolished.

**Current workflow:**
1. Check the buyer's zbrojní list in CRZ.
2. Record the transfer in CRZ.
3. Update the inventory list (Excel, paper or stock system) and the accounting system.
4. Show the list at police inspections (955 dealer inspections in 2025).

**Pain:**
Dual entry and inspection exposure. In 2025 the police found 186 offences across all firearms inspections, with fines totalling 579,500 CZK. No direct dealer complaints found (*unverified*).

**Existing solutions:**
- The CRZ web interface (state).
- Excel or paper logbooks.
- Gun-retail ERP and stock systems (not verified).
- Law firms for the setup (endors.cz, nest.legal).

**Offline evidence:**
The legal text names paper and Excel as acceptable. The trade is small and specialist.

**Offline channel:**
ČMMJ hunting association branches, hunting and weapons trade fairs (*unverified* names), and range operators.

**Market count:**
About 1,000+ arms and ammunition dealers (*estimate* from the 955 police inspections in 2025), plus ranges.

**The gap:**
An automatically consistent inventory list with an inspection export tied to CRZ entries.

**Possible product:**
A weapons stock register that writes the legal inventory list and mirrors CRZ records.

**MVP:**
An inventory-list app with serial-number tracking and an inspection PDF, without CRZ integration.

**Pricing hypothesis:**
500–1,000 CZK per month (*estimate*).

**How to find first customers:**
Gun-shop directories and e-shops, and fairs.

**Risks:**
It is unknown whether CRZ offers a dealer API. Gun ERPs may already cover this. The sector is sensitive.

**Kill condition:**
Kill the idea if there is no CRZ machine interface and the main gun-shop ERPs already export the inventory list.

- **Willingness to pay:** modest, software only.
- **Founder access:** needs a local founder; the sector depends on trust.

**Score:** 3/10

**Sources:**
- https://policie.gov.cz/clanek/spoustime-novy-centralni-registr-zbrani.aspx
- https://policie.gov.cz/soubor/zprava-o-vysledcich-kontrol-2025-pdf.aspx
- https://www.endors.cz/blog/zbrojni-licence-2026-podnikatele
- https://www.nest.legal/article/detail/244-zmeny-v-pravni-uprave-na-useku-zbrani-streliva-a-munice-od-1-ledna-2026
- https://mv.gov.cz/bsmv/soubor/argumenta-r-ke-zme-na-m-za-kona-o-zbrani-ch-a-str-elivu.aspx

---

## 3. Rejected

- **Grower fruit distilleries.** 541 operators keep per-batch records and file a monthly excise return. Already served by SYScore "SW evidence pěstitelské pálenice" (XML export for Customs), Hradecký Pacov's program and the free Customs EPP template. No 2026 change. Sources: https://www.syscore.cz/index.php/prodej/prodej-sw-evidence-pestitelske-palenice , https://celnisprava.gov.cz/cz/dane/WebSPD/WebLih/Stranky/VzoryPP.aspx , https://www.e15.cz/byznys/potraviny/pocet-registrovanych-palenic-dal-stoupa-834027
- **Microbrewery excise.** About 500 breweries file a monthly return, but ProfiBrew already automates excise records and the filing. Sources: https://www.profibrew.com/cs , https://www.minipivovar-ujkovice.cz/jak-na-spotrebni-dan-z-piva-pro-minipivovary/
- **Hunting associations.** 5,778 hunting grounds and new NV 24/2026 wild-boar subsidy rules from 1 Sep 2026, but the market is crowded: iHonitba (auto-generates MYSL forms), eMyslivost, Hunterra, the free "Evidence myslivosti", and a comparison site. Sources: https://ihonitba.cz/ , https://www.myslivecke-aplikace.cz/ , https://www.cmmj.cz/myslivecke-prispevky-maji-od-zari-nova-pravidla/ , https://csu.gov.cz/vykazy/mysl-mze-1-01-rocni-vykaz-o-honitbach-stavu-a-lovu-zvere-od-1-dubna-2025-do-31-brezna-2026_psz_2025
- **Chimney sweeps.** 3,351 trade licences, but the report goes only to the customer, so there is no filing to an authority. Sources: https://tn.nova.cz/zpravodajstvi/clanek/519730-v-cesku-nastalo-kominicke-obrozeni-zajem-o-obor-je-i-na-skolach , https://www.dauc.cz/predpisy/1546/34-2016-sb
- **Scrap-metal buy-back.** Seller ID and cashless-payment rules date from 2015, and Inisoft SKLAD Odpadů has a "zpřísněná evidence" metal buy-back module. Sources: https://ci.inisoft.cz/pages/viewpage.action?pageId=20153388 , https://eurozpravy.cz/domaci/politika/124772-mzp-si-pochvaluje-vyhlasku-pocet-kradezi-kovu-klesl-o-polovinu
- **Sheep and goat movement reporting.** A 7-day deadline to ČMSCH, but free eAGRI web services exist and keepers are mostly hobbyists. Source: https://www.cmsch.cz/evidence-a-registrace/skot,-ovce,-kozy,-jelenoviti/vedeni-ustredni-evidence-%E2%80%93-ovce,-kozy
- **Beekeepers.** Annual, free, hobbyists (63,344). Source: https://mze.gov.cz/public/portal/-a46042---yD6zAvwc/publikace-situacni-a-vyhledova-zprava-vcely-2023
- **Small winemakers.** Free Registr vinic plus Vitipad. Source: https://vitipad.cz/funkce
- **Driving schools.** Electronic lesson records are already sold by Moje Autoškola and Schröter SAMSOU. Source: https://www.moje-autoskola.cz/elektronicka-evidence-autoskoly.html
- **Cemeteries.** The buyer is a municipality (procurement). Source: https://www.dauc.cz/clanky/16119/pohrebnictvi-v-obci
- **Taxis and pawnshops:** no recurring filing workflow found.

## 4. Method notes

- What worked: Czech regulator-first queries that name the authority and the record ("ISPOP", "ČMSCH", "celní správa", "IS DESK", "CRZ", "evidence") quickly surfaced the official obligation. A follow-up "software / aplikace pro <trade>" search killed most ideas within one call. Police and ČSÚ inspection and statistics reports were the best source of market counts (955 dealer inspections, 5,778 hunting grounds).
- What didn't: long mixed queries drifted to US results, and searches for operator counts in registers (ipo.mzp.gov.cz, scrap yards) returned nothing; those counts need a direct visit to the register.
- Overall: Czech state digitisation plus a dense micro-vendor ecosystem leaves few quiet gaps. The pattern seen elsewhere, where operators file by paper and no vendor serves them, is rare here.

Research model: Opus
