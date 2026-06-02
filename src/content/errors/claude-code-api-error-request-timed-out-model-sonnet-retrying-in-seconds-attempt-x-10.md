---
title: "Claude Code API Error: Request Timed Out Continuously (attempt x/10)"
description: "Claude Code users get continuous request timeout errors during normal usage; pressing escape doesn't stop error messages, counts to attempt 10/10 then stops trying entirely Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: Request timed out. /model sonnet — Retrying in .. seconds.. (attempt x/10)"
common_causes:
  - "GitHub Issue #2728 reports Claude Code CLI v1.0.35 getting persistent 'Request timed out' errors for both Opus and Sonnet models. Escape key doesn't help, requires restarting session. Occurs without network connectivity issues. Suggests server-side throttling or connection pooling bug. Category: AI Coding Tools per mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T23:44:31.150Z"
updated_at: "2026-06-02T23:44:31.150Z"
---

## What this error means

`API Error: Request timed out. /model sonnet — Retrying in .. seconds.. (attempt x/10)` is a Claude Code failure pattern reported for developers trying to claude code users get continuous request timeout errors during normal usage; pressing escape doesn't stop error messages, counts to attempt 10/10 then stops trying entirely. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #2728 reports Claude Code CLI v1.0.35 getting persistent 'Request timed out' errors for both Opus and Sonnet models. Escape key doesn't help, requires restarting session. Occurs without network connectivity issues. Suggests server-side throttling or connection pooling bug. Category: AI Coding Tools per mapping.

## Common causes

- GitHub Issue #2728 reports Claude Code CLI v1.0.35 getting persistent 'Request timed out' errors for both Opus and Sonnet models. Escape key doesn't help, requires restarting session. Occurs without network connectivity issues. Suggests server-side throttling or connection pooling bug. Category: AI Coding Tools per mapping.

## Quick fixes

1. Confirm the exact error signature matches `API Error: Request timed out. /model sonnet — Retrying in .. seconds.. (attempt x/10)`.
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

- https://github.com/anthropics/claude-code/issues/2728

Evidence note: GitHub Issue #2728 reports Claude Code CLI v1.0.35 getting persistent 'Request timed out' errors for both Opus and Sonnet models. Escape key doesn't help, requires restarting session. Occurs without network connectivity issues. Suggests server-side throttling or connection pooling bug. Category: AI Coding Tools per mapping.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: Request timed out. /model sonnet — Retrying in .. seconds.. (attempt x/10)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: Request timed out. /model sonnet — Retrying in .. seconds.. (attempt x/10)`.
