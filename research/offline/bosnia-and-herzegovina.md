# Bosnia and Herzegovina: quiet-industries pass

Researched 2026-10-05, using 20 WebSearch calls (mostly Bosnian, with a few in Croatian and Serbian). WebFetch was not used. Everything comes from search-result summaries, so check the figures against the primary documents before any interviews. This is a **short report**. BiH is small (about 3.2M people, estimate). Regulation is split between the State, the Federation of BiH (FBiH), Republika Srpska (RS), Brčko District and the 10 FBiH cantons. Searches for regulator registers returned rulebooks, but almost never operator counts.

The country report already covers these, and they are not repeated here: the EES 90/180 driver planner, EUDR for wood exporters, and FBiH fiscalization.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Employers of foreign workers (construction, manufacturing, hotels/restaurants) and the agencies/lawyers acting for them | Annual quota; work permit from the cantonal employment service (FBiH) or the RS service; separate residence permit from the State Service for Foreigners' Affairs (SPS); extension request 60–30 days before expiry; **new since May 2026:** notify the canton and SPS within 15 days if a foreigner never starts or leaves | Filed on paper at cantonal counters. The process is sold through law firms (unija.com), recruiters and Paragraf seminars. TI BiH (July 2026) calls for licensing of unlicensed intermediaries. No permit-tracking software found | 5,798 permits issued in 2024 (2,775 in 2021); 2025 quota 7,229 (4,490 for FBiH); RS quota for 2026 is 2,000 (TI BiH, Paragraf). Employers: estimate 1,000–2,500 | **Candidate** | New deadlines with penalties, two authorities per worker and an entity split. But the market is small |
| Vet stations (authorized veterinary organizations) doing animal ID | Ear-tag cattle within 20 days of birth; send the form to the State database (DBP/UVZ) within 7 days; movement documents and passports; farm register | Rulebook describes forms "submitted to the Institute". Whether vets key in data directly is **unverified** | Number of vet stations not found (estimate: low hundreds) | **Weak candidate** | Mandatory and frequent, but the State DBP is the system of record. There is no evidence of a gap |
| Beekeepers (FBiH) | Mandatory entry in the Register of Beekeepers and Apiaries (tied to the farm register RPG); application to the municipality on a prescribed form | Paper form at the municipality (Pravilnik 31/18) | Not found | Reject | Registration and subsidy claims are annual. There's no money and no recurring workflow |
| Farmers claiming subsidies (FBiH, 190M KM programme 2026) | Must be in the RPG; claims via municipality | Municipal counters, agricultural advisers | RPG count not found | Reject | Annual. Advisers and municipal staff do the work for free |
| Scrap / secondary raw materials buyers | Ministry decision that the premises meet technical-technological conditions; environmental permit; police checks; seller ID recommended | Paper applications to the cantonal ministry; police "visit and control" | Not found | Reject | No per-transaction police register like Serbia's or the UK's was found. The obligation is a one-off permit |
| Gold buyers / jewellers | Hallmarking and registration of marks (FBiH Law on Precious Metals); customers' ID taken by habit | Large illegal and grey market (RFE/RL) | Not found | Reject | No binding purchase-register rule found. Serbia's 2024–25 buyer rules have no BiH equivalent found |
| Private accommodation / short-term rentals | Report foreign guests to the police within 12 h; guest book; tourist tax (cantonal) | Searches returned only Croatian eVisitor material and Airbnb listings | Not found | Not assessed | No BiH source surfaced. Check this in a later pass (see method notes) |
| Taxi operators (Sarajevo Canton) | Cantonal taxi designation (1 per 700 residents), roof sign, meter, fiscalization | Cantonal ministry decisions, stickers | About 600 designations in Sarajevo (estimate from the 1:700 ratio) | Reject | Fiscalization is already covered by POS vendors. The licence is one-off |
| Hunting associations | Harvest records and hunting-economic plans for the hunting ground; cantonal fees | Cantonal calls for funding in .doc files | Not found | Reject | Volunteer associations with no budget |
| Halal-certified food producers | Certification by the single Agency for Halal Quality Certification (halal.ba) | Agency procedures in PDF | Not found | Reject | A monopoly certifier with an annual audit, so there's no fragmented workflow |
| Household employers (domestic workers, carers) | The FBiH Labour Law lets individuals employ household workers; registration deadline cut from 15 to 5 days | Paper/tax filing via the Tax Administration (PU FBiH) | Not found; mostly informal (estimate) | Reject | Informal market and no trigger. Accountants handle the rare formal cases |
| Waste collectors / transporters (FBiH) | Amended Waste Law (2024); Federal Waste Management Plan expected 2026 | No electronic waste-tracking system was found in the results | Not found | Reject for now | No electronic tracking or manifest mandate found yet. Re-check once the bylaws arrive |

