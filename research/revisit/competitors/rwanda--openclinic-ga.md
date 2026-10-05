# OpenClinic GA (Rwanda)

Dropped ideas: C0824 (Rwanda clinic HMS/EMR), C0829 (Rwanda hospital/clinic HMS).

## Verdict: strong

A free, entrenched open-source HMS with real Rwandan deployments. It is stagnant and has weak support, but a free incumbent is hard to beat on price.

## Evidence
- Free open-source HIS from Medical eXchange Solutions (Belgium, since 2006), LGPL v2.0; a commercial edition by Post-Factum BV is also mentioned. Sources: https://limswiki.org/index.php/OpenClinic_GA , https://www.g2.com/products/openclinic-ga/pricing
- Deployed in Rwanda: 15-17 public and private clinics and hospitals (2007-2014), from 5 to 700 users. Used at CHUK (Kigali university hospital), covering records, pharmacy, lab, radiology and e-archive. Sources: https://ebooks.iospress.nl/pdf/doi/10.3233/978-1-61499-564-7-193 , https://www.chuk.rw/about-chuk/corporate-services-division/ict-unit , https://dr.ur.ac.rw/handle/123456789/243
- Includes billing with Central African insurers, and supports French and English. Source: https://knowledge.iadb.org/en/code-development/open-source-solutions/openclinic-ga
- Verified Digital Public Good. Source: https://www.digitalpublicgoods.net/r/openclinic-ga
- Complaints found:
  - A G2 reviewer reported slow or no response from support (summarised in search results, unverified beyond that). Source: https://www.g2.com/products/openclinic-ga/reviews
  - Documentation is dated (SourceForge user doc from 2010) and the Linux version appears discontinued. Source: https://www.medfloss.org/comment/666
  - About a dozen security vulnerabilities were disclosed. Source: https://cert.bournemouth.ac.uk/?p=9195
- No Rwandan-language or Rwanda-specific user complaints turned up in the English and French searches. I did not search Kinyarwanda.
- Momentum: stagnant. The latest stable release found is 5.247.01 (May 2023), with no 2025 releases found.

## Pricing
Free (open source). The commercial edition's price is not published (unverified). The real cost is for implementation, hosting and support, which I could not verify.

## Fit gaps
- Desktop and server (Windows) oriented. Linux support was dropped. No evidence of a mobile or offline-first design (unverified).
- Weak support and dated documentation.
- Security issues and a slowing release cadence.
- Built for hospitals, up to 700 users. Small clinics may find setup and maintenance heavy.
- No evidence of integration with Rwanda's national systems or mobile money (unverified).

## Opening
A thin opening exists for a simple, supported, cloud or mobile HMS for small private clinics, with mobile-money billing and Rwandan insurer (e.g. RSSB/Mutuelle) claims. It would have to beat a free incumbent on ease of use and support rather than on price.
