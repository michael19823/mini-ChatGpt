# Macau SAR: Offline-Industries Pass

**Date:** 2026-10-05
**Market class:** City-state SAR with about 690k residents (estimate, from the existing country report) and a small SME base. Much of the government's administration is already done online through 商社通 (Business Connect) and 一戶通 (Macao One Account).
**Search budget:** 8. The run was interrupted by an API usage limit and then resumed. In the resumed session, 2 searches were attempted. One returned results, and the other was refused with "usage limit". The instructions say to stop when a search is refused, so this report is short. Most rows rest on prior knowledge and the existing country report, and they are marked **unverified** wherever no source was retrieved in this pass.
**Bottom line:** No quiet industry in Macau supports a standalone indie software product. The candidates fall into three groups:
- **Too few operators:** pawnshops, money changers and funeral parlours number in the dozens to low hundreds.
- **Government-run:** cemeteries and markets are run by IAM, and the live-poultry trade has ended.
- **Not a software buyer:** household employers of domestic helpers, whose work goes to agencies and to the FSS/DSAL counters and portals.

Section 2 contains one weak, interview-only lead and no build recommendation.

This report doesn't repeat the opportunities in `research/countries/macau.md`: the lift register (Law 14/2022), payroll/FSS, TNR hiring permits, F&B licensing (Law 5/2026), gold sales (Law 4/2026), the Tax Code/transfer pricing, and company-registry sync.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing domestic helpers (外地家傭 / 家務工作者) | DSAL non-resident worker hiring permit (Law 21/2009), the employment contract and the return-fare obligation. FSS social-security registration and contributions apply where they cover the worker (coverage details unverified). | Legislative Assembly papers discuss employer duties, return-fare costs and disputes, and show the work is done through agencies and government counters (al.gov.mo search results, 2021–2026). | About 30k foreign domestic helpers (estimate from prior knowledge, unverified; the AL documents found give no consolidated 2025 figure). | Weak lead | It is the largest pool of obliged "employers", but households don't buy software. Licensed employment agencies do the paperwork for a one-off fee. See §2. |
| Pawnshops (押店 / 當押業) | A licence, plus transaction and pledge records that the police (PSP) can inspect. AML duties are reported to the Financial Intelligence Office (GIF). The governing decree and its exact reporting rules are unverified, because the search was refused. | The shops are casino-adjacent counter businesses, traditionally run with paper pledge books (unverified). | Low hundreds at most, clustered around casinos (estimate, unverified) | Reject | The buyer pool is tiny, they are cash businesses wary of software, and AML reporting goes through GIF's own channel. |
| Money changers (找換店) | AMCM licence, transaction records and AML/KYC reporting to GIF | AMCM-supervised. Many are tied to banks or casino groups (unverified). | Dozens (estimate, unverified) | Reject | Too few operators, and the AMCM/GIF supervisory relationship favours established vendors or in-house tools. |
| Scrap metal / second-hand dealers | No police dealer-register regime found (not searched; budget refused) | Scrap is mostly exported to the mainland or Hong Kong (assumption) | Small | Reject | No obligation found, and the market is tiny. |
| Taxi operators | Taxi licences under the taxi regime law (Law 3/2019, unverified), including meter and conduct rules | Licences are held by a few companies and individuals, and enforcement is by PSP and DSAT | Roughly 2,000 licences (estimate, unverified) | Reject | The licences are concentrated in company fleets that run their own dispatch systems. There is no per-trip filing for a small operator to automate. |
| Market stall holders (IAM municipal markets) | IAM stall licences, hygiene inspections, rent | Counter-based with IAM | Several hundred to low thousands of stalls (estimate) | Reject | The landlord and regulator is IAM. Duties are rent and an annual licence, with no recurring data report. |
| Live poultry / livestock trade and slaughter | Live-poultry retail was ended (around 2018, unverified). Slaughter is centralised. | Not applicable | About 0 private operators | Reject | The trade is gone or monopolised. |
| Cemeteries and burial | Cemeteries are run by IAM (Catholic cemeteries are run by the Church) | Run by the government and the Church | A handful | Reject | There is no private SMB buyer. |
| Funeral parlours (殯儀) | Licensing plus death-registration paperwork with the civil registry | Counter-based and family-run (assumption) | Under 20 (estimate, unverified) | Reject | Too few operators, and death registration is a single receiving body. |
| Tattoo studios, beauty and nail salons | Health/IAM premises licensing (licensing path unverified) | Small owner-operated shops | Low hundreds (estimate) | Reject | One-off licensing and no recurring report found. |
| Driving instructors / driving schools | DSAT licensing and student-test scheduling | Few schools, with DSAT booking | Under 20 schools (estimate) | Reject | Too few buyers. |
| Fishermen selling their own catch | Fishing-vessel licences (DSAMA) and fish-market rules | A small traditional fleet | Low hundreds of vessels (estimate, unverified) | Reject | The industry is shrinking, the operators are elderly, and there is no recurring catch-reporting software need found. |
| Household and SME employers: lift "responsible persons" | Covered in the country report (lift register, 2027 retrofit deadline) | n/a | n/a | Already covered | Not re-reported. |

