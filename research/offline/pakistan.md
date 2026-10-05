# Pakistan: offline / quiet-industries pass

Date: 2026-10-05. Searches used: 33 of 40. A usage limit stopped the research early, so this
report is shorter than planned. Searches for overseas employment promoters and the healthcare-waste
contractor market failed before they returned anything. I have not used those topics as evidence.

The existing country report (`research/countries/pakistan.md`) covers DRAP Track & Trace, sales-tax
reconciliation, the FBR plus provincial invoice router and rice-exporter evidence packs. None of
those is repeated here.

**Main finding.** In Pakistan, and in Punjab above all, the government's IT arm (PITB) has built a
free app for almost every police-facing register: Hotel Eye for guests, the Tenant Registration
System, the eGadget app for second-hand phones and the Kissan Card dealer system. That removes the
classic "paper dealer register" gap, which the seed list assumes exists. What remains is the
layer *around* these free tools: several overlapping regimes that apply to one shop, plus
inspection-evidence work. Willingness to pay is weak across the board. Several quiet industries
(jewellers, brick kilns) actively resist documentation.

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Jewellers / dealers in precious metals and stones (sarafa) | FBR DNFBP registration and AML/CFT customer due diligence (CDD), record-keeping and suspicious-transaction reports via goAML (CDD is triggered at Rs 2m or more); Tier-1 POS integration; draft SRO 288(I)/2026 extends POS/e-invoice integration and CCTV; s.175C lets FBR station officials in shops | Nationwide strikes in Apr–Jun 2026 against FBR documentation; the association says registration and documentation procedures are "complex for small and medium jewellers" | Unverified. No public DNFBP register count found; "around 175 jewellers" are under enforcement action (2026 news) | **Opportunity (weak–moderate)** | Several overlapping regimes for one shop; but POS vendors already target jewellers and owners resist documentation |
| 2 | Small clinics, labs, hakeems, homeopaths (healthcare waste) | Punjab Hospital Waste Management Rules 2014: segregation and storage, an EPA-authorised contract with the waste handler (Rule 28), inspection under Rule 23 using the EcoWatch standardised inspection-report format; plus PHC licensing and Minimum Service Delivery Standards (MSDS) | EPA orders (2025) say hospitals sign handler agreements *without* prior authorisation; PHC licensing is a portal plus physical inspection | 60,690 HCEs registered with PHC (PHC board, via punjab.gov.pk) | **Opportunity (weak–moderate)** | Recurring evidence trail for two regulators (EPA and PHC); payment more likely for a service than for software |
| 3 | Guesthouses, hostels, short-let hosts (Punjab) | Punjab Information of Temporary Residents Act 2015: guest data into Hotel Eye (all private guesthouses by 15 Jun 2025, Airbnb/Booking guests included); tenant registration with police | Hotel Eye replaced weekly *paper* reports to police stations; police say SHOs under-report the number of guesthouses | Unverified (police say the true number exceeds the official list) | **Opportunity (weak)** | One check-in has to go to Hotel Eye, the OTA and the guest book; but Hotel Eye is free and no third-party API was found |
| 4 | Pesticide, fertiliser and seed dealers (Kissan Card) | Distribution licence (Agriculture Pesticide Ordinance 1971, amended 2012); district licensing committee with physical shop verification; Kissan Card dealers keep a daily record of every subsidised DAP bag | Licence applications delivered by hand to 21 Davis Road, Lahore; monthly committee meetings | About 2,160 to 3,000 notified Kissan Card dealers (Punjab govt / press) | Watch | The PITB-run Kissan Card system already captures sales; little paperwork left over |
| 5 | Brick kilns (Punjab) | Smog Rules 2023: zigzag technology and fuel limits; Factories Act registration ordered by the Lahore High Court | 45,736 inspections, 777 kilns demolished, 419 sealed, Rs 67.76m in fines (Jan–Jul 2026) | About 10,394 kilns (EPA / Urban Unit survey) | Rejected | Compliance means a capital retrofit, not paperwork; enforcement is physical (demolition) |
| 6 | Second-hand mobile phone dealers | Police pro forma with seller CNIC and IMEI (Karachi, Islamabad); Punjab eGadget app checks IMEIs against stolen-phone records | Paper pro forma in Karachi | Unverified | Rejected | Punjab's free PITB eGadget app *is* the register; no money in it |
| 7 | Households employing domestic workers | Punjab Domestic Workers Act 2019: registration of workers and employers with PESSI; rules notified 2025; minimum wage Rs 40,000 | As of June 2025, *no* domestic workers had been registered with PESSI | Unverified (millions of workers, estimate) | Rejected | The obligation is not enforced, so households have no reason to pay |
| 8 | Landlords / property dealers (tenant registration) | Tenant details to the police station (Punjab Information of Temporary Residents Act 2015) | Long-standing queues at police stations | Unverified | Rejected | Free online police system, Khidmat Markaz and police mobile app; a one-time event per tenancy |
| 9 | Retail medical stores | Punjab Drug Sale Rules: a register of scheduled-drug sales (prescriber, patient, batch); drug-inspector raids | Paper register required under the Rules | Unverified | Rejected | Pharmacy POS is a crowded market; DRAP T&T sits at manufacturer/importer level (already covered in the country report) |
| 10 | Food business operators (PFA) | PFA licence fees; medical certificates and training for food handlers; inspections and fines | Fines regularly cite food handlers with no medical certificates | 27,259 FBOs fined in 2019 (PFA annual report) | Rejected (low confidence) | Fine amounts are small (tens of thousands of rupees); the certificate comes from a lab or trainer, not software; competition not researched |
| 11 | LPG cylinder shops / decanters | OGRA and Explosives Department licences; decanting made a punishable offence; ATA cases considered | Seizures and sealing campaigns (2025) | Unverified | Rejected | The illegal segment won't buy compliance software; the legal segment is OGRA-licensed and larger |
| 12 | Halal butchers / slaughter (PHDA) | Punjab Halal Development Agency Act 2016: butcher training, then a licence | Training-based licensing | Unverified | Rejected | One-time training licence, no recurring filing |
| 13 | Livestock traders / cattle mandis | Market fees at PCMMDC-managed mandis; Eid temporary sale points | No trader register or transport-permit obligation found | Not found | Rejected | No recurring documentary obligation found |
| 14 | Nikah registrars (union council) | File the nikahnama with the union council, which forwards it to NADRA; Punjab tightened the rules for registrars in Sep 2026 | The nikahnama is a paper form; Punjab is digitising it through the e-Service portal | Unverified | Rejected | The government is digitising it directly; registrars earn small fees |

