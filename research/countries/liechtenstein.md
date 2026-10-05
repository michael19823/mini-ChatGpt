# Liechtenstein: Opportunity Research

**Status:** Microstate (about 40,000 residents). Search budget: 4 WebSearch calls, all used. Research date: 2026-10-05.
**Accessibility:** Fully accessible. Liechtenstein is in the EEA and in a customs and currency union with Switzerland (CHF). It is not subject to sanctions, and a foreign solo founder can sell software there. The constraint is market size, not access.

**Bottom line:** I found no viable standalone indie opportunity. The one sector with dense, mandatory and recurring compliance work is the trust and company service provider (TCSP / "Treuhänder") sector, regulated by the FMA. There is one weak candidate there (below). It works only as a Liechtenstein module added to a Swiss (or DACH) fiduciary or AML product, not as a business on its own. I did not reach the vendor landscape in my searches (see the competition note), so competition is unverified, and that alone keeps the score low.

---

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Trustees / TCSPs (Treuhänder) | SPG due-diligence files (KYC, business profiles), FMA change notifications, VwbPG beneficial-owner register filings, AIA/FATCA | Weak candidate (add-on only) | The workflow is real and mandatory, and the April 2026 TrHG revision tightens supervision. But the buyer pool is small (low hundreds), and the main TCSP software vendors are unverified. |
| All VAT-registered SMEs | VAT returns and corrections via the mandatory eVAT portal (since Jan 2025) | Reject | Government-provided free portal. Returns follow the Swiss VAT model, and Swiss accounting tools (Abacus, Bexio etc.) already cover it. Quarterly, low pain. |
| Public-sector suppliers | e-invoicing to public authorities (EN 16931) | Reject | No B2G/B2B mandate yet. The market is tiny, and generic Peppol/e-invoice vendors already serve it. |
| Accountants / payroll bureaus | Payroll and AHV filings (Liechtenstein social insurance, cross-border workers from CH/AT) | Reject (not researched in depth) | Swiss and Austrian payroll suites already serve Liechtenstein, and the cross-border nuance is too small a niche. |
| Banks / asset managers / funds | AML transaction monitoring, EU AML package | Reject | Enterprise procurement, and incumbent RegTech vendors serve it. Out of scope for solo founders. |

---

## Opportunities

### Opportunity: Liechtenstein TCSP compliance pack (FMA/SPG/VwbPG change-and-evidence tracker)

**Industry:**
Trust and company service providers (licensed Treuhänder and trust companies)

**Buyer:**
Compliance officer or managing trustee at a small or mid-sized Liechtenstein Treuhand firm (about 2–30 staff) administering foundations, establishments (Anstalten) and trusts.

**Trigger / Why now:**
- The Treuhändergesetz (TrHG) amendment of 2 April 2026 (LGBl. 2026/179) strengthens FMA supervision and registration. It also adds stricter trustworthiness requirements and new FMA powers (special representatives, observers, ordering the termination or blocking of business relationships), and raises supervisory fees.
- Breaches of SPG reporting duties become administrative offences sanctioned directly by the FMA, no longer criminal offences. That probably makes enforcement more frequent (my inference).
- The EU AML package (AMLR/AMLA, applying from 2027) will reach EEA member Liechtenstein, so further due-diligence changes are coming.
- Context, unverified: Swiss media (Blick, Vol.at) reported that US Russia-related sanctions shook the Liechtenstein financial centre and that trustees gave up mandates. That raises the stakes of documented due diligence.

**Current workflow (inferred from FMA forms and job ads; not confirmed by interviews):**
1. For each structure, maintain a due-diligence file: beneficial-owner identification, business profile, source of funds, risk rating and periodic review.
2. Report changes (for example to managing persons or trustworthiness facts under Art. 6 TrHG) to the FMA in writing "without delay", using Word forms downloaded from fma-li.li.
3. File and update beneficial-owner data in the VwbPG register.
4. Do AIA (CRS) and FATCA classification and reporting for the same structures.
5. Prepare for the annual SPG audit by an external auditor, or an on-site FMA inspection.

**Pain:**
- The FMA's 2023 TCSP feedback letter covers 97 direct on-site inspections and 263 auditor-performed audits of due-diligence-obligated entities, so supervision is frequent and audits are routine.
- FMA notification forms are .docx files, so submissions are manual.
- Job ads (for example BDO Liechtenstein, Compliance Officer KYC) list KYC, AIA, FATCA and VwbPG duties together. The same structure data feeds four regimes.

