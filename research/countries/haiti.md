# Haiti: Opportunity Research

**Date:** 2026-10-05
**Track:** Haiti (Caribbean; added beyond the priority list)

**Method and limits (read first):**
- I ran 8 web searches in English and French, under the small-market cap of 10. WebFetch was not used, as the environment's network policy blocks it. Every fact comes from search-result extracts of the cited pages.
- Haitian-specific sources are thin online. A French search for the DGI's e-filing and e-invoicing rules returned only Moroccan DGI results, and a targeted retry found only that the DGI offers remote declaration and payment through a web version of its "RMS" system. I could not verify any 2025–2026 Haitian tax-digitisation mandate. **Treat "no regulatory trigger found" as "not found", not as "does not exist".**
- Anything I could not confirm is marked *unverified* or *estimate*.

**Bottom line:** Haiti is **legally accessible but practically very hard to serve**, and **no idea meets the brief's bar for a standalone opportunity.**
- **Sanctions:** US sanctions are targeted, not a country embargo. Viv Ansanm and Gran Grif were designated as FTO/SDGT on 2 May 2025.
- **Operating conditions:** gang control of Port-au-Prince's port and roads, a collapsing aid budget after the 2025 USAID freeze, USD scarcity in banks, and no Stripe or PayPal merchant support.
- **The one workflow with documented recurring, mandatory pain is the NGO customs-exemption ("franchise") dossier filed per shipment.** It scores only 3/10.
- **A better route:** serve Haiti as an add-on to a **Dominican Republic** product (cross-border trade, the CODEVI free zone), or to a **US-based** product sold to diaspora and mission organisations that ship to Haiti and pay with US cards.

---

## Accessibility check

| Factor | Finding | Effect |
|---|---|---|
| US/EU/UK/CA sanctions | Targeted only. Gang leaders, some politicians and elites are listed, and Viv Ansanm and Gran Grif became FTO/SDGT on 2 May 2025. There is no country-wide embargo on software or IT services. Canada also runs a targeted Haiti regime. | **Legal to sell**, but customers must be screened against the SDN list. Commentators warn that firms paying "tolls" to gangs at ports or on roads could face material-support exposure. That makes logistics and import customers a KYC risk. |
| Payment rails | PayPal does not support Haiti for business. Haiti is not a Stripe merchant country. Banks ration USD cash, and BRH Circular 114-1 restricts FX access. The dominant digital rail is Digicel's MonCash (about 2M customers). | Haitian SMEs **cannot easily pay a foreign SaaS in USD by card**. Billing would need MonCash, a local reseller, or invoicing a foreign HQ or donor. |
| Physical / operational | The main Port-au-Prince port terminal was still inaccessible to humanitarian cargo because of insecurity (Logistics Cluster, Nov 2025). Cargo is diverted to Cap-Haïtien and the Dominican border. | The customer base is shrinking and in crisis mode, with little appetite for new software. |
| Internet | Not specifically researched. Digicel and Natcom provide mobile data, and Starlink is used *(unverified for 2026)*. | Not the binding constraint. |

**Verdict:** accessible in law, marginal in practice. I did not stop at the accessibility check, but every opportunity below is penalised for payment and operating conditions.

---

## Industries screened

| # | Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|---|
| 1 | NGOs / international organisations (logistics officers) | Per-shipment customs-exemption request ("Requête de franchise"): line ministry → MPCE → MEF → AGD, plus SYDONIA declaration | **Shortlisted → Opportunity 1 (weak)** | Mandatory, repeated per shipment, and documented as unclear and inconsistent. But the market is shrinking after the USAID freeze, and freight forwarders and the Logistics Cluster already absorb the work. |
| 2 | Apparel exporters (HOPE/HELP) | Duty-free eligibility, rules-of-origin/value-added documentation, labour-compliance (TAICNAR) evidence | Rejected: too few buyers, policy cliff | About 20–30 factories *(estimate)*. Labour compliance is run by Better Work/ILO, and origin documents by US importers and their brokers. The extension only runs to 31 Dec 2026. |
| 3 | Customs brokers / importers | SYDONIA World (ASYCUDA) declarations, Cap-Haïtien rerouting | Rejected | The state already provides ASYCUDA, so brokers' pain is physical (port access, security), not data re-entry. Customers also carry gang-toll KYC risk. |
| 4 | SMEs / accountants | DGI tax declarations and e-payment | Rejected: no verifiable trigger | Only "declare and pay remotely via the RMS web version" was found. There is no 2025–2026 e-invoicing mandate on record, and SMEs cannot pay a foreign SaaS easily. |
| 5 | Local NGOs seeking donor funding | Donor eligibility and compliance paperwork (USAID-style pre-award) | Rejected: demand collapsed | Papyrus S.A. (a local consultancy) has already helped 300+ local organisations qualify for USAID funding. The 2025 freeze halted about 80% of US-funded programmes, so the buyer budget is gone. |

