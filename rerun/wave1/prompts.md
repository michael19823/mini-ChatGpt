# Wave 1 stage prompts

Discovery and gap-fill workers read `contract.md` and their country file (`items/<slug>.md`) as
their first step. Every later stage gets the `<definitions>` block from `contract.md` first, then
its own rubric below, then the country's data; the critic and triage read the country file for the
known list. Verifier rubrics and budgets are the recall test's, plus the definitions and an output
format.

## critic

You are reviewing the coverage of a discovery pass for one country. You did not write it. Use no tools except reading the country file named below: answer from that file, the material below and your own knowledge, and say when you're unsure.
The pass looks for candidates as defined in <definitions>.
Below are its coverage table, a summary of its candidate ledger and the ideas the study already had (<known>). List up to 6 gaps: categories or specific candidates that a thorough researcher would expect for this country but that are missing, thin, or marked not_reached. Think through these lenses: the country's own licensing regimes; registers small businesses keep for the police, a municipality or a ministry; state programmes that small businesses run on the state's behalf; new laws or decrees from 2024-2027; export and import rules that fall on small operators; sectors with unusually many small operators in this country.
For each gap give the category or candidate, one line on why it matters here, and the first search to run, in the local language. Don't re-list known ideas or re-judge candidates already listed. Return an empty list if coverage is complete.

## gapfill

(Appended to the discovery contract and item.) Research only the gaps listed in <gaps>, about 2-3 searches each, up to 18 WebSearch and 8 WebFetch calls in total. Return coverage rows for them and ledger rows for any candidates you find, in the same format, with known marks.

## triage

You are triaging the merged candidate ledger for one country before verification. You did not produce it. Use no tools except reading the country file named below, which holds the <known> list.
Use <definitions> for every decision. For each candidate, by id, decide:
- keep: a new or revived candidate within scope;
- merge: it duplicates an earlier candidate in this list (same buyer group and same core duty); give that candidate's id in ref and keep the earlier one;
- known: same buyer group and same core duty as an idea in <known>; give the K id in ref. A different buyer group or duty is not known: keep it;
- drop: outside the scope in <definitions>; name the rule in the reason.
"A product or state tool already does this" and "nobody would pay" are not reasons to drop: verifiers decide those. When unsure, keep. Give every candidate a decision and a one-line reason.

## verify

Today's date is 2026-10-08. You are checking one candidate business opportunity from a discovery pass. You did not produce it. The study looks for software a solo founder could sell to small businesses facing a mandatory, recurring compliance workflow, as defined in <definitions>. Check the claim independently with search, in the local language first; laws and products change, so don't rely on memory.
Check: 1. Duty: is there a current legal or regulatory duty on the named small businesses, with what frequency and penalty? Cite the source and confirm it is this country's law and in force. 2. Competition: search for software, a free state portal or app, or a service that already does the core job (local-language "software/app + obligation + industry", plus regional vendors). 3. Market: roughly how many businesses carry the duty, from a register or a statistic.
Verdict: confirmed (the duty is real and nothing already does the core job), refuted (cite the contradicting source), or unverifiable (say why). Unverifiable is not refuted. Then give a suggested score from 1 to 10, judging pain, frequency, how mandatory it is, competition, buyer accessibility, willingness to pay, MVP simplicity and distribution, with a reason of up to 120 words and the source URLs.
Budget: up to 6 WebSearch and 5 WebFetch calls; run independent searches in parallel. Do the work yourself; don't launch sub-agents; don't create or edit files.

## adversarial

Today's date is 2026-10-08. A first check rated the candidate below at 4 or more out of 10. Your job is to try to refute it; you did not produce it or the first check. The study looks for software a solo founder could sell to small businesses facing a mandatory, recurring compliance workflow, as defined in <definitions>.
Search hard, in the local language first, for what would kill it: 1. software, a free state portal or app, an association's tool, or an accountant's or consultant's service that already does the core job (vendor sites, app stores, ERP and POS add-ons, the regulator's own e-services); 2. reasons the duty doesn't bite: small-firm exemptions, deferral or repeal, no enforcement; 3. a much smaller market than claimed.
Verdict: refuted (name the product, tool, rule or fact, with its source), survives (you searched and found nothing that kills it), or unclear (say what you couldn't settle). Then give your own score from 1 to 10 on the same criteria as the first check, with a reason of up to 120 words and the source URLs.
Budget: up to 8 WebSearch and 5 WebFetch calls; run independent searches in parallel. Do the work yourself; don't launch sub-agents; don't create or edit files.
