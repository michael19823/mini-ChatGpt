# Myanmar: Offline-Industries Pass

**Research date:** 2026-10-05 · **Searches used:** 7 of 8 · **Market status:** inaccessible / conflict-affected (see `research/countries/myanmar.md`)

**Verdict: no opportunity recommended.** The country report's accessibility blockers apply just as much to quiet industries, and in some cases more. Myanmar is on the FATF "call for action" list. Stripe, Paddle and card processors don't serve it. The 2025 Cybersecurity Law imposes data-retention and disclosure duties on platforms. And customers need sanctions screening. Quiet industries add more problems: cash-based operators, rules issued by decree, and regulators that are often the counterparty in enforcement actions (arrests, licence revocations). This report records the screen so the gap is documented. One candidate is written up for the record and scored low.

---

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Overseas employment agencies (recruiters of migrant domestic workers, factory workers and others) | Agency licence from the Department of Labour, renewed every 1–2 years. Per-worker demand-letter approval, OWIC card, and online departure permission at least 5 working days before departure. Monthly demand-letter quotas per destination (2025). | OWIC applications are sent **by post** and processed weekly (about 100 per week). Incomplete applications are rejected at the counter. The licence file is a paper dossier (NRC copies, household registration, police clearance, photos in traditional dress). | **634 licensed agencies** (Myanmar Labour News / BNI) | Weak candidate (below) | This is real per-worker paperwork pain, but the bottleneck is the ministry's own throughput and policy freeze, not the agencies' data entry. |
| Households as employers (domestic workers in Myanmar) | Effectively none enforced. SSB covers enterprises, not households. | Fully informal. | No register | Reject | There's no mandatory filing to automate. |
| Pawnbrokers | Licence or auction-granted right from township or city development committees. A state pawnshop system has existed since 1952. | Licences are auctioned locally and records are paper ledgers (unverified). | No public register found | Reject | Rules are local, opaque and auction-based, and the operators are cash-only. Nothing is published to build on. |
| Gold shops / gold dealers | Daily reference price set by the Mineral (Gold) Reference Price Determination Committee. Commercial tax on gold sales (revised Oct 2024). Import/export only by LC (Notification 10/2020). | Enforcement takes the form of **arrests**: in Feb 2026 the chair, vice-chair and secretary of the Yangon Region gold dealers' association were arrested for trading above the reference price. | Association membership is unknown | Reject | Compliance here is about price controls policed by arrests. No software product changes that, and the reputational and legal risk is high. |
| Money changers | Licence from the Central Bank of Myanmar under the Foreign Exchange Management Law, plus CBM directives on rates. | 166 licences revoked between Mar and Sep 2024 for "failing to comply with directives". | Total licensed is unknown (166+ revoked) | Reject | The sector is shrinking by decree, and FATF and sanctions exposure is maximal. |
| Scrap metal / second-hand dealers | No police-register regime found. | n/a | Unknown | Reject | No evidence of an obligation. |
| Slaughterhouses and butchers | The Animal Health and Livestock Development **Amendment Law 2025** replaces the permit with a **registration certificate** from the township Livestock Breeding and Veterinary Department (LBVD). | Registration is at the township office. No e-portal was found. | Unknown (thousands of township butchers, an estimate) | Reject | The 2025 change *simplifies* compliance (permit to registration), so there's no recurring reporting pain and the buyers are cash-based. |
| Cattle exporters | LBVD recommendation certificate, then a herd check and animal health certificate, then an export licence from the Commerce Ministry. | Multi-step paper process across two ministries. | Small and unknown | Reject | Exports are concentrated in a few traders, partly at conflict-affected border routes. |
| Fertiliser dealers | Distribution and sale licence (Form 15/16) from the State/Region Department of Agriculture. MMK 50,000 per 2 years. | Mostly forms, though **MAIRS** (Myanmar Agricultural Inputs Registration System) now takes applications online. | Unknown | Reject | A government system (MAIRS) already exists, renewal is every 2 years, and the fee is tiny, which signals low willingness to pay. |
| Pesticide shops | Licence under the Pesticide Law 2016 (Form 4 for formulation and sale). Pesticide Registration Board via the Plant Protection Division. | Paper forms, plus MAIRS. | Unknown | Reject | Same as fertiliser. Sales registers exist on paper, but there's no reporting cadence that would justify software. |
| Thingyan pandal and festival permits | Auctioned by city development committees (Mandalay). | Annual auction. | n/a | Reject | It happens once a year. |
| Minibus, moto-taxi and street vendors | Municipal (YCDC/MCDC) and regional licences. | Cash and in person. | Unknown | Reject | Informal, and the buyers can't pay foreign SaaS. |

