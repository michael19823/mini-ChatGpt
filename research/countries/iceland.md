# Iceland: country research track

**Research date:** 2026-10-05. **Search budget used:** 10 (small market). **Market access:** fully accessible. Iceland is an EEA member with no sanctions, normal card and SEPA payments, and English is widely used in business. Most government workflows, though, run through Icelandic-language portals (Ísland.is, Skatturinn, Fiskistofa, HMS).

**Bottom line:** Iceland has about 400,000 inhabitants. Its state digital infrastructure is unusually strong (Ísland.is, government web services) and the state usually builds the free tool itself. Every candidate I checked was either already covered by a free government channel, served by an incumbent local vendor (often Origo/Advania-type IT houses), too infrequent, or limited to a handful of enterprise buyers. **I found no strong standalone opportunity.** The two weak candidates below would make sense only as an Iceland module of a Nordic product, not as a standalone business.

---

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| Vehicle fleets / car rental / tour operators / hauliers | New per-kilometre road fee (kílómetragjald) on all vehicles from 1 Jan 2026: odometer registration, payment, passing the cost on to customers | Weak candidate | A real new mandatory, recurring task. However, the state offers free bulk registration on Ísland.is plus a Samgöngustofa web service, and Caren (Origo) dominates rental software |
| All employers with 50+ staff | New gender pay-gap reporting to Jafnréttisstofa (replaces equal-pay certification from 1 Sep 2026) | Weak candidate | New law, but reporting is only every 3 years. Incumbent analytics tools and HR consultants exist |
| Fisheries / seafood exporters | EU IUU catch and processing certificates (new EU CATCH rules from 10 Jan 2026) | Rejected | Fiskistofa's own system sends certificates digitally to EU CATCH. Exporters don't touch TRACES/CATCH |
| Fisheries (vessels) | Electronic catch logbook and landing data (Reg. 298/2020) | Rejected | Mandated electronic channel run by Fiskistofa. No 2025–26 rule change found. The market is a small, consolidated fleet |
| Aquaculture (salmon farming) | Sea-lice, escape and disease reporting under the new aquaculture law | Rejected | The bill stalled in 2026 and is off the agenda. There are only a handful of large operators, so it is an enterprise sale |
| Short-term rental / homestay | Heimagisting registration, 90-day / ISK 2M cap, annual usage report to Sýslumenn | Rejected | Mostly individuals and an annual workflow. The 2024 law already pushed businesses out of residential STR. Global STR tools (e.g. Hostaway) publish compliance guides |
| Construction (designers, masters, supervisors) | Mandatory quality-management system (gæðastjórnunarkerfi) and inspection records in HMS's electronic building portal | Watch / rejected for now | The state builds the portal itself (HMS). A building-regulation overhaul was proposed in June 2026, so the rules may change. I didn't verify the QMS template vendors |

---

## Opportunities (weak; none recommended for building)

### Opportunity: Kilometre-fee compliance and rebilling for SME fleets

**Industry:**
Road transport: small and mid-size fleets (tour operators, contractors and tradespeople, small car-rental and camper-rental firms, trailer owners)

**Buyer:**
Owner or office manager of a company with roughly 5–100 registered vehicles that does not run Caren or a telematics platform

**Trigger / Why now:**
The Act on kílómetragjald was passed in late 2025 and has been in force since 1 Jan 2026. Every vehicle, whatever its fuel, pays a per-km fee (about ISK 6.95/km for passenger cars, more for heavier classes). Owners must register odometer readings (at least yearly for vehicles up to 10 t, more often in practice). Monthly payments started on 1 Feb 2026. A non-registration fee of ISK 20,000 per vehicle has applied since 1 Apr 2026.

**Current workflow:**
1. Someone collects odometer readings from drivers, inspection stations or apps (N1 app, inspection at a certified station).
2. They type the readings into the Ísland.is "magnskráning" table, one field per vehicle, or into "Mínar síður".
3. Skatturinn sends monthly charges per vehicle. The office then reconciles them against the vehicles and jobs.
4. Rental and tour firms pass the fee on to customers per km. Reykjavík Rent A Car, for example, itemises a "road tax" per km plus a service fee. This needs start and end odometer readings per rental and a manual invoice line.

**Pain:**
The obligation is new and mandatory, with per-vehicle fines for missed registration. Public coverage on 12 Jan 2026 reported that only a share of vehicles had registered readings at that point. Mbl, Vísir, Brimborg and others published explainer articles, which signals confusion. I found no direct complaint threads (unverified pain intensity).

