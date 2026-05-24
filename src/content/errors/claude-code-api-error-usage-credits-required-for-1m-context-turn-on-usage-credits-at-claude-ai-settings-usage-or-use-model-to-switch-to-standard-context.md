---
title: "Claude Code incorrectly requires 1M context credits on Pro plan — falls back to pay-as-you-go"
description: "Fix Pro plan users being forced into pay-as-you-go billing for models that should use included context window Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: Usage credits required for 1M context · turn on usage credits at claude.ai/settings/usage, or use --model to switch to standard context"
common_causes:
  - "Claude Code Desktop (v2.1.150) incorrectly assumes Sonnet 4.6 needs 1M context window even when on Pro plan that covers 200K. Users are shown pay-as-you-go prompt despite being on subscription plan. High commercial value as it triggers unexpected billing. Category: AI Coding Tools."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T19:43:11.544Z"
updated_at: "2026-05-24T19:43:11.544Z"
---

## What this error means

`API Error: Usage credits required for 1M context · turn on usage credits at claude.ai/settings/usage, or use --model to switch to standard context` is a Claude Code failure pattern reported for developers trying to fix pro plan users being forced into pay-as-you-go billing for models that should use included context window. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code Desktop (v2.1.150) incorrectly assumes Sonnet 4.6 needs 1M context window even when on Pro plan that covers 200K. Users are shown pay-as-you-go prompt despite being on subscription plan. High commercial value as it triggers unexpected billing. Category: AI Coding Tools.

## Common causes

- Claude Code Desktop (v2.1.150) incorrectly assumes Sonnet 4.6 needs 1M context window even when on Pro plan that covers 200K. Users are shown pay-as-you-go prompt despite being on subscription plan. High commercial value as it triggers unexpected billing. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `API Error: Usage credits required for 1M context · turn on usage credits at claude.ai/settings/usage, or use --model to switch to standard context`.
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

- https://github.com/anthropics/claude-code/issues/62068

Evidence note: Claude Code Desktop (v2.1.150) incorrectly assumes Sonnet 4.6 needs 1M context window even when on Pro plan that covers 200K. Users are shown pay-as-you-go prompt despite being on subscription plan. High commercial value as it triggers unexpected billing. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: Usage credits required for 1M context · turn on usage credits at claude.ai/settings/usage, or use --model to switch to standard context` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: Usage credits required for 1M context · turn on usage credits at claude.ai/settings/usage, or use --model to switch to standard context`.
