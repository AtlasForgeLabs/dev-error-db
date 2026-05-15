---
title: "Claude Code excessive quota consumption — 0% to 36% in 12 minutes on Max plan"
description: "Fix Claude Code Max plan consuming quota too fast, excessive token usage per session Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Excessive quota consumption: session goes from 0% to 36% of quota in 12 minutes during normal usage"
common_causes:
  - "GitHub issue #59437 reports Claude Code on Max plan consumes 36% of quota in just 12 minutes of normal usage. User on CLI 2.1.142, Opus 4.6 pinned, high effort. Category mapped to AI Coding Tools — this is a billing/quota impact issue on a paid subscription service."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-15"
published_at: "2026-05-15T17:13:23.103Z"
updated_at: "2026-05-15T17:13:23.103Z"
---

## What this error means

`Excessive quota consumption: session goes from 0% to 36% of quota in 12 minutes during normal usage` is a Claude Code failure pattern reported for developers trying to fix claude code max plan consuming quota too fast, excessive token usage per session. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #59437 reports Claude Code on Max plan consumes 36% of quota in just 12 minutes of normal usage. User on CLI 2.1.142, Opus 4.6 pinned, high effort. Category mapped to AI Coding Tools — this is a billing/quota impact issue on a paid subscription service.

## Common causes

- GitHub issue #59437 reports Claude Code on Max plan consumes 36% of quota in just 12 minutes of normal usage. User on CLI 2.1.142, Opus 4.6 pinned, high effort. Category mapped to AI Coding Tools — this is a billing/quota impact issue on a paid subscription service.

## Quick fixes

1. Confirm the exact error signature matches `Excessive quota consumption: session goes from 0% to 36% of quota in 12 minutes during normal usage`.
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

- https://github.com/anthropics/claude-code/issues/59437

Evidence note: GitHub issue #59437 reports Claude Code on Max plan consumes 36% of quota in just 12 minutes of normal usage. User on CLI 2.1.142, Opus 4.6 pinned, high effort. Category mapped to AI Coding Tools — this is a billing/quota impact issue on a paid subscription service.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Excessive quota consumption: session goes from 0% to 36% of quota in 12 minutes during normal usage` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Excessive quota consumption: session goes from 0% to 36% of quota in 12 minutes during normal usage`.
