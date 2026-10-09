export const meta = {
  name: 'wave2-deep-search',
  description: 'Deep research on wave 2 strong leads: one Opus agent per lead, each writes a full report, batch kept under the per-turn web search cap',
  phases: [{ title: 'Deep search' }],
}

// args: { batch: 'd1', slugs: ['bosnia-and-herzegovina-b1', ...] }   (9 or fewer per batch: 9 x 20 searches stays under 200)
const { batch, slugs } = args
const ROOT = '/home/user/mini-ChatGpt/rerun/wave2/deep'

const SUMMARY = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    verdict: { type: 'string', enum: ['go', 'maybe', 'no-go'] },
    score: { type: 'number', description: '1-10 overall attractiveness for a small, bootstrapped software or service business' },
    one_line: { type: 'string', description: 'The case in one sentence' },
    buyers: { type: 'string', description: 'Best estimate of the number of obliged buyers, with source' },
    price: { type: 'string', description: 'Plausible price point and what buyers pay today' },
    top_competitor: { type: 'string', description: 'Strongest existing alternative, or "none found"' },
    killer: { type: 'string', description: 'The single biggest risk or killer, or "none found"' },
    report: { type: 'string', description: 'Path of the report file written' },
    searches: { type: 'number' },
    blocked_searches: { type: 'number' },
  },
  required: ['slug', 'verdict', 'score', 'one_line', 'buyers', 'price', 'top_competitor', 'killer', 'report', 'searches', 'blocked_searches'],
}

const brief = (slug) => `You are doing a deep research pass on one business idea that survived two independent checks in a country-by-country opportunity study.
The study looks for recurring compliance or reporting duties imposed on many small organisations, where a simple software tool or service could sell.

1. Read the lead file ${ROOT}/items/${slug}.json. It holds the idea, the buyer, the trigger, the evidence found so far, what was left unchecked, and both earlier checks with their sources.
2. Research it in depth on the web. Search in the country's own language(s) as well as English. Use primary sources (laws, regulator pages, official registers and statistics) wherever possible. Cover:
   - Duty: exact legal basis (law, decree, resolution, articles), what must be filed or kept, how often, deadlines, penalties, and evidence of real enforcement (fines, inspections, sanctions lists, news). Any recent or upcoming changes.
   - Buyers: how many obliged entities there are (official counts or registers), their segments and size, and how they comply today (in-house, accountants, consultants, paper).
   - Competition: every existing software product, consultancy offer, template pack, free government tool or international vendor that does this job, with prices where found. Say plainly if a free state tool already covers it.
   - Willingness to pay: what consultants or tools charge now, compared with the cost of fines and staff time.
   - Channels: associations, chambers, regulator lists, accountant networks, events: how a newcomer would reach buyers.
   - Risks: the regulator building its own tool, the rule being repealed or delayed, market too small, language or licensing barriers, liability.
   - Product: what a first version should do, and what to build in the first 30 days.
3. Write the report in Markdown to ${ROOT}/reports/${slug}.md with these sections: Summary (verdict, score, the case in 3-5 sentences), Duty, Buyers, Competition, Willingness to pay, Channels, Risks, First product, Open questions, Sources.
   Every factual claim cites a source URL inline. Mark anything you could not confirm as "(unverified)". Plain English, short sentences. Write the file once, at the end; create or edit no other file.
4. Return the summary fields. Score 1-10 for a small, bootstrapped software or service business; verdict go (7+, nothing kills it), maybe, or no-go (a named killer).

Budget: up to 20 WebSearch and 12 WebFetch calls in total; this is a hard limit. Run independent searches in parallel. Do the work yourself; don't launch sub-agents.
Count your WebSearch calls in searches. If a WebSearch call returns "Web search was not performed", stop searching, count those calls in blocked_searches, still write the report with what you have, and mark gaps as unverified.`

const results = await parallel(slugs.map((slug) => () =>
  agent(brief(slug), { label: `deep:${slug}@${batch}`, phase: 'Deep search', agentType: 'general-purpose', model: 'opus', effort: 'high', schema: SUMMARY })
    .catch((e) => ({ slug, error: String(e).slice(0, 300) }))
))
const used = results.reduce((n, r) => n + ((r && r.searches) || 0), 0)
log(`batch ${batch}: about ${used} searches; ${results.map((r) => `${r.slug} ${r.verdict || 'error'}`).join(', ')}`)
return { batch, used, results }
