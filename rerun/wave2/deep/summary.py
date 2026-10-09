#!/usr/bin/env python3
"""Write deep/DEEP.md: the re-assessment (owner's criteria, results/r*.json) ranked best first,
with the first deep pass (results/d*.json) for comparison.
Usage: summary.py
"""
import collections
import glob
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
clip = lambda s, n=220: (lambda t: t[:n].replace('|', '/') + ('...' if len(t) > n else ''))(' '.join((s or '').split()))
leads = {l['slug']: l for l in json.load(open(os.path.join(HERE, 'leads.json')))}
load = lambda pat: {r['slug']: r for f in sorted(glob.glob(os.path.join(HERE, 'results', pat))) for r in json.load(open(f))['results']}
first, review = load('d*.json'), load('r*.json')
rows = sorted(review.values(), key=lambda r: (-(r.get('score') or 0), leads[r['slug']]['country']))
v = collections.Counter(r.get('verdict', 'error') for r in rows)
md = ['# Wave 2 deep search', '',
      f"Two Opus passes per strong lead ({len(rows)} of {len(leads)}); full reports in `reports/`, re-assessment at the top of each.",
      '', 'Re-assessment criteria (the owner\'s): a free state portal is not a reason to reject, the question is what software can add;',
      'a few hundred or thousand buyers can be enough if the product is easy to implement and priced right;',
      'an existing local product is checked for whether it really does the job and is reasonably priced.', '',
      f"Verdicts after re-assessment: go {v['go']}, maybe {v['maybe']}, no-go {v['no-go']}.", '',
      '| Score | Was | Verdict | Country | Idea | Case | Year-3 revenue | Ease | Competitors checked |', '|---|---|---|---|---|---|---|---|---|']
for r in rows:
    l = leads[r['slug']]
    md.append(f"| {r.get('score', '-')} | {(first.get(r['slug']) or {}).get('score', '-')} | {r.get('verdict', 'error')} | {l['country']} | "
              f"[{clip(l['name'], 90)}](reports/{r['slug']}.md) | {clip(r.get('one_line'))} | {clip(r.get('revenue'), 200)} | "
              f"{clip(r.get('ease'), 120)} | {clip(r.get('competitor_check'), 180)} |")
open(os.path.join(HERE, 'DEEP.md'), 'w').write('\n'.join(md) + '\n')
print(dict(v))
for r in rows[:15]:
    print(r.get('score'), r.get('verdict'), r['slug'], '|', clip(r.get('revenue'), 110))
