export const meta = {
  name: 'wave2-deep-review',
  description: 'Second deep pass on wave 2 strong leads with the owner\'s criteria: one Opus agent per lead re-grades its report with targeted research',
  phases: [{ title: 'Re-assess' }],
}

// args: { batch: 'r1', slugs: [...] }   (14 or fewer per batch: 14 x 13 searches stays under 200)
const { batch, slugs } = args
const ROOT = '/home/user/mini-ChatGpt/rerun/wave2/deep'

const SUMMARY = {
  type: 'object',
  properties: {
    slug: { type: 'string' },
    verdict: { type: 'string', enum: ['go', 'maybe', 'no-go'] },
    score: { type: 'number', description: '1-10 under the new criteria' },
    old_score: { type: 'number' },
    one_line: { type: 'string', description: 'The case in one sentence under the new criteria' },
    gap: { type: 'string', description: 'What the state portal or current practice leaves undone that software would fix' },
    competitor_check: { type: 'string', description: 'Do local products really do the job, at what price; or "none found"' },
    price: { type: 'string', description: 'Realistic price per customer (and per accountant/consultant for multi-client use)' },
    revenue: { type: 'string', description: 'Reachable annual revenue in year 3: buyers x reachable share x price, with the numbers' },
    ease: { type: 'string', description: 'How easy it is to build, onboard and sell: low / medium / high, and why' },
    killer: { type: 'string', description: 'A real killer under the new criteria, or "none"' },
    searches: { type: 'number' },
    blocked_searches: { type: 'number' },
  },
  required: ['slug', 'verdict', 'score', 'old_score', 'one_line', 'gap', 'competitor_check', 'price', 'revenue', 'ease', 'killer', 'searches', 'blocked_searches'],
}

const brief = (slug) => `You are re-assessing one business idea from a country-by-country opportunity study (recurring compliance or reporting duties on many small organisations, where software or a service could sell).
A first deep pass wrote ${ROOT}/reports/${slug}.md. The lead's original data is in ${ROOT}/items/${slug}.json. Read both first.

The owner says the first pass judged with the wrong criteria. Re-assess with the owner's criteria:
1. A free state portal is NOT a reason to reject. The question is whether there is room for improvement that justifies complementary or separate software: data preparation and validation before filing, record-keeping the portal does not do (registers, ledgers, client files, risk assessments, policies), deadline tracking, multi-entity or multi-client work for accountants and consultants, audit trail and inspection readiness, error-prone or slow portal workflows, bulk upload, language or usability pain. Look for evidence of portal pain (user complaints, guides, help videos, consultants selling filing help, error rates, late-filing numbers).
2. A market of a few hundred or a few thousand buyers can be a good market if the product is easy to implement and the price per customer is right. Work out what each customer can be charged (look at what they pay consultants, accountants, fines and staff time today; consider per-entity and per-accountant pricing), then estimate reachable year-3 revenue = buyers x realistic share x price, with the numbers shown.
3. Do not take an existing local product at face value. Check whether it really does this job (its features against the duty list), what it costs, who uses it, and whether it is reasonably priced. A partial, clunky or overpriced incumbent is an opening, not a killer.

Research only what you need to answer these three points and fix any weak facts from the first pass. Search in the country's own language(s) as well as English and prefer primary sources.

Then edit ${ROOT}/reports/${slug}.md: insert a new section "## Re-assessment (owner's criteria)" directly under the report title, above the old Summary, and leave the rest unchanged. The section holds: verdict and new score (and the old score), the case in 3-5 sentences, Room for improvement over the portal or current practice, Competitor reality check, Price per customer, Revenue estimate (with the arithmetic), Ease of implementation and sale, Remaining risks, and new Sources. Cite a URL for every factual claim and mark anything unconfirmed "(unverified)". Plain English, short sentences. Edit no other file.

Score 1-10 for a small, bootstrapped software or service business under these criteria; verdict go (7+, nothing kills it), maybe, or no-go (a real killer under these criteria, e.g. a well-priced local product that already does the whole job, a buyer base that cannot pay anything, or a duty that is gone).

Budget: up to 12 WebSearch and 10 WebFetch calls in total; this is a hard limit. Run independent searches in parallel. Do the work yourself; don't launch sub-agents.
Count your WebSearch calls in searches. If a WebSearch call returns "Web search was not performed", stop searching, count those calls in blocked_searches, still write the section with what you have, and mark gaps as unverified.`

const results = await parallel(slugs.map((slug) => () =>
  agent(brief(slug), { label: `review:${slug}@${batch}`, phase: 'Re-assess', agentType: 'general-purpose', model: 'opus', effort: 'high', schema: SUMMARY })
    .catch((e) => ({ slug, error: String(e).slice(0, 300) }))
))
const used = results.reduce((n, r) => n + ((r && r.searches) || 0), 0)
log(`batch ${batch}: about ${used} searches; ${results.map((r) => `${r.slug} ${r.verdict || 'error'} ${r.score || ''}`).join(', ')}`)
return { batch, used, results }