Country-specific groups added from registers and regulations: **employers of foreign workers**, **halal-certified producers** and **FBiH subsidy claimants / RPG**.

---

## 2. Opportunities

### Opportunity: Foreign-worker permit lifecycle tracker for BiH employers and their agents

**Industry:**
Employers of foreign workers, mostly in construction (22.5% of permits), manufacturing, other services and hotels/restaurants. They act through HR staff, recruiters or law firms.

**Buyer:**
- The HR or admin person at a construction company, factory or hotel group with 10–200 foreign workers (mostly from Nepal, Bangladesh, Türkiye, Serbia and others).
- Secondary buyers are the recruiters and law firms that file permits for many employers. They are the more realistic first customer.

**Trigger / Why now:**
- The amendments to the FBiH Law on Employment of Foreigners were published in Official Gazette FBiH 36/26 on 15 May 2026 and took effect 8 days later. They add:
  - a **15-day duty to notify** both the cantonal employment service and the State Service for Foreigners' Affairs when a foreigner does not start or stops working;
  - a fixed extension window: the request goes in **no earlier than 60 and no later than 30 days** before the permit expires;
  - a 30-day decision deadline;
  - an annual list of shortage occupations, published by 30 October, which removes the labour-market test for listed jobs.
- Volumes doubled from 2021 to 2024 (2,775 → 5,798 permits).
- TI BiH's July 2026 Policy Lab asks for licensing and supervision of intermediaries.

**Current workflow:**
1. The employer applies for a work permit within the quota at the cantonal employment service (FBiH) or the RS employment service, on paper with supporting documents.
2. A separate residence permit (stay on the basis of work) goes through the State SPS or the consulate (protocol simplified in 2025).
3. Two expiry dates per worker are tracked by hand: work permit and residence permit.
4. Extensions must be filed inside the 60–30-day window. Each departure or no-show must be reported to two authorities within 15 days.
5. If an employer has sites in both entities, or the worker changes employer, a new permit is needed.

**Pain:**
- A missed extension window means the worker becomes illegal or must leave.
- A missed 15-day notice is a new breach. **The size of the fines was not found (unverified).**
- The work is spread across two levels of authority, the entities and 10 cantons.
- Intermediaries are numerous and partly unlicensed (TI BiH).

**Existing solutions:**
- Law firms and consultants (e.g., Unija, which offers "zapošljavanje stranaca u FBiH").
- Recruitment agencies, including Croatian/regional ones blogging about 2026 changes.
- Paragraf.ba seminars and webinars for HR.
- Generic HR suites (Factorial etc.) with document-expiry fields.
- Excel.

No BiH- or regional-specific permit tracker was found in search.

**Offline evidence:**
- Filing is at cantonal counters and by consulate protocol.
- The know-how is sold via paid seminars (Paragraf) and law firms.
- No software listings came up for "praćenje radnih dozvola stranih radnika".

**Offline channel:**
- Paragraf.ba HR seminar attendees, as a sponsor or exhibitor.
- The Association of Employers of FBiH (UPFBiH), which lobbied for these changes.
- Recruitment agencies and law firms named in search, as resellers.
- Construction-sector associations in the chambers (FBiH/RS chambers of commerce).

**Market count:**
- 5,798 work permits in 2024; quota of 7,229 for 2025, of which 4,490 in FBiH (TI BiH Policy Lab, Paragraf); RS quota for 2026 is 2,000.
- No count of employers was found. Estimate: 1,000–2,500 employers and a few dozen intermediaries.

