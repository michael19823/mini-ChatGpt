# C0867 — Senegal: DGID e-invoicing for SMEs (accountant-side bridge)

## Verdict and score
**Still closed (premature): 3.6/10.** As of October 2026 the DGID still has not published the
implementing order (arrêté), the technical spec or the API. Every dated calendar ("100M FCFA from
Jan 2026, 30M from Jul 2026") traces back to kolonell.com, a local invoicing SaaS selling into this
exact mandate. Another kolonell post says e-invoicing is *not yet mandatory* in 2026 and points to
2027-2028. Nothing can be built until the spec exists. When it is published, the integration route
(public portal, approved platform or certified machine) will decide whether a small vendor can
take part at all.

## What changed versus the Sonnet evidence
- Sonnet looked only at Sage and called it "beatable". That holds for Sage, but the competitor
  list was incomplete. Local SaaS tools (Kolonell, Yobantel, Gescom, IBiz/Easybiz) already market
  "DGID-compliant" invoicing at 12,000–25,000 FCFA/month, according to kolonell, which is
  unverified and self-interested.
- The rejection premise ("spec not published") still holds one year on. No arrêté, no API and no
  postponement notice turned up in any search. The mandate's timing is effectively unknown.
- Kolonell's own posts contradict each other on dates, which confirms that the only "calendar" in
  circulation is marketing content.

## Competitors (corrected)
| Competitor | Type | Status |
|---|---|---|
| Sage (Saari ~45k FCFA/mo, Sage 50 ~38k FCFA/mo, Sage 100) | Accounting/ERP incumbent; already shipped an e-invoice compliance product in Côte d'Ivoire (Dec 2025) | Strong in accounting firms; will extend once the spec is out |
| Kolonell, Yobantel | Local invoicing SaaS, 12–25k FCFA/mo (unverified) | Positioned on the mandate with heavy SEO |
| Gescom, IBiz/Easybiz | Local invoicing/commercial-management tools | Unverified |
| DGID "portail public de facturation" | Free State portal named in the Finance Law | Not live; the likely free fallback for small firms |
| International e-invoicing platforms (Comarch, e-invoice.app and others) | Watching the market | Will connect for multinationals |

## Barriers
- No spec or arrêté, so nothing can be built yet.
- The law allows issuance only through a public portal, an *administration-approved* platform or
  *authorised* invoicing machines. An approval or certification step is likely.
- A free government portal for small firms is written into the law.
- A small market: roughly 200+ chartered accountants (ONECCA), many using Sage.

## Buyer and price
The buyer would be a Dakar accounting firm handling 20–100 VAT-registered SME clients. The price
anchor is local SaaS at 12–25k FCFA/month (~€18–38) per company, against Sage at 38–45k
FCFA/month. A firm-level bulk-submission and reconciliation tool might reach 50–150k FCFA/month,
but that is unverified because the workflow doesn't exist yet.

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 5 | Penalties of 50k FCFA/invoice are announced, but no obligation is live yet |
| 2 | Frequency | 8 | Per invoice, monthly VAT reconciliation |
| 3 | Mandatory | 6 | In law, but with no implementing order or dates |
| 4 | Fragmentation | 2 | A single national platform |
| 5 | Competition | 3 | Sage plus several local SaaS tools are already positioned; free portal planned |
| 6 | Incumbent gap | 3 | Unknown until the spec exists; reconciliation gap is speculative |
| 7 | Buyer accessibility | 6 | ONECCA register, DGID taxpayer-centre events |
| 8 | Willingness to pay | 3 | Low price points (≈€20–40/mo) |
| 9 | MVP simplicity | 2 | Can't start without a spec; possible approval requirement |
| 10 | Distribution | 4 | Accountant networks are reachable, but Sage resellers own them |
| | **Overall** | **3.6** | Premature and gated; recheck when the arrêté and API spec are published |

## Sources
- https://www.vatcalc.com/senegal/senegal-2025-e-invoicing-mandate/
- https://www.comarch.com/trade-and-services/data-management/legal-regulation-changes/senegal-moves-towards-mandatory-e-invoicing/
- https://www.sage.com/fr-ma/blog/senegal-les-nouvelles-obligations-de-la-facturation-electronique/
- https://kolonell.com/fr/blog/facturation-electronique-normalisee-dgid-senegal-2026 (marketing, unverified)
- https://kolonell.com/fr/blog/facturation-electronique-senegal-outils-2026 (marketing, unverified; "not yet mandatory in 2026")
- https://kolonell.com/fr/blog/logiciel-facturation-pme-senegal-comparatif-2026 (prices, unverified)
- https://en.wikipedia.org/wiki/Ordre_National_des_Experts_Comptables_et_Comptables_Agr%C3%A9%C3%A9s_du_S%C3%A9n%C3%A9gal
- research/revisit/competitors/senegal--sage.md
- Searches used: 5 of 8.
