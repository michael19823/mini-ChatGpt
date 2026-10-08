export const meta = {
  name: 'country-wave',
  description: 'Recall-first opportunity discovery for a batch of countries: discover, critique, gap-fill, triage against known ideas, verify every new candidate scored 3+, challenge every lead at 4+',
  phases: [
    { title: 'Discover', detail: 'Sonnet workers screen 30 categories plus country-specific ones and list every candidate' },
    { title: 'Critique', detail: 'Sonnet critic names missing categories (large countries)' },
    { title: 'Gap fill', detail: 'Sonnet researches not-reached categories and the critic gaps' },
    { title: 'Triage', detail: 'Sonnet merges duplicates and marks ideas the study already has' },
    { title: 'Verify', detail: 'Opus checks candidates scored 4+, Sonnet checks 3s; Sonnet 4+ escalates to Opus' },
    { title: 'Challenge', detail: 'an adversarial Opus check on every lead at 4+' },
  ],
}

// args: { items: [{ id, name, stratum: 'large' | 'medium' | 'small', shadow }] }
// Workers read rerun/wave1/contract.md and items/<id>.md; the later stages' prompts are below and in prompts.md.
const DIR = '/home/user/mini-ChatGpt/rerun/wave1'
const DEFINITIONS = `<definitions version="wave1">
Candidate: a recurring, mandatory workflow that a defined group of small businesses or households must perform for an authority, utility, police, vet, insurer or municipality, and that software (or a software-backed done-for-you service) could make easier.
In scope: households as employers; sole traders and family firms; associations, co-operatives, religious and community bodies; small professional offices (clinics, pharmacies, notaries, brokers) when the duty falls on them; a one-off duty only when a deadline makes many small firms act at once.
Out of scope: duties that fall only on large firms; generic tools (AI assistants, CRMs, invoice OCR, WhatsApp bots, general accounting or payroll); building the state's own system.
Known idea: same buyer group and same core duty as an idea in <known>. A different buyer group or a different duty is a new candidate: name the related known id.
Revive: a known idea the study rejected, where you found specific new evidence that the rejection no longer holds (a new rule, a changed deadline, a named "killer" product that doesn't do the core job). Cite the evidence.
Rejected: only with evidence: name the product, free state tool, rule or fact that kills it. A candidate nobody had time to check is unverified, not rejected.
</definitions>`
const RUBRIC = {
  critic: `You are reviewing the coverage of a discovery pass for one country. You did not write it. Use no tools except reading the country file named below: answer from that file, the material below and your own knowledge, and say when you're unsure.
The pass looks for candidates as defined in <definitions>.
Below are its coverage table, a summary of its candidate ledger and the ideas the study already had (<known>). List up to 6 gaps: categories or specific candidates that a thorough researcher would expect for this country but that are missing, thin, or marked not_reached. Think through these lenses: the country's own licensing regimes; registers small businesses keep for the police, a municipality or a ministry; state programmes that small businesses run on the state's behalf; new laws or decrees from 2024-2027; export and import rules that fall on small operators; sectors with unusually many small operators in this country.
For each gap give the category or candidate, one line on why it matters here, and the first search to run, in the local language. Don't re-list known ideas or re-judge candidates already listed. Return an empty list if coverage is complete.`,
  gapfill: `(Appended to the discovery contract and item.) Research only the gaps listed in <gaps>, about 2-3 searches each, up to 18 WebSearch and 8 WebFetch calls in total. Return coverage rows for them and ledger rows for any candidates you find, in the same format, with known marks.`,
  triage: `You are triaging the merged candidate ledger for one country before verification. You did not produce it. Use no tools except reading the country file named below, which holds the <known> list.
Use <definitions> for every decision. For each candidate, by id, decide:
- keep: a new or revived candidate within scope;
- merge: it duplicates an earlier candidate in this list (same buyer group and same core duty); give that candidate's id in ref and keep the earlier one;
- known: same buyer group and same core duty as an idea in <known>; give the K id in ref. A different buyer group or duty is not known: keep it;
- drop: outside the scope in <definitions>; name the rule in the reason.
"A product or state tool already does this" and "nobody would pay" are not reasons to drop: verifiers decide those. When unsure, keep. Give every candidate a decision and a one-line reason.`,
  verify: `Today's date is 2026-10-08. You are checking one candidate business opportunity from a discovery pass. You did not produce it. The study looks for software a solo founder could sell to small businesses facing a mandatory, recurring compliance workflow, as defined in <definitions>. Check the claim independently with search, in the local language first; laws and products change, so don't rely on memory.
Check: 1. Duty: is there a current legal or regulatory duty on the named small businesses, with what frequency and penalty? Cite the source and confirm it is this country's law and in force. 2. Competition: search for software, a free state portal or app, or a service that already does the core job (local-language "software/app + obligation + industry", plus regional vendors). 3. Market: roughly how many businesses carry the duty, from a register or a statistic.
Verdict: confirmed (the duty is real and nothing already does the core job), refuted (cite the contradicting source), or unverifiable (say why). Unverifiable is not refuted. Then give a suggested score from 1 to 10, judging pain, frequency, how mandatory it is, competition, buyer accessibility, willingness to pay, MVP simplicity and distribution, with a reason of up to 120 words and the source URLs.
Budget: up to 6 WebSearch and 5 WebFetch calls; run independent searches in parallel. Do the work yourself; don't launch sub-agents; don't create or edit files.`,
  adversarial: `Today's date is 2026-10-08. A first check rated the candidate below at 4 or more out of 10. Your job is to try to refute it; you did not produce it or the first check. The study looks for software a solo founder could sell to small businesses facing a mandatory, recurring compliance workflow, as defined in <definitions>.
Search hard, in the local language first, for what would kill it: 1. software, a free state portal or app, an association's tool, or an accountant's or consultant's service that already does the core job (vendor sites, app stores, ERP and POS add-ons, the regulator's own e-services); 2. reasons the duty doesn't bite: small-firm exemptions, deferral or repeal, no enforcement; 3. a much smaller market than claimed.
Verdict: refuted (name the product, tool, rule or fact, with its source), survives (you searched and found nothing that kills it), or unclear (say what you couldn't settle). Then give your own score from 1 to 10 on the same criteria as the first check, with a reason of up to 120 words and the source URLs.
Budget: up to 8 WebSearch and 5 WebFetch calls; run independent searches in parallel. Do the work yourself; don't launch sub-agents; don't create or edit files.`,
}
const CATEGORIES = ['Household employers', 'Scrap-metal dealers', 'Second-hand dealers and pawnbrokers', 'Gold and jewellery buyers',
  'Used car parts and vehicle dismantlers', 'Livestock traders, markets and animal transport', 'Small abattoirs and butchers', 'Beekeepers',
  'Veterinary practices and veterinary medicine sellers', 'Well drillers and water abstraction', 'Septic, sanitation and waste haulers',
  'Lift, boiler and pressure-equipment owners and inspectors', 'Small water systems', 'Pesticide and fertiliser dealers and applicators',
  'Labour contractors and recruitment agencies', 'Cemeteries, burial societies and funeral services', 'Community and religious bodies',
  'Transport operators', 'Market traders, street vendors, money changers', 'Small licensed premises with inspections',
  'Fuel stations and fuel or LPG distributors', 'Grain, coffee, cocoa and other commodity traders, millers and warehouses',
  'Co-operatives, credit unions and savings groups', 'Private clinics, labs and other health providers that bill insurers or state schemes',
  'Pharmacies, medicine importers, and users of controlled chemicals or precursors', 'Security, cleaning and manpower agencies, and the firms that hire their workers',
  'Construction, mining and quarry contractors and suppliers', 'Notaries, land agents, real estate brokers and other professionals with periodic or AML reports',
  'Hotels, guest houses and short-term rentals', 'Small exporters and importers facing traceability or certification rules']
