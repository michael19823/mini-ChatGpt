export const meta = {
  name: 'deep-dive-idea',
  description: 'Full deep dive on one 6/10 idea: four Opus research agents in parallel (law, market, product and tech, go-to-market and finance), then an Opus agent writes the combined PLAN.md',
  phases: [{ title: 'Research' }, { title: 'Plan' }],
}

// args: { slug: 'mexico-b1', country: 'Mexico', idea: '...' }   One idea per batch: about 145 searches, under the 200 per-turn cap.
const { slug, country, idea } = args
const ROOT = '/home/user/mini-ChatGpt/rerun/wave2/deep'
const DIR = `${ROOT}/${slug}`
const OPTS = { agentType: 'general-purpose', model: 'opus', effort: 'xhigh' }

const CONTEXT = `You are part of a deep dive on one business idea from a country-by-country opportunity study (recurring compliance or reporting duties on many small organisations, where software or a service could sell).
Country: ${country}
Idea: ${idea}
Read first: the lead data ${ROOT}/items/${slug}.json and the report ${ROOT}/reports/${slug}.md (the "Re-assessment (owner's criteria)" section at the top is the latest view).
A finished deep dive on another idea exists as a model of depth and format: ${ROOT}/bosnia/PLAN.md and the four section files next to it (01-04 and 05-payments.md). Skim them for structure; do not copy their facts.

The owner's standing criteria and preferences (apply them):
- A free state portal is not a reason to reject. Ask what the portal or current practice leaves undone that software can fix.
- A market of a few hundred or a few thousand buyers can be fine if the product is easy to implement and priced right.
- Check whether existing local products really do the job and are reasonably priced; a partial or overpriced incumbent is an opening.
- The founder will build the software with Claude Code and several AI agents in parallel (an MVP in about 3 weeks, sellable in 6-8 weeks once legal content, a security test and pilots are done). Plan development and costs on that basis, not on hired developers.
- It is an online business. The founder prefers to sell from his own company abroad with card payments (Stripe, or a merchant of record such as Paddle that handles VAT), and to open a local company only if it is really needed. Give real company-registration costs (official fees if done in person versus with a lawyer remotely) and the ongoing costs.
- Plain English, short sentences. Cite a URL for every factual claim and mark anything unconfirmed "(unverified)". Search in the country's own language(s) as well as English and prefer primary sources.
- Write your file early and keep updating it as you go, so work is not lost if you are interrupted. If your file already exists from an interrupted run, read it and continue from it instead of starting over. Create or edit no other file. Do the work yourself; don't launch sub-agents.`

const PARTS = [
  {
    key: 'law', file: '01-law-and-requirements.md', budget: 'up to 40 WebSearch and 25 WebFetch calls',
    brief: `YOUR AREA: THE LAW, turned into a precise product requirements list.
Research: the exact laws, decrees, resolutions and regulator rules behind the duty (article numbers, in force dates); who exactly is obliged, thresholds and exemptions; every duty that applies (what must exist on paper or be done, data fields, frequencies, deadlines, filing channels and formats, record keeping and retention); the regulator(s), inspection practice, questionnaires or checklists, and evidence of enforcement and fines; regional differences inside the country; upcoming changes.
Sections: Summary; Who is obliged; Duty-by-duty table (duty, legal basis, what must exist or be done, frequency or deadline, evidence an inspector asks for, penalty); Filing channels and formats; Supervisors and enforcement evidence; Regional differences; Upcoming changes; PRODUCT REQUIREMENTS (a numbered list of concrete, testable requirements the software must meet, each traced to its legal basis); Open questions; Sources.`,
  },
  {
    key: 'market', file: '02-market-and-competition.md', budget: 'up to 40 WebSearch and 25 WebFetch calls',
    brief: `YOUR AREA: MARKET SIZE, BUYERS and COMPETITION.
Research: buyer counts as hard as possible (official registers, statistics, regulator lists; count them yourself where a register can be downloaded), with a table of segment, count, source, year, confidence; buyer profile (size, how they comply today, software they already use, their pain, evidence from forums, associations and the press); willingness to pay (what they pay today for software, consultants, training, fines); every competitor and free alternative, checked properly (features against the duty list, price, customers, verdict); channels and influencers (associations, chambers, professional training, events, groups); nearby countries where the same product could sell.
Sections: Summary; Buyer segments (table); Buyer profile and pain; Willingness to pay; Competitor table and discussion; Channels; Regional expansion; Implications for positioning and pricing; Open questions; Sources.`,
  },
  {
    key: 'product', file: '03-product-and-tech.md', budget: 'up to 30 WebSearch and 20 WebFetch calls',
    brief: `YOUR AREA: PRODUCT and TECHNICAL DESIGN, plus the DEVELOPMENT PLAN (built by the founder with Claude Code and parallel AI agents).
Design: user roles and jobs to be done; feature map (MVP / v1 / later); key user flows; screens (described); data sources and integrations (official portals, registers, file formats, APIs, endpoints, licences, costs; whether the portal accepts uploads or only manual entry); data model; architecture and stack suited to a solo founder with AI agents; security, privacy (the country's data protection law), liability; hosting and running costs at 50/300/1,000 customers; a development roadmap: the order in which to build, how to split the MVP into parallel agent work streams, a realistic calendar (foundation, parallel modules, integration, legal content approval, security test, pilot), a definition of done for the MVP, and the cash budget (lawyer or domain expert review, security test, hosting, tools; no salaried developers).
Sections: Summary; Users and jobs; Feature map; Key flows; Screens; Data sources and integrations; Data model; Architecture and stack; Security, privacy and liability; Hosting and running costs; Development plan (with agent work streams and calendar); Budget; Risks; Open questions; Sources.`,
  },
  {
    key: 'gtm', file: '04-gtm-company-finance.md', budget: 'up to 35 WebSearch and 25 WebFetch calls',
    brief: `YOUR AREA: GO-TO-MARKET, PAYMENTS, COMPANY SETUP and FINANCIALS.
Research and plan: pricing and packaging against what buyers already pay (real prices), in local currency, with VAT/sales-tax treatment; selling seasons and deadlines; channels in priority order and the sales motion; a dated 90-day launch plan and a 12-month marketing plan with a lean budget; payments when selling from a foreign company: whether local cards work for cross-border online payments, Stripe (supported currencies, fees), merchant of record options (Paddle, Lemon Squeezy) and whether they support this country, bank transfer norms and costs, the buyer-side tax friction (reverse-charge VAT or similar, withholding tax on payments to non-residents for software/SaaS, treaty effects), and whether a foreign seller must register for local VAT/GST; whether and when a local company is needed, with real costs (official fees in person, lawyer remotely, minimum capital, time, ongoing bookkeeping); contracts and liability; a 36-month financial model by quarter with stated assumptions and low/base/high scenarios (customers, churn, price, acquisition cost, costs, break-even, peak cash need), assuming the founder builds the software with AI agents; regional expansion; exit options; risks; milestones and kill criteria.
Sections: Summary; Pricing and packaging; Go-to-market; 90-day launch plan; 12-month marketing plan and budget; Payments and tax friction; Company setup (needed or not, costs); Contracts and liability; Financial model; Regional expansion; Exit and partnerships; Risks and mitigations; Milestones and kill criteria; Open questions; Sources.`,
  },
]

