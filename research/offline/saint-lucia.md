# Saint Lucia: offline (quiet) industries pass

**Context:** This is a microstate of about 180k people (estimate). English is the official language and the currency is XCD. The first-round report (`research/countries/saint-lucia.md`) found no viable standalone opportunity. Its best idea was an ECCU payroll and NIC filing layer, which this report does not repeat.

**Budget:** 8 WebSearch calls. Seven returned results and the eighth was refused for a usage limit, so I stopped there. I did not use WebFetch.

**Bottom line:** Saint Lucia has the expected quiet, regulated trades. Each of them deals with a single national counter: the Transport Division, the Fisheries Department, the Pesticides Board, the Castries Constituency Council (CCC) or a slaughterhouse board. Four facts kill the opportunity:
- each operator group is tiny;
- there is only one receiving authority, so nothing is fragmented;
- the obligations are mostly annual or biennial;
- the government is already moving services onto govt.lc service pages and portals.

I found **no opportunity that scores 4/10 or higher**. I wrote up one opportunity for the record only, as an OECS-wide add-on. It scores 2/10 standalone. That is the honest result.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Minibus (omnibus) operators | Route permit (EC$700, valid 2 years); approval by the Transport Board after a recommendation from the Route Association and the National Council on Public Transport; vehicle replacement and sale of permit rights are separate services | govt.lc service page lists counter hours 8am–2pm, a phone number and an email, and requires a police record and a defensive-driving certificate | Unknown. A few hundred to low thousands (estimate, unverified) | Reject | Renewal every 2 years is too infrequent. There is a single receiving body, and route associations act as the intermediary. |
| Fishers and fishing vessels | Fisher registration; vessel registration and licence; renewal by 31 March | Paper form plus photo ID copies, submitted at the Fisheries Department counter; fees "under review" | Unknown. Low thousands of fishers (estimate, unverified) | Reject | The obligation is annual, there is a single authority, and fishers have little money. Donor and FAO programmes do the registry work. |
| Pesticide dealers and pest control operators | Dealer's licence; premises licence with possible inspection; Pest Control Operator's Licence (Pesticides and Toxic Chemical Control Act, Cap. 11.15) | Ministry of Agriculture posts a PDF "Pesticide Application form" (2025) | Probably tens of dealers and PCOs (estimate, unverified) | Reject | Too few operators. The obligation is a licence, not a recurring report. |
| Butchers and slaughterhouses | Slaughterhouse certificate of registration ($100); licensed butcher must keep a register of all cattle slaughtered (Cattle Branding and Butchering Act) | The statute requires a paper register book; slaughter happens weekly at abattoirs around the island | Small, probably tens (estimate, unverified) | Reject | The register is a local book that nobody aggregates or files. The market is tiny. |
| Livestock farmers | Cattle branding; veterinary services; Livestock Master Plan in progress | Ministry PDFs only | Unknown | Reject | There is no recurring filing obligation that I could verify. |
| Market and street vendors (Castries) | CCC Vendors' Registration Programme: ID cards, job letters, tent packages, day schedules for the Boulevard | Run by the council in person; news coverage only, with no online portal found | Unknown. Hundreds (estimate, unverified) | Reject | The council does the admin. Vendors don't pay for software, and the benefits flow from the council. |
| Households employing domestic workers | NIC registration within 7 days; 5% + 5% NIC on the first XCD 5,000 a month; C3 schedule due on the 7th; minimum wage of XCD 6.52/h since 1 Oct 2024 | No household-specific guidance found; EOR vendor pages cover only formal employers | Unknown (unverified) | Weak | Monthly and mandatory, but the household pays tiny amounts, and NIC SmartSubmit (Apr 2025) covers filing. A done-for-you service might work; software won't. |
| Scrap metal dealers | No Saint Lucia–specific dealer register found; only general registers under the Licences (General) Act / NCA | Nothing found | Unknown | Reject (no evidence) | I could not find a regime. Trinidad has one; Saint Lucia apparently does not. |
| Second-hand goods, pawnbrokers, gold buyers | Not searched (budget) | — | — | Not screened | Budget ran out. |
| Water taxis, tour guides, beach vendors | Not verified: the search was refused | — | — | Not screened | Budget ran out. |
| Taxi operators (H-plates) | Not searched separately; probably the same Transport Division counter as minibuses | — | — | Not screened | Budget ran out. |

## 2. Strongest opportunities

None reaches a buildable threshold. One is recorded for completeness.

### Opportunity: OECS public-transport permit holder compliance tracker (Saint Lucia module)

**Industry:**  
Minibus and route-permit operators

**Buyer:**  
Route associations, or fleet owners holding several permits. Individual owner-drivers are unlikely to pay.

