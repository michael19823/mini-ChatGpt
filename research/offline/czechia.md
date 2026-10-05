# Czechia: offline / quiet-industries pass

Researched 2026-10-05. I ran 13 WebSearch calls, mostly in Czech, before the search tool returned "You've hit your usage limit". As the instructions require, I stopped there and wrote up what I had. The budget was 40, so this report is **partial**. Several rows below are screened from one search each and are marked accordingly. WebFetch was not used. Anything not confirmed in a search result is marked *unverified* or *estimate*.

The existing country report (`research/countries/czechia.md`) already covers EET 2.0, EUDR timber, NIS2, JMHZ payroll, the building-permit portal, plant-protection records, veterinary antimicrobial reporting, accommodation (UbyPort/eTurista) and waste ISPOP/SEPNO. I do not re-report any of them.

**Headline:** Czechia's quiet industries are unusually well served. The state publishes free templates or web forms (Customs EPP template, eAGRI beekeeper form, Registr vinic, ISPOP PDF forms with an XML layer), and tiny local vendors sell register software to niche trades (SYScore and Hradecký Pacov for distilleries, Inisoft for scrap yards, Vitipad for wine). I found no case scoring above 4/10.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Solid-fuel boiler inspection technicians (kontrola technického stavu kotlů) | Each inspection of a 10–300 kW solid-fuel boiler must be entered into ISPOP by the technician (mandatory since 1 Jan 2020). The technician must hold a manufacturer authorisation, and the inspection fee is capped (1,585 / 1,848 CZK excl. VAT) | Per-inspection ISPOP PDF form with an XML layer. No technician software found in search. Small one-person heating trades | Technicians are listed in the MŽP database ipo.mzp.gov.cz (count not retrieved, *unverified*). Boilers inspected: hundreds of thousands of households (*estimate*) | **Candidate (weak)** | Per-job, mandatory, capped price per job, so admin time eats margin. No new trigger since 2020, and the market is small |
| Firearms dealers, gunsmiths, ranges (podnikatelé se zbraněmi) | New Act 90/2024 from 1 Jan 2026: all permits are electronic in CRZ, ZL1/ZL2 licence holders record weapon transactions in CRZ, and they keep a new "inventory list" (Excel or paper allowed) | The law explicitly allows a paper logbook or Excel for the inventory list. Ranges must now verify permits electronically instead of looking at a card | Licensed firearm businesses: count not retrieved (*unverified*; low thousands, *estimate*) | **Candidate (weak)** | Real 2026 trigger and dual entry (CRZ plus the inventory list), but the population is small and gun-shop ERPs may already cover it (not verified) |
| Pěstitelské pálenice (grower fruit distilleries) | Per-batch record of each grower (name, address, ID, fruit, litres of alcohol), monthly excise return to Customs with the records attached | Customs publishes Word/Excel templates and a free "Šablona EPP" XML template | **541** registered (Customs via E15). About two-thirds are in Moravia | **Rejected** | Two niche vendors already sell this (SYScore "SW evidence pěstitelské pálenice", Hradecký Pacov), the state template is free, and there was no rule change for 2026 |
| Scrap-metal buy-back yards (výkupny kovů) | Tightened records: seller identity, payment amount, cashless-only payment to individuals. ČIŽP inspections with no transition period | Counter trade, ID checks at the window | Not retrieved (*unverified*) | **Rejected** | Inisoft "SKLAD Odpadů" already has a "příjem a výkup kovů ve zpřísněné evidenci" module, and waste software is mature (see country report) |
| Beekeepers | Annual "hlášení počtu včelstev a umístění stanovišť" as of 1 Sep, due by 15 Sep | ČMSCH mails pre-filled paper forms. Free web form at eagri.cz/HlaseniVcely | **63,344** beekeepers with 669,445 colonies in 2023 (MZe situační zpráva) | **Rejected** | Annual, free, mostly hobbyists. No willingness to pay |
| Small winemakers | Evidenční kniha (simplified form under 500 hl), production declaration by 15 Jan, stock declaration by 10 Sep in Registr vinic | Simplified paper form allowed for small producers | Not retrieved (thousands of growers, *unverified*) | **Rejected** | Free state Registr vinic plus vendors (Vitipad, EDIZone for traders). Mostly annual |
| Pawnshops / second-hand / antiques dealers | AML identification above EUR 1,000, records kept 5 years | Counter identification | Not retrieved | **Rejected (thinly screened)** | Found no police-reporting register comparable to other countries. The duty is a generic AML one that AML vendors and accountants cover |
| Livestock keepers (IZR / ČMSCH) | Movement reporting to the central register | Partly paper via ÚEL | Not searched | Not screened | Search budget cut off |
| Chimney sweeps (kominíci) | Flue inspection reports (Decree 34/2016) | Paper reports to the customer | Not searched | Not screened | Search budget cut off |
| Hunting grounds / game dealers | Annual hunting statistics to ORP, game inspection | Paper | Not searched | Not screened | Search budget cut off |
| Driving schools, taxis, market traders | Various registers. Market traders fall under EET 2.0 (country report) | – | Not searched | Not screened | Search budget cut off |
| Households as employers | DPP/DPČ reporting now via JMHZ | – | – | Rejected (by reference) | Covered by JMHZ payroll software. See country report |

