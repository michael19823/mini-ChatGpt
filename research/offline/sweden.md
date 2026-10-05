# Sweden - offline-industries pass (2026-10-05)

**Status: incomplete.** The search tool returned "You've hit your usage limit" on the 3rd WebSearch call. Following the instructions ("If a search is refused, stop and write up what you have"), I stopped there. Only 2 searches returned results, so this report is short. Most rows in the screening table rest on background knowledge and are marked **unverified**. Treat them as a list of hypotheses for a rerun, not as findings.

Context from the existing country report (`research/countries/sweden.md`): Sweden is highly digitised. Regulators usually ship a free e-service, and vertical vendors adapt fast. Many quiet industries that would be paper-based elsewhere (horse medication, sprutjournal, fish logbooks, hazardous-waste notes) already have a state e-service. That report already killed these, and this pass doesn't repeat them.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Small alcohol producers with farm-gate sales (gårdsförsäljning) | New from 1 Jun 2025: municipal permit, own-control programme filed with the application, sales only in connection with a visitor arrangement, statistics to Folkhälsomyndigheten (volume per drink category, number of visitors, number of buyers) | Permit is applied for per municipality (each municipality publishes its own page and form); statistics duty is new; producers are farms, vineyards and micro-breweries (verified: Folkhälsomyndigheten and municipal pages) | Not found. Estimate: several hundred eligible micro-breweries, distilleries, cider makers and vineyards (unverified) | Weak candidate (opp. 1) | Real new trigger in a quiet sector, but the market is small and the duties are light |
| Scrap metal dealers | Police permit, ID check and register of seller details under the old scrap law; a cash ban was proposed (SOU 2014:72) | Register keeping is traditionally a paper ledger (unverified) | Not found | Rejected | The cash ban has been proposed repeatedly but, per the search, is not law; no 2025–2027 trigger found; permits are few |
| Second-hand goods dealers | Registration with police and a ledger of purchases for some goods (begagnatlagen) | Old law, traditionally a paper ledger (unverified) | Not found | Rejected | No new trigger found; dealers' POS or Excel covers it |
| Well drillers (brunnsborrare) | Report each new well to SGU (Brunnsarkivet) | SGU has a digital channel (unverified; this search was refused) | A few hundred firms (estimate) | Rejected (unverified) | Single receiving authority, tiny market, likely a free SGU route |
| Chimney sweeps | Brandskyddskontroll and sotning protocols to the municipality | Municipally contracted (often monopoly per area); trade software exists (unverified) | About 290 municipalities, a few hundred firms (estimate) | Rejected | Few buyers, municipal contracts, existing sweep software (unverified) |
| Households as employers (nanny, private carer) | Monthly per-individual employer declaration (AGI) to Skatteverket for private employers | Skatteverket's own e-service for private persons (unverified) | Not found | Rejected | Few true household employers; RUT companies absorb most demand; the state portal is free |
| LSS "own employer" assistance users | Payroll plus monthly time reports to Försäkringskassan | Approved ELT suppliers already exist (see country report) | Not found | Rejected | Covered by Försäkringskassan-approved systems and assistance cooperatives |
| Beekeepers | Apiary registration with Länsstyrelsen / Jordbruksverket | Mostly hobbyists (unverified) | Not found | Rejected | Hobby sector, no willingness to pay |
| Livestock traders and animal transport | Registration, journey logs, CDB movement reporting to Jordbruksverket | CDB is a state e-service; farm software (Växa, etc.) reports (unverified) | Not found | Rejected | State e-service plus incumbent farm software |
| Kennels and breeders | Permit under the animal welfare law (16 §), Jordbruksverket dog register | Länsstyrelsen permit, free dog register (unverified) | Not found | Rejected | Low frequency, hobby-heavy, no money |
| Tattoo and piercing studios | Notification (anmälan) to the municipal environment and health office, hygiene own-control | One-off notification plus inspection (unverified) | Not found | Rejected | One-off duty, no recurring filing |
| Taxi operators | Taxameter data to a redovisningscentral, permit from Transportstyrelsen | Fully digital by law (redovisningscentraler) (unverified) | Not found | Rejected | Already digital and intermediated |
| Fishermen selling own catch | First-hand sale and sales notes to HaV | HaV e-services; country report already rejected the small-vessel logbook | Not found | Rejected | State tools exist |
| Monument makers and cemeteries | Gravestone permits from the burial-ground manager (often the Church of Sweden) | Paper or email permit to the parish (unverified) | Not found | Rejected (unverified) | Per-job but low pain; the Church of Sweden runs its own systems |

## 2. Opportunities

### Opportunity: Farm-gate Alcohol Compliance Kit (gårdsförsäljning)

**Industry:**
Small-scale alcohol production (micro-breweries, craft distilleries, cider makers, vineyards)

**Buyer:**
The owner-operator of a small producer that holds, or is applying for, a gårdsförsäljning permit

**Trigger / Why now:**
Since 1 Jun 2025, small producers can apply to the municipality where they sell for a farm-gate sales permit. Folkhälsomyndigheten issued regulations in May 2025. The production caps are 75,000 litres of spirits, 400,000 litres of fermented drinks up to 10% and 200,000 litres of fermented drinks above 10% per year. Producers must have an own-control programme (attached to the application) and must report statistics: total farm-gate sales volume per drink category, total visitors in visitor arrangements, and total visitors who bought alcohol.

