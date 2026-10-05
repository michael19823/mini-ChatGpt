# Gabon: country research

**Market class:** small economy (about 2.4M people; oil, manganese, timber). Search budget 10, all 10 used.
**Accessibility:** Gabon is not under US, EU or UK sanctions for software or IT services. Payments use the CEMAC XAF zone (bank transfer, Airtel Money, Moov Money). The internet is open. One thing to check: DGI approval ("homologation") of invoicing software may in practice need a locally registered entity or partner (unverified). So it is accessible, with friction.
**Language:** French. Searches were run in French and English.

## Industries screened

| Industry | Workflow looked at | Verdict | Reason |
|---|---|---|---|
| All VAT/IS/IBP/ISL-registered SMEs (retail, services, construction) | Standardized e-invoice ("facture électronique normalisée") with QR code, issued through DGI-approved software (LFR 2026) | **Candidate (best)** | Mandatory. 100% penalty and loss of input VAT and deductibility without it. SME tax credit for buying approved software. But the timeline, technical spec and approval process are not yet public |
| Employers / accounting firms (payroll) | Quarterly DTS to CNAMGS and CNSS plus DGI wage tax. Single Salary Declaration (DUS) project started April 2026 | Weak candidate | Real triple re-entry today, but the government is merging it into one form (DUS) and Sage and international EOR/payroll vendors already cover the rules |
| Timber / sawmills (Nkok SEZ, small "PME" permits) | SNTBG stump-to-port traceability + EUDR due-diligence files for EU buyers | Weak candidate / poor distribution | Real EU-driven trigger, but the government system (SNTBG/TraCer) and large concessionaires (Olam/Arise, Rougier, Precious Woods) set the data. The number of small buyers who can pay is tiny |
| Customs brokers / freight forwarders | Declarations in Sydonia World (ASYCUDA) since 2019 | Rejected | UNCTAD/government system plus large logistics groups' in-house tools. Few licensed brokers |
| Generic SME invoicing / quoting | Quotes and invoices with 18% VAT, NIF, RCCM | Too competitive | Already offered by local agencies and foreign tools (Kolonell, AirDevis, Odoo, Sage). This will become commodity once the approved list exists |

## Opportunities

### Opportunity: DGI e-invoice compliance connector for Gabonese SMEs ("facture normalisée" bridge)

**Industry:**  
Cross-industry SMEs subject to VAT, IS, IBP or ISL. The first target is B2B service firms and subcontractors that sell to oil, mining and public buyers.

**Buyer:**  
Owner/manager or outsourced chartered accountant ("cabinet d'expertise comptable") of a small or medium Gabonese company that issues B2B invoices from Excel, Word, Sage or Odoo.

**Trigger / Why now:**  
The Loi de Finances Rectificative 2026 makes the standardized electronic invoice mandatory for VAT/IS/IBP/ISL taxpayers. Sales must be recorded on DGI-approved devices or software. Each invoice carries a QR code and is fed to the DGI system. Input VAT recovery and expense deductibility now depend on receiving standardized invoices. The penalty is 100% of the transaction value (minimum XAF 200,000) for a missing invoice, or XAF 50,000 for an erroneous one. Rollout is phased: large companies first, then medium and small. SMEs that buy an approved system get a tax credit equal to its cost, spread over 3 years. The DGI launched a tender for the central e-invoicing/VAT platform. The project went to the data-protection authority on 15 Oct 2025. **An exact go-live date per segment is unverified.**

**Current workflow:**
1. The SME builds an invoice in Word/Excel, or in Sage or a local tool, and prints or PDFs it.
2. The accountant later re-types sales and purchases into VAT returns.
3. Large clients (oil, mining, state) reject invoices with missing NIF/RCCM details. Under the LFR they will refuse non-standard invoices because they lose input VAT.
4. Once the regime is live, each invoice must also go through approved software to get its DGI validation and QR code.

**Pain:**  
Large buyers will need standardized invoices from suppliers to keep their VAT credit and deductibility, so they will push the requirement down onto SME suppliers. The penalty equals the transaction value. Sources: gabonmediatime, Deloitte avocats, sikafinance.

**Existing solutions:**  
- The DGI central platform, under tender. It may ship a free web portal for small taxpayers (unknown).  
- Sage and Odoo integrators in Libreville (they will add connectors for larger clients).  
- Local web agencies and generic invoicing apps (Kolonell, AirDevis, Atekbot blog content).  
- Accounting firms doing it by hand.

**The gap:**  
No approved, SME-priced tool exists yet (no approved-vendor list was found). Existing ERP vendors will serve large firms first. The unserved part: (a) turning existing Excel/Sage/Odoo invoices into DGI-compliant submissions and handling rejections, and (b) letting an accounting firm handle the e-invoice and receipt checks for 20–100 client SMEs from one dashboard. That includes checking that *received* supplier invoices are valid, which drives deductibility.

