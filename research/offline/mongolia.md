# Mongolia: Offline (quiet) industries pass

*Research date: 2026-10-05. Search budget: 18 of 20 WebSearch calls used, mostly in Mongolian. WebFetch was not used. Mongolia is a small market (about 3.5M people), and the earlier country report already found a strong e-government push (e-Mongolia, eBarimt, Single Window, LICEMED). This report is deliberately short. Most search results came back as summaries, so many specific facts below come from snippets and are marked where unverified.*

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Pawnshops / money-lending operators (ломбард, МЗҮАЭ) | Registration with the Financial Regulatory Commission (FRC) under the 2022 Law on Regulating Money Lending Activities. Reports to the FRC in its approved format (semi-annual, per search snippet). AML: suspicious-transaction and ≥MNT 20M cash-transaction reports to the FIU within 5 working days. Interest caps. | FRC's own 2021–22 analysis says pawnbrokers lack a unified registry, keep mixed records and pay tax poorly. Registration was accepted on paper or electronically. One search found no dedicated Mongolian pawn software. | 592 registered operators at end-2025 (FRC, via montsame / FRC bulletin snippet) | **Keep (weak)** | The only quiet group with a fresh regulator, a public register and recurring filings. Small count, and the FRC runs its own e-reporting portal. |
| Tourist ger camps / guesthouses | Register each foreign guest with the Immigration Agency within 48 h (Law on Legal Status of Foreign Nationals, art. 24.4) | Immigration offers an online form. Remote camps have patchy connectivity, so the work is batched and manual (unverified) | Unverified; several hundred camps (estimate) | **Keep (weak)** | A recurring per-guest mandate, but it is seasonal and an online form already exists. |
| Soum private veterinary units (PVUs) | State-contracted vaccination, clinical surveillance every 3 months (EWAR), health certificates; data into the government MAHIS | Paper logs at soum level. Training manuals are donor-funded. | ~744–800 PVUs (WOAH Asia presentations) | Reject | The buyer is effectively the state. MAHIS is the government system, and PVUs have very low cash margins. |
| Livestock traders / herders | Annual livestock census (Dec), animal ID / registration (Order A/405) | Census is done door-to-door by soum officials | 58.1M head (NSO 2025); ~230k herder households (2018 figure) | Reject | Government- and donor-run. Herders are not software buyers. |
| Scrap metal collection points | District inspections of collection points; anti-theft concern | Inspections reported by district (ikon.mn) | ~30+ recyclable buy-back points listed by the government (UB) | Reject | No register or reporting obligation found. Tiny, cash-only operators. Mostly one buyer (Darkhan Metallurgical Plant). |
| Precious metal / gold dealers | FIU AML reporting (STR, CTR ≥ MNT 20M) | FIU guidance on gold-sector ML risk | Unverified, small | Reject | Few dealers. Mongolbank is the dominant gold buyer. Covered by FIU forms. |
| Domestic workers / nannies | Labour contract, voluntary social insurance | Mostly oral agreements (per search snippets) | Unknown | Reject | No household-employer filing obligation found. Social insurance is on e-Mongolia. |
| Taxi / minibus operators (UB) | Special permits from the UB public transport authority | Only 26 licensed entities (19 public transport, 5 taxi, 2 courier) | 26 (ikon.mn) | Reject | Far too few licensees. City-led electric taxi PPP. |
| Hunting outfitters | Ministry special hunting permits, CITES export | Quota tracking described as poor | Unverified; a few dozen (estimate) | Reject | Very few operators, and it's relationship/government-quota driven. |
| Hazardous / general waste handlers | State inspection campaigns | 327 facilities inspected in H1 2025, 265 violations at 127 facilities | 327 inspected (legalinfo.mn snippet) | Reject | Enforcement exists, but no recurring filing workflow was identified within budget. |
| Beekeepers, well drillers, tattoo, chimney sweeps | Not checked in depth | n/a | n/a | Not applicable / skipped | Marginal industries in Mongolia, or no regulator trail within budget. |

Groups specific to Mongolia that I added: pawnshops under the 2022 FRC regime, soum private veterinary units, tourist ger camps (48-hour foreign guest registration) and hunting outfitters.

## 2. Strongest opportunities

Neither opportunity reaches the brief's bar. Both are recorded honestly as the "least weak".

### Opportunity: Pawnshop compliance ledger (FRC report + FIU cash-transaction report + interest-cap check)

**Industry:**
Pawnshops and money-lending operators (ломбард / мөнгөн зээлийн үйл ажиллагаа эрхлэгч).

**Buyer:**
Owner-operator or bookkeeper of a registered pawnshop, mostly in Ulaanbaatar and aimag centres.

**Trigger / Why now:**
- The Law on Regulating Money Lending Activities was adopted in November 2022. Operators had to register with the FRC within one year.
- FRC and local authorities had registered 592 operators by end-2025.
- Interest-rate caps have been set by the Money Lending Policy Council: a maximum of 1.5%/month and 18%/year per one source, plus a cap on penalty interest of 20% of base interest. Another headline cites a 4.5% cap. **The exact current cap is unverified.**
- The law forbids collecting interest in advance.
- In June 2026 the FRC published a document on the law (possibly an amendment or review, **unverified**).
- AML: reporting entities must file cash-transaction reports for amounts ≥ MNT 20M within 5 working days.

