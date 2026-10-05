# Sierra Leone: Offline (Quiet) Industries Pass (as of 2026-10-05)

> **Research constraints (read first).** I launched three WebSearch calls in parallel. One
> (scrap-metal dealer licensing) was **refused with "You've hit your usage limit"**. The method
> says to stop searching when that happens, so this pass rests on **2 successful searches**. The
> livestock search returned nothing specific to Sierra Leone. WebFetch and GitHub tools were not used.
>
> **Verified** means the fact appeared in search-result content returned in this session. Rows marked
> *desk* come from background knowledge only and are **unverified**. No counts, names or URLs have
> been invented. Where a count is unknown, the report says so.
>
> This is a deliberately short report. Sierra Leone is a small, low-income and largely informal
> market. The first-round country report (`research/countries/sierra-leone.md`) found nothing above
> 3/10, and this pass does not change that picture.

**Bottom line.** None of the quiet industries screened makes a viable indie software business in
Sierra Leone. The one regulated, recurring and paper- or counter-bound obligation with verified
evidence is the vehicle **Annual Circulation Permit** for commercial okada (motorbike taxi) and keke
(tricycle) operators. But the regulator already has an online payment channel, and the operators are
very low-income individuals. I write it up as the least-bad lead and score it low.

---

## 1. Quiet industries screened

| # | Industry | Obligation | Evidence it's offline | Rough count (source) | Verdict | One-line reason |
|---|---|---|---|---|---|---|
| 1 | Okada / keke operators and fleet owners | Annual Circulation Permit (Finance Act 2023 s.11), registration, rider licence, route restrictions in Freetown | **Verified:** permit paid via SLRSA portal (slrsa.smartkorpor.com) or QR code; police enforcement campaigns and arrests | Unknown; no register count found | **Weak lead (Opp. 1)** | Mandatory and enforced, but annual, already digitised for payment, and the buyers are near-subsistence riders. |
| 2 | Scrap metal dealers / exporters | Trade licence and export permits (*desk*, unverified) | Search refused | Unknown | Not assessed | Budget exhausted. Scrap-export bans and permits have been reported in the past (*desk, unverified*). |
| 3 | Livestock traders / cattle markets | Veterinary movement permits (*desk*) | Search returned only other countries | Unknown | Reject (no evidence) | No Sierra Leone-specific regulation surfaced. The cattle trade is largely cross-border and informal (*desk*). |
| 4 | Households as employers (domestic workers) | NASSIT social security registration (*desk*) | Not searched | Unknown | Reject | Almost entirely informal. No sign that the obligation is enforced (*desk*). |
| 5 | Artisanal gold / diamond buyers | Dealer licences, purchase records (NMA) | Covered in the first-round report | A few hundred licensees (first-round report) | Already covered | Don't re-report. The state MCAS system runs it. |
| 6 | Market traders / street vendors | Council market dues, FCC by-laws | **Verified (indirect):** police support for enforcing FCC by-laws (waste management) | Unknown | Reject | Cash dues collected by council collectors. Traders won't pay for software. |
| 7 | Small abattoirs / butchers | Council and health inspection (*desk*) | Not searched | Unknown | Reject | No evidence; tiny formal sector. |
| 8 | Pharmacies / chemical sellers | Pharmacy Board licensing (*desk*) | Not searched | Unknown | Reject | Covered by the first-round desk screen; low frequency. |
| 9 | Money changers (forex bureaus) | Bank of Sierra Leone licensing and returns (*desk*) | Not searched | Unknown | Not assessed | Plausible recurring returns to the central bank, but unverified. Small number of bureaus (*desk*). |
| 10 | Fishermen / fish traders | Ministry of Fisheries licences for canoes (*desk*) | Not searched | Unknown | Not assessed | The artisanal canoe licence regime may exist but is unverified. Buyers can't pay. |

Country-specific groups that the method asks to find from licensing registers (okada/keke, scrap
export, forex bureaus) are listed. Only okada/keke has verified evidence.

---

## 2. Strongest opportunities

### Opportunity: Permit-and-compliance tracker for okada/keke fleet owners

**Industry:**
Informal transport: commercial motorbikes (okada) and tricycles (keke).

**Buyer:**
An owner of several bikes or kekes who rents them to riders on a daily or weekly "work and pay"
basis, or a rider union or association branch. Individual riders are not realistic buyers.

