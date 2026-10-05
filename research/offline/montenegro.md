# Montenegro: offline-industries pass

**Status: truncated.** This pass ran 3 WebSearch calls out of a 20-call budget. The second call came back with "You've hit your usage limit". The instructions say to stop when a search is refused, so I stopped there. One of the two completed calls was useful (seasonal foreign labour). The other (scrap and secondary raw materials) returned only Bosnian, Serbian and EU results, nothing for Montenegro. Everything else below is a screen based on prior knowledge. It is labelled **unverified**, and nothing here should be scored or used in the ranking without re-checking. Today is 2026-10-05.

Context from the existing report (`research/countries/montenegro.md`): the population is about 620k, the economy is tourism-heavy, and the country is an EU candidate. Real-time fiscalization (eFiskalizacija) has applied to every B2C seller since 2021. Guest registration and tourist tax are already covered there, so they are not repeated here.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Hospitality employers hiring foreign seasonal workers | The employer obtains the temporary residence and work permit for seasonal work. The permit is issued only if the Employment Agency (ZZZCG) has no suitable unemployed person on its records, or if such a person has refused the job. Each permit is tied to the contract period and is extended at the employer's request. | Confirmed: the employer applies to the competent authority, and the job is checked against the Agency's register. Unverified: whether the steps are paper or counter-based. Regional explainers (N1, Vreme) describe it as a step-by-step procedure that workers and employers struggle with. | 2,341 foreigners held temporary residence on seasonal work permits at the time of the source (biznis.rs). The number of employers is unknown, probably a few hundred. | Weak lead (see below) | Mandatory, per-worker and seasonal, but small. Agencies and lawyers already do the work. |
| Households as employers (domestic workers, carers) | Registering the employee and paying contributions through the Tax Administration | Unverified | Unknown | Not screened | No search budget left. Likely mostly informal and cash-paid. |
| Scrap metal and secondary raw materials buyers | Waste-management permit and waste records under the 2024 Law on Waste Management | Unverified: the search returned nothing specific to Montenegro | Unknown, probably tens of operators | Reject (unverified) | Too few operators. Reporting runs through the Environmental Protection Agency (EPA). |
| Pawnshops and gold buyers | AML reporting to the Financial Intelligence Unit (FIU) (unverified) | Unverified | Probably very few | Reject | The market is too small. |
| Beekeepers | Hive register and movement for migratory beekeeping (veterinary authority, unverified) | Probably paper or handled through the association | Unknown | Not screened | No budget. Subsidy paperwork is probably handled by the beekeepers' associations. |
| Livestock keepers and traders | Animal identification and movement records with the Food Safety, Veterinary and Phytosanitary Administration (unverified) | The state runs the central database | Unknown | Reject (unverified) | The state system and the vets do the entry. |
| Small abattoirs, cheese and kajmak producers, home food producers | Food-business registration and HACCP with the Food Safety, Veterinary and Phytosanitary Administration (unverified) | Unverified | Unknown | Not screened | No budget. HACCP consultants are the likely substitute. |
| Fishermen selling their own catch | Catch logbook and first-sale records (unverified) | Unverified | Small coastal fleet (unverified) | Reject (unverified) | Too small. |
| Taxi operators | Municipal licences, taximeters, fiscalization | Fiscal devices are mandatory | Unknown | Reject | Fiscalization POS vendors already serve them. |
| Market and street traders | Municipal stall permits and fiscalization | Unverified | Unknown | Reject | Fiscalization vendors. Payment runs through municipal utility companies. |
| Beach concession holders on Morsko dobro land (country-specific) | Concession and lease contracts with the Morsko dobro public enterprise, lifeguard and equipment conditions, inspections (unverified) | Unverified: the search was refused | A few hundred beach lots (unverified) | Not screened | It was the most promising country-specific idea, but the search was cut off. |
| Small boat charters and boat rentals (country-specific) | Boat registration with the Harbour Master, crew lists, tourist tax for nautical tourism (unverified) | Unverified | Unknown | Not screened | No budget. |
| Hunting associations (country-specific) | Hunting-ground management, game records, permits for foreign hunters (unverified) | Unverified | Unknown | Not screened | No budget. |