---

## 2. Opportunities

### Opportunity: ISPOP filing and protocol app for solid-fuel boiler inspection technicians

**Industry:**
Heating trades: technicians authorised by boiler manufacturers to perform the mandatory technical-condition and operation check of solid-fuel boilers (10–300 kW) under the Air Protection Act (201/2012).

**Buyer:**
A one- or two-person heating/servicing firm (topenář, servisní technik) that performs many inspections per heating season. Manufacturers and their service networks are a secondary buyer.

**Trigger / Why now:**
The inspection must be repeated periodically (sources say every three years; one MŽP-based summary says every two calendar years, so the interval needs checking). Results have had to be filed in ISPOP since 1 Jan 2020. In 2025–2026 MŽP and municipalities increased enforcement: municipalities were told to map boilers in their area, ISPOP data is used to find non-compliant boilers, and the fine is up to 50,000 CZK for the owner. The trigger is enforcement intensity, not a new rule, which makes it a weak why-now.

**Current workflow:**
1. The technician visits the house and fills in a paper or PDF protocol for the owner.
2. The technician re-enters the same data (boiler type, emission class, technical parameters, result) into the ISPOP form for that inspection. The form is a PDF with an XML layer, which can be pre-filled from an XML file or downloaded one by one or in bulk.
3. The technician keeps proof of the manufacturer authorisation and their own copies.

**Pain:**
The fee per inspection is legally capped (1,585 CZK excl. VAT for simple sources, 1,848 CZK with a control unit). Any per-job admin time directly erodes margin. Sources stress that the technician must enter "a whole range of technical specifications", not just pass/fail. There is no public complaint evidence beyond this (*unverified* pain level).

**Existing solutions:**
- The ISPOP portal and its PDF/XML forms (free, from the state).
- Manufacturer service portals (*unverified*; some manufacturers may provide their own tools).
- Generic field-service apps (none found that file to ISPOP).
- Paper protocol books.

**Offline evidence:**
Per-job PDF form filing. No technician software showed up in a targeted Czech search. Operators are small trades with no forum presence beyond tzb-info discussion threads.

**Offline channel:**
The MŽP public technician database ipo.mzp.gov.cz lists every authorised technician with contact details, so phone outreach is possible. Boiler manufacturers' authorisation trainings (they train and authorise the technicians) are a second channel.

**Market count:**
Every technician is in ipo.mzp.gov.cz, but I did not retrieve the count (*unverified*). Inspected boilers number in the hundreds of thousands (*estimate*).

**The gap:**
A single capture on a phone that produces both the customer protocol and a valid ISPOP XML file for upload. I found no evidence that anyone sells this, but the search was shallow.

**Possible product:**
A mobile form per boiler type that prints or emails the owner's protocol and exports or batch-uploads the ISPOP XML. It also reminds owners when the next inspection is due, which earns the technician repeat business.

**MVP:**
A web form that mirrors the ISPOP inspection schema, plus a PDF protocol and an XML export for manual upload to ISPOP.

