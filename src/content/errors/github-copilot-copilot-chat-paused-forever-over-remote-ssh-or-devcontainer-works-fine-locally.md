---
title: "GitHub Copilot Chat Not Working Over Remote SSH / DevContainer in VSCode"
description: "Fix GitHub Copilot chat that stops working when connected via SSH remote or devcontainer in VSCode Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Copilot chat paused forever over remote (SSH or devcontainer). Works fine locally."
common_causes:
  - "Copilot chat works locally but pauses indefinitely when the user is on a remote dev session via SSH or a devcontainer. The AI appears to attempt file read/edit operations but nothing shows in the chat debug tab. This blocks remote development workflows that rely on Copilot assistance."
  - "VSCode issue #316127 (May 2026, Bug). Copilot chat pauses forever on remote dev sessions (SSH/devcontainer) while working locally. User suspects file read/edit failures in remote context."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Copilot chat remote SSH timeout"
  - "Copilot devcontainer not responding"
updated: "2026-05-12"
published_at: "2026-05-12T22:12:18.799Z"
updated_at: "2026-05-12T22:12:18.799Z"
---

## What this error means

`Copilot chat paused forever over remote (SSH or devcontainer). Works fine locally.` is a GitHub Copilot failure pattern reported for developers trying to fix github copilot chat that stops working when connected via ssh remote or devcontainer in vscode. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

VSCode issue #316127 (May 2026, Bug). Copilot chat pauses forever on remote dev sessions (SSH/devcontainer) while working locally. User suspects file read/edit failures in remote context.

## Common causes

- Copilot chat works locally but pauses indefinitely when the user is on a remote dev session via SSH or a devcontainer. The AI appears to attempt file read/edit operations but nothing shows in the chat debug tab. This blocks remote development workflows that rely on Copilot assistance.
- VSCode issue #316127 (May 2026, Bug). Copilot chat pauses forever on remote dev sessions (SSH/devcontainer) while working locally. User suspects file read/edit failures in remote context.

## Quick fixes

1. Confirm the exact error signature matches `Copilot chat paused forever over remote (SSH or devcontainer). Works fine locally.`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/microsoft/vscode/issues/316127

Evidence note: VSCode issue #316127 (May 2026, Bug). Copilot chat pauses forever on remote dev sessions (SSH/devcontainer) while working locally. User suspects file read/edit failures in remote context.

## Related errors

- Copilot chat remote SSH timeout
- Copilot devcontainer not responding

## FAQ

### What should I check first?

Start with the exact `Copilot chat paused forever over remote (SSH or devcontainer). Works fine locally.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Copilot chat paused forever over remote (SSH or devcontainer). Works fine locally.`.
