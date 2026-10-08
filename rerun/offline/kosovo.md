# Kosovo: offline / quiet-industry screen

**Researched:** 2026-10-08 · **Market size:** small · **Languages searched:** Albanian, English (no Serbian-language query was run; budget) · **Verdict:** nothing new is viable at 4/10 or higher. Best near-misses are below.

Counts taken from the business register ARBK (arbk.org) are **estimates**: the register tags a business with every activity it lists (primary and secondary) and includes passive firms. The same site shows 270,396 registered businesses in total, which is far more than the number of operating firms. Use the counts as upper bounds.

## Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Hotels, guesthouses, short-stay hosts | Notify nearest police within 12 h of receiving a foreigner (stay up to 90 days) and keep a guest register for 3 years: Law 04/L-219 Art. 124(2), 125; fines Art. 134 | Police deputy commander (Informim, Sep 2025) says hotel owner informs police "within two days"; no provider channel, portal or API found; the police app/portal is for guests | ARBK tags: 5510 = 4,458; 5520 = 1,997; 5590 = 2,453 (estimate, overlapping, not operating counts); official licensed-accommodation count not found | Near-miss (3/10) | Real duty but soft enforcement, tiny foreign-guest flow, low willingness to pay |
| Scrap and waste collectors, scrap yards | Waste register, annual report by 31 March, licence: Law 04/L-060 Art. 16, 18, 55, 58; fines EUR 2,000-5,000 (Art. 73) | KEPA (AMMK) reporting forms exist for municipalities and licensed collectors; municipalities file digital plus signed hard copy; older cadastre report: only 3 large firms reported hazardous waste | ARBK NACE 3831 (dismantling metal waste): 698 registered, 620 shown active; 686 on the index page; 686 of 698 list a phone (arbk.org, estimate) | Rejected, see below | Enforcement thin, annual filing, cash-based buyers; competitor check not run |
| Employers of foreign workers | Residence-for-work permit, renewal request 30 days before expiry, notify DSHAM within 15 days of contract end: Law 04/L-219 Art. 47, 82; fines Art. 132 as amended | Employers track dates by hand; applications move to e-Kosova booking (per MIA page, Jan 2026); no tracker found | 5,087 employment residence permits issued in 2025 (MIA via Koha snippet; article returned 403, not opened); 400+ work permits in June 2026 (Radio Free Europe, opened); employer count not found | Near-miss (4/10), carried from the earlier report and re-checked | Duty and fines are strong, but employer pool and willingness to pay for software are unproven |
| Cattle and sheep farms, animal movement | Animal identification and registration (I&R) with GIS and cattle passport, run by the food and veterinary agency (AUV) | AUV has an I&R database and a cattle passport model (April 2025); no farmer-facing duty text found | Not found | Unscreened | Law text not found; farm register is voluntary except for subsidy applicants and farm-product sellers (Law 08/L-072, per search summary) |
| Beekeepers | Hive registration | Only Albania's Law 20/2023 found; no Kosovo rule | Not found | Rejected | No Kosovo duty found |
| Plant-protection (pesticide) dealers | Licence and register of producers, importers, wholesalers, sellers (AI 11/2010, 13/2009 listed on the AUV site; currency unverified); competence moved to AUV in 2024 | Not established | 1,915 phytosanitary inspections in 2025 (AUV, via search summary, unverified) | Unscreened | No seller sales-record duty found |
| Sawmills, timber and firewood traders | Wood-processing licence under Forest Law (2003/3 per gazette; APK site refers to Law 08/L-137, so the 2003 text may be replaced) | No current register or reporting duty found | Not found | Unscreened | Law status unclear; nothing confirmed |
| Customs agents (brokers) | Declarations in ASYCUDA World; agents authorised under the customs code | Declarations are electronic; brokers such as IMEX and Klikont sell it as a service | Not found | Not pursued | Electronic already, small licensed pool, count not found |
| Money exchange, non-bank financial institutions | Central bank (CBK) registration; reports to the FIU via goAML | goAML is electronic | ARBK 6419 = 1,776 (not meaningful) | Not pursued | Electronic reporting; no gap seen |
| Veterinary practices | AUV licences vet practices; vets' chamber law pending as of about 2023 | Not established | ARBK 7500 = 541 (estimate) | Unscreened | Medicine-record duty not found |
| Taxi operators | Municipal licensing | Not searched | ARBK 4932 = 12,321 (implausibly high, unreliable) | Unscreened | Budget |
| Driving schools | Ministry licensing | Not searched | ARBK 8553 = 1,063 (estimate) | Unscreened | Budget |
| Private security firms | Licensing | Not searched | ARBK 8010 = 996 (estimate) | Unscreened | Budget |
| Packaged-goods importers (EPR), food premises (HACCP), tax filing, fiscal devices | See the earlier general report | Earlier report | Earlier report | Not repeated | Already covered and rejected or scored 3 or lower |