const BUDGET = {
  large: { A: '22-28 WebSearch calls, up to 10 WebFetch calls', B: '18-24 WebSearch calls, up to 10 WebFetch calls' },
  medium: { A: '14-20 WebSearch calls, up to 8 WebFetch calls', B: '12-18 WebSearch calls, up to 8 WebFetch calls' },
  small: { ALL: '15-22 WebSearch calls, up to 10 WebFetch calls' },
  GAPS: 'about 2-3 WebSearch calls per gap, up to 18 in total, and up to 8 WebFetch calls',
}
const CAPS = { large: { opus: 6, sonnet: 9 }, medium: { opus: 4, sonnet: 6 }, small: { opus: 2, sonnet: 3 } }
const SIZE = { large: 'large', medium: 'medium', small: 'small or microstate' }
const { items } = args

const str = { type: 'string' }
const num = { type: 'number' }
const COVERAGE_ROW = { type: 'object', required: ['category', 'status'], properties: {
  category: str, status: { type: 'string', enum: ['screened', 'not_applicable', 'not_reached'] }, found: str } }
const CANDIDATE = { type: 'object', required: ['name', 'category', 'evidence', 'score', 'status', 'known_mark'], properties: {
  name: str, category: str, buyer: str, trigger: str, evidence: str, existing: str, score: num,
  status: { type: 'string', enum: ['promising', 'weak', 'unverified', 'rejected'] }, unchecked: str,
  known_mark: { type: 'string', enum: ['new', 'known', 'revive'] }, known_id: str, known_note: str } }
