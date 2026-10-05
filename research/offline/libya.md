# Libya: Offline-Industries Pass

**Date:** 2026-10-05
**Market class:** Inaccessible market. It has two rival governments (GNU in Tripoli, GNS in the east), strict Central Bank of Libya (CBL) FX controls, no PayPal, and a travel warning in force (see `research/countries/libya.md`).
**Search budget:** 8. The run was interrupted by an API usage limit and resumed. This session made 2 successful searches. A 3rd search (scrap-metal export rules) was refused with a usage-limit error, so I stopped searching as the instructions require. Searches from before the first interruption could not be recovered and wrote nothing to disk. The total stayed within 8.
**Bottom line:** Two quiet industries have a real 2024–2026 regulatory trigger:

- **Licensed money changers:** CBL licensed 71 new exchange companies and offices, bringing the total to 135, and received more than 2,000 applications.
- **Employers of foreign workers:** Cabinet Decision 799/2024 regularises foreign workers, and the Ministry of Labour launched the "Wafed" (وافد) platform in September.

Neither is a viable product for a non-local solo founder. The money-changer pool is 135 firms supervised directly by the central bank, which makes this an AML/core-system sale. In the foreign-labour case, the state portal is itself the "software", and the buyers are households and small contractors who pay in dinars under FX controls. Section 2 records the least-bad candidate and scores it honestly. No candidate reaches the build threshold.

This report does not repeat the existing country report's two candidates: the import-shipment document pack (LC, inspection and customs) and the NOC prequalification tracker.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Money changers / exchange offices (صرافة) | Need a CBL licence under CBL Board Decision 16/2010 on the rules for exchange business. Recurring reporting to CBL and AML/KYC record-keeping are likely (exact report forms not verified). | A new licensed sector, 2025–2026. Before that, the parallel market was informal cash counters. No Libyan vendor listings were found. | 135 licensed (71 newly approved), plus more than 2,000 applications pending at end of August (erembusiness.com, reporting CBL) | Weak candidate (see 2.1) | It has a real trigger and a public list. But 135 buyers are directly supervised by the central bank, AML software is a regulated trust purchase, and a foreigner would face sanctions screening. |
| Household and SME employers of foreign workers (domestic workers, construction, farm hands) | Cabinet Decision 799/2024 regularises foreign workers already in Libya. The Ministry of Labour's "Wafed" platform handles recruitment. Workers may not change city or employer without the Ministry, and employers face penalties for breaching contracts. | The state platform is newly launched. Employers otherwise deal with ministry offices and agents. The kafala-style sponsorship debate (arabi21) shows the rules are in flux. | Hundreds of thousands of foreign workers (no official register figure found: estimate). Employers are uncounted. | Weak candidate (see 2.2) | There is a mandatory, recurring trigger. But the free government portal is the substitute, and recruitment agents do the work done-for-you. Buyers pay in LYD. |
| Scrap-metal dealers / exporters | Export restrictions on scrap metal have been reported in past years (not verified this pass because the search was refused) | Yard-based cash trade | Unknown | Reject (unverified) | No register or recurring filing could be confirmed. Export bans kill the reporting workflow rather than create one. |
| Livestock traders and markets (أسواق المواشي) | Vet certificates for movement and sales, and Eid sacrifice imports | Paper vet certificates issued at municipal vet offices (assumption) | Unknown | Reject | No enforced recurring register was found. Traders are cash-based and don't pay for software. |
| Small abattoirs and butchers | Municipal health licence and inspections | Counter licensing (assumption) | Unknown | Reject | Annual licence only, with no per-job filing. |
| Beekeepers | Agricultural registration (unverified) | Association-level paper records | Small | Reject | No obligation was found, and the market is tiny. |
| Gold sellers and goldsmiths | Hallmarking/assay office (دمغة) and possible AML duties | Done at the counter at the assay office (assumption) | Unknown | Reject | Not verified. The AML trigger is weaker than for money changers. |
| Taxi, minibus and ride-hail drivers | Vehicle and operator licensing | Done at the counter | Unknown | Reject | Annual licensing only. Local ride-hail apps already exist (unverified). |
| Street and market traders | Municipal stall permits | Cash, issued by the municipality | Unknown | Reject | No recurring report, and no willingness to pay. |
| Funeral and burial | Death registration with the civil registry | Done at the counter. Burial is religious and family-run. | No commercial sector | Reject | No commercial operators exist. |
| Well drillers / private water wells | Wells need permits from the water authority (assumption, given the Great Man-Made River context) | Paper-based (assumption) | Unknown | Reject | Not verified. It is a one-off permit, not recurring. |
| Private clinics and pharmacies selling controlled drugs | Controlled-drug registers | Paper ledgers (assumption) | Unknown | Reject | Already covered in spirit by the country report's health screening. Not verified in this pass. |

## 2. Strongest opportunities (all below threshold)

### Opportunity: AML/KYC transaction register and CBL report pack for newly licensed exchange offices

**Industry:**
Licensed money changers (شركات ومكاتب الصرافة)

**Buyer:**
Owner/compliance officer of a newly licensed exchange company or office

**Trigger / Why now:**
In 2025–2026 CBL expanded licensing to fight the parallel FX market. It approved 71 new firms (135 in total) and is screening more than 2,000 applications. The legal base is CBL Board Decision 16/2010 on exchange business.

**Current workflow:**
1. Record each FX deal and customer ID by hand or in a spreadsheet (assumption: no form found).
2. Compile periodic reports to CBL banking supervision and keep AML records (frequency not verified).
3. Use a local accountant or bank-style core system for the books.

**Pain:**
A new obligation for firms that came from an informal trade. The regulator is aggressive about the parallel market, so the risk of losing the licence is real. No complaint evidence was found.