## Opportunities

None clears 4/10 as a new idea. Two items are reported, both with all three checks done. The first is the earlier report's idea, re-checked with new counts. The second is the only new idea that passed all checks.

### Opportunity: Foreign-worker permit tracker (re-check of the earlier report's idea)

**Industry:**
Employers of non-Kosovar workers: construction, hospitality, manufacturing, call centres, recruitment agencies. Mixed sectors, not strictly a "quiet" industry.

**Buyer:**
HR or office manager of an SME with foreign workers, or the owner of a recruitment agency placing them.

**Trigger / Why now:**
Employment-based residence permits grew from 2,122 in 2021 to 5,087 in 2025 (MIA figures, reported by Koha; opened only as a search snippet because the article returned 403). A draft migration strategy 2026-2030 reportedly counts 3,271 work permits among 6,174 permits in H1 2026 (search-snippet summary only, **unverified**). Since 15 March 2026 the police and MIA apply the Foreigners Law more strictly.

**Current workflow:**
1. Employer collects contract, company registration, tax and contribution proof, and the worker's documents.
2. Work permit is requested at the Employment Agency and the residence-for-work permit at DSHAM (MIA page of 16 Jan 2026 names the Employment Agency for the work permit; secondary sources disagree on the exact bodies).
3. Employer tracks expiry in a spreadsheet and files renewal at least 30 days before expiry.
4. Many employers use lawyers or agents (price not found).

**Pain:**
Fine for employing a foreigner without a work residence permit: EUR 10,000-20,000 per foreigner for a legal person, EUR 3,000-5,000 for a natural person (Art. 132(1) as amended). Employers who fail the contract or notification duties face EUR 5,000-7,000 (legal person, Art. 128(2) as amended).

**Existing solutions:**
Lawyers and agents; EOR firms (Playroll, Skuad, Payoneer) aimed at foreign firms; generic expiry trackers (Odoo "employee document expiry" module, Expiration Reminder, Jobbatical renewals module, Pandahrms) with no Kosovo permit types; spreadsheets.

**The gap:**
No Kosovo-specific tracker or packet generator found (absence is **unverified**; only generic tools surfaced).

**Possible product:**
Per-worker permit file with deadline alerts, Albanian checklist per permit type, and pre-filled document packets. Multi-client view for agencies.

**MVP:**
Spreadsheet import, expiry alerts by email or Viber, checklist, PDF packet.

**Pricing hypothesis:**
EUR 5-8 per worker per month or EUR 50-100 per month per agency (estimate).

**How to find first customers:**
Recruitment agencies, the Kosovo chamber of commerce and sector associations (names not verified), law firms and accountants as resellers. There is no public list of employers with foreign workers.

**Risks:**
Employer count unknown; government is moving applications to e-Kosova; a draft Law on Foreigners exists (bogalaw.com PDF, date and status not checked), so the rules may change; lawyers and agents may be cheap.

**Kill condition:**
Fewer than about 300 employers hold foreign workers, or agents handle a renewal for under EUR 50 a case.

**Score:** 4/10

**Offline evidence:**
Date tracking is by spreadsheet (earlier report; no contrary evidence found). Applications are in person or by e-Kosova booking.

**Offline channel:**
Agencies, chamber of commerce, law firms. No public register of buyers, so concrete outreach is weak.

**Willingness to pay / founder access:**
Employers pay lawyers or agents for a done-for-you service; a software-only purchase is unproven. A non-local solo founder could sell it with an Albanian interface and a local reseller, but trust and phone sales matter.