---

## 2. Strongest opportunities

No opportunity meets the brief's Final Decision Rule. The candidate below is written up only because it shows the clearest offline paperwork pain in Myanmar.

### Opportunity: Worker-file and OWIC pipeline tracker for overseas employment agencies

**Industry:**
Licensed overseas employment agencies (labour export to Thailand, Malaysia, Japan, Korea, Singapore)

**Buyer:**
Owner or documentation officer of a licensed agency in Yangon or Mandalay

**Trigger / Why now:**
In 2025 the Ministry of Labour set monthly demand-letter quotas per agency and destination (Thailand 50, Malaysia 20, Japan 15, Korea 10, Singapore 5, others 10). The MOEAA has frozen new demand letters until backlogs clear. About 70,000 contracted workers are waiting for OWIC cards, which are processed at about 100 per week. Departure permission must be requested online at least 5 working days before departure.

**Current workflow:**
1. The agency collects each worker's NRC, household registration, photos, medical report and police clearance on paper.
2. It submits demand letters within its monthly quota, then sends OWIC applications by post or in person.
3. Applications that are incomplete are refused. The agency re-collects documents and tracks status by phone with the Department of Labour.
4. It files online departure permission at least 5 days before the flight and coordinates with the destination-country agency.

**Pain:**
Per-worker document chasing, rejected incomplete applications, and backlogs that agencies say cause "major disruptions and financial losses". The licence itself needs K100 million in capital and renewal 2 months before expiry.