const LEDGER = { type: 'object', required: ['searches', 'fetches', 'queries', 'coverage', 'candidates'], properties: {
  searches: num, fetches: num, queries: { type: 'array', items: str },
  coverage: { type: 'array', items: COVERAGE_ROW }, candidates: { type: 'array', items: CANDIDATE } } }
const GAPS = { type: 'object', required: ['gaps'], properties: { gaps: { type: 'array', items: {
  type: 'object', required: ['category', 'why'], properties: { category: str, why: str, first_search: str } } } } }
const TRIAGE = { type: 'object', required: ['decisions'], properties: { decisions: { type: 'array', items: {
  type: 'object', required: ['id', 'decision', 'reason'], properties: { id: str, ref: str, reason: str,
  decision: { type: 'string', enum: ['keep', 'merge', 'known', 'drop'] } } } } } }
const VERDICT = { type: 'object', required: ['verdict', 'suggested_score', 'reason'], properties: {
  verdict: { type: 'string', enum: ['confirmed', 'refuted', 'unverifiable'] }, suggested_score: num,
  duty: str, market: str, competitor: str, reason: str, sources: str } }
const CHALLENGE = { type: 'object', required: ['verdict', 'suggested_score', 'reason'], properties: {
  verdict: { type: 'string', enum: ['refuted', 'survives', 'unclear'] }, suggested_score: num,
  killer: str, reason: str, sources: str } }

const json = (x) => JSON.stringify(x)
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i)
const count = (xs, f) => xs.reduce((m, x) => { const k = f(x); m[k] = (m[k] || 0) + 1; return m }, {})
const ASSIGN = {
  A: 'group A, categories 1-20. Another worker screens group B (21-30) and the country-specific categories.',
  B: 'group B, categories 21-30, plus at least 5 country-specific categories numbered 31 and up. Another worker screens group A (1-20).',
  ALL: 'all categories: group A (1-20), group B (21-30) and at least 5 country-specific categories numbered 31 and up.',
  GAPS: 'only the gaps listed in <gaps> below.',
}
const EXPECTED = { A: range(1, 20), B: range(21, 30), ALL: range(1, 30) }
const countryFile = (it) => `${DIR}/items/${it.id}.md`
// The same opening for every worker, the country last.
const brief = (it, part) => `Read these two files first, in this order, and follow the first one exactly:
1. ${DIR}/contract.md: the shared contract for every worker in this study.
2. ${countryFile(it)}: your country's languages, identity notes and the <known> list of ideas the study already has.
<item>
Country: ${it.name} (slug ${it.id}). Market size: ${SIZE[it.stratum]}.
Your assignment: ${ASSIGN[part]}
Budget: ${part === 'GAPS' ? BUDGET.GAPS : BUDGET[it.stratum][part]}.
</item>`
const catNum = (c) => { const m = /^\s*(\d+)/.exec(c || ''); return m ? Number(m[1]) : null }
const researcher = (prompt, label, phase, model, effort, schema) =>
  agent(prompt, { label, phase, agentType: 'general-purpose', model, effort, schema })

