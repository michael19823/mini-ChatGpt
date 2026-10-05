# Nicaragua: Offline (quiet) industries pass

Researched 2026-10-05, in two rounds. Each round ended when the search tool returned "You've hit your usage limit": first on the 3rd call, then on the 10th. In total, 8 searches returned results and 2 were refused. Per the method, I stopped and wrote up what I had. Anything not confirmed by a source returned in those searches is marked "unverified" (from background knowledge).

Context from the existing country report (`research/countries/nicaragua.md`): ~7M people, a repressive and opaque regulatory environment, business associations and NGOs closed or exiled, and targeted US sanctions. Offline channels that depend on associations are therefore weak, and a non-local founder would struggle. That caps the distribution scores in this pass.

## 1. Quiet industries screened

| Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|
| Pawnshops and private lenders (casas de empeño / prestamistas) | Mandatory entry in CONAMI's National Registry of Pawn Service Providers (PSE) and/or Loan Providers (PSP), created by Resolución CD-CONAMI-055-01NOV28-2024 (La Gaceta, 2024-12-23). CONAMI handles registration, control and cancellation. Also AML obligated subjects | Each authorization is issued as an individual CONAMI resolution printed in La Gaceta. The press frames it as bringing informal lenders under control | Unknown. Individual resolutions exist, but no total was found | Weak candidate (2/10) | Real 2024 trigger, but no recurring-report format was confirmed, the market is small, and the regulator's aim is political control |
| Households employing domestic workers | INSS registration on special paper forms supplied by the INSS; hires and departures reported within 3 business days; INSS inspectors may visit homes (1979 regulation). Employer contribution ~22.5% (rate from a secondary source) | The regulation prescribes paper forms. No household-payroll products were seen for Nicaragua | Unknown. Total formal employment was 810,197 at end-2025 (revistaeyn); the domestic share was not found | Reject | 1979 rule with no new trigger; household employers rarely comply and won't pay for software. An accountant or the INSS counter is the substitute |
| Scrap metal and e-waste collectors (chatarreras, centros de acopio) | Operating permit from MARENA plus the municipality; storage standards (roof, ventilation, hygiene, no child labour); fines C$5,000–50,000 | Described as one of the least-regulated activities; the evidence is 2014–2016 press | ~220 collection and export centres (figure appeared in a search summary; the primary source was not identified, so it is unverified) | Reject | Weak enforcement and old rules, so there is no forcing function. Cash-based informal buyers |
| Well drillers (perforadores de pozos) | Drilling permit before mechanical drilling (Decree 11-L, National Well Registry); ANA (Ley 620) registers consultants, including well drillers; concessions need hydrogeological studies | Permits are document-pack filings to ANA | Unknown; probably tens of firms (estimate) | Reject | Per-project, low-frequency filing done by a hydrogeology consultant. Too few firms |
| Agro-input retailers (expendios de agroquímicos) | IPSA establishment registration (unverified; the search returned only export rules and Colombian results) | Not confirmed | Unknown | Reject (unverified) | No evidence of a recurring sales register found; large distributors (e.g., Ramac, Formunica, unverified) dominate |
| Beekeepers / honey exporters | IPSA export certification (unverified) | Traditional methods (La Prensa) | Honey exports ~USD 500k a year (La Prensa, 2008, dated) | Reject | Tiny sector; low-frequency export paperwork already handled by IPSA and VUCEN |
| Cattle traders and small abattoirs | IPSA traceability, CUBE farm codes | A free government system and mobile app already exist (country report) | >200,000 farms with CUBE codes (country report) | Reject | Free mandatory state system |
| Pharmacies (controlled-drug books) | MINSA pharmacy law and regulation (Decree 6-99, amended 2002) | Search refused | Unknown | Not assessed | Budget cut off |
| Money changers (coyotes / cambistas) | BCN / UAF oversight (unverified) | Street-level, cash | Unknown | Reject | Informal, politically sensitive, no software buyer |
| Moto-taxis and caponeras | Municipal operating permits (unverified) | Counter at the alcaldía | Unknown | Reject | Low-income operators, municipal politics |
| Artisanal gold buyers (Siuna, Bonanza, Rosita) | Mining and export rules; state-linked buyers (unverified) | Not researched | Unknown | Reject | Politically sensitive, sanctions exposure |

## 2. Strongest opportunities

None reaches the quality bar. The best lead is below so a later pass can pick it up.

### Opportunity: CONAMI pawn and lender register and compliance book

**Industry:**
Pawnshops (casas de empeño) and private lenders

**Buyer:**
Owner-operator of a small pawnshop or lending business

**Trigger / Why now:**
CONAMI Resolución CD-CONAMI-055-01NOV28-2024 (La Gaceta, 2024-12-23) created a mandatory National Registry of Pawn Service Providers (PSE) and/or Loan Providers (PSP). It explicitly targets lenders who had operated informally for years. CONAMI handles registration, control and cancellation, and authorizations appear as individual CONAMI resolutions in La Gaceta through 2024–2025. These businesses are also AML obligated subjects.

**Current workflow:**
1. The owner assembles the registration documents listed in the norm and files them with CONAMI.
2. CONAMI issues an authorization resolution, which is published in La Gaceta.
3. Pawn tickets and loan contracts are kept on paper or in spreadsheets (unverified).
4. AML customer identification and reporting go to the UAF (format unverified).