**Trigger / Why now:**  
I found no new 2025–2026 rule. The only trigger is the standing 2-year permit cycle plus vehicle replacement and the transfer of permit rights. It is weak.

**Current workflow:**  
1. The operator collects a police record, defensive-driving certificate and proof of vehicle ownership.
2. The operator gets a recommendation from the Route Association.
3. The operator applies in person at the Transport Division (8am–2pm) and pays EC$700.
4. The Transport Board approves; the operator must start running within 3 months.
5. The operator renews every 2 years, and files separate requests for vehicle replacement and sale of rights.

**Pain:**  
Document gathering and counter visits. I found no evidence of complaints or penalties.

**Existing solutions:**  
- The Transport Division counter and the govt.lc service pages;
- route associations, which act as informal intermediaries;
- WhatsApp groups (assumed, unverified).

**Offline evidence:**  
Applications are made in person, with counter hours and a contact email. Supporting documents are on paper. I found no portal.

**Offline channel:**  
Route associations, which the Transport Board must consult anyway. The National Council on Public Transport.

**Market count:**  
Unknown. I found no public register (unverified).

**The gap:**  
Deadline and document tracking for permit holders. The value is marginal.

**Possible product:**  
A WhatsApp or SMS reminder service, run by the association, for permit expiry, insurance and vehicle-inspection dates.

**MVP:**  
A spreadsheet-backed reminder list for one route association.

**Pricing hypothesis:**  
XCD 10–20 per permit per month through the association. Realistically, people would pay only for a done-for-you service.

**How to find first customers:**  
Through the route associations, introduced by the Transport Division.

**Risks:**  
- The market is tiny.
- There is no penalty evidence.
- The government may digitise the service on govt.lc.
- It needs a local presence: a non-local solo founder could not sell it.

**Kill condition:**  
Kill the idea if associations say renewals are not a problem, which is likely.

**Score:** 2/10

**Sources:**  
- https://infrastructure.govt.lc/services/apply-for-a-route-permit
- https://publicservice.govt.lc/services/renew-a-route-permit
- https://infrastructure.govt.lc/services/sell-my-route-permit-rights
- https://www.attorneygeneralchambers.com/laws-of-saint-lucia/motor-vehicles-and-road-traffic-act/section-54

## 3. Rejected

- **Fisher and vessel licensing helper:** the obligation is annual (31 March), there is one counter, and fishers have low ability to pay. FAO and donor programmes already support the registry. Sources: https://agriculture.govt.lc/services/fisher-registration , https://agriculture.govt.lc/services/renew-a-licence-for-a-fishing-vessel-local- , https://dofelibrary.govt.lc/category/fisheries-management/registration-of-fishers/
- **Pesticide dealer, premises and PCO licence compliance:** the obligation is real, but there are probably only tens of licensees and they file nothing recurring. The substitute is the PDF form from the Ministry and the Board. Sources: https://attorneygeneralchambers.com/laws-of-saint-lucia/pesticides-and-toxic-chemical-control-act/section-28 , https://moaslu.govt.lc/wp-content/uploads/2025/06/Pesticide-Application-form.pdf , https://pmd.govt.lc/statutory-body/pesticides-and-toxic-chemicals-control-board-ptccb/
- **Butcher slaughter register:** the statute requires a book, but nobody files it anywhere and the market is tiny. Sources: https://www.attorneygeneralchambers.com/laws-of-saint-lucia/cattle-branding-and-butchering-act/section-14 , https://www.govt.lc/news/ministry-of-health-meat-slaughter-guidelines
- **Castries vendor registration:** the council provides IDs and benefits, and vendors would not pay. Sources: https://thevoiceslu.com/2024/11/ccc-tackles-overcrowding-of-vendors-in-city-centre/ , https://thevoiceslu.com/2020/07/market-vendors-urged-to-keep-standards-high/
- **Household employer NIC and minimum wage service:** the minimum wage (XCD 6.52/h since Oct 2024) and the monthly C3 schedule are real obligations. But the buyers are households, NIC SmartSubmit exists, and the market is too small. At most it is a local bookkeeper's sideline. Source: https://www.hivedesk.com/compliance/saint-lucia (secondary source)
- **Scrap metal dealer register:** I found no Saint Lucia regime.

## 4. Method notes

- The govt.lc service pages (`*.govt.lc/services/...`) were the best regulator-first source. Each one gives the fee, counter hours and documents, which proves the work happens offline. The Attorney General's Chambers revised-laws site gives the statutory obligations.
- The queries found no operator counts at all. Saint Lucia does not publish licence registers online.
- Queries about scrap and second-hand dealers returned UK and Trinidad results.
- The eighth search was refused for a usage limit, so I did not screen water taxis, tour guides, pawnbrokers or H-plate taxis.
