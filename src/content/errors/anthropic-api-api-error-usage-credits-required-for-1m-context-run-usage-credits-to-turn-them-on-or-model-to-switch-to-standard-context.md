---
title: "Claude Code Max 20x plan users cannot access Opus + 1M context — gets \"Usage credits required\" error"
description: "Fix 'Usage credits required for 1M context' error in Claude Code CLI for Max 20x subscribers who should already have Opus model + 1M context included Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "API Error: Usage credits required for 1M context · run /usage-credits to turn them on, or /model to switch to standard context"
common_causes:
  - "GitHub anthropics/claude-code#64953 (open Jun 3, 2026). Max 20x paid subscribers switching to Opus 4.7/4.8 models via /model get API error requiring additional usage credits payment. Sonnet 4.6 works fine. Comment confirms $35.28/$200 usage tracking incorrectly applied. This is a clear billing/subscription edge case directly impacting enterprise paying users. Duplicate label present but still valid distinct error signature. Category: Anthropic API — subscription billing + quota edge case on paid tier."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-06-03"
published_at: "2026-06-03T06:44:32.021Z"
updated_at: "2026-06-03T06:44:32.021Z"
---

## What this error means

`API Error: Usage credits required for 1M context · run /usage-credits to turn them on, or /model to switch to standard context` is a Anthropic API failure pattern reported for developers trying to fix 'usage credits required for 1m context' error in claude code cli for max 20x subscribers who should already have opus model + 1m context included. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/claude-code#64953 (open Jun 3, 2026). Max 20x paid subscribers switching to Opus 4.7/4.8 models via /model get API error requiring additional usage credits payment. Sonnet 4.6 works fine. Comment confirms $35.28/$200 usage tracking incorrectly applied. This is a clear billing/subscription edge case directly impacting enterprise paying users. Duplicate label present but still valid distinct error signature. Category: Anthropic API — subscription billing + quota edge case on paid tier.

## Common causes

- GitHub anthropics/claude-code#64953 (open Jun 3, 2026). Max 20x paid subscribers switching to Opus 4.7/4.8 models via /model get API error requiring additional usage credits payment. Sonnet 4.6 works fine. Comment confirms $35.28/$200 usage tracking incorrectly applied. This is a clear billing/subscription edge case directly impacting enterprise paying users. Duplicate label present but still valid distinct error signature. Category: Anthropic API — subscription billing + quota edge case on paid tier.

## Quick fixes

1. Confirm the exact error signature matches `API Error: Usage credits required for 1M context · run /usage-credits to turn them on, or /model to switch to standard context`.
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

- https://github.com/anthropics/claude-code/issues/64953

Evidence note: GitHub anthropics/claude-code#64953 (open Jun 3, 2026). Max 20x paid subscribers switching to Opus 4.7/4.8 models via /model get API error requiring additional usage credits payment. Sonnet 4.6 works fine. Comment confirms $35.28/$200 usage tracking incorrectly applied. This is a clear billing/subscription edge case directly impacting enterprise paying users. Duplicate label present but still valid distinct error signature. Category: Anthropic API — subscription billing + quota edge case on paid tier.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `API Error: Usage credits required for 1M context · run /usage-credits to turn them on, or /model to switch to standard context` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: Usage credits required for 1M context · run /usage-credits to turn them on, or /model to switch to standard context`.
