---
title: "Claude Code Excessive Token Consumption Bug (v2.1.139)"
description: "Fix Claude Code consuming excessive tokens/cost for simple tasks Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "€450 consumed in under 24 hours — €50 exhausted creating 4-5 markdown files in a clean empty workspace"
common_causes:
  - "Developers on Claude Code Max plan report unexpectedly high token consumption — €450 in 24 hours for minimal work. This is a paid product billing issue with direct financial impact, driving urgent searches."
  - "User on Claude Code v2.1.139 (Max plan + Extra Usage) consumed €450 in 24h. Third charge of €50 nearly exhausted in a brand-new empty workspace by creating 4-5 small markdown files. Related issues #42272, #17740, #13569, #11716 report similar regressions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code background processes cause infinite token exhaustion"
  - "Claude Code token consumption spiked after version update"
updated: "2026-05-12"
published_at: "2026-05-12T16:12:17.260Z"
updated_at: "2026-05-12T16:12:17.260Z"
---

## What this error means

`€450 consumed in under 24 hours — €50 exhausted creating 4-5 markdown files in a clean empty workspace` is a Claude Code failure pattern reported for developers trying to fix claude code consuming excessive tokens/cost for simple tasks. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

User on Claude Code v2.1.139 (Max plan + Extra Usage) consumed €450 in 24h. Third charge of €50 nearly exhausted in a brand-new empty workspace by creating 4-5 small markdown files. Related issues #42272, #17740, #13569, #11716 report similar regressions.

## Common causes

- Developers on Claude Code Max plan report unexpectedly high token consumption — €450 in 24 hours for minimal work. This is a paid product billing issue with direct financial impact, driving urgent searches.
- User on Claude Code v2.1.139 (Max plan + Extra Usage) consumed €450 in 24h. Third charge of €50 nearly exhausted in a brand-new empty workspace by creating 4-5 small markdown files. Related issues #42272, #17740, #13569, #11716 report similar regressions.

## Quick fixes

1. Confirm the exact error signature matches `€450 consumed in under 24 hours — €50 exhausted creating 4-5 markdown files in a clean empty workspace`.
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

- https://github.com/anthropics/claude-code/issues/58396

Evidence note: User on Claude Code v2.1.139 (Max plan + Extra Usage) consumed €450 in 24h. Third charge of €50 nearly exhausted in a brand-new empty workspace by creating 4-5 small markdown files. Related issues #42272, #17740, #13569, #11716 report similar regressions.

## Related errors

- Claude Code background processes cause infinite token exhaustion
- Claude Code token consumption spiked after version update

## FAQ

### What should I check first?

Start with the exact `€450 consumed in under 24 hours — €50 exhausted creating 4-5 markdown files in a clean empty workspace` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `€450 consumed in under 24 hours — €50 exhausted creating 4-5 markdown files in a clean empty workspace`.
