# Norway: offline / quiet-industries pass

Researched 2026-10-05. **This report is incomplete.** Only 6 of the 40 WebSearch calls were made. The sixth was refused with "You've hit your usage limit", and the instructions say to stop and write up when a search is refused. WebFetch and GitHub tools were not used. Rows marked "not searched" are hypotheses only. Any obligation stated for them comes from general knowledge, is **unverified**, and must be re-checked before use.

The existing country report (`research/countries/norway.md`) already covers these, so they are not repeated here: the accommodation levy, construction-waste final reports, kindergarten subsidy reporting, funeral DGM, crew lists, e-invoicing, aquaculture, fertiliser regulation, F-gas and short-term rentals.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Second-hand dealers / scrap / antiques (brukthandel) | Brukthandelloven: until 2024, a police permit plus a police-approved protocol | The protocol was a police-approved register, historically on paper | Not found | **Rejected** | The law was **narrowed on 1 July 2024**. It now covers only precious metals and gems, cultural items, art, collectibles, antiques and motor vehicles. This is deregulation, so the pain is shrinking, not growing |
| Tourist-fishing camps and cabin owners who rent to anglers (turistfiskebedrifter) | Register with Fiskeridirektoratet; report catches of cod, halibut, saithe, redfish and wolffish **daily** through an approved digital system; the report must exist before export documentation is issued; export quota 15 kg × 2 per year from 2026 | Many small rural, seasonal, owner-run camps. Kystmagasinet reports operators using five different apps | Not found (GoFish publishes a list of registered businesses; count not extracted) | **Shortlisted, then killed** | Strong 2025–26 trigger, but there are 5 approved apps and **GoFish Start is free** and meets the requirement |
| Households as employers (nannies, practicants, home helpers) | Simplified a-melding for paid work in the home (childcare under 12 years old, above NOK 6,000 per year; other home work above thresholds) | Done by private individuals, once a year or occasionally | Not found | **Rejected** | Skatteetaten provides a free simplified service. Low frequency, consumer buyer |
| Pawnbrokers | Pantelånerloven licence (unverified) | Not searched | Not searched | Not assessed | Search budget refused |
| Reindeer herding (Norway-specific) | Annual reindeer-herding report (reindriftsmelding) to Landbruksdirektoratet (unverified) | Not searched | Not searched | Not assessed | Search budget refused. Likely a small, state-served population |
| Tattoo / piercing studios | Municipal approval under the hygiene regulation for hairdressers, skin care and tattooing (unverified) | Not searched | Not searched | Not assessed | Search budget refused. Likely an annual or one-off obligation |
| Beekeepers | Registration and disease reporting to Mattilsynet (unverified) | Not searched | Not searched | Not assessed | Search budget refused. Mostly hobbyists, low willingness to pay |
| Hunters / game dealers (viltomsetning) | Game-meat sales and slaughter rules (unverified) | Not searched | Not searched | Not assessed | Search budget refused |
| Private water supply / septic (slamtømming) | Municipal sludge-emptying schemes; registration of small water works (unverified) | Not searched | Not searched | Not assessed | Search budget refused. Sludge emptying is usually a municipal service contract, so the buyer is the municipality |
| Taxi operators | Yrkestransportloven taxi licence; taximeter and trip-data rules (unverified) | Not searched | Not searched | Not assessed | Search budget refused. Taximeter vendors probably cover it |

Norway-specific groups added: tourist fishing, reindeer herding, game dealers. Only the first was actually researched.

## 2. Strongest opportunities

**None reached the bar.** The only industry researched in depth is written up below for the record. It is killed by a free incumbent.

### Opportunity: Daily catch reporting and export documentation for small tourist-fishing camps

**Industry:**
Fishing tourism: sea-fishing camps, rorbu and cabin rentals with boats, and private holiday-home owners who rent to foreign anglers.

**Buyer:**
The owner-operator of a small registered tourist-fishing business, typically seasonal and rural (Nordland, Troms, Finnmark, Vestlandet).

**Trigger / Why now:**
Daily catch reporting has applied from 2025 (eksportfiske.no says from August 2025). From 1 January 2026, the report must exist before export documentation can be issued, and the export quota drops to 15 kg per person, at most twice a year. All reporting must go through a digital system approved by Fiskeridirektoratet, a rule in place since 2022.

**Current workflow:**
1. Register the business in Fiskeridirektoratet's register of tourist-fishing businesses.
2. Guests record their catch after each trip in an approved app, or the host records it for them.
3. The app forwards the catch to Fiskeridirektoratet by the end of the fishing day.
4. At departure, the guest needs export documentation backed by the reported catch, checked by customs against the quota.

