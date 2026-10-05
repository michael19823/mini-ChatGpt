# Turkey (Türkiye): Opportunity Research (deep pass, 2026-10-05)

**Research depth:** 8 searches in the first pass, then about 50 in this deep pass (Turkish and English, standard and extended WebSearch). I worked from search snippets only because WebFetch is blocked. Figures I could not confirm on a primary page are marked "unverified" or "estimate".

**Accessibility:** There is no sanctions barrier for a foreign solo founder. The practical frictions are:
- TRY volatility; local pricing has to be in TRY.
- E-invoice XML generation needs a GİB-licensed integrator, so you partner with one rather than become one.
- KVKK data protection law.
- Public systems (ÜTS, İTS, HKS, MoTAT, B-Reçete) each have their own rules on access and integration.

SaaS selling is feasible.

**Headline change from the first pass:** CBAM is no longer the best lead. Turkey already has at least eight local CBAM/SKDM software vendors. The strongest new lead is a narrow medical-device trigger: since 1 Oct 2026, ÜTS/İTS karekod data is mandatory inside e-invoices for drug and medical-device deliveries. The pesticide B-Reçete rollout (1 Jul 2026) shows the most visible pain in this pass. However, dealer-software integration appears to be closed, which makes that problem hard to productise.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Medical-device dealers, opticians, small health suppliers | ÜTS karekod data inside e-invoices (ILAC_TIBBICIHAZ scenario, mandatory 1 Oct 2026) plus ÜTS transfer ("verme") notifications | **Best lead** | New per-invoice mandate. Integrators handle the XML, but the scan → ÜTS → invoice-line → exception step is the human glue |
| Fresh fruit/vegetable exporters | Per-lot GGBS export pre-notification, pre-export residue analysis, multi-country MRL checks | Maybe | Real fragmentation (EU plus Russia and others) and rejections. Global MRL databases (Homologa, Bryant Christie) cover the data layer |
| Pesticide dealers (zirai ilaç bayileri) | B-Reçete electronic plant prescription, nationwide since 1 Jul 2026 | Attractive problem, poor access | Strong complaints (8–10 min per entry, claimed customer losses). Third-party BKST integration was shut down in Sept 2025 |
| Metal/aluminium/fertiliser/cement exporters | EU CBAM emissions data (definitive period since 1 Jan 2026) | Downgraded, too competitive | Omnimatic, CimpactPro, CarbonEmit, Akkaş Karbon, ATP GreenX, Enexion, QuickCarbon, Climeteo, plus consultancies and verifiers |
| Large emitters | TR ETS MRV (regulation in Resmî Gazete 27.08.2026; installations >50 kt CO2e) | Reject | A few hundred large plants at most (estimate). Enterprise/verifier sales |
| Environmental consultancies / waste transporters | TABS, MoTAT, Sıfır Atık monthly data (due by the 15th), permits | Reject | Çevre Yazılım and Temsil already sell multi-client consultancy software; MoTAT has telematics vendors |
| Packaging producers/importers | GEKAP monthly/quarterly declarations | Reject | KPMG GEKAP technology solution, ERP modules, accountants |
| Beverage retail / HoReCa | DOA deposit registration on DBYS (HoReCa deadline end of Oct 2026) | Weak | One-off registration; operator-run; 0.20 TL per-pack incentive, not a recurring paid workflow |
| Occupational safety (OSGB) | İSG-KATİP contracts, risk assessments, training records | Too competitive | Ministry-approved İBYS software mandatory for OSGBs since 2018 (eLogo İSG, MebISG and others) |
| Pharmacies | İTS / MEDULA notifications | Too competitive | About 29k pharmacies (TEİS figure) all run integrated pharmacy programs; eczane.io and others |
| Veterinary clinics | e-reçete and drug tracking (since 2018); 2026 bill adds barcode/product tracking | Watch | Existing clinic programs (e-Vet Pro, CetaSoft and others). The bill was still in committee in July 2026 |
| Fresh-produce wholesale (hal) | HKS künye and hal-type e-invoice | Reject | Mature since 2012–2014; Atlas Hal, Kiraz Hal and Mikro Sinerji integrate HKS and e-documents |
| Road freight | U-ETDS per-load notification within 6 h | Reject | Mandatory since 2020–21; web-service integration is standard in TMS products (e.g. MDP Group) |
| Chemicals | KKDİK temporary registration (deadline 30 Sep 2026) | Reject | Deadline-driven, one-time, and done by certified KKDİK experts/consultants |
| Textile/apparel exporters | Brand due-diligence (LkSG/CSDDD) data requests | Too competitive | Retraced, Worldly/Higg and similar; CSDDD scope weakened |
| Property/site managers | Dues, budgets, new licence (yetki belgesi) draft | Too competitive | Apsiyon, Hursoft and many others |
| SME e-documents | e-Fatura/e-Arşiv/e-İrsaliye (Jul 2026 thresholds) | Too competitive | Paraşüt, BirFatura, Faturaport, Sovos, EDM, eLogo |
| Customs brokers | BİLGE declarations | Reject | Government system plus established broker software |
| Fuel stations / retail | YN ÖKC cash registers with e-documents | Reject | Certified hardware vendors |