**Possible product:**  
A multi-client web app for accounting firms and SMEs. It issues DGI-approved invoices (or relays invoices from existing tools via an API connector). It validates incoming supplier invoices by QR or ID. It exports VAT-return-ready ledgers. The founder would apply for DGI homologation.

**MVP:**  
Before approval: an invoice generator that meets the mandatory fields (NIF, RCCM, sequential numbering, 18% VAT, XAF), plus a checker that flags non-compliant purchase invoices. After approval: DGI API submission and QR stamping.

**Pricing hypothesis:**  
XAF 15,000–30,000/month (about USD 25–50) per SME. XAF 150,000–300,000/month per accounting firm with multiple clients. The SME tax credit offsets the cost. This is an estimate.

**How to find first customers:**  
The ONECCA-Gabon chartered-accountant roll (Ordre national des experts-comptables), the CPG employers' federation (Confédération Patronale Gabonaise) and FEG members, supplier lists of oil and mining majors (Perenco, Assala, Comilog/Eramet), and Nkok SEZ tenants.

**Risks:**  
- The DGI approval process may require a local entity, local hosting or a local partner (unverified).  
- The DGI may give SMEs a free portal.  
- The timeline may slip, as has happened in other CEMAC countries.  
- The market is small. The number of VAT-registered firms is unverified; an estimate is a few thousand.  
- A regional player that already serves comparable approved-software regimes (DRC, Benin MECeF, Côte d'Ivoire FNE) could enter.

**Kill condition:**  
The DGI publishes a free portal/app that SMEs can use directly, OR approval is limited to locally owned vendors, OR there is no published API/spec by mid-2027.

**Score:** 5/10

**Sources:**  
- https://gabonmediatime.com/gabon-facture-electronique-la-revolution-fiscale-qui-attend-toutes-les-entreprises/  
- https://gabonmediatime.com/gabon-facturation-tva-sanctions-tout-ce-qui-change-pour-les-pme-avec-la-lfr-2026/  
- https://gabonmediatime.com/lfr-2026-les-30-mesures-qui-vont-changer-la-vie-des-entreprises-gabonaises/  
- https://blog.avocats.deloitte.fr/gabon-les-principales-mesures-de-la-loi-de-finances-pour-2026/  
- https://www.sikafinance.com/marches/gabon-la-direction-des-impots-mise-sur-la-facture-electronique-pour-assainir-et-moderniser-la-fiscalite_56875  
- https://echosdeleco.com/articles/facture-electronique-pourquoi-le-gabon-veut-desormais-tracer-toutes-les-transactions-des-entreprises  
- https://www.gabonreview.com/le-gabon-se-prepare-a-la-facture-electronique-un-tournant-pour-la-transparence-fiscale/  
- https://afriqueitnews.com/finance/gabon-lance-appel-offres-facturation-electronique-tva/  
- http://www.caudexco.com/larrivee-de-la-facture-electronique-au-gabon-une-revolution-pour-la-deductibilite-des-charges/

---

### Opportunity: Payroll-declaration prep for small accounting firms (DTS/CNSS/DGI, then DUS)

**Industry:**  
Payroll bureaus / accounting firms.

**Buyer:**  
A small accounting firm or payroll bureau in Libreville or Port-Gentil that does payroll for 10–80 SME clients.

**Trigger / Why now:**  
CNAMGS quarterly salary declarations (DTS) must now be filed online ("zero paper", via Gabon Connect / the employer portal), with penalties of up to 25% for non-declaration. The CNSS changed rates and the income base from January 2026 (Sage statutory update). On 28 April 2026 the DGI, CNSS and CNAMGS started work on a single salary declaration (DUS) platform.

**Current workflow:**
1. Run payroll in Sage or Excel.
2. Re-key the quarterly totals per employee into the CNAMGS portal (DTS).
3. Declare and pay the CNSS separately.
4. File wage tax with the DGI.
5. Reconcile the three agencies when amounts differ.

**Pain:**  
Triple entry and late penalties (CNAMGS up to 25%). The fact that the government is now building a single form shows the pain is real.

**Existing solutions:**  
Sage (Sage 300 People has Gabon CNSS updates), Mercans, Playroll, Ontop and Rivermate (international EOR/payroll), local Sage resellers, and manual work by accounting firms.

**The gap:**  
Bulk upload or pre-fill from any payroll export into the portals for multi-client firms. The value is temporary until DUS lands.

**Possible product:**  
Converts payroll exports into portal-ready DTS/CNSS/DGI files and a reconciliation report. Later it switches to DUS output.

**MVP:**  
Excel/Sage export → validated DTS file plus a cross-agency reconciliation sheet.

**Pricing hypothesis:**  
XAF 50,000–100,000/month per firm (estimate).

**How to find first customers:**  
The ONECCA-Gabon roll and Sage partner networks.

**Risks:**  
DUS removes most of the pain. Whether the portals accept bulk uploads is unverified. Very small market.

**Kill condition:**  
The portals do not accept file upload, or DUS goes live before 2027.

**Score:** 3/10

**Sources:**  
- https://gabonmediatime.com/gabon-impots-cnss-cnamgs-unis-pour-simplifier-la-declaration-des-salaires/  
- https://gabonmediatime.com/cnamgs-jusqua-25-de-penalite-pour-les-employeurs-qui-ne-declarent-pas-leurs-cotisations/  
- https://gabonmediatime.com/gabon-les-employeurs-appeles-a-sacquitter-de-leurs-cotisations-a-la-cnamgs/  
- https://communityhub.sage.com/za/sage-300-people/f/announcements/261501/statutory-update-gabon-cnss-fnh-changes-effective-january-2026  
- https://dsr.mercans.com/payroll-dossiers/gabon/

---

### Opportunity: EUDR due-diligence package for small timber processors/exporters

**Industry:**  
Timber processing / export (Nkok SEZ and small forest-permit holders).

**Buyer:**  
Export/compliance manager at a small or medium sawmill or veneer plant that sells to EU importers.

**Trigger / Why now:**  
EUDR requires plot geolocation and due diligence for every shipment to the EU. The application date for large operators is late 2026, after EU postponements; the exact current date was not re-verified in this session. In October 2023 Gabon committed to moving the whole sector onto the SNTBG stump-to-port system. In 2024 only about 30% of industrial forests were certified and SNTBG was only partly operational.

**Current workflow:**
1. Pull permit/concession data and SNTBG/TraCer records.
2. Assemble geolocation, legality and certification documents in spreadsheets/PDFs.
3. Answer each EU importer's questionnaire separately.

**Pain:**  
Losing EU market access. Mills in Nkok produce more than 40% of exports. Mongabay and EIA documented traceability gaps and corruption in Nkok.

**Existing solutions:**  
SNTBG/TraCer (government), FSC/PEFC-PAFC certification bodies, in-house systems at large groups (Olam/Arise GSEZ, Rougier, Precious Woods), and EU importer due-diligence platforms and consultants.

**The gap:**  
A per-shipment EUDR evidence pack for the small non-certified mills, many of them Asian-owned in Nkok that sell mostly to Asia. Few of these sell to the EU, so demand is thin.

**Possible product:**  
A shipment-level dossier builder: lot → permit → GPS polygons → legality documents → an EUDR-ready package for the importer.

**MVP:**  
Template plus a GeoJSON polygon tool plus a document checklist per shipment.

**Pricing hypothesis:**  
USD 100–300 per month or per shipment pack (estimate).

**How to find first customers:**  
The GSEZ/Nkok tenant list, ATIBT members, and the UFIGA/UFIEG timber unions.

**Risks:**  
Buyers are concentrated. The government system may become the reference. Most small mills export to Asia. The EUDR timeline may be postponed further.

**Kill condition:**  
Fewer than about 20 Gabonese non-certified exporters sell to the EU, or SNTBG exports EUDR-ready data for free.

**Score:** 3/10

**Sources:**  
- https://eia.org/press-releases/tracked-trees-transparent-forests/  
- https://eia.org/traceability-and-transparency-in-gabon/  
- https://www.forest-trends.org/wp-content/uploads/2022/01/Dashboard-Gabon_Sept-2024.pdf  
- https://news.mongabay.com/2023/05/corruption-threatens-timber-traceability-in-nkok-gabon/  
- https://www.cdbg-gabon.com/article-full4-en.html  
- https://www.ariseiip.com/project/gsez/

## Rejected after competitor research

- **Customs declaration automation for transitaires.** Sydonia World (UNCTAD ASYCUDA) has been mandatory since January 2019. The licensed brokers are few and the large ones belong to logistics groups with in-house tools. Integration requires government-granted access. Sources: https://www.gabonreview.com/dedouanement-des-marchandises-le-systeme-sydonia-world-deploye , https://cio-mag.com/gabon-dematerialisation-enclenchee-pour-le-fisc-et-les-douanes
- **Payroll engine for employers.** This is killed by Sage (local resellers, statutory updates for 2026) and EOR/payroll vendors (Mercans, Playroll, Ontop, Rivermate). The DUS project will also remove the re-entry pain.

## Attractive problem, poor distribution

- **Timber traceability / EUDR for small mills.** The pain is real, but there are very few EU-facing small exporters, the government system (SNTBG) is the reference, and corruption and opacity in Nkok make the data unreliable.

## Too competitive

- **Generic SME invoicing/quoting apps** (18% VAT, NIF, Airtel Money links). Local agencies such as Kolonell and AirDevis already offer them, as do Odoo and Sage, and the DGI-approved software list will commoditize them.

## Not researched (budget)

The following were not screened: mining subcontractors (Comilog/Eramet local content), pharmacies (controlled drugs), fisheries (IUU/EU catch certificates), and private schools. Given the market size, Gabon is better served as an add-on to a CEMAC/francophone-Africa e-invoicing product (Cameroon, Congo, DRC, Côte d'Ivoire, Benin) than as a standalone market.