**Current workflow:**
1. Write each pledge (item, appraisal, loan, term) in a ledger book or Excel, and issue a paper contract.
2. Compute interest and penalty by hand.
3. Re-key the semi-annual activity report into the FRC e-reporting system.
4. File financial statements separately to the tax/finance portal.
5. File any ≥ MNT 20M cash transaction or suspicious transaction to the FIU on its own form.

**Pain:**
- The FRC's own analysis cites no unified registry, arbitrary interest, low appraisals and mixed income records.
- The new law adds interest caps and a ban on advance interest, so contracts now carry legal risk.
- There is no complaint evidence from operators, which is typical for a quiet industry.

**Existing solutions:**
- The FRC e-reporting system (free, receiving body).
- The Ministry of Finance list of approved accounting software, i.e. generic Mongolian accounting packages.
- Excel and paper ledgers.
- Accountants on retainer.
- No dedicated Mongolian pawn software was found in one search (**unverified absence**).

**Offline evidence:**
- Registration is accepted on paper.
- The regulator itself describes poor record-keeping.
- The search found no SaaS listings or user forums for pawnshops.

**Offline channel:**
- The FRC public register of money-lending operators: a phone or walk-in list of 592 names and addresses.
- FRC training sessions and handbook distribution. The FRC published a money-lending handbook in April 2025.
- Accountants who serve several pawnshops.

**Market count:**
592 registered operators at end-2025 (FRC, via news snippet).

**The gap:**
A pledge ledger that enforces the legal interest and penalty caps, prints a compliant contract, and produces the FRC report and FIU cash-transaction report from the same records.

**Possible product:**
A Mongolian-language pledge register and contract generator. It computes capped interest and penalties, flags ≥ MNT 20M cash transactions, and exports the FRC semi-annual report figures.

**MVP:**
A web or desktop ledger with pledge, contract print, an interest calculator using the current caps, and an Excel export that matches the FRC report template.

**Pricing hypothesis:**
MNT 50–150k/month (about $15–45) per shop (estimate). Owners may prefer a done-for-you bookkeeping-plus-filing service from an accountant.

**How to find first customers:**
The FRC register, then calls or visits in Ulaanbaatar. Partner with 2–3 accountants who serve pawnshops.

**Willingness to pay / founder access:**
- Willingness to pay is low to moderate. Software only appeals to the larger chains. Small shops would pay an accountant rather than buy software.
- A non-local solo founder could not realistically sell this. It needs Mongolian language and a local partner, and the eBarimt/MIXX integration constraints noted in the country report also apply.

**Risks:**
- A ceiling of about 600 buyers, many of them tiny or informal.
- The FRC portal may add calculators.
- Generic accounting packages could add a pawn module.
- The law may change again.

**Kill condition:**
- Fewer than about 100 operators have more than one branch or meaningful volume.
- Or the FRC portal already captures pledge-level data directly.
- Or an existing Mongolian accounting vendor already sells a pawn module.

**Score:** 3.5/10

**Sources:**
- Montsame, new legal regime for unlicensed money lending: https://montsame.mn/mn/read/338722
- FRC bulletin, May 2025: https://www.frc.mn/resources/Image/Document/202506/Uognh/setguul-%E2%84%9678-2025.05-sar.pdf
- FRC document on the money-lending law, June 2026: https://www.frc.mn/resources/Image/Document/202606/V0Aeh/%D0%9C%D3%A9%D0%BD%D0%B3%D3%A9%D0%BD-%D0%B7%D1%8D%D1%8D%D0%BB.pdf
- Law text: https://legalinfo.mn/mn/detail?lawId=16532149634331
- FRC money-lending handbook, 2025: https://www.frc.mn/resources/Image/Document/202504/3eS9k/mungun-zeel-8.pdf
- FRC paper on interest caps: https://www.frc.mn/resources/Images/Document/202311/WIxlY/%D0%A1%D1%83%D0%B4%D0%B0%D0%BB%D0%B3%D0%B0%D0%B0.pdf
- zms.mn on a 4.5% cap: https://www.zms.mn/a/97167
- itoim.mn, interest cap set in 2024: https://itoim.mn/a/2024/05/30/world/htj
- FIU reporting rules: https://legalinfo.mn/mn/detail?lawId=16530569961391
- FIU report-filling guide: https://fiu.mongolbank.mn/file/files/documents/cma/guide20200825_other.pdf
- MoF approved accounting software list: https://mof.gov.mn/article/entry/12-20
- UB Post on the 2022 law: https://theubposts.com/a/12535

### Opportunity: Ger camp foreign-guest registration batcher (48-hour immigration filing)

**Industry:**
Tourist ger camps, guesthouses and small hotels outside Ulaanbaatar.

**Buyer:**
The camp owner or manager, usually a family business that operates seasonally (June–September).

