#!/usr/bin/env python3
"""Summarise wave 1 from the kept results and the batch outputs.

Writes results/leads.json (every checked candidate with both checks), results/summary.json
(per-country counts, shadow comparison, costs) and prints the tables used in RESULTS.md.
Usage: analyze.py
"""
import collections
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SESSION = '/root/.claude/projects/-home-user-mini-ChatGpt/83ddc1dd-9006-579e-93b4-ae08dc2b4128'
SCRATCH = '/tmp/claude-0/-home-user-mini-ChatGpt/83ddc1dd-9006-579e-93b4-ae08dc2b4128/scratchpad'
sys.path.insert(0, HERE)
sys.path.insert(0, os.path.join(HERE, '..', '..', 'skills', 'parallel-subagents', 'scripts'))
sys.path.insert(0, os.path.join(SCRATCH, 'tools'))
import wave_state  # noqa: E402
from measure_usage import measure, family, PRICES  # noqa: E402
from wave_spend import output_estimate  # noqa: E402

FIRST_RUNS = ['wf_72ea3a8b-f88', 'wf_35f571e6-088', 'wf_dfde082a-cca', 'wf_fbbf6702-7f9', 'wf_4344d832-562']
POP = {'large': 45, 'medium': 76, 'small': 33}   # countries left after the pilot six and this wave
CLOSED = 19                                       # closed markets, not sampled


def batch_rows():
    """The finished row for each country from the batch outputs."""
    rows = {}
    for p in glob.glob(f'{SESSION}/workflows/wf_*.json'):
        res = json.load(open(p)).get('result')
        if isinstance(res, dict) and 'batch' in res:
            for c in res['countries']:
                if c.get('complete'):
                    rows[c['id']] = c
    return rows


def candidates(kept, it):
    """Rebuild the candidate ids the batch script assigned."""
    parts = ['ALL'] if it['stratum'] == 'small' else ['A', 'B']
    srcs = [('discover', p) for p in parts] + [('gapfill', 'GAPS')] + ([('shadow', p) for p in parts] if it['shadow'] else [])
    out = {}
    for tag, part in srcs:
        label = f'gapfill:{it["id"]}' if tag == 'gapfill' else f'{tag}:{part}:{it["id"]}'
        for j, c in enumerate((kept.get(label) or {}).get('candidates', [])):
            out[f"{'S' if tag == 'shadow' else ''}{part}{j + 1}"] = {**c, 'src': tag}
    return out


def agent_costs():
    """Cost per agent across every wave run, split into first-run junk and batch work."""
    rows = []
    for d in glob.glob(f'{SESSION}/subagents/workflows/wf_*'):
        run = os.path.basename(d)
        if run == wave_state.RECALL_TEST or not os.path.exists(f'{d}/journal.jsonl'):
            continue
        labels = {}
        for line in open(f'{d}/journal.jsonl'):
            j = json.loads(line)
            if j.get('type') == 'started':
                labels[j['agentId']] = j['label']
        for p in glob.glob(f'{d}/agent-*.jsonl'):
            aid = os.path.basename(p)[6:-6]
            m = measure(p)
            fam = family(m['model']) or 'sonnet'
            cost = m['input_cost_usd'] + m['search_fees_usd'] + output_estimate(p) * PRICES[fam][4] / 1e6
            n, blocked = wave_state.searches(p)
            label = labels.get(aid, '?')
            rows.append({'run': run, 'label': label, 'base': label.split('@')[0], 'model': fam, 'cost': cost,
                         'searches': n, 'blocked': blocked, 'first': run in FIRST_RUNS})
    return rows