## Opportunities

### Opportunity: ÜTS-to-e-Invoice Karekod Bridge for Small Medical-Device Dealers

**Industry:**
Medical-device sales centres (tıbbi cihaz satış merkezleri), dental depots, orthopaedic and hearing centres, opticians, and small distributors that sell to hospitals and clinics.

**Buyer:**
The owner or "ÜTS sorumlusu"/accounting lead at a small or mid-size medical-device dealer with 2–30 staff, typically using Logo, Mikro, Paraşüt or a GİB integrator portal. A secondary buyer is the SMMM accountant who runs invoicing for several such dealers.

**Trigger / Why now:**
- From mid-2025, drug and medical-device sellers had to use the ILAC_TIBBICIHAZ e-invoice scenario.
- GİB's "İlaç ve Tıbbi Cihaz Teslimlerine İlişkin Fatura Teknik Kılavuzu" made ÜTS/İTS data (UNO product number, LNO lot, SNO serial, URT production date), captured by scanning the karekod, mandatory in the invoice XML.
- The deadline was postponed from 1 Jul to 1 Oct 2026 after sector feedback, so it took effect four days before this report.
- XML that lacks the data fails schematron checks.
- Separately, TİTCK published a new ÜTS registration guide effective 13 May 2026.

**Current workflow:**
1. Goods arrive. Staff scan or type the karekod and register the receipt ("alma") in the ÜTS portal.
2. On sale or dispatch, someone has to make the ÜTS transfer or usage notification ("verme" / "tüketiciye verme") per unit (serial-tracked items) or per lot.
3. The invoice is built in the ERP or integrator portal. Since 1 Oct 2026, every line also needs the ÜTS data set (UNO/LNO/SNO/URT), which means scanning again or copying fields.
4. Exceptions are handled by hand: product not registered in ÜTS, wrong lot scanned, partial returns, consignment items used in surgery, items sold to SGK-contracted facilities.
5. Staff reconcile the ÜTS movements against the invoices and stock.

**Pain:**
- The obligation is per invoice line and the XML is rejected if it is wrong.
- A vendor selling to SAP users (MDP Group) says each stock movement needs a separate manual entry in the TİTCK ÜTS portal, which wastes time and causes errors.
- The postponement "after sector feedback" shows firms were not ready.
- Direct complaint threads from small dealers were not found (unverified).

**Existing solutions:**
- E-invoice providers add the scenario fields: Paraşüt (user guide), Faturaport, EDM Bilişim, b2b.net.tr, BirFatura and Akınsoft (blog/guide).
- MDP Group sells an SAP ÜTS add-on for large firms.
- The free ÜTS Mobil app (query only).
- ERP vendors (Logo/Mikro): whether they offer karekod-scan-to-invoice is unverified.
- Manual entry in the ÜTS portal.