**Existing solutions:**
- Ísland.is bulk registration (magnskráning) table: free
- Samgöngustofa web service for "fagaðilar" (direct integration)
- Caren car-rental platform (Origo): the dominant Icelandic rental system (I did not verify whether it already supports the km fee, but it is likely)
- Telematics: RentalMatics (Europcar Iceland), N1 app readings, inspection stations
- Accounting systems (DK, Payday, Reglu, unverified whether they have km-fee features)

**The gap:**
A free government bulk-entry screen already exists. The only remaining gap is (a) collecting odometer readings automatically from drivers or vehicle APIs and posting them to the Samgöngustofa service, and (b) allocating the monthly fee to jobs, tours or rentals and rebilling it. Both are thin features that telematics and rental platforms can add quickly.

**Possible product:**
Drivers submit an odometer photo by SMS link. OCR reads it, the reading is pushed to the Samgöngustofa web service, and the monthly fee per vehicle is allocated to jobs and customers and exported to accounting.

**MVP:**
A driver photo-upload link, a register of the company's vehicles, CSV/web-service submission and a monthly allocation report.

**Pricing hypothesis:**
ISK 500–1,000 per vehicle per month (about €3.5–7). A 30-vehicle firm would pay about €100–200/month. That is an estimate, and willingness to pay is doubtful given the free state tool.

**How to find first customers:**
Samtök ferðaþjónustunnar (SAF, the tourism association) member list, the Ferðamálastofa licensed tour-operator register, Samtök iðnaðarins (contractors), and fleet buyers at Brimborg/Hekla.

**Risks:**
Free government tool. Caren and telematics vendors can add the feature. The Icelandic-language portal and web-service access terms are unverified. The market is tiny.

**Kill condition:**
Caren or the main telematics providers already push readings and allocate the fee. Or interviews show that firms simply type readings in once a year.

**Score:** 3/10

**Sources:**
- https://island.is/kilometragjald-a-okutaeki
- https://island.is/kilometragjald/magnskraning
- https://www.skatturinn.is/einstaklingar/skattar-og-gjold/kilometragjald/
- https://www.skatturinn.is/um-rsk/frettir-og-tilkynningar/vanskraningargjald-vegna-kilometragjalds
- https://www.skatturinn.is/atvinnurekstur/skattar-og-gjold/kilometragjald-a-vorubifreidar/
- https://www.reglugerd.is/reglugerdir/eftir-raduneytum/fjarmala--og-efnahagsraduneyti/nr/15379
- https://www.althingi.is/altext/157/s/0612.html
- https://www.stjornarradid.is/efst-a-baugi/frettir/stok-frett/2026/01/12/85-okutaekja-thegar-komin-med-skraningu-a-kilometrastodu/
- https://reykjavikrentacar.is/visit-iceland/iceland-per-kilometer-road-tax
- https://www.origo.is/english/solutions/caren/
- https://rentalmatics.com/rentalmatics-and-europcar-iceland-renew-partnership/

---

### Opportunity: Triennial gender pay-gap report pack (post-certification)

**Industry:**
All employers with 50+ staff (HR and payroll)

**Buyer:**
HR manager or CFO at a company or public body with 50–250 staff. Payroll bureaus serving them would be a second buyer.

**Trigger / Why now:**
Alþingi passed the change on 1 Jun 2026, effective 1 Sep 2026. It abolishes mandatory equal-pay certification (ÍST 85 audits) and lowers the threshold from 25 to 50 employees. In its place, employers must submit documentation to Jafnréttisstofa every 3 years showing a gender-neutral pay system, with a time-bound remedial plan if a gap is found.

**Current workflow:**
1. Export payroll data (H3, Kjarni, DK and similar).
2. Classify jobs by value (a job-evaluation matrix kept in spreadsheets from the ÍST 85 era).
3. Run a regression or gap analysis, often through a consultant or a tool.
4. Write up the documentation and remedial plan and submit it to Jafnréttisstofa.

**Pain:**
Certification audits were costly and the new regime is lighter, which removes most of the pain. The remaining pain is a one-off documentation exercise every three years.

**Existing solutions:**
- PayAnalytics: an Icelandic-born pay-equity software (ownership changes unverified)
- HR suites with equal-pay modules (Kjarni and others, unverified)
- Consultancies and former ÍST 85 certification bodies, which now need a new service line
- Global pay-transparency vendors (e.g. Trusaic) already publishing guides on the Icelandic law