def main():
    kept, _ = wave_state.collect()
    groups = json.load(open(os.path.join(HERE, 'groups.json')))
    meta = {it['id']: it for g in groups for it in g}
    rows = batch_rows()
    leads, per_country = [], []
    for slug, it in meta.items():
        row = rows.get(slug)
        cands = candidates(kept, it)
        tri = {d['id']: d for d in (kept.get(f'triage:{slug}') or {}).get('decisions', [])}
        per_country.append({'slug': slug, 'name': it['name'], 'tier': it['stratum'], 'complete': bool(row),
                            'candidates': len(cands), 'finals': (row or {}).get('finals', {}),
                            'unverified_by_cap': len((row or {}).get('checks', {}).get('unverifiedByCap', []))})
        for cid, c in cands.items():
            first = kept.get(f'opus:{slug}:{cid}') or kept.get(f'escalate:{slug}:{cid}')
            son = kept.get(f'sonnet:{slug}:{cid}')
            ch = kept.get(f'challenge:{slug}:{cid}')
            if not (first or son):
                continue
            final = next((x['final'] for x in (row or {}).get('leads', []) if x['id'] == cid), None)
            if final is None:
                v = first or son
                final = 'refuted' if v.get('verdict') == 'refuted' else ('below_4' if (v.get('suggested_score') or 0) < 4 else 'unverifiable')
            leads.append({'country': it['name'], 'tier': it['stratum'], 'id': cid, 'src': c['src'], 'mark': c.get('known_mark'),
                          'name': c['name'], 'buyer': c.get('buyer'), 'trigger': c.get('trigger'), 'provisional': c.get('score'),
                          'sonnet': (son or {}).get('suggested_score'), 'opus': (first or {}).get('suggested_score'),
                          'opus_verdict': (first or {}).get('verdict'), 'challenge': (ch or {}).get('suggested_score'),
                          'challenge_verdict': (ch or {}).get('verdict'), 'final': final,
                          'duty': (first or son or {}).get('duty'), 'market': (first or son or {}).get('market'),
                          'competitor': (first or son or {}).get('competitor'), 'killer': (ch or {}).get('killer'),
                          'reason': (first or son or {}).get('reason'), 'challenge_reason': (ch or {}).get('reason'),
                          'sources': (first or son or {}).get('sources'), 'challenge_sources': (ch or {}).get('sources'),
                          'triage': (tri.get(cid) or {}).get('decision')})
    os.makedirs(os.path.join(HERE, 'results'), exist_ok=True)
    json.dump(leads, open(os.path.join(HERE, 'results', 'leads.json'), 'w'), indent=1, ensure_ascii=False)

    # Shadow comparison: high vs medium discovery on the same four countries.
    shadow = {}
    for slug, it in meta.items():
        if not it['shadow']:
            continue
        cands = candidates(kept, it)
        tri = {d['id']: d for d in (kept.get(f'triage:{slug}') or {}).get('decisions', [])}
        out = {}
        for tag in ('discover', 'shadow'):
            ledgers = [kept.get(f'{tag}:{p}:{slug}') or {} for p in ('A', 'B')]
            screened = {wave_state.re.match(r'\s*(\d+)', c['category']).group(1) if wave_state.re.match(r'\s*(\d+)', c['category']) else c['category']
                        for l in ledgers for c in l.get('coverage', []) if c['status'] == 'screened'}
            c3 = [c for k, c in cands.items() if c['src'] == tag and (c.get('score') or 0) >= 3 and c.get('status') != 'rejected']
            out[tag] = {'categories_screened': len(screened), 'candidates_3plus': len(c3), 'searches': sum(l.get('searches') or 0 for l in ledgers)}
        merged_into = collections.defaultdict(list)
        for cid, d in tri.items():
            if d.get('decision') == 'merge' and cid.startswith('S'):
                merged_into[d.get('ref')].append(cid)
        ver = [l for l in leads if l['country'] == it['name'] and l['final'] == 'verified_4']
        out['verified'] = [{'id': l['id'], 'src': l['src'], 'medium_found': l['src'] == 'shadow' or bool(merged_into.get(l['id']))} for l in ver]
        shadow[slug] = out

    costs = agent_costs()
    junk = sum(r['cost'] for r in costs if r['first'] and (r['blocked'] or (r['searches'] == 0 and r['base'].split(':')[0] not in ('critic', 'triage'))))
    useful = [r for r in costs if not (r['first'] and (r['blocked'] or (r['searches'] == 0 and r['base'].split(':')[0] not in ('critic', 'triage'))))]
    by_stage, by_country = collections.Counter(), collections.Counter()
    for r in useful:
        kind = r['base'].split(':')[0]
        by_stage[f"{kind}/{r['model']}"] += r['cost']
        by_country[wave_state.slug_of(r['base'])] += r['cost']
    tier_cost = collections.defaultdict(list)
    tier_leads = collections.defaultdict(list)
    for c in per_country:
        if c['complete']:
            tier_cost[c['tier']].append(by_country[c['slug']])
            tier_leads[c['tier']].append(c['finals'].get('verified_4', 0))
    summary = {'countries': per_country, 'shadow': shadow,
               'cost': {'total_all_agents': round(sum(r['cost'] for r in costs), 2), 'junk_first_runs': round(junk, 2),
                        'useful': round(sum(r['cost'] for r in useful), 2),
                        'by_stage': {k: round(v, 2) for k, v in by_stage.most_common()},
                        'by_country': {k: round(v, 2) for k, v in by_country.most_common()},
                        'searches_useful': sum(r['searches'] for r in useful)},
               'tiers': {t: {'countries': len(tier_cost[t]), 'cost_per_country': round(sum(tier_cost[t]) / len(tier_cost[t]), 2),
                             'verified_per_country': round(sum(tier_leads[t]) / len(tier_leads[t]), 2)} for t in tier_cost}}
    full_cost = sum(summary['tiers'][t]['cost_per_country'] * POP[t] for t in summary['tiers'])
    full_leads = sum(summary['tiers'][t]['verified_per_country'] * POP[t] for t in summary['tiers'])
    summary['extrapolation'] = {'remaining_countries': sum(POP.values()), 'cost_usd': round(full_cost), 'verified_leads': round(full_leads, 1)}
    json.dump(summary, open(os.path.join(HERE, 'results', 'summary.json'), 'w'), indent=1, ensure_ascii=False)

    fin = collections.Counter(l['final'] for l in leads)
    print('finals over all checked candidates:', dict(fin))
    print('\nVERIFIED / DISPUTED / REFUTED ON CHALLENGE')
    for l in sorted(leads, key=lambda x: (x['final'] != 'verified_4', x['final'], -(x['opus'] or 0))):
        if l['final'] in ('verified_4', 'disputed', 'refuted_on_challenge'):
            print(f"{l['final']:21} {l['country']:13} {l['id']:6} {l['src']:8} {l['mark']:6} p{l['provisional']} o{l['opus']} c{l['challenge']} {l['challenge_verdict']}: {l['name'][:95]}")
    print('\nCOUNTRIES')
    for c in per_country:
        print(f"{c['name']:14} {c['tier']:6} {'done' if c['complete'] else 'NOT DONE':8} cands {c['candidates']:3} capped {c['unverified_by_cap']:2} ${by_country[c['slug']]:5.2f} {c['finals']}")
    print('\nSHADOW', json.dumps(shadow, indent=1))
    print('\nCOST', json.dumps(summary['cost'], indent=1))
    print('\nTIERS', json.dumps(summary['tiers'], indent=1), '\nEXTRAPOLATION', summary['extrapolation'])


if __name__ == '__main__':
    main()
