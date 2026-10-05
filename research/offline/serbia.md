# Serbia: Offline-industries pass

Date: 2026-10-05. Budget: 20 WebSearch calls. 17 were used. Two calls were refused with "usage limit" during the first run. After the limit reset, I resumed and re-ran those 2 queries plus 1 follow-up. Several seed groups were screened only from general knowledge and are marked as such.

The existing country report (`research/countries/serbia.md`) covers e-Otpremnica, the accounting-agency portal cockpit, CBAM, and waste DKO/NRIZ (rejected there: UPSEKO, eDepo, POTOS). None of those is repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Registered rakija / spirits distilleries | Entry in the Register of Producers of Strong Alcoholic Beverages (Ministry of Agriculture); cellar records (podrumska evidencija) "in written or electronic form", kept 3+ years; annual production/trade/stock report due **1 March**; monthly excise return **PP OA** due on the 15th; excise-stamp (akcizne markice) requests in minimum batches of 2,000 | The law explicitly allows paper cellar books; the annual report is a ministry form (Pravilnik); I found no Serbian distillery software listing (searches returned only foreign tools: Unleashed, Vapour, MasterDistiller) | ">730 active distilleries" in the register (destilista.com, citing the ministry register) | **Candidate (moderate)** | One production record feeds 3 receiving bodies (ministry register, Tax Administration excise, stamp ordering). Small and rural; the market is small |
| Agricultural-produce buyers (otkupljivači: raspberry, fruit, grain, livestock purchase points) | Since 2025: notify the Ministry of Internal and Foreign Trade of each purchase point via **e-Otkupno mesto** at least 15 days before buying starts; issue a purchase document per delivery (otkupni list) with prescribed fields; pay farmers per producer | Purchase points are seasonal sheds and cold stores; documents are printed on site; the new notification is a separate state portal | Unverified. Many hundreds of fruit cold stores and buyers (estimate) | **Candidate (moderate)** | New 2025 portal plus per-delivery paperwork. But SOFTEK already sells an "otkup" program |
| Wineries and small wine producers | Wine Register / Vineyard Register entry; cellar records closed annually on 31 July; the draft new Wine Law adds quality/origin **evidence stamps** per bottling and lets individuals sell up to 5,000 L | The register is described as becoming an electronic database only under the draft law | Unverified (no count found) | **Watch (2027)** | The law was still a draft as of Aug 2026; one trade article frames it as a 2027 change. Too early |
| Beekeepers | Register apiary at the local veterinary station; report hive count by **31 Oct** each year; per-hive subsidy (RSD 1,000/hive, 20–1,000 hives) filed on eAgrar with a qualified e-signature or ConsentID | Done in person at the vet station; the subsidy is filed by the farmer or an advisor | Unverified (tens of thousands, estimate) | **Reject** | Annual, low value. The vet station and agricultural advisory service do it for free |
| Seasonal farm-labour employers | Register and deregister seasonal workers only via sezonskiradnici.gov.rs (Tax Administration, linked to CROSO/NSZ); 180-day cap per year; minimum RSD 308/hour net (2025) | The free state portal plus a mobile app; NALED guides | Unverified | **Reject (watch)** | The free state app already did the job (prijave +600%). An extension to construction, hospitality, tourism, household help and building cleaning has been announced repeatedly (Politika, Kamatica; GIZ ex-ante analysis 2020). A 2026 accountant guide still says the scheme does not apply to those sectors. If extended, it will most likely run on the same free portal |
| Households employing domestic workers / carers | Registration in CROSO as a household employer | My only search returned Croatian results | Not found | **Not verified** | No Serbian trigger found; would depend on the seasonal-scheme extension above |
| Authorised currency exchangers (menjači) | Amended Foreign Exchange Law in force **14 Mar 2025**: public NBS register, electronic records, fines up to RSD 3m, 30-day closures (NBS closed 90 offices at once) | Heavily enforced, but not offline | Count in the NBS register (not retrieved) | **Reject** | The law requires exchangers to use NBS software or a contracting bank's software. The software slot is closed by statute |
| Scrap / secondary raw-material buyers | Waste-management permit; 1% withholding tax on purchases from legal entities; tax withholding on payments to individuals | Cash buying from individuals, posted price lists | Unverified | **Reject** | The record-keeping side is covered by UPSEKO/eDepo (see the country report). The tax side is handled by accountants |
| Livestock traders / animal movements | Movement and holding records in the central animal database via vet stations | General knowledge, not searched | n/a | **Not screened (budget)** | Vet stations act as the data-entry layer |
| Hunting-ground users (lovačka udruženja, korisnici lovišta) | Annual hunting-ground management plan for the 1 Apr–31 Mar hunting year (game counts, cull plan, finances), consistent with the 10-year lovna osnova; data goes to the ministry's Katastar lovišta and Central Database | Mostly volunteer-run hunting associations (plan drafting by professionals is unverified) | Unverified (several hundred hunting grounds, estimate) | **Reject** | The Hunting Chamber (Lovačka komora Srbije) already runs a "lovački informacioni sistem" with data-entry training (2024). Buyers are volunteer associations with low willingness to pay |
| Taxi operators, market traders | City taxi permits; e-fiscalisation | General knowledge, not searched | n/a | **Not screened** | Fiscal devices already digitised them; likely crowded |
| Cemeteries / funeral services | Mostly municipal public utilities (JKP) in Serbia | General knowledge | n/a | **Reject (unverified)** | Buyer is a public utility, so procurement is needed |

