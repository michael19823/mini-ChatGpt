# Cuba: Offline-Industries Pass

**Researched:** 2026-10-05 · **Searches used:** 0 of 8 succeeded. All 3 attempted searches were refused with a usage-limit error, so per the instructions I stopped searching and wrote up what I had.
**Verdict:** **No opportunity recommended.** The quiet-industry screen below is a desk screen built on the accessibility findings in `research/countries/cuba.md`. Every count and obligation that does not come from that report is marked **unverified**.

---

## 0. Why this report is short

The existing country report already found Cuba **inaccessible** to a foreign solo founder, and nothing in a quiet-industry framing changes that:

- **Sanctions.** US persons face the reinstated Cuba Restricted List (Feb 2025) and NSPM-5 (Jul 2025). Per search summaries cited in the country report, E.O. 14404 created new Cuba Sanctions Regulations (31 CFR 516), effective 30 Sep 2026. Whether SaaS sales to private Cubans remain authorised is unverified.
- **Payment rails.** No Stripe, PayPal or US cards. Buyers hold CUP or restricted MLC accounts. (Unverified this session, but widely known.)
- **State control of the system of record.** MINCOM certifies the accounting and financial software that counts as valid, and every product on that list comes from a state entity (VERSAT SARASOLA, Zun Suite).
- **Who the regulators are.** In quiet industries the "receiving authority" is usually a state enterprise or ministry that also *is* the buyer or the only counterparty, for example state recycling enterprises, state livestock purchasing, or ETECSA. A foreign tool cannot plug into those workflows.

Quiet industries make this worse, not better. Their operators are the least likely to have foreign currency or reliable internet. They are also the most likely to deal only with a single state counterparty that has its own paper procedures.

---

## 1. Quiet industries screened

| Industry | Obligation (as generally understood; unverified this session) | Evidence it's offline | Rough count | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households as employers (domestic workers, cuidadores) | Domestic work is a licensed self-employment activity; the worker registers with ONAT and pays social-security contributions | Counter filing at ONAT and municipal labour offices (unverified) | Unknown | Reject | The obligation sits on the self-employed worker, not the household, and the fees are tiny CUP amounts. Nothing to pay for. |
| Scrap metal / raw-material recovery | Sale of recovered materials channelled to state recovery enterprises (Empresa de Recuperación de Materias Primas) | State enterprise buying points, paper receipts (unverified) | Unknown | Reject | Single state counterparty sets the process; no private software buyer. |
| Second-hand goods / pawn / gold buyers | Private gold and pawn trade is largely not a legal activity (unverified) | n/a | n/a | Reject | No legal licensed population to sell to. |
| Livestock farmers / cattle | Cattle registry and movement controls; slaughter and sale are state-controlled (unverified) | Paper livestock registers kept through state and cooperative structures (unverified) | Unknown | Reject | Tightly state-controlled; the registry is the state's own. Farmers have no foreign-currency budget. |
| Beekeepers | Honey sold to a state exporter (unverified) | Paper records through cooperatives (unverified) | Unknown | Reject | Export traceability sits with the state exporter, not with small producers. |
| Small abattoirs / butchers (mipymes) | Sanitary licence, inspections by the public-health and veterinary authorities | Paper sanitary licences (unverified) | Unknown | Reject | Same payment and legal blockers as all mipymes. |
| Veterinary medicines / antimicrobials | State-run veterinary system | n/a | n/a | Reject | No private clinic market to speak of (unverified). |
| Well drillers / septic / water | State water utility (INRH, Aguas de La Habana, etc.) | n/a | n/a | Reject | No private licensed population that files to a utility. |
| Taxi / almendrón / moto-taxi operators | TCP licence, route and fare rules, ONAT tax | Counter licensing; fares are set by provincial bodies (unverified) | Unknown (likely tens of thousands; estimate) | Reject | Real paper burden, but there is no billing channel and the buyers pay in CUP. A WhatsApp or Telegram group is the free substitute. |
| Street vendors / market traders (carretilleros, kiosks) | TCP licence, ONAT monthly/annual tax, price caps | Counter filing (mipymes went digital-only in 2024; status for TCPs unverified) | Unknown | Reject | Very low ability to pay; free substitutes; frequent price-cap enforcement makes the operators a risk to deal with. |
| Barbers / hairdressers / tattoo | TCP licence, sanitary inspection | Paper licences (unverified) | Unknown | Reject | No recurring structured reporting worth software. |
| Fishermen selling own catch | Licences through the fisheries ministry; private sale heavily restricted (unverified) | n/a | Unknown | Reject | Legal channel is narrow and state-controlled. |
| Cemeteries / funeral services | State-run (Servicios Comunales) | n/a | n/a | Reject | No private operator market. |
| Religious bodies (churches, Afro-Cuban religious houses) | Registration with the Office of Religious Affairs (unverified) | Paper | Unknown | Reject | Politically sensitive; no compliance software need. |

**Country-specific groups added from registers:** none. The registers could not be searched, and the "licensing registers" in Cuba are state-held and not public in usable form (unverified).

---

## 2. Opportunities

**None.** No quiet industry in Cuba passes the brief's final decision rule. The common failure points:

- **Distribution:** no concrete offline channel a foreign founder can legally use. Associations are state-affiliated, for example ANAP for farmers and ANEC for accountants.
- **Willingness to pay:** buyers have no means to pay foreign SaaS or hard-currency services.
- **Founder access:** a non-local founder cannot realistically sell here. Even a local founder would be selling CUP-priced services against free substitutes.

---

## 3. Rejected

- **Domestic-worker payroll and social security:** rejected because the obligation and payment burden are tiny and sit on the worker.
- **Scrap and recovery dealer register:** rejected because the state recovery enterprise is the only buyer and sets the paperwork.
- **Livestock movement and registry helper:** rejected because the registry is state-run and farmers have no budget.
- **Taxi and street-vendor licence/tax helper:** the burden is real, but there is no payment rail and the free substitute is WhatsApp or Telegram groups plus a contador.
- **All mipyme-facing ideas:** see the country report (MINCOM-certified software, sanctions, payment rails).

---

## 4. Method notes

- All three regulator-first searches in Spanish (TCP counts, scrap recovery resolutions, livestock registry) were refused with a usage-limit error before returning results. Nothing in this report comes from a new search.
- Even with search, the regulator-first method probably doesn't work well in Cuba. The "registers" belong to state enterprises and ministries and are not published as public operator lists. The useful sources would be the Gaceta Oficial (gacetaoficial.gob.cu), ONAT notices, and independent media such as Directorio Cubano and CubaNet. Any rerun should start there.
- Recommendation: do not spend more budget on Cuba.

## Sources

No new sources this pass. The accessibility findings come from `research/countries/cuba.md`, which cites Federal Register 2024-11618 and 2025-02282, Steptoe on E.O. 14404, the MINCOM certified-software lists (Feb and Jul 2025), and Directorio Cubano on Res. 8/2024.