**The gap:**
Integrators make sure the XML can carry the fields, but they do not capture the data at the warehouse or the point of use. They also do not reconcile ÜTS notifications with invoice lines or handle exceptions. For a small dealer the missing piece is: phone or USB scanner at dispatch, then the ÜTS notification sent automatically, then the invoice lines pre-filled in whatever invoicing tool they use, plus a daily mismatch report (scanned but not invoiced, invoiced but not notified, not registered in ÜTS). This is unverified until interviews. Large ERP vendors may close the gap quickly; this is the fire-inspection lesson from the brief.

**Possible product:**
A scan-first web/mobile app. It reads GS1 karekods, pushes the ÜTS notifications through the firm's own ÜTS web-service credentials, and exports or injects the ILAC_TIBBICIHAZ line data into the dealer's invoicing tool. It keeps a reconciliation queue of exceptions.

**MVP:**
- Phone-camera GS1 DataMatrix parsing.
- ÜTS "verme" notification by web service (TİTCK documents ÜTS integration with company ERP systems).
- A CSV/UBL line-item export for Paraşüt/Logo/Mikro import.
- A daily mismatch list.
- Start with one integrator partner and one ERP.

**Pricing hypothesis:**
About 1,500–4,000 TRY/month per dealer (roughly 40–100 USD; estimate), or a per-scan tier for high-volume distributors.

**How to find first customers:**
- The TİTCK/ÜTS public firm and satış merkezi registry (ÜTS has public firm queries; exact export ability unverified).
- Medical-device associations (e.g. ARTED, TÜMDEF; membership lists unverified).
- Partnerships with e-invoice integrators that already publish ILAC_TIBBICIHAZ guides (Faturaport, Paraşüt).
- Size: an older reported figure is 13,170 firms registered in TİTUBB, including 1,509 manufacturers; over 1,200 medical manufacturers in 2024. Both figures come from search snippets and are unverified.

**Risks:**
- Integrators, Logo or Mikro may ship scanning plus ÜTS notification bundled, cheaply or free.
- GİB may postpone or soften the mandate again.
- ÜTS web-service access rules (credentials per firm, test approval) are unverified.
- Hospitals' own systems (HBYS/MKYS) handle the receiving side.
- TRY pricing.

**Kill condition:**
- Five interviews show that the dealer's invoicing tool already scans karekods and sends the ÜTS notification in one step.
- ÜTS web services are closed to third-party software, as happened with BKST (see the B-Reçete entry below).

**Score:** 6/10

**Sources:**
- https://faturaport.com/blog/e-fatura/tibbi-cihaz-ve-ilac-teslimlerinde-e-fatura-uts-zorunlulugu
- https://www.edmbilisim.com.tr/blog/tibbi-cihaz-ve-ilac-teslimlerinde-e-fatura-uts-zorunlulugu-1-ekim-2026ya-ertelendi.html
- https://izmir.ogo.org.tr/haber/ilac-ve-tibbi-cihaz-fatura-teknik-kilavuzu-guncellenmis-ve-01102026-tarihine-ertelenmistir-17344/
- https://ebelge.gib.gov.tr/dosyalar/kilavuzlar/Ilac_ve_Tibbi_Cihaz_Teslimlerine_Iliskin_Fatura_Teknik_Kilavuzu_V.1.2.pdf
- https://www.parasut.com/kullanim-kilavuzu/ilac-ve-tibbi-cihazlar-e-fatura
- https://www.b2b.net.tr/yardim/fatura/ilac-ve-tibbi-cihazlar-icin-yeni-e-fatura-duzenleme-rehberi
- https://mdpgroup.com/blog/urun-takip-sistemi-nedir/
- https://www.lexpera.com.tr/mevzuat/kilavuzlar/tibbi-cihazlarin-urun-takip-sistemi-tekil-hareket-bildirimlerine-iliskin-kilavuz-1
- https://www.kiwa.com/tr/tr/haberler/uts-kayt-sureclerine-likin-yeni-klavuz-yaymland/

### Opportunity: Export-Lot Residue Dossier for Fresh-Produce Exporters

**Industry:**
Fresh fruit and vegetable exporters and packhouses (Antalya, Mersin, İzmir: citrus, pepper, tomato, pomegranate, stone fruit).

**Buyer:**
Quality/export manager at a small or mid-size exporter or packhouse that is a member of an exporters' association (AKİB, BAİB, Ege).