---

## Opportunities

### Opportunity: Haiti import-exemption ("franchise") dossier tracker for NGOs and mission organisations

**Industry:**
Humanitarian / faith-based NGOs and international organisations importing goods into Haiti.

**Buyer:**
The logistics or procurement officer at a registered NGO operating in Haiti. A second segment is the operations lead at a **US-based** small charity or medical mission that ships containers to Haiti. That segment matters most, because it can pay by US card.

**Trigger / Why now:**
- The Port-au-Prince port disruption has pushed cargo to Cap-Haïtien and the Dominican border.
- The Logistics Cluster published updated import procedures in Nov 2025 and documents that the rules are "unclear and difficult to access" and that customs procedures are "inconsistent".
- This is not a new legal mandate. Procedures are changing *de facto*. **This trigger is weak.**

**Current workflow:**
1. The NGO must already be recognised by MPCE (through its UCAONG unit), or by Foreign Affairs for an IO, and hold a DGI fiscal ID (NIF).
2. For **every** shipment it writes a "Requête de franchise" letter, sent through its line ministry and MPCE.
3. For humanitarian or perishable goods, it prepares the customs declaration and sends it to MEF with a copy of the MPCE letter. Once MEF approves, it goes to AGD (customs) for approval and SYDONIA processing.
4. Meanwhile it tracks the bill of lading, packing list, invoices and donation certificates, and chases each ministry by email, phone and in person *[inferred]*.
5. Demurrage builds while the dossier is stuck. Recovering containers is reported as a recurring difficulty.

**Pain:**
- The process repeats for each shipment and runs through several agencies.
- The Logistics Cluster records unclear rules, inconsistent procedures and delays in retrieving containers.
- Demurrage and spoiled goods (medicines, food) are the financial consequences.

**Existing solutions:**
- Freight forwarders and customs brokers in Haiti that run the dossier for a fee (the main substitute).
- Logistics Cluster (WFP) common services, plus free guidance pages (LCA "Haiti Customs Information" and procedure updates).
- The US Embassy's published import guidelines for NGOs and IOs.
- Large NGOs' in-house logistics teams and ERPs.
- Generic tools: spreadsheets, email and WhatsApp.

**The gap:**
- Nobody offers a **per-shipment checklist and status tracker** that encodes the current Haitian sequence (MPCE → MEF → AGD), its documents, letter templates and the evidence pack.
- A pack like that would serve small US-based missions that ship a few containers a year and keep getting the paperwork wrong *[inferred; not verified by interviews]*.

**Possible product:**
A web tool that generates the franchise request letter and the document checklist for each shipment. It would track approval status at each ministry, store the evidence pack for audit and donor reporting, and alert on demurrage risk.

**MVP:**
- A template-driven dossier builder: request letter, packing list and donation certificate in French.
- A per-shipment checklist with a status board.
- Built for US-based mission organisations shipping to Haiti and the Dominican Republic.

**Pricing hypothesis:**
$29–79/month per organisation, or $25–50 per shipment dossier *(estimate)*. Haitian NGOs would likely need billing through their foreign HQ.

**How to find first customers:**
- Logistics Cluster Haiti meeting attendee lists and minutes.
- The MPCE/UCAONG list of recognised NGOs *(availability unverified)*.
- US church and mission networks and medical-mission shipping groups.
- Container consolidators in Miami that ship to Haiti *(unverified)*.

**Risks:**
- Volumes are falling after the USAID freeze.
- The process changes informally, so templates go stale.
- Brokers will keep the work as part of their fee.
- Customers whose goods move through gang-controlled routes create KYC and material-support risk.
- The real bottleneck is physical security, which software cannot fix.

**Kill condition:**
- Fewer than 5 of 15 interviewed mission or NGO logistics leads report recent demurrage or delay caused by paperwork rather than port access.
- Or most say their forwarder handles the franchise end-to-end for an acceptable fee.

**Score:** 3/10

