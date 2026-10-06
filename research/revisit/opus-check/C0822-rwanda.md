# C0822 / C0828 — Rwanda: EBM/VSDC invoice integration for POS, ERP and hotel PMS

## Verdict and score
**Still closed: 3.7/10.** The integration wave has already happened. On 24 Nov 2023 the RRA
announced that from **May 2024 POS systems not integrated with EBM would be prohibited**, aimed
specifically at hospitality (hotels, bars, restaurants) and supermarkets. The same announcement
pointed taxpayers to a **list of technology companies RRA had vetted** for integration, and offered
the free EBM mobile app and web portal as fallbacks. That is the trigger this idea was hoping
for, and it is now 2½ years old.

Integrators are visible and active. AminiTech (Kigali/Nairobi) sells Odoo RRA Base (free), POS, Pro
(VSDC control tower with retry and flush) and Suite (~US$1,615). Pokutsoft has an EBM POS module
(US$69–89). Custom Odoo EBM builds are live at venues such as Heroes Lounge. DJUBO sells hotel
PMS in Rwanda. RRA's free EBM 2.1 software, mobile EBM and online e-invoicing cover small
taxpayers. Any private system must pass **RRA certification** (by email to the CIS/SDE
certification team). That is no barrier to a local integrator, but it is one for a remote solo
founder.

## What changed versus the Sonnet evidence
- Sonnet rated "RRA-licensed providers" as weak or beatable because only Odoo add-ons surfaced.
  But the May 2024 integration mandate and the RRA's vetted-company list show the market was
  deliberately seeded with integrators. Odoo-centricity reflects what search indexes, not the
  whole vendor base.
- The original report's named vendors (Pivot Access, Algorithm Inc, Injonge) did not surface in my
  search either; they are unverified. TMR and paybill.dev were not rechecked. The conclusion
  doesn't depend on them.
- The 2025–26 VAT changes (ICT, transport) and the tourism levy are only tax-rate and code changes
  for integrators that already exist. July 2026 reforms aim to *ease* small-business compliance.
- A remaining sliver is international hotel PMS (Opera, Protel) with no local EBM connector, but
  the evidence is thin, the buyers are few, and chains use their own integrators (unverified).

## Competitors (corrected)
| Competitor | Type | Notes |
|---|---|---|
| RRA EBM 2.1 software, EBM mobile, web portal | Free government | Default for small taxpayers |
| RRA-vetted integration companies (Nov 2023 list) | Local integrators | Names not retrieved (unverified) |
| AminiTech Solutions | Odoo RRA Base/POS/Pro/Suite | Active; Suite ~US$1,615 |
| Pokutsoft `l10n_rw_ebm_pos` | Odoo POS add-on | US$69–89 |
| AD Finance (Odoo-IntuitFlow RRA-EBM) | Odoo partner | Active |
| DJUBO | Hotel PMS in Rwanda | EBM integration unverified |
| Pivot Access, Algorithm Inc, Injonge, TMR, paybill.dev | Named in report | Not re-verified |

## Barriers
- RRA certification for each integrated system.
- Free government apps and portals.
- The mandate is past (May 2024), so the installed base is already integrated.
- Local presence needed for support at hotels and bars.

## Buyer and price
The buyer is an IT or finance manager at a Kigali hotel, supermarket or restaurant group. Price
anchors are US$69–1,615 one-off Odoo modules plus integrator services. There is no recurring-SaaS
anchor.

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 5 | Mandatory and enforced, but already solved for most |
| 2 | Frequency | 9 | Per sale |
| 3 | Mandatory | 9 | EBM receipt per sale; non-integrated POS banned since May 2024 |
| 4 | Fragmentation | 3 | One RRA spec; variety only in POS/PMS brands |
| 5 | Competition | 3 | Vetted integrators, Odoo modules, free RRA apps |
| 6 | Incumbent gap | 2 | Maybe international PMS connectors (unverified) |
| 7 | Buyer accessibility | 6 | RDB/Chamber of Tourism lists, small market |
| 8 | Willingness to pay | 4 | One-off, low |
| 9 | MVP simplicity | 4 | Certification plus on-site support |
| 10 | Distribution | 3 | Local integrators own the relationships |
| | **Overall** | **3.7** | Mandate wave already passed; certified local integrators plus free RRA tools |

## Sources
- https://pwc.com/rw/en/assets/pdf/tax-alert-rra-unveils-new-directives-and-decisions-on-tax-procedures-and-administration.pdf (Nov 2023 directive; May 2024 prohibition; vetted companies)
- https://www.rra.gov.rw/fileadmin/user_upload/EBM_2.1_Booklet_EN.pdf
- https://www.rra.gov.rw/fileadmin/user_upload/EBM_2.1_MOBILE_Booklet_english_2024.pdf
- https://apps.odoo.com/apps/modules/19.0/aminitech_rra_pro/
- https://apps.odoo.com/apps/modules/18.0/aminitech_rra_suite/
- https://apps.odoo.com/apps/modules/19.0/l10n_rw_ebm_pos
- https://www.odoo.com/customers/heroes-lounge-ltd-14792820
- https://djubo.com/rwanda
- https://allafrica.com/stories/202607140023.html (July 2026 small-business tax reforms)
- https://www.ktpress.rw/2026/02/rra-disburses-record-frw1-3-billion-in-vat-rewards-to-strengthen-tax-compliance/
- research/revisit/competitors/rwanda--{rra-licensed-ebm-vsdc-providers,rra-licensed-ebm-providers}.md
- Searches used: 5 of 8.
