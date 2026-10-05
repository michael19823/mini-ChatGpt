# Djibouti: Offline-Industries Pass

**Date:** 2026-10-05
**Existing report:** `research/countries/djibouti.md` (forwarder corridor dossier 4/10, ITS+CNSS payroll 3/10; not re-reported here)

**Method and limits (read first):**
- Budget was 8 WebSearch calls. This run was interrupted once by a usage limit and resumed. After resuming, I made 3 calls: 2 returned results and 1 was refused ("usage limit"). As the instructions require, I stopped there and wrote up what I had. Searches made before the interruption, if any, left no output and could not be recovered.
- I did not use WebFetch. Facts come from search-result extracts only.
- Confidence is **low**. Most rows in the screening table come from structural reasoning about a population of about 1.1–1.2 million *(estimate)*. They are not backed by register evidence. Rows without a source are marked "unverified".

**Bottom line:** Djibouti has very few quiet industries that are both regulated and numerous. The two quiet sectors that are big in economic terms both run through **a single choke-point operator**:
- **Livestock re-export** runs through the Damerjog quarantine and export centre.
- **Khat imports** are run by a handful of licensed importers. SOGIK historically held the monopoly.

In both cases the "many small operators" sit upstream, mostly in Somalia/Somaliland and Ethiopia, and not in Djibouti. **No opportunity meets the brief's bar.** I list the strongest one at a low score so the reasoning is on record.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Livestock exporters (Gulf re-export via Damerjog) | Quarantine, veterinary checks, sanitary pass for each export consignment | Certification is issued at the Damerjog centre after on-site medical checks; no portal found | About 2M head/year through Damerjog, up to 30,000 head/day to Saudi Arabia, mostly from Somalia (La Nation) | Weak lead (Opp. 1) | Per-shipment and mandatory, but one quarantine operator plus a few big exporters; traders are mostly foreign |
| Khat importers / wholesalers | Import licence; per-kg taxes (100 FD/kg tax, 8.40 FD/kg patente, 100 FD/kg IGS + 50 FD/kg other) | Daily truck/air import with tax collected at entry; historically one licensed importer (SOGIK) | About 10–11 t/day; about USD 17M/yr tax (search extracts citing World Bank / ICIJ) | Rejected | Concentrated importers; the state collects at the border; retail sellers (mostly women vendors) are informal and have no filing obligation |
| Households employing domestic workers | Employer registration and CNSS contributions (general labour/CNSS rules; household-specific rule unverified) | Search refused; no evidence gathered | Unknown | Unverified / likely reject | Many domestic workers are reported to be undocumented Ethiopian migrants *(unverified)*, so formal declaration is rare |
| Scrap metal dealers / exporters | Export via port and customs; no police register found | Not searched | Unknown | Reject (no evidence) | No dealer-register obligation found; exports go through SYDONIA like other cargo |
| Second-hand goods / used car parts | None found | Not searched | Unknown | Reject | No register regime known |
| Artisanal fishers selling own catch | Licence from the fisheries directorate *(unverified)* | Not searched | Small (a few hundred boats, estimate) | Reject | Tiny, informal, and nobody is filing |
| Small abattoirs / butchers | Veterinary inspection at the municipal abattoir *(unverified)* | Not searched | Few; slaughter centralised in the capital *(estimate)* | Reject | Centralised public abattoir, so no fragmented operator base |
| Well drillers / water trucking (citerne) operators | ONEAD / ministry authorisation *(unverified)* | Not searched | Unknown | Reject (no evidence) | No evidence of recurring reporting |
| Minibus / taxi operators | Transport licence and municipal permits *(unverified)* | Not searched | Several hundred minibuses in the capital *(estimate)* | Reject | Annual licence only, and consumer-grade operators |
| Money changers / hawala (remittance) operators | Central Bank of Djibouti licensing and AML reporting *(general knowledge, unverified this session)* | Not searched | Small number of licensed operators *(estimate)* | Reject | AML tooling is a crowded category; few buyers; high-trust sale |
| Market traders / street vendors | Patente (business licence tax) *(unverified)* | Not searched | Unknown | Reject | Annual tax, informal, low ability to pay |

## 2. Strongest opportunity (below the bar)

### Opportunity: Consignment dossier for livestock exporters through Damerjog

**Industry:**
Live animal export (sheep, goats, camels and cattle re-exported to Saudi Arabia and the Gulf)

**Buyer:**
The export manager at a livestock export company shipping through Djibouti, or the Damerjog quarantine operator itself.