## 2. Strongest opportunities

### Opportunity: "Kazan-to-ministry" compliance book for small registered rakija distilleries

**Industry:**
Spirits production (fruit brandy / rakija), small registered distilleries.

**Buyer:**
The owner-distiller of a family distillery registered as an entrepreneur (preduzetnik) or a small d.o.o. In practice their external bookkeeper also buys or influences the purchase.

**Trigger / Why now:**
There is no fresh 2026 statute (this is the main weakness). Several pressures recur and are rising, though: the monthly excise return (PP OA, due on the 15th); the 1 March annual report to the ministry register; and state co-financing of certification costs for export and supervision (2025 call). These push distillers toward documented traceability. EU-accession talk in the region about "small distillery" status (up to 1,500 L pure alcohol at 50% excise, as reported for Montenegro) suggests Serbian rules may change. That is unverified for Serbia.

**Current workflow:**
1. The distiller logs each batch (fruit in, mash, distillate, strength, quantity) in a paper or Excel cellar book.
2. Each month, the bookkeeper takes the quantities released, converts them to litres of absolute alcohol and files PP OA with the Tax Administration (ePorezi).
3. The distiller orders excise stamps from the Tax Administration in batches of at least 2,000 and reconciles stamps used against bottles sold.
4. By 1 March, someone compiles the annual production, trade and stock report on the ministry form for the register.
5. During inspections, the cellar book, vessel labels (type, quantity, % vol) and documents must match.

**Pain:**
The same quantities are recomputed in 3 places (cellar book, excise return, annual register report) and checked against the stamp inventory. Errors carry excise and inspection consequences. I found no direct complaints online, which fits a quiet industry but also means the pain is unproven.

**Existing solutions:**
- Paper cellar books and Excel.
- External bookkeepers (filing PP OA is part of their monthly fee).
- Generic Serbian accounting/ERP packages (inventory, not cellar-record specific). Unverified whether any has an excise/LAA module.
- Foreign distillery software (Unleashed, Vapour, MasterDistiller): English-language, no Serbian forms.
- edestilerija.com publishes Serbian guides on excise calculation for rakija. A follow-up search found no product called "eDestilerija", so it may be only a content site; **unverified, check first**.
- unija.com and similar tax-advice portals publish PP OA filing guides. That is the bookkeeper channel.

**Offline evidence:**
The law allows paper cellar records. The annual report is a ministry form under a Pravilnik. Searches for Serbian distillery software returned only foreign products. The industry's public face is trade magazines (Gušt) and fairs, not software review sites.

**Offline channel:**
- The ministry's public Register of Producers of Strong Alcoholic Beverages: names and addresses of the >730 distilleries, for phone outreach.
- Rakija fairs and festivals (for example regional rakija evaluations; specific events unverified).
- Recipients of the ministry certification co-financing call.
- Bookkeepers serving several distilleries in fruit regions (Šumadija, Zlatibor, Pomoravlje), sold as a white-label tool.

**Market count:**
">730 active distilleries" in the register (destilista.com, citing the ministry). Annual fruit-brandy output above 27 million litres is reported by registered producers.

**The gap:**
No Serbian-language tool turns one batch and bottling log into PP OA figures, a stamp reconciliation and the 1 March register report.

**Possible product:**
A mobile-friendly cellar book. Each batch and each release automatically produces the monthly LAA figures for PP OA, a running stamp balance and the pre-filled annual register report. It also prints vessel labels.