**Trigger / Why now:**
- The EU raised control frequency on Turkish produce. For example, pepper faces 20% residue checks at the EU border and 25% pre-export analysis in Turkey.
- Turkey updated its MRL regulation for EU harmonisation.
- In March 2025, 24 Turkish products had border-rejection notifications from 8 countries.
- Russia banned pomegranate and pepper.
- Since 1 Jul 2026, B-Reçete creates digital spray records per farmer that exporters could request.

**Current workflow:**
1. The exporter collects grower spray records (paper or GLOBALG.A.P. diaries).
2. Samples go to an accredited lab and PDF results come back.
3. Staff check the results by hand against destination MRLs, which differ by country.
4. Each lot is pre-notified in GGBS, and the export application goes to the provincial directorate within 7 days with documents.
5. Rejections or alerts (RASFF) trigger traceback across growers.

**Pain:**
- Rejected consignments and market bans: 51 consignments rejected at EU borders in 2025 per Greenpeace citing RASFF.
- Analysis costs are paid by the exporter.
- Per-lot pre-notifications multiply the admin work.

**Existing solutions:**
- Homologa (FoodChain ID/Fera; MRLs for 45 countries, offers an API).
- Bryant Christie BCGlobal MRL Database (125+ markets).
- Lab LIMS portals.
- GLOBALG.A.P. farm tools.
- Spreadsheets.
- GGBS (government system).

**The gap:**
The MRL data exists, but nothing ties together lot, grower spray record, lab PDF, destination MRL check and the GGBS/buyer paperwork in Turkish for small exporters. This is unverified; Turkish agritech or ERP vendors serving packhouses were not fully screened.

**Possible product:**
A lot-centric dossier. It parses the lab PDF, flags residues against the chosen destination's MRL (licensed data), links the lot to growers and spray records, and outputs the GGBS pre-notification data and a buyer pack.

**MVP:**
Lab-PDF parser for the 3–4 main Turkish residue labs, an MRL check for EU and Russia, and a per-lot PDF dossier.

**Pricing hypothesis:**
About 150–400 USD/month per exporter during the season (estimate). MRL data licensing cost is unknown.

**How to find first customers:**
Exporters' association member lists (AKİB, BAİB, Ege Yaş Meyve Sebze İhracatçıları Birliği) and Antalya/Mersin packhouse clusters.

**Risks:**
- MRL data licensing.
- Seasonality.
- Large exporters already have QA staff and LIMS.
- Integrating with GGBS may be impossible (unverified).
- Partly a "generic document" product.

**Kill condition:**
- Exporters say labs already deliver results with the destination-MRL comparison built in.
- Homologa-style tools are already standard among them.

**Score:** 5/10

**Sources:**
- https://www.bloomberght.com/yorum/irfan-donat/2284998-abye-ihracatta-analiz-paradoksu
- https://www.ekonomigazetesi.com/sektor-haberleri/avrupa-turk-tarim-urunlerine-denetim-dozunu-artirdi-84311
- https://www.cumhuriyet.com.tr/turkiye/turkiye-icin-pestisit-alarmi-24-yerli-urun-icin-8-ayri-ulkeden-sinir-2336189
- https://www.bloomberght.com/yeni-pestisit-duzenlemesi-resmi-gazete-de-yayinlandi-3738660
- https://balikesir.tarimorman.gov.tr/Belgeler/Kamu%20Hizmet%20Satandartları/Gıda%20ve%20Yem%20Şube%20Müdürlüğü.pdf
- https://www.foodchainid.com/products/homologa/
- https://www.foodrisk.org/resources/display/17

### Opportunity: B-Reçete Counter Workflow for Pesticide Dealers

**Industry:**
Agricultural input dealers (zirai ilaç / bitki koruma ürünü bayileri) and their responsible agronomists.

**Buyer:**
Dealer owner or the responsible manager (sorumlu yönetici ziraat mühendisi). About 7,184 licensed pesticide dealers in 2016 (older figure from a Kırşehir dealer study; current number unverified).