**Trigger / Why now:**
- The Annual Circulation Permit under **section 11 of the Finance Act 2023** applies to private and
  commercial vehicles, okadas and kekes. It is paid via the SLRSA site (slrsa.smartkorpor.com) or a QR code.
- Freetown enforces **36 prohibited routes** (Mends Street was recently added). Violators face
  licence suspension. Police periodically arrest okadas en masse (e.g. "Police arrests 70 Okadas").
- There is no 2025–2026 trigger beyond ongoing enforcement. **That is a weakness.**

**Current workflow:** *(presumed; validate in interviews)*
1. The owner keeps registration, permit, insurance and rider-licence papers for each bike, often in a folder or with the rider.
2. Every year the owner pays the circulation permit online/QR or through an agent.
3. When a rider is stopped, the bike can be impounded if papers are missing or expired, and the owner has to go to the station or yard to recover it.

**Pain:**
Impoundment and fines when papers lapse or a rider uses a banned route (enforcement verified; costs
unverified). The owner loses the daily rental income while the bike is held.

**Existing solutions:**
- The SLRSA online/QR payment channel (smartkorpor), which is the government tool.
- Paper folders and agents/"fixers" at SLRSA offices (*desk, unverified*).
- Rider unions (*desk*: bike-rider associations exist, names unverified).
- Generic WhatsApp reminders.

**Offline evidence:**
Enforcement happens through roadside police stops and arrests rather than any data system. No
operator software appeared in the search. Riders and owners are not online buyers.

**Offline channel:**
Bike-rider union branches and park leaders; motorbike importers and dealers at the point of sale;
SLRSA licensing offices. Each needs **an on-the-ground local**.

**Market count:**
Unknown. No register count was found. The SLRSA vehicle register would be the source. Fleet owners
are a small subset of riders.

**The gap:**
Expiry tracking across a small fleet, plus proof of documents for each rider. That is thin, and it
amounts to a generic reminder app, which the brief warns against.

**Possible product:**
A WhatsApp/SMS reminder and document wallet per bike for owners of 3–20 bikes, with an optional
done-for-you renewal service through an agent.

**MVP:**
A sheet of bikes with plate, permit and licence expiry dates; SMS reminders 30/7/1 days before
expiry; photos of documents that can be shown at a police stop.

**Pricing hypothesis:**
Under $2 per bike per month, or a per-renewal agent fee *(estimate)*. A done-for-you service is the
only plausible model. Owners would not pay for software alone.

**How to find first customers:**
Park and union leaders in Freetown; motorbike dealers. A non-local solo founder **could not**
sell this realistically. It needs a local partner.

**Risks:**
Very low willingness to pay; SLRSA could add SMS reminders itself; periodic okada bans in the
CBD shrink the market; it is a generic reminder bot.

**Kill condition:**
Owners say the agent or fixer already handles renewals for a small fee, or that impoundments are
settled informally rather than by producing documents.

**Score:** 2/10

**Sources:**
- https://nra.gov.sl/news/8 (Annual Circulation Permit, Finance Act 2023 s.11, SLRSA payment)
- https://moice.gov.sl/?p=1102 (prohibited routes, licence suspension)
- https://moice.gov.sl/?p=1113 (CBD decongestion, Internal Affairs, FCC, BRU)
- https://awokonewspapersl.com/police-arrests-70-okadas/
- https://moice.gov.sl/?p=2589 (police support for enforcing FCC by-laws)

No second opportunity reached the bar for a template write-up.

---

## 3. Rejected

- **Market-trader / street-vendor dues tracking:** dues are collected in cash by council collectors, and traders won't pay for software.
- **Livestock movement permits:** no Sierra Leone-specific regulation found; the trade is informal and cross-border.
- **Domestic-worker payroll / NASSIT:** effectively unenforced in households (*desk*).
- **Gold/diamond dealer ledgers:** already covered in the first-round report; MCAS is the state substitute.
- **Scrap metal, forex bureaus, canoe licences:** not assessed because the search budget ran out. These are the leads to check first if the pass is rerun.

## 4. Method notes

- Pages from the ministry and the revenue authority (moice.gov.sl, nra.gov.sl) and local newspapers (awokonewspapersl.com) surface for transport enforcement. Government press releases appear to be the best regulator-first source in this country.
- Generic regulator queries (livestock) return other countries' rules. Add "Freetown" or a Sierra Leone agency name (SLRSA, NMA, FCC, NASSIT) to every query.
- A usage-limit refusal ended the pass after 2 successful searches.