Country-specific groups added beyond the seed list: jewellers under DNFBP rules, healthcare-waste
generators under PHC and EPA, Kissan Card input dealers, brick kilns, LPG shops and nikah
registrars.

---

## 2. Strongest opportunities

### Opportunity: "Sarafa compliance book": one jewellery transaction feeds FBR POS, the DNFBP CDD file and the old-gold purchase record

**Industry:**
Jewellers / dealers in precious metals and stones (DPMS)

**Buyer:**
Owner of a family-run jewellery shop in a sarafa bazaar (Karachi Saddar, Lahore Shah Alami/Anarkali,
Rawalpindi, Faisalabad). Usually the owner or his son. Bookkeeping is often done by an outside tax
consultant.

**Trigger / Why now:**
- Draft SRO 288(I)/2026 (18 Feb 2026) extends mandatory POS and e-invoice integration and allows
  FBR to require CCTV at the point of sale.
- Jewellers meeting the Tier-1 test already have to integrate their POS.
- Section 175C allows FBR officials to sit in a shop for 15–30 days to check sales. This caused a
  nationwide jewellers' strike in June 2026.
- Separately, jewellers are DNFBPs supervised by FBR under AML Act 2010 and SRO 950(I)/2020. For
  transactions of Rs 2m or more they must run CDD, keep records and file suspicious-transaction
  reports to the FMU through goAML. FBR has run on-site inspections and issued tens of thousands of
  notices to DNFBPs (2021–22).

**Current workflow:**
1. Sale or old-gold buy-back is written in a *kacha* (rough) ledger by weight, karat and making charge.
2. Some sales go through a POS (Tier-1 only), and the rest go unrecorded or are entered at month-end.
3. CDD for large transactions means a photocopy of the CNIC kept in a file, if anything is kept at all.
4. goAML suspicious-transaction reports and DNFBP registration (IRIS) are handled ad hoc by a
   consultant when a notice arrives.
5. During a 175C stay or a DNFBP inspection, the owner rebuilds the records by hand.

**Pain:**
- The association publicly calls the procedures complex for small and medium jewellers.
- Repeated strikes and confrontations in 2026 (Saddar traders forced an FBR team to leave).
- FBR can penalise businesses and their directors under AML Act 2010.

