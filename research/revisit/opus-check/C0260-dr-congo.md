# C0260 — DR Congo: facture normalisée issuance for SAP/Sage/Odoo users

## Verdict and score
**Still closed: 3.5/10.** All three named competitors were unverifiable, as Sonnet found: ADE Labs
appears to be a Benin e-MECeF module, and DEGE ERP and DexyCG are not findable. But that is a
naming error in the triage list, not an open market. The DGI's own figures, reported by
actualite.cd and others, show that by late 2025 **93 software solutions had validated their e-MCF
integration**, 12 had full integration with physical MCFs, and 957 actors were in the SFE
homologation process (617 active test accounts). There is at least one named Odoo provider,
BVORTEX SARL, presented as a DGI-approved SFE for every Odoo version. SAP's DRC partners
(Innowise and others) market e-invoicing modules, and the DGI gives the e-UF and e-MCF away free.
Each billing system also needs DGI homologation, with a file, a commission and in-person presence
in Kinshasa, which is a heavy barrier for a foreign solo founder. The issuance side is a
crowded commodity.

The **purchase-side check** (bulk-verifying received invoices before deducting VAT) is a
different idea, already scored separately in the country report as an opportunity (6/10). It is
not revived by this check; it stands on its own.

## What changed versus the Sonnet evidence
- Sonnet's "not-a-real-competitor" verdicts were correct for those names, but the market was
  never empty. The real competitors are the 93 integrated solutions, local Odoo integrators
  (BVORTEX) and the free DGI e-MCF. Sonnet's conclusion that "the gap is open" does not hold.
- Sanctions started on 15 May 2026, so the companies that need a connector have had to get one
  by now. The window for issuance connectors has passed.

## Competitors (corrected)
| Competitor | Type | Status |
|---|---|---|
| 93 e-MCF-integrated billing solutions (DGI count, late 2025) | Local and international software vendors | Validated |
| BVORTEX SARL | Odoo facture-normalisée module, presented as DGI-approved SFE | Active (search snippet; unverified detail) |
| SAP DRC (Document & Reporting Compliance) + partners (e.g. Innowise) | SAP e-invoicing | Marketed for DRC |
| DGI free e-UF / e-MCF | Free government tool | Live |
| 5 approved physical-MCF device suppliers | Hardware | Live |
| ADE Labs, DEGE ERP, DexyCG | Named in the report | Not found or not DRC (Sonnet; confirmed) |

## Barriers
- DGI homologation per system: a physical file, a review commission and in-person presence.
- A free DGI e-MCF and e-UF.
- Sanctions have been live since 15 May 2026 (fines of 10M CDF per non-standard invoice), so most
  large firms already have a connector.
- Frequent DGI rule changes (taxation groups, re-approval in Feb 2026).

## Buyer and price
The buyer is the finance or IT lead at a mid-size Kinshasa or Lubumbashi company running Sage,
Odoo or SAP. The price anchor is about US$380 one-off for a comparable West African Odoo e-MCF
module (the Benin module on Odoo Apps). Integrator services are project-priced (unverified).

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 6 | Fines and lost deductions are real, but most firms are already connected |
| 2 | Frequency | 9 | Per invoice |
| 3 | Mandatory | 9 | Sanctions in force since 15 May 2026 |
| 4 | Fragmentation | 3 | One DGI spec; variation only by ERP |
| 5 | Competition | 2 | 93 integrated solutions plus free DGI tools |
| 6 | Incumbent gap | 2 | Issuance is solved; only niche legacy systems remain |
| 7 | Buyer accessibility | 5 | FEC membership, DGI large-taxpayer lists |
| 8 | Willingness to pay | 5 | Firms pay for connectors, but one-off and low |
| 9 | MVP simplicity | 3 | Homologation with in-person steps |
| 10 | Distribution | 3 | Local integrators already own the relationships |
| | **Overall** | **3.5** | Crowded, certification-gated issuance market; see the separate purchase-side idea |

## Sources
- https://actualite.cd/2025/12/27/rdc-jusquau-24-decembre-54-207-factures-normalisees-ont-ete-emises-par-3-289 (homologation counts via search snippet)
- https://www.mediacongo.net/article-actualite-163603_facture_normalisee_en_rdc_le_gouvernement_annonce_la_fin_du_moratoire_et_le_debut_des_sanctions_des_le_15_mai.html
- https://lookuptax.com/tax-changes/congo-kinshasa/normalised-invoice-moratorium-end-2026
- https://www.voxelgroup.net/normativa/guias/democratic-republic-of-the-congo/ (BVORTEX Odoo mention via search snippet)
- https://innowise.com/blog/sap-drc-e-invoicing/
- https://actualite.cd/2025/07/29/rdc-debut-officiel-de-la-generalisation-de-la-facture-normalisee-des-ce-1er-aout
- https://fec-rdc.com/wp-content/uploads/2025/08/TABLEAU-RENCONTRANT-LES-PREOCCUPATIONS-TECHNIQUES-ET-OPERATIONNELLES-DES-ENTREPRISES-PAR-RAPPORT-A-LA-MISE-EN-OEUVRE-DE-LA-REFORME-SUR-LA-FACTURE-NORMALISE-1.pdf
- research/revisit/competitors/dr-congo--{ade-labs-odoo-module,dege-erp,dexycg}.md
- Searches used: 6 of 8.
