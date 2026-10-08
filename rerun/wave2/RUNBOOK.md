# Wave 2 runbook

This file is for the Claude Code session that runs wave 2. The user chose to run it from a fresh
session, with large countries first and small ones last, and to pause at their weekly usage limit
and resume after it resets. Follow these steps exactly; don't redesign the pipeline.

## What wave 2 is

The remaining 156 countries (`countries.json`, in run order), put through wave 1's pipeline
unchanged: wave 1's prompts (`rerun/wave1/contract.md`, `rerun/wave1/prompts.md`), batch logic
(`rerun/wave1/batch_template.js`), models, efforts and caps. Read `rerun/wave1/RESULTS.md` once
for context. Don't change prompts, models, efforts, caps or the counting rule. Leads are graded
(strong, likely, possible), as in wave 1's "Less strict view".

Constraints that shape every step:

- **Web search cap**: Claude Code allows 200 WebSearch calls per turn, shared by every agent
  launched in that turn. Each batch stays under 190, so **launch at most one batch per turn**, and
  launch it in the turn that starts from a scheduled message, the heartbeat or the user.
- **State lives in git**: `state.py` saves every clean result to `state/`. Commit and push `state/`
  after every batch, so a container restart loses at most one batch.
- **Usage**: about $620 of agent usage in total (wave 1's measured cost per country). The user's
  usage credits are off, so a usage limit pauses the run instead of charging money. Keep your own
  turns short: one or two tool calls and a one-line message.

## Tools

- `python3 rerun/wave2/state.py --status`: collects results, saves `state/`, prints progress,
  whether a batch is running, and how many results the last batch kept.
- `python3 rerun/wave2/state.py --script <PATH>`: the same, plus it writes the next batch script
  to PATH and prints an `ARGS {...}` line (only when no batch is running).
- `python3 rerun/wave2/state.py --launched <RUN_ID> <TAG>`: records a launched batch.
- `python3 rerun/wave2/report.py`: writes `RESULTS.md` and `LONGLIST.md` from `state/`.

## First turn

1. Run `state.py --status`.
2. Launch this bootstrap inline with the Workflow tool. It runs no agents; it only creates the
   script file that every batch then overwrites. Note the "Script file" path it prints: that is
   SCRIPT below.

   ```js
   export const meta = {
     name: 'country-wave-batch',
     description: 'Wave 2 bootstrap: creates the script file that each batch overwrites (no agents)',
     phases: [{ title: 'Discover' }],
   }
   log('bootstrap only: no agents')
   return 'ok'
   ```

3. Do "Launch a batch" below.
4. Create one recurring heartbeat with `create_trigger`: cron `0 * * * *` (hourly), bound to this
   session (no `persistent_session_id`, `create_new_session_on_fire` false),
   `initiation: human_request`, name "Wave 2 heartbeat", prompt: "Wave 2 heartbeat: follow the
   Heartbeat steps in rerun/wave2/RUNBOOK.md." Save its trigger id in `state/runs.json` under
   `"heartbeat"` and commit.
5. Tell the user in two lines: wave 2 started, which batch is running, and that progress lines
   will follow.

## Launch a batch

1. Run `state.py --script SCRIPT`. If it says a batch is running, or that it is waiting after an
   empty batch, end the turn.
2. Otherwise call Workflow with `scriptPath: SCRIPT` and `args` set to the JSON after `ARGS`,
   verbatim. Don't pass `resumeFromRunId`.
3. Run `state.py --launched <Run ID> <batch tag>`, then commit and push `state/`.

If SCRIPT is not known in this turn (a new container, a lost path), repeat the bootstrap to get a
new one.

## When a batch finishes (task notification)

1. Run `state.py --status`, then commit and push `state/` ("Wave 2: <tag> results").
2. If `remaining 0`: do "Finish".
3. If the last batch kept no results ("none: limit or outage?"), a usage limit or outage is
   likely: schedule the next turn with `send_later` in 180 minutes. Otherwise schedule it in 1
   minute. Message: "Wave 2: launch the next batch (follow 'Launch a batch' in
   rerun/wave2/RUNBOOK.md)." Use `initiation: human_request`.
4. Reply with one line: tag, countries done of 156, strong and likely leads so far, spend so far.
   After every tenth batch, add a two-line summary.

## Scheduled message or heartbeat

Run "Launch a batch". `state.py` refuses to write a script while a batch is running, and for 3
hours after a batch that kept no results, so a heartbeat during a usage limit costs one short turn.

## If something is refused or keeps failing

- **A Workflow launch is denied by the permission check**: don't retry it and don't work around it.
  Tell the user in two lines what was denied, and that they can allow it by replying "continue"
  or by adding a permission rule for Workflow in their settings. The heartbeat keeps trying
  hourly.
- **Usage limit errors**: wait. Don't launch more than one attempt per 3 hours; the heartbeat
  continues after the reset.
- **The same country stays unfinished in 3 batches running**: add its slug to `state/skip.json`
  (a JSON list), which moves it to the end of the queue; tell the user in one line and carry on.

## Finish

1. Run `report.py`, then commit and push `RESULTS.md`, `LONGLIST.md` and `state/`.
2. Delete the heartbeat trigger (`delete_trigger` with the id in `state/runs.json`).
3. Tell the user: countries done, strong and likely leads with the top ten by score, spend, and
   where the files are.
