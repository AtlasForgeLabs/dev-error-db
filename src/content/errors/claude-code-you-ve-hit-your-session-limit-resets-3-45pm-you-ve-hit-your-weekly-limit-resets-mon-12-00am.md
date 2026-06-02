---
title: "Claude Code Session Limit Reset — Usage Quota Exhaustion Errors"
description: "Understand and fix Claude Code usage quota exhaustion; buy more credits or manage rolling limits Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "You've hit your session limit · resets 3:45pm / You've hit your weekly limit · resets Mon 12:00am"
common_causes:
  - "Official Claude Code docs document three types of usage-limit errors (session limit, weekly limit, Opus limit). Users see explicit reset timestamps but confusion between usage vs context limits is rampant. Many hit limits unexpectedly due to session-resume token generation bug (GitHub #38029: 652K tokens generated without user prompts). Commercially critical — blocks paying Pro ($20/mo), Max ($100/mo), Enterprise users mid-workflow. Anthropic credit overhaul coming June 15, 2026 adds urgency."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T08:44:29.318Z"
updated_at: "2026-06-02T08:44:29.318Z"
---

## What this error means

`You've hit your session limit · resets 3:45pm / You've hit your weekly limit · resets Mon 12:00am` is a Claude Code failure pattern reported for developers trying to understand and fix claude code usage quota exhaustion; buy more credits or manage rolling limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official Claude Code docs document three types of usage-limit errors (session limit, weekly limit, Opus limit). Users see explicit reset timestamps but confusion between usage vs context limits is rampant. Many hit limits unexpectedly due to session-resume token generation bug (GitHub #38029: 652K tokens generated without user prompts). Commercially critical — blocks paying Pro ($20/mo), Max ($100/mo), Enterprise users mid-workflow. Anthropic credit overhaul coming June 15, 2026 adds urgency.

## Common causes

- Official Claude Code docs document three types of usage-limit errors (session limit, weekly limit, Opus limit). Users see explicit reset timestamps but confusion between usage vs context limits is rampant. Many hit limits unexpectedly due to session-resume token generation bug (GitHub #38029: 652K tokens generated without user prompts). Commercially critical — blocks paying Pro ($20/mo), Max ($100/mo), Enterprise users mid-workflow. Anthropic credit overhaul coming June 15, 2026 adds urgency.

## Quick fixes

1. Confirm the exact error signature matches `You've hit your session limit · resets 3:45pm / You've hit your weekly limit · resets Mon 12:00am`.
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

- https://code.claude.com/docs/en/errors
- https://github.com/anthropics/claude-code/issues/41930
- https://www.truefoundry.com/blog/claude-code-limits-explained

Evidence note: Official Claude Code docs document three types of usage-limit errors (session limit, weekly limit, Opus limit). Users see explicit reset timestamps but confusion between usage vs context limits is rampant. Many hit limits unexpectedly due to session-resume token generation bug (GitHub #38029: 652K tokens generated without user prompts). Commercially critical — blocks paying Pro ($20/mo), Max ($100/mo), Enterprise users mid-workflow. Anthropic credit overhaul coming June 15, 2026 adds urgency.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `You've hit your session limit · resets 3:45pm / You've hit your weekly limit · resets Mon 12:00am` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `You've hit your session limit · resets 3:45pm / You've hit your weekly limit · resets Mon 12:00am`.