**Existing solutions:**
Unverified. My 4 searches did not surface any dedicated Liechtenstein TCSP compliance vendor. That does not mean none exist. Swiss and Liechtenstein fiduciary administration suites and international TCSP platforms (for example Viewpoint, Navigator-type trust admin systems, or in-house Excel and Word) are the likely substitutes. Also: auditors, consultants, and the large firms' own compliance teams. I named none of these from verified search results.

**The gap (hypothesis):**
One structure record could drive the SPG profile review schedule, FMA change-notification drafts, VwbPG register updates and AIA/FATCA classification consistency checks, with an audit-ready evidence trail. That would replace Word forms, Excel and email.

**Possible product:**
A Liechtenstein-specific rules-and-calendar layer on top of an existing trust-administration system. It would track review deadlines and generate the right FMA/VwbPG submission drafts from structure changes.

**MVP:**
A web app where the trustee imports structures from a spreadsheet. It flags due SPG reviews and missing evidence, and pre-fills the FMA change-notification .docx forms.

**Pricing hypothesis:**
CHF 300–800 per month per firm, or about CHF 2–5 per structure per month (estimate).

**How to find first customers:**
- The Liechtensteinische Treuhandkammer (THK, thk.li) member list.
- The FMA public register of licensed trustees and trust companies.
- Auditors who perform SPG audits (as a referral channel).

**Risks:**
- Tiny market. The licensed trustee count is likely in the low hundreds (unverified), and the sector is shrinking under sanctions pressure.
- A conservative, trust-based buying culture that prefers local vendors with data hosted in CH/LI.
- Incumbent trust-admin suites may already include these features.
- German-language-only market.

**Kill condition:**
- Interviews show the main trust-admin systems already handle SPG reviews and VwbPG and FMA outputs.
- Or fewer than about 100 firms are reachable.
- Or firms say compliance is handled by their auditor or an outsourced compliance provider.

**Score:** 3/10 (standalone). Somewhat higher as a module of a Swiss fiduciary/AML product.

**Sources:**
- Amendment to the Treuhändergesetz of 2 April 2026: https://www.gesetze.li/chrono/pdf/2026179000
- FMA TCSP feedback letter 2023 (inspection and audit counts): https://fma-li.li/fma-li/documents/gwp-afi/feedbackschreiben-tcsp-2023.pdf
- FMA notification form, details of the person actually in charge (.docx): https://fma-li.li/fma-li/documents/gwp-afi/meldeformular-angaben-zur-tatsachlich-leitenden-person-2.docx
- FMA guidance 2018/33, trustee licence for a company: https://fma-li.li/fma-li/documents/rechtsgrundlagen/wegleitungen/fma-wl-2018-33-treuhanderbewilligung-einer-gesellschaft-umfassend.pdf
- BDO Liechtenstein job ad, Compliance Officer KYC: https://www.bdo.li/getmedia/3a2c0895-45e5-4c16-9e84-ec0e74f8a8c0/BDO-Stelleninserat-Compliance-Officer-KYC.pdf?ext=.pdf
- Grant Thornton on the EU AML package (2026): https://www.grantthornton.ch/globalassets/1.-member-firms/switzerland/insights/2026/05---eu-aml-package/2605-eu-aml-de.pdf
- Sanctions context (unverified detail): https://www.blick.ch/politik/wegen-us-sanktionen-gegen-russland-liechtensteinische-treuhaender-springen-ab-id21569262.html ; https://www.vol.at/us-sanktionen-bringen-liechtensteins-finanzplatz-ins-wanken/9903083

---

## Rejected after competitor research

- **VAT filing helper for the eVAT portal.** Killed by the free government eVAT portal (mandatory since Jan 2025) plus Swiss accounting software that already handles CH/LI VAT. Sources: https://comarch.com/trade-and-services/data-management/legal-regulation-changes/liechtenstein-makes-evat-portal-mandatory-for-vat-transactions ; https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing+in+Liechtenstein
- **Public-sector e-invoicing (EN 16931).** No mandate exists, the buyer pool is tiny, and generic Peppol/e-invoicing providers already serve it. Source: https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing+in+Liechtenstein

## Attractive problem, poor distribution

- **TCSP compliance pack (above).** The pain is real, but the buyer pool is a few hundred firms in a closed, trust-based community. Distribution only works through THK or auditors, or as an add-on to a Swiss product.

## Too competitive

- **Bank and fund AML monitoring, and EU AMLR readiness for banks.** Enterprise RegTech vendors serve it, and selling requires enterprise procurement.

## Add-on note

Liechtenstein is best served as an extension of a **Swiss** product (shared CHF, the customs union, VAT practice similar to Switzerland's, and German language). The reason is that a Swiss fiduciary/AML compliance tool could add LI-specific SPG/VwbPG/FMA templates cheaply. **Austria** is the secondary option (EEA/EU AML alignment).