**Existing solutions:**
Excel and paper files kept by in-house staff. MOEAA circulars. Destination-side systems (for example Thailand's MOU process and Japan's TITP supervising organisations) handle their own end. No Myanmar-specific agency software was found (only 7 searches, so this isn't conclusive).

**Offline evidence:**
OWIC applications are sent by post, approval batches happen weekly, there are counter rejections for incomplete files, and the licence dossier includes photos in traditional dress and criminal clearance taken in person.

**Offline channel:**
The Myanmar Overseas Employment Agency Association (MOEAA), which circulates notices to all members. Agency lists are published by the Department of Labour.

**Market count:**
634 licensed agencies (Myanmar Labour News).

**The gap:**
A per-worker document checklist and status board matched to quotas and the ministry's completeness rules. But the binding constraint is the ministry's weekly throughput and policy freezes, which software can't fix.

**Possible product:**
A Burmese-language worker-file tracker: a checklist per worker, document expiry alerts (police clearance is valid for 1 month, photos for 6 months), tracking of the quota per destination, and a departure-permission deadline reminder.

**MVP:**
A shared spreadsheet template or a light web app per agency, plus a document-validity checker.

**Pricing hypothesis:**
Estimate: USD 20–50 per month per agency, payable in MMK only. Buyers would more likely pay for a done-for-you document service than for software.

**How to find first customers:**
The MOEAA member list and the Department of Labour's licensed-agency list.

**Risks:**
- Payments can't reach a foreign founder (FATF blacklist, no card processors).
- Worker personal data falls under the 2025 Cybersecurity Law's platform retention and disclosure duties, which matters because the workers include conscription-age men facing departure bans.
- Policy changes by decree. Since 2024 men aged 18–35 have reportedly been blocked from departing.
- Founder access: this **needs a local partner**. A non-local solo founder can't realistically sell or collect payment.

**Kill condition:**
Agencies say the delay is entirely on the ministry side (most likely), or no way exists to collect payment outside Myanmar.

**Score:** 3/10 (Pain 6, Frequency 7, Mandatory 8, Fragmentation 3, Competition 7 (no competitors), Incumbent gap 3, Buyer access 6, WTP 2, MVP 7, Distribution 4 (via the association). Inaccessibility caps the score.)

**Sources:**
- https://www.myanmarlabournews.com/en/posts/over-600-agencies-have-now-obtained-licenses-for-sending-workers-abroad
- https://www.bnionline.net/en/node/14076
- https://asean.org/wp-content/uploads/2026/06/Registration-of-Overseas-Employment-Agency-license.pdf
- https://myanmarlabournews.com/en/posts/overseas-employment-agencies-to-submit-concerns-on-deployment-restrictions-to-ministry
- https://www.myanmarlabournews.com/en/posts/owic-card-applications-sent-via-post-still-not-approved-sources-say
- https://myanmarlabournews.com/en/posts/incomplete-applications-not-accepted-for-owic-card-processing-say-workers-left-in-limbo
- https://www.myanmarlabournews.com/en/posts/new-recruitment-will-only-be-accepted-after-sending-contracted-workers-abroad
- https://myanmarlabournews.com/en/posts/men-aged-18-to-35-with-signed-overseas-contracts-reportedly-not-permitted-to-depart
- https://english.dvb.no/migrant-workers-to-expect-delays-under-regimes-new-restrictions/

---

## 3. Rejected

- **Slaughterhouse and butcher registration (Amendment Law 2025):** the regulation moved from permit to registration certificate, so the burden went down, not up. There's no recurring filing.
- **Fertiliser and pesticide dealer licensing:** the government's **MAIRS** portal already handles applications, the licence is renewed every 2 years for MMK 50,000, and willingness to pay is very low.
- **Gold dealers:** compliance means following the reference price, which is enforced by arresting association leaders (Feb 2026). Software can't help, and the legal and reputational exposure is high.
- **Money changers:** CBM revoked 166 licences in 2024. The sector is shrinking by decree and FATF exposure is extreme.
- **Pawnbrokers and festival permits:** local auctions, cash-only, no public register.
- **Household employers:** no enforced obligation.

## 4. Method notes

English queries pointing at regulator sources worked: the Myanmar Trade Portal (official forms), DFDL, Tilleke and Lincoln legal bulletins, and Myanmar Labour News for enforcement and backlog evidence. Exile media (DVB, BNI, Myanmar Now, DMG) were the main enforcement evidence. Burmese-language queries weren't tried because the budget was 8 searches, so that's a gap. No licensing register with operator counts was found except the overseas-agency count. Further research isn't justified while payment rails and sanctions block the market.

## Sources (other)

- Slaughterhouse registration, Amendment Law 2025: https://www.dfdl.com/insights/legal-and-tax-updates/myanmar-the-animal-health-and-livestock-development-amendment-law-2025-key-regulatory-changes-and-implications-for-businesses/
- Cattle export process: https://www.thecattlesite.com/news/52896/companies-to-be-asked-to-start-breeding-cattle-for-export
- Fertiliser licence forms and MAIRS: https://myanmartradeportal.gov.mm/form/101 ; https://myanmartradeportal.gov.mm/form/102 ; https://myanmartradeportal.gov.mm/print/procedure/56/description
- Pesticide Law 2016 and licensing: https://leap.unep.org/en/countries/mm/national-legislation/pesticide-law-pyidaungsu-hluttaw-law-no-14-2016 ; https://www.tilleke.com/insights/regulatory-pathway-for-pesticide-registration-in-myanmar/4/
- Gold import/export rule: https://www.myanmartradeportal.gov.mm/announcement/2134 ; gold dealer arrests Feb 2026: https://bernama.com/tv/news.php?id=2521025 (as summarised by the search result, unverified in full)
- Money changer revocations: https://www.bnionline.net/en/node/100502 ; https://myanmar-now.org/en/news/myanmar-regime-revokes-more-than-100-companies-currency-exchange-licences/
- State pawnshop history: https://frd.gov.mm/about/history
- Festival permit auctions: https://opendevelopmentmekong.net/news/high-biddings-for-thingyan-pandal-permit-auction/
