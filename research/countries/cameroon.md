# Cameroon: opportunity research

Research date: 2026-10-04. Searches used: 11 (medium market budget). Languages: French and English.
WebFetch was not used. All facts come from search-result snippets, and the claims I could not check against a primary text are marked **unverified**.

**Accessibility:** Cameroon is not under broad US, EU or UK sanctions on software or IT services. A foreign solo founder can sell there. Payments run mostly on mobile money (MTN MoMo, Orange Money) and bank transfer in XAF (CEMAC zone). The North-West and South-West regions have an ongoing security crisis, but Douala and Yaoundé, where the business market is, are reachable. The real barriers are practical: buyers expect French-language, in-person sales, and prices have to be low. It is not a legal barrier.

---

## Industries screened

| Industry | Workflow examined | Verdict | One-line reason |
|---|---|---|---|
| All VAT-registered B2B firms (DGE/DME first) | Electronic invoicing in real time (CTC), set by the 2026 Finance Law | **Candidate** | Strong mandatory trigger. The technical spec and the phase-in for mid-size firms are not public yet, so the timing is uncertain |
| Timber / sawmills (exporters to the EU) | EUDR legality and geolocation dossier per shipment | **Candidate** | Applies from 30 Dec 2026. The state system (SIGIF2) is not recognized by the EU, so exporters build the evidence themselves |
| Cocoa / coffee exporters | EUDR due-diligence package per lot | **Weak candidate** | The CICC already offers free traceability and a free GeoShare platform. The big exporters (Ofi, Telcar) have their own systems |
| Payroll / all employers | Monthly CNPS DIPE and DGI salary-tax DIPE | Rejected | Odoo Cameroon payroll modules, Sage Paie, local DIPE generator services and training seminars already cover it |
| Customs brokers / freight forwarders | e-GUCE single window, customs declarations | Too competitive / closed | e-GUCE (GUCE-GIE) is the single state-backed portal, and broker software is an enterprise market |
| Pharmacies | Prescription-only dispensing rule, lot and expiry tracking | Poor distribution / weak trigger | No reporting portal to integrate with. It is generic pharmacy POS, and local agencies already sell it |

---

## Opportunity: E-invoice "CTC bridge" for mid-size firms on Excel/Sage/local billing tools

**Industry:**
Cross-industry: mid-size VAT-registered companies (DME taxpayers) such as distributors, wholesalers, construction suppliers and service firms.