## 2. Opportunities

None of these meets the bar. The one lead is documented so it is on the record.

### Opportunity: Seasonal foreign-worker permit tracker for Montenegrin coastal hospitality employers

**Industry:**
Hotels, restaurants and beach bars on the coast that hire non-resident seasonal staff

**Buyer:**
The owner or manager of a small or mid-size hotel or restaurant on the coast, or the employment agency or lawyer who files for them

**Trigger / Why now:**
Every season brings a new round of permits. Each permit runs only for the contract period and is extended at the employer's request. Before a permit is issued, the employer must show that no suitable unemployed person is on the Employment Agency's records. Regional press reports that the new aliens rules restricted how Serbian citizens can work on the coast (Kurir). I could not verify the exact effective date.

**Current workflow:**
1. The employer advertises the job, or obtains a labour-market check from the Employment Agency (ZZZCG).
2. The employer collects the worker's documents and applies for the temporary residence and work permit.
3. The employer registers the employment contract and social contributions.
4. The employer tracks the expiry date and files for an extension if the season runs longer.

**Pain:**
Mandatory and per worker. If a worker is not properly registered, both the worker and the employer face penalties. I found no direct complaint evidence for Montenegro.

**Existing solutions:**
Recruitment and staffing agencies, local lawyers and accountants who file the permits. Payroll is handled by local accounting firms.

**Offline evidence:**
The procedure is explained through press "step-by-step" guides rather than software. I found no listings for SaaS tools.

**Offline channel:**
The Montenegrin Tourism Association (CTU) and the employers' union (UPCG), plus coastal accountants (unverified that they would refer).

**Market count:**
2,341 seasonal-permit holders (biznis.rs). The employer count is estimated at a few hundred.

**The gap:**
At most, a deadline and document tracker. The filing itself stays with the authority and the agencies.

**Possible product:**
A seasonal-staff document and permit-expiry tracker with checklists.

**MVP:**
A shared checklist and expiry reminders for each worker.

**Pricing hypothesis:**
About EUR 10–20 per employer per month, for the season only. Employers would likely pay only for a done-for-you filing service, not for software.

**How to find first customers:**
Through the CTU and UPCG member lists.

**Risks:**
Tiny market. Locals do this as a service. A non-local solo founder could not sell it.

**Kill condition:**
Already met: about 2,300 workers spread across a few hundred seasonal employers cannot support a software business.

**Score:** 2/10

**Sources:**
- https://biznis.rs/vesti/jednak-minimalac-za-strance-i-domace-radnike-u-crnoj-gori/
- https://n1info.rs/biznis/korak-po-korak-procedura-za-rad-na-jadranskom-primorju-tokom-leta/
- https://www.kurir.rs/region/crna-gora/2158375/nema-posla-za-srbe-tokom-leta-novi-zakon-ogranicio-rad-na-crnogorskom-primorju
- https://naled.rs/htdocs/Files/05174/Analiza-angazovanja-sezonske-radne-snage-u-turizmu-Crnoj-Gori.pdf

## 3. Rejected

- **Seasonal-worker permit tracker:** the market is too small and the work is done as a service by agencies and lawyers. Score 2.
- **Scrap and secondary-raw-material registers:** I found no Montenegro-specific evidence, and there are very few operators.
- **Taxi and market traders:** the obligations (fiscalization) are already covered by POS vendors.
- **Livestock movement and animal ID:** the state database and vets do the data entry (unverified).
- **Pawnshops and gold buyers:** too few operators.

## 4. Method notes

- Local-language (Montenegrin/Serbian) regulator queries mostly return Serbian, Bosnian and Croatian pages, because the language is shared. Add "Crna Gora" plus a Montenegrin authority name (e.g. "Uprava za bezbjednost hrane", "Morsko dobro", "ZZZCG"), or restrict to the `.me` / `gov.me` domains.
- The search tool hit its usage limit on the second call. The most promising untested country-specific leads are beach concessions on Morsko dobro land, nautical charter crew lists and tourist tax, and the Food Safety, Veterinary and Phytosanitary Administration's register of small food producers. Even if they pan out, each Montenegrin market is likely to be in the hundreds of operators.
