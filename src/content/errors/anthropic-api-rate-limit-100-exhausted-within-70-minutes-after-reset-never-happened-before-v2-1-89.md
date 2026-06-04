---
title: "Max 20 Plan Rate Limit Exhausted Within ~70 Minutes After Reset"
description: "Fix abnormally fast rate limit exhaustion on Claude Code Max 20 plan after update — rate limit window resets but is immediately depleted again Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "rate limit 100% exhausted within ~70 minutes after reset (never happened before v2.1.89)"
common_causes:
  - "GitHub anthropics/claude-code#41788 — Specific regression introduced in v2.1.89 where rate limits deplete much faster than before. 59 comments indicating widespread user impact. High commercial value for Max plan subscribers. Recently updated Jun 4 2026."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-06-04"
published_at: "2026-06-04T06:44:35.095Z"
updated_at: "2026-06-04T06:44:35.095Z"
---

## What this error means

`rate limit 100% exhausted within ~70 minutes after reset (never happened before v2.1.89)` is a Anthropic API failure pattern reported for developers trying to fix abnormally fast rate limit exhaustion on claude code max 20 plan after update — rate limit window resets but is immediately depleted again. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/claude-code#41788 — Specific regression introduced in v2.1.89 where rate limits deplete much faster than before. 59 comments indicating widespread user impact. High commercial value for Max plan subscribers. Recently updated Jun 4 2026.

## Common causes

- GitHub anthropics/claude-code#41788 — Specific regression introduced in v2.1.89 where rate limits deplete much faster than before. 59 comments indicating widespread user impact. High commercial value for Max plan subscribers. Recently updated Jun 4 2026.

## Quick fixes

1. Confirm the exact error signature matches `rate limit 100% exhausted within ~70 minutes after reset (never happened before v2.1.89)`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/41788

Evidence note: GitHub anthropics/claude-code#41788 — Specific regression introduced in v2.1.89 where rate limits deplete much faster than before. 59 comments indicating widespread user impact. High commercial value for Max plan subscribers. Recently updated Jun 4 2026.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `rate limit 100% exhausted within ~70 minutes after reset (never happened before v2.1.89)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `rate limit 100% exhausted within ~70 minutes after reset (never happened before v2.1.89)`.