**The gap:**
Small. Former certification consultants will repackage their service as reporting help, and pay-equity tools already do the analysis.

**Possible product:**
Upload a payroll export, map jobs to value categories, get the gap analysis plus the Jafnréttisstofa submission pack and remedial-plan template.

**MVP:**
A CSV import, a job-value mapping UI and a PDF/Excel report in the format Jafnréttisstofa specifies.

**Pricing hypothesis:**
€1,500–3,000 per report every 3 years, or €50–100/month. Low recurring value.

**How to find first customers:**
Companies previously listed as equal-pay certified (Jafnréttisstofa list), plus Viðskiptaráð (Chamber of Commerce) members.

**Risks:**
Low frequency. Strong incumbents. The format will likely converge with the EU Pay Transparency Directive (whether and when the EEA adopts it is unverified), which brings in larger EU vendors.

**Kill condition:**
Jafnréttisstofa publishes a free template or calculator, or PayAnalytics/HR suites ship a one-click report (likely).

**Score:** 2/10

**Sources:**
- https://island.is/s/jafnrettisstofa/frett/nyjar-kroefur-um-skyrslugjoef-um-kynbundinn-launamun
- https://www.stjornarradid.is/efst-a-baugi/frettir/stok-frett/2026/06/01/Althingi-samthykkir-nytt-og-einfaldara-kerfi-i-stad-jafnlaunavottunar-/
- https://www.althingi.is/altext/157/s/1106.html
- https://vi.is/umsagnir/afnam-jafnlaunavottunar
- https://trusaic.com/blog/icelands-new-pay-gap-reporting-law-takes-effect-1-september-2026/

---

## Rejected after competitor research

- **EU catch and processing certificates for seafood exporters.** These looked strong: new EU rules took effect on 10 Jan 2026, every EU-bound shipment needs one, and Mbl reported launch hiccups. The idea is killed by **Fiskistofa's own certificate system**, which sends certificates digitally into EU CATCH. Exporters don't register in TRACES/CATCH themselves. Sources: https://island.is/s/fiskistofa/tilkynningar/nyjar-esb-reglur-um-veidivottord-taka-gildi-10-januar-18-12-2025 , https://island.is/s/fiskistofa/tilkynningar/aridandi-upplysingar-vegna-nyrra-regla-eu-um-veidivottord-8-1-2026 , https://www.mbl.is/200milur/frettir/2026/01/09/hnokrar_a_innleidingu_nys_kerfis_fiskistofu/
- **Catch logbook and landing reporting for vessels.** This is a state-run electronic channel under Reg. 298/2020, and the fleet is consolidated. Killed by **Fiskistofa's own e-logbook and app**. Source: https://island.is/reglugerdir/nr/0298-2020/original
- **Equal-pay certification (ÍST 85) tooling.** Killed by **the law itself**: certification is abolished from 1 Sep 2026 (see above).
- **Homestay compliance.** The buyers are individuals and the report is annual. Killed by **the free Sýslumenn registration** (https://island.is/heimagisting) and by STR platforms and channel managers (e.g. Hostaway) covering the rules.

## Attractive problem, poor distribution

- **Aquaculture sea-lice and escape reporting.** Regulation is tightening, but only about 4 large operators exist, so it is an enterprise sale. The new law also stalled in 2026. Sources: https://www.bairdmaritime.com/fishing/aquaculture/iceland-aquaculture-bill-parliament-agenda , https://weareaquaculture.com/news/aquaculture/icelands-new-aquaculture-bill-is-out

## Too competitive / government-owned

- **Construction QMS and building-permit portal records (HMS).** The state builds and runs the portal, and the QMS requirement is long-standing. Watch the 2026 building-regulation reform proposed by HMS. Sources: https://island.is/gaedastjornunarkerfi-fagadila-i-mannvirkjagerd , https://www.stjornarradid.is/efst-a-baugi/frettir/stok-frett/2026/06/25/HMS-leggur-til-einfaldari-og-nutimalegri-byggingarreglugerd-radherra-segir-um-kerfisbreytingu-ad-raeda/
- **Kilometre fee for rental companies specifically.** The Caren (Origo) rental platform plus telematics (RentalMatics) cover the large players. Only SME non-rental fleets remain (see opportunity 1).

## Add-on note

Iceland is best treated as a localisation module (Icelandic portal plus Ísland.is/Samgöngustofa web services) of a Nordic or EEA product, not as a standalone market.
