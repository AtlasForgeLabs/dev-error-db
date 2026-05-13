---
title: "Copilot Chat Agent Freezes VS Code During Replace String in File"
description: "Fix VS Code freezing when Copilot Chat Agent gets stuck during Replace String in File operation Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "VS Code freezes at 'Evaluating' / 'Replace String in File' during Copilot Chat Agent editing"
common_causes:
  - "Copilot Chat Agent (paid) with Claude Sonnet 4.6 freezes VS Code during multi-file editing operations. The editor becomes completely unresponsive, requiring a restart and losing unsaved work."
  - "Issue (2026-05-12) reports Copilot Chat Agent in VS Code 1.119.1 freezes the editor during 'Replace String in File' / 'Evaluating' phase. Editor becomes completely unresponsive; logs unavailable due to freeze. Using Claude Sonnet 4.6 model."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "VS Code unresponsive during AI code editing"
  - "Copilot Agent stuck in evaluating state"
updated: "2026-05-13"
published_at: "2026-05-13T03:13:15.476Z"
updated_at: "2026-05-13T03:13:15.476Z"
---

## What this error means

`VS Code freezes at 'Evaluating' / 'Replace String in File' during Copilot Chat Agent editing` is a GitHub Copilot failure pattern reported for developers trying to fix vs code freezing when copilot chat agent gets stuck during replace string in file operation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue (2026-05-12) reports Copilot Chat Agent in VS Code 1.119.1 freezes the editor during 'Replace String in File' / 'Evaluating' phase. Editor becomes completely unresponsive; logs unavailable due to freeze. Using Claude Sonnet 4.6 model.

## Common causes

- Copilot Chat Agent (paid) with Claude Sonnet 4.6 freezes VS Code during multi-file editing operations. The editor becomes completely unresponsive, requiring a restart and losing unsaved work.
- Issue (2026-05-12) reports Copilot Chat Agent in VS Code 1.119.1 freezes the editor during 'Replace String in File' / 'Evaluating' phase. Editor becomes completely unresponsive; logs unavailable due to freeze. Using Claude Sonnet 4.6 model.

## Quick fixes

1. Confirm the exact error signature matches `VS Code freezes at 'Evaluating' / 'Replace String in File' during Copilot Chat Agent editing`.
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

- https://github.com/microsoft/vscode/issues/316136

Evidence note: Issue (2026-05-12) reports Copilot Chat Agent in VS Code 1.119.1 freezes the editor during 'Replace String in File' / 'Evaluating' phase. Editor becomes completely unresponsive; logs unavailable due to freeze. Using Claude Sonnet 4.6 model.

## Related errors

- VS Code unresponsive during AI code editing
- Copilot Agent stuck in evaluating state

## FAQ

### What should I check first?

Start with the exact `VS Code freezes at 'Evaluating' / 'Replace String in File' during Copilot Chat Agent editing` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `VS Code freezes at 'Evaluating' / 'Replace String in File' during Copilot Chat Agent editing`.
