# Croatia: Indie Software Opportunity Research

**Status: incomplete, search budget cut off.** Only 2 WebSearch calls were attempted. The first was refused ("usage limit") and the second returned results. As the agent instructions require, research stopped once a search was refused. This report covers the one lead I could verify. All other entries come from background knowledge, are marked **unverified**, and need a follow-up pass before anyone relies on them.

Accessibility: Croatia is an EU and eurozone member and is not under sanctions. A foreign solo founder can sell SaaS there with no special licensing (general knowledge). Two practical barriers are expected: support has to be in Croatian, and integration with state systems needs a qualified certificate or a NIAS/FINA credential (unverified).

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Waste collectors / transporters / waste-producing SMEs | e-ONTO register, e-ONTO-P transport records, ePL electronic accompanying waste notes | **Candidate (needs validation)** | A mandatory, per-shipment state register, with new implementing guidance published April 2026 (NN 44/2026). Competitors not yet checked. |
| All VAT-registered SMEs / accountants | Fiskalizacija 2.0: B2B e-invoicing and eIzvještavanje (e-reporting) from 2026 | Too competitive (unverified) | Big horizontal rush: FINA, e-invoice service providers and every accounting/ERP vendor are shipping this. |
| Tourism: private accommodation hosts | eVisitor guest registration, tourist tax | Too competitive (unverified) | Channel managers and PMS tools already integrate eVisitor. Hosts are consumer-like and price-sensitive. |
| Wood / furniture exporters | EUDR due-diligence statements | Poor timing / low priority (unverified) | Application has been postponed repeatedly, and large ERP and traceability vendors plus consultants already serve it. |
| Essential/important entities (NIS2) | Cybersecurity law compliance, incident reporting | Rejected (unverified) | Consultant-led, one-time gap assessments, and crowded with generic GRC tools. |

## Opportunities

### Opportunity: e-ONTO / ePL "one pickup → all waste records" for small waste carriers and producers

**Industry:**
Waste management: waste collection and transport companies, plus SMEs that produce waste (workshops, auto repair, small manufacturers, construction subcontractors).

**Buyer:**
The owner or office administrator of a small licensed waste collector or transporter. A secondary buyer is the environmental officer or bookkeeper at an SME that produces waste.

**Trigger / Why now:**
On 24 April 2026 the ministry published a new *Naputak o informacijskom sustavu gospodarenja otpadom* (Instruction on the waste management information system, NN 44/2026). It sets out how e-ONTO, e-ONTO-P and electronic accompanying notes (ePL) are to be used. Under Art. 25 of the Waste Management Act, persons designated by the Ministry, the inspectorates and the Customs authority must use e-ONTO.

**Current workflow (inferred from the portal description, not yet confirmed with users):**
1. The driver or dispatcher records the pickup on paper, in a spreadsheet or in the company's own ERP or dispatch tool.
2. The office re-keys every shipment into e-ONTO: the transfer between two persons/locations, waste type and code, quantity, and the ePL accompanying note.
3. The office keeps per-site quantity records in e-ONTO and reconciles them against weighbridge tickets and invoices.
4. Cross-border shipments, imports and exports need separate notifications. HAOP/ISGO publishes annual notices for these, e.g. the 2025 cross-border notice.

**Pain:**
The data is entered per shipment into a state web application. Only authorised, authenticated persons may enter it, so it is hard to outsource. Errors carry inspection exposure. *The hours spent and the complaint level are not verified.*

**Existing solutions:**
- The free e-ONTO web application itself (the state tool).
- Unverified: Croatian waste-sector ERP/dispatch vendors and accounting add-ons, plus in-house systems at the large concession holders. **Competitor diligence was NOT completed.**

**The gap (hypothesis):**
Dispatch or weighbridge data has to be moved into e-ONTO/ePL without manual re-entry, with exceptions handled (wrong waste codes, quantity mismatches, partner not registered). Whether e-ONTO offers an API or bulk import for third-party software is **unknown**. That decides the whole idea.

**Possible product:**
A light dispatch and pickup log, mobile-friendly, that generates compliant e-ONTO/ePL entries for each pickup. It would also run a reconciliation dashboard covering quantities per site, outstanding notes and mismatches.

**MVP:**
Import pickups from CSV or a mobile form, validate them against the waste catalogue and partner data, then submit to e-ONTO through an API or browser automation, or produce a pre-filled package. Add a monthly reconciliation report.

**Pricing hypothesis:**
€49–149/month per carrier, scaled by shipments per month (estimate).

**How to find first customers:**
The public register of waste management permits and registered collectors/transporters held by the ministry and HAOP/ISGO (unverified that it can be downloaded as a list). Other channels are the waste-sector association within HGK and auto-repair and crafts chambers (HOK) for waste producers.

**Risks:**
- There may be no API, and browser automation could be fragile or disallowed.
- Existing local ERP vendors may already cover this.
- The market is small (Croatia has ~3.8M people). The number of carriers is unknown, perhaps in the low hundreds (estimate).

**Kill condition:**
Any one of these kills it: e-ONTO offers no machine interface and its terms forbid automation, an established Croatian waste ERP already submits to e-ONTO, or fewer than ~300 reachable carriers exist.

**Score:** 4/10. The provisional score reflects the strong mandatory trigger, unknown competition and a small market.

**Sources:**
- https://isgo-portal.haop.hr/en/aplikacije/elektronicki-ocevidnik-o-nastanku-i-tijeku-otpada-e
- https://narodne-novine.nn.hr/clanci/sluzbeni/2026_04_44_518.html
- https://www.zakon.hr/c/podzakonski-propis/956871/nn-44-2026-%2824.4.2026.%29%2C-naputak-o-informacijskom-sustavu-gospodarenja-otpadom
- https://isgo-portal.haop.hr/sites/default/files/dokumenti/2025-12/OTP_Obavijest_prekogranicni_za_2025.pdf

No other opportunity reached the evidence bar in this pass.

## Rejected after competitor research

None could be properly rejected, because competitor searches could not be run. The items below are rejected provisionally, on background knowledge (unverified):
- **Fiskalizacija 2.0 e-invoice compliance for SMEs.** Croatian accounting/ERP vendors and e-invoice intermediaries (FINA's service and private providers) cover it, so it is a crowded horizontal race.
- **NIS2 (Zakon o kibernetičkoj sigurnosti) compliance tooling.** It is consultant-driven and mostly one-off, and generic GRC platforms already exist.

## Attractive problem, poor distribution
- **EUDR due diligence for small Croatian wood exporters (unverified).** The pain is real but timing is uncertain because of repeated postponements. Buyers are scattered, and big traceability platforms target the EU-wide market.

## Too competitive
- **eVisitor guest registration for private accommodation hosts (unverified).** Croatian PMS/channel-manager products already integrate eVisitor.
- **Fiskalizacija 2.0 B2B e-invoicing / eIzvještavanje (unverified).** Every accounting package is shipping it.

## Follow-up needed (next pass, ~8 searches)
1. Does e-ONTO/ePL have an API or XML import, and do any vendors integrate it?
2. Find Croatian waste-management software vendors and get a count of registered collectors and transporters.
3. Fiskalizacija 2.0 exceptions: whether non-VAT taxpayers, payment-status e-reporting and rejections leave a niche gap.
4. Other sectors not screened: veterinary (VIS / animal medicines), pharmacies (HALMED reporting), funeral services, and construction (e-Građevinski dnevnik).
