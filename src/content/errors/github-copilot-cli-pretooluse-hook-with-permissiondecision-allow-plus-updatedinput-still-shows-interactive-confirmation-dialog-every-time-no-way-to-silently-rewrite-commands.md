---
title: "preToolUse: silent command rewrite via updatedInput — confirmation dialog appears even with permissionDecision: allow"
description: "Enable preToolUse hooks to silently rewrite commands without triggering user confirmation dialogs, important for proxy/auto-rewrite automation workflows Includes evidence for GitHub Copilot CLI troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot CLI"
error_signature: "preToolUse hook with permissionDecision: allow + updatedInput still shows interactive confirmation dialog every time; no way to silently rewrite commands"
common_causes:
  - "Source: github.com/github/copilot-cli/issues/2643. Users installing preToolUse hooks to auto-prefix commands (e.g., proxy prefix) cannot suppress the confirmation dialog, blocking fully automated agent-driven command execution. Confirmed on Copilot CLI v1.0.24+"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-25"
published_at: "2026-05-25T22:43:15.060Z"
updated_at: "2026-05-25T22:43:15.060Z"
---

## What this error means

`preToolUse hook with permissionDecision: allow + updatedInput still shows interactive confirmation dialog every time; no way to silently rewrite commands` is a GitHub Copilot CLI failure pattern reported for developers trying to enable pretooluse hooks to silently rewrite commands without triggering user confirmation dialogs, important for proxy/auto-rewrite automation workflows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: github.com/github/copilot-cli/issues/2643. Users installing preToolUse hooks to auto-prefix commands (e.g., proxy prefix) cannot suppress the confirmation dialog, blocking fully automated agent-driven command execution. Confirmed on Copilot CLI v1.0.24+

## Common causes

- Source: github.com/github/copilot-cli/issues/2643. Users installing preToolUse hooks to auto-prefix commands (e.g., proxy prefix) cannot suppress the confirmation dialog, blocking fully automated agent-driven command execution. Confirmed on Copilot CLI v1.0.24+

## Quick fixes

1. Confirm the exact error signature matches `preToolUse hook with permissionDecision: allow + updatedInput still shows interactive confirmation dialog every time; no way to silently rewrite commands`.
2. Check the GitHub Copilot CLI account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/github/copilot-cli/issues/2643

Evidence note: Source: github.com/github/copilot-cli/issues/2643. Users installing preToolUse hooks to auto-prefix commands (e.g., proxy prefix) cannot suppress the confirmation dialog, blocking fully automated agent-driven command execution. Confirmed on Copilot CLI v1.0.24+

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `preToolUse hook with permissionDecision: allow + updatedInput still shows interactive confirmation dialog every time; no way to silently rewrite commands` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot CLI workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `preToolUse hook with permissionDecision: allow + updatedInput still shows interactive confirmation dialog every time; no way to silently rewrite commands`.
