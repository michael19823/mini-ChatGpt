#!/usr/bin/env python3
"""Write deep/DEEP.md: all deep-search verdicts, best first, from deep/results/*.json and deep/leads.json.
Usage: summary.py
"""
import collections
import glob
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
clip = lambda s, n=220: (lambda t: t[:n].replace('|', '/') + ('...' if len(t) > n else ''))(' '.join((s or '').split()))
leads = {l['slug']: l for l in json.load(open(os.path.join(HERE, 'leads.json')))}
res = [r for f in sorted(glob.glob(os.path.join(HERE, 'results', '*.json'))) for r in json.load(open(f))['results']]
res.sort(key=lambda r: (-(r.get('score') or 0), leads[r['slug']]['country']))
v = collections.Counter(r.get('verdict', 'error') for r in res)
md = ['# Wave 2 deep search', '',
      f"One Opus agent per strong lead ({len(res)} of {len(leads)}), up to 20 searches each; full reports in `reports/`.", '',
      f"Verdicts: go {v['go']}, maybe {v['maybe']}, no-go {v['no-go']}." + (f" Errors {v['error']}." if v['error'] else ''), '',
      '| Score | Verdict | Country | Idea | Case | Buyers | Top alternative | Biggest risk |', '|---|---|---|---|---|---|---|---|']
for r in res:
    l = leads[r['slug']]
    md.append(f"| {r.get('score', '-')} | {r.get('verdict', 'error')} | {l['country']} | [{clip(l['name'], 90)}](reports/{r['slug']}.md) | "
              f"{clip(r.get('one_line'))} | {clip(r.get('buyers'), 160)} | {clip(r.get('top_competitor'), 140)} | {clip(r.get('killer'), 160)} |")
open(os.path.join(HERE, 'DEEP.md'), 'w').write('\n'.join(md) + '\n')
print(dict(v)); [print(r.get('score'), r.get('verdict'), r['slug']) for r in res[:12]]
