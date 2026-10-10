# BiH AML SaaS: payments and billing from a foreign company (agent 05)

Date: 10 October 2026. Money is in KM (convertible marks); 1 EUR = 1.95583 KM (fixed peg). Prices from [04](04-gtm-finance-company.md): Solo 290 KM (148.28 EUR), Office 590 KM (301.66 EUR), Consultant 1,190 KM (608.44 EUR) a year, net, prepaid. The seller is assumed to be an EU company. UK, US, Israeli and other non-EU sellers are noted where they differ. "(unverified)" marks anything no source confirmed. "My estimate" marks planning numbers.

This file tests the owner's preferred model: card payments online, no BiH company at first. It qualifies the advice in [04](04-gtm-finance-company.md) and [PLAN §9](PLAN.md), which said "set up a BiH d.o.o. in month 1".

---

## Summary

- **The plumbing works.** An EU Stripe account can charge BiH cards. Stripe supports BAM and EUR, a BiH tax-ID field (`ba_tin`), yearly subscriptions, invoices and dunning ([Stripe currencies](https://docs.stripe.com/currencies); [Stripe tax IDs](https://docs.stripe.com/billing/customer/tax-ids); [Stripe revenue recovery](https://docs.stripe.com/billing/revenue-recovery)). BiH cards are "international" cards for Stripe: 3.15% + 0.25 EUR on an Irish account ([Stripe IE pricing](https://stripe.com/ie/pricing)).
- **Charge in EUR, not BAM.** Charging in BAM adds Stripe's 2% conversion fee on a currency that is pegged to the euro anyway ([Stripe IE pricing](https://stripe.com/ie/pricing)). Show the KM amount on the invoice at the fixed rate.
- **Cards are the cheapest way for the buyer to pay.** A BiH bank charges about 1% FX on a card payment abroad ([Sparkasse BiH tariff](https://www.sparkasse.ba/content/dam/ba/sba/www.sparkasse.ba/Stanovnistvo/Tarifnik/Opci%20uslovi_%20naknade%20za%20usluge%20u%20poslovanju%20sa%20privredom.pdf)). A SWIFT transfer costs at least 20 KM at Raiffeisen BiH, which is 7% of a Solo plan ([Raiffeisen BiH tariff](https://www.raiffeisenbank.ba/content/dam/rbi/retail/eu/ba/Tarife%20naknada%20za%20posl%20pp%20u%20zemlji%20i%20inostranstvu%20%20va%C5%BEe%20od%2001%2008%202024.pdf.coredownload.pdf)). BiH is not in SEPA yet; it applied in August 2026 ([Sarajevo Times](https://sarajevotimes.com/bosnia-and-herzegovina-officially-applies-for-sepa-membership/)).
- **The real cost is tax, not fees.** Every BiH business that buys a service from a foreign supplier owes 17% BiH VAT itself (reverse charge), whether or not it is VAT-registered ([BiH VAT Law Art. 13 and 15](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf); [MojObrt](https://mojobrt.ba/blog/pdv-usluge-iz-inostranstva-obrt-nije-u-pdv-sistemu)).
  - For a VAT-registered buyer, this nets to zero in its VAT return.
  - For a buyer outside the VAT system, it is a real 17% cost plus a one-off filing ([ACT](https://act.ba/2025/08/30/najnovija-azuriranja-u-pdv-zakonodavstvu-bih-primjena-od-6-augusta-2025/)). Solo then costs 339.30 KM, not 290 KM.
  - A BiH d.o.o. below the 100,000 KM threshold would charge no VAT at all. That gap is the main reason to move to a local entity later.
- **Withholding tax is a risk, mostly for RS buyers and non-EU sellers.** FBiH treats technical services delivered electronically from abroad as performed outside BiH, so no withholding ([Unija](https://unija.com/bs/primljene-usluge-od-pravnih-lica-iz-inostranstva/)). RS and Brčko withhold 10% on royalties and several service types ([PwC](https://taxsummaries.pwc.com/bosnia-and-herzegovina/corporate/withholding-taxes)). Whether a SaaS subscription is a "royalty" is not settled in any BiH source I found (unverified). Treaties cut the royalty rate to 0% for Irish and French sellers and 5% for Austrian and Slovenian sellers (same PwC page). PwC lists no treaty with the US or Israel.
- **The foreign seller does not need BiH VAT registration for B2B sales.** The buyer is liable when the foreign supplier appoints no tax representative ([BiH VAT Law Art. 13(3)](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf)). Stripe's page is more cautious: it lists a BiH registration threshold for B2B and B2C digital sales and says a representative is required ([Stripe Tax BiH](https://docs.stripe.com/tax/supported-countries/europe/collect-tax?tax-jurisdiction-europe=bosnia-and-herzegovina)). Confirm this with a BiH tax adviser.
- **PayPal and merchants of record add cost and little else.**
  - PayPal costs 5.39% + 0.35 EUR on a BiH payment ([PayPal IE fees](https://www.paypal.com/ie/business/paypal-business-fees)).
  - Paddle costs 5% + 50 cents and adds 17% BiH VAT to every sale, B2B included ([Paddle pricing](https://www.paddle.com/pricing); [Paddle tax](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)).
  - Lemon Squeezy costs about 7% + 50 cents on a non-US subscription ([Lemon Squeezy fees](https://docs.lemonsqueezy.com/help/getting-started/fees)).
- **Recommendation.**
  - **Launch on Stripe** from the EU company: Stripe Billing, priced in EUR, card first.
  - **Offer a bank-transfer invoice** paid to the company's own EUR IBAN as a second option.
  - **Put clear reverse-charge wording** on every invoice, and publish a bilingual FAQ on how to book it.
  - **Sign one BiH reseller** (a bookkeeping office or partner consultant) for buyers who want a domestic KM invoice.
  - **Set up the BiH d.o.o.** once there are about 25 paying customers, or once 1 in 4 lost deals cites tax or invoicing.

---

## Card acceptance from BiH

**Do BiH cards work abroad online?** Yes, in general.

- BiH has about 2.59 million active payment cards from 21 issuing banks (end-2024). 83.37% of them are debit cards ([CBBiH](https://www.cbbh.ba/press/ShowNews/1649?lang=bs); [Raport](https://raport.ba/koliko-gradjani-bih-koriste-kartice-za-placanje-centralna-banka-bih-objavila-podatke)).
- The cards are Visa and Mastercard brands issued by the same banks that serve small firms. So "will a BiH card work on Stripe?" is mostly a question of the card's settings. The network is not the problem.

**Typical problems and how to avoid them:**

| Issue | What the sources say | What to do |
|---|---|---|
| 3-D Secure | Intesa Sanpaolo BiH enrols all cards in 3-D Secure automatically, with an SMS code valid for 3 minutes ([Intesa BiH](https://intesasanpaolobanka.ba/en/stanovnistvo/kartice/internet-placanje-jos-sigurnije.html)). Sparkasse BiH activates it at the first online purchase with an SMS code ([Sparkasse BiH](https://www.sparkasse.ba/bs/stanovnistvo/kartice/3d-secure)) | Use Stripe Checkout or the hosted invoice page, which handle the 3-D Secure step. Tell buyers to keep their phone at hand |
| Internet payments limited or switched off | UniCredit BiH lets clients set daily internet-payment limits in its m-ba app, recommends keeping them minimal, and lets clients switch internet payments off completely ([UniCredit guide](https://www.unicredit.ba/content/dam/cee2020-pws-bh1/Stanovnistvo/m_ba/Korisni%C4%8Dka%20uputa%20za%20pregled%20i%20upravljanje%20dnevnim%20limitima%20po%20karticama%20fizi%C4%8Dkih%20osoba%20(m-ba).pdf)). NLB's Visa Internet card allows card-not-present payments only in a window the user opens in e-banking ([NLB Banja Luka](https://www.nlb-rs.ba/content/dam/nlb/nlb-banja-luka/banja-luka-documents/banja-luka-stanovnistvo/kartice/debitne-kartice/IL_Internet_kartice_01.08.2026.pdf)) | FAQ line: "If the payment is declined, check the internet limit in your bank app" |
| Blocks for an "unusual location" | A BiH finance site says banks block cards after suspicious foreign use ([Finansijski savjeti](https://finansijskisavjeti.com/blokirana-kartica-sta-uciniti-i-kako-izbjeci-slicne-situacije/)) | Same FAQ line. Keep the statement descriptor clear (brand name, not the legal entity only) |
| Whether online payment is off by default on new cards | No BiH source says it is off by default across banks (unverified). The bank pages above show it can be limited or switched off by the user | Treat as possible. Test with cards from the 4-5 largest banks during the pilot |
| FX fee charged to the buyer | Sparkasse BiH's business tariff charges 1.00% conversion on all card transactions abroad and no purchase commission ([Sparkasse business tariff](https://www.sparkasse.ba/content/dam/ba/sba/www.sparkasse.ba/Stanovnistvo/Tarifnik/Opci%20uslovi_%20naknade%20za%20usluge%20u%20poslovanju%20sa%20privredom.pdf)). Other banks' business-card FX fees were not checked (unverified) | Price in EUR. The 1% falls on the buyer. It is still far below a SWIFT fee |
| Maestro cards | Whether older BiH Maestro debit cards work for card-not-present payments on Stripe is (unverified) | Test one in the pilot. Offer a bank transfer if it fails |

**How common are business cards among small BiH firms?**

- There are no official numbers. CBBiH's card statistics do not split business and personal cards in public releases ([CBBiH](https://www.cbbh.ba/press/ShowNews/1649?lang=bs)).
- A search snippet attributes to Mastercard's "MasterIndex 2025" the finding that BiH SMEs typically hold two or three business cards, mostly debit (70%). The page returned an error, so this is (unverified) ([Mastercard BiH](https://www.mastercard.ba/bs-ba/vizija/novosti/masterindex-2025.html)).
- In practice, many one-person firms (obrt or sole-owner d.o.o.) will pay with the owner's personal card (my estimate). That is fine if the invoice carries the firm's name, JIB and address. Whether booking a firm expense paid by the owner's personal card causes problems is for the buyer's own bookkeeper (unverified).

---

## Stripe

**Can an EU, UK or US Stripe account charge customers in BiH?** Yes.

- Stripe lets accounts "charge customers in over 135 currencies". **BAM is on the presentment list**, with no American Express restriction ([Stripe currencies](https://docs.stripe.com/currencies)).
- BiH is not in Stripe's EEA card list, so BiH cards are priced as international cards (same page).
- I found nothing that restricts BiH cardholders (BiH is not a sanctioned country). Stripe Radar may still flag individual payments (unverified).

**Currency: BAM or EUR?**

- **Charge in EUR.**
  - If you charge in BAM and settle in EUR, Stripe adds 2% for currency conversion ([Stripe IE pricing](https://stripe.com/ie/pricing)), on a currency pegged to the euro.
  - If you charge in EUR, the BiH bank converts at about 1% ([Sparkasse business tariff](https://www.sparkasse.ba/content/dam/ba/sba/www.sparkasse.ba/Stanovnistvo/Tarifnik/Opci%20uslovi_%20naknade%20za%20usluge%20u%20poslovanju%20sa%20privredom.pdf)).
- Show the KM amount on the invoice at 1.95583. BiH VAT rules convert foreign-currency invoices at the CBBiH middle rate on the day the tax liability arises (VAT Law Art. 22(2), as cited by [MojObrt](https://mojobrt.ba/blog/pdv-usluge-iz-inostranstva-obrt-nije-u-pdv-sistemu)). For EUR that is always 1.95583.
- **Do not turn on Adaptive Pricing for BiH.** It shows prices in local currency and adds a 2-4% conversion fee that the customer pays ([Stripe Adaptive Pricing](https://support.stripe.com/questions/adaptive-pricing)).
- Round EUR prices are possible: EUR 149 / 299 / 609 equal 291.42 / 584.79 / 1,191.10 KM (my arithmetic). Or quote exact KM-equivalent EUR prices: 148.28 / 301.66 / 608.44 EUR.

**Fees.**

| Seller's Stripe account | BiH card price | Conversion | Source |
|---|---|---|---|
| Ireland (EU, EUR) | 3.15% + 0.25 EUR ("international cards") | +2% if conversion is needed | [Stripe IE](https://stripe.com/ie/pricing) |
| United States (USD) | 2.9% + 30 cents, plus 1.5% for international cards | +1% if conversion is needed | [Stripe US](https://stripe.com/pricing) |
| United Kingdom (GBP) | 3.25% + 20p for international cards (unverified; not confirmed in my searches) | +2% (unverified) | [Stripe pricing](https://stripe.com/pricing) |

Extra Stripe products (Irish prices, [Stripe IE](https://stripe.com/ie/pricing)):

- **Stripe Billing**, pay-as-you-go: 0.7% of billing volume, for subscriptions.
- **Stripe Invoicing** Starter: 0.4% per paid invoice, for one-off invoices.
- **Stripe Tax** Basic: 0.5% per transaction where you are registered. It is not needed for BiH (see below).
- **Disputes:** 20 EUR per dispute received.

**Stripe Billing for yearly subscriptions.**

- Create one yearly Price per plan in EUR. Collect the card at Checkout. Stripe charges automatically each year.
- **Dunning and failed renewals:**
  - Smart Retries choose the best time to retry a failed card payment. They can be set up in the Dashboard without code.
  - Stripe can email customers when a payment fails, a card expires, or a payment method needs updating ([Stripe revenue recovery](https://docs.stripe.com/billing/revenue-recovery)).
  - Stripe uses the card networks' account-updater services to refresh expired or replaced cards ([Stripe optimization](https://docs.stripe.com/payments/analytics/optimization)). Whether BiH issuers take part in those services is (unverified).
  - On a yearly plan, many cards will have expired by renewal. Send your own reminder 30 days before renewal, with a link to update the card or switch to a bank-transfer invoice (my estimate of good practice).
- **Customers who want to pay by bank transfer:** create the subscription or invoice with collection by emailed invoice ("send invoice") instead of automatic charge ([Stripe invoices API](https://docs.stripe.com/api/invoices/create)). Mark it paid by hand when the money arrives (see Bank transfers).

**Invoices with the buyer's company name, JIB and address.**

- Stripe has a BiH tax-ID type, `ba_tin` ("Bosnia and Herzegovina Tax Identification Number"). Its example has 12 digits. Tax IDs show on invoice PDFs ([Stripe tax IDs](https://docs.stripe.com/billing/customer/tax-ids)).
- A 12-digit number matches the BiH VAT (PDV) number. A firm outside VAT has only its 13-digit JIB / ID number (unverified). For those firms, put "JIB / ID broj" in one of the four invoice **custom fields**.
- Stripe invoices also have a **memo**, a **footer** for legal text, and **templates**. A template can show set footer text to customers from one country ([Stripe customize invoices](https://docs.stripe.com/invoicing/customize); [Stripe invoice templates](https://docs.stripe.com/invoicing/invoice-rendering-template)). Use a BiH template for the reverse-charge wording (text in the checklist below).

**Stripe Tax for a B2B export to BiH.**

- Stripe Tax covers BiH as a customer location for digital products since 18 Dec 2024. BiH cannot be the seller's business location ([Stripe Tax countries](https://docs.stripe.com/tax/supported-countries)).
- Stripe's BiH page says remote sellers of digital services "to consumers and businesses" have a registration threshold of "50,000 BAM in the current year", and that a BiH tax representative is required ([Stripe Tax BiH](https://docs.stripe.com/tax/supported-countries/europe/collect-tax?tax-jurisdiction-europe=bosnia-and-herzegovina)).
  - This conflicts with BiH law in two ways:
    1. The general VAT threshold has been 100,000 KM since December 2023 ([N1](https://n1info.ba/vijesti/dom-naroda-bih-usvojio-izmjene-zakona-o-pdv-u-pomjera-se-prag-obavezne-registracije-na-100-000-km/); [VAT Law](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf)).
    2. For B2B services, the buyer pays the VAT when the foreign seller has no tax representative (VAT Law Art. 13(3), same PDF).
  - Treat Stripe's page as a cautious monitoring default, not as law.
- For an EU seller that is not registered in BiH, Stripe Tax should not charge BiH VAT. Stripe Tax applies "the reverse charge or zero rate according to applicable laws when the tax ID has the required number format" ([Stripe tax IDs](https://docs.stripe.com/billing/customer/tax-ids)).
- **My advice: do not use Stripe Tax for BiH.** Leave tax off on BiH invoices and add the legal wording through the template. That saves the 0.5%.

**Bank-transfer invoice payments through Stripe.**

- Stripe's own bank-transfer method gives each customer a virtual IBAN. **Only US Stripe accounts accept international SWIFT wires into it.** EU accounts take SEPA. A US account accepts EUR only from SEPA countries ([Stripe bank transfers](https://docs.stripe.com/payments/bank-transfers)).
- BiH banks pay by SWIFT, not SEPA ([Sarajevo Times](https://sarajevotimes.com/bosnia-and-herzegovina-officially-applies-for-sepa-membership/)). So **do not print Stripe's virtual IBAN on invoices for BiH buyers.**
- Print the company's own EUR IBAN and SWIFT/BIC instead. Mark the Stripe invoice "paid outside Stripe" when the money lands.
- Stripe Invoicing's 0.4% fee then applies only if the invoice is paid through Stripe (unverified).

**Stripe Managed Payments (Stripe as merchant of record).**

- Third-party sources say it adds about 3.5% on top of normal Stripe fees and covers 80+ countries ([Dodo Payments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained); [UserJot](https://userjot.com/blog/stripe-managed-payments-for-saas)).
- I did not confirm BiH coverage or the fee on Stripe's own pages (unverified).

**Non-EU sellers.**

- **UK company:** Stripe UK works the same way. The UK's 1981 tax treaty with Yugoslavia still applies to BiH, as modified by the MLI from 1 Jan 2021 ([HMRC](https://www.gov.uk/government/publications/bosnia-herzegovina-tax-treaties)). The treaty royalty rate is 10% ([PwC](https://taxsummaries.pwc.com/bosnia-and-herzegovina/corporate/withholding-taxes)).
- **US company:** fees are higher on BiH cards: 2.9% + 30 cents + 1.5%, and +1% for conversion ([Stripe US](https://stripe.com/pricing)). PwC lists no US treaty with BiH ([PwC](https://taxsummaries.pwc.com/bosnia-and-herzegovina/corporate/withholding-taxes)). See Tax friction.
- **Israeli company:** whether Stripe accepts Israel-based businesses directly in 2026 is (unverified). Many Israeli founders sell through a US, UK or EU entity (unverified). PwC lists no Israel treaty with BiH.

---

## PayPal

**Can BiH buyers pay with PayPal?** Yes.

- BiH accounts are served by PayPal Pte. Ltd. (Singapore). The BiH user agreement says users can send payments "and, where available, to receive payments" ([PayPal BA user agreement](https://www.paypal.com/ba/legalhub/paypal/useragreement-full)).
- Paying a merchant from BiH works with a linked card.

**Receive restrictions in BiH.**

- Guides say BiH accounts can now receive money but can withdraw only to a Visa card, not to a bank account or a Mastercard. One forum reports 30-day holds. These sources are unofficial (unverified) ([Uvoz.info](https://uvoz.info/kako-radi-paypal-u-bosni-i-hercegovini/); [Idemo](https://idemo.info/kratki-vodic-za-paypal-korisnike-u-bosni-i-hercegovini/)).
- This matters only if a BiH reseller wanted to collect through PayPal. It does not affect a foreign seller.

**Fees for an EU (Irish) PayPal business account receiving from BiH** (page last updated 7 Sep 2026; [PayPal IE fees](https://www.paypal.com/ie/business/paypal-business-fees)):

- 3.40% + 0.35 EUR for commercial transactions;
- plus 1.99% because the sender is outside the EEA and UK;
- 3.00% above the base rate if the merchant converts currency.

BAM is not in PayPal's currency list, so the payment would be in EUR (same page).

**Is PayPal useful for this audience?** Not at launch.

- A BiH buyer's PayPal account is funded by the same bank card that would work on Stripe. PayPal adds an account step and costs the seller about 1.6 points more than Stripe.
- Add it only if pilot buyers ask for it (my estimate).

---

## Merchant-of-record options

A merchant of record (MoR) resells your software in its own name. It handles VAT and payments, and you invoice the MoR.

| | Sells into BiH? | B2B tax treatment in BiH | Fee | Comment |
|---|---|---|---|---|
| **Paddle** | Yes. BiH is a supported country with EUR as the transaction currency ([Paddle countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)) | Charges BiH VAT at 17% on **B2B and B2C**. "B2B customers are responsible for reclaiming indirect tax back on their tax returns" ([Paddle tax](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/), updated 1 Aug 2025) | 5% + 50 cents per checkout transaction ([Paddle pricing](https://www.paddle.com/pricing)) | Paddle seems to be BiH-registered through a representative. Then the reverse charge does not apply (VAT Law Art. 13(3) applies only when no representative is appointed; [VAT Law](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf)). So every buyer pays 17% on the invoice |
| **Lemon Squeezy** (owned by Stripe) | Sells globally (unverified for BiH specifically) | Takes on "tax collection and calculation liability across all jurisdictions" ([Lemon Squeezy pricing](https://www.lemonsqueezy.com/pricing)). BiH B2B treatment (unverified) | 5% + 50 cents, plus 1.5% for non-US buyers, plus 0.5% on subscriptions, plus 1.5% on PayPal ([Lemon Squeezy fees](https://docs.lemonsqueezy.com/help/getting-started/fees)) | The most expensive per sale for this case: about 7% + 50 cents |
| **FastSpring** | (unverified) | (unverified) | Not published. Third parties say about 5.9% + 95 cents, up to 8.9% for small or high-risk accounts ([Toolradar](https://toolradar.com/tools/fastspring/pricing); [Dodo Payments](https://dodopayments.com/blogs/fastspring-review-alternative)) | Built for larger software sellers. Not a fit at 25-100 sales a year |
| **Stripe Managed Payments** | (unverified) | (unverified) | About 3.5% on top of Stripe fees (third-party figure) ([Dodo Payments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained)) | Worth re-checking if BiH VAT registration turns out to be needed |

**Do they simplify anything here?**

- **What they solve:**
  - A BiH buyer outside the VAT system pays the 17% on the MoR's invoice, so it has no one-off filing to do. The 17% cost is the same as under the reverse charge.
  - They remove any doubt about whether the foreign seller must register for BiH VAT.
- **What they do not solve:**
  - **VAT-registered buyers lose something.** They pay 17% in cash and must reclaim it. Under the reverse charge they pay no cash VAT at all. Whether a Paddle invoice is a valid BiH input-VAT invoice is (unverified).
  - **Withholding tax does not go away.** The buyer still pays a foreign company: Paddle is a UK entity (unverified), so the UK treaty applies.
  - **Fees are higher:** 5-7% versus about 3.9% for Stripe direct.
  - **Pro-forma and bank-transfer buying is awkward.** BiH firms prefer to buy against a pro-forma invoice. Paddle advertises international invoicing ([Paddle pricing](https://www.paddle.com/pricing)), but whether a BiH buyer can pay a Paddle invoice by SWIFT is (unverified).
- **Verdict:** not for launch. Keep Paddle as the fallback if a BiH tax adviser says the foreign seller must register for VAT.

---

## Bank transfers

**SEPA does not cover BiH yet.**

- The Central Bank of BiH applied to the European Payments Council in August 2026. It says the first SEPA transactions will come no earlier than six months after BiH is admitted ([Sarajevo Times](https://sarajevotimes.com/bosnia-and-herzegovina-officially-applies-for-sepa-membership/); [SeeNews](https://seenews.com/news/bosnia-eyes-sepa-membership-application-in-early-2026-report-1283383)).
- Until then, a BiH firm pays a foreign EUR invoice by SWIFT. Realistically, SEPA will not arrive before mid-2027 at the earliest (my estimate).

**What a BiH firm pays to send money abroad** (Raiffeisen BANK BiH, legal entities, tariff from 1 Aug 2024; [Raiffeisen BiH tariff](https://www.raiffeisenbank.ba/content/dam/rbi/retail/eu/ba/Tarife%20naknada%20za%20posl%20pp%20u%20zemlji%20i%20inostranstvu%20%20va%C5%BEe%20od%2001%2008%202024.pdf.coredownload.pdf)):

| Item | Fee |
|---|---|
| Payment abroad through e-banking (RBBH net) | 0.25%, minimum 20 KM |
| Payment abroad on paper | 0.35%, minimum 20 KM |
| KM to EUR conversion | 0.10% |
| Payment in EUR to a client of a Raiffeisen network bank abroad | 20% off the tariff (IGP), minimum 20 KM |
| For comparison: domestic KM payment to another BiH bank through e-banking | 1.00 KM |

- On a 290 KM invoice the buyer pays about 20.29 KM (7.0%). On 1,190 KM it pays about 21.19 KM (1.8%).
- Other BiH banks' tariffs were not checked. Assume a similar 15-25 KM minimum (my estimate).

**Fees on the seller's side.**

- With "SHA" charges, intermediary banks can deduct fees from the amount, so the seller may receive less than invoiced. Wise says correspondent banks can deduct their own charges, and the sender can choose "OUR" to cover them ([Wise SWIFT fees](https://wise.com/help/articles/3EsxRDF4uNpQncdgH480os/fees-for-receiving-money-by-swift)).
- Ask buyers to choose OUR, or accept small short-payments and write them off (my estimate).

**Does a Wise or Revolut business account help?**

- **Wise:** a Wise EUR account receives SWIFT payments for a flat 2.39 EUR. Domestic (SEPA) EUR receipts are free ([Wise SWIFT fees](https://wise.com/help/articles/3EsxRDF4uNpQncdgH480os/fees-for-receiving-money-by-swift); [Wise EUR details](https://wise.com/help/articles/2827505/how-do-i-receive-money-with-my-eur-account-details)). This helps the seller see and reconcile payments cheaply.
  - It does not lower the BiH buyer's 20 KM sending fee.
  - Wise does not offer BAM local account details (unverified).
- **Revolut:** whether Revolut Business offers anything for BiH payers is (unverified).

**Better option, if bank transfers become common: a non-resident KM account in a BiH bank.**

- A foreign legal entity can open a non-resident account in a BiH bank. In FBiH this falls under a 2010 rulebook (Sl. novine FBiH 56/2010) ([Raiffeisen BiH](https://app.raiffeisenbank.ba/node/5290)).
- Documents needed: the bank's application form, signature specimens, a register extract, certified translations and passport copies ([Addiko FBiH](https://www.addiko-fbih.ba/static/uploads/Potrebna-dokumentacija-za-otvaranje-racuna-za-nerezidenate.pdf)).
- Buyers would then pay a **domestic KM transfer**, about 1 KM, instead of a 20 KM SWIFT payment.
- Raiffeisen charges nothing on inflows to a non-resident account. Sending the money abroad from it costs 0.20%, minimum 20 KM, so sweep it monthly ([Raiffeisen BiH tariff](https://www.raiffeisenbank.ba/content/dam/rbi/retail/eu/ba/Tarife%20naknada%20za%20posl%20pp%20u%20zemlji%20i%20inostranstvu%20%20va%C5%BEe%20od%2001%2008%202024.pdf.coredownload.pdf)).
- Whether a resident may pay a non-resident in KM for a service, and whether the bank will open the account without a BiH presence, are (unverified). Ask the bank.

**Foreign-exchange paperwork for the buyer.**

- Under the FBiH foreign-exchange law, payments between residents and non-residents for current transactions are free. A bank may not execute a payment abroad that breaks the law ([FBiH FX law](https://www.fbihvlada.gov.ba/bosanski/zakoni/2010/zakoni/41bos.html)).
- Paying on a simulated contract or false documents is a misdemeanour with fines for both parties (same law; [Advokat Prnjavorac](https://advokat-prnjavorac.com/zakoni/Zakon_o_deviznom_poslovanju_FBiH.pdf)).
- In practice the bank asks for the invoice and sometimes the contract. Give buyers a PDF invoice plus a one-page "Ugovor / Opšti uslovi" (terms) they can attach (my estimate). The RS rules were not checked (unverified).

---

## Local gateways and reseller model

**BiH card gateways.**

- **Monri** (Sarajevo; owned by Payten/ASEE) is the leading BiH gateway. Monri says nine in ten BiH web shops use it, and it also works in Croatia, Serbia, Montenegro, North Macedonia and Romania ([Monri](https://monri.com/ceo-damir-causevic-klix-2024/); [PowerCommerce](https://powercommerce.com/blogs/partners/monri)).
  - BiH online packages have a monthly minimum of 59 KM (Launch), 69 KM (Boost) or 119 KM (Advance). Above set monthly volumes, a 0.50% fee applies instead ([Monri BiH](https://monri.ba/proizvodi/online-placanja/)).
  - **Monri does not sign card acceptance itself.** It passes the request to a bank, which offers the merchant a contract and sets the card commissions (same page, as summarised by search).
  - So a BiH acquiring bank must take the merchant on. A foreign company without a BiH entity or BiH account is unlikely to be accepted (unverified).
- **WSPay** (Monri group) publishes a price list with 380 EUR a year for the gateway and the same again for tokenisation ([WSPay BiH price list](https://www.wspay.ba/cd/321/monri-wspay-cjenik-usluga)).
- **CorvusPay** (Croatia) says it operates in BiH (unverified detail). Its terms for foreign merchants were not found.
- **Fiscal receipts.** In RS, a card payment counts as a "cash" payment that needs a fiscal receipt ([04](04-gtm-finance-company.md), citing the [RS law](https://www.paragraf.ba/propisi/republika-srpska/zakon-o-fiskalizaciji.html)). A local gateway therefore brings fiscal duties. A foreign seller paid through Stripe is outside BiH fiscalisation (unverified).
- **Bottom line:** local gateways only make sense once there is a BiH d.o.o. They would cut card cost to the local acquiring rate plus a 59 KM-a-month minimum. That is worth it only at roughly 100+ card sales a year (my estimate).

**Reseller or invoicing-partner model** (my design; no source covers it).

- A BiH partner buys licences from the EU company and resells them in KM on a normal domestic invoice. The partner could be a bookkeeping office, a partner AML consultant or Paragraf.
- **What the buyer gets:** a domestic invoice and a domestic KM transfer (about 1 KM). There is no reverse charge to self-assess and no withholding question for the buyer.
- **What the partner carries:**
  - one reverse-charge entry per wholesale invoice;
  - one withholding decision per payment, not one per customer;
  - fiscal-receipt duties for its own sales (unverified).
- **VAT trade-off** (my reading of VAT Law Art. 13 and 32; [VAT Law](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf)):
  - **Partner is VAT-registered:** it deducts the reverse charge, so that nets to zero. But it must add 17% VAT to its own sales. Non-registered buyers then pay 339.30 KM for Solo, as when buying from abroad.
  - **Partner is outside VAT:** it charges buyers no VAT. The 17% reverse charge on the wholesale price becomes its cost. At a 20% margin that is 17% of 232 KM = 39.44 KM per Solo licence, instead of 49.30 KM paid by the buyer. This is the cheaper chain for non-registered buyers.
- **Commercial terms (my estimate):**
  - a 15-25% margin for the partner;
  - licences activated by code;
  - you keep the terms of service and the data processing agreement directly with each end user.
- **Effect on cost:** 20% of 290 KM is 58 KM per sale, which is more than any card fee. A reseller is a bridge for buyers who insist on a domestic invoice, not the default.

---

## Tax friction (buyer side and seller side)

### Buyer side: BiH VAT on a service from abroad

**The law.**

- **Place of supply.** Under VAT Law Art. 15(2)(4), the place of supply is where the buyer does business when the service is:
  - (a) a licence or other IP right;
  - (c) consulting, accounting, data processing or data supply;
  - (g) telecommunications.

  ([VAT Law, consolidated with Sl. glasnik BiH 20/2025](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf)).
- **Electronic services.** The VAT Rulebook change in force from 6 Aug 2025 (Sl. glasnik BiH 25/2025) lists software, web hosting, online training, webinars and database access as electronic services taxed at the buyer's seat ([ACT](https://act.ba/2025/08/30/najnovija-azuriranja-u-pdv-zakonodavstvu-bih-primjena-od-6-augusta-2025/)).
- **Who pays.** VAT Law Art. 13(3) makes "the recipient of services acquired in the course of business" liable when the supplier has no BiH seat and appoints no tax representative ([VAT Law](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf)).

**For the two kinds of buyer:**

| Buyer | What it must do | Net cost on a 290 KM Solo plan | Sources |
|---|---|---|---|
| **VAT-registered** (turnover over 100,000 KM, or registered voluntarily) | Self-assess 17% output VAT in its monthly VAT return and deduct the same amount as input VAT | 290 KM, plus one line in the VAT return. If it forgets the deduction, an inspection charges only the output VAT | [Unija](https://unija.com/bs/primljene-usluge-od-pravnih-lica-iz-inostranstva/) |
| **Not VAT-registered** (most sole bookkeepers) | Still owes the 17%. It files a one-off return ("jednokratna prijava") with its UIO regional centre and pays once. It cannot deduct the VAT, because only registered payers can (Art. 32; Art. 44(5)) | 290 + 49.30 = **339.30 KM**, plus a form. On Consultant: 1,190 + 202.30 = 1,392.30 KM | [MojObrt](https://mojobrt.ba/blog/pdv-usluge-iz-inostranstva-obrt-nije-u-pdv-sistemu); [ACT](https://act.ba/2025/08/30/najnovija-azuriranja-u-pdv-zakonodavstvu-bih-primjena-od-6-augusta-2025/) |

- The exact UIO form name and deadline for the one-off return were not found (unverified). MojObrt links it to the UIO payment rulebook and the account list in "Aneks V" ([MojObrt](https://mojobrt.ba/blog/pdv-usluge-iz-inostranstva-obrt-nije-u-pdv-sistemu)).
- **Practical effect.** Against a BiH competitor that is not VAT-registered, the foreign seller is 17% dearer for non-registered buyers. Against a VAT-registered rival such as Paragraf, it is level. The [04](04-gtm-finance-company.md) VAT note assumed the BiH d.o.o. would enjoy this 17% edge.
- **A pricing option (my estimate):** set the foreign net price so that net plus 17% stays near the local anchor. For example, Solo at 249 KM net is about 291 KM with VAT. This also gives VAT-registered buyers a discount.

### Buyer side: withholding tax (porez po odbitku)

Rates and scope (PwC, reviewed 23 Sep 2026; [PwC](https://taxsummaries.pwc.com/bosnia-and-herzegovina/corporate/withholding-taxes)):

| Entity | What is taxed | Rate | Electronic-service rule |
|---|---|---|---|
| **FBiH** | Dividends (5%); interest, **royalties and IP**, management, technical and educational services (market research, tax advice, audit, consulting), rent, insurance, telecoms; **"other services" only from non-treaty countries** | 10% | Rulebook change Sl. novine FBiH 75/25: management, technical or educational services given electronically or remotely without presence in BiH "are considered performed outside BiH and withholding is not calculated" ([Unija, 12 Mar 2026](https://unija.com/bs/primljene-usluge-od-pravnih-lica-iz-inostranstva/)) |
| **RS** | Dividends, interest, **royalties and IP**, professional, scientific, **technical** and educational services (including management, consulting, audit, accounting, legal), insurance, telecoms, rent; **any service** paid to a resident of a non-treaty country | 10%, final tax | No electronic-delivery rule found (unverified) ([RS profit tax law](https://www.paragraf.ba/propisi/republika-srpska/zakon-o-porezu-na-dobit.html)) |
| **Brčko** | Interest, management, consulting, financial, **technical** and administrative services, royalties, rent, other services in Brčko | 10% | Not found (unverified) |

**Is a SaaS subscription a royalty or a service?**

- No BiH ruling was found (unverified).
- One FBiH tax firm treats software maintenance delivered remotely as "other services", not royalties. It says no withholding applies for a Croatian (treaty) supplier, but a Canadian (non-treaty) supplier triggers withholding on form POD-818 within 10 days ([Unija guide](https://unija.com/bs/porez-po-odbitku-u-fbih-vodic-za-preduzetnike/)).
- In Serbia, software-licence fees are usually treated as royalties ([IP Plus](https://www.ipplus.rs/blog/licence-za-softver-i-porez-po-odbitku-u-republici-srbiji)). An inspector in RS could take that view. Serbian practice does not bind BiH.

**Treaty rates on royalties** for EU sellers ([PwC](https://taxsummaries.pwc.com/bosnia-and-herzegovina/corporate/withholding-taxes)):

| Rate | Seller countries |
|---|---|
| 0% | Ireland, France |
| 5% | Austria, Slovenia |
| 7% | Spain |
| 10% | Germany, Netherlands, Italy, Croatia, Czech Republic, Poland, Hungary, Belgium; also the UK |
| No treaty listed | US, Israel |

- **Treaty relief needs the seller's certificate of residence** with the return ([Unija guide](https://unija.com/bs/porez-po-odbitku-u-fbih-vodic-za-preduzetnike/)).
- **Forms in FBiH:** POD-815 to POD-819 by the 10th of the following month, and the OP-820 declaration for an exemption. POD-815, POD-819 and OP-820 changed for 2026 ([Unija](https://unija.com/bs/primljene-usluge-od-pravnih-lica-iz-inostranstva/)).
- **Sole traders.** FBiH withholding sits in the profit-tax law and binds the "FBiH resident" payer ([Unija guide](https://unija.com/bs/porez-po-odbitku-u-fbih-vodic-za-preduzetnike/)). Whether a sole trader (obrt) taxed under the income-tax law must withhold is (unverified).

**What this means by seller location:**

- **EU seller in a treaty country, FBiH buyer:** no withholding in the likely reading, because the service is delivered electronically and treaty services are excluded. The buyer may still file an exemption declaration and keep the seller's residence certificate.
- **EU seller, RS or Brčko buyer:** withholding could be claimed as "technical service" or "royalty". The treaty usually removes it for services (business profits) and lowers it for royalties. The buyer needs the residence certificate.
- **US or Israeli seller (no treaty listed by PwC):**
  - FBiH taxes "other services" from non-treaty countries at 10%.
  - RS taxes **any** service paid to a non-treaty resident at 10%.
  - So the buyer should withhold 10% (11.11% if grossed up) unless the FBiH electronic-service rule applies.
  - **This is the biggest difference for a non-EU seller.** On a 290 KM sale, it is 29-32 KM and a form.
- **UK seller:** the treaty applies ([HMRC](https://www.gov.uk/government/publications/bosnia-herzegovina-tax-treaties)). Royalties are capped at 10%. Services are otherwise like an EU seller (unverified).

### Seller side

**BiH VAT registration.**

- VAT Law Art. 60 says a person without a BiH seat that supplies goods or services in BiH registers through a BiH tax representative ([VAT Law](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf)).
- For B2B services under Art. 15(2)(4), Art. 13(3) moves the liability to the business buyer when no representative is appointed (same law). My reading: **no BiH registration is needed for B2B-only sales.**
- Stripe's page suggests registration duties for both B2B and B2C digital sales above a threshold ([Stripe Tax BiH](https://docs.stripe.com/tax/supported-countries/europe/collect-tax?tax-jurisdiction-europe=bosnia-and-herzegovina)). Paddle collects BiH VAT on B2B too, because it appointed a representative ([Paddle tax](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)).
- **Get a one-page opinion from a BiH tax adviser** before launch (unverified).
- **Sell B2B only.** Ask for the firm name, address and JIB at checkout, and refuse private individuals. All obliged firms are businesses anyway (Law Art. 5, per [PLAN](PLAN.md)).

**VAT in the seller's own country.**

- **EU seller:** a B2B service to a business outside the EU is supplied where the customer is established, so it is outside EU VAT ([VAT Directive 2006/112/EC, Art. 44](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0112)). Keep proof that the buyer is a business: its JIB and register entry. Your EU accountant should confirm the invoice wording your member state requires (unverified).
- **UK seller:** B2B services to overseas businesses are generally outside the scope of UK VAT under the general place-of-supply rule ([HMRC Notice 741A](https://www.gov.uk/guidance/vat-place-of-supply-of-services-notice-741a)).
- **US seller:** no federal VAT. US sales tax does not reach a foreign B2B sale (unverified).
- **Israeli seller:** services to a foreign resident are generally zero-rated under VAT Law s.30(a)(5), unless an Israeli resident also receives the service ([Shibolet](https://www.shibolet.com/en/zero-rate-value-added-tax-vat-for-services-provided-to-foreign-residents-in-connection-with-products-sold-by-foreign-residents-in-israel-tax-ruling-by-agreement/); [Kintsugi](https://trykintsugi.com/sales-tax-guides/middle-east/israel)).

**Income tax.** No BiH permanent establishment arises from selling online with no people or servers in BiH (general treaty principle; unverified for BiH practice).

---

## Fee comparison

Fees per yearly sale. EUR amounts are at 1.95583 KM. USD fixed fees use 1 EUR = 1.16 USD (my estimate). "Seller fee" is what the provider takes. "Buyer extra" is what the BiH buyer pays on top through its bank. VAT is shown separately because it does not depend on the provider (except the MoR case).

| Option | Seller fee, 290 KM sale | Seller fee, 1,190 KM sale | Buyer extra (bank / FX) | Buyer VAT burden |
|---|---|---|---|---|
| **Stripe IE, card, EUR, Billing** (3.15% + 0.25 EUR + 0.7%) | 11.65 KM (4.0%) | 46.30 KM (3.9%) | about 1% FX: 2.90 / 11.90 KM | Reverse charge: 0 if VAT-registered; 17% (49.30 / 202.30 KM) if not |
| Stripe IE, card, EUR, one-off invoice (Invoicing 0.4% instead of Billing) | 10.78 KM (3.7%) | 42.73 KM (3.6%) | about 1% FX | As above |
| Stripe IE, card, **BAM** (adds 2% conversion) | 17.45 KM (6.0%) | 70.10 KM (5.9%) | None or small (unverified) | As above |
| Stripe US, card, USD, Billing (2.9% + 1.5% + 0.7% + $0.30) | 15.30 KM (5.3%) | 61.20 KM (5.1%) | about 1% FX | As above, **plus a 10% withholding risk** (no treaty) |
| PayPal IE, EUR (3.40% + 1.99% + 0.35 EUR) | 16.32 KM (5.6%) | 64.83 KM (5.4%) | Card FX at the buyer's bank | As above |
| Paddle (5% + $0.50, on the net price) | 15.34 KM (5.3%); 17.81 KM (6.1%) if charged on the VAT-inclusive total (unverified) | 60.34 KM (5.1%); 70.46 KM (5.9%) | Card FX | **17% charged on the invoice to all buyers.** Registered buyers reclaim it (unverified) |
| Lemon Squeezy (5% + 1.5% + 0.5% + $0.50) | 21.14 KM (7.3%) | 84.14 KM (7.1%) | Card FX | Probably like Paddle (unverified) |
| Stripe Managed Payments (Stripe IE + 3.5%, third-party figure) | 21.80 KM (7.5%) | 87.95 KM (7.4%) | Card FX | Probably like Paddle (unverified) |
| **Bank transfer (SWIFT) to the seller's EUR account at Wise** | 4.67 KM (1.6%), the 2.39 EUR Wise fee, plus any intermediary fees | 4.67 KM (0.4%) | **20.29 / 21.19 KM** (Raiffeisen e-banking: 0.25%, minimum 20 KM, plus 0.1% FX) | Reverse charge as above |
| Non-resident KM account in a BiH bank (buyer pays domestically) | Monthly sweep abroad: 0.20%, minimum 20 KM, shared across all sales; account fee (unverified) | Same | about 1 KM domestic payment | Reverse charge as above |
| Local reseller at 20% margin (my estimate) | 58.00 KM (20%) | 238.00 KM (20%) | about 1 KM | No VAT on the buyer's invoice if the reseller is outside VAT. The reseller then bears the reverse charge on the wholesale price (about 39 KM per Solo licence) |
| BiH d.o.o. later, with Monri plus a bank | Bank acquiring commission (unknown; "often 1.5-3.5%" per [04](04-gtm-finance-company.md)) plus a minimum of 59 KM a month | Same | None | None while below 100,000 KM |

Sources for the rates: [Stripe IE](https://stripe.com/ie/pricing); [Stripe US](https://stripe.com/pricing); [PayPal IE](https://www.paypal.com/ie/business/paypal-business-fees); [Paddle](https://www.paddle.com/pricing); [Lemon Squeezy fees](https://docs.lemonsqueezy.com/help/getting-started/fees); [Dodo Payments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained); [Wise](https://wise.com/help/articles/3EsxRDF4uNpQncdgH480os/fees-for-receiving-money-by-swift); [Raiffeisen BiH tariff](https://www.raiffeisenbank.ba/content/dam/rbi/retail/eu/ba/Tarife%20naknada%20za%20posl%20pp%20u%20zemlji%20i%20inostranstvu%20%20va%C5%BEe%20od%2001%2008%202024.pdf.coredownload.pdf); [Sparkasse BiH](https://www.sparkasse.ba/content/dam/ba/sba/www.sparkasse.ba/Stanovnistvo/Tarifnik/Opci%20uslovi_%20naknade%20za%20usluge%20u%20poslovanju%20sa%20privredom.pdf); [Monri](https://monri.ba/proizvodi/online-placanja/). Arithmetic is mine.

**Reading the table.**

- **Lowest total cost for the buyer and seller combined:** a card on Stripe in EUR. That is about 4% for the seller and about 1% for the buyer.
- **A bank transfer is cheap for the seller but costs the buyer 20 KM.** On a Solo plan that is worse than the card fee. On a Consultant plan it is about the same.
- **On any plan, VAT for non-registered buyers is 4 to 12 times larger than any payment fee.** Tax is the real cost of selling from abroad.

---

## Recommendation and setup checklist

**Launch setup (pilots and first year, no BiH company).**

1. **Provider:** a Stripe account of the EU company, with Stripe Billing for yearly subscriptions and Stripe Invoicing for pro-forma and bank-transfer buyers.
2. **Currency:** EUR. Show KM at 1.95583 on every page and invoice. Do not enable Adaptive Pricing or BAM pricing.
3. **Payment methods, in this order:**
   1. card (Visa, Mastercard) through Stripe Checkout;
   2. bank transfer (SWIFT, EUR) to the company's own IBAN or a Wise EUR account, against a Stripe invoice with 15 days to pay, marked "paid outside Stripe" when the money arrives.
   - No PayPal at launch. No Stripe virtual IBAN for BiH buyers.
4. **Checkout fields:**
   - firm name, address, municipality, entity (FBiH, RS or Brčko);
   - JIB / ID broj (13 digits), as a custom field;
   - PDV broj (12 digits) if VAT-registered, as `ba_tin`;
   - a tick box: "I buy for my business."
   - Do not collect personal (B2C) buyers.
5. **Invoice template for BiH customers** (footer and custom fields; [Stripe customize invoices](https://docs.stripe.com/invoicing/customize)):
   - Line item: "Pretplata na softver za SPN/FTA usklađenost (SaaS), 12 mjeseci, [od-do] / AML compliance software subscription (SaaS), 12 months, [from-to]".
   - Amount in EUR, plus "Protuvrijednost u KM po fiksnom kursu 1 EUR = 1,95583 KM: [x] KM".
   - Footer (draft; have your EU accountant and a BiH adviser check it):
     > "Usluga se pruža elektronskim putem, bez fizičkog prisustva u BiH. PDV nije obračunat: obveznik PDV-a je primalac usluge (prenos poreske obaveze) u skladu sa članom 13. tačka 3. i članom 15. stav 2. tačka 4. Zakona o PDV-u BiH. / Electronically supplied service, no physical presence in BiH. No VAT charged: the recipient accounts for BiH VAT under Art. 13(3) and 15(2)(4) of the BiH VAT Law. Not subject to [member state] VAT: place of supply outside the EU (Art. 44, Directive 2006/112/EC)."
   - Seller's EU VAT number, IBAN, SWIFT/BIC, and "Troškovi plaćanja: OUR".
6. **Dunning:**
   - Smart Retries on.
   - Stripe emails for failed payments and expiring cards on.
   - Your own renewal reminder 30 days ahead, in Bosnian, offering card update or a bank-transfer invoice.
   - Grace period of 14 days before read-only mode. Never delete AML records on non-payment, because of the 10-year retention duty.
7. **Tax pack for buyers** (one PDF download):
   - the seller's certificate of tax residence for the current year;
   - the company register extract;
   - the terms of service;
   - the FAQ below.
   - It answers the bank's request for documents and the withholding question.
8. **Before launch:** a one-page opinion from a BiH tax adviser on three points:
   - whether the foreign seller needs BiH VAT registration for B2B;
   - whether SaaS is a royalty for withholding in FBiH, RS and Brčko;
   - the name of the one-off VAT form for non-registered buyers.

   Budget: about 300-600 KM (my estimate).
9. **Pricing check:** decide whether to cut the foreign net price, for example to Solo 249 KM, so that non-registered buyers pay about 290 KM all-in after self-assessing VAT.
10. **Test** with real cards from Raiffeisen, UniCredit, Intesa, ASA, Sparkasse, NLB and Addiko during the pilot, including at least one Maestro and one business card.

**Fallback options.**

- **A. Buyer cannot pay by card:** a bank-transfer invoice (as above).
- **B. Many buyers want a domestic KM invoice:** a BiH reseller at a 15-25% margin, with licence codes.
- **C. The adviser says the foreign seller must register for BiH VAT, or Stripe rejects BiH payments:** Paddle as merchant of record. It costs 5% + 50 cents and adds 17% VAT on every invoice.
- **D. A US or Israeli seller:** sell through an EU or UK company instead, to get treaty protection against 10% withholding.

**Triggers to switch to a reseller or a BiH company** (my estimates; tie them to the kill criteria in [PLAN §13](PLAN.md)):

- Set up the BiH d.o.o. when **any** of these happens:
  - 25 paying customers. That is the month-6 kill-criteria gate, so the business is real;
  - 1 in 4 lost or stalled deals cites the foreign invoice, VAT or withholding;
  - more than 40% of customers are outside the VAT system, so the 17% handicap is common;
  - the BiH adviser says registration is needed;
  - a partner (SRRRS, Paragraf, an FBiH training provider) will sell only with a domestic invoice.
- Use a **reseller** as the bridge: from the first buyer who insists on a KM invoice until the d.o.o. is open.
- Add **Monri** cards only after the d.o.o. exists and the company bookkeeper has confirmed the fiscal-receipt rules ([04](04-gtm-finance-company.md)).

---

## Draft buyer FAQ text (Bosnian and English)

Have a BiH tax adviser review this before publishing. It is information, not tax advice.

### Bosanski

**Ko izdaje račun?**
Račun izdaje [Naziv d.o.o./GmbH/Ltd], [država], PDV broj [EU VAT]. Račun glasi u eurima (EUR), uz protuvrijednost u KM po fiksnom kursu 1 EUR = 1,95583 KM. Na računu su naziv, adresa i JIB vaše firme.

**Kako mogu platiti?**
- Karticom (Visa, Mastercard) preko sigurne stranice za plaćanje. Banka će možda tražiti potvrdu SMS kodom (3-D Secure).
- Ako plaćanje bude odbijeno, u aplikaciji svoje banke provjerite da li su internet plaćanja i plaćanja u inostranstvu uključena i da li je limit dovoljan.
- Bankovnim transferom (SWIFT) na naš IBAN [..], BIC [..]. Molimo izaberite opciju troškova "OUR" i upišite broj računa u svrhu plaćanja. Banke u BiH obično naplaćuju naknadu za plaćanje u inostranstvo (često najmanje 20 KM), pa je plaćanje karticom najčešće jeftinije.

**Zašto na računu nema PDV-a?**
Usluga se pruža elektronskim putem iz inostranstva. Prema Zakonu o PDV-u BiH (član 13. tačka 3. i član 15. stav 2. tačka 4), PDV za ovakvu uslugu obračunava primalac usluge u BiH:
- **Ako ste u sistemu PDV-a:** PDV od 17% obračunavate u svojoj PDV prijavi kao izlazni porez i istovremeno ga koristite kao ulazni porez. Neto trošak je nula.
- **Ako niste u sistemu PDV-a:** i dalje ste dužni obračunati i uplatiti 17% PDV-a jednokratnom prijavom nadležnom regionalnom centru UIO. Taj PDV ne možete odbiti.

Za detalje se obratite svom računovođi ili UIO.

**Da li moram obračunati porez po odbitku?**
Usluga se pruža isključivo elektronskim putem, bez fizičkog prisustva u BiH. Prema izmjeni Pravilnika o primjeni Zakona o porezu na dobit FBiH (Sl. novine FBiH 75/25), takve usluge se smatraju izvršenim izvan BiH. Naša firma je rezident [država], s kojom BiH ima ugovor o izbjegavanju dvostrukog oporezivanja. Potvrdu o rezidentnosti za tekuću godinu možete preuzeti [ovdje]. Pravila u Republici Srpskoj i Brčko distriktu se razlikuju, pa pitanje provjerite sa svojim računovođom.

**Šta da priložim banci za plaćanje u inostranstvo?**
Račun (fakturu) i Opšte uslove korištenja, koje možete preuzeti [ovdje].

**Kako se knjiži?**
Kao trošak usluga iz inostranstva (pretplata na softver), u KM po fiksnom kursu na dan nastanka obaveze.

**Mogu li dobiti predračun?**
Da. Kliknite "Plaćanje po predračunu". Predračun važi 15 dana. Nalog se aktivira odmah, a puni pristup dobijate kada uplata stigne.

### English

**Who issues the invoice?**
[Company name], [country], VAT no. [EU VAT]. The invoice is in euros (EUR), with the KM equivalent at the fixed rate 1 EUR = 1.95583 KM. It shows your firm's name, address and JIB.

**How can I pay?**
- By card (Visa, Mastercard) on a secure payment page. Your bank may ask you to confirm with an SMS code (3-D Secure).
- If the payment is declined, check in your bank's app that internet and foreign payments are switched on and that the limit is high enough.
- By bank transfer (SWIFT) to IBAN [..], BIC [..]. Please choose charges "OUR" and quote the invoice number. BiH banks usually charge for payments abroad (often at least 20 KM), so a card is usually cheaper.

**Why is there no VAT on the invoice?**
The service is supplied electronically from abroad. Under the BiH VAT Law (Art. 13(3) and Art. 15(2)(4)), the BiH buyer accounts for the VAT:
- **If you are VAT-registered:** you report 17% output VAT in your VAT return and deduct the same amount as input VAT. The net cost is zero.
- **If you are not VAT-registered:** you still owe 17% VAT, paid once through a one-off return to your UIO regional centre. You cannot deduct it.

Ask your bookkeeper or the UIO for details.

**Do I have to withhold tax?**
The service is supplied only electronically, with no presence in BiH. The FBiH profit-tax rulebook change (Sl. novine FBiH 75/25) treats such services as performed outside BiH. We are tax-resident in [country], which has a double-tax treaty with BiH. Download this year's certificate of residence [here]. Rules differ in Republika Srpska and Brčko District, so check with your bookkeeper.

**What do I give my bank for a foreign payment?**
The invoice and our Terms of Service, which you can download [here].

**How do I book it?**
As an expense for a service from abroad (software subscription), in KM at the fixed rate on the date the liability arises.

**Can I get a pro-forma invoice?**
Yes. Choose "Pay by pro-forma". It is valid for 15 days. Your account opens at once, and full access starts when the payment arrives.

---

## Open questions

1. **BiH VAT registration for a foreign B2B SaaS seller.** Does Art. 13(3) fully cover sales to businesses outside the VAT system, or does UIO expect registration through a representative, as Stripe's page suggests? (Tax adviser.)
2. **The UIO form and deadline** for the one-off VAT payment by non-registered buyers.
3. **Is SaaS a royalty or a service** for withholding in FBiH, RS and Brčko? Does the FBiH 75/25 electronic-service rule cover SaaS? Must an FBiH payer file OP-820 or a zero return even when no tax is due? Must an obrt withhold at all?
4. **US-BiH and Israel-BiH treaty status.** PwC lists neither. Check with IRS and Israeli treaty tables if the seller is non-EU.
5. **Which BiH banks' cards fail on Stripe**, and why: Maestro, internet limits, issuer blocks. Test in the pilot.
6. **Do BiH issuers take part in Visa and Mastercard account-updater services**, which affects renewal success?
7. **Is a Paddle invoice a valid input-VAT document** for a VAT-registered BiH buyer?
8. **Can a foreign company without a BiH presence open a non-resident KM account**, and may residents pay it in KM for services? Costs?
9. **Stripe UK international-card pricing**, and whether Stripe accepts Israel-based businesses directly.
10. **The share of target buyers outside the VAT system.** This decides how much the 17% handicap matters. Ask in the pilot sign-up form.

---

## Sources

**Stripe**
- [Stripe: supported currencies](https://docs.stripe.com/currencies)
- [Stripe pricing, Ireland](https://stripe.com/ie/pricing)
- [Stripe pricing, US](https://stripe.com/pricing)
- [Stripe: customer tax IDs](https://docs.stripe.com/billing/customer/tax-ids)
- [Stripe Tax: supported countries](https://docs.stripe.com/tax/supported-countries)
- [Stripe Tax: Bosnia and Herzegovina](https://docs.stripe.com/tax/supported-countries/europe/collect-tax?tax-jurisdiction-europe=bosnia-and-herzegovina)
- [Stripe: bank transfers](https://docs.stripe.com/payments/bank-transfers)
- [Stripe: revenue recovery](https://docs.stripe.com/billing/revenue-recovery)
- [Stripe: payments optimization](https://docs.stripe.com/payments/analytics/optimization)
- [Stripe: customize invoices](https://docs.stripe.com/invoicing/customize)
- [Stripe: invoice rendering templates](https://docs.stripe.com/invoicing/invoice-rendering-template)
- [Stripe API: create an invoice](https://docs.stripe.com/api/invoices/create)
- [Stripe: Adaptive Pricing](https://support.stripe.com/questions/adaptive-pricing)

**PayPal**
- [PayPal BA user agreement](https://www.paypal.com/ba/legalhub/paypal/useragreement-full)
- [PayPal Ireland business fees](https://www.paypal.com/ie/business/paypal-business-fees)
- [Uvoz.info: PayPal in BiH](https://uvoz.info/kako-radi-paypal-u-bosni-i-hercegovini/)
- [Idemo: PayPal guide for BiH](https://idemo.info/kratki-vodic-za-paypal-korisnike-u-bosni-i-hercegovini/)

**Merchants of record**
- [Paddle: supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)
- [Paddle: where Paddle charges tax](https://paddle.com/help/sell/tax/which-countries-does-paddle-charge-sales-tax-or-vat-for/)
- [Paddle pricing](https://www.paddle.com/pricing)
- [Lemon Squeezy pricing](https://www.lemonsqueezy.com/pricing)
- [Lemon Squeezy: fees](https://docs.lemonsqueezy.com/help/getting-started/fees)
- [Toolradar: FastSpring pricing](https://toolradar.com/tools/fastspring/pricing)
- [Dodo Payments: FastSpring review](https://dodopayments.com/blogs/fastspring-review-alternative)
- [Dodo Payments: Stripe Managed Payments fees](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained)
- [UserJot: Stripe Managed Payments](https://userjot.com/blog/stripe-managed-payments-for-saas)

**BiH banks and cards**
- [Raiffeisen BANK BiH: payment tariff for legal entities, from 1 Aug 2024](https://www.raiffeisenbank.ba/content/dam/rbi/retail/eu/ba/Tarife%20naknada%20za%20posl%20pp%20u%20zemlji%20i%20inostranstvu%20%20va%C5%BEe%20od%2001%2008%202024.pdf.coredownload.pdf)
- [Sparkasse BiH: tariff for business clients](https://www.sparkasse.ba/content/dam/ba/sba/www.sparkasse.ba/Stanovnistvo/Tarifnik/Opci%20uslovi_%20naknade%20za%20usluge%20u%20poslovanju%20sa%20privredom.pdf)
- [Sparkasse BiH: 3-D Secure](https://www.sparkasse.ba/bs/stanovnistvo/kartice/3d-secure)
- [Intesa Sanpaolo BiH: internet payments](https://intesasanpaolobanka.ba/en/stanovnistvo/kartice/internet-placanje-jos-sigurnije.html)
- [UniCredit BiH: card limits in m-ba](https://www.unicredit.ba/content/dam/cee2020-pws-bh1/Stanovnistvo/m_ba/Korisni%C4%8Dka%20uputa%20za%20pregled%20i%20upravljanje%20dnevnim%20limitima%20po%20karticama%20fizi%C4%8Dkih%20osoba%20(m-ba).pdf)
- [NLB Banja Luka: Visa Internet card](https://www.nlb-rs.ba/content/dam/nlb/nlb-banja-luka/banja-luka-documents/banja-luka-stanovnistvo/kartice/debitne-kartice/IL_Internet_kartice_01.08.2026.pdf)
- [Finansijski savjeti: blocked cards](https://finansijskisavjeti.com/blokirana-kartica-sta-uciniti-i-kako-izbjeci-slicne-situacije/)
- [CBBiH: card business in 2024](https://www.cbbh.ba/press/ShowNews/1649?lang=bs)
- [Raport: CBBiH card data](https://raport.ba/koliko-gradjani-bih-koriste-kartice-za-placanje-centralna-banka-bih-objavila-podatke)
- [Mastercard BiH: MasterIndex 2025 (403 when fetched)](https://www.mastercard.ba/bs-ba/vizija/novosti/masterindex-2025.html)
- [Raiffeisen BiH: non-resident accounts](https://app.raiffeisenbank.ba/node/5290)
- [Addiko FBiH: documents for non-resident accounts](https://www.addiko-fbih.ba/static/uploads/Potrebna-dokumentacija-za-otvaranje-racuna-za-nerezidenate.pdf)

**SEPA and Wise**
- [Sarajevo Times: BiH applies for SEPA](https://sarajevotimes.com/bosnia-and-herzegovina-officially-applies-for-sepa-membership/)
- [SeeNews: Bosnia eyes SEPA application](https://seenews.com/news/bosnia-eyes-sepa-membership-application-in-early-2026-report-1283383)
- [Wise: fees for receiving by SWIFT](https://wise.com/help/articles/3EsxRDF4uNpQncdgH480os/fees-for-receiving-money-by-swift)
- [Wise: EUR account details](https://wise.com/help/articles/2827505/how-do-i-receive-money-with-my-eur-account-details)

**Foreign-exchange law**
- [FBiH law on foreign exchange operations, 2010](https://www.fbihvlada.gov.ba/bosanski/zakoni/2010/zakoni/41bos.html)
- [Advokat Prnjavorac: FBiH foreign-exchange law](https://advokat-prnjavorac.com/zakoni/Zakon_o_deviznom_poslovanju_FBiH.pdf)

**Local gateways and fiscalisation**
- [Monri BiH: online payments](https://monri.ba/proizvodi/online-placanja/)
- [Monri: CEO interview](https://monri.com/ceo-damir-causevic-klix-2024/)
- [PowerCommerce: Monri profile](https://powercommerce.com/blogs/partners/monri)
- [WSPay BiH price list](https://www.wspay.ba/cd/321/monri-wspay-cjenik-usluga)
- [RS law on fiscalisation](https://www.paragraf.ba/propisi/republika-srpska/zakon-o-fiskalizaciji.html)

**BiH tax**
- [BiH VAT Law, unofficial consolidated text including Sl. glasnik BiH 20/2025](https://advokat-prnjavorac.com/zakoni/Zakon-o-porezu-na-dodatu-vrijednost-BiH.pdf)
- [N1: VAT threshold raised to 100,000 KM](https://n1info.ba/vijesti/dom-naroda-bih-usvojio-izmjene-zakona-o-pdv-u-pomjera-se-prag-obavezne-registracije-na-100-000-km/)
- [MojObrt: services from abroad when outside VAT, 29 May 2026](https://mojobrt.ba/blog/pdv-usluge-iz-inostranstva-obrt-nije-u-pdv-sistemu)
- [ACT: VAT rulebook changes from 6 Aug 2025](https://act.ba/2025/08/30/najnovija-azuriranja-u-pdv-zakonodavstvu-bih-primjena-od-6-augusta-2025/)
- [Unija: services received from foreign legal entities, 12 Mar 2026](https://unija.com/bs/primljene-usluge-od-pravnih-lica-iz-inostranstva/)
- [Unija: FBiH withholding tax guide](https://unija.com/bs/porez-po-odbitku-u-fbih-vodic-za-preduzetnike/)
- [PwC: BiH withholding taxes, reviewed 23 Sep 2026](https://taxsummaries.pwc.com/bosnia-and-herzegovina/corporate/withholding-taxes)
- [RS profit tax law (Paragraf)](https://www.paragraf.ba/propisi/republika-srpska/zakon-o-porezu-na-dobit.html)
- [IP Plus: software licences and withholding in Serbia](https://www.ipplus.rs/blog/licence-za-softver-i-porez-po-odbitku-u-republici-srbiji)

**Seller-country tax**
- [HMRC: Bosnia-Herzegovina tax treaties](https://www.gov.uk/government/publications/bosnia-herzegovina-tax-treaties)
- [HMRC: VAT Notice 741A, place of supply of services](https://www.gov.uk/guidance/vat-place-of-supply-of-services-notice-741a)
- [EU VAT Directive 2006/112/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0112)
- [Shibolet: Israeli zero-rate VAT for services to foreign residents](https://www.shibolet.com/en/zero-rate-value-added-tax-vat-for-services-provided-to-foreign-residents-in-connection-with-products-sold-by-foreign-residents-in-israel-tax-ruling-by-agreement/)
- [Kintsugi: Israel sales tax guide](https://trykintsugi.com/sales-tax-guides/middle-east/israel)

**Earlier parts of this research**
- [04 Go-to-market, company and finance](04-gtm-finance-company.md)
- [PLAN](PLAN.md)
