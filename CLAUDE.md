# CLAUDE.md

## Skill routing and precedence

This environment loads several skill sets that overlap: Anthropic org skills, the superpowers plugin, the Parallel Web Systems plugin and the Playwright plugin. These rules settle the conflicts between them. superpowers itself says CLAUDE.md overrides skills, so these rules win over any skill text.

### Cloud session constraints (override superpowers)
- Work on the designated session branch only. Do not create worktrees or new branches, whether through `using-git-worktrees`, `EnterWorktree` or `git worktree add`. The fresh cloud checkout is already isolated.
- `finishing-a-development-branch`: do not run its 3-option menu. Commit and push to the designated branch, then stop. Do not merge locally, do not delete branches and do not open a PR unless the user explicitly asks.
- Keep approval gates light, because the user often follows from a phone.
  - `brainstorming`: batch questions into one message and present the design in one pass. Do not ask for approval section by section.
  - Use the bounded path unless the change is architectural.
  - Do not use the visual companion (its localhost server can't be reached from outside the container).
- Specs and plans go in the scratchpad, not in `docs/superpowers/`. Commit them only if the user asks.
- After `writing-plans`, default to inline execution (`executing-plans`). writing-plans calls this option "Native", other skills call it "inline", and they mean the same thing. Use `subagent-driven-development` only for large plans.
- Pushing to the designated branch is expected and does not need a stop-and-ask.

### Code review
- For a final review, use the built-in `/code-review`. Use superpowers `requesting-code-review` only inside an SDD run. Don't run both on the same diff.
- When diffing a multi-commit branch, use the merge-base with the default branch as the review base, not `HEAD~1`.
- Run `simplify` only when the user asks for it. It must not widen a bug-fix diff (superpowers says "no while-I'm-here changes").
- Run `security-review` before pushing changes that touch auth, input handling or secrets.

### Subagents
- `parallel-subagents` (Anthropic) is the authority on briefing, model choice and verification when fanning out. `dispatching-parallel-agents` is the short version of the same idea.
- Always set the model explicitly. Parallel agents that write code need disjoint file sets. Otherwise run them one at a time, as SDD does.
- Never use the agent type `parallel:parallel-subagent` for fan-out. It belongs to the Parallel Web plugin, can only run `parallel-cli`, and `parallel-cli` is not installed.

### Web research
- For lookups, use the built-in `WebSearch`/`WebFetch` or the `mcp__plugin_parallel_parallel-search__web_search`/`web_fetch` tools. The Parallel MCP tools are keyless but rate-limited (HTTP 429). Fall back to `WebSearch` when that happens.
- For "research X and write a report", use Anthropic `deep-research`, with subagents on an explicit model.
- `parallel-deep-research`, `parallel-findall`, `parallel-monitor`, `parallel-data-enrichment`, `parallel-web-search` and `parallel-web-extract` need `parallel-cli` plus a Parallel account, and neither is set up here. Use them only when the user asks for Parallel by name, after `/parallel:parallel-cli-setup`.

### Skill authoring
- Use `skill-creator` (evals and description tuning) as the main process. Borrow the "watch it fail without the skill first" baseline from superpowers `writing-skills`.
- For descriptions, follow skill-creator: say what the skill does and when to use it. Ignore writing-skills' "only when-to-use" rule.

### Documents and browser
- By default, documents go through `docs`. Use `pdf`, `docx`, `xlsx` or `pptx` only when the user names that file format or provides such a file.
- `pptx` from scratch: run `npm install pptxgenjs` first, because it is not preinstalled despite what the skill says.
- `pdf` forms: run `pip install pdf2image` first.
- `built-in-browser`, `chrome-browser` and `computer-use` do not work in the cloud container. Use the Playwright MCP tools (`mcp__plugin_playwright_playwright__*`) for any browser task, and don't ask the user to connect Chrome. If Playwright can't find a browser, use the Chromium at `/opt/pw-browsers/chromium`.
- `google-workspace`, `morning` and `import-memory` need connectors or memory tools that this environment doesn't have. Say so instead of improvising.