**Trigger / Why now:**
- Under art. 24.4 of the Law on Legal Status of Foreign Nationals, any person or entity housing a foreigner must register them within 48 hours. This can be done online via immigration.gov.mn.
- There is no new 2025–26 trigger. Tourism growth targets ("Visit Mongolia" years) raise volume.

**Current workflow:**
1. Collect passport details at check-in, on paper or by photo.
2. When connectivity allows, type each guest into the Immigration web form.
3. Separately issue eBarimt receipts and keep guest books.

**Pain:**
- Per-guest re-keying during peak season, often from remote sites (connectivity issue unverified).
- Fines for late registration are levied on the foreigner, which shifts the pressure onto tour operators. The amount was unverified.

**Existing solutions:**
- The Immigration Agency online form (free).
- Hotel PMS systems in Ulaanbaatar.
- Tour operators who register guests on the camps' behalf.
- Paper guest books.

**Offline evidence:**
- Seasonal family-run camps in remote areas.
- No camp-management SaaS listings were found within budget.

**Offline channel:**
- The Mongolian Tourism Association and the camp classification body.
- Tour operators who book many camps and could push a tool to them.

**Market count:**
Unverified. Several hundred camps (estimate).

**The gap:**
Passport scan, then offline queue, then batch submission plus an eBarimt receipt. This only matters if Immigration offers an API or tolerates form automation, which is **unverified**.

**Possible product:**
A mobile check-in app that scans passports offline and syncs a batch to the Immigration form when the device is back online.

**MVP:**
Passport MRZ scan, a guest list, and a pre-filled copy-paste export for the immigration form.

**Pricing hypothesis:**
$10–30/month during the season (estimate). Revenue is seasonal.

**How to find first customers:**
Tourism association member list, tour-operator partners, and the Ulaanbaatar tourism trade fair (ITF Ulaanbaatar; existence for 2026 unverified).

**Willingness to pay / founder access:**
Low willingness to pay. A non-local founder would need a Mongolian partner. The tour-operator channel is the only realistic route.

**Risks:**
- Integration with the government form (no API known).
- Seasonality.
- A small market.
- Immigration may simplify the form itself.

**Kill condition:**
- Immigration forbids automated or third-party submission.
- Or tour operators already do the registration for camps.

**Score:** 2.5/10

**Sources:**
- Immigration Agency, 48-hour registration: https://immigration.gov.mn/en/48-cagijn-brtgel/
- Law on Legal Status of Foreign Nationals: https://legalinfo.mn/mn/detail/211
- Foreigner residence registration procedure: https://legalinfo.mn/mn/detail?lawId=16230721400211
- Tourism Law, 2023 revision: https://legalinfo.mn/en/edtl/16960373058221

## 3. Rejected

- **Soum private veterinary units.** About 744–800 units. Reporting goes into the government MAHIS, the state is the payer and the units have thin margins. Substitute: MAHIS plus donor-funded EWAR manuals.
  - Sources: https://rr-asia.woah.org/app/uploads/2021/07/08_mongolia_fmd_ppp_nvs_private_vet_sector.pdf, https://rr-asia.woah.org/app/uploads/2025/05/5.5-GERELMAA20250513_Mongolia-FMD-surveillance.pdf
- **Livestock traders and herders.** The census and animal ID are run by the state and donors, and herders do not buy software.
  - Sources: https://www.nampa.org/text/22818681, https://akipress.com/news:600411/
- **Scrap metal points.** Only district inspections were found, with no dealer register or reporting duty. Operators are tiny and sell to essentially one smelter.
  - Sources: https://ikon.mn/n/6c9, https://mongolia.gov.mn/news/view/22330
- **Gold and precious-metal dealers.** FIU forms already cover the reporting, there are few dealers, and Mongolbank is the dominant buyer.
  - Source: https://fiu.mongolbank.mn/file/files/documents/cma/guide20201029.pdf
- **Domestic workers.** No household-employer filing duty was found, and social insurance is on e-Mongolia.
- **Taxi and minibus operators.** Only 26 licensed entities.
  - Source: https://ikon.mn/n/3kby
- **Hunting outfitters.** A few dozen operators, with quotas run by the government. Outfitters already handle CITES.
- **Waste handlers.** Enforcement is real (265 violations at 127 facilities in H1 2025), but no recurring filing workflow was identified within budget.

## 4. Method notes

- What worked:
  - Mongolian-language regulator queries (frc.mn, legalinfo.mn, fiu.mongolbank.mn) surfaced registers and counts. The pawnshop count of 592 came from FRC material.
  - WOAH regional slide decks gave the private veterinary unit counts.
- What didn't work:
  - Searches for operator-side evidence (software vendors, complaints, forms in use) returned almost nothing.
  - Search results came back as summaries, so form-level detail (report templates, fine amounts) stays unverified.
- Overall: Mongolia's quiet industries are either state-paid (veterinary units, herders) or have too few licensees (taxis, outfitters). Pawnshops are the one licensed SMB population with recurring filings, and they are worth a phone check of the FRC register if anyone pursues Mongolia.
