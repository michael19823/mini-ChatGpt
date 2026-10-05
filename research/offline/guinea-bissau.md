# Guinea-Bissau: offline-industries pass

Researched 2026-10-05. **Short, honest report.** I ran 4 WebSearch calls out of a budget of 8. Two were refused because of the usage limit (moto-taxi licensing, and livestock and abattoir inspection). Under the instructions, I stopped searching at that point. WebFetch was not used. Anything not backed by a source below is marked "unverified" or "estimate".

## Bottom line

**I found no quiet industry in Guinea-Bissau that clears the bar for an indie software product.** The reasons are structural and match the first-round report:

- The formal sector is tiny (about 2 million people in total).
- Most of the quiet industries on the seed list are informal and keep no mandatory register that anyone enforces.
- Where an obligation does exist, the substitute is free or effectively zero-cost: in-person filing at a counter, the government's Kontaktu tax portal, or simply not complying.
- Political risk is high after the November 2025 coup (see the country report).

The only obligation-backed lead with any traction is **domestic workers' social security registration**, and even that is a policy-advocacy story, not a buying market.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Households employing domestic workers | Registration and contributions to INSS (the national social security institute), under the Labour Code, which covers domestic work | An Iscte master's thesis on extending social security to domestic workers in Bissau describes the sector as largely outside the system. Registration is in person (eRegulations GB) | Unknown; tens of thousands of domestic workers is plausible (estimate, unverified) | Weak lead (kept, 2/10) | The obligation exists on paper but enforcement is minimal; households would not pay; the association ANAPROMED is the only channel |
| Scrap metal dealers | No dealer register reported to police was found for GB | Search found nothing specific to GB. Angola banned scrap dealers and weighing houses in Jan 2026 (Decreto Executivo 7/26), which is a regional signal only | Unknown | Reject | No obligation found; any rule is more likely to be a ban than a register |
| Second-hand goods / used car parts / pawn | None found | Not searched (budget) | Unknown | Reject (unverified) | No evidence of a register |
| Gold buyers / artisanal gold | Not found | Not searched | Very small (GB has little gold mining; estimate) | Reject | No sector to speak of |
| Livestock traders, small abattoirs, butchers | Veterinary inspection at the municipal abattoir (assumed; search refused) | Unverified | Unknown | Reject (unverified) | No register or trigger found; the trade is informal and cross-border |
| Beekeepers | None known | Not searched | Small; honey is a minor NGO-supported activity (unverified) | Reject | No obligation |
| Well drillers / small water systems | Water licensing (unverified) | Not searched | Very few firms; mostly donor-funded projects | Reject | The buyer is the donor or NGO, not the SME |
| Pesticide sellers and applicators | CILSS / Sahelian Pesticide Committee registration (GB is a CILSS member), plus a national import permit (unverified) | Not searched | Few importers (estimate) | Reject | Product registration is the importer's one-off task; there is no recurring workflow for SMEs |
| Moto-taxi / *toca-toca* minibus operators | Vehicle licensing, route permits and taxes collected at the counter or roadside (assumed; search refused) | Unverified | Unknown | Reject | Cash and informal; no paper register a product could replace; consumer-like buyers |
| Market traders / street vendors | Municipal market fees (Câmara Municipal de Bissau; unverified) | Cash collected by fee collectors | Unknown | Reject | No software buyer; the fee is a cash receipt |
| Money changers (*cambistas*) | BCEAO (the regional central bank) licensing of exchange bureaus and AML reporting | Most changers in Bissau are informal street changers (unverified) | Few licensed bureaus (estimate) | Reject | Licensed bureaus are few; informal changers would not adopt it |
| Artisanal fishermen selling their own catch | Fishing licence and landing records under the fisheries ministry (unverified) | Not searched | Thousands of pirogues (estimate) | Reject | Licence is annual; landing data is a state or donor project, not an SME purchase |
| Cashew intermediaries (country-specific) | Campaign licence and evacuation permits | Paper permits per the country report | About 2,099 licences (country report, cropgpt secondary source) | Reject here | Already covered in the country report (2/10); seasonal, and brokers absorb the paperwork |
| Funeral / burial (country-specific) | Civil death registration | Not searched | Very few formal operators | Reject | Burial is mostly family and community-run |

## 2. Strongest opportunity (below the bar, listed for completeness)

