# Niger: Offline-Industries Pass

**Research date:** 2026-10-05 · **Search budget used:** 4 of 20. The search tool hit its usage limit on call 3, so 2 calls returned results and 2 were refused. Per the instructions, I stopped and wrote up what I had. · **Languages:** French

## Bottom line

This is a short, honest report. Niger is an inaccessible market for a non-local solo founder. Since the July 2023 coup it has had a military government with a record of tax claims against foreign firms. It has left ECOWAS for the AES. Connectivity outside Niamey is weak. See the country report at `research/countries/niger.md`. The quiet industries that matter most are livestock trading, artisanal gold and moto-taxis. They are large in headcount, but almost entirely informal and cash-based, and they are regulated through **bans, ad-hoc taxes and ministerial authorisations**, not through recurring digital registers. **No quiet-industry opportunity reaches the build bar.** Both of the best leads below score 3/10 or lower, and both would need a local partner.

## Quiet industries screened

Rows marked "not searched" are judgements from general knowledge and the existing country report. They are not backed by evidence from this pass and should be treated as **estimates**.

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Livestock traders and export (cattle, sheep, goats, camels) | Ministry of Commerce export authorisations. Tax and proof of purchase at official livestock markets. Export bans by decree (May 2025 for Tabaski; 2 Mar 2026 general ban). | Buyers at official markets "pay a tax and receive proof of purchase" (paper receipt); trade is cross-border by land | Not found | Reject (weak lead kept below) | The export ban of 2 Mar 2026 removes the recurring export workflow. Policy is volatile and enforced by seizure, not by filing. |
| Artisanal gold: buyers and comptoirs | Ministerial authorisation under Mining Code art. 43. Sector "structuring" under SOPAMIN. New refinery (Royal Gold Niger SA, agreement of 23 Apr 2025). | Ministry says the sector is largely clandestine. Gold leaves informally to the UAE. | 230+ sites and 800,000+ workers (Ministry of Mines via AA). Number of licensed comptoirs: not found. | Weak lead (below) | A traceability register could be mandated as the refinery comes online, but the buyer is effectively the state and SOPAMIN. Security risk is extreme. |
| Households as employers (domestic workers) | CNSS registration of domestic staff (Labour Code) | No CNSS e-declaration platform found in the country report. Search refused in this pass. | Not found | Reject | No sign of enforcement. Employers are informal and pay in cash. |
| Scrap metal, second-hand and pawn dealers | No police register found (not searched) | n/a | n/a | Reject (estimate) | No evidence of a register obligation. |
| Moto-taxi (kabu-kabu) and minibus operators | Municipal licences, union (syndicat) cards (not searched) | Union-run and cash-based | Not found | Reject (estimate) | The union collects fees on paper. No recurring report to a regulator that software could replace. |
| Well and borehole drillers (forages) | Ministry of Hydraulics authorisation (agrément) for drilling firms (unverified) | Search refused | Not found | Not assessed | The work is mainly donor- and state-procured, so the buyer is an NGO or a ministry. |
| Butchers and small abattoirs | Veterinary meat inspection (not searched) | Inspection is done by state vets at a few municipal abattoirs (estimate) | Not found | Reject (estimate) | The inspector, not the operator, holds the paperwork. |
| Pesticide sellers | CSP (Comité Sahélien des Pesticides) product approval. Dealer authorisation (not searched). | n/a | Not found | Reject (estimate) | Tiny market. The obligation sits with importers. |
| Money changers | BCEAO approval for bureaux de change (UEMOA-wide; not searched) | Mostly informal street changers | Not found | Reject (estimate) | The formal ones are few. The informal ones avoid registration. |
| Gum arabic and onion exporters | Phytosanitary and export certificates (not searched) | Land export to Nigeria and Ghana | Not found | Reject (estimate) | No EU traceability trigger. Corridor disruption. |
| Private Koranic and franco-Arabic schools | Ministry authorisation (not searched) | n/a | Not found | Not assessed | Search refused. |
| Pharmacies and dépôts pharmaceutiques | Controlled-drug registers | n/a | n/a | Reject | Already covered in the country report (homologated local tools). |

## Strongest opportunities (both below the build bar)

### Opportunity: Lot-level gold purchase register for licensed comptoirs, ahead of the refinery

