---
title: "Claude Code context limit hard-stop miscalibrated at ~30% of 1M window on Opus 4.7"
description: "Fix Claude Code context limit reaching hard-stop prematurely at 30% of reported 1M token window Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Context limit reached · /compact or /clear to continue (hard-stop at ~30% of 1M window)"
common_causes:
  - "Claude Code shows 'Context limit reached' at ~300K tokens when the model supports 1M context. Users on Max plan paying for extended context get blocked unexpectedly during long sessions."
  - "Bug report with reproduction steps: Claude Code 2.1.141, model claude-opus-4-7[1m], DISABLE_AUTO_COMPACT=1. Context hard-stops at ~300K tokens instead of expected ~870K. Distinct from auto-compact trigger fixed in 2.1.117."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Claude Code auto-compact triggering too early"
  - "Claude Code /compact command not working"
  - "OpenAI API context length exceeded"
updated: "2026-05-14"
published_at: "2026-05-14T23:13:21.053Z"
updated_at: "2026-05-14T23:13:21.053Z"
---

## What this error means

`Context limit reached · /compact or /clear to continue (hard-stop at ~30% of 1M window)` is a Claude Code failure pattern reported for developers trying to fix claude code context limit reaching hard-stop prematurely at 30% of reported 1m token window. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug report with reproduction steps: Claude Code 2.1.141, model claude-opus-4-7[1m], DISABLE_AUTO_COMPACT=1. Context hard-stops at ~300K tokens instead of expected ~870K. Distinct from auto-compact trigger fixed in 2.1.117.

## Common causes

- Claude Code shows 'Context limit reached' at ~300K tokens when the model supports 1M context. Users on Max plan paying for extended context get blocked unexpectedly during long sessions.
- Bug report with reproduction steps: Claude Code 2.1.141, model claude-opus-4-7[1m], DISABLE_AUTO_COMPACT=1. Context hard-stops at ~300K tokens instead of expected ~870K. Distinct from auto-compact trigger fixed in 2.1.117.

## Quick fixes

1. Confirm the exact error signature matches `Context limit reached · /compact or /clear to continue (hard-stop at ~30% of 1M window)`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

## Platform/tool-specific checks

- Verify the command, editor, extension, or API client that produced the error.
- Compare local settings with CI, deployment, or editor-level settings when the error appears in only one environment.
- Avoid deleting credentials, local model data, or project settings until the failing scope is clear.

## Step-by-step troubleshooting

1. Capture the exact error message and the command, editor action, or request that triggered it.
2. Check whether the failure is account/auth, quota/rate, model/provider, local runtime, or deployment configuration.
3. Review the source evidence below and compare it with your environment.
4. Apply one change at a time and rerun the smallest failing action.
5. Keep the working fix documented for the team or deployment environment.

## How to prevent it

- Keep provider/tool configuration documented.
- Record non-secret diagnostics such as tool version, provider name, model name, and command path.
- Add a lightweight check before CI or production workflows depend on the tool.

## Sources checked

- https://github.com/anthropics/claude-code/issues/59232

Evidence note: Bug report with reproduction steps: Claude Code 2.1.141, model claude-opus-4-7[1m], DISABLE_AUTO_COMPACT=1. Context hard-stops at ~300K tokens instead of expected ~870K. Distinct from auto-compact trigger fixed in 2.1.117.

## Related errors

- Claude Code auto-compact triggering too early
- Claude Code /compact command not working
- OpenAI API context length exceeded

## FAQ

### What should I check first?

Start with the exact `Context limit reached · /compact or /clear to continue (hard-stop at ~30% of 1M window)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Context limit reached · /compact or /clear to continue (hard-stop at ~30% of 1M window)`.
