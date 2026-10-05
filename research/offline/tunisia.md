# Tunisia: offline / quiet-industries pass

Researched 2026-10-05. Budget: 20 WebSearch calls. 19 were attempted, of which 7 were refused because of usage or session limits, so this report is based on 12 searches that returned results. WebFetch was not used, so every fact below comes from search-result summaries. Anything not confirmed by a source is marked *unverified* or *estimate*. The existing country report (`research/countries/tunisia.md`) covers the El Fatoora/TEJ tax-digitalisation wave, and none of that is repeated here.

**Headline:** Tunisia's clearest quiet-industry trigger in 2026 is the **anti-money-laundering (AML) extension to small cash-heavy traders**. Two texts drive it:
- **BCT circular 2026-02** (23 Jan 2026) for bureaux de change.
- **A JORT text of 27 Jan 2026** for jewellers and precious-metal dealers. It applies from 30,000 TND per transaction and requires KYC, checks on beneficial owners, sanctions screening, a compliance officer and reporting through goAML.

On bureaux de change, competitor diligence killed the idea: a local vendor, Insight Plus (Hive+), holds about 75% of the market and also built the BCT's own reporting tool. The jewellers are the open question that remains.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Bureaux de change (change manuel) | BCT circular 2018-07: software with operation traceability; monthly SED report to the BCT by the 10th. Circular 2026-02: KYC on every client, 10-year record keeping, CTAF correspondent, goAML reports | Small owner-run counters, but already digitised | 343 licensed by Jan 2024, plus 39 new later (WMC 2024; Webdo/Tunisie Numérique) | **Rejected** | Insight Plus "Hive+" equips more than 180 bureaux (about 75% share) and built the BCT's "Bridge+" reporting. The incumbent will absorb the 2026-02 KYC requirements |
| Jewellers and precious-metal traders (bijoutiers) | JORT 27 Jan 2026: from 30,000 TND, client and beneficial-owner identification, origin of funds, sanctions-list blocking, compliance officer, staff training, CTAF suspicious-transaction reports. Hallmarking via the Bureau de garantie | Family shops in the souks; trade body is a UTICA chamber; no software listings found | More than 6,000 jewellery traders (Webdo, 2016 figure) | **Candidate (weak)** | New mandatory obligation, no named software. But the 30k TND threshold limits how often it applies, and the sector is in crisis (Bureau de garantie closed, record gold prices) |
| Households employing domestic workers | Law 2021-37: written contract (model contract Feb 2023), CNSS coverage | Informal; contract and CNSS handled at the counter | No count found | **Candidate (very weak)** | Mandatory on paper, but enforcement is weak and the buyers are consumers. Likely to need a done-for-you service |
| Louage (shared-taxi minibus) operators | Governorate licence per route class (red/blue/yellow); vehicle age of 5 years or less; Tunisian nationals only | Licences allocated by governorate calls for applications (e.g. Mahdia, July 2025: 35 + 5 licences) | Unverified (thousands, *estimate*) | Rejected | The obligation is a one-off licence application, not a recurring report. Requires a Tunisian national |
| Scrap metal and copper recyclers (récupérateurs) | Police register against stolen metals (reported as reinforced) | Copper-theft busts (Douar Hicher 3 t, 2022; "copper mafia" arrests, Apr 2026) | Unverified | Rejected | The register rule could not be confirmed with a source. Many operators are informal collectors; no trigger date |
| Olive mills (huileries) | Declarations to ONH and the ministry (*unverified*) | Seasonal mills, often family-run | Unverified | Unscreened | The search returned only UK quota notices. Not enough evidence |
| Cattle breeders and livestock traders | Two ear tags plus national ID since 1998; register; movement notification (OEP) | OEP/WOAH document describes a paper-plus-database system | Unverified | Rejected | State-run system with no paid layer. Breeders have little money; no 2025–26 trigger found |
| Second-hand clothing importers (fripe) | Ministry of Commerce quotas and approval (*unverified*) | Not verified | Not verified | Unscreened | Search was refused |
| Driving schools (auto-écoles) | ATTT approval; exam registration (*unverified*) | Not verified | Not verified | Unscreened | Search was refused |
| Real-estate agents | AML vigilance as a designated non-financial profession (DNFBP) (*partly verified*: one search summary says the AML extension also covers them, which is not clearly sourced to the Tunisian text) | Small agencies | Not found | Watch | Could join the jewellers as a second segment of the same AML kit if confirmed |

## 2. Opportunities

### Opportunity: AML/KYC register kit for Tunisian jewellers (JORT 27 Jan 2026)

**Industry:**
Jewellery and precious-metal retail and wholesale (bijoutiers, gold traders)

**Buyer:**
Owner of a family jewellery shop or gold-trading business, in the souks of Tunis, Sfax and Sousse. For multi-shop traders, the designated compliance officer.