**Pricing hypothesis:**
200–400 CZK per month or about 20 CZK per inspection (*estimate*). Low ticket.

**How to find first customers:**
Call technicians from ipo.mzp.gov.cz in one region (for example Zlín or Vysočina, where solid-fuel heating is common), and approach one manufacturer's service network.

**Risks:**
ISPOP may already accept a simple bulk XML that technicians generate in Excel. The ticket size is small. Gas and heat-pump transitions shrink the base over time.

**Kill condition:**
Kill the idea if 5 calls to technicians show that ISPOP entry takes under 5 minutes, or if a manufacturer portal already pushes data to ISPOP.

- **Willingness to pay:** software at a low price. A done-for-you service is not plausible at a capped 1,600 CZK job.
- **Founder access:** needs Czech-language sales by phone. A non-local founder would struggle.

**Score:** 4/10

**Sources:**
- https://www.drevostavitel.cz/clanek/stat-si-posviti-na-domacnosti-ktere-nevymenily-stary-kotel/118794
- https://energozrouti.cz/clanek/kotel-revize-vytapeni-kontrola
- https://www.businessinfo.cz/clanky/kontrolni-technik-kotlu-na-klik-ministerstvo-naostro-spustilo-vyhledavaci-databazi/
- https://mzp.gov.cz/system/files/2025-11/OOO-Sdeleni_kontrola_kotlu-20251107.pdf
- https://www.ispop.cz/casto-kladene-dotazy-faq/
- https://www.drevostavitel.cz/clanek/urednici-dostali-za-ukol-zmapovat-kotle-ve-sve-oblasti

---

### Opportunity: CRZ and inventory-list reconciler for small firearms dealers and ranges (Act 90/2024)

**Industry:**
Firearms trade: gun shops, gunsmiths, shooting ranges and other holders of a zbrojní licence (ZL).

**Buyer:**
The owner or manager of a small gun shop or range.

**Trigger / Why now:**
The new Act on Weapons and Ammunition (90/2024) took effect on 1 Jan 2026. Plastic permits are gone, so status must be checked in CRZ. ZL1/ZL2 holders record weapon transactions in CRZ and must also keep an "inventory list" that is not real-time in CRZ but must be current at inspection. The law allows Excel or a paper logbook for it.

**Current workflow:**
1. Before a sale, check the buyer's authorisation (zbrojní list) electronically in CRZ.
2. Record the transfer in CRZ.
3. Update the shop's own inventory list (Excel, paper or ERP) and the accounting/stock system.
4. Present the inventory list at police inspections.

**Pain:**
The same transaction is entered twice (CRZ, then the inventory list or stock system). Commentators (endors.cz, nest.legal, Securitas) list new duties for dealers and ranges. I found no direct complaint evidence (*unverified*).

**Existing solutions:**
- The CRZ web interface (state).
- Excel or paper logbooks (explicitly allowed).
- Gun-shop ERP and e-shop systems (not verified).
- Lawyers and consultants (endors.cz, nest.legal) for the setup.

**Offline evidence:**
The law names paper and Excel as acceptable forms. These businesses are small specialist retailers.

**Offline channel:**
Gun trade fairs (for example the Brno hunting and weapons fairs, *unverified* names), hunting associations (ČMMJ), and the police licensing departments that inspect.

**Market count:**
Not retrieved (*unverified*; low thousands of ZL holders, *estimate*).

**The gap:**
Keeping the inventory list automatically consistent with CRZ entries and the shop's stock, and producing a ready-to-show inspection export.

**Possible product:**
A stock register for weapons that writes the inventory list and prompts or assists the CRZ entry. Whether CRZ has a dealer API is unknown (*unverified*).

**MVP:**
An inventory-list template app with serial-number tracking and an inspection export, without any CRZ integration.

**Pricing hypothesis:**
500–1,000 CZK per month (*estimate*).

**How to find first customers:**
The police licence register is not publicly confirmed. Use gun-shop directories, e-shops and trade fairs instead.

**Risks:**
The sector is sensitive and the population is small. A CRZ dealer API may be missing or restricted. Existing gun-retail ERPs may already have added this.

