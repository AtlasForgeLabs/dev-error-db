---
title: "Claude Code API Outage Burns Tokens on Weekly-Reset Max Plan — No Refund Mechanism"
description: "Recover or get refunded for tokens consumed during API outage on Claude Code Max plan Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code API outage burned ~1M tokens on weekly-reset account — tokens do not carry over"
common_causes:
  - "Claude Code Max ($200/month) has weekly token resets that don't carry over. During API outages, failed requests still consume tokens. Users lose ~1M tokens permanently with no recourse."
  - "User reports ~1M tokens burned on failed requests during 2026-05-14 API outage. Weekly reset is next day, so tokens are permanently lost. Multi-task subagent session interrupted. No refund or token restoration mechanism exists."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code token consumption during outage"
  - "Claude Code Max plan weekly reset token loss"
  - "Anthropic API outage token billing"
updated: "2026-05-15"
published_at: "2026-05-15T02:13:21.451Z"
updated_at: "2026-05-15T02:13:21.451Z"
---

## What this error means

`Claude Code API outage burned ~1M tokens on weekly-reset account — tokens do not carry over` is a Claude Code failure pattern reported for developers trying to recover or get refunded for tokens consumed during api outage on claude code max plan. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

User reports ~1M tokens burned on failed requests during 2026-05-14 API outage. Weekly reset is next day, so tokens are permanently lost. Multi-task subagent session interrupted. No refund or token restoration mechanism exists.

## Common causes

- Claude Code Max ($200/month) has weekly token resets that don't carry over. During API outages, failed requests still consume tokens. Users lose ~1M tokens permanently with no recourse.
- User reports ~1M tokens burned on failed requests during 2026-05-14 API outage. Weekly reset is next day, so tokens are permanently lost. Multi-task subagent session interrupted. No refund or token restoration mechanism exists.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code API outage burned ~1M tokens on weekly-reset account — tokens do not carry over`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/anthropics/claude-code/issues/59286

Evidence note: User reports ~1M tokens burned on failed requests during 2026-05-14 API outage. Weekly reset is next day, so tokens are permanently lost. Multi-task subagent session interrupted. No refund or token restoration mechanism exists.

## Related errors

- Claude Code token consumption during outage
- Claude Code Max plan weekly reset token loss
- Anthropic API outage token billing

## FAQ

### What should I check first?

Start with the exact `Claude Code API outage burned ~1M tokens on weekly-reset account — tokens do not carry over` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code API outage burned ~1M tokens on weekly-reset account — tokens do not carry over`.
