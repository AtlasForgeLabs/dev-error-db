---
title: "Claude Code hangs indefinitely on first message — startup quota_check API never completes"
description: "Developer starts Claude Code terminal session and enters a message but the app hangs forever showing a 'thinking' cursor; debug logs reveal a startup quota check call to /v1/messages that never returns, blocking all subsequent API interactions Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[DEBUG] [API REQUEST] /v1/messages source=quota_check — no response logged; app wedged waiting on uncompleted quota check; user types 'hello' but UI shows thinking spinner with zero API requests made"
common_causes:
  - "GitHub Issue #49563 in anthropics/claude-code: Claude Code version 2.1.112 on macOS, regression from previous version. User confirmed reproducible, tried claude auth logout/login, rm -rf ~/.local/bin/claude, etc. Debug log shows the key stuck line: '[DEBUG] [API REQUEST] /v1/messages ... source=quota_check' followed by zero user-message submissions. Category: AI Coding Tools. Blocks paying users from any Claude Code interaction until restart."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T17:44:24.981Z"
updated_at: "2026-05-31T17:44:24.981Z"
---

## What this error means

`[DEBUG] [API REQUEST] /v1/messages source=quota_check — no response logged; app wedged waiting on uncompleted quota check; user types 'hello' but UI shows thinking spinner with zero API requests made` is a Claude Code failure pattern reported for developers trying to developer starts claude code terminal session and enters a message but the app hangs forever showing a 'thinking' cursor; debug logs reveal a startup quota check call to /v1/messages that never returns, blocking all subsequent api interactions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #49563 in anthropics/claude-code: Claude Code version 2.1.112 on macOS, regression from previous version. User confirmed reproducible, tried claude auth logout/login, rm -rf ~/.local/bin/claude, etc. Debug log shows the key stuck line: '[DEBUG] [API REQUEST] /v1/messages ... source=quota_check' followed by zero user-message submissions. Category: AI Coding Tools. Blocks paying users from any Claude Code interaction until restart.

## Common causes

- GitHub Issue #49563 in anthropics/claude-code: Claude Code version 2.1.112 on macOS, regression from previous version. User confirmed reproducible, tried claude auth logout/login, rm -rf ~/.local/bin/claude, etc. Debug log shows the key stuck line: '[DEBUG] [API REQUEST] /v1/messages ... source=quota_check' followed by zero user-message submissions. Category: AI Coding Tools. Blocks paying users from any Claude Code interaction until restart.

## Quick fixes

1. Confirm the exact error signature matches `[DEBUG] [API REQUEST] /v1/messages source=quota_check — no response logged; app wedged waiting on uncompleted quota check; user types 'hello' but UI shows thinking spinner with zero API requests made`.
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

- https://github.com/anthropics/claude-code/issues/49563

Evidence note: GitHub Issue #49563 in anthropics/claude-code: Claude Code version 2.1.112 on macOS, regression from previous version. User confirmed reproducible, tried claude auth logout/login, rm -rf ~/.local/bin/claude, etc. Debug log shows the key stuck line: '[DEBUG] [API REQUEST] /v1/messages ... source=quota_check' followed by zero user-message submissions. Category: AI Coding Tools. Blocks paying users from any Claude Code interaction until restart.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[DEBUG] [API REQUEST] /v1/messages source=quota_check — no response logged; app wedged waiting on uncompleted quota check; user types 'hello' but UI shows thinking spinner with zero API requests made` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[DEBUG] [API REQUEST] /v1/messages source=quota_check — no response logged; app wedged waiting on uncompleted quota check; user types 'hello' but UI shows thinking spinner with zero API requests made`.
