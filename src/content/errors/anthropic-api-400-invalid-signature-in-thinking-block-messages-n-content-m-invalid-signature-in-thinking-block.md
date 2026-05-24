---
title: "Anthropic API returns 400 'Invalid signature in thinking block' with no recovery path"
description: "Fix broken multi-turn conversation when extended thinking signatures invalidate mid-session on Claude Sonnet/Opus 4.x Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "400: Invalid `signature` in `thinking` block — messages.N.content.M: Invalid `signature` in `thinking` block"
common_causes:
  - "GitHub issue #1598 on anthropics/anthropic-sdk-python (created 2026-05-23). Reproducible on claude-sonnet-4-6/claude-opus-4 with 20+ turn conversations using extended thinking. Each subsequent message fails permanently once triggered. Paid API usage affected; no documented recovery path. Category mapping: direct Anthropic API contract error → Anthropic API."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-24"
published_at: "2026-05-24T23:43:12.082Z"
updated_at: "2026-05-24T23:43:12.082Z"
---

## What this error means

`400: Invalid `signature` in `thinking` block — messages.N.content.M: Invalid `signature` in `thinking` block` is a Anthropic API failure pattern reported for developers trying to fix broken multi-turn conversation when extended thinking signatures invalidate mid-session on claude sonnet/opus 4.x. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #1598 on anthropics/anthropic-sdk-python (created 2026-05-23). Reproducible on claude-sonnet-4-6/claude-opus-4 with 20+ turn conversations using extended thinking. Each subsequent message fails permanently once triggered. Paid API usage affected; no documented recovery path. Category mapping: direct Anthropic API contract error → Anthropic API.

## Common causes

- GitHub issue #1598 on anthropics/anthropic-sdk-python (created 2026-05-23). Reproducible on claude-sonnet-4-6/claude-opus-4 with 20+ turn conversations using extended thinking. Each subsequent message fails permanently once triggered. Paid API usage affected; no documented recovery path. Category mapping: direct Anthropic API contract error → Anthropic API.

## Quick fixes

1. Confirm the exact error signature matches `400: Invalid `signature` in `thinking` block — messages.N.content.M: Invalid `signature` in `thinking` block`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1598

Evidence note: GitHub issue #1598 on anthropics/anthropic-sdk-python (created 2026-05-23). Reproducible on claude-sonnet-4-6/claude-opus-4 with 20+ turn conversations using extended thinking. Each subsequent message fails permanently once triggered. Paid API usage affected; no documented recovery path. Category mapping: direct Anthropic API contract error → Anthropic API.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `400: Invalid `signature` in `thinking` block — messages.N.content.M: Invalid `signature` in `thinking` block` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `400: Invalid `signature` in `thinking` block — messages.N.content.M: Invalid `signature` in `thinking` block`.