**The gap:**
- Each worker has two permits from two authorities, with a law-specific extension window and a 15-day notice duty to two recipients.
- No one sells a tool that holds per-worker dates, generates the canton-specific and SPS forms, and reminds the employer inside the legal windows.
- On the FBiH side, cantonal practice differs, which is where the fragmentation lives.

**Possible product:**
A per-worker register covering passport, work permit, residence permit, employer, site and canton. It does three things:
- computes the legal windows (the 60–30-day extension, the 15-day notice);
- pre-fills the cantonal and SPS forms and the notice letters;
- sends alerts by email or Viber.

A multi-client view serves agencies.

**MVP:**
- A spreadsheet import of workers.
- A deadline engine for FBiH and RS rules.
- Pre-filled PDF notice letters for "never started / terminated" to the canton and SPS.
- An extension checklist per canton for the top 3 cantons by permit volume (Sarajevo, Tuzla, Herzegovina-Neretva: assumption).

**Pricing hypothesis:**
- Employer: €2–4 per worker per month (a company with 50 workers pays about €150/month).
- Agency: €50–150/month for multiple clients.

Buyers would probably pay more for a **done-for-you filing service** (per-permit fee) than for software. That pushes the model towards selling to agencies and law firms that already sell the service.

**How to find first customers:**
- Agencies and law firms advertising foreign-worker services.
- UPFBiH members in construction.
- Paragraf seminar attendees.
- Companies named in press as large importers of foreign labour.

**Risks:**
- The market is tiny: only a few thousand permits a year in total.
- Agencies may keep doing this in Excel.
- The State SPS or a canton may launch an e-portal.
- Fines are unknown.
- RS and FBiH rules differ.
- **Needs a local partner.** The forms and counter practice are in local languages and differ by canton. A non-local solo founder could build it, but would need a local agency or law firm as co-seller.

**Kill condition:**
Interviews with 5 agencies or law firms show they track 2 dates per worker in Excel without difficulty and see no value in form pre-fill. Or penalties for the 15-day notice are trivial or unenforced.

**Score:** 5/10. Real 2026 trigger and fragmentation, but the market is very small (a regional Western Balkans version, adding Croatia, Serbia and Montenegro, would be the real business; Croatia issued 170k+ permits per year, but its tooling was not checked).

**Sources:**
- https://feb.ba/izmjene-i-dopune-zakona-o-zaposljavanju-stranaca/
- https://upfbih.ba/dom-naroda-pfbih-usvojio-izmjene-i-dopune-zakona-o-zaposljavanju-stranaca
- https://www.klix.ba/biznis/privreda/usvojen-novi-zakon-o-zaposljavanju-stranaca-u-federaciji-bih-evo-sta-donosi/260421128
- https://ti-bih.org/wp-content/uploads/2026/07/Policy-Lab-Prakse-zaposljavanja-stranih-radnika.pdf
- https://www.paragraf.ba/dnevne-vijesti/29122025/29122025-vijest3.html
- https://www.paragraf.ba/dnevne-vijesti/12082025/12082025-vijest3.html
- https://www.paragraf.ba/savjetovanje-strane/vebinar-za-ljudske-resurse-radni-odnoai-i-zaposljavanje-stranaca-fbih.html
- https://unija.com/bs/zaposljavanje-stranaca-u-fbih/ (substitute: law firm)
- https://fbihvlada.gov.ba/uploads/documents/prijedlog-zakona-o-zaposljavanju-stranaca-b_1764846594.pdf

---

### Opportunity: Animal-ID and movement paperwork assistant for veterinary stations (weak)

**Industry:**
Authorized veterinary organizations (vet stations) that ear-tag and register livestock.

**Buyer:**
The head of a vet station or ambulance (usually a small company or a municipal enterprise) with 2–15 staff.

**Trigger / Why now:**
No new 2026 trigger was found. The obligation is old: the BiH Rulebook on Marking and Control of Animal Movement, with the State database (DBP) run by the State Veterinary Office (UVZ). EU accession alignment may tighten it (unverified).