const research = (p) => agent(
  `${CONTEXT}\n\n${p.brief}\n\nBudget: ${p.budget}.\nOutput: write ${DIR}/${p.file}. Return a 10-line summary of your key findings.`,
  { ...OPTS, label: `${p.key}:${slug}`, phase: 'Research' },
).then((r) => (r ? { key: p.key, ok: true, summary: r } : { key: p.key, ok: false, error: 'empty result (agent failed)' }),
  (e) => ({ key: p.key, ok: false, error: String(e).slice(0, 300) }))

const results = await parallel(PARTS.map((p) => () => research(p)))
const failed = results.filter((r) => !r.ok)
if (failed.length) {
  log(`${slug}: research incomplete (${failed.map((f) => f.key).join(', ')}); plan not written`)
  return { slug, complete: false, failed }
}

const plan = await agent(
  `${CONTEXT}

YOUR TASK: write the combined plan for this idea, like ${ROOT}/bosnia/PLAN.md, from the four section files in ${DIR}/ (01-law-and-requirements.md, 02-market-and-competition.md, 03-product-and-tech.md, 04-gtm-company-finance.md). Read all four in full.
Reconcile them where they disagree (buyer counts, prices, timing, costs, whether a local company is needed) and say which figure you use and why. Apply the owner's criteria above. Be honest: if the deep dive weakens the case, say so.
PLAN.md sections: 1. Decision in one page (verdict, new score out of 10 and why, what changed versus the re-assessment, what it is worth with a small revenue table, the key conditions, what to do first); 2. Why now: the law and enforcement; 3. Customers; 4. Competition; 5. Product (positioning, users, feature map, key flows, screens, link to the requirements list); 6. Technical design; 7. Development steps (agent work streams, calendar, MVP definition of done, budget); 8. Go-to-market (pricing, channels, selling calendar, marketing budget, first 90 days); 9. Payments, company and legal; 10. Financials (low/base/high); 11. Regional expansion; 12. Risks and mitigations; 13. Milestones and kill criteria; 14. Open questions to settle first; 15. Next steps this week. Link the four section files at the top.
No new web research is needed; you may run up to 5 WebSearch calls only to settle a direct contradiction between the files.
Output: write ${DIR}/PLAN.md. Return: the verdict, the new score, and 5 lines on why.`,
  { ...OPTS, label: `plan:${slug}`, phase: 'Plan' },
).catch((e) => `ERROR ${String(e).slice(0, 300)}`)

const complete = Boolean(plan) && !String(plan).startsWith('ERROR')
log(`${slug}: ${complete ? 'plan written' : 'plan agent failed'}`)
return { slug, complete, plan }