**Trigger / Why now:**
- The "Bitki Koruma Ürünlerinin Reçeteli Satış" regulation requires electronic B-Reçete prescriptions for listed active ingredients.
- Pilot provinces (Mersin, Samsun, Ankara, Kırklareli) started in January 2026; the rollout went nationwide on 1 Jul 2026.
- Selling without a prescription or record: a 5,000 TL fine, and the licence is cancelled on repeat.

**Current workflow:**
1. The farmer arrives. The agronomist logs into the ministry system (SMS verification) and looks up the farmer in ÇKS and the other registries.
2. The agronomist writes the prescription by product, crop and dose.
3. The dealer sells only the prescribed product and quantity, then enters the sale in the dealer's own stock/accounting program separately.
4. The application and harvest data are recorded later.

**Pain:**
- Dealers report 8–10 minutes per transaction.
- Mersin dealers claim customer losses of up to 70% and asked for stock and fine amnesty.
- Antalya and Alanya groups have called for the system to be withdrawn.
- There is a heavy workload in peak season.

**Existing solutions:**
- The ministry's web system (the only path).
- Dealer programs: Bilnex Zirai İlaç Programı (BKST integration), AKINSOFT (BKST integration) and Altun (BKÜ tracking).

**The gap:**
- Double entry between the ministry prescription system and the dealer's stock program.
- No pre-filled templates by crop or pest.
- No queue management at peak.

But AKINSOFT's knowledge base says the BKST integration was shut down completely on 1 Sep 2025 "for security reasons". Third-party integration therefore appears closed, which leaves only browser automation or screen-assisted entry against an SMS-verified government system.

**Possible product:**
A counter assistant that prepares the prescription offline (farmer, crop, pest, product, dose rules from the label). It guides the agronomist through the ministry form quickly and posts the sale to the stock program.

**MVP:**
A label-rule database for the top 100 products, a pre-fill helper (copy/paste or browser extension) and a CSV sale export.

**Pricing hypothesis:**
About 500–1,500 TRY/month per dealer (estimate). Willingness to pay is constrained by thin dealer margins.

**How to find first customers:**
Provincial agriculture directorate dealer lists, dealer associations, Bilnex/Akınsoft resellers.

**Risks:**
- No API.
- Browser automation against an SMS-verified government system may break or breach terms of use.
- Political risk: the rules may change after protests.
- Low willingness to pay.

**Kill condition:**
The ministry confirms there is no third-party integration and forbids automation, or the ministry itself improves the UI (likely after the complaints).

**Score:** 4/10

**Sources:**
- https://www.aa.com.tr/tr/ekonomi/bitki-koruma-urunlerinin-satisinda-elektronik-b-recete-takip-sistemi-zorunlu-oldu/3770103
- https://www.cnbce.com/haberler/bitki-koruma-urunlerinin-satisinda-elektronik-b-recete-takip-sistemi-zorunlu-oldu-h21186
- https://www.mersinportal.com/b-recete-mersinde-bayileri-vurdu-stok-ve-ceza-affi-talebi
- https://www.guneyhaberci.com.tr/b-recete-basin-aciklamasi-b-recete-uygulamasi-acilen-geri-cekilmelidir
- https://www.ekonomigazetesi.com/sektor-haberleri/recetesiz-bitki-koruma-urunu-satan-bayilere-5-bin-tl-para-cezasi-verilecek-67117
- https://bilgibankasi.akinsoft.net/tr/home/makale/1724-bitki-koruma-urunleri-takip-sitemi-bkst-entegrasyonu
- https://bilgibankasi.bilnex.com.tr/bilgi-bankasi/bilnex-zirai-ilac-programi-bitki-koruma-urunleri-bkst-entegrasyonu/
- https://www.researchgate.net/publication/347659650_Kirsehir_ilinde_bulunan_zirai_ilac_bayilerinin_mevcut_durumu_ve_sorunlarinin_degerlendirilmesi

### Opportunity: CBAM Emissions-Data Pack for Sub-Tier Metal Suppliers (downgraded)

**Industry:**
Small steel/aluminium fabricators, fastener makers and fertiliser/cement suppliers that export to the EU.

**Buyer:**
Export or sustainability manager at an SME supplier.

