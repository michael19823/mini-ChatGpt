<context>
Today's date is 2026-10-08. Your training data ends well before this date. Laws, licences, portals, deadlines, operator counts and software products change often, so check them with search before you rely on them, even when you feel sure. Things that can't change need no check.
Overall goal: find software opportunities a solo founder could build and sell to small regulated businesses, especially "quiet" ones: small, often family-run businesses that rarely post online but must keep registers or file recurring reports with an authority. The study covers about 200 countries. This is the discovery pass for one country, named in <item> at the end. The study already has ideas for this country, listed in <known>; this pass looks for what the study missed. Your job is recall: find and list every plausible candidate. A separate stage verifies or dismisses them, so don't hold candidates back.
</context>

<definitions version="wave1">
Candidate: a recurring, mandatory workflow that a defined group of small businesses or households must perform for an authority, utility, police, vet, insurer or municipality, and that software (or a software-backed done-for-you service) could make easier.
In scope: households as employers; sole traders and family firms; associations, co-operatives, religious and community bodies; small professional offices (clinics, pharmacies, notaries, brokers) when the duty falls on them; a one-off duty only when a deadline makes many small firms act at once.
Out of scope: duties that fall only on large firms; generic tools (AI assistants, CRMs, invoice OCR, WhatsApp bots, general accounting or payroll); building the state's own system.
Known idea: same buyer group and same core duty as an idea in <known>. A different buyer group or a different duty is a new candidate: name the related known id.
Revive: a known idea the study rejected, where you found specific new evidence that the rejection no longer holds (a new rule, a changed deadline, a named "killer" product that doesn't do the core job). Cite the evidence.
Rejected: only with evidence: name the product, free state tool, rule or fact that kills it. A candidate nobody had time to check is unverified, not rejected.
</definitions>

<task>
Objective: screen every category assigned to you in <item>, using <coverage>, and list every candidate you find in the ledger.
Done means: every assigned category has a status, and every candidate you came across is in the ledger with its evidence and a known mark.
Breadth before depth: give every assigned category at least one search before you spend more than three searches on any single candidate.
Apply every rule below to every category and every candidate, not just the first.
Do not: create or edit any file; commit; use GitHub tools; launch sub-agents; spend searches on categories assigned to another worker (but list any candidate you come across there).
</task>

<coverage version="discovery_v2">
Group A, quiet industries:
1. Household employers: domestic workers, live-in carers, nannies
2. Scrap-metal dealers
3. Second-hand dealers and pawnbrokers
4. Gold and jewellery buyers
5. Used car parts and vehicle dismantlers
6. Livestock traders, markets and animal transport
7. Small abattoirs and butchers
8. Beekeepers
9. Veterinary practices and veterinary medicine sellers
10. Well drillers and water abstraction
11. Septic, sanitation and waste haulers
12. Lift, boiler and pressure-equipment owners and inspectors
13. Small water systems
14. Pesticide and fertiliser dealers and applicators
15. Labour contractors and recruitment agencies
16. Cemeteries, burial societies and funeral services
17. Community and religious bodies: associations, charities, halal and kosher supervision
18. Transport operators: minibus, taxi, moto-taxi, small trucking and bus fleets
19. Market traders, street vendors, money changers
20. Small licensed premises with inspections: tattoo studios, driving schools, childminders and nurseries, small food producers, hunting outfitters
Group B, regulated small businesses where the study's strongest leads came from:
21. Fuel stations and fuel or LPG distributors
22. Grain, coffee, cocoa and other commodity traders, millers and warehouses
23. Co-operatives, credit unions and savings groups
24. Private clinics, labs and other health providers that bill insurers or state schemes
25. Pharmacies, medicine importers, and users of controlled chemicals or precursors
26. Security, cleaning and manpower agencies, and the firms that hire their workers
27. Construction, mining and quarry contractors and suppliers: site registers, accreditation, local-content reports
28. Notaries, land agents, real estate brokers and other professionals with periodic or anti-money-laundering reports
29. Hotels, guest houses and short-term rentals: guest registers, tourism levies
30. Small exporters and importers facing traceability or certification rules: food, fish, timber, forest-risk commodities
Country-specific (group B's worker, or the single worker): add at least 5 categories found in licensing registers, ministries' lists of regulated activities, or laws and decrees from 2024-2027, numbered 31 and up, and screen them too.
Status for each category: screened (say what you found, or "nothing new beyond K03"), not_applicable (one-line reason), or not_reached (why: budget, no sources, blocked site). Start each category name with its number.
</coverage>

<ledger>
List every candidate you found, not only the strongest: name; category (its number and name); buyer; trigger or duty (with the law or rule); evidence (sources as URLs); existing solutions you saw; provisional score 1-10; status; what is still unchecked; known mark.
Known mark: new, known (give the id; one line is enough, score 0, and don't spend searches re-checking it) or revive (give the id and the new evidence). For a new candidate close to a known idea, give the related id in known_id.
Status: promising (score 4 or more, with evidence), weak (score 3 or less), unverified (you couldn't check enough to judge), rejected (only with evidence, per <definitions>). Never lower a score because a check is unfinished: say what is unchecked instead.
For every new or revived candidate you score 3 or more, run one targeted competitor search in the local language of the form "<software/program/app> + <register or obligation> + <industry>", and record what it found.
Provisional score: judge pain, frequency, how mandatory it is, competition and gaps, buyer accessibility, willingness to pay, MVP simplicity and offline distribution at a glance. Avoid generic ideas and ideas that a dominant vertical software product or a free state portal already covers.
</ledger>

<method>
Search the regulator first, in the local language first, then English: licensing registers, official gazettes and new rules, enforcement news, official forms, trade associations, suppliers to the industry. Use short queries and run independent searches in parallel. Open key pages with WebFetch rather than relying on snippets; if a site blocks you, say so and use the search results.
Budget: the WebSearch range and WebFetch cap in <item>. Spend the first half on breadth (every assigned category) and the rest on the most promising candidates. If you reach the top of the range with categories unscreened, mark them not_reached instead of going over.
Sources: prefer the official gazette, regulators and licensing registers, then associations and vendor sites, then press. Never invent a fact, number, product name or URL; mark anything you couldn't confirm "unverified".
Record your search count, fetch count and the queries you ran (up to 20) in the output.
</method>

<finish>
Keep working until every assigned category has a status and every candidate is in the ledger, then return the result in the required format. Think each candidate through before you score it.
</finish>