**Existing solutions:**
- Oscar POS (markets an FBR/SRB-compliant jewellery POS);
- OneClickPOS (Urdu interface);
- Odoo `mn_gold_shop_management` module plus FBR apps;
- fbrdigitalinvoicing.com (has a jewellery-shop page);
- free FBR IRIS (DNFBP registration) and the FMU goAML portal;
- local tax consultants who handle notices.

**Offline evidence:**
- Owners keep paper *kacha* ledgers and resist documentation (strikes).
- Registration is through the IRIS form, and suspicious-transaction reports go through goAML.
- I found no DNFBP-specific CDD tool marketed in Pakistan. Search results were UAE vendors only.

**Offline channel:**
- The All Pakistan Sarafa Gems and Jewellers Association (chair: Muhammad Qasim Shikarpuri) and city
  sarafa associations;
- walk-in visits to clustered bazaars;
- tax consultants who already handle 175C and DNFBP notices for jewellers.

**Market count:**
Unverified. No public count of DNFBP-registered jewellers found. A thousands-scale estimate across
the major cities is only a guess.

**The gap:**
Jewellery POS vendors handle the sale and the FBR invoice. None I found also produces:
- the DNFBP CDD record (customer risk rating, beneficial-owner details for Rs 2m+ transactions);
- an old-gold purchase register with the seller's CNIC;
- an "inspection pack" export for a 175C stay or a DNFBP inspection.

**Possible product:**
An Urdu/English jewellery ledger app. One entry per transaction (weight, karat, making charge, buy
or sell) does four things:
- pushes the FBR invoice where the shop is integrated;
- triggers a CDD form above the threshold;
- logs old-gold purchases against the seller's CNIC;
- exports an inspection binder.

**MVP:**
A mobile ledger with a CDD checklist for transactions of Rs 2m or more, a CNIC photo, and a monthly
PDF "AML register" in the format of FBR's sector guidelines. No POS integration in v1.

**Pricing hypothesis:**
Rs 2,000–5,000 per month (about USD 7–18). More realistic as a consultant-sold bundle: the
consultant charges the jeweller and white-labels the tool.

**How to find first customers:**
Sarafa association office-bearers in Karachi and Lahore; tax consultants advertising FBR notice
work for jewellers.

**Risks:**
- Owners actively avoid creating records. Software that documents sales is exactly what many do
  *not* want. The buyer may only want the CDD file, and only after a notice.
- POS vendors can add a CDD tab quickly.
- A non-local founder could not sell this. It needs Urdu, bazaar relationships and trust.

**Kill condition:**
Interviews with about 10 jewellers show that DNFBP inspections have effectively stopped since the
grey-list exit (2022), or that owners only ever pay a consultant once a notice arrives.

**Score:** 4/10

**Sources:**
- https://www.brecorder.com/news/40230170/real-estate-agents-others-fbr-to-impose-penalties-if-suspicious-transactions-not-reported-to-fmu
- https://filing.pk/blog/dnfbp-registration-pakistan
- https://www.thenews.com.pk/print/846303-suspicious-transaction-reports-fbr-sends-over-50-000-notices-to-real-estate-agents-jewelers-money-changers
- https://www.brecorder.com/news/40425841/jewellers-continue-protest-against-sec-175c-of-tax-law
- https://www.nation.com.pk/02-May-2026/jewellers-body-slams-fbr-harassment-traders
- https://propakistani.pk/2026/04/02/jewelers-could-shutdown-gold-sales-all-over-pakistan-this-week/
- https://www.switchertechno.com/fbr-draft-rules-2026-cctv-pos
- https://tribune.com.pk/story/2593493/fbr-unveils-draft-amendments-to-income-tax-rules-mandates-pos-integration-for-businesses
- https://oscar.pk/blog/why-does-your-jewelry-shop-need-an-fbr-srb-compliant-pos-system-in-pakistan-oscar-pos-ensures-compliance-and-efficiency
- https://apps.odoo.com/apps/modules/17.0/mn_gold_shop_management
- https://fbr.gov.pk/aml-cft-legislation-regulations/152366/152370

---

### Opportunity: Healthcare-waste and MSDS evidence trail for small clinics and labs (Punjab)

**Industry:**
Small healthcare establishments: GP clinics, dental clinics, diagnostic collection centres, small
labs, maternity homes. Hakeem and homeopath clinics generate little risk waste and are probably out
of scope.