**Trigger / Why now:**
A JORT text published 27 Jan 2026 redefines the rules for jewellery and precious-metal traders. For any transaction of 30,000 TND or more, the trader must:
- identify the buyer and verify beneficial owners;
- establish the origin of funds;
- block instantly any customer on a UN or national asset-freeze list;
- appoint a compliance officer and train staff;
- report suspicions to the CTAF (goAML).

**Current workflow (inferred, *unverified*):**
1. Sale or purchase at the counter, often in cash. For "or cassé" (scrap gold), the shop buys from individuals.
2. Above the threshold, the shop is meant to photocopy the ID and record the client in a book. In practice this is probably paper or nothing.
3. Sanctions-list check: no realistic tool exists for a small shop. Manual lookups of lists published by the CNLCT/CTAF (*unverified*).
4. A suspicious-transaction report means a goAML account and a report filed by the compliance officer.

**Pain:**
- New personal duties on micro-business owners: compliance officer, training and sanctions blocking.
- A sector already squeezed: gold at record prices, falling demand, and the central Bureau de garantie (hallmarking office) closed, which drew calls from the trade chamber to reopen it.
- Penalties under organic law 2015-26 (as amended in 2019) apply to reporting entities (*the level for jewellers is unverified*).

**Existing solutions:**
- Paper ledgers and photocopies.
- CTAF's goAML web portal (free, but it only receives reports).
- International KYC/AML SaaS (screening APIs), which are priced and built for banks.
- Accountants or lawyers who may do training and compliance-officer paperwork (*unverified*).
- No Tunisian jeweller-specific software found. Insight Plus serves bureaux de change only, as far as found.

**Offline evidence:**
Sector communication runs through a UTICA trade chamber (president Hatem Ben Youssef) and the press. No vendor blogs or software listings for jeweller compliance were found. The business is cash-based, the shops are family-owned, and the gold supply runs through the BCT and the Bureau de garantie at counters.

**Offline channel:**
- The Chambre syndicale nationale des commerçants de bijouterie (UTICA): training sessions on the new obligations.
- In-person visits in the souk clusters (Souk El Berka in Tunis, Sfax medina).
- The hallmarking laboratories (Tunis, Sfax) where jewellers bring scrap gold.

**Market count:**
More than 6,000 jewellery traders (Webdo, 2016, as cited by the trade). No current official register was found.

**The gap:**
A cheap, Arabic-first counter tool that does four things:
1. scans the client's ID card;
2. totals the client's purchases to trigger the 30,000 TND threshold, including split transactions;
3. screens the name against the national and UN freeze lists;
4. produces the internal register, plus a staff-training record and a compliance-officer file ready for inspection.

**Possible product:**
A tablet or phone app with a register, sanctions screening and audit pack. It is sold as software plus a one-off "compliance setup" service (compliance officer designation letter, procedures, training certificate) delivered with the trade chamber or a local accountant.

**MVP:**
A mobile web form with ID photo and OCR, a running total per client, screening against the UN consolidated list plus the Tunisian national list, and a PDF register export.

**Pricing hypothesis:**
- 20–40 TND per month per shop (*estimate*).
- A one-off setup service of 300–600 TND (*estimate*).
- Realistic buyers would pay more for the done-for-you procedures and training than for the software.

**How to find first customers:**
Trade-chamber training days, souk walk-ins, and accountants who serve jewellers.

**Risks:**
- The 30,000 TND threshold means most sales never trigger it, so frequency is low.
- Enforcement by the CTAF or inspectors on small jewellers is unproven.
- The sector may simply ignore the rule.
- Payment in TND, and a local partner is needed.
- Founder access: a non-local solo founder cannot realistically sell this. It needs a local, Arabic-speaking partner with ties to the UTICA chamber.

**Kill condition:**
Interviews show that no jeweller has been inspected or fined under the 2026 text, or that the chamber already distributes a free register and procedure kit.

**Score:** 4/10
(Pain 5, Frequency 4, Mandatory 7, Fragmentation 2, Competition 7, Incumbent gap 6, Buyer access 5, WTP 3, MVP 7, Distribution 4)

**Sources:**
- https://managers.tn/2026/01/29/a-partir-de-30-000-dinars-les-commercants-de-bijoux-soumis-a-de-nouvelles-obligations/
- https://kapitalis.com/tunisie/?p=19379483
- https://managers.tn/2025/09/30/flambee-des-prix-de-lor-en-tunisie-appel-a-la-reouverture-du-bureau-de-garantie-central/
- https://www.webdo.tn/fr/actualite/national/tunisie-plus-de-6000-commercants-bijoutiers-risquent-faillite-lemprisonnement/163380/
- https://www.tunisienumerique.com/lor-en-crise-en-tunisie-chute-de-la-demande-prix-record-et-dereglement-du-marche/
- https://www.ctaf.gov.tn/

