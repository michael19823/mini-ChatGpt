#!/usr/bin/env python3
"""Build wave 1 results from the Workflow journals.

Reads each run's journal.jsonl (every agent's label and returned value), rebuilds the candidate ids
the script assigned, re-applies the counting rule from README.md, and writes:
  results/<slug>.json   everything per country: coverage, candidates, triage, checks
  results/leads.json    every checked candidate with its scores and final class
  results/summary.json  counts per country, the shadow comparison, and costs if --spend is given
Usage: build_results.py --runs DIR [DIR ...] [--spend spend.json] [--out rerun/wave1/results]
"""
import argparse
import collections
import json
import os
import re

TIERS = {'large', 'medium', 'small'}


def load_journal(run_dir):
    started, results = {}, {}
    for line in open(os.path.join(run_dir, 'journal.jsonl'), encoding='utf-8'):
        j = json.loads(line)
        if j.get('type') == 'started':
            started[j['agentId']] = j
        elif j.get('type') == 'result':
            results[j['agentId']] = j.get('result')
    by_label = collections.defaultdict(list)
    for aid, s in started.items():
        by_label[s['label']].append({'agentId': aid, 'result': results.get(aid), 'done': aid in results})
    return by_label


def at_least4(v):
    return bool(v) and v.get('verdict') != 'refuted' and (v.get('suggested_score') or 0) >= 4


def final_class(sonnet, opus, challenge):
    if not opus and not sonnet:
        return 'check_failed'
    first = opus or sonnet
    if first.get('verdict') == 'refuted':
        return 'refuted'
    if not at_least4(first):
        return 'unverifiable' if first.get('verdict') == 'unverifiable' else 'below_4'
    if not opus:
        return 'escalation_failed'
    if not challenge:
        return 'single_check_4'
    if challenge.get('verdict') == 'refuted':
        return 'refuted_on_challenge'
    return 'verified_4' if challenge.get('verdict') == 'survives' and (challenge.get('suggested_score') or 0) >= 4 else 'disputed'


def last_ok(entries):
    """The last non-null result among retries of one label."""
    ok = [e['result'] for e in entries if e['result'] is not None]
    return ok[-1] if ok else None


def build_country(slug, labels):
    def get(label):
        return last_ok(labels.get(label, []))

    parts = ['ALL'] if any(l.startswith('discover:ALL:') for l in labels) else ['A', 'B']
    sources = []
    for p in parts:
        r = get(f'discover:{p}:{slug}')
        if r:
            sources.append(('discover', p, r))
    gap = get(f'gapfill:{slug}')
    if gap:
        sources.append(('gapfill', 'GAPS', gap))
    for p in parts:
        r = get(f'shadow:{p}:{slug}')
        if r:
            sources.append(('shadow', p, r))
    cands = []
    for tag, part, r in sources:
        for j, c in enumerate(r.get('candidates', [])):
            cands.append({**c, 'id': f"{'S' if tag == 'shadow' else ''}{part}{j + 1}", 'src': tag, 'part': part})
    triage = get(f'triage:{slug}')
    decisions = {d['id']: d for d in (triage or {}).get('decisions', [])}
    for c in cands:
        d = decisions.get(c['id'])
        c['triage'] = d['decision'] if d else None
        c['triage_ref'] = d.get('ref') if d else None
        c['triage_reason'] = d.get('reason') if d else None
        checks = {}
        for tag in ('opus', 'sonnet', 'escalate', 'challenge'):
            r = get(f"{tag}:{slug}:{c['id']}")
            if r:
                checks[tag] = r
        c['checks'] = checks
        if checks:
            opus = checks.get('opus') or checks.get('escalate')
            c['final'] = final_class(checks.get('sonnet'), opus, checks.get('challenge'))
    pending = [l for l, es in labels.items() if l.endswith(slug) or f':{slug}:' in l for e in es if not e['done']]
    return {
        'slug': slug,
        'sources': [{'src': tag, 'part': part, 'searches': r.get('searches'), 'fetches': r.get('fetches'),
                     'queries': r.get('queries', []), 'coverage': r.get('coverage', [])} for tag, part, r in sources],
        'critic': get(f'critic:{slug}'),
        'triage_ok': triage is not None,
        'candidates': cands,
        'pending_agents': sorted(set(pending)),
    }


def cat_num(c):
    m = re.match(r'\s*(\d+)', c or '')
    return int(m.group(1)) if m else None


