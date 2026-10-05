# Belize: Offline-Industries Pass

_Research date: 2026-10-05. Budget: 8 WebSearch calls, all used, all in English (Belize's official language). WebFetch was not used. Every fact comes from search-result extracts. Anything not confirmed in a search is marked **unverified** or **estimate**._

**Bottom line:** Belize is a market of about 0.4–0.45 million people (estimate). Its quiet industries are real and regulated, but they fall into two groups:

- **The obligation runs through a government counter**, with the paperwork done by the regulator, not the operator. Examples: BAHA cattle movement permits, Fisheries licences, DOE scrap-export permits.
- **The buyer pool is single digits**: four cane-farmer associations and about 31 bus owners.

No idea scored above 3/10. The two "strongest" ones below are documented so the global ranking can reject them with evidence. They are not build recommendations. This does not repeat the existing country report (`research/countries/belize.md`), which covered GST e-invoicing, registered agents, SSB payroll, hotel tax, seafood export and customs.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Sugar-cane growers via their associations (country-specific) | Fairtrade (FLOCERT) annual audits; registered-farmer delivery rules; child-labour remediation; Bonsucro at mill level | Audit failures make the news (probation 2021; suspension 2016 for cane delivered by a non-registered farmer); grower records are kept by the associations | About 6,000 independent growers; 4 associations; BSCFA delivers about 50% of cane (Amandala / Channel 5) | **Opportunity A (weak)** | The pain is real and recurring, but there are only 4 paying buyers and the grower data sits with the associations and BSI |
| Cattle producers (country-specific) | National Bovine Traceability: farm registry, ear tags, movement permit for every inter-community move (SI 77 of 2011) | Permits are issued in person at BAHA offices (Orange Walk, Belize City, Central Farm); BAHA runs the central database | 5,137 cattle producers, 5,174 establishments (BAHA) | **Opportunity B (weak)** | A large registered pool, but BAHA already holds the data and does the permit; producers are mostly small, Mennonite or rural, with low software spend |
| Scrap-metal dealers / exporters (country-specific) | Annual DOE licence (Scrap Metal Recyclers Regulations 2011) plus a separate export permit **per shipment**; authorised trucks only; copper/bronze export banned | Licence and permit applications go to the Department of the Environment; no software found | Unknown; probably tens (estimate) | Rejected | Few dealers, and the per-shipment permit is a DOE form, not a multi-system workflow |
| Pesticide dealers and certified applicators | PCB licences; Register of Certified Users; registers of authorised persons and applicators (Pesticides Control Act) | Statutory registers exist but no public list was found online | Unknown | Rejected | Cannot count buyers; the registers are held by the Board; sales records are paper (unverified) |
| Commercial fishers | Annual fisherfolk and vessel licence; catch logbooks in managed-access areas (Glover's Reef, Port Honduras) | Renewal is a form emailed to the department, payment at Atlantic Bank, and a paper logbook picked up in person | Unknown here (low thousands, estimate) | Rejected | Individual fishers won't pay; the logbook is a government/NGO data project (managed access) |
| Bus operators | Road Service Permits (7 types), bus-upgrade deadlines, inspections | Department of Transport calls operators to meetings; requirements are published as press releases | About 31 bus owners (2025 reports) | Rejected | Far too few buyers; the state is pushing a National Bus Company |
| Household employers (domestic workers) | SSB registration within 14 days (BZ$500 penalty); minimum wage BZ$5/h from 1 Jan 2025; contributions | Paper Notification of Employee form at SSB | Unknown | Rejected | No domestic-worker-specific regime found; households won't pay; SSB is the only filing point |
| Second-hand dealers / pawnbrokers | Police register (assumed) | Not searched | Unknown | Not screened | Out of budget; market too small to matter |
| Beekeepers / honey | BAHA apiary registration (unverified) | Not searched | Unknown | Not screened | Out of budget |
| Tattoo / barbers / small food producers | Health-department licences (unverified) | Not searched | Unknown | Not screened | Out of budget; municipal and tiny |
| Citrus growers (country-specific) | Citrus Growers Association grower deliveries (unverified) | Not searched | Unknown | Not screened | Same structure as cane: buyer is one association |

---

## 2. Opportunities

### Opportunity A: Grower compliance register for cane-farmer associations (Fairtrade audit readiness)

**Industry:**
Sugar cane (northern Belize: Orange Walk and Corozal).

**Buyer:**
CEO or compliance officer of a cane-farmer association: BSCFA plus the three smaller associations. A possible secondary buyer is BSI's sustainability team.

**Trigger / Why now:**
There is no new 2026 law. The pressure comes from recurring FLOCERT audits: BSCFA was put on probation in 2021, suspended in 2016 over a non-registered deliverer, and had child-labour findings. BSI itself was suspended by FLOCERT in January 2023. Fairtrade premium income depends on staying certified. Record cane prices (BZ$90.95/ton for the 2024 crop) raise the value at stake.

**Current workflow:**
1. The association keeps the grower register, farm and acreage data, and delivery permits (method is unverified, probably spreadsheets and paper).
2. Field officers visit farms for child-labour and environmental checks and fill in paper or Excel checklists (unverified).
3. Before each FLOCERT audit, staff compile evidence on registration, deliveries matched to registered farmers, remediation cases and premium spending.

**Pain:**
Documented audit non-compliances, with probation and suspension, that put premium income at risk. There were also public disputes over how Fairtrade money was managed ("Cañeros grapple with Fairtrade money troubles").

**Existing solutions:**
- Spreadsheets and paper (inferred).
- Generic smallholder-certification platforms used by cooperatives elsewhere, such as Farmforce, SourceTrace and Fairtrade's own tools (unverified for Belize).
- BSI's cane-delivery and payment system, which holds deliveries by farmer.

**Offline evidence:**
No software vendor is visible in results. The evidence of the problem comes from newspaper reports of audit outcomes, not from operators posting online.

**Offline channel:**
Direct meetings with the four association offices in Orange Walk. The Sugar Industry Control Board and the Fairtrade regional network (CLAC) are possible introducers (unverified).

**Market count:**
4 associations representing about 6,000 growers (Channel 5 / Amandala).

**The gap:**
A tool that links the grower register, BSI deliveries, field-visit checklists and the remediation log into one FLOCERT evidence pack. Whether a gap exists is unverified: an association may already use a donor-funded system.

**Possible product:**
A grower register with mobile field-visit forms (offline-capable) and an audit-pack export organised by Fairtrade criteria.

**MVP:**
Import the grower list, add a child-labour and farm-visit checklist on the phone, and produce a remediation case log plus an audit export.

**Pricing hypothesis:**
USD 300–800/month per association, or a donor/premium-funded one-off of USD 10–20k. Realistically this is a done-for-you service plus software.

**How to find first customers:**
The four associations are publicly known. BSCFA is the anchor.

**Risks:**
- Only 4 buyers.
- Politically charged associations.
- Fairtrade or a donor may supply a free tool.
- A non-local solo founder would struggle: this needs in-person presence in Orange Walk and Spanish/Kriol relationships.

**Kill condition:**
BSCFA already uses a certification platform, or premium spending rules don't allow software.

**Score:** 3/10. Pain 6, frequency 5, mandatory 6 (for certification), fragmentation 3, competition 5, gap 4, buyer accessibility 7, willingness to pay 4, MVP 7, distribution 4 (offline channel exists but only 4 doors). The fatal factor is the buyer count. It is only worth doing as a reference customer for a regional smallholder-cooperative product (for example Guatemalan or Honduran sugar and coffee cooperatives).

**Sources:**
- https://amandala.com.bz/news/?p=282511
- https://amandala.com.bz/news/bsi-suspended-by-flocert
- https://amandala.com.bz/news/bscfa-employs-remedial-measures-tackle-child-labor-violations
- https://amandala.com.bz/news/?p=286140
- https://www.thereporter.bz/post/record-cane-payment-announced-for-belize-farmers
- https://archive.channel5belize.com/?p=150554

---

### Opportunity B: Herd book and movement-permit prep for cattle producers (via BLPA)

**Industry:**
Beef cattle.

**Buyer:**
Mid-size cattle producers and cattle traders (live exports to Guatemala and Mexico are a known trade; the volume is unverified). The Belize Livestock Producers Association (BLPA) is the potential channel or buyer.

**Trigger / Why now:**
The trigger is not new. The National Bovine Traceability System under SI 77 of 2011 is OIRSA-aligned and requires ear tags and a movement permit for every move between communities and into or out of tested areas, to keep TB and brucellosis-free zones.

**Current workflow:**
1. The producer tags animals under the BAHA registry.
2. For each move or sale, the producer goes in person to a BAHA office (Orange Walk, Belize City or Central Farm) to get a movement permit.
3. The producer keeps their own herd records, mostly on paper (unverified).

**Pain:**
Travel to the counter for each movement. Pain is moderate. No complaints were found in search.

**Existing solutions:**
- BAHA's central information bank (government).
- Datamars and other tag suppliers, which may include herd software (unverified).
- Paper notebooks.

**Offline evidence:**
Permits are issued at physical offices, and BAHA and BLPA material lives in ministry PDF presentations.

**Offline channel:**
BLPA meetings and its Belize Ag Report readership; ear-tag distributors; BAHA district offices.

**Market count:**
5,137 cattle producers and 5,174 establishments (BAHA Belize Livestock Registry).

**The gap:**
A producer-side herd book that pre-fills permit requests. This only has value if BAHA accepts electronic requests, and no evidence was found that it does.

**Possible product:**
A cheap mobile herd book (tag number, weight, sales) that prints or sends permit-request data.

**MVP:**
An offline phone app for tag inventory and sales, with a PDF summary.

**Pricing hypothesis:**
USD 5–15/month. Most producers would pay nothing, so willingness to pay is very low.

**How to find first customers:**
BLPA membership; Mennonite communities in Spanish Lookout and Blue Creek, who are the largest commercial producers (unverified).

**Risks:**
- The government owns the system.
- A tiny ARPU.
- A non-local founder could not sell this.

**Kill condition:**
BAHA has no electronic permit intake, so there is nothing to automate. This is likely.

**Score:** 2/10.

**Sources:**
- https://baha.org.bz/?p=407
- https://www.sanpedrosun.com/community-and-society/2013/07/29/cattle-movement-control/
- https://www.agriculture.gov.bz/wp-content/uploads/2022/05/Livestock-Presentation-.pdf
- https://www.agriculture.gov.bz/wp-content/uploads/2022/05/BLPA-Presentation-.pdf

---

## 3. Rejected

- **Scrap-metal export compliance:** the obligation is real: an annual DOE licence plus a per-shipment export permit, a copper/bronze ban with a fine of at least US$5,113, and authorised trucks only. But the dealer count is probably tens, and the workflow is one form to one authority. Source: https://archive.channel5belize.com/?p=55873
- **Pesticide dealer/applicator registers:** registers exist under the Pesticides Control Act, but no public list was found, so the market can't be counted, and the Board holds the registers. Sources: https://belizejudiciary.org/download/Laws-of-Belize-Update-2011/VOLUME%2010/Cap%20216%20Pesticides%20Control%20Act.pdf, https://leap.unep.org/en/countries/bz/national-legislation/restricted-pesticides-certified-user-regulations-1996
- **Fisher licensing and catch logbooks:** the email form, Atlantic Bank payment and paper logbooks are handled by the Fisheries Department. Individual fishers won't pay. Sources: https://www.sanpedrosun.com/community-and-society/2021/12/23/commercial-fisher-folk-license-renewal-2022/
- **Bus operator permits:** about 31 bus owners, with the state moving to a National Bus Company. Source: https://www.pressoffice.gov.bz/deadline-for-the-upgrading-of-buses-and-revised-requirements-for-road-service-permit-application/
- **Household employers:** SSB registration has a BZ$500 late penalty, but there is no domestic-worker regime and households won't pay. Sources: https://www.nationalassembly.gov.bz/wp-content/uploads/2023/11/SI-No.-24-of-2023-Social-Security-Registration-of-Employers-and-Employed-Persons-Amendment-Regulations-2023.pdf, https://www.bizlatinhub.com/belize-labor-laws-a-comprehensive-overview/

## 4. Method notes

- **What worked:** local news archives (Amandala, Channel 5, San Pedro Sun, the government press office) were the best way to find regulator activity, because Belizean regulators publish through press releases. Statutes are best found via FAOLEX/LEAP and belizejudiciary.org. BAHA's site gave the one hard register count (cattle producers).
- **What didn't work:** searching for public licence lists (pesticides, scrap, fishers) returned only the legal framework, never a list of names. The counts would need a phone call or a request to the authority.
- **Takeaway:** for a microstate, "regulator first" mostly shows that the regulator *is* the counter. The workflow is already centralised and there is no multi-authority fan-out for software to sit on.

Research model: Opus
