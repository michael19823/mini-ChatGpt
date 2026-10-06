# Opus check of revived ideas

In the competitor check, every named competitor of these ideas came back beatable, weak or
not-a-real-competitor, and each idea's need score was 7 or higher. That evidence came from fast
Sonnet agents with about 4 searches per competitor, so it may be thin. This check decides whether
each idea is really open. Today is 2026-10-06.

Your batch file gives one idea per line, with these fields:
- `ids`;
- `country`;
- `idea`;
- `need`;
- `why` (why it might be open);
- `source_text` (the original rejection);
- `source` (the country report);
- `competitor_files` (the Sonnet verdicts).

## For each idea

1. Read the source report's section on the idea, its rejection text, and every competitor file.
2. Verify with **up to 8 WebSearch calls**, searching in the local language as well as English.
   WebFetch is blocked; don't use GitHub tools.
   - **Missing competitors.** Was the triage list wrong? When the competitors came back
     "not-a-real-competitor", run a direct "<workflow> software <country>" search to look for the
     real ones. This is the most common failure.
   - **Whether the Sonnet verdicts hold.** Check the main complaint, price or gap claim on at
     least the most important competitor.
   - **Non-competitor barriers.** These include certification or homologation, a free government
     tool, a mandate that applies only to large firms, a postponed deadline, or a need for a local
     entity.
   - **Who would pay, and how much.** Name a concrete buyer and give a price anchor.
3. Re-score the brief's 10 criteria (see "Opportunity Quality Criteria" in `research/brief.md`).
   Give a one-line reason each, then an overall score out of 10.
4. Give a verdict:
   - **revived:** an open gap a small founder could win;
   - **narrow:** open only in a specific segment, which you name;
   - **still closed:** say what closes it.

Never invent competitors, prices, reviews or URLs. Mark anything you can't verify as "unverified".

## Output

Write one file per idea to `research/revisit/opus-check/<first-id>-<country>.md` with these
sections:
- verdict and score;
- what changed versus the Sonnet evidence;
- competitors (corrected list);
- barriers;
- buyer and price;
- scorecard;
- sources.

Then append one line per idea to `research/revisit/opus-check/summary_<batch>.md`:

`id | country | idea | verdict | score | one-line reason`

Commit only your files and push to `claude/subagents-parallel-research-3qanjz`. On rejection, run
`git pull --rebase` and retry. Push every ~5 ideas. Never force-push or open a PR.