**Buyer:**
Owner-doctor or clinic manager. A secondary buyer is the hospital-waste collection contractor, who
could resell the tool to its clinic clients.

**Trigger / Why now:**
- EPA Punjab issued 2025 orders standardising inspections under the Punjab Hospital Waste Management
  Rules 2014 on an EcoWatch-based standardised inspection-report format.
- A further order enforces Rule 28: no waste-handling agreement without prior EPA authorisation.
  This is aimed at hospitals found contracting without one.
- PHC licensing and MSDS inspections run in parallel. 60,690 HCEs are registered.

**Current workflow:**
1. The clinic signs a waste contractor, without checking whether the contractor is EPA-authorised.
2. Waste bags are handed over, with a contractor receipt if the clinic gets one.
3. The PHC licence application and MSDS checklist are completed on the PHC portal, and inspectors
   visit.
4. When EPA arrives with the standardised inspection format, the clinic looks for waste receipts,
   a waste-management plan and staff training records on paper.

**Pain:**
- EPA has the power to inspect and prosecute.
- EPA's own orders record non-compliance with the authorisation rule.
- PHC seals unlicensed establishments. Specific 2025–26 fine amounts against small clinics were not
  verified.

**Existing solutions:**
- Waste contractors' own receipts;
- PHC HCE web portal (licensing, free);
- EPA EcoWatch (the regulator's inspection tool, not operator-facing as far as I found);
- healthcare-quality consultants who prepare MSDS files (unverified, no named firm found).

**Offline evidence:**
- Contractor handover is paper-based.
- EPA standardised its inspection format only in 2025.
- I found no operator-side software listing for Pakistani healthcare-waste compliance (one search
  failed, so this is low confidence).

**Offline channel:**
- Waste-collection contractors, each serving hundreds of clinics (they need authorised paperwork
  too);
- PMA district chapters;
- PHC's licensing workshops;
- public PHC licence verification on os.phc.org.pk, used to build a call list.

**Market count:**
60,690 registered HCEs in Punjab (PHC). Clinics generating risk waste are a subset; the size is
unverified.

**The gap:**
No operator-side record ties together the contractor's EPA authorisation, the per-collection
handover log (weight and category), the waste plan and staff training, and the MSDS evidence for PHC.

**Possible product:**
A "waste and MSDS binder" app. The contractor logs each pickup by QR at the clinic. The clinic sees
a running register and an auto-built inspection pack in EPA's standardised order and PHC's MSDS
headings.

**MVP:**
A contractor-side pickup logger (QR at each clinic, bag count and weight) that generates a monthly
per-clinic certificate PDF. It would be sold to 1–2 contractors, who give it to their clinics.

**Pricing hypothesis:**
A contractor licence of Rs 15,000–40,000 per month, or Rs 500–1,000 per clinic per month passed
through.

**How to find first customers:**
EPA-authorised waste handlers (EPA authorisation orders); PHC-licensed clinic lists.

**Risks:**
- EPA or PITB could extend EcoWatch to operators for free, as Punjab has done with most police
  registers.
- Contractors may prefer to stay paper-based.
- Enforcement may be concentrated on large hospitals.
- A non-local founder could not sell this without a local partner.

**Kill condition:**
EPA inspections of small clinics (not hospitals) are rare, or EcoWatch already gives operators
digital manifests.

**Score:** 4/10

**Sources:**
- https://epd.punjab.gov.pk/system/files/Order%20regarding%20use%20of%20Ecowatch%20based%20standardised%20SIR%20format%20for%20PHWMR.pdf
- https://epd.punjab.gov.pk/system/files/Authorization%20Order%20under%20Rule%2028%20of%20PHWMR%202014.pdf
- https://epd.punjab.gov.pk/node/130
- https://punjab.gov.pk/node/2310
- https://os.phc.org.pk/licensingfee.aspx

---

### Opportunity (weak): One check-in for small guesthouses: Hotel Eye, OTA and guest register

**Industry:**
Private guesthouses, hostels and short-let hosts in Punjab (Lahore, Murree, Islamabad and
Rawalpindi spillover).

**Buyer:**
Guesthouse owner or manager, and student-hostel operators.

**Trigger / Why now:**
The Punjab Home Department made registration on Hotel Eye and entry of guest data mandatory for all
private guesthouses by 15 June 2025. This explicitly covers Airbnb/Booking.com guests. Penalties are
up to six months' imprisonment and Rs 10,000–100,000 fines (Punjab Information of Temporary
Residents Act 2015).

