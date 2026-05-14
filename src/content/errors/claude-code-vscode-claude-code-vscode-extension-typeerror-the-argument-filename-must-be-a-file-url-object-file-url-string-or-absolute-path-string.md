---
title: "Claude Code VSCode Extension 2.1.129 Fails to Activate with TypeError on file URL"
description: "Fix Claude Code extension activation TypeError after updating to version 2.1.129 Includes evidence for Claude Code / VSCode troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code / VSCode"
error_signature: "Claude Code VSCode extension TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string"
common_causes:
  - "Version 2.1.129 breaks extension activation on Windows with hardcoded Linux path reference. Users forced to downgrade to 2.1.28."
  - "Extension host logs show: TypeError: The argument 'filename' must be a file URL object. Path references /home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs which doesn't exist on Windows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code extension not loading"
  - "Claude Code ENOENT"
updated: "2026-05-14"
published_at: "2026-05-14T20:13:20.740Z"
updated_at: "2026-05-14T20:13:20.740Z"
---

## What this error means

`Claude Code VSCode extension TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string` is a Claude Code / VSCode failure pattern reported for developers trying to fix claude code extension activation typeerror after updating to version 2.1.129. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Extension host logs show: TypeError: The argument 'filename' must be a file URL object. Path references /home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs which doesn't exist on Windows.

## Common causes

- Version 2.1.129 breaks extension activation on Windows with hardcoded Linux path reference. Users forced to downgrade to 2.1.28.
- Extension host logs show: TypeError: The argument 'filename' must be a file URL object. Path references /home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs which doesn't exist on Windows.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code VSCode extension TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string`.
2. Check the Claude Code / VSCode account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1502

Evidence note: Extension host logs show: TypeError: The argument 'filename' must be a file URL object. Path references /home/runner/work/claude-cli-internal/claude-cli-internal/build-agent-sdk/sdk.mjs which doesn't exist on Windows.

## Related errors

- Claude Code extension not loading
- Claude Code ENOENT

## FAQ

### What should I check first?

Start with the exact `Claude Code VSCode extension TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code / VSCode workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code VSCode extension TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string`.
