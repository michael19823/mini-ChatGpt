# C0429 — Indonesia: notary/PPAT monthly multi-agency reports (KPP tax, BPN, Bapenda e-BPHTB)

## Verdict and score
**Revived (with one caveat): 6.2/10.** The original kill rested on a "crowded local market" of
priced products: Notaris App Rp199k–499k/mo, Notaree Rp299k–999k/mo, Sinotis Fusion Rp2.5m,
ScribaeBook Rp1.5–2.3m, Notarius, Starfield and xsatriya. Sonnet's eight competitor checks and my
own eight searches, including an exact-name search with the quoted prices, found **none of them
except Sinotis**. Sinotis is a one-off **Rp650k desktop tool sold on Tokopedia** that prints a PPAT
monthly report. Everything else that surfaced is student theses and custom-built office systems.

The obligation, meanwhile, is real, monthly, penalised and fragmented across agencies:
- **KPP tax:** reports due by the 10th under PMK 261/2016. DJP was still visiting notaries in July
  2026 to remind them, and KPPs accept the spreadsheet by email.
- **Bapenda e-BPHTB:** each regency runs its own system, with a monthly report due by the 10th.
  PP 35/2023 Art. 60 sets an administrative fine of **Rp10 million** for a PPAT who does not report.
- **BPN/ATR:** reporting through its electronic services.

The market is **22,956 validated PPATs** (ATR/BPN), with 7,886 candidates sitting the 2026 PPAT
exam.

**Caveat.** The original report marked its competitor list "[V]", and two independent passes could
not reproduce it. Before building, do a 30-minute manual check on Google Play, Instagram and
IPPAT/INI WhatsApp groups for "aplikasi notaris PPAT". If priced SaaS such as "Notaris App" really
exists, the verdict drops to **narrow**: a per-regency e-BPHTB submission add-on.

## What changed versus the Sonnet evidence
- I confirm Sonnet's not-a-real-competitor verdicts. The original kill list appears to be
  unverifiable rather than proven.
- New facts that strengthen the case:
  - the Rp10M Bapenda fine per PP 35/2023;
  - DJP enforcement visits in 2026, which show continuing non-compliance;
  - the ATR/BPN count of PPATs, which sizes the market;
  - the Malang city report on e-BPHTB use, which confirms that regency portals are in active use.

## Competitors (corrected)
| Competitor | Type | Status |
|---|---|---|
| Sinotis PPAT Software (Notaris PPAT Edition v2) | Desktop, one-off Rp650k, Tokopedia | Real; order tracking and letter templates plus a monthly PPAT report printout; no filing |
| Regency e-BPHTB portals (~500), DJP KPP email/e-PHTB, BPN Mitra Kerja | Free government systems | Where the data is submitted; each is separate |
| Custom office systems (e.g. NotaryReq and academic builds) | One-off | Not products |
| Office staff + Excel | Manual | The default |
| Notaris App, Notaree, ScribaeBook, Sinotis Fusion, Notarius, Starfield, xsatriya | Named in the report | Not found by Sonnet or me (unverified) |

## Barriers
- No API to the ~500 regency e-BPHTB portals. Submission needs per-regency form automation
  (RPA/browser) or a "prepare-then-upload" approach.
- Login credentials stay with the PPAT, which raises a trust question.
- Low deal volume per PPAT in small regencies: some report "nihil" (nil) most months.
- Conservative professional buyers who are used to desktop tools.

## Buyer and price
The buyer is a PPAT/notary office (often one notary plus 2–6 staff), the staff member who prepares
the monthly reports. The price anchor is Sinotis at Rp650k one-off. The original report's
Rp199k–999k/month SaaS prices are unverified. With a Rp10M fine per missed Bapenda report, a
Rp150–300k/month (~US$9–18) subscription is plausible. At 1,000 offices that would be ~US$110–220k
ARR.

## Scorecard
| # | Criterion | Score | Reason |
|---|---|---|---|
| 1 | Pain | 6 | Three agencies, different formats, Rp10M fine, DJP chasing |
| 2 | Frequency | 8 | Monthly, and per deed for the underlying data |
| 3 | Mandatory | 9 | PMK 261/2016, PP 35/2023, BPN rules |
| 4 | Fragmentation | 9 | ~500 regency e-BPHTB systems plus KPP plus BPN |
| 5 | Competition | 7 | Only a cheap desktop tool found (caveat: report's list unverified) |
| 6 | Incumbent gap | 6 | Deed register → three report formats → submission is manual |
| 7 | Buyer accessibility | 7 | ATR/BPN PPAT list, IPPAT/INI regional chapters |
| 8 | Willingness to pay | 4 | Small offices, desktop-tool price anchor |
| 9 | MVP simplicity | 6 | Register plus format generators is easy; per-regency upload is grinding |
| 10 | Distribution | 6 | IPPAT chapters, PPAT exam/training (bimtek) events, notary WhatsApp groups |
| | **Overall** | **6.2** | Real, fragmented, penalised monthly duty with only a cheap desktop tool visible |

## Sources
- https://www.tokopedia.com/alumnisoftware22/sinotis-ppat-software-notaris-ppat-edition-v2
- https://ikpi.or.id/djp-temukan-masih-ada-notaris-dan-ppat-belum-rutin-lapor-bulanan-ke-kpp/
- https://news.ddtc.co.id/berita/daerah/1800830/kunjungi-notaris-petugas-pajak-ingatkan-kewajiban-pelaporan-bulanan
- https://www.pajak.go.id/id/berita/pajak-bengkulu-dua-door-door-sosialisasikan-pelaporan-ppat
- https://bapenda.batukota.go.id/files/panduan/Petunjuk Pengisian dan Laporan E-BPHTB.pdf
- https://data.malangkota.go.id/dataset/ea840761-a40d-42e1-82d3-01b203d2f80c/resource/d18af62c-20c1-43da-8984-5cf01a0d40e0/download/laporan-perkembangan-pemanfaatan-e-bphtb-tribulan-i-2024.pdf
- https://sipora.polije.ac.id/28118/ (Rp10M fine under PP 35/2023 Art. 60, via search snippet)
- https://rri.co.id/info-kementerian/2631492/wamen-ossy-memastikan-layanan-pertanahan-dari-ppat-yang-kompeten-dan-profesional (22,956 PPATs; 2026 exam)
- https://repository.pelitabangsa.ac.id/99/17/311910172_publikasi.pdf (custom builds)
- research/revisit/competitors/indonesia--*.md (8 files)
- Searches used: 8 of 8.