**Market count:**
5,087 employment residence permits in 2025 (MIA via Koha snippet, estimate); employers: not found.

**Checks:**
- Competitor: Albanian "agjenci rekrutimi punëtorë të huaj Kosovë leje qëndrimi për punë shërbim avokat dokumentacioni punëdhënësi"; Albanian "softuer evidenca punëtorë të huaj leje qëndrimi skadimi afatet punëdhënësit Kosovë platformë"; English "Kosovo employer foreign workers residence permit renewal tracking software immigration compliance platform". Found no Kosovo-specific product; found EOR firms and generic trackers (listed above). Law-firm services exist but no price found. Vendor pages were not opened with WebFetch (only snippets read), so product coverage of Kosovo permit types is unverified.
- Duty: Law 04/L-219 on Foreigners (Official Gazette No. 35, 5 Sep 2013, Assembly of Kosovo; text from kosovopolice.com), as amended by Law 06/L-036 (Gazette No. 6, 3 May 2018). Art. 47(1) as amended: "Kërkesa për vazhdimin e lejes së qëndrimit të përkohshëm duhet të paraqitet brenda tridhjetë (30) ditëve para skadimit". Art. 82(2): employer and foreigner must notify DSHAM within 15 days when the employment contract ends. Art. 132(1) as amended: fines above. The duty falls on the employer.
- Jurisdiction and currency: both laws are Kosovo gazette texts. The MIA information page dated 16 Jan 2026 (mpb.rks-gov.net) cites Law 04/L-219 as the law in force and says full rules apply from 15 March 2026. A draft replacement law exists (status unchecked).

**Sub-scores:** Pain 6, Frequency 5, Mandatory 9, Fragmentation 3, Competition 6, Incumbent gap 4, Buyer accessibility 3, Willingness to pay 4, MVP 7, Distribution 3. Average 5.0. Overall is below the average because the employer pool is unmeasured and the buyer list is not public.

**Sources:**
- https://www.kosovopolice.com/wp-content/uploads/2020/07/Ligji-Nr.04-L-219-pe%CC%88r-te%CC%88-Huajt.pdf
- https://www.kosovopolice.com/wp-content/uploads/2020/07/Ligj-Nr.06-L-036-pe%CC%88r-ndryshimin-dhe-plotesimin-e-Ligjit-Nr.-04L-219-pe%CC%88-te%CC%88-Huaijt-20.04.2018.pdf
- https://mpb.rks-gov.net/f/57/11006/INFORMACION-P%C3%8BR-SHTETASIT-E-HUAJ-Q%C3%8B-HYJN%C3%8B-N%C3%8B-REPUBLIK%C3%8BN-E-KOSOV%C3%8BS
- https://www.koha.net/arberi/nente-mije-leje-qendrimi-per-shtetasit-e-huaj-me-2025-pese-mije-per-punesim (snippet only)
- https://www.evropaelire.org/a/punetoret-e-huaj-kosove-largimi-nga-vendi/33836114.html

### Opportunity: Foreign-guest register and police notice for accommodation providers

**Industry:**
Hotels, guesthouses, hostels, apartment and short-stay hosts.

**Buyer:**
Owner or manager of a small accommodation business.

**Trigger / Why now:**
Stricter application of the Foreigners Law from 15 March 2026; police announced a push to make foreigners register (Informim, 19 Sep 2025). The Kosovo Police offer a guest-side app and online form (third-party store listing, **unverified** features).

**Current workflow:**
1. Guest checks in with a passport.
2. Hotel writes the guest in a book or PMS, and passes the data to the nearest police station (channel not found; a police deputy commander says the hotel informs police within two days).
3. Hotel keeps the guest record for 3 years for inspection.

**Pain:**
Fine EUR 400-800 for a legal person, EUR 200-400 for a natural person, plus EUR 500-1,000 for the responsible person (Art. 134). The same deputy commander says the aim is registration, not fines, so pain is low.

**Existing solutions:**
Guest-side Kosovo Police app and online form (guests file themselves; from the Czech foreign-ministry page via search snippet, one form per place of stay); generic PMS; paper registers. No provider-side portal like Bosnia's e-stranac or Serbia's eTourist was found.

