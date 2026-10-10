#!/usr/bin/env python3
"""Track the full deep dives on the 6/10 ideas (one Workflow run per idea, deepdive-idea.js).
Usage: deepdive.py                      status
       deepdive.py --next               print Workflow args for the next idea to launch (if a slot is free)
       deepdive.py --launched SLUG RUN  record a launch
       deepdive.py --finished SLUG OK   record a finished run (OK = 1 complete, 0 incomplete)
"""
import glob
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
F = os.path.join(HERE, 'deep-dives.json')
MAX_PARALLEL = 5


def load():
    if os.path.exists(F):
        return json.load(open(F))
    leads = {l['slug']: l for l in json.load(open(os.path.join(HERE, 'leads.json')))}
    res = [r for f in sorted(glob.glob(os.path.join(HERE, 'results', 'r*.json'))) for r in json.load(open(f))['results']]
    order = [r['slug'] for r in res if r.get('score') == 6]
    return {'max_parallel': MAX_PARALLEL, 'order': order,
            'ideas': {s: {'country': leads[s]['country'], 'idea': leads[s]['name']} for s in order},
            'runs': {}, 'status': {}}


def main():
    d = load()
    a = sys.argv[1:]
    running = [s for s, v in d['status'].items() if v == 'running']
    if a[:1] == ['--launched']:
        d['runs'].setdefault(a[1], []).append(a[2]); d['status'][a[1]] = 'running'
    elif a[:1] == ['--finished']:
        d['status'][a[1]] = 'done' if a[2] == '1' else 'incomplete'
    elif a[:1] == ['--next']:
        if len(running) >= d['max_parallel']:
            print('all slots running'); return
        todo = [s for s in d['order'] if d['status'].get(s) in (None, 'incomplete')]
        if not todo:
            print('nothing left to launch'); return
        s = todo[0]
        out = {'slug': s, **d['ideas'][s]}
        if d['runs'].get(s):
            out['resume'] = d['runs'][s][-1]
        print(json.dumps(out, ensure_ascii=False))
    json.dump(d, open(F, 'w'), ensure_ascii=False, indent=1)
    st = d['status']
    done = sum(v == 'done' for v in st.values())
    print(f"done {done}/{len(d['order'])}; running {', '.join(s for s, v in st.items() if v == 'running') or 'none'}; "
          f"incomplete {', '.join(s for s, v in st.items() if v == 'incomplete') or 'none'}")


if __name__ == '__main__':
    main()