**MVP:**
Batch log, LAA calculator, monthly excise summary PDF for the bookkeeper, annual report export in the ministry form layout.

**Pricing hypothesis:**
RSD 2,000–4,000/month (about EUR 17–35), or EUR 150–250/year. A done-for-you annual report service at EUR 50–100. A distiller will more likely pay for the service. A bookkeeper might pay for software covering several clients.

**How to find first customers:**
The ministry register, fairs, and bookkeepers in fruit regions.

**Risks:**
- Small market: 730 × EUR 200/year ≈ EUR 146k/year at 100% share.
- Bookkeepers already absorb the excise work.
- An older, rural audience.
- A non-local founder could not sell this. It needs a Serbian speaker present at fairs.

**Kill condition:**
Kill the idea if 5 distillers and 3 bookkeepers say the cellar book plus the bookkeeper takes under 2 hours a month, or if an existing Serbian ERP already has a rakija excise module.

**Score:** 4/10 (pain 4, frequency 6, mandatory 8, fragmentation 4, competition 6, gap 6, accessibility 7, WTP 3, MVP 8, distribution 5)

**Sources:**
- https://www.paragraf.rs/propisi/zakon-o-jakim-alkoholnim-picima.html
- https://destilista.com/proizvodnja/godisnji-izvestaj-o-proizvodnji-jakih-pica/
- https://www.tehnologijahrane.com/pravilnik/pravilnik-o-sadrzini-i-nacinu-vodjenja-registra-proizvodjaca-jakih-alkoholnih-pica-obrascu-zahteva-za-upis-u-registar-i-obrascu-godisnjeg-izvestaja
- https://edestilerija.com/blog/kako-pravilno-obracunavati-akcizu-za-rakiju-vodic-za-proizvodace-i-prodavce/
- https://www.poljosfera.rs/saznajte/uredbe-i-konkursi/konkurs-sertifikacija/
- https://biznis.rs/biznis/agrobiznis/za-otvaranje-destilerije-potrebni-jaki-zivci-i-kvalitetno-voce/
- https://unija.com/sr/obrazac-pp-oa-uputstvo/
- https://www.gust.rs/destilati/proizvodnja-jakih-alkoholnih-pica-i-vodic-za-registrovanje-destilerije/
- https://www.telegraf.rs/vesti/jugosfera/4332739-nova-pravila-sta-sve-po-ulasku-u-eu-ceka-proizvodjace-rakije-ovo-se-definitivno-nece-svima-dopasti

### Opportunity: Seasonal purchase-point pack for fruit buyers and cold stores (e-Otkupno mesto + otkupni list + farmer payout)

**Industry:**
Agricultural produce buying: raspberries and other berries, fruit, possibly livestock.

**Buyer:**
The owner or manager of a cold store (hladnjača) or a trading company running several seasonal purchase points.

**Trigger / Why now:**
In 2025 the Ministry of Internal and Foreign Trade launched **e-Otkupno mesto**. Traders buying agricultural products and livestock from farmers must register each purchase point there at least 15 days before buying starts. Each season this adds a deadline-bound, per-location filing on top of the per-delivery purchase documents.

**Current workflow:**
1. Before the season, the manager registers each purchase point on e-Otkupno mesto.
2. At the shed, a clerk weighs each farmer's delivery and writes or prints a purchase document (otkupni list) with the buyer's name, seat, address, PIB, account and purchase-point name.
3. The clerk carries the slips to the office, where they are re-keyed per producer for payment and accounting.
4. Payouts go to the farmers' accounts. Accounting and tax treatment follow (for example the farmer flat-rate compensation; the details were not verified in this pass).

**Pain:**
High-volume per-delivery paperwork at peak season, plus a new state notification. Evidence of pain is indirect: a commercial "otkup" program exists, so people pay to remove it.

**Existing solutions:**
- SOFTEK "Program za evidenciju otkupa poljoprivrednih proizvoda": prints purchase slips and tracks quantities and payments per producer.
- General accounting/ERP vendors (unverified).
- The free e-Otkupno mesto portal itself.
- Paper slip books.

**Offline evidence:**
Purchase points are temporary rural sites. The ministry notice is aimed at traders directly. The only vendor found is a desktop accounting-software house.

**Offline channel:**
- Fruit cold-store associations and raspberry producer cooperatives (Arilje/Ivanjica region). Specific association names are unverified.
- Scale and cold-chain equipment suppliers.
- The public list of registered purchase points, if the ministry publishes one (unverified).