**Pain:**
Real but modest. Foreign guests must be made to report every day. Small hosts, and cabin owners who may not realise they count as a "tourist-fishing business", must comply. Kystmagasinet reports that operators use five different apps.

**Existing solutions:**
GoFish (approved, automatic forwarding to Fiskeridirektoratet; **GoFish Start is free** and meets the requirement; paid tiers add boat tracking, guest register and booking). Four other approved apps, not named in the sources found. eksportfiske.no, a service aimed at holiday-home owners. dintur.no guidance.

**Offline evidence:**
Small seasonal rural operators. The guests are foreign (largely German, unverified). The host's own admin is thin. But the reporting itself is already digital by law.

**Offline channel:**
NHO Reiseliv and Norges Fiskarlag both answered the registration hearing, so they are reachable. Regional destination companies. Fiskeridirektoratet's public register.

**Market count:**
Not found. Fiskeridirektoratet's register and GoFish's list of registered tourist-fishing businesses would give it.

**The gap:**
Possibly bundling the catch report with the municipal overnattingsavgift (see the country report), booking and export paperwork for one-to-five-cabin hosts. That gap is unverified, and GoFish already bundles booking and the guest register.

**Possible product:**
A one-screen host tool covering guest check-in, daily catch prompts by SMS to guests, the approved report, an export-quota summary and, from 2027, the municipal tourist levy.

**MVP:**
Would require approval as a reporting system by Fiskeridirektoratet, which is a barrier in itself.

**Pricing hypothesis:**
NOK 0–1,500 per season. The free GoFish tier caps the price.

**How to find first customers:**
Fiskeridirektoratet's register, NHO Reiseliv, and destination companies in Lofoten and Vesterålen.

**Risks:**
A free incumbent, system-approval requirements, a seasonal business, and a political trend that is shrinking the activity (lower quotas).

**Kill condition:**
Already met. A free approved app satisfies the obligation.

**Score:** 2.5/10 (Pain 4, Frequency 8, Mandatory 9, Fragmentation 2, Competition 2, Incumbent gap 2, Buyer access 6, WTP 2, MVP 4, Distribution 5). The buyer would not pay for software beyond the free tier. A non-local founder could sell to German-run camps, but it isn't worth doing.

**Sources:**
- https://eksportfiske.no/fangstrapportering-turistfiske/
- https://support.gofish.no/hc/nb/articles/13590091280796-Regler-rundt-turistfiske-og-fangstrapportering
- https://support.gofish.no/hc/nb/articles/13620821552156-Automatisk-vidererapportering-av-fangst-til-Fiskeridirektoratet
- https://www.kystmagasinet.no/app-fiskeridirektoratet-turistfiske/rapporterer-via-fem-forskjellige-apper/1446969
- https://gofish.no/registrerte-turistfiskebedrifter-i-norge/
- https://www.toll.no/no/varer/fisk/kvote
- https://www.regjeringen.no/no/aktuelt/nye-rad-om-turistfiske/id3092980/

## 3. Rejected

- **Second-hand / scrap dealer protocols.** Deregulated on 1 July 2024. Police permits and protocols now apply only to precious metals, cultural items, art, antiques and motor vehicles. Sources: https://www.regjeringen.no/no/aktuelt/fra-1.-juli-2024-blir-det-enklere-a-selge-brukte-varer/id3045055/ , https://www.regjeringen.no/no/aktuelt/na-blir-det-enklere-a-handle-med-brukte-varer/id3032619/
- **Household employers.** Skatteetaten's own free simplified a-melding is the substitute. The buyer is a consumer and the task is annual. Sources: https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/veiledning/lonn-og-ytelser/oversikt-over-lonn-og-andre-ytelser/lonn-til-dagmamma-eller-praktikant-som-passer-barn-i-barnets-hjem , https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/a-meldingen/levere/for-privatpersoner/
- **Tourist-fishing catch reporting.** Killed by GoFish's free tier and four other approved apps (see above).

## 4. Method notes

Norwegian-language regulator queries worked well. Fiskeridirektoratet hearing attachments, regjeringen.no news and skatteetaten.no guidance came up directly. The pattern found so far matches the country report: Norway is digitising *by law* (approved digital systems, Altinn, state self-service), so "quiet" industries are served by free state tools or quickly approved apps, and deregulation (brukthandel) removes obligations. The pass stopped after 6 searches because of a usage limit. Pawnbrokers, reindeer herding, tattoo, beekeeping, game dealers, taxis and sludge emptying remain unscreened and should be re-run if budget allows.
