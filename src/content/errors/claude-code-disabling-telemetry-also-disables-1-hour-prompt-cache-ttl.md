---
title: "Claude Code: Telemetry Setting Silently Disables Cache TTL"
description: "Fix Claude Code cache not working when telemetry is disabled Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Disabling telemetry also disables 1-hour prompt cache TTL"
common_causes:
  - "Privacy-conscious users who disable telemetry discover their prompt cache stops working, causing massive cost increases without explanation"
  - "167 reactions. Disabling telemetry silently breaks cache TTL. Users pay significantly more without knowing why."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code cache TTL regression"
  - "Claude Code quota exhausted unexpectedly"
updated: "2026-05-15"
published_at: "2026-05-15T04:13:21.645Z"
updated_at: "2026-05-15T04:13:21.645Z"
---

## What this error means

`Disabling telemetry also disables 1-hour prompt cache TTL` is a Claude Code failure pattern reported for developers trying to fix claude code cache not working when telemetry is disabled. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

167 reactions. Disabling telemetry silently breaks cache TTL. Users pay significantly more without knowing why.

## Common causes

- Privacy-conscious users who disable telemetry discover their prompt cache stops working, causing massive cost increases without explanation
- 167 reactions. Disabling telemetry silently breaks cache TTL. Users pay significantly more without knowing why.

## Quick fixes

1. Confirm the exact error signature matches `Disabling telemetry also disables 1-hour prompt cache TTL`.
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

- https://github.com/anthropics/claude-code/issues/45381

Evidence note: 167 reactions. Disabling telemetry silently breaks cache TTL. Users pay significantly more without knowing why.

## Related errors

- Claude Code cache TTL regression
- Claude Code quota exhausted unexpectedly

## FAQ

### What should I check first?

Start with the exact `Disabling telemetry also disables 1-hour prompt cache TTL` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Disabling telemetry also disables 1-hour prompt cache TTL`.
