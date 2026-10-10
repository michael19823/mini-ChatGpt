# Argentina B1 (UIF kit for real estate brokers): go-to-market, payments, company setup and financials (deep dive 04)

Date: 10 Oct 2026. Builds on the [B1 report](../reports/argentina-b1.md), [01 Law and requirements](01-law-and-requirements.md) and [02 Market and competition](02-market-and-competition.md). "My estimate" marks numbers I derived. "(unverified)" marks facts I could not confirm.

Status: in progress.

## Summary
(pending)

## Pricing and packaging
(pending)

## Go-to-market
(pending)

## 90-day launch plan
(pending)

## 12-month marketing plan and budget
(pending)

## Payments and tax friction

### Short answer
- **Sell from the founder's foreign company. Charge cards in USD (or ARS) through Stripe or Paddle.** Argentine Visa and Mastercard credit cards pay foreign SaaS every day. The card issuer adds the local taxes on the buyer's statement. The foreign seller does not register for Argentine VAT.
- **The friction sits with the buyer, not with you.** On a USD 19 plan a sole broker paying in pesos sees about USD 19 + 21% VAT + 30% income-tax advance = about USD 28.70 on the statement (my calculation from the rules below). The 30% is recoverable later, but it is a cash cost. A broker who pays the card bill in his own dollars avoids the 30%.
- **Price in USD on the site, show the "con impuestos" amount next to it, and offer annual plans.** Argentines are used to USD software prices (Tokko quotes USD; [DevelopArgentina](https://developargentina.com/blog/software-inmobiliaria-argentina-2026)).

### Can Argentine cards pay a foreign online seller?
- **Yes.** The tax rules assume it. ARCA's regime makes local "entidades que administran pagos al exterior" (card issuers, payment aggregators) collect VAT on digital services bought from abroad ([Blog del Contador, RG 4240 section](https://siap.blogdelcontador.com.ar/rubro_normativa/regimen-de-percepcion-iva-rg-4240/); [RG 4240 in the Boletín Oficial](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514)).
- ARCA's own list of operations hit by the 30% advance includes "pago de servicios prestados por no residentes (streaming, software, suscripciones) cancelados con tarjeta" ([Fortuna, 29 Jul 2026, updated 22 Sep 2026](https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior)). So paying software from abroad by card is normal and lawful.
- **Debit cards and transfers.** Debit cards linked to a peso account work the same way. Bank transfers abroad are harder (see below).
- **Decline risk.** Some Argentine issuers block or flag first-time foreign online charges. A share of failed payments is likely (unverified; no data found). Mitigation: offer a second route (Mercado Pago or dLocal, see below) once volume justifies it.

### Taxes the buyer pays on a card payment (October 2026)

| Item | Rate | Who collects | Recoverable? | Source |
|---|---|---|---|---|
| VAT (IVA) on digital services from abroad | 21% | The card issuer or aggregator, as perception agent | A VAT-registered broker (responsable inscripto) can credit it. A monotributista or consumer cannot; it is a cost | [Blog del Contador](https://siap.blogdelcontador.com.ar/rubro_normativa/regimen-de-percepcion-iva-rg-4240/); [Boletín Oficial RG 4240](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514) |
| Income-tax / wealth-tax advance (RG 5617) | 30% of the peso amount | The card issuer | Credited against income or wealth tax, or refunded from 1 January of the next year. Not charged on the part paid with the buyer's own dollars | [Fortuna 2026](https://fortunaweb.com.ar/blog/dolar-tarjeta-2026-como-se-calcula-el-costo-real-de-pagar-en-el-exterior); [ARCA RG 5617 text](https://www.consejosalta.org.ar/wp-content/uploads/ARCA-5617.pdf) |
| Provincial gross-income tax (IIBB) perception on digital services | (pending check) | | | |
| Impuesto PAIS | 0% (ended December 2024) | | | [Infoviajera, Dec 2024](https://www.infoviajera.com/2024/12/nuevo-dolar-tarjeta-el-gobierno-creo-la-percepcion-que-reemplaza-a-la-que-cae-en-diciembre/) |

Notes:
- **Who is perceived VAT.** RG 4240 makes the intermediary perceive VAT when the buyer is not a VAT-registered taxpayer. A VAT-registered buyer who pays directly self-assesses the VAT by the end of the month of payment ([Blog del Contador](https://siap.blogdelcontador.com.ar/rubro_normativa/regimen-de-percepcion-iva-rg-4240/)). Either way the seller does nothing.
- **Many brokers are monotributistas** (simplified regime) and cannot recover VAT (unverified share; the CUCICBA register shows mostly one-person offices, see [02](02-market-and-competition.md)). For them the price is effectively 21% higher. Price with that in mind.

### Does the foreign seller have to register for Argentine VAT?
- **No.** Argentina taxes digital services from abroad through the buyer side: the card issuer perceives, or the VAT-registered buyer self-assesses (Law 27.430, Title II; [RG 4240](https://www.boletinoficial.gob.ar/detalleAviso/primera/183569/20180514); [Blog del Contador](https://siap.blogdelcontador.com.ar/categoria_normativa/servicios-digitales-prestados-por-sujetos-del-exterior/)). There is no foreign-seller registration like the EU OSS. I found no 2026 rule changing this (unverified).
- **Do not add VAT on your own invoice.** Invoice the net price. If Paddle adds a tax line for Argentina, check it does not double up with the card issuer's 21% perception (Paddle lists Argentina with ARS and "inclusive" tax display; [Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)) (unverified risk).

### Withholding tax on payments to non-residents
- **The rule.** An Argentine payer who pays a foreign beneficiary must withhold income tax at 35% on a presumed net income. For most services and digital services the presumption is 90%, so the effective rate is **31.5%**. If the SaaS counts as technical assistance registered with INPI, the presumption is 60%, so 21% ([Garrigues on SaaS](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado); [FACPCE CEAT note on beneficiarios del exterior](https://www.facpce.org.ar/wp-content/uploads/2020/08/REUNION-CEAT-4.8.2020-BENEFICIARIOS-DEL-EXTERIOR.pdf)).
- **In practice it does not bite on card payments.** Card issuers perceive VAT and the 30% advance, not this withholding. I found no source on withholding being applied to small card payments for foreign SaaS (unverified). A sole broker or monotributista paying by card will not withhold.
- **It can bite on large invoices paid by transfer.** A colegio or a franchise head office paying an annual white-label invoice by bank transfer may want to withhold 31.5%, or ask for a gross-up. Plan for it in those contracts:
  - check whether the founder's country has a tax treaty with Argentina (a treaty can cut or remove the withholding on business profits; [Garrigues](https://www.garrigues.com/es_ES/noticia/software-service-saas-desafio-alta-complejidad-tributaria-mundo-digital-e-interconectado));
  - or let the institution pay through the card/MoR route;
  - or, once these deals are material, invoice them from a local company (see "Company setup").

### Stripe
- **Argentina is not a Stripe merchant country**, but a Stripe account in the founder's country can charge Argentine cards. ARS is a Stripe presentment currency (minimum charge ARS 0.50) ([Stripe currencies](https://docs.stripe.com/currencies)).
- **Fees (US account example):** 2.9% + USD 0.30 per card charge, plus 1.5% for international cards, plus 1% if currency conversion is needed (pending confirmation from Stripe's pricing page). On a USD 19 charge that is about USD 1.17, or 6.2%. On a USD 190 annual charge it is about USD 8.63, or 4.5% (my calculation).
- **Charge in USD, not ARS.** ARS prices would need constant changes, and Stripe's conversion fee adds 1%. Argentines are used to USD software prices.
- Stripe Billing handles subscriptions, invoices and card updates.

### Merchant of record (MoR)
- **Paddle supports Argentina** (ARS transaction currency listed) ([Paddle supported countries](https://developer.paddle.com/concepts/sell/supported-countries-locales)). Its fee is 5% + USD 0.50 per transaction ([Dodo Payments comparison, 2026](https://dodopayments.com/blogs/paddle-vs-lemon-squeezy/)). On a USD 19 charge that is about 7.6%.
- **Lemon Squeezy** is owned by Stripe and charges 5% + USD 0.50, with a reported 1.5% surcharge on international transactions ([Dodo Payments](https://dodopayments.com/blogs/lemonsqueezy-review); [TechCrunch on the acquisition](https://techcrunch.com/?p=2815886)). Stripe's own MoR product, Managed Payments, is reported at 3.5% on top of normal Stripe fees ([Dodo Payments](https://dodopayments.com/blogs/stripe-managed-payments-fees-explained)) (third-party sources; unverified).
- **What an MoR buys you here.** Argentina needs no seller VAT registration, so the MoR's main value is VAT in the founder's own country and in later markets (Uruguay, Chile), plus chargeback handling. If the founder's company is in the EU, Paddle saves EU VAT work on other markets. For Argentina alone, plain Stripe is cheaper.

### Bank transfers
- **Small brokers rarely pay foreign SaaS by international transfer.** It is slow and costly for a USD 200 payment.
- **Individuals.** Since April 2025 individuals can buy dollars. From 10 April 2026 they can move dollars from local accounts to their own accounts abroad, with a bank registration and a 90-day sworn statement ([Allende & Brea on Com. A 8417](https://allende.com/bancario/el-banco-central-flexibiliza-el-regimen-cambiario-para-exportaciones-transferencias-en-moneda-extranjera-y-pagos-financieros-04-14-2026/)). Paying a third party abroad from a personal account is less clear (unverified).
- **Companies.** Access to the official FX market for paying foreign services has carried waiting periods for some service types in the past (Com. A 7746/2023, for legal, accounting and similar services) ([Boletín Oficial, Apr 2023](https://www.boletinoficial.gob.ar/detalleAviso/primera/285227/20230426)). I could not confirm the 2026 rule for software (unverified). For a colegio, a USD wire may need its bank's paperwork and a few weeks.
- **Practical route for institutions:** card payment of an annual invoice through Stripe Invoicing, or a local reseller who invoices in pesos.

### Local collection options (for later)
- (pending check: Mercado Pago, dLocal, EBANX)

## Company setup (needed or not, costs)

### Recommendation
- **No Argentine company at launch.** Sell to brokers from the founder's existing foreign company, by card. Argentina does not require a foreign digital-service seller to register for VAT (see above). A foreign company with no office, staff or agent in Argentina is not taxed there on these sales beyond any withholding (unverified for the founder's specific country and treaty).
- **Open a local company only if one of these happens:**
  1. colegio, franchise or accountant deals over about USD 20,000 a year where the buyer insists on a local "factura A/B" in pesos, or would withhold 31.5%;
  2. you hire Argentine staff for sales or support (rather than contractors);
  3. you want to collect through Mercado Pago or local bank transfer in pesos at scale.
- **The cheaper middle path is a local reseller or partner.** A local accounting firm or consultant can buy licences wholesale and invoice brokers in pesos. This avoids a company until the numbers justify one.

### If a company is needed: the options

| Item | SAS (simplified company) | SRL (limited company) | Source |
|---|---|---|---|
| Minimum capital | 2 SMVM = ARS 767,600 (about USD 506) at the September 2026 SMVM of ARS 383,800. 25% paid in at formation, the rest within 2 years | No legal minimum; must be "adequate" | [Ley 27.349 art. 40-41 on Infoleg](https://servicios.infoleg.gob.ar/infolegInternet/anexos/270000-274999/273567/texact.htm) (not re-read in this pass); SMVM from [Canal 26](https://www.canal26.com/economia/2026/09/02/asi-quedo-el-aumento-del-salario-minimo-vital-y-movil-cuanto-se-cobrara-entre-septiembre-de-2026-y-abril-de-2027/); USD at ARS 1,517 ([BCRA](https://api.bcra.gob.ar/estadisticascambiarias/v1.0/Cotizaciones/USD?fechadesde=2026-10-01&fechahasta=2026-10-10)) |
| Official fees (Buenos Aires city, digital) | IGJ fee about ARS 8,438; no notary or edict needed in the city | Edict ARS 20,000-50,000 plus IGJ fees | [Cuánto me cuesta, Apr 2026](https://cuantomecuesta.com/ar/crear-empresa-sas/) (aggregator; unverified) |
| Buenos Aires province | Signature certification ARS 80,850 in person, plus a digital-signature token ARS 15,000-40,000 | Notary or law-firm fees ARS 100,000-200,000 | same |
| With a lawyer, remotely | About USD 300-800 all-in for a SAS | About USD 800-2,000 including notary | [Argentina Visa Law guide](https://argentinavisalaw.com/guides/company-formation-argentina) (search snippet; unverified) |
| Time | 1-2 weeks in practice for a SAS (the city's digital route can be faster) | 4-8 weeks | [VLO Law Firm, Jun 2026](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown) |

### Extra steps when the owner is foreign
- **A foreign company as shareholder must register with the IGJ under art. 123 of the Companies Law.** Since 27 May 2026, IGJ General Resolution 4/2026 simplified this. The filing needs ([abogados.com.ar](https://abogados.com.ar/novedades-igj-resolucion-042026-simplificacion-sociedades-extranjeras/39242); [Colegio de Escribanos report](https://www.colegio-escribanos.org.ar/noticias/2026_06_10_Informe-Res-Gral-IGJ-4-26.pdf)):
  - a certificate of good standing no older than 6 months;
  - the articles and their amendments;
  - a board resolution to register and to appoint a local representative;
  - the representative's acceptance, with a special and an electronic domicile;
  - PEP and beneficial-owner sworn statements.
- Apostilled digital documents printed on paper are now accepted ([Blog del Contador](https://siap.blogdelcontador.com.ar/?p=84907)). The local company and the art. 123 filing can go in together; the local company then waits for the foreign one ([Colegio de Escribanos](https://www.colegio-escribanos.org.ar/noticias/2026_06_10_Informe-Res-Gral-IGJ-4-26.pdf)).
- **If the founder holds shares personally instead,** he needs an Argentine tax ID (CUIT or CDI). A foreign individual must appear in person at ARCA or act through a local representative ([VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown)).
- **Bank account.** Expect several weeks to over a month, with enhanced checks for foreign-owned companies ([VLO Law Firm](https://vlolawfirm.com/guides/cost-of-company-formation-in-argentina-complete-breakdown)).
- **Estimated all-in cost with a foreign parent:** about USD 2,000-4,000 for formation, art. 123 registration, apostilles, translations and the first months of a local representative (my estimate, unverified).

### Ongoing costs of a local company
- (pending: accountant fees, taxes)

## Contracts and liability
(pending)

## Financial model
(pending)

## Regional expansion
(pending)

## Exit and partnerships
(pending)

## Risks and mitigations
(pending)

## Milestones and kill criteria
(pending)

## Open questions
(pending)

## Sources
(pending)