**Industry:**
Artisanal gold trading (comptoirs d'achat, collectors)

**Buyer:**
Licensed gold-buying comptoirs and collectors who sell into the new national refinery or to SOPAMIN

**Trigger / Why now:**
On 23 Apr 2025 the state signed an agreement with Suvarna Royal Gold Trading LLC to build Royal Gold Niger SA (a refinery plus jewellery and stone-cutting units). The Ministry of Mines says it wants to "structure" artisanal gold and turn it into tax revenue. If the refinery requires proof of origin per lot, comptoirs will need a purchase register. **Unverified:** no such register requirement was found.

**Current workflow (estimate):**
1. A collector buys gold at the site for cash.
2. The quantity is noted in a notebook, if at all.
3. The comptoir aggregates lots and exports them, often informally to the UAE.

**Pain:**
The state is losing revenue to clandestine export, according to Les Échos du Niger (Dec 2024). The pain is the state's, not the operator's.

**Existing solutions:**
- Paper notebooks
- Generic traceability or responsible-sourcing tools used in other countries: OECD-style due-diligence platforms and refinery-run KYC (not verified for Niger)
- Whatever system SOPAMIN or the refinery imposes

**Offline evidence:**
More than 800,000 workers, a largely clandestine trade and cash purchases. No software was found.

**Offline channel:**
None that a foreigner can use. Access would have to come through the Ministry of Mines, SOPAMIN or the refinery as a mandated tool. Distribution score: 2.

**Market count:**
230+ sites and 800,000+ workers (Ministry of Mines). The number of licensed comptoirs was not found.

**The gap:**
A lot-level purchase register that would satisfy a refinery's origin requirement, if one is imposed.

**Possible product:**
A mobile purchase register with offline capture: seller ID, site, weight and price per lot. It would export to the refinery's intake format.

**MVP:**
An offline Android form plus a lot export (PDF/CSV).

**Pricing hypothesis:**
$20–50 per comptoir per month (estimate). Realistically it would only be sold as a state- or refinery-funded tool.

**How to find first customers:**
A Ministry of Mines list of authorisations (not found) and the refinery operator.

**Willingness to pay:**
Operators would not pay unless forced. The real buyer is the refinery or the state, which means procurement.

**Founder access:**
Not realistic for a non-local solo founder. It needs a local partner with state access. Physical security risk is high.

**Risks:**
- Armed groups operate around the sites.
- Political volatility.
- Payment is likely to come from the state.
- The refinery deal could stall.

**Kill condition:**
The refinery imposes no per-lot origin documentation, or it runs its own intake system.

**Score:** 2/10

**Sources:**
- https://www.aa.com.tr/fr/afrique/le-commerce-s-organise-autour-de-la-cit%C3%A9-d-or-nig%C3%A9rienne-/537535
- https://minesactu.info/2025/04/28/niger-lor-du-niger-sera-transforme-dans-la-nouvelle-raffinerie/
- https://lesechosduniger.com/2024/12/27/orpaillage-clandestin-au-niger-quand-letat-perd-au-profit-des-emirats-et-des-groupes-armes/
- https://mazumawa.com/lorpaillage-au-niger-enjeux-et-perspectives/

### Opportunity: Livestock-market receipt and export-permit tracker for traders

**Industry:**
Livestock trading (marchés à bétail, exporters to Nigeria and the coast)

**Buyer:**
Larger livestock traders and exporters, and possibly the market management committees that collect the market tax

**Trigger / Why now:**
Export bans of May 2025 (Tabaski) and 2 Mar 2026 (sheep, goats, cattle and camels), with sanctions and seizure of livestock. Buyers at official markets pay a tax and get proof of purchase. Traders protested the bans. A shift towards documented provenance could follow once the ban is lifted (estimate).

**Current workflow (estimate):**
1. The trader buys at an official market and gets a paper tax receipt.
2. For export, the trader obtains a veterinary certificate and a commerce authorisation on paper.
3. The trader transports the animals by land.
4. At checkpoints and the border, the trader shows the paper documents.

**Pain:**
Seizures under the 2026 decree. Paperwork at every checkpoint. The real pain is the ban, which software cannot fix.

**Existing solutions:**
- Paper receipts and certificates
- Livestock-market information systems run by donors (SIM Bétail-type; unverified for 2026)
- Trader associations

**Offline evidence:**
Cash markets, paper receipts and land routes. No software listings were found.

**Offline channel:**
Livestock trader associations and market management committees (names not verified). A local field agent would be needed.

**Market count:**
Not found.

**The gap:**
A single place to hold receipts and certificates for each consignment. This only has value once exports resume.

**Possible product:**
A consignment folder on the phone (photographed receipts, certificates and animal counts) with a shareable PDF for checkpoints.

**MVP:**
A WhatsApp-delivered PDF bundle builder.

**Pricing hypothesis:**
About 1,000–2,000 XOF per consignment (estimate). Traders would more likely pay for a done-for-you document runner.

**How to find first customers:**
Through livestock trader associations at the large markets. Requires a local agent.

**Willingness to pay:**
Low for software. A service (paperwork runner) is more plausible.

**Founder access:**
Requires a local.

**Risks:**
- The export ban removes the workflow.
- Checkpoints accept only originals.
- It drifts into a generic document-collection product, which the brief flags as a trap.

**Kill condition:**
The export ban stays in place, or authorities refuse anything but paper originals.

**Score:** 2/10

**Sources:**
- https://sahelien.com/niger-nouvelle-interdiction-dexporter-du-betail-pour-proteger-le-marche-interieur/
- https://www.africaradio.com/actualite-109628-niger-interdiction-d-exporter-du-betail-avant-l-aid-al-adha-pour-eviter-la-flambee-des-prix
- https://www.lesahel.org/tabaski-2025-et-interdiction-dexportation-du-betail-critiquee-par-les-commercants-la-decision-du-ministere-du-commerce-fait-la-bonne-affaire-des-clients/
- https://anp.ne/tabaski-2025-interdiction-dexportation-et-encadrement-de-la-vente-du-betail-les-avis-sont-partages/

## Rejected

- **Domestic-worker CNSS payroll.** No e-declaration platform was found and there is no sign of enforcement. Employers are informal.
- **Moto-taxi and minibus operators.** Unions collect fees on paper, and there is no regulator report to automate.
- **Scrap, second-hand and pawn dealers.** No police-register obligation was found.
- **Money changers.** BCEAO-approved bureaux are few and the informal changers avoid registration.
- **Gum arabic and onion exporters.** There is no traceability trigger and they export over land to neighbouring countries.
- **Butchers and abattoirs.** The state vet holds the inspection paperwork.
- **Pesticide sellers.** The obligation sits with importers through the CSP, and the market is tiny.

## Method notes

- The regulator-first pattern in French surfaced decrees and ministry statements, for example the livestock export bans and the gold refinery. In Niger, though, regulation takes the form of **bans and authorisations**, not recurring registers. No licensing registers or lists were found online.
- The search tool's usage limit hit after 4 calls (2 with results). Domestic workers, drillers and the remaining seed groups were assessed from general knowledge only. They are marked "estimate" or "not searched" in the table and should not be relied on.