### Opportunity: Domestic-worker INSS registration and payslip service for Bissau households

**Industry:**
Households as employers (domestic work)

**Buyer:**
Expatriate, NGO-staff and upper-middle-class households in Bissau that employ a domestic worker, cook, guard or driver. Possibly NGOs and embassies that require their staff to employ domestic workers formally (unverified).

**Trigger / Why now:**
The Labour Code now sets a legal framework for domestic work, according to the Iscte thesis. There is advocacy to extend INSS coverage to domestic workers, led by ANAPROMED, the national association for the protection of women employed and domestic workers. I found no dated 2025–2026 enforcement trigger.

**Current workflow:**
1. The household agrees the wage verbally and pays in cash, usually without a payslip.
2. A household that does register goes to INSS in person with ID and documents (eRegulations GB lists the social-security procedure as in-person).
3. Contributions are paid at a counter or bank. Kontaktu also carries contribution declarations for firms (per the country report), but whether it serves households is unverified.

**Pain:**
Mostly the worker's pain (no coverage), not the employer's. Enforcement against households is not evidenced. Expatriate households may want proof of compliance, but this is unverified.

**Existing solutions:**
Doing nothing (the dominant substitute); in-person filing at INSS; local accountants or the employer's own HR department (for NGO staff); ANAPROMED and union guidance.

**Offline evidence:**
The Iscte thesis describes the sector as largely outside social security. Registration is in person. There is no software listing for GB household payroll.

**Offline channel:**
ANAPROMED and the trade unions; HR departments of NGOs and embassies in Bissau; the expatriate community's WhatsApp groups (unverified).

**Market count:**
Unknown. No official count of registered domestic employers was found. Households that would realistically pay probably number in the low hundreds (estimate).

**The gap:**
Nobody handles registration, monthly contributions and payslips for a household as a done-for-you service.

**Possible product:**
A done-for-you service, not software: a local agent registers the worker, issues monthly payslips and pays INSS. Software would be only the agent's back office.

**MVP:**
A payslip-and-contribution calculator plus a checklist for INSS registration, run by one local agent.

**Pricing hypothesis:**
About FCFA 5,000–10,000 (US$8–16) per household per month (estimate). Households would pay only for the service, not for software.

**How to find first customers:**
NGO and embassy HR, and ANAPROMED.

**Risks:**
No enforcement, so no compulsion. A tiny paying segment. Needs a local operator; a non-local solo founder could not sell this. Political instability.

**Kill condition:**
INSS does not accept household employers in practice, or fewer than 100 households would pay.

**Score:** 2/10

**Sources:**
- https://www.iscte-iul.pt/tese/12469 and https://repositorio.iscte-iul.pt/bitstream/10071/24819/1/master_jose_mendes_pereira.pdf (Iscte thesis on extending social security to domestic workers in Bissau; ANAPROMED; Labour Code)
- https://guineebissau.eregulations.org/menu/10?l=pt (social security procedures, eRegulations Guinea-Bissau)

## 3. Rejected

- **Scrap metal dealer register:** no GB obligation found. The regional precedent is a ban (Angola's Decreto Executivo 7/26, Jan 2026: https://angolex.com/paginas/decreto-executivo/interdicao-da-actividade-comercial-de-pesagem-de-metal-ferroso-e-nao-ferroso-7a-26a.html), not a register.
- **Moto-taxi / minibus compliance:** informal, cash-based, with no register to digitise (unverified; search refused).
- **Livestock / abattoir records:** no trigger found (search refused); an informal, cross-border trade.
- **Cashew intermediaries and exporters:** see the country report. The workflow is seasonal, there are fewer than 50 exporters, and brokers do the paperwork.
- **Money changers, fishermen, pesticide sellers, well drillers:** too few licensed operators, or the buyer is the state or a donor.

## 4. Method notes

- Portuguese, regulator-first queries returned mostly Portuguese, Angolan and Brazilian results. GB-specific registers are scarcely online. eRegulations Guinea-Bissau and academic theses (Iscte) were the only GB-specific regulator-side sources.
- Two of 4 searches were refused because of the usage limit, so livestock and transport rows rest on assumptions and are marked unverified.
- For GB, the "quiet" industries are quiet because they are informal, not because they are under-served by software. A further pass is unlikely to change the verdict.

Research model: Opus