def shadow_compare(country):
    """High vs medium discovery on the same country: categories screened and candidates scored 3+."""
    out = {}
    for tag in ('discover', 'shadow'):
        srcs = [s for s in country['sources'] if s['src'] == tag]
        screened = {cat_num(c['category']) or c['category'] for s in srcs for c in s['coverage'] if c['status'] == 'screened'}
        c3 = [c for c in country['candidates'] if c['src'] == tag and (c.get('score') or 0) >= 3 and c.get('status') != 'rejected']
        out[tag] = {'categories_screened': len(screened), 'candidates_3plus': len(c3),
                    'searches': sum(s['searches'] or 0 for s in srcs)}
    # Verified leads from high discovery, and whether a shadow candidate was merged into them.
    leads = [c for c in country['candidates'] if c['src'] == 'discover' and c.get('final') == 'verified_4']
    shadow_ids_into = collections.defaultdict(list)
    for c in country['candidates']:
        if c['src'] == 'shadow' and c['triage'] == 'merge' and c['triage_ref']:
            shadow_ids_into[c['triage_ref']].append(c['id'])
    out['high_verified'] = [{'id': c['id'], 'name': c['name'], 'medium_found': bool(shadow_ids_into.get(c['id']))} for c in leads]
    out['medium_only_verified'] = [{'id': c['id'], 'name': c['name']} for c in country['candidates']
                                   if c['src'] == 'shadow' and c.get('final') == 'verified_4']
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--runs', nargs='+', required=True)
    ap.add_argument('--groups', default=os.path.join(os.path.dirname(__file__), 'groups.json'))
    ap.add_argument('--spend', help='JSON rows from wave_spend.py --json')
    ap.add_argument('--out', default=os.path.join(os.path.dirname(__file__), 'results'))
    a = ap.parse_args()
    meta = {it['id']: it for g in json.load(open(a.groups)) for it in g}
    labels = collections.defaultdict(dict)
    for d in a.runs:
        for label, entries in load_journal(d).items():
            slug = label.split(':')[2] if label.split(':')[0] in ('discover', 'shadow') else label.split(':')[1]
            labels[slug][label] = labels[slug].get(label, []) + entries
    os.makedirs(a.out, exist_ok=True)
    summary, leads = [], []
    for slug in meta:
        c = build_country(slug, labels.get(slug, {}))
        json.dump(c, open(os.path.join(a.out, f'{slug}.json'), 'w'), indent=1, ensure_ascii=False)
        cands = c['candidates']
        row = {'slug': slug, 'name': meta[slug]['name'], 'tier': meta[slug]['stratum'],
               'searches': sum(s['searches'] or 0 for s in c['sources']),
               'categories_screened': len({cat_num(x['category']) or x['category'] for s in c['sources'] if s['src'] != 'shadow'
                                           for x in s['coverage'] if x['status'] == 'screened'}),
               'candidates': len(cands), 'marks': dict(collections.Counter(x.get('known_mark') for x in cands)),
               'triage': dict(collections.Counter(x['triage'] for x in cands if x['triage'])),
               'checked': sum(1 for x in cands if x['checks']),
               'finals': dict(collections.Counter(x['final'] for x in cands if x.get('final'))),
               'pending_agents': len(c['pending_agents'])}
        if meta[slug]['shadow']:
            row['shadow'] = shadow_compare(c)
        summary.append(row)
        for x in cands:
            if x['checks']:
                ch = x['checks']
                first = ch.get('opus') or ch.get('escalate')
                leads.append({'country': meta[slug]['name'], 'tier': meta[slug]['stratum'], 'id': x['id'], 'src': x['src'],
                              'name': x['name'], 'buyer': x.get('buyer'), 'trigger': x.get('trigger'), 'mark': x.get('known_mark'),
                              'known_id': x.get('known_id'), 'provisional': x.get('score'),
                              'sonnet': (ch.get('sonnet') or {}).get('suggested_score'),
                              'opus': (first or {}).get('suggested_score'), 'opus_verdict': (first or {}).get('verdict'),
                              'challenge': (ch.get('challenge') or {}).get('suggested_score'),
                              'challenge_verdict': (ch.get('challenge') or {}).get('verdict'),
                              'final': x.get('final'), 'checks': ch})
    json.dump(leads, open(os.path.join(a.out, 'leads.json'), 'w'), indent=1, ensure_ascii=False)
    out = {'countries': summary}
    if a.spend:
        rows = json.load(open(a.spend))
        cost = lambda r: r['input_usd'] + r['search_usd'] + r['output_usd_est']
        by_phase, by_country = collections.Counter(), collections.Counter()
        for r in rows:
            by_phase[f"{r['phase']}/{r['model']}"] += cost(r)
            bits = r['label'].split(':')
            slug = bits[2] if bits[0] in ('discover', 'shadow') else (bits[1] if len(bits) > 1 else '?')
            by_country[slug] += cost(r)
        out['cost'] = {'total': round(sum(by_phase.values()), 2), 'by_phase': {k: round(v, 2) for k, v in by_phase.most_common()},
                       'by_country': {k: round(v, 2) for k, v in by_country.most_common()}}
        shadow_cost = sum(cost(r) for r in rows if r['label'].startswith('shadow:'))
        out['cost']['shadow_discovery'] = round(shadow_cost, 2)
        out['cost']['high_discovery_in_shadow_countries'] = round(sum(cost(r) for r in rows if r['label'].startswith('discover:')
                                                                      and r['label'].split(':')[2] in {s for s in meta if meta[s]['shadow']}), 2)
    json.dump(out, open(os.path.join(a.out, 'summary.json'), 'w'), indent=1, ensure_ascii=False)
    finals = collections.Counter(l['final'] for l in leads)
    print(f"countries {len(summary)}, checked {len(leads)}, finals {dict(finals)}")
    for l in leads:
        if l['final'] in ('verified_4', 'disputed', 'single_check_4'):
            print(f"  {l['final']:15} {l['country']:13} {l['id']:6} p{l['provisional']} s{l['sonnet']} o{l['opus']} c{l['challenge']}  {l['name'][:90]}")


if __name__ == '__main__':
    main()
