#!/usr/bin/env python3
"""Write wave 2's RESULTS.md and LONGLIST.md from the saved state (state/*.json) alone.

Leads are graded, not pass/fail (see rerun/wave1/RESULTS.md, "Less strict view"):
strong = both Opus checks 4+; likely = first Opus check 4+ and the challenge found no killer;
possible = checked, not refuted, scored 3; out = refuted with a named killer, or scored below 3.
Usage: report.py
"""
import collections
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
STATE = os.path.join(HERE, 'state')
COUNTRIES = json.load(open(os.path.join(HERE, 'countries.json')))
load = lambda name, d: json.load(open(os.path.join(STATE, name))) if os.path.exists(os.path.join(STATE, name)) else d
clip = lambda s, n=170: (lambda t: t[:n].replace('|', '/') + ('...' if len(t) > n else ''))(' '.join((s or '').split()))


def candidates(kept, c):
    parts = ['ALL'] if c['stratum'] == 'small' else ['A', 'B']
    out = {}
    for tag, part in [('discover', p) for p in parts] + [('gapfill', 'GAPS')]:
        label = f"gapfill:{c['id']}" if tag == 'gapfill' else f"{tag}:{part}:{c['id']}"
        for j, x in enumerate(((kept.get(label) or {}).get('result') or {}).get('candidates', [])):
            out[f'{part}{j + 1}'] = {**x, 'src': tag}
    return out


def main():
    rows, costs = load('rows.json', {}), load('costs.json', {})
    leads, table = [], []
    for c in COUNTRIES:
        kept = load(f"{c['id']}.json", {})
        res = lambda label: (kept.get(label) or {}).get('result')
        row = rows.get(c['id'])
        cands = candidates(kept, c)
        n_checked = 0
        for cid, x in cands.items():
            first = res(f"opus:{c['id']}:{cid}") or res(f"escalate:{c['id']}:{cid}")
            son, ch = res(f"sonnet:{c['id']}:{cid}"), res(f"challenge:{c['id']}:{cid}")
            if not (first or son):
                continue
            n_checked += 1
            v = first or son
            final = next((l['final'] for l in (row or {}).get('leads', []) if l['id'] == cid), None)
            score = v.get('suggested_score') or 0
            if final == 'verified_4':
                tier = 'strong'
            elif final == 'disputed':
                tier = 'likely'
            elif final == 'refuted_on_challenge' or v.get('verdict') == 'refuted':
                tier = 'out'
            else:
                tier = 'possible' if score >= 3 else 'out'
            leads.append({'country': c['name'], 'tier': tier, 'name': x['name'], 'first': score,
                          'challenge': f"{ch['verdict']} {ch['suggested_score']:g}" if ch else '-',
                          'why': (ch or v).get('reason')})
        t = collections.Counter(l['tier'] for l in leads if l['country'] == c['name'])
        cost = sum(v['cost'] for v in costs.values() if v['label'].split(':')[2 if v['label'].split(':')[0] in ('discover', 'shadow') else 1] == c['id'])
        table.append((c, bool(row), len(cands), n_checked, t['strong'], t['likely'], t['possible'],
                      len((row or {}).get('checks', {}).get('unverifiedByCap', [])), cost))
    tiers = collections.Counter(l['tier'] for l in leads)
    done = sum(1 for r in table if r[1])
    spend = sum(v['cost'] for v in costs.values())
    by_stage = collections.Counter()
    for v in costs.values():
        by_stage[f"{v['label'].split(':')[0]} ({v['model']})"] += v['cost']
    md = ['# Wave 2 results', '',
          f'{done} of {len(COUNTRIES)} countries complete. Same pipeline, prompts, models and caps as wave 1 '
          '(`rerun/wave1/`); leads are graded (strong, likely, possible) as in wave 1\'s "Less strict view".', '',
          '| Tier | Ideas |', '|---|---|'] + [f'| {k} | {tiers.get(k, 0)} |' for k in ('strong', 'likely', 'possible', 'out')] + [
          '', f'Agent spend recorded: about ${spend:.0f} (input exact, output estimated).', '',
          '## Strong and likely leads', '', '| Country | Tier | Idea | First check | Challenge |', '|---|---|---|---|---|']
    for l in sorted([l for l in leads if l['tier'] in ('strong', 'likely')], key=lambda l: (l['tier'], l['country'])):
        md.append(f"| {l['country']} | {l['tier']} | {clip(l['name'], 130)} | {l['first']:g} | {l['challenge']} |")
    md += ['', '## By country', '', '| Country | Tier | Done | Candidates | Checked | Strong | Likely | Possible | Unchecked by cap | Cost |',
           '|---|---|---|---|---|---|---|---|---|---|']
    for c, ok, n, chk, s, li, p, cap, cost in table:
        md.append(f"| {c['name']} | {c['stratum']} | {'yes' if ok else 'no'} | {n} | {chk} | {s} | {li} | {p} | {cap} | ${cost:.2f} |")
    md += ['', '## Spend by stage', '', '| Stage | Cost |', '|---|---|'] + [f'| {k} | ${v:.2f} |' for k, v in by_stage.most_common()]
    open(os.path.join(HERE, 'RESULTS.md'), 'w').write('\n'.join(md) + '\n')
    ll = ['# Wave 2 long list', '', 'Every checked idea by tier, with the check\'s reason (see RESULTS.md for the tier rules).', '']
    for tier in ('strong', 'likely', 'possible'):
        rows_t = sorted([l for l in leads if l['tier'] == tier], key=lambda l: (l['country'], -l['first']))
        ll += [f'## {tier.capitalize()} ({len(rows_t)})', '', '| Country | Idea | First check | Challenge | Why |', '|---|---|---|---|---|']
        ll += [f"| {l['country']} | {clip(l['name'], 120)} | {l['first']:g} | {l['challenge']} | {clip(l['why'])} |" for l in rows_t] + ['']
    open(os.path.join(HERE, 'LONGLIST.md'), 'w').write('\n'.join(ll) + '\n')
    print(f'{done}/{len(COUNTRIES)} done; tiers {dict(tiers)}; spend ${spend:.2f}; wrote RESULTS.md and LONGLIST.md')


if __name__ == '__main__':
    main()