**The gap:**
No provider channel exists, so software can only produce a compliant register and a per-guest self-registration link or QR code. If police launch a provider portal, it would be free.

**Possible product:**
Check-in form with passport scan, guest self-registration link to the police portal, and a 3-year register export for inspectors.

**MVP:**
Web form plus register export (PDF/CSV) plus reminder if a foreign guest has no filing recorded.

**Pricing hypothesis:**
EUR 8-15 per month per property (estimate).

**How to find first customers:**
Outreach by phone from the ARBK register (most registered businesses list a phone); hotel and tourism associations (names not verified).

**Risks:**
Foreign guests are a small share (most visitors are Kosovo citizens, including diaspora with Kosovo documents); enforcement is soft; the government can launch a free portal; private hosts are informal.

**Kill condition:**
Police launch a provider portal, or fewer than about 300 properties actually host foreigners.

**Score:** 3/10

**Offline evidence:**
No electronic provider channel exists; the police deputy commander describes duties in general terms.

**Offline channel:**
Phone outreach from ARBK; tourism associations (unnamed). Without a confirmed association, distribution stays at 3.

**Willingness to pay / founder access:**
Buyers would probably pay for neither software nor a service at this fine level. A non-local founder could sell it, but the small market makes it hard.

**Market count:**
Official count of licensed accommodation not found. ARBK activity tags 5510/5520/5590 total about 8,900 (estimate; overlapping, passive firms included, unreliable). The Statistics Agency PDF found was unreadable.

**Checks:**
- Competitor: Albanian "regjistrimi i mysafirëve të huaj hotele apartamente policia Kosovë obligim ofruesit e akomodimit sistemi elektronik"; Albanian "softuer hotel regjistrimi i të huajve policia lajmërimi 12 orë aplikacion për hotele Kosovë"; English "Kosovo hotel guest registration police app foreigners accommodation provider software PMS Kosovo police integration". No Kosovo vendor or provider-side police channel found; no vendor page to open.
- Duty: Law 04/L-219 Art. 124(2): "Personat fizik dhe juridik të cilët ofrojnë akomodim të të huajve ... janë të obliguar që të lajmërojnë stacionin më të afërt të policisë brenda dymbëdhjetë (12) orëve nga pranimi i të huajit." Art. 124(3): applies to stays up to 90 days. Art. 125: providers keep the register at least 3 years and show it on official request. Art. 134: fines above. Art. 124 and 125 were not touched by Law 06/L-036 (no match in its text).
- Jurisdiction and currency: Kosovo Official Gazette No. 35 of 5 Sep 2013 (text on kosovopolice.com); MIA page of 16 Jan 2026 cites the same law as in force. The 2-day figure quoted by the police commander conflicts with the 12-hour law text; I follow the text.

**Sub-scores:** Pain 4, Frequency 7, Mandatory 8, Fragmentation 2, Competition 6, Incumbent gap 4, Buyer accessibility 6, Willingness to pay 2, MVP 8, Distribution 3. Average 5.0. Overall is below the average on purpose: low willingness to pay and soft enforcement outweigh the high frequency.

**Sources:**
- https://www.kosovopolice.com/wp-content/uploads/2020/07/Ligji-Nr.04-L-219-pe%CC%88r-te%CC%88-Huajt.pdf
- https://informim.net/2025/09/19/kosova-do-te-zbatoje-detyrimin-e-paraqitjes-ne-polici-per-te-huajt-qe-hyjne-ne-vend/
- https://mpb.rks-gov.net/f/57/11006/INFORMACION-P%C3%8BR-SHTETASIT-E-HUAJ-Q%C3%8B-HYJN%C3%8B-N%C3%8B-REPUBLIK%C3%8BN-E-KOSOV%C3%8BS
- https://arbk.org/aktivitete/

## Rejected