**Current workflow:**
1. Apply to the municipality using its own form and attach the own-control programme (often written from scratch or from a template).
2. At each visitor arrangement, log visitors and buyers and record volumes sold per category (probably on paper or in the till; unverified).
3. Compile the statistics for Folkhälsomyndigheten and, separately, the excise tax return to Skatteverket (unverified for small producers).
4. Prepare for municipal inspection (tillsyn) against the own-control programme.

**Pain:**
Moderate. The duty is new and municipal pages show that each municipality runs its own application. The per-visit visitor and buyer counting is unusual and not something a generic POS tracks. No complaints or enforcement were found (search budget lost).

**Existing solutions:**
Unverified because of the search cut-off. Likely substitutes: the brewery or distillery's existing POS (Zettle, Sumup, Caspeco) for volumes; brewery ERP (Ekos, Breww; Swedish coverage unverified) for excise; templates from trade associations (Sveriges Bryggerier, Svenska Vinodlare, Spritproducenterna; their role is unverified); consultants for permit applications.

**Offline evidence:**
Applications go to individual municipalities (each with its own page and form, for example Sollentuna, Karlskoga, Mark and Alvesta). Operators are rural, small and owner-run. The statistics duty is new, with no known software listing.

**Offline channel:**
Producer associations (Sveriges Bryggerier, Svenska Vinodlare, Spritproducenterna; unverified that they run newsletters or fairs), municipal alcohol administrators who already receive the applications, and regional food networks (Länsstyrelsen food strategy contacts).

**Market count:**
Not found. Estimate: a few hundred eligible producers (unverified). The number of permits granted since June 2025 is unknown and is the first number to find.

**The gap:**
Possibly a combined "visit log → Folkhälsomyndigheten statistics + own-control evidence + per-person sales limit check" record. It's unclear whether a POS add-on already does this.

**Possible product:**
A tablet visit log for guided tastings that records visitors and purchases, enforces per-visit sales limits, and produces the annual statistics return and inspection-ready own-control evidence.

**MVP:**
A web form plus an export to the Folkhälsomyndigheten statistics format, and an own-control programme template generator per municipality.

**Pricing hypothesis:**
SEK 100–200 per month, or a one-off fee of SEK 1,500–3,000 for help with the permit application. This is probably a done-for-you service rather than software.

**How to find first customers:**
Municipal permit registers (public documents; whether they are published is unverified) and association member lists.

**Risks:**
Tiny market, light duty (annual statistics), POS vendors adding a "visitor count" field, and low willingness to pay. Selling in Swedish to rural operators probably needs a local founder.

**Kill condition:**
Fewer than about 300 permits nationally, or the Folkhälsomyndigheten statistics turn out to be a one-screen annual form.

**Score:** 3/10

**Sources:**
- https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2025/maj/beslut-om-foreskrifter-for-gardsforsaljning-av-alkohol/
- https://www.folkhalsomyndigheten.se/regler-och-tillsyn/tillsynsvagledning-och-stod/tillsynsvagledning-for-forsaljning-av-alkoholdrycker-och-alkoholdrycksliknande-preparat/gardsforsaljning-av-alkoholdrycker/vagledning-for-gardsforsaljning-av-alkoholdrycker/
- https://www.lansstyrelsen.se/sodermanland/om-oss/nyheter-och-press/nyheter---sodermanland/2025-06-02-nu-tillats-gardsforsaljning-av-alkohol.html
- https://www.sollentuna.se/jobb--foretagande/tillstand-regler-och-tillsyn/alkohol/gardsforsaljning-av-alkohol/
- https://karlskoga.se/naringsliv--arbete/naringslivsservice/tillstand-regler-och-tillsyn/gardsforsaljning-av-alkoholdrycker.html
- https://www.vinsider.se/artiklar/gardsforsaljning-av-alkohol-tillats-i-sverige-fran-1-juni-2025/

No other opportunity reached the bar.

## 3. Rejected

- **Scrap-metal cash ban / dealer register:** SOU 2014:72 proposed a cash ban and riksdag motions (e.g., 2021/22:2452) have asked for one, but the search found no enacted 2025–2027 change. With no trigger, it's an old police-permit regime with few dealers. https://www.regeringen.se/contentassets/7307f2c1c7b343be8fd0f075684d9fd7/handel-med-begagnade-varor-och-med-skrot---vissa-kontrollfragor-sou-201472/ ; https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svar-pa-skriftlig-fraga/fordrojt-inforande-av-kontantforbud-for-handel-med_h712104/
- **Second-hand goods ledger:** old registration and ledger duty, with no new trigger found.
- **All other seed groups** (household employers, beekeepers, livestock transport, kennels, tattoo studios, taxi, chimney sweeps, well drillers, fishermen, monument makers): rejected on background knowledge (unverified). Each either has a free state e-service (Jordbruksverket CDB, Skatteverket, HaV, SGU), is a one-off notification, is already digital by law (taxi redovisningscentraler), or is a hobby sector.

## 4. Method notes

- What worked: Swedish regulator-first queries returned useful official pages at once (Folkhälsomyndigheten, municipal permit pages, riksdagen.se, SOU reports). "<bransch> tillstånd ny lag 2026" is a good pattern.
- What failed: the search quota ran out on call 3 of 40, so well drillers, chimney sweeps, household employers and the animal groups could not be checked. The leads most worth checking on a rerun are the number of gårdsförsäljning permits granted, the content of the Folkhälsomyndigheten statistics form, and any 2026 scrap-metal law change.
- Structural point: Sweden's quiet industries are less offline than the seed list assumes, because agencies (Jordbruksverket, SGU, HaV, Skatteverket) usually provide the e-service themselves. Expect few strong offline-pass opportunities here.