**Existing solutions:**
Regional exchange-house cores (for example the GCC exchange-house software category, specific vendors not verified for Libya), Excel, and local accountants. CBL may prescribe its own reporting templates (unverified).

**Offline evidence:**
The sector was cash-counter based until it was licensed. No Libyan software listings were found.

**Offline channel:**
The CBL public list of licensed exchange firms. Contact by phone or WhatsApp in Arabic, through a local partner.

**Market count:**
135 licensed (erembusiness.com reporting CBL, 2025–2026). Possibly several hundred if the backlog of 2,000+ applications is partly approved (estimate).

**The gap:**
Unknown. It depends on CBL's reporting format, which was not found.

**Possible product:**
An Arabic transaction register with customer ID capture, threshold alerts and a one-click CBL report export.

**MVP:**
A single-office deal ledger plus a monthly report export in the CBL format.

**Pricing hypothesis:**
LYD-denominated, roughly equivalent to $50–150/month (estimate). It would need local collection.

**How to find first customers:**
The CBL licensed list, through a local accountant partner.

**Risks:**
Sanctions screening on every customer. CBL may mandate its own system. The founder cannot collect USD. AML software is a trust purchase. The market is split between the eastern and western regions.

**Kill condition:**
CBL supplies a mandatory reporting system or template, or the licensed count stays near 135.

Founder access: needs a Libyan partner. Not realistic for a non-local solo founder. Willingness to pay: probably for a done-for-you compliance service, not software alone.

**Score:** 3/10

**Sources:**
- [erembusiness: CBL licenses 71 new exchange firms, 135 total](https://www.erembusiness.com/economy/0vaqqcc)
- [CBL Board Decision 16/2010 on exchange rules (lawsociety.ly)](https://lawsociety.ly/?p=105064)

### Opportunity: Foreign-worker regularisation and Wafed filing service for small employers

**Industry:**
Households and small contractors employing foreign workers (construction, agriculture, domestic work)

**Buyer:**
Small contractor owner or household employer, more realistically the recruitment and paperwork agents who serve them

**Trigger / Why now:**
Cabinet Decision 799/2024 regularises foreign workers already in Libya. The Ministry of Labour launched the "Wafed" platform. Rules now tie each worker to one employer and city unless the Ministry approves a change, and employers face penalties (parlmany.com interview with the Minister of Labour, July 2026).

**Current workflow:**
1. The employer or an agent collects passport, health certificate and contract.
2. They submit through the Wafed platform or at a ministry office.
3. Each transfer, renewal or move between cities goes back through the Ministry.

**Pain:**
Mandatory and penalised. The regime changes often, including the kafala debate.

**Existing solutions:**
The Wafed state portal (free), recruitment and paperwork agents (done-for-you), and labour offices.

**Offline evidence:**
Filing is done in person and through agents. The platform is new.

**Offline channel:**
Paperwork agents near labour offices. Contractors' associations (not identified).

**Market count:**
Not found. Foreign workers likely number in the hundreds of thousands (estimate). Employer counts are unknown.

**The gap:**
Renewal and transfer deadline tracking across several workers, for agents handling many employers.

**Possible product:**
A case tracker for paperwork agents: worker documents, Wafed status and renewal deadlines.

**MVP:**
A spreadsheet-replacement tracker with WhatsApp reminders.

**Pricing hypothesis:**
LYD 100–300/month per agent (estimate).

**How to find first customers:**
Walk-in visits to agents near labour offices. That needs a local.

**Risks:**
The free government portal is the substitute. Policy reversals. A generic-tracker trap. FX and collection problems.

**Kill condition:**
Wafed covers renewals and transfers end to end, or agents won't pay beyond a notebook.

Founder access: requires a local. Willingness to pay: only for a done-for-you service.

**Score:** 2/10

**Sources:**
- [Cabinet Decision 799/2024 on regularising foreign workers (lawsociety.ly)](https://lawsociety.ly/legislation/%d9%82%d8%b1%d8%a7%d8%b1-%d8%b1%d9%82%d9%85-799-%d9%84%d8%b3%d9%86%d8%a9-2024-%d9%85-%d8%a8%d8%b4%d8%a3%d9%86-%d8%aa%d8%b3%d9%88%d9%8a%d8%a9-%d8%a3%d9%88%d8%b6%d8%a7%d8%b9-%d8%a7%d9%84%d8%b9%d9%85/)
- [Parlmany interview with the Libyan Minister of Labour, Ali Al-Abed (July 2026)](https://www.parlmany.com/News/2/444428/وزير-العمل-والتأهيل-الليبى-على-العابد-فى-حوار-لـ-انفراد)
- [Arabi21 on the kafala sponsorship decision](https://arabi21.com/story/1602948/)

## 3. Rejected

- **Scrap-metal dealer register.** I could not verify any dealer register or recurring filing (the search was refused). Past export restrictions remove the workflow rather than create one.
- **Livestock market and vet certificate tool.** Cash traders, no enforced recurring register found, and no willingness to pay.
- **Gold seller AML register.** Not verified. The trigger is weaker than for money changers.
- **Household employer payroll and social security.** Household employment is largely informal, and Wafed is the only formal touchpoint.
- **All the others in the table.** Annual counter licences or no commercial operators.

## 4. Method notes

- Arabic queries aimed at the regulator ("ترخيص مصرف ليبيا المركزي", "تسوية أوضاع العمالة") worked. lawsociety.ly is the best source for Libyan decisions and plays the role PacLII plays elsewhere. Arabic business news (erembusiness, parlmany) gives the licence counts.
- No public licensing registers or sector counts turned up for the trades (scrap, livestock, gold). Search was cut off by a usage limit after 2 successful searches in this session, so several rows rest on assumptions and are marked as such.