**Market count:**
Unverified. Estimate: several hundred purchase companies, with more seasonal points.

**The gap:**
Possibly offline-capable mobile intake that feeds the payout file and the portal registration in one place. SOFTEK may already cover most of it.

**Possible product:**
A tablet app for the shed: weigh-in, purchase slip, sync to the office, bank payout file. It reminds the manager of the e-Otkupno mesto deadline per point.

**MVP:**
Offline intake + slip printing + per-producer payout CSV.

**Pricing hypothesis:**
EUR 30–60 per purchase point per season-month.

**How to find first customers:**
Cold-store associations; raspberry-region outreach.

**Risks:**
- SOFTEK and ERP vendors.
- Seasonal revenue.
- Needs a local founder.

**Kill condition:**
Kill the idea if SOFTEK or ERPs already offer mobile intake, or if buyers report that the slips are not a bottleneck.

**Score:** 3/10

**Sources:**
- https://www.ozon.rs/vesti/2025/otvorena-nova-platforma-e-otkupno-mesto-za-trgovce-poljoprivrednih-proizvoda/
- https://must.gov.rs/vest/sr/11853/obavestenje-za-trgovce-koji-vrse-otkup-poljoprivrednih-proizvoda-i-domacih-zivotinja-od-poljoprivrednih-proizvodjaca.php
- https://www.softek.rs/knjigovodstveni-programi/program-za-otkup-poljoprivrednih-proizvoda/

## 3. Rejected

- **Currency exchangers:** the amended Foreign Exchange Law (in force 14 Mar 2025) brings strong enforcement, but exchangers must use NBS software or a bank's software, so no third-party software slot exists. Sources: https://www.paragraf.rs/dnevne-vesti/210325/210325-vest6.html , https://n1info.rs/biznis/nbs-zatvorila-90-menjacnica-na-mesec-dana-zbog-nepravilnosti-u-radu/
- **Beekeepers:** the obligations are annual, there are subsidy forms on eAgrar, and the vet station or advisory service does it for free. Source: https://www.poljosfera.rs/pcelarstvo/prijava-broja-pcelinjih-zajednica-do-31-oktobra-je-zakonska-obaveza/
- **Seasonal workers:** the free state portal and app already handle it (sezonskiradnici.gov.rs). Revisit only if the scheme is extended to household help, tourism or construction. Sources: https://naled.rs/htdocs/Files/02013/Vodic-za-sezonce.pdf , https://www.politika.rs/sr/clanak/500275/Angazovanje-sezonskih-radnika-siri-se-i-na-druge-oblasti , https://pitajknjigovodju.rs/sezonski-poslovi-u-poljoprivredi-ovo-su-obaveze-poslodavaca-i-prava-radnika/
- **Hunting-ground users:** the Hunting Chamber's own information system, plus volunteer buyers. Sources: https://lovackakomora.rs/wp-content/uploads/2024/07/Lovacki-info.-sistem.pdf , https://www.paragraf.rs/propisi/zakon_o_divljaci_i_lovstvu.html
- **Wineries:** the new Wine Law (evidence stamps per bottling, a 5,000 L limit for individuals) was still a draft as of Aug 2026. Revisit in 2027. Sources: https://www.agronews.rs/novi-zakon-o-vinu-mali-vinari-dobijaju-jasnija-pravila-drzava-uvodi-strozu-kontrolu-porekla-vina/ , https://cafebarrestoran.rs/wine-spirits/novi-zakon-o-vinu-srbija-2027/
- **Scrap buyers:** covered by the waste-software vendors in the country report, plus accountants for the withholding tax.

## 4. Method notes

- What worked: Serbian queries built from the obligation's own legal wording (podrumska evidencija, registar proizvođača, e-Otkupno mesto, ovlašćeni menjači). They surfaced Pravilnik forms, ministry notices and register counts quickly.
- Ex-Yugoslav language overlap is a trap. Croatian and Montenegrin results (zakon.hr, narodne-novine) crowd out Serbian ones, so add "Srbija" or the Serbian ministry name.
- In several quiet Serbian sectors the "substitute" is a free system run by the state or a chamber: NBS exchange software, the seasonal-worker portal, the Hunting Chamber information system, eAgrar, the vet stations. That cut most candidates.
- Not covered: livestock movements, taxi and tattoo studios were not screened, to stay within budget.
