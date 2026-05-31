---
title: "Claude Code Headless Mode Breaks AskUserQuestion Handling — Model Continues on Assumptions"
description: "Fix Claude Code headless mode where interactive questions bypass the expected pause-and-wait behavior, causing the model to make wrong assumptions Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[BUG] Headless mode (-p --output-format stream-json) breaks AskUserQuestion handling — model continues on assumptions instead of stopping"
common_causes:
  - "GitHub issue #64265 on anthropics/claude-code, opened Jun 1 2026. Tagged api:anthropic + area:cli + bug + has repro + regression. Affects automated CI/CD workflows and headless agent setups. Model proceeds incorrectly without user confirmation — potential for destructive actions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-31"
published_at: "2026-05-31T18:44:25.057Z"
updated_at: "2026-05-31T18:44:25.057Z"
---

## What this error means

`[BUG] Headless mode (-p --output-format stream-json) breaks AskUserQuestion handling — model continues on assumptions instead of stopping` is a Claude Code failure pattern reported for developers trying to fix claude code headless mode where interactive questions bypass the expected pause-and-wait behavior, causing the model to make wrong assumptions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #64265 on anthropics/claude-code, opened Jun 1 2026. Tagged api:anthropic + area:cli + bug + has repro + regression. Affects automated CI/CD workflows and headless agent setups. Model proceeds incorrectly without user confirmation — potential for destructive actions.

## Common causes

- GitHub issue #64265 on anthropics/claude-code, opened Jun 1 2026. Tagged api:anthropic + area:cli + bug + has repro + regression. Affects automated CI/CD workflows and headless agent setups. Model proceeds incorrectly without user confirmation — potential for destructive actions.

## Quick fixes

1. Confirm the exact error signature matches `[BUG] Headless mode (-p --output-format stream-json) breaks AskUserQuestion handling — model continues on assumptions instead of stopping`.
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

- https://github.com/anthropics/claude-code/issues/64265

Evidence note: GitHub issue #64265 on anthropics/claude-code, opened Jun 1 2026. Tagged api:anthropic + area:cli + bug + has repro + regression. Affects automated CI/CD workflows and headless agent setups. Model proceeds incorrectly without user confirmation — potential for destructive actions.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[BUG] Headless mode (-p --output-format stream-json) breaks AskUserQuestion handling — model continues on assumptions instead of stopping` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[BUG] Headless mode (-p --output-format stream-json) breaks AskUserQuestion handling — model continues on assumptions instead of stopping`.