**Trigger / Why now:**
No dated 2025–2026 regulation was found. The only possible driver is demand around Hajj and the season, plus importing-country health rules, which may change *(unverified)*. There is no strong "why now".

**Current workflow (inferred from search extracts; partly unverified):**
1. Animals arrive from Somalia/Somaliland and Ethiopia and enter quarantine at Damerjog.
2. Veterinary checks are done on site, and the sanitary pass / veterinary certificate is issued per consignment.
3. The exporter assembles the importing-country documents (Saudi import permit, health certificate, origin) and the ship manifest.
4. Customs export declaration (SYDONIA) and port booking.

**Pain:**
Per-consignment, high-value and time-critical, because animals held in quarantine cost feed and lose weight. I found no complaints or quantified losses.

**Existing solutions:**
- The quarantine operator's own certification process (operated with the Abu Yasser company, per the search extract)
- The Ministry of Agriculture's veterinary services (DESV)
- SYDONIA World and DPCS for the customs and port steps
- Exporters' clerks working with paper and Excel *(unverified)*

**Offline evidence:**
Certification is issued physically at Damerjog after on-site inspection. No portal, software listing or online forum for exporters was found.

**Offline channel:**
Through the Damerjog centre operator and the ministry's livestock and veterinary directorate. These are effectively the only gatekeepers, so selling would mean selling to them, which is a B2G-style sale.

**Market count:**
About 2M head/year and up to 30,000 head/day (La Nation). I found no count of exporters. It is likely a dozen or fewer *(estimate)*.

**The gap:**
Possibly a per-consignment tracker that links quarantine status, health certificates, ship slots and buyer documents. But with one quarantine operator and few exporters, this is bespoke software for one client, not a product.

**Possible product:**
A consignment board for exporters: animals in quarantine, test results, certificate status, ship booking and buyer document pack.

**MVP:**
A shared checklist per consignment with document uploads and a quarantine-day counter.

**Pricing hypothesis:**
USD 200–500/month per exporter, or a custom project for the quarantine operator *(estimate)*.

**How to find first customers:**
Through the Damerjog centre and the ministry. The real exporter base is in Somaliland (Berbera) and Ethiopia.

**Willingness to pay:**
Pay would be for a done-for-you, custom service, not off-the-shelf software.

**Founder access:**
Needs a local, Arabic- and Somali-speaking partner. A non-local solo founder could not realistically sell this.

**Risks:**
- Extreme buyer concentration.
- Relationship-driven trade.
- Gulf import bans after disease outbreaks (Rift Valley fever) can stop volume overnight *(historical pattern, not searched this session)*.

**Kill condition:**
Kill the idea if either is true:
- There are fewer than about 10 independent exporters.
- The quarantine operator already issues digital consignment records.

**Score:** 2/10

**Sources:**
- https://www.lanationdj.com/centre-dexportation-betail-damerjog-record-en-record/
- https://www.lanation.dj/le-ministre-de-lagriculture-au-coeur-du-dispositif-sanitaire-a-damerjog/
- http://www.maem.dj/index.php?id_page=4

## 3. Rejected

- **Khat import tax and licence compliance.** Killed by concentration. Imports run through a few licensed importers, historically the SOGIK monopoly. Per-kg taxes are collected at entry by the state. Retail vendors have no filing obligation. Sources: https://documents1.worldbank.org/curated/en/732701468247481705/pdf/628230FRENCH0P0KHAT0Banque0mondiale.pdf , https://www.icij.org/investigations/collateraldamage/qats-soothing-effects-mask-its-true-roles-revenue-and-control/ , https://prame.openum.ca/2025/10/15/khat-et-geopolitique-a-djibouti/
- **Household employer CNSS / payslips for domestic workers.** Not verified because the search was refused. It is likely killed by informality: migrant domestic workers are largely undeclared *(unverified)*. The formal remainder is too small. The general payroll case is already covered (and scored 3/10) in the country report.
- **All other seed groups** (scrap, second-hand, beekeeping, field trades, tattoo, childminders, cemeteries). I found no register regime and the populations are tiny. These were not searched.

## 4. Method notes

- French regulator-first queries worked: "exportation bétail certificat vétérinaire Damerjog" surfaced the state newspaper (La Nation) and the ministry. "khat importation licence" surfaced World Bank and WTO documents.
- In Djibouti, the "regulator trail" leads to **one state-linked choke point per sector** (Damerjog, SOGIK, DPCS/DPFZA), not to registers of many small operators. That structure is itself the finding.
- The real fragmented operator base for both livestock and khat is in Somaliland and Ethiopia. Those are the markets to research for these chains.
- Searching was cut short by a usage limit after 3 calls.