- **Scrap and waste register / annual report tool** (scrap yards, collectors; about 620-698 ARBK-registered dismantlers). Duty is real: Law 04/L-060 (Gazette No. 17, 29 Jun 2012) Art. 18(1.6) record-keeping, Art. 58 annual report by 31 March, Art. 73 fines EUR 2,000-5,000 ("nuk mban dhe ruan evidencën në regjistrin për mbeturinat"). Killed because: annual filing, thin enforcement (a Kallxo headline, not opened, says the ministry issued only 19 fines for solid-waste polluters in 2021), cash-based sellers, and no evidence of paying demand. **Competitor check not run** (no budget left), so this is a screening rejection, not a proven one. The 2012 law was amended later (Law 08/L-071 per the earlier report); amendment not read.
- **Beekeeper register:** only Albania's Law 20/2023 exists; no Kosovo duty found.
- **Pesticide dealer sales register:** AUV took over the licensing role in 2024, but no seller record-keeping duty was found; old instructions 11/2010 and 13/2009 are of unverified currency.
- **Forestry licences and register:** Forest Law 2003/3 may have been replaced by 08/L-137 (per the APK site, unverified); no register duty found.
- **Customs-broker tool:** declarations are already electronic (ASYCUDA World, since 2018); brokers are served by local service firms.
- **Cash-ban, EFS fiscalization, tax filing, EPR, HACCP:** covered in the earlier report.
- **Extra idea, not researched:** taxi operators, driving schools, private security, pharmacies. Left unscreened for budget.

## Search log

**WebSearch calls:** 15. **WebFetch calls:** 17 (Koha and Kallxo returned HTTP 403 on three attempts: kallxo.com once, koha.net twice; arbk.org/aktivitet/ returned 404). I also downloaded one PDF with curl (Law 06/L-036) and ran pdftotext on it and on Law 04/L-219.

Competitor queries (also listed above):
1. Albanian: "regjistrimi i mysafirëve të huaj hotele apartamente policia Kosovë obligim ofruesit e akomodimit sistemi elektronik"
2. Albanian: "softuer hotel regjistrimi i të huajve policia lajmërimi 12 orë aplikacion për hotele Kosovë"
3. English: "Kosovo hotel guest registration police app foreigners accommodation provider software PMS Kosovo police integration"
4. Albanian: "agjenci rekrutimi punëtorë të huaj Kosovë leje qëndrimi për punë shërbim avokat dokumentacioni punëdhënësi"
5. Albanian: "softuer evidenca punëtorë të huaj leje qëndrimi skadimi afatet punëdhënësit Kosovë platformë"
6. English: "Kosovo employer foreign workers residence permit renewal tracking software immigration compliance platform"

Other searches (screening and duty checks):
7. "licenca grumbullimi i mbeturinave metalike skrap regjistri Kosovë Ministria e Mjedisit ligji"
8. "AUV regjistri i kafshëve identifikimi regjistrimi gjedhi Kosovë fermerët bletarët veterinarët obligim"
9. "Agjencia e Pyjeve e Kosovës licenca tregtarët e druve të zjarrit sharra regjistri raportim mujor dru"
10. "Ligji për të huajt Kosovë "ofruesi i akomodimit" njofton policinë vendqëndrimi i të huajit evidenca gjobë"
11. "shitësit e pesticideve produkteve për mbrojtjen e bimëve licenca regjistri evidenca e shitjes AUV Kosovë udhëzim administrativ"
12. "Doganat e Kosovës agjentët doganorë licenca numri i agjentëve doganorë deklarata ASYCUDA sistemi i ri 2026"
13. "BQK licencimi këmbimoret zyrat e këmbimit numri raportim NJIF subjektet raportuese goAML Kosovë 2025"
14. "AMMK raportimi vjetor i operatorëve të mbeturinave regjistri i mbeturinave fletëdërgesa përcjellëse mbeturina të rrezikshme Kosovë formular elektronik"
15. "numri i lejeve të punës për të huaj Kosovë 2025 kuota punëtorë të huaj lejet e dhëna Ministria e Punës"

Not done: no Serbian-language query; no competitor check for the scrap/waste idea; Statistics Agency accommodation figures unread; Koha figures seen only in search summaries.

Query patterns that worked:
- Albanian queries naming the law and the duty ("ofruesi i akomodimit" + "njofton policinë") led straight to the official PDF of Law 04/L-219, whose text I could then read with pdftotext.
- Fetching ARBK activity pages (arbk.org/aktivitete/) gave register counts and phone/email coverage for outreach, but the counts are tags, not operating firms.
- English "software + obligation + country" queries returned only generic global tools or EOR marketing pages, so absence of local vendors is suggestive but unproven.