**Current workflow:**
1. A booking arrives through an OTA or WhatsApp.
2. At check-in, the guest's CNIC or passport is photographed.
3. The data is typed into Hotel Eye by hand.
4. The paper guest register is also kept.
5. Long-stay tenants are registered separately with the police (tenant registration).

**Pain:**
- Criminal liability.
- Police say many guesthouses do not enter guests at all.

**Existing solutions:**
- Hotel Eye (PITB, free);
- Punjab Police tenant registration system and app (free);
- hotel PMSs (for larger hotels).

**Offline evidence:**
Hotel Eye replaced weekly paper reports to police stations; the guest register is still a paper
book.

**Offline channel:**
- Murree and Lahore guesthouse associations (unverified names);
- Tourism controller licensing lists (the tourism department runs online licensing alongside Hotel
  Eye registration).

**Market count:**
Unverified.

**The gap:**
Double entry (OTA → Hotel Eye) and CNIC typing.

**Possible product:**
CNIC/passport OCR at check-in that pre-fills Hotel Eye.

**MVP:**
A browser extension that fills the Hotel Eye form from a photo.

**Pricing hypothesis:**
Rs 1,000–2,000 per month.

**How to find first customers:**
Tourism department licence lists; Murree listings on OTAs.

**Risks:**
- No Hotel Eye API. Form-filling a police system may be unwelcome or blocked.
- Low prices and a small, seasonal market.
- A non-local founder could not sell this.

**Kill condition:**
PITB blocks automation, or Hotel Eye adds its own CNIC scan (likely).

**Score:** 3/10

**Sources:**
- https://propakistani.pk/2025/05/22/punjab-makes-guest-tracking-mandatory-by-june-15/amp/
- https://pitb.gov.pk/hotel_eye
- https://www.app.com.pk/?p=1086772
- https://lahorepolice.punjab.gov.pk/node/44

---

## 3. Rejected

- **Domestic-worker employer compliance (PESSI).** The law exists and its rules were notified in
  2025. But zero domestic workers had been registered with PESSI by June 2025. Without enforcement,
  households won't buy. (wise.pk, wageindicator.org)
- **Second-hand mobile phone registers.** Punjab's free eGadget app (PITB with the police) is the
  register; other cities use a paper pro forma for police. No willingness to pay.
- **Tenant registration for landlords and property dealers.** Free police portal, Khidmat Markaz
  and app; a one-time event per tenancy.
- **Brick kilns.** Real and fierce enforcement (777 demolished, Rs 67.76m in fines, Jan–Jul 2026),
  but compliance is a physical retrofit to zigzag technology. There is no recurring paperwork to
  sell into.
- **Kissan Card / pesticide dealers.** The daily DAP record lives inside the PITB Kissan Card system
  (2,160 to 3,000 dealers). Licensing is a one-off committee process.
- **Retail medical stores (scheduled-drug register).** Pharmacy POS is crowded; the DRAP T&T angle
  is already in the country report.
- **PFA food handlers.** Small fines; the medical certificate is a lab service. Not enough evidence.
- **LPG shops.** The illegal operators who drive enforcement won't buy compliance tools.
- **Halal butchers (PHDA), cattle mandis, nikah registrars.** One-time licences, no recurring
  documentary obligation found, or the government is digitising directly.
- **Real-estate agent registration (Punjab RERA-style).** My search returned only Indian Punjab
  RERA results. A Pakistani Punjab equivalent is unverified, so no claim is made.

## 4. Method notes

What worked:
- English-language Pakistani press (ProPakistani, Tribune, Dawn, Business Recorder, APP) combined
  with regulator domains (epd.punjab.gov.pk, os.phc.org.pk, pitb.gov.pk). The province's own
  orders, such as the EPA PDFs, were the best trigger evidence.
- Searching "<industry> PITB app" quickly reveals the free government substitute. Run it first in
  Pakistan, because it kills most dealer-register ideas.

What didn't work:
- "Punjab" queries return Indian Punjab results (RERA, drug rules, livestock tagging). Add
  "Pakistan" or "Lahore".
- I didn't try Urdu queries, which was a gap. Association and trade-press material is mostly
  Urdu-language newspapers or Facebook, which search reaches poorly.
- Market counts are rarely published. The exception is PHC's 60,690 HCEs.

Not reached because of the usage limit:
- overseas employment promoters (Bureau of Emigration licensees);
- healthcare-waste contractor competition;
- arms dealers;
- Umrah/Hajj operators.
