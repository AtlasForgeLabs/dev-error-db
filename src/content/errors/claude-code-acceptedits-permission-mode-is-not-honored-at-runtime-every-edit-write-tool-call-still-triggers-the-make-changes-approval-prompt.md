---
title: "Claude Code VSCode: acceptEdits / Edit Automatically Mode Still Prompts for Approval (Regression)"
description: "Fix Claude Code VSCode extension ignoring the 'Edit automatically' permission mode setting and still prompting for every edit approval Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "acceptEdits permission mode is not honored at runtime. Every Edit / Write tool call still triggers the 'Make changes?' approval prompt"
common_causes:
  - "Developers configure the VSCode extension dropdown to 'Edit automatically' (acceptEdits mode) to streamline their workflow, but every Edit/Write tool call still triggers an approval prompt. This regression has persisted since v2.1.79, defeating the purpose of the setting for users relying on auto-mode for productivity."
  - "GitHub issue #58504 (May 2026, labels: bug, regression, area:permissions). The acceptEdits permission mode selected in VSCode extension is not honored at runtime. Regression persists since v2.1.79."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code permission mode not working VSCode"
  - "Claude Code auto-edit prompt still showing"
updated: "2026-05-12"
published_at: "2026-05-12T22:12:18.799Z"
updated_at: "2026-05-12T22:12:18.799Z"
---

## What this error means

`acceptEdits permission mode is not honored at runtime. Every Edit / Write tool call still triggers the 'Make changes?' approval prompt` is a Claude Code failure pattern reported for developers trying to fix claude code vscode extension ignoring the 'edit automatically' permission mode setting and still prompting for every edit approval. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58504 (May 2026, labels: bug, regression, area:permissions). The acceptEdits permission mode selected in VSCode extension is not honored at runtime. Regression persists since v2.1.79.

## Common causes

- Developers configure the VSCode extension dropdown to 'Edit automatically' (acceptEdits mode) to streamline their workflow, but every Edit/Write tool call still triggers an approval prompt. This regression has persisted since v2.1.79, defeating the purpose of the setting for users relying on auto-mode for productivity.
- GitHub issue #58504 (May 2026, labels: bug, regression, area:permissions). The acceptEdits permission mode selected in VSCode extension is not honored at runtime. Regression persists since v2.1.79.

## Quick fixes

1. Confirm the exact error signature matches `acceptEdits permission mode is not honored at runtime. Every Edit / Write tool call still triggers the 'Make changes?' approval prompt`.
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

- https://github.com/anthropics/claude-code/issues/58504

Evidence note: GitHub issue #58504 (May 2026, labels: bug, regression, area:permissions). The acceptEdits permission mode selected in VSCode extension is not honored at runtime. Regression persists since v2.1.79.

## Related errors

- Claude Code permission mode not working VSCode
- Claude Code auto-edit prompt still showing

## FAQ

### What should I check first?

Start with the exact `acceptEdits permission mode is not honored at runtime. Every Edit / Write tool call still triggers the 'Make changes?' approval prompt` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `acceptEdits permission mode is not honored at runtime. Every Edit / Write tool call still triggers the 'Make changes?' approval prompt`.
