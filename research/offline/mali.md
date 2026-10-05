# Mali: Offline-Industries Pass

**Date:** 2026-10-05 · **Research depth:** very shallow. Two WebSearch calls succeeded. The third was refused ("usage limit"), so research stopped there as the instructions require. Anything not backed by a source below is marked **unverified** or **estimate**.

**Context:** the existing country report (`research/countries/mali.md`) found Mali legally reachable (sanctions are targeted, not sectoral) but practically hostile for a foreign solo founder. The reasons were the JNIM fuel blockade since Sep 2025, insecurity, the military government, the AES/ECOWAS realignment and payment friction. Nothing in this pass changes that verdict.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Gold-buying counters (*comptoirs d'achat et d'exportation d'or*) | Keep a purchase and sale register that the Commercial Court stamps and initials, recording every transaction in order. The register is open to inspection by the Direction Nationale de la Géologie et des Mines (DNGM) and economic services. The counters also report quantities bought to DNGM every six months ([FAOLEX mli49670](https://faolex.fao.org/docs/pdf/mli49670.pdf), [FAOLEX mli156234](https://faolex.fao.org/docs/pdf/mli156234.pdf)) | The register is a physical book stamped by a court, which is paper by definition | Unknown. Artisanal and small-scale mining produced 7.1 t of gold in 2025 ([APA News](https://fr.apanews.net/?p=288801)) | Hypothesis, see below | Real regulatory trigger: a new **Office Malien des Substances Précieuses** was created in Mar 2026 ([APA News](https://fr.apanews.net/?p=288801), [AllAfrica](https://fr.allafrica.com/view/group/main/main/id/00097384.html)). But the sector is politicised, AML-sensitive and high-risk |
| Livestock exporters and traders | Every export of live animals or meat needs a health and zoo-sanitary certificate from the livestock ministry ([UNIDO doc](https://downloads.unido.org/ot/46/82/4682779/00001-10000_00300D.pdf), [WTO QR 10590](https://qr.wto.org/en/qrs/10590)) | Certificate issued at a vet office (paper, **unverified**) | Unknown (**unverified**) | Reject for now | Done per shipment by state vets. The trader pays a fee and a broker, not software. Export corridors are disrupted by the blockade and the AES split |
| Domestic workers (household employers) | INPS registration and contributions (**unverified**) | No evidence: the search was refused | Unknown | Unresearched | Enforcement is almost certainly negligible. Most such work is informal (**estimate**) |
| Scrap metal / second-hand / pawnbrokers | Not found | No evidence | Unknown | Unresearched | No search budget left |
| Moto-taxi / minibus (SOTRAMA) operators | Municipal and transport licensing (**unverified**) | No evidence | Unknown | Unresearched | No search budget left |
| Money changers | BCEAO approval for manual foreign-exchange dealers (**unverified**) | No evidence | Unknown | Unresearched | Mobile money and the BCEAO's own reporting probably dominate |
| Pesticide sellers | Approval by the Comité Sahélien des Pesticides (CSP); dealer licensing (**unverified**) | No evidence | Unknown | Unresearched | Regional (CILSS) regime. Not checked |
| Abattoirs / butchers | Veterinary inspection (**unverified**) | No evidence | Unknown | Unresearched | Mostly municipal or state abattoirs (**unverified**) |
| Shea / gum arabic exporters (Mali-specific) | Phytosanitary and origin certificates (**unverified**) | No evidence | Unknown | Unresearched | Possible EU-buyer traceability pull. Not checked |

## 2. Strongest opportunities

Nothing clears the bar. The single hypothesis below is recorded so that a future UEMOA/AES pass can test it.

### Opportunity: Gold-counter register and DNGM/OMSP reporting book (hypothesis)

**Industry:**  
Artisanal gold trading: licensed gold-buying and export counters

**Buyer:**  
Owner or manager of a licensed *comptoir d'achat et d'exportation d'or* in Bamako or Kayes/Sikasso (**unverified** locations)

**Trigger / Why now:**  
The Council of Ministers created the Office Malien des Substances Précieuses in March 2026 to regulate the trade in gold from artisanal and small-scale mining ([APA News](https://fr.apanews.net/?p=288801), [AllAfrica](https://fr.allafrica.com/view/group/main/main/id/00097384.html)). A new regulator usually brings new reporting formats, but the details are **unverified**.

**Current workflow:**  
1. The counter records each purchase (seller, weight, purity, price) in a paper register stamped by the Commercial Court ([FAOLEX](https://faolex.fao.org/docs/pdf/mli49670.pdf)).  
2. It compiles quantities bought and sends them to DNGM every six months ([FAOLEX](https://faolex.fao.org/docs/pdf/mli49670.pdf)).  
3. DNGM or economic-service agents inspect the register on site.  
4. Export declarations go separately to customs and, from now on, presumably to the OMSP (**unverified**).

**Pain:**  
Not evidenced. No complaints, fines or inspection campaigns were found because the search budget ran out.

**Existing solutions:**  
The court-stamped paper register (sold by stationers, **unverified**), accountants, and whatever system the OMSP introduces. No software listings were found, but none were searched for.

**Offline evidence:**  
The law requires a physical register stamped by the court. Reports go to DNGM by mail or at the counter (**unverified**).

**Offline channel:**  
The DNGM's list of authorised counters, and a gold-dealers' association if one exists (**unverified**).

**Market count:**  
Unknown. Possibly tens to low hundreds of licensed counters (**estimate**).

**The gap:**  
Unknown. If the OMSP becomes the sole buyer or exporter, the counter's reporting burden may disappear rather than grow.

**Possible product:**  
A digital purchase ledger that mirrors the legal register and produces the six-monthly DNGM report and the OMSP export file.

**MVP:**  
An offline-first mobile ledger with a PDF export in the DNGM report format.

**Pricing hypothesis:**  
USD 30–80 per month per counter (**estimate**). Counters handle high-value goods, so they can afford it, but they may not want a digital trail.

**How to find first customers:**  
The DNGM/OMSP list of approved counters (**unverified** that it is public).

**Risks:**  
AML and sanctions exposure (artisanal gold is a well-known conflict and illicit-finance channel). Buyers may prefer paper because it leaves less of a trail. The OMSP may centralise the trade. The physical and payment risks in Mali are severe. A non-local founder cannot realistically sell this: it would need a local partner, and even then the reputational and compliance risk is high.

**Kill condition:**  
The OMSP takes a buying or export monopoly or ships its own system, or fewer than 50 licensed counters exist.

**Score:** 2/10

**Sources:**  
[FAOLEX mli49670](https://faolex.fao.org/docs/pdf/mli49670.pdf), [FAOLEX mli156234](https://faolex.fao.org/docs/pdf/mli156234.pdf), [APA News](https://fr.apanews.net/?p=288801), [AllAfrica](https://fr.allafrica.com/view/group/main/main/id/00097384.html)

## 3. Rejected

- **Livestock export certificates:** the certificate is issued per shipment by state vets. The trader's cost is a fee plus a broker, not something software replaces. Export corridors are disrupted (blockade, AES/ECOWAS split).
- **Every other seed group:** not rejected on the merits, only unresearched. Search was refused after 2 calls.

## 4. Method notes

- French regulator queries with "registre" plus "obligation" found the legal text on FAOLEX right away. FAOLEX looks like the best source for Malian sector regulation.
- Livestock queries returned mostly foreign import certificates (US APHIS, Brazil, Canada), which were not useful. Next time, add "DNSV" (Direction Nationale des Services Vétérinaires) to the query.
- The search quota was exhausted on the 3rd call, so this report is a stub. Given the country-level verdict (practically inaccessible), it is not worth re-running before a UEMOA-wide pass.