**Trigger / Why now:**
- The CBAM definitive period started on 1 Jan 2026. EU importers request installation-level verified data; otherwise conservative default values apply.
- The CBAM Omnibus exempts importers below 50 t per year, which shrinks the number of EU buyers who ask small suppliers for data.
- The TR ETS regulation (27.08.2026) covers only installations above 50 kt.

**Current workflow:**
1. The EU buyer sends an emissions-data template.
2. Plant staff collect energy, fuel and production data in spreadsheets.
3. A consultant or verifier calculates the embedded emissions.
4. Staff answer each buyer separately.

**Pain:**
- Default values raise the cost for the importer, which pressures the supplier.
- Only about 10–12% of Turkish exporters shipped CBAM goods to the EU in 2009–2023, mostly larger firms (CBRT note).

**Existing solutions:**
- Turkish vendors: Omnimatic (TSE-approved, with an SKDM module), CimpactPro, CarbonEmit, Akkaş Karbon, ATP GreenX, Enexion, QuickCarbon, Climeteo.
- SAP.
- Verifiers (QSI and others) and the large consultancies.
- Free guides from the exporters' associations (AKİB, UİB).

**The gap:**
Only possibly ultra-cheap per-buyer template filling for very small sub-tier suppliers. Local vendors already target this segment, and pricing is not public.

**Possible product:**
A per-product calculator plus a buyer-template filler.

**MVP:**
Excel import and EU communication-template export.

**Pricing hypothesis:**
About 50–150 USD/month (estimate), under pressure from local competitors.

**How to find first customers:**
Steel, aluminium and chemicals exporters' associations (İKMİB, UİB, AKİB).

**Risks:**
Crowded market, verifier gatekeeping, and the EU possibly changing scope again.

**Kill condition:**
Already largely met: at least eight local vendors exist. Revisit only if interviews show that sub-tier SMEs find all of them too expensive.

**Score:** 4/10 (down from 6/10)

**Sources:**
- https://omnimatic.com.tr/
- https://cimpactpro.com/merak-edilenler/skdm-nedir
- https://carbonemit.com/en
- https://akkaskarbon.com/
- https://www.atptech.com/skdm-nedir-turkiyenin-karbon-gelecegi-atp-greenx-ile-dijital-karbon-yonetimi/
- https://www.ey.com/en_gl/technical/tax-alerts/eu-adopts-cbam-omnibus-regulation
- https://ideas.repec.org/p/tcb/econot/2510.html
- https://www.erdem-erdem.av.tr/turkiye-emisyon-ticaret-sistemi-yonetmeligi-yayimlandi

## Rejected after competitor research

