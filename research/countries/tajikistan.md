# Tajikistan: opportunity research

Small market, so the search budget was 10 WebSearch calls (English and Russian). Researched 2026-10-05.

**Bottom line:** Tajikistan has real regulatory triggers: the new Tax Code with electronic VAT invoices, VAT falling from 14% to 13% on 1 Jan 2027, ASYCUDAWorld for all customs declarations since 1 Oct 2025, and tax changes proposed in Sept 2026. But every trigger fails on market size, on free government tools, or on 1C dominance. I found **no opportunity strong enough to recommend as a standalone business** for a foreign solo founder. The best of the weak candidates is listed below with a low score, for completeness. Tajikistan is better treated as an add-on market to a product built for Uzbekistan or Kyrgyzstan (Russian-language, 1C-centric, similar e-VAT and ASYCUDA/marking regimes).

## Accessibility check

- **Sanctions:** Tajikistan is not under comprehensive OFAC/EU/UK sanctions. Selling software there is legal. (Stripe sanctions page: https://support.stripe.com/questions/sanctions-on-russia-and-belarus)
- **Payments:** Stripe does not support merchants based in Tajikistan. A foreign founder could still bill Tajik customers by card from a US or EU entity, but corporate card penetration is low (unverified), and local SMEs mostly pay by bank transfer in somoni or through local wallets (Alif, Dushanbe City; unverified). Collecting revenue from abroad is a real friction. (https://www.zenind.com/help/post/how-to-open-a-stripe-account-from-tajikistan-with-a-us-llc)
- **Language:** the working business and accounting language is Russian, plus Tajik for state forms.
- **Verdict:** accessible in principle, but hard to monetize. Low price points and transfer-based payment favour local resellers.

## Industries screened

| Industry | Workflow looked at | Verdict | One-line reason |
|---|---|---|---|
| Accountants / VAT payers (all sectors) | e-VAT invoices (paper invoices no longer accepted), monthly VAT return, VAT rate change 14%→13% on 1 Jan 2027 | Reject (too competitive / free tool) | The Tax Committee's e-VAT and taxpayer cabinet (services.andoz.tj) are free. 1C:Бухгалтерия для Таджикистана (1c.tj) and its partners own the accounting layer and will ship the rate change. |
| Customs brokers / importers | Pre-filling ASYCUDAWorld declarations from invoices and packing lists (mandatory since 1 Oct 2025) | Reject (too small) | Only about 34 registered customs representatives (2024). ASYCUDA is a free government system, and UNCTAD and the World Bank fund training. |
| Dried-fruit / agri exporters | Phytosanitary certificate, certificate of conformity and origin, residue-test evidence for EU/US buyers | Poor distribution | Agri exports were only about USD 80M in 2025, with a few dozen formal exporters (estimate). Donors (ITC, STDF) already fund compliance help. |
| Retail / cash-register users | Fiscal cash registers with real-time reporting | Reject | This is hardware and fiscal-device certification. Local fiscal operators and device vendors control it. |
| Pharmacies | Licensing, drug accounting, any digital marking | Insufficient evidence | No 2025–2026 evidence found of a Tajik marking or e-reporting mandate. Uzbekistan has one (Asl belgisi); Tajikistan has none confirmed. |
| Online sellers / simplified-regime SMEs | Proposed tax changes (Sept 2026): VAT threshold possibly raised from 1M to 3M somoni, rules for online trade | Watch | These are only proposals so far. If enacted, they may create a one-off registration and reporting change for small online sellers, but it would most likely be handled in the free taxpayer cabinet. |

## Opportunities

### Opportunity: VAT-rate-change and e-VAT reconciliation helper for 1C users (add-on, not standalone)

**Industry:**
Accounting firms and in-house accountants at VAT-registered companies

**Buyer:**
Chief accountant (главный бухгалтер) at a VAT-registered SME (turnover above 1M somoni), or a small outsourced accounting bureau in Dushanbe or Khujand.

**Trigger / Why now:**
- The new Tax Code digitalises VAT: electronic invoices, electronic tax accounts and real-time reporting.
- The Tax Committee has stopped accepting paper VAT invoices; they go only through e-VAT.
- The VAT rate falls from 14% to 13% on 1 Jan 2027, so transitional invoices, credit notes and contracts that span the change need handling.
- Proposals in Sept 2026 to raise the VAT threshold to 3M somoni may deregister some payers.

**Current workflow:**
1. Invoices are created in 1C (or Excel for smaller firms).
2. The accountant re-keys or uploads them in the Tax Committee's e-VAT module, which needs a digital signature.
3. Each month, they reconcile purchase invoices that suppliers issued in e-VAT against what was booked in 1C, then prepare the monthly VAT return.
4. Mismatches are chased by phone or Telegram, and input VAT is at risk.

**Pain:**
E-VAT is mandatory, the return is monthly, and input-VAT deductions depend on the supplier's e-invoice matching. This is plausible, but **I found no direct complaints or workload evidence (unverified)**.

**Existing solutions:**
- Tax Committee taxpayer cabinet and e-VAT (free; services.andoz.tj)
- 1C:Бухгалтерия 8 для Таджикистана and local 1C franchisees
- Outsourced accountants and audit firms (e.g. HLB Tajikistan) doing it manually

**The gap:**
Possibly the automated matching of e-VAT purchase invoices to 1C entries, with exception lists. Whether e-VAT offers any export or API for this is unknown.

**Possible product:**
A tool that takes the e-VAT invoice export and the 1C export, matches them, flags mismatches and 13%/14% rate errors, and produces a chase list per supplier.

**MVP:**
An Excel/CSV upload of both data sets, a match report and a supplier chase list, in Russian.

**Pricing hypothesis:**
USD 15–40 per month per company (estimate). Local purchasing power is low.

**How to find first customers:**
1C partner network in Tajikistan (1c.tj), accountant associations (unverified), and Telegram accounting groups.

**Risks:**
- 1C franchisees can add the same matching cheaply.
- The e-VAT export format is unknown or unstable.
- Collecting payment from abroad is hard.
- The VAT-payer base is small: perhaps a few thousand companies (estimate, unverified).

**Kill condition:**
Either of these:
- 1C:Бухгалтерия для Таджикистана or the e-VAT portal already reconciles purchase invoices.
- E-VAT has no machine-readable export.

**Score:** 3/10

**Sources:**
- Tax Code of Tajikistan (Tax Committee, English, 14.05.2025 edition): https://andoz.tj/docs/kodex/Kodex_14_05_2025_Nav_ENG_en.pdf
- Tax Code (Russian, 11.02.2025 edition): https://andoz.tj/docs/kodex/Tax-Code__11_02_2025-RT_ru.pdf
- Paper VAT invoices no longer accepted (only electronic): https://nm.tj/economy/31676-v-tadzhikistane-s-1-iyulya-scheta-faktury-nds-budut-prinimatsya-tolko-v-elektronnom-vide.html
- e-VAT user guide (Tax Committee): https://www.andoz.tj/docs/EService/%D0%A0%D1%83%D1%81/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%20e-VAT.pdf
- Taxpayer services portal (ITMIS): https://services.andoz.tj/
- VAT 13% from 2027: https://lookuptax.com/tax-changes/tajikistan/vat-rate-13pc-2027
- VAT threshold (1M somoni) and monthly returns: https://www.grantthornton.global/en/insights/indirect-tax-guide/indirect-tax---Tajikistan/
- Proposed tax changes (VAT threshold, online trade), Sept 2026: https://asiaplus.news/en/2026/09/21/vat-simplified-taxation-and-online-trade-what-tax-changes-are-being-proposed-in-tajikistan/
- Digital VAT enforcement: https://www.globalvatcompliance.com/globalvatnews/tajikistan-digital-vat-enforcement/
- 1C:Бухгалтерия для Таджикистана: https://1c.tj/v8/generic_products/tj_accounting.php

## Rejected after competitor research

- **ASYCUDAWorld declaration pre-fill for customs brokers.** ASYCUDAWorld has been mandatory for all import and export declarations since 1 Oct 2025, so the trigger is real. The idea was killed for three reasons:
  - The buyer pool is tiny: about 34 registered customs representatives.
  - ASYCUDA is free and donor-supported (UNCTAD and the World Bank CARs-4 project), with broker training already provided.
  - Large importers file through their own staff.

  Sources:
  - https://asycuda.org/tajikistan-launches-passenger-declaration-module-under-asycudaworld/
  - https://unctad.org/news/tajikistan-digital-transformation-reshaping-trade-and-connectivity
  - https://asiaplustj.info/ru/news/tajikistan/economic/20250929/v-tadzhikistane-vvoditsya-novaya-sistema-tamozhennogo-oformleniya-chto-ona-soboi-predstavlyaet
  - https://asian-cba.com/2024/02/07/rynok-tamozhennyh-brokerov-predstavitelej-v-tadzhikistane/
- **Generic e-invoicing / VAT filing tool.** Killed by the free Tax Committee e-VAT and taxpayer cabinet, together with 1C:Бухгалтерия для Таджикистана.
- **Fiscal cash-register compliance.** Killed by hardware dependence and by the licensed local fiscal-device vendors.

## Attractive problem, poor distribution

- **Export compliance packs for dried-fruit and apricot exporters:**
  - The work is the phytosanitary certificate, certificate of conformity and origin, and residue-test evidence for EU buyers.
  - The problem is real: missing or mismatched documents cause shipments to be held.
  - The sector is small: about USD 80M of agri exports in 2025, and Q1 2025 dried-fruit exports of about USD 9.4M.
  - Exporters are few and are already supported by ITC and STDF donor projects. The government Tajikistan Trade Portal lists the procedures for free.

  Sources:
  - https://www.freshplaza.com/europe/article/9808524/tajikistan-s-agricultural-exports-reach-nearly-usd-80-million-in-2025/
  - https://www.freshplaza.com/article/9732413/tajikistan-expands-dried-fruit-exports-across-26-countries
  - https://standardsfacility.org/PG-447
  - https://east-fruit.com/en/news/dried-apricots-from-tajikistan-to-us-and-eu-markets-the-export-experience

## Too competitive

- **Accounting and tax reporting in general.** 1C (local franchise network) plus free government portals.

## Notes / unverified

- I could not verify any mandatory digital product marking for pharmaceuticals or tobacco in Tajikistan in 2025–2026. The search results showed only the Uzbek (Asl belgisi) and Kyrgyz regimes. Re-check before excluding the topic.
- The number of VAT payers and SMEs could not be found. All market-size figures above are estimates.