**Sources:**
- https://logcluster.org/en/documents/update-procedures-importation
- https://lca.logcluster.org/13-haiti-customs-information
- https://logcluster.org/sites/default/files/public/2025-11/logisticssectorhaiticonceptofoperations_20251125.pdf
- https://logcluster.org/sites/default/files/public/2025-12/logisticssectorhaiticapcompterendudereunion_20251126.pdf
- https://ht.usembassy.gov/guidelines-for-importation-of-goods-into-haiti-for-registered-non-governmental-organizations-ngos-and-international-organizations-ios/
- https://ht.usembassy.gov/guidelines-for-shipping-commercial-and-non-commercial-humanitarian-goods-to-haiti/
- https://www.thenewhumanitarian.org/node/264547 (USAID freeze: about 80% of US-funded programmes halted, per OCHA)

No other idea reached the opportunity bar. I am not padding the list to three.

---

## Rejected after competitor research

- **HOPE/HELP apparel compliance and origin documentation.** Killed by **Better Work Haiti (ILO/IFC)**, which runs the mandated labour-compliance (TAICNAR) process, and by the US importers' and brokers' trade-compliance teams, which own the origin claims. Only a few dozen factories exist *(estimate)*, and the programme currently ends on 31 Dec 2026, although an extension to 2035 has been introduced in Congress (status unverified).
- **Customs declaration tooling for brokers.** Killed by **SYDONIA World (ASYCUDA)**, the free government system in use since 2008–2009. The pain that remains is physical access, not data entry.
- **Donor-compliance and eligibility tooling for local NGOs.** Killed by **Papyrus S.A.** and similar local consultancies (300+ organisations helped), and above all by the collapse of USAID funding in 2025.

## Attractive problem, poor distribution

- **SME tax filing and payment (DGI).** This is probably painful, but I found no verifiable new mandate. SMEs also cannot pay foreign SaaS by card, so the only realistic path is a local reseller or a MonCash integration.
- **Cross-border Haiti–Dominican Republic trade paperwork** (Dajabón/Ouanaminthe, CODEVI free zone, about 18,000 Haitian workers). This is better approached as an **add-on to a Dominican Republic product**, with Dominican exporters and free-zone operators as the paying customers.

## Too competitive

- None identified. The constraint in Haiti is demand and accessibility, not competition.

## Sources (accessibility and context)

- https://home.treasury.gov/news/press-releases/sb0282 (OFAC Haiti-related designations)
- https://globalinitiative.net/analysis/haiti-how-us-terrorist-designations-could-deepen-criminal-rule-and-humanitarian-tragedy/
- https://amlwatcher.com/news/u-s-designates-two-haitian-groups-as-foreign-terrorist-organizations/
- https://www.international.gc.ca/world-monde/international_relations-relations_internationales/sanctions/haiti.aspx?lang=fra
- https://thefintechtimes.com/fintech-landscape-in-the-caribbean-haiti-in-2026/ (MonCash, about 2M customers)
- https://lenouvelliste.com/en/article/242007/rarete-importante-de-dollars-lapb-fait-le-point-et-conseille (USD withdrawal limits)
- https://www.lereliefhaiti.com/en/articles/lhddh-denounces-arbitrary-banking-system-in-haiti (BRH Circular 114-1)
- https://yaadbooks.com/blog/caribbean-business-software-landscape-2026 (Caribbean SaaS adoption and payment barriers)
- https://lenouvelliste.com/en/article/263965/renouvellement-de-la-loi-hopehelp-ladih-salue-une-avancee
- https://haitienmarche.com/index.php/whats-up-little-haiti/whats-up-little-haiti-37 (HOPE/HELP extended to 31 Dec 2026, retroactive)
- https://www.trade.gov/sites/default/files/2026-01/Cleared%20Haiti%20FAQs.pdf
- https://fibre2fashion.com/news/apparel-news/legislation-to-extend-hope-help-acts-until-2035-introduced-in-us-277774-newsdetails.htm
- https://lereliefhaiti.com/en/articles/delay-of-the-hopehelp-program-a-shock-for-haitian-industry (CODEVI)
- http://www.servicespublics.gouv.ht/site/rsmo/DGI
- https://search.oecd.org/aidfortrade/48181311.pdf (SYDONIA World rollout in Haiti)
- https://www.counterpunch.org/2025/02/10/where-does-the-money-go-a-look-at-usaid-spending-in-haiti/ (Papyrus S.A., 300+ local organisations)
