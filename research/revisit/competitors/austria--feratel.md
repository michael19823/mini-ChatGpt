# feratel (Austria) - competitor for C0057 (short-term rental registration / Ortstaxe)

## Verdict: strong

feratel is the incumbent infrastructure. Austrian destinations and municipalities run its guest registration (electronic Meldeschein) and tax linkage, so hosts usually have to use it. It is not something a new entrant displaces.

## Evidence
- feratel provides the electronic Meldeschein system that accommodations use in many Austrian and German regions. Guest data goes through the feratel interface to the municipality, within 24h of check-in (per search summary of https://chekin.com/de/blog/feratel-meldeclient/ ). Unverified in detail.
- Third parties integrate with it rather than replace it: Chekin (https://chekin.com/de/blog/feratel-meldeclient/) and Clock PMS (https://www.clock-software.com/integrations/feratel-deskline) push data into Deskline 3.0. Smoobu also has a help article on it (https://support.smoobu.com/hc/en-us/articles/38326727079954).
- Regional tourism bodies publish landlord guidance around feratel (e.g. https://www.steiermark.com/de/Oststeiermark/Feratel-Betriebe, https://www.alpbachtal.at/...FAQ_14.10.2025.pdf), which signals institutional entrenchment.
- Complaints: none found. Hoteltechreport shows no reviews for Deskline 3.0 (search summary). The German-language complaint search hit the usage limit, so only 2 of 6 searches ran. Absence of complaints is not proof of satisfaction.
- Momentum: actively integrated by PMS and check-in vendors and still referenced in an Oct 2025 FAQ. No sign of shutdown or stagnation.

## Pricing
- Hoteltechreport lists a flat ~$100/month for Deskline 3.0 as a channel manager (https://hoteltechreport.com/de/compare/feratel-deskline-30-vs-siteminder-channel-manager). Unverified and not specific to the Meldeschein or Ortstaxe function. Landlord-side registration is often provided through the destination, so the cost to the host may be nil or small (unverified).

## Fit gaps (mostly hypotheses, unverified)
- It is destination-driven and tied to the municipality's setup, so private hosts have little choice of tool.
- Guest-facing check-in UX, multilingual guest self-registration and PMS or OTA sync are partly left to third parties like Chekin and Smoobu.
- Little public evidence of host-side friction, so gaps would need direct user research.

## Opening
Only as a layer on top of feratel (guest self-check-in, a PMS bridge, Ortstaxe calculation for small hosts) and not as a replacement. Any product has to integrate with feratel rather than compete with it.