Macau-specific groups added to the seed list: pawnshops (casino-linked), money changers, and IAM market stall holders.

## 2. Strongest opportunities

Only one lead deserves even a few interviews, and it is weak. The pattern is the same as in the main country report: Macau is best treated as a bolt-on to a Hong Kong product. Hong Kong has around 340k foreign domestic helpers (prior knowledge, unverified), and several helper-employer apps already serve that market.

### Opportunity: Domestic-Helper Employer Admin Pack for Macau Employment Agencies

**Industry:**
Domestic-helper employment agencies (職業介紹所) and the households that employ helpers through them

**Buyer:**
The owner or manager of a licensed employment agency placing domestic helpers in Macau, who could resell the pack to household employers. Households themselves are not a realistic software buyer.

**Trigger / Why now:**
Domestic-helper rules are an ongoing topic in the Legislative Assembly. Papers from 2024–2026 found in this pass discuss employer duties, return-fare costs and disputes. Specific 2026 rule changes were **not verified** because search was cut off.

**Current workflow:**
1. The agency recruits a helper (mostly from the Philippines, Indonesia or Vietnam; unverified) and prepares the DSAL hiring-permit application for the household.
2. The household signs the contract and the agency tracks permit and blue-card expiry, renewals and contract end.
3. Pay records, rest-day and leave records and any social-security steps are kept on paper or not at all by the household (assumption). Disputes go to DSAL.

**Pain:**
Missed permit renewals, unclear severance and return-fare obligations, and disputes. The AL documents show these issues recur in policy debate. There is no quantified complaint evidence (unverified).

**Existing solutions:**
- Employment agencies (paid per placement)
- DSAL counters and online services
- Hong Kong helper-employer apps such as HelperChoice and Helpling (Macau coverage unverified)
- Paper contracts and WhatsApp

**Offline evidence:**
The work runs through agencies and government counters. No Macau-specific software listings were found (only one search was run on this).

**Offline channel:**
Visit the licensed employment-agency list published by DSAL in person (list availability unverified). Filipino and Indonesian community associations and consulates are secondary channels.

**Market count:**
About 30k helpers (estimate, unverified), and an unknown number of agencies, likely dozens (estimate).

**The gap:**
A bilingual (Chinese/English) renewal-and-obligation calendar for each placement, with payslip and leave records that would stand up in a DSAL dispute.

**Possible product:**
An agency-branded portal that tracks permit and contract dates for every placed helper and gives the household simple payslip and leave forms.

**MVP:**
A spreadsheet import of placements, expiry alerts by WhatsApp or email, and a payslip PDF generator.

**Pricing hypothesis:**
MOP 20–40 per placement per month, paid by the agency (estimate). Households would pay only as part of the agency fee, so this is a service-plus-software model.

**How to find first customers:**
The DSAL list of licensed employment agencies, plus walk-ins.

**Risks:**
The market is tiny, agencies have thin margins, and a Hong Kong player could add Macau cheaply. Founder access: a non-local founder would need a Cantonese-speaking local partner for agency sales.

**Kill condition:**
Agencies say they already track renewals adequately in a spreadsheet, or fewer than 20 agencies exist.

**Score:** 2/10

**Sources:**
- Legislative Assembly documents on domestic helpers and social security (search results only; content not opened): https://al.gov.mo/uploads/attachment/2026-06/7953c165e966ae16f91b8dbe68335ddc.pdf , https://al.gov.mo/uploads/attachment/2025-12/f54647b8c3009488c598eb0397456e59.pdf , https://al.gov.mo/uploads/attachment/2024-09/2328166dabb1d2441c.pdf

## 3. Rejected

- **Pawnshop pledge register / police reporting tool.** It fits the "dealer register reported to police" pattern, but there are probably only low hundreds of shops (unverified), casino-linked owners and a single receiving body (PSP/GIF). The substitute is the paper pledge book plus GIF's own reporting channel.
- **Money-changer KYC/AML.** There are dozens of operators supervised by AMCM. Existing AML vendors and bank or casino group tools cover them.
- **Taxi operator compliance.** The licences are concentrated in fleets that run their own systems.
- **Market stall, funeral, cemetery and livestock trades.** These are government-run, monopolised or too small.

## 4. Method notes

- Traditional Chinese queries pointed straight at al.gov.mo, the Legislative Assembly's attachment store, which is the most useful regulator-first source in Macau. Its interpellation replies contain the figures. Search snippets alone didn't give consolidated counts.
- The second search (pawnshop law and police register) was refused with "usage limit", so the pass stopped. Licence counts for pawnshops, money changers, taxis and agencies remain unverified. The next pass should get them from DSEC, AMCM, PSP and the DSAL licensed-agency list.
- Structurally, Macau's quiet trades are either very few or casino-linked, or run by the government (IAM). This pass is unlikely to change the country verdict even with a full budget.