**Buyer:**
The finance director or chief accountant (DAF / chef comptable) of a DME taxpayer. Also the chartered accounting firms (cabinets d'expertise comptable, member firms of ONECCA) that keep the books of many such SMEs.

**Trigger / Why now:**
The 2026 Finance Law brings in mandatory electronic invoicing for some VAT-liable B2B transactions under a real-time CTC model. Invoices must be issued in structured form and validated by, or sent to, the tax authority. The rollout starts with large-enterprise (DGE) and mid-size (DME) taxpayers and then widens. In April–May 2026 the DGI awarded a KfW-financed contract worth 4.7 billion FCFA for a new integrated tax system (SIGIT). So the central platform is still being built, and connection rules will arrive in 2026–2027. The DGI is also running a real-time taxation (TTR) system in telecoms, gaming, beer and cement.

**Current workflow:**
1. Invoices are made in Excel or Word templates, Sage 100, or local billing tools, then printed or emailed as PDFs.
2. The accountant re-keys the invoices into the monthly VAT return on the DGI e-services portal.
3. Once the CTC is live, each invoice will need to be sent to the DGI platform and validated (probably with an ID or QR code) before it goes to the customer. Legacy tools cannot do this.

**Pain:**
The rule is mandatory and comes with penalties. The AfDB estimates the measure could bring in about 100 billion FCFA of extra revenue, which tells you how hard enforcement will be. Côte d'Ivoire's FNE (normalized e-invoice) is the closest regional precedent, and it set off a scramble among SMEs to connect over API.

**Existing solutions:**
- EDICOM: a global e-invoicing provider that already publishes on the Cameroon obligation and targets large enterprises.
- Odoo partners and other ERPs. Local ERP vendors such as Omamori (an OHADA SME ERP) and others in the "top 7 gestion commerciale Cameroun" comparisons will add connectors.
- Sage 100 local resellers, who will probably sell modules.
- Accounting firms entering invoices manually on whatever free DGI portal is provided (**unverified** that a free portal will exist, but one is likely, as with Côte d'Ivoire's FNE web portal).

**The gap:**
Many DME firms will keep Excel, old Sage, or homemade billing tools. They need a cheap layer that takes their existing invoice (CSV, Excel or PDF) and pushes it to the DGI CTC API. It would handle rejections, store the validated QR or ID, and reconcile the result with the monthly VAT return. Enterprise vendors (EDICOM) price for DGE firms, and ERP vendors want a full system migration.

**Possible product:**
A multi-company web app built for accounting firms. Clients upload invoice batches or connect Sage. The app validates them against DGI rules, submits through the API, works a queue of rejected invoices, and exports a VAT-return reconciliation.

**MVP:**
Excel/CSV import → schema validation → submission to the DGI (sandbox once published) → PDF stamped with the QR code → a dashboard of rejected invoices. Before the spec exists, the MVP could be a reconciliation of "invoices issued vs. VAT return" for accounting firms.

**Pricing hypothesis:**
15,000–50,000 FCFA (about US$25–85) per company per month, or 100–300 FCFA per invoice. Accounting firms on a per-client plan.

**How to find first customers:**
The ONECCA register of chartered accountants (tableau de l'ordre), DGI lists of DGE/DME taxpayers (lefisk.cm republishes DGI orders such as the withholding-agent list), the GICAM employers' association, and Douala chamber of commerce events.

**Risks:**
The spec and timeline for DME firms are still unpublished. The DGI may require an "approved provider" status that a foreign solo founder can only get with a local entity. The SIGIT consortium may ship a free web portal good enough for low-volume firms. EDICOM and local ERP vendors will move fast.

**Kill condition:**
The DGI ships a free portal with bulk Excel upload, or it requires local accreditation that a solo founder cannot get. Another kill: 10 accounting-firm interviews show that DME clients will simply move to Odoo or Sage.

**Score:** 5/10 (strong why-now, but unknown specs, approval risk and price-sensitive buyers)

**Sources:**
- https://edicomgroup.com/fr/blog/facturation-electronique-obligatoire-au-cameroun
- https://www.investiraucameroun.com/gestion-publique/0705-23370-fiscalite-le-cameroun-confie-la-refonte-numerique-de-la-dgi-a-un-consortium-pour-4-7-milliards-de-fcfa
- https://ecomatin.net/recettes-fiscales-le-cameroun-pourrait-capter-100-milliards-fcfa-de-plus-grace-a-la-facturation-electronique-bad
- https://ecomatin.net/cameroun-letat-vise-40-milliards-fcfa-des-2026-grace-a-la-taxation-en-temps-reel-des-telecoms-des-jeux-de-la-biere-et-du-ciment
- https://lefisk.cm/blog/circulaire-application-loi-finances-2026-cameroun-mesures-fiscales
- https://www.dgb.cm/wp-content/uploads/2025/11/PROJET-DE-LOI-FINANCES-2026_FR_26112025.pdf
- https://www.alivaon.com/blog/meilleurs-logiciels-gestion-commerciale-cameroun
- https://www.omamori.cm/en_US/

---

## Opportunity: EUDR legality and geolocation dossier builder for small and mid-size Cameroonian timber exporters

**Industry:**
Forestry, sawmills and timber export.

**Buyer:**
The export or compliance manager at a small or mid-size forestry concession holder or sawmill shipping to the EU. Also the EU importers (timber traders) who buy from them and must file the EUDR due-diligence statement.

**Trigger / Why now:**
The EUDR applies to large and medium operators from 30 Dec 2026. Timber importers must prove legality, deforestation-free status and plot geolocation. Cameroon's state timber-tracking system SIGIF2 is not recognized by the EU or Germany for EUTR or FLEGT purposes. So the legality evidence has to be assembled document by document by the private sector.

**Current workflow:**
1. The exporter collects concession and permit documents, felling records, transport waybills, tax and social clearance certificates and certification files (FSC/PAFC, if any).
2. The exporter maps the concession or harvest-plot polygons in GIS or by GPS.
3. The exporter emails PDFs and spreadsheets to each EU buyer in that buyer's own format. EU importers then re-check legality using the TRAFFIC/FODER step-by-step guide.

**Pain:**
Without an EU-recognized national system, every shipment's legality rests on scattered paperwork. ATIBT has published EUDR guidance specifically for timber suppliers, and TRAFFIC/FODER wrote a verification guide. Both suggest that buyers and suppliers find the evidence chain hard to put together. Losing access to the EU market is the penalty.

**Existing solutions:**
- Private certification (FSC/PAFC) and its chain-of-custody tools, mostly used by the large certified concessions.
- The free TRAFFIC/FODER verification guide and ATIBT guidance documents.
- Consultants and certification bodies.
- EU-side EUDR platforms used by importers (generic DDS tools), which do not help with collecting Cameroon-specific legality documents.

**The gap:**
No tool maps Cameroon's specific legality checklist (the TRAFFIC/FODER and EFI-style lists of documents) to each shipment, tracks document expiry, and produces a buyer-ready EUDR evidence pack with geolocation. Uncertified small and mid-size exporters are worst off.

**Possible product:**
A shipment-based evidence locker. The exporter uploads concession documents once and links waybills and plot polygons to each shipment. The tool flags expired or missing items against the Cameroon legality checklist and exports a pack plus GeoJSON in the format EU importers need for their DDS.

**MVP:**
A checklist template drawn from the TRAFFIC/FODER guide, document upload with expiry dates, a polygon upload, and a per-shipment PDF/ZIP + GeoJSON export.

**Pricing hypothesis:**
US$150–400 per month per exporter, or US$30–60 per shipment pack. EU importers could pay to onboard their suppliers.

**How to find first customers:**
ATIBT membership and the Cameroon timber trade association GFBC (**unverified** current membership list), MINFOF lists of concession holders and export permits, EU importers' supplier lists (ATIBT/LCB members), and the FODER/TRAFFIC networks.

**Risks:**
The market is small, probably a few dozen to under 200 active EU-facing exporters (**estimate**). EU timber demand for Cameroon has been falling, and many exporters sell to Asia, where the EUDR does not apply. A further EUDR delay or simplification would remove urgency. Certification bodies may bundle this service.

**Kill condition:**
Fewer than about 50 uncertified exporters still ship to the EU. Another kill: EU importers say they already collect this through their own supplier portals.

**Score:** 4/10

**Sources:**
- https://www.eeas.europa.eu/delegations/cameroon/contr%C3%B4lel%C3%A9galit%C3%A9-du-bois-camerounais-les-r%C3%A9serves-de-l%E2%80%99ue-et-de-la-coop%C3%A9ration-allemande-sur-le_und_en
- https://www.atibt.org/en/news/12967/position-of-europeanpartners-on-sigif-2-in-cameroon
- https://www.atibt.org/files/upload/01/260625-EUDR-InformationForTimberSuppliers-ATIBT-LCB-ENG.docx
- https://pfbc-cbfp.org/en/news/detail/traffic-foder-un-guide-pratique-pour-verifier-la-legalite-du-bois-importe-du-cameroun
- https://fastmarkets.com/insights/eudr-regulations-could-upend-wood-products-shipments-to-europe

---

## Opportunity: EUDR lot-dossier packager for small cocoa/coffee exporters and cooperatives

**Industry:**
Cocoa and coffee export.

**Buyer:**
Small licensed exporters and cooperative unions (not the large exporters such as Ofi or Telcar).

**Trigger / Why now:**
The EUDR applies to large and medium operators from 30 Dec 2026. Cameroon exports 78% of its cocoa and 87% of its coffee to the EU. In August 2026 the Trade Minister met about 20 exporters and processors to check their readiness.

**Current workflow:**
1. The exporter buys beans through middlemen (pisteurs) and cooperatives.
2. The exporter queries the CICC traceability platform or GeoShare for the geolocation of the farms behind each lot.
3. The exporter puts together legality documents and plot data in the format each EU buyer wants, by email and Excel.

**Pain:**
Analysts say that merging separate corporate databases into the state-run CICC system creates friction and operational risk in the near term. Small exporters lack the resources to map farms (which is why GeoShare exists).

**Existing solutions:**
- The CICC traceability platform and GeoShare (both free, state and interprofessional).
- Large exporters' own systems (Ofi, Telcar).
- The national legality standard built with the EFI (European Forest Institute) Sustainable Cocoa Programme.
- Global traceability SaaS (for example Farmforce, Koltiva and Meridia; **unverified** for Cameroon deployments).

**The gap:**
Small. The free state platforms cover data capture. What remains is reconciling lot weights with the geodata and formatting a separate pack for each buyer, and that gap is thin.

**Possible product:**
A lot-to-plot reconciliation tool that checks mass balance (lot weight against plot yield capacity) and exports a buyer pack.

**MVP:**
An Excel import of purchases plus a GeoShare export, a mass-balance check, and a PDF/GeoJSON pack.

**Pricing hypothesis:**
US$100–250 per month per exporter.

**How to find first customers:**
The ONCC/CICC list of approved exporters. About 20+ active exporters, plus cooperative unions (**estimate**).

**Risks:**
Free state platforms and the dominant buyers own the data flow. Very few buyers. The government claims 99% traceability is already achieved.

**Kill condition:**
The CICC platform already exports buyer-ready DDS data. In practice this is likely, so the idea is a near-reject.

**Score:** 3/10

**Sources:**
- https://www.businessincameroon.com/agriculture/1607-14854-cameroon-says-cocoa-coffee-sector-99-traceable-ready-for-eu-deforestation-law
- https://www.businessincameroon.com/export/2608-16619-eu-deforestation-rules-cameroon-checks-exporters-readiness-seeks-better-returns-for-farmers
- https://www.foodbusinessmea.com/?p=2147939
- https://allafrica.com/stories/202507210357.html
- https://cropgpt.ai/cameroon-cocoa-georeferencing-platform-implementation-for-eudr-compliance
- https://efi.int/sites/default/files/files/flegtredd/Sustainable-cocoa-programme/Cocoa%20insights/EUDR%20Preparedness%20check%20CAM_EN.pdf

---

## Rejected after competitor research

- **Generating the CNPS and DGI monthly DIPE (payroll declarations).** This is a mandatory monthly filing, due before the 15th on the cnps.cm e-DIPE portal, with a "magnetic DIPE" file upload. It is already served by:
  - Odoo apps (`hr_payroll_cameroun` by paiesoft, `l10n_cm_payroll_cnps` for v18 and v19, which generate both the CNPS and DGI DIPE files);
  - Sage Paie with local trainers;
  - local services such as Rapide Service SARL;
  - free simulators (lefisk.cm, afrotools).

  Sources: https://apps.odoo.com/apps/modules/18.0/l10n_cm_payroll_cnps, https://apps.odoo.com/apps/modules/17.0/hr_payroll_cameroun, https://www.cameroondesks.com/2024/06/seminaire-de-formation-sur-la-generation-automatisee-de-dipe-magnetiques-cnps.html, https://kamerpower.com/fr/cnps-teledeclaration-cameroun-www-cnps-cm
- **Cocoa/coffee EUDR traceability (data capture).** Killed by the free CICC traceability platform and GeoShare. Only the narrow packager above remains, at 3/10.

## Attractive problem, poor distribution

- **Pharmacy prescription and lot/expiry compliance.** A new prescription-only dispensing rule exists, but there is no government portal to report to. The product would be generic pharmacy POS, and Douala agencies already build pharmacy apps (for example kolonell.com). Buyers are reachable through the ONPC pharmacists' order, but their willingness to pay is low. Sources: https://afrique.le360.ma/societe/lordonnance-desormais-obligatoire-en-pharmacie-au-cameroun-la-pilule-passera-t-elle_RZNIOYTXCNH6FLWRA3KHBKOFSE/, https://kolonell.com/fr/blog/application-gestion-pharmacie-ordonnance-douala-2026

## Too competitive / closed

- **Customs and foreign-trade formalities.** All procedures run through the state-backed e-GUCE single window (GUCE-GIE), which also handles payments. The private sector criticizes it, but its partners (CNCC, banks, Campost) control the integrations, and broker or forwarder software is an enterprise sale. Sources: https://ecomatin.net/commerce-exterieur-le-secteur-prive-epingle-le-guce, https://ecomatin.net/commerce-exterieure-la-plateforme-e-guce-collecte-pres-de-1000-milliards-en-2022

## Overall verdict

Cameroon's one real "why now" is the 2026 e-invoicing (CTC) mandate. It is worth watching until the DGI publishes the technical spec and the DME phase-in date, and worth interviewing accounting firms in Douala. It is not worth building yet. The EUDR ideas are real, but they target small buyer pools that state platforms and certifiers already partly serve.