- **Environmental-consultancy multi-client tracker (TABS/MoTAT/Sıfır Atık/permits):** Çevre Yazılım (cevreyazilimi.com) and Temsil Çevre Danışmanlık ve Yazılım already sell modular consultancy software. Seyir Mobil and others cover MoTAT telematics. Was 4/10 in the first pass. Sources: https://www.cevreyazilimi.com/ , https://temsil.com.tr/ , https://seyirmobil.com/en/motat-mobile-hazardous-waste-transportation
- **GEKAP declaration tool:** KPMG's GEKAP technology solution, ERP modules and accountants cover it. Was 3/10. Source: https://kpmgvergi.com/alt-hizmetler/vergi-teknolojileri/kpmg-gekap-teknoloji-cozumu-1041
- **HKS künye and hal-type e-invoicing for commission merchants:** Atlas Hal, Kiraz Hal and Mikro Sinerji already integrate it; mandatory since 2014–2020. Sources: https://www.atlashal.com/ , https://www.mikrosinerji.com/sinerji-data-yazilim/blog/kurumsal-haberler/hal-kayit-sistemi-hks-nedir-yas-meyve-ve-sebze-ticaretinde-dijital-takip-sistemi/
- **U-ETDS freight notifications:** mature since 2020–21 with standard web-service integration (MDP Group and TMS vendors). Source: https://mdpgroup.com/blog/10-adimda-ulastirma-elektronik-takip-ve-denetim-sistemi-u-etds/
- **OSGB / İSG-KATİP software:** Ministry-approved İBYS software has been mandatory since 2018 (eLogo İSG, MebISG). Source: https://www.ostim.org.tr/mebitech-bilisim-as/is-sagligi-ve-guvenligi-yazilimi , https://logo.com.tr/en/category/occupational-health-and-safety
- **Pharmacy İTS/MEDULA tooling:** all of Turkey's roughly 29k pharmacies already run integrated programs (e.g. eczane.io). Source: https://www.medikalakademi.com.tr/teis-baskani-saydan-its-online-islemler-ekrani/
- **KKDİK chemical registration:** one-time, the 30 Sep 2026 deadline has passed, and certified experts and consultants do the work. Source: https://en.reach24h.com/news/industry-news/chemical/kkdik-turkey-reach-2026-fees-compliance-deadlines
- **TR ETS MRV:** only installations above 50 kt CO2e; enterprise and verifier market. Source: https://www.erdem-erdem.av.tr/turkiye-emisyon-ticaret-sistemi-yonetmeligi-yayimlandi
- **SME e-Fatura/e-Arşiv/e-İrsaliye:** Paraşüt, BirFatura, Faturaport and Sovos. Source: https://sovos.com/tr/blog/kdv/sirketler-icin-2026-e-donusum-takvimi-ve-zorunluluklar/
- **Customs declarations:** the government's BİLGE system plus broker software. Source: https://ticaret.gov.tr/gumruk-islemleri/sikca-sorulan-sorular/ticari/gumruk-musavirleri
- **YN ÖKC fuel and retail registers:** certified hardware vendors (VUK GT 593).

## Attractive problem, poor distribution / access

- **B-Reçete dealer workflow:** the pain is real, but integration is closed (BKST shut down in Sept 2025), willingness to pay is low and the political situation is fluid. It is kept above at 4/10 only as a watch item.
- **DOA deposit for HoReCa and small markets:** about 65% of DOA beverages are consumed in HoReCa, which must register on DBYS by the end of Oct 2026. But this is a one-off registration run by the operators, with incentives rather than fees. Source: https://www.cnbce.com/haberler/depozito-sisteminde-kritik-takvim-basladi-isletmelere-ekim-sonu-uyarisi-h32994
- **Veterinary product tracking:** a 2026 bill to add barcode/product tracking was in committee in July 2026, so the trigger is not yet law. Existing clinic programs (e-Vet Pro, CetaSoft) would likely add it. Source: https://tbmm.gov.tr/Yasama/KanunTeklifi/c2020beb-1a63-45a6-9b71-019f13bef99f

## Too competitive

- CBAM/SKDM carbon software: Omnimatic, CimpactPro, CarbonEmit, Akkaş Karbon, ATP GreenX, Enexion, QuickCarbon, Climeteo.
- E-invoice and pre-accounting for SMEs.
- OSGB/İSG software.
- Pharmacy software.
- Apartment/site management: Apsiyon, Hursoft.
- Textile supplier due diligence: Retraced and other global platforms.

## Pass history

- **First pass (2026-10-04, 8 searches):** CBAM 6/10, waste consultant 4/10, GEKAP/DOA 3/10. Pharmacies, veterinary, food/agri exporters, İSG, KVKK and textiles were not screened.
- **Deep pass (2026-10-05, about 50 searches, mostly Turkish):**
  - Downgraded CBAM to 4/10 after finding at least eight local SKDM vendors and the 50 t Omnibus threshold.
  - Rejected the waste-consultant tool (Çevre Yazılım, Temsil) and GEKAP (KPMG tool).
  - Screened pharmacies, OSGB/İSG, veterinary, HKS produce wholesale, U-ETDS freight, KKDİK, TR ETS, textiles, site management, DOA and fresh-produce exporters.
  - Added the ÜTS e-invoice karekod bridge (6/10; trigger 1 Oct 2026) as the new top lead, plus the fresh-produce residue dossier (5/10) and B-Reçete (4/10, integration closed).
  - Still unverified: ÜTS web-service access terms for third-party software, whether Logo or Mikro already offer karekod-scan-to-invoice, current dealer and medical-firm counts, and local CBAM vendor pricing.