// Tier 0 in code: every assigned category needs a status, and B or ALL must add 5 country-specific ones.
const coverageGaps = (r, part) => {
  if (!r) return EXPECTED[part].map((n) => ({ category: `${n}. ${CATEGORIES[n - 1]}`, why: 'the first worker failed' }))
  const gaps = r.coverage.filter((c) => c.status === 'not_reached')
    .map((c) => ({ category: c.category, why: `not reached in the first pass: ${c.found || 'no reason given'}` }))
  const have = new Set(r.coverage.map((c) => catNum(c.category)))
  for (const n of EXPECTED[part]) if (!have.has(n)) gaps.push({ category: `${n}. ${CATEGORIES[n - 1]}`, why: 'no status returned' })
  const specific = [...have].filter((n) => n && n >= 31).length
  if (part !== 'A' && specific < 5) gaps.push({ category: 'Country-specific categories', why: `only ${specific} of at least 5 were added` })
  return gaps
}
const uniqueGaps = (gaps) => [...new Map(gaps.map((g) => [g.category.toLowerCase(), g])).values()]

const pipelineResults = await pipeline(
  items,
  // 1. Discover: two halves for large and medium countries, one worker for small ones; shadow runs at medium effort.
  (_prev, it) => {
    const parts = it.stratum === 'small' ? ['ALL'] : ['A', 'B']
    const run = (part, effort, tag) => {
      const once = () => researcher(brief(it, part), `${tag}:${part}:${it.id}`, 'Discover', 'sonnet', effort, LEDGER)
      return once().then((r) => r || once()).then((r) => r && { ...r, part, tag })  // infrastructure failure: retry once
    }
    const thunks = parts.map((p) => () => run(p, 'high', 'discover'))
      .concat(it.shadow ? parts.map((p) => () => run(p, 'medium', 'shadow')) : [])
    return parallel(thunks).then((rs) => ({ parts, main: rs.slice(0, parts.length), shadow: rs.slice(parts.length).filter(Boolean) }))
  },
  // 2. Critique (large countries) and the Tier 0 coverage check (all countries).
  (d, it) => {
    if (!d.main.some(Boolean)) return { ...d, failed: 'discovery' }
    const tier0 = d.parts.flatMap((p, i) => coverageGaps(d.main[i], p))
    if (it.stratum !== 'large') return { ...d, gaps: uniqueGaps(tier0) }
    const done = d.main.filter(Boolean)
    const coverage = done.flatMap((r) => r.coverage.map((c) => ({ category: c.category, status: c.status, found: (c.found || '').slice(0, 160) })))
    const ledger = done.flatMap((r) => r.candidates.map((c) => ({ name: c.name, category: c.category, status: c.status, score: c.score, known: c.known_mark })))
    return agent(`${DEFINITIONS}\n${RUBRIC.critic}\n<country>${it.name}. Country file with the <known> list: ${countryFile(it)}</country>\n<coverage>\n${json(coverage)}\n</coverage>\n<ledger>\n${json(ledger)}\n</ledger>`,
      { label: `critic:${it.id}`, phase: 'Critique', model: 'sonnet', effort: 'medium', schema: GAPS })
      .then((g) => ({ ...d, gaps: uniqueGaps(tier0.concat(g ? g.gaps : [])), criticGaps: g ? g.gaps.length : null }))
  },
  // 3. Gap fill: not-reached categories always; the critic's gaps for large countries.
  (r, it) => {
    if (r.failed) return r
    if (!r.gaps.length) return { ...r, extra: null }
    return researcher(`${brief(it, 'GAPS')}\n<gaps>\n${json(r.gaps)}\n</gaps>\n${RUBRIC.gapfill}`, `gapfill:${it.id}`, 'Gap fill', 'sonnet', 'high', LEDGER)
      .then((extra) => ({ ...r, extra: extra && { ...extra, part: 'GAPS', tag: 'gapfill' } }))
  },
  // 4. Triage: ids assigned in code, high-effort ledgers first so merges keep them.
  (r, it) => {
    if (r.failed) return r
    const sources = r.main.filter(Boolean).concat(r.extra ? [r.extra] : [], r.shadow)
    const all = sources.flatMap((s) => s.candidates.map((c, j) => ({ ...c, id: `${s.tag === 'shadow' ? 'S' : ''}${s.part}${j + 1}`, src: s.tag })))
    const open = all.filter((c) => c.status !== 'rejected')
    const view = open.map((c) => ({ id: c.id, name: c.name, category: c.category, buyer: c.buyer, trigger: (c.trigger || '').slice(0, 300),
      score: c.score, status: c.status, known_mark: c.known_mark, known_id: c.known_id, known_note: c.known_note }))
    return agent(`${DEFINITIONS}\n${RUBRIC.triage}\n<country>${it.name}. Country file with the <known> list: ${countryFile(it)}</country>\n<candidates>\n${json(view)}\n</candidates>`,
      { label: `triage:${it.id}`, phase: 'Triage', model: 'sonnet', effort: 'medium', schema: TRIAGE })
      .then((t) => ({ ...r, sources, all, open, decisions: t ? t.decisions : null }))
  },
  // 5. Verify every new candidate scored 3+ (Opus for 4+, Sonnet for 3), escalate Sonnet 4+, challenge every 4+.
  (r, it) => {
    if (r.failed) return { id: it.id, stratum: it.stratum, failed: r.failed }
    const cap = CAPS[it.stratum]
    const dec = new Map((r.decisions || []).map((d) => [d.id, d]))
    const ids = new Set(r.open.map((c) => c.id))
    const skip = (c) => {
      if (!r.decisions) return c.known_mark === 'known' ? 'known' : null    // triage failed: trust the worker's marks
      const d = dec.get(c.id)
      if (!d) return null                                                   // no decision: fail open
      if (d.decision === 'merge' && ids.has(d.ref) && d.ref !== c.id) return 'merged'
      if (d.decision === 'drop') return 'dropped'
      if (d.decision === 'known' && c.known_mark === 'known') return 'known' // both stages agree
      return null
    }
    const kept = r.open.filter((c) => !skip(c))
    const mergedInto = (c) => r.open.filter((o) => skip(o) === 'merged' && dec.get(o.id).ref === c.id)
    // A candidate the worker called known but triage kept as new has no score yet: check it at 3.
    const scoreOf = (c) => Math.max(c.score || 0, ...mergedInto(c).map((m) => m.score || 0), c.known_mark === 'known' ? 3 : 0)
    const rank = { unverified: 0, promising: 1, weak: 2 }
    const eligible = kept.filter((c) => scoreOf(c) >= 3)
      .sort((a, b) => scoreOf(b) - scoreOf(a) || (rank[a.status] || 0) - (rank[b.status] || 0))
    const high = eligible.filter((c) => scoreOf(c) >= 4)
    const opusQueue = high.slice(0, cap.opus)
    const sonnetQueue = high.slice(cap.opus).concat(eligible.filter((c) => scoreOf(c) < 4)).slice(0, cap.sonnet)
    const overflow = eligible.filter((c) => !opusQueue.includes(c) && !sonnetQueue.includes(c))
    if (overflow.length) log(`${it.name}: ${overflow.length} eligible candidates left unverified by the cap: ${overflow.map((c) => c.id).join(', ')}`)
    const claimOf = (c) => ({ name: c.name, category: c.category, buyer: c.buyer, trigger: c.trigger, evidence: c.evidence,
      existing: c.existing, provisional_score: scoreOf(c), unchecked: c.unchecked, known_mark: c.known_mark, known_id: c.known_id,
      known_note: c.known_note, also_reported: mergedInto(c).map((m) => ({ name: m.name, evidence: m.evidence, existing: m.existing })) })
    const check = (c, model, tag) => researcher(`${DEFINITIONS}\n${RUBRIC.verify}\n<country>${it.name}</country>\n<claim>\n${json(claimOf(c))}\n</claim>`,
      `${tag}:${it.id}:${c.id}`, 'Verify', model, 'medium', VERDICT)
    const challenge = (c, first) => researcher(`${DEFINITIONS}\n${RUBRIC.adversarial}\n<country>${it.name}</country>\n<claim>\n${json(claimOf(c))}\n</claim>\n<first_check>\n${json({ score: first.suggested_score, competitor: first.competitor || '', sources: first.sources || '' })}\n</first_check>`,
      `challenge:${it.id}:${c.id}`, 'Challenge', 'opus', 'medium', CHALLENGE)
    const atLeast4 = (v) => v && v.verdict !== 'refuted' && v.suggested_score >= 4
    const withChallenge = (c, o, s) => atLeast4(o) ? challenge(c, o).then((ch) => ({ c, sonnet: s, opus: o, challenge: ch })) : { c, sonnet: s, opus: o, challenge: null }
    const thunks = opusQueue.map((c) => () => check(c, 'opus', 'opus').then((o) => withChallenge(c, o, null)))
      .concat(sonnetQueue.map((c) => () => check(c, 'sonnet', 'sonnet').then((s) =>
        atLeast4(s) ? check(c, 'opus', 'escalate').then((o) => withChallenge(c, o, s)) : { c, sonnet: s, opus: null, challenge: null })))
    return parallel(thunks).then((checked) => {
      const done = checked.filter(Boolean)
      const final = (x) => {
        if (!x.opus && !x.sonnet) return 'check_failed'
        const first = x.opus || x.sonnet
        if (first.verdict === 'refuted') return 'refuted'
        if (!atLeast4(first)) return first.verdict === 'unverifiable' ? 'unverifiable' : 'below_4'
        if (!x.opus) return 'escalation_failed'
        if (!x.challenge) return 'single_check_4'
        if (x.challenge.verdict === 'refuted') return 'refuted_on_challenge'
        return x.challenge.verdict === 'survives' && x.challenge.suggested_score >= 4 ? 'verified_4' : 'disputed'
      }
      const rows = done.map((x) => ({ id: x.c.id, name: x.c.name, src: x.c.src, mark: x.c.known_mark, prov: scoreOf(x.c),
        sonnet: x.sonnet ? x.sonnet.suggested_score : null, opus: x.opus ? x.opus.suggested_score : null,
        challenge: x.challenge ? `${x.challenge.verdict} ${x.challenge.suggested_score}` : null, final: final(x) }))
      const skipped = r.open.map((c) => skip(c)).filter(Boolean)
      return {
        id: it.id, stratum: it.stratum,
        discovery: r.sources.map((s) => ({ src: `${s.tag}:${s.part}`, searches: s.searches, fetches: s.fetches,
          coverage: count(s.coverage, (c) => c.status), candidates: s.candidates.length, marks: count(s.candidates, (c) => c.known_mark) })),
        gaps: r.gaps.length, criticGaps: r.criticGaps === undefined ? null : r.criticGaps,
        triage: r.decisions ? count(r.decisions, (d) => d.decision) : 'failed', skipped: count(skipped, (s) => s),
        checks: { opus: opusQueue.length, sonnet: sonnetQueue.length, escalated: done.filter((x) => x.sonnet && x.opus).length,
          challenged: done.filter((x) => x.challenge).length, unverifiedByCap: overflow.map((c) => `${c.id} ${c.name}`) },
        finals: count(rows, (x) => x.final),
        leads: rows.filter((x) => ['verified_4', 'disputed', 'single_check_4', 'refuted_on_challenge', 'escalation_failed'].includes(x.final)),
      }
    })
  },
)
const out = pipelineResults.map((r, i) => r || { id: items[i].id, failed: 'pipeline' })
log(out.map((r) => r.failed ? `${r.id}: failed (${r.failed})` : `${r.id}: ${Object.entries(r.finals).map(([k, v]) => `${k} ${v}`).join(', ') || 'no checks'}`).join('; '))
return out