**Pain:**
A new mandatory register plus AML duties on small cash businesses, and the risk of cancellation. No complaints, fines or inspection campaigns were found.

**Existing solutions:**
Lawyers and notaries who prepare the registration file, accountants, generic pawn POS software from elsewhere in Latin America (not verified for Nicaragua), and paper ticket books (unverified).

**Offline evidence:**
The registration is a paper document pack. Authorizations exist only as gazette resolutions. No Nicaragua-specific pawn software was seen.

**Offline channel:**
Names of registered providers can be taken from the CONAMI resolutions in La Gaceta and from the registry page on conami.gob.ni, then approached by phone or WhatsApp. A local law-firm partner would realistically be needed.

**Market count:**
Unknown. Individual registrations were seen, but no total.

**The gap:**
A ticket and loan ledger that produces CONAMI and UAF report formats. This is unconfirmed because recurring report formats were not verified.

**Possible product:**
A pawn ticket and loan register with KYC capture and export of any periodic CONAMI or UAF report.

**MVP:**
Ticket issuance, KYC fields and a monthly export.

**Pricing hypothesis:**
USD 20–40 per month (estimate). Done-for-you registration through a lawyer is more likely to sell than software.

**How to find first customers:**
Gazette resolutions and the CONAMI registry page.

**Risks:**
The regulator's aim is control of informal lenders, so operators may avoid formal tools that leave a trail. Politically exposed sector. Small market. Needs a local partner. Counterparties must be screened against the SDN list.

**Kill condition:**
CONAMI requires no recurring report beyond registration, or fewer than ~200 providers are registered.

**Willingness to pay / founder access:**
These buyers pay for a service (the lawyer), not for software. A non-local solo founder could not realistically sell this.

**Score:** 2/10

**Sources:**
- https://www.conami.gob.ni/registro-y-supervision/registro-nacional-de-proveedores-de-servicio-de-empeno-pse-yo-pr/
- http://legislacion.asamblea.gob.ni/Normaweb.nsf/b92aaea87dac762406257265005d21f7/d068a7230ee366ff06258c0c0057f975?OpenDocument=
- https://www.divergentes.com/regimen-de-nicaragua-busca-establecer-un-registro-de-prestamistas-informales/
- https://www.vostv.com.ni/economia/41112-nueva-normativa-exige-registro-obligatorio-a-prest/
- https://garciabodan.com/en/new-regulation-microfinance-institution-contribution-nicaragua/

## 3. Rejected

- **Household employers of domestic workers:** the obligation is real (INSS paper forms, notice within 3 days, home inspections), but the regulation dates from 1979 and there is no new trigger. The substitute is the INSS counter or an accountant, and households won't pay. Sources: https://nicaragua.justia.com/nacionales/reglamentos/reglamento-de-aplicacion-del-seguro-social-a-los-trabajadores-del-servicio-domestico-apr-27-1979/gdoc, https://www.revistaeyn.com/empresasymanagement/empleo-formal-en-nicaragua-crecio-1-en-2025-y-cerro-con-810197-trabajadores-HA30124715
- **Scrap and e-waste collectors:** MARENA and municipal permits, with fines of C$5,000–50,000, but the sector is described as barely regulated and the evidence is old. The ~220 count is unverified. Sources: https://www.revistaeyn.com/centroamericaymundo/preocupa-tratamiento-de-basura-electronica-en-nicaragua-FFEN796982, https://www.revistaeyn.com/centroamericaymundo/industria-de-reciclaje-mueve-us60-millones-en-nicaragua-FIEN474133
- **Well drillers:** per-project permits (Decree 11-L; the ANA registry of consultants and drillers) are filed by hydrogeology consultants, and there are too few firms. Source: https://faolex.fao.org/docs/pdf/nic68893.pdf
- **Beekeepers:** a tiny export sector (~USD 0.5M a year in older data), with paperwork handled by IPSA and VUCEN. Source: https://www.laprensani.com/2008/03/06/economia/1508779-nuevas-plantas-acopiadoras-de-miel
- **Agro-input retailers:** no evidence of a recurring sales-register obligation was found.
- **Cattle and abattoirs:** a free government traceability system (IPSA, with CUBE farm codes) already exists.
- **Money changers, moto-taxis, gold buyers:** informal or politically sensitive, with no software buyer.
- **Pharmacies:** not assessed (that search was refused).

## 4. Method notes

- Naming the regulator in Spanish ("CONAMI ... registro proveedores servicio de empeño") worked best. It surfaced the regulator's registry page, the National Assembly legislation database and gazette PDFs on digesto.asamblea.gob.ni. Law aggregators (nicaragua.justia.com, leybook, faolex) carry old decrees.
- Generic queries (chatarra, agroquímicos, apicultores) returned Colombian, Chilean, Argentine and Peruvian regulators. Use Nicaragua-specific agency names (MARENA, IPSA, ANA, "La Gaceta") and consider `allowed_domains` (`.gob.ni`, `laprensani.com`, `revistaeyn.com`).
- Most evidence for the quiet sectors is 2008–2016 press; independent media coverage has thinned since 2018. Recent triggers show up only as gazette resolutions.
- Searches were capped twice by a usage limit (10 attempted, 8 returned results).