**Kill condition:**
Kill the idea if CRZ offers no machine interface and the main gun-shop ERPs already ship an inventory-list export.

- **Willingness to pay:** modest, for software only.
- **Founder access:** needs a local founder. The sector depends on trust and its contacts are offline.

**Score:** 3/10

**Sources:**
- https://www.endors.cz/blog/zbrojni-licence-2026-podnikatele
- https://www.nest.legal/article/detail/244-zmeny-v-pravni-uprave-na-useku-zbrani-streliva-a-munice-od-1-ledna-2026
- https://www.securitas.cz/novinky--blog/blog/5-veci-ktere-zmenil-novy-zakon-o-zbranich-a-strelivu/
- https://mv.gov.cz/bsmv/soubor/argumenta-r-ke-zme-na-m-za-kona-o-zbrani-ch-a-str-elivu.aspx
- https://www.halali.cz/index.php/novinky/153-novy-zakon-o-zbranich-a-strelivu-platny-od-1-1-2026-digitalizace-nove-postupy-a-zbranova-amnestie

---

## 3. Rejected

- **Grower fruit-distillery (pěstitelská pálenice) records and monthly excise.** This is a classic quiet industry: 541 operators, per-batch grower records, a monthly return to Customs, and two-thirds of operators in Moravia. However, SYScore already sells "SW evidence pěstitelské pálenice" with an XML export for Customs, Hradecký Pacov (a distillery-equipment supplier) sells its own program, and Customs gives away a free "Šablona EPP" template. The 458/2024 amendment changed nothing for 2026. Sources: https://www.syscore.cz/index.php/prodej/prodej-sw-evidence-pestitelske-palenice , https://www.hradeckypacov.cz/cz/vyrobky/zarizeni-pro-palenice-servis-opravy-n%C3%A1hradn%C3%AD-d%C3%ADly/5a65ec8664363-program-pro-evidenci-pestitelske-palenice , https://celnisprava.gov.cz/cz/dane/WebSPD/WebLih/Stranky/VzoryPP.aspx , https://www.e15.cz/byznys/potraviny/pocet-registrovanych-palenic-dal-stoupa-834027 , https://advokatnidenik.cz/2025/02/28/jake-jsou-pravni-souvislosti-pestitelskeho-paleni/
- **Scrap-metal buy-back records and cashless payments.** The rules are tight and enforced by ČIŽP with no transition period, but Inisoft SKLAD Odpadů already ships a "zpřísněná evidence" module for metal buy-back. Sources: https://ci.inisoft.cz/pages/viewpage.action?pageId=20153388 , https://www.enviweb.cz/102118 , https://www.tretiruka.cz/news/pravidla-pro-vykup-kovu-od-fyzickych-osob-jsou-ucinne/
- **Beekeeper colony reporting.** 63,344 beekeepers file once a year on a free eAGRI web form and receive pre-filled forms from ČMSCH. Hobbyists, with no willingness to pay. Source: https://mze.gov.cz/public/portal/-a46042---yD6zAvwc/publikace-situacni-a-vyhledova-zprava-vcely-2023
- **Small winemaker records.** Producers under 500 hl may use a simplified form, declarations go through the free Registr vinic, and Vitipad already sells an e-register. Sources: https://vitipad.cz/funkce , https://www.szpi.gov.cz/clanek/postupy-a-stanoviska-szpi-vino-pristup-szpi-k-povinnosti-provozovatele-vest-evidencni-knihu.aspx
- **Pawnshops and second-hand dealers.** I found only generic AML identification duties, not a police-reported dealer register. AML tools and accountants already cover them.

## 4. Method notes

- What worked: Czech regulator-first queries naming the authority and the record ("celní správa", "ISPOP", "ČMSCH", "evidence") quickly surfaced official templates and the niche vendors that compete with them. Searching "software pro <trade>" was the fastest way to kill ideas.
- What didn't: a long mixed query about distillery software returned US law-enforcement results.
- **The search quota ran out after 13 calls.** Livestock movements, chimney sweeps, hunting, driving schools, taxis and cemeteries were not screened. A follow-up pass should start with the ipo.mzp.gov.cz technician count and CRZ dealer-interface documentation.
