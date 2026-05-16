---
title: "Claude Code Session Unrecoverable After Upstream 429 — Every Retry Returns 400"
description: "Fix Claude Code session that becomes unrecoverable after a rate limit (429) error Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Session unrecoverable after upstream 429: every retry returns 400 previous"
common_causes:
  - "GitHub claude-code#59520 (2026-05-15) with reproduction. After hitting upstream 429, all subsequent retries return 400 with stale message reference. Category mapping: Claude Code → AI Coding Tools."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T07:13:24.884Z"
updated_at: "2026-05-16T07:13:24.884Z"
---

## What this error means

`Session unrecoverable after upstream 429: every retry returns 400 previous` is a Claude Code failure pattern reported for developers trying to fix claude code session that becomes unrecoverable after a rate limit (429) error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub claude-code#59520 (2026-05-15) with reproduction. After hitting upstream 429, all subsequent retries return 400 with stale message reference. Category mapping: Claude Code → AI Coding Tools.

## Common causes

- GitHub claude-code#59520 (2026-05-15) with reproduction. After hitting upstream 429, all subsequent retries return 400 with stale message reference. Category mapping: Claude Code → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Session unrecoverable after upstream 429: every retry returns 400 previous`.
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

- https://github.com/anthropics/claude-code/issues/59520

Evidence note: GitHub claude-code#59520 (2026-05-15) with reproduction. After hitting upstream 429, all subsequent retries return 400 with stale message reference. Category mapping: Claude Code → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Session unrecoverable after upstream 429: every retry returns 400 previous` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Session unrecoverable after upstream 429: every retry returns 400 previous`.