**Current workflow:**
1. The owner asks the vet within 14 days of birth or import.
2. The vet tags the animal within 20 days and updates the farm register.
3. The form goes to the Institute or DBP within 7 days.
4. The vet issues movement documents and passports.

**Pain:**
Not evidenced. No complaints, fines or backlog reports were found.

**Existing solutions:**
- The State DBP itself (the system of record; vets probably enter data directly, unverified).
- The vet station's own practice software, if any (not found).
- Paper farm registers.

**Offline evidence:**
The rulebook describes paper forms and ear-tag supply via authorized organizations. Vet stations have no online presence in search.

**Offline channel:**
- Entity and cantonal veterinary chambers.
- The ear-tag suppliers to authorized organizations.
- UVZ training sessions.

**Market count:**
Not found. Estimate: low hundreds of vet stations across BiH.

**The gap:**
Unclear. If the DBP accepts direct entry, the only gap is the station's own billing and visit log tied to the tags.

**Possible product:**
A mobile tagging log that captures the tag number, farm ID and date in the field. It produces the DBP submission batch and bills the farmer.

**MVP:**
- An offline mobile form.
- A CSV/PDF batch in the DBP format.
- A farmer invoice.

**Pricing hypothesis:**
€20–40 per station per month (estimate). Buyers would likely pay only if it also does invoicing.

**How to find first customers:**
- The list of authorized veterinary organizations (UVZ or entity ministries publish these; unverified).
- Veterinary chambers.

**Risks:**
- The State controls the system and could ban or ignore a third-party batch.
- Small budgets.
- Needs a local founder or partner.

**Kill condition:**
The DBP already offers mobile or web entry that vets use without complaint.

**Score:** 3/10.

**Sources:**
- https://www.paragraf.ba/propisi/bih/pravilnik-o-obiljezavanju-i-kontroli-kretanja-zivotinja-u-bosni-i-hercegovini.html
- https://faolex.fao.org/docs/pdf/bih148739.pdf
- https://fmpvs.gov.ba/wp-content/uploads/2017/Veterinarstvo/Veterinarstvo-pravilnici/4vet-prav13-10.pdf

---

## 3. Rejected

- **Scrap / secondary raw materials:** BiH has a permit for premises but no per-transaction seller register reported to police was found. Police controls are generic. Nothing recurring to automate. (Sources: parlament.ba answer by S. Magazinović; sbk-ksb.gov.ba form; mkipgo.ks.gov.ba draft environmental permit.)
- **Gold buyers:** a large illegal market. There is no binding purchase-register rule like Serbia's 2024–25 rules for buyers of precious metals.
- **Beekeepers and subsidy claimants:** annual and free (municipal clerks and advisers do the work). The FBiH 2026 support programme is 190M KM, but per-farm claims are annual.
- **Taxi:** the licence is one-off; fiscalization is covered by POS vendors (see the country report).
- **Halal producers:** a single national certifier with an annual cycle, so there's no fragmentation.
- **Household employers:** largely informal and no trigger. Rare formal cases go to accountants.
- **Hunting associations:** volunteer, unfunded, annual reporting.
- **Waste collectors:** no electronic manifest mandate yet in FBiH. Re-check after the bylaws to the Federal Waste Plan (2026) and the amended law. **RS adopted a new Waste Management Law in 2025 (Sl. glasnik RS 109/2025)**, which is worth a targeted look in a later pass.

## 4. Method notes

- **Worked:** Bosnian queries naming the specific law ("Zakon o zapošljavanju stranaca", "Pravilnik o obilježavanju") found official gazettes, upfbih.ba, feb.ba and paragraf.ba. Paragraf.ba daily news is the best single source for new employer obligations. TI BiH policy papers give the counts.
- **Didn't work:** queries for operator counts (registers are not published online), queries on private accommodation and guest registration (results were swamped by Croatian eVisitor material and Airbnb listings), and enforcement or fine queries (almost nothing for BiH).
- Many results came from Croatia or Serbia because the languages overlap. Adding "FBiH", "Kanton" or "Republika Srpska" helped.

Research model: Opus