---

### Opportunity: Done-for-you domestic-worker contract and CNSS service (Law 2021-37)

**Industry:**
Households as employers (domestic workers and live-in helpers)

**Buyer:**
Middle-class households in Greater Tunis, Sfax and Sousse that employ a domestic worker. Possibly also placement agencies.

**Trigger / Why now:**
Law 2021-37 (16 July 2021) regulates domestic work. A model contract was presented in February 2023, and a ministerial partnership agreement was signed to implement the law. There is no 2025–26 trigger found, so the "why now" is weak.

**Current workflow (inferred, *unverified*):**
1. An informal verbal agreement.
2. If the employer formalises it: the model contract, then CNSS registration at the counter, then quarterly contributions.

**Pain:**
Mostly the worker's pain (informality, abuse; see the ASF policy brief). Employer-side pain appears only if enforcement arrives, and none was found.

**Existing solutions:**
CNSS counters, accountants, and free ministry model contracts.

**Offline evidence:**
A policy brief by Avocats Sans Frontières on domestic servitude and press coverage of the model contract. No online tools found.

**Offline channel:**
Placement agencies, the Ministry of Family's regional offices, NGOs.

**Market count:**
No Tunisian count found.

**The gap:**
A contract plus CNSS quarterly-filing service for households.

**Possible product / MVP:**
A WhatsApp-intake service that fills the model contract and does the CNSS registration and quarterly declarations for a fee.

**Pricing hypothesis:**
10–20 TND per month per household (*estimate*). This is a service, not software.

**How to find first customers:**
Placement agencies.

**Risks:**
- Consumer buyers.
- No enforcement.
- Founder access: needs a local.

**Kill condition:**
CNSS offers a free online household-employer registration, or no enforcement is happening.

**Score:** 2.5/10

**Sources:**
- https://www.webdo.tn/fr/actualite/national/tunisie-un-contrat-organisant-le-travail-domestique/203184/
- https://www.webmanagercenter.com/2021/02/11/463335/la-tunisie-aura-bien-une-loi-sur-lorganisation-du-travail-domestique/
- https://asf.be/wp-content/uploads/2023/06/POLICY-BRIEF-SERVITUDE-DOMESTIQUE-FR.docx

## 3. Rejected

- **Bureau-de-change KYC/BCT reporting (circular 2026-02):** this had the best trigger of the pass: 380+ licensed counters, mandatory software, a monthly SED report and new 2026 KYC and goAML duties. It was killed by **Insight Plus "Hive+"**: a cloud bureau-de-change system with about 75% share (more than 180 bureaux in 23 governorates), whose "Bridge+" is the BCT's own reporting tool. Sources:
  - https://www.ilboursa.com/marches/la-startup-tunisienne-insight-plus-equipe-la-bct-de-sa-solution-de-reporting-reglementaire-bridge-_32148
  - https://www.lapresse.tn/2026/01/27/nouvelle-circulaire-bct-vigilance-maximale-pour-les-bureaux-de-change/
  - https://www.tustex.com/economie-actualites-economiques/circulaire-de-la-bct-de-nouvelles-regles-pour-les-bureaux-de-change-en-tunisie
  - https://www.webmanagercenter.com/2024/01/29/519833/les-bureaux-de-change-manuel-en-tunisie-une-activite-en-plein-essor/
- **Louage operators:** the obligation is a one-off governorate licence (https://idaraty.tn/fr/procedures/autorisation-d-exercice-du-transport-public-routier-non-regulier-de-personnes-par-voiture-de-louage). There is no recurring filing.
- **Scrap and copper dealers:** theft is real (https://fr.allafrica.com/stories/202604010600.html), but no Tunisian dealer-register obligation could be confirmed, and the trade is largely informal.
- **Livestock identification:** a state-run OEP system in place since 1998 (https://rr-africa.woah.org/app/uploads/2016/12/7-tunisie-identification.pdf). No paid layer and no new trigger.

## 4. Method notes

- **What worked:** French queries on Tunisian business press (managers.tn, lapresse.tn, webmanagercenter, businessnews) quickly surface new JORT and BCT obligations. "Circulaire BCT + secteur" and "JORT + profession + obligations" were the best patterns. Searching "logiciel + secteur + Tunisie" found the incumbent at once.
- **What didn't work:**
  - Olive-mill and ONH queries returned only UK quota notices.
  - Scrap-dealer queries returned French parliamentary questions.
  - Arabic queries were not tried, because the budget was lost to refused calls.
- **Not screened:** fripe importers, auto-écoles, veterinary pharmacies, pesticide sellers and real-estate agents' AML duties. These are worth a follow-up pass, preferably in Arabic.
