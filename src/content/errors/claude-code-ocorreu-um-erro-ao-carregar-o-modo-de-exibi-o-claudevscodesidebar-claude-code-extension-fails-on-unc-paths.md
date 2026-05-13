---
title: "Claude Code VS Code Extension Fails to Load on Network UNC Paths — Windows Corporate Network Fix"
description: "Fix Claude Code VS Code extension fails to load on UNC network paths Windows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Ocorreu um erro ao carregar o modo de exibição: claudeVSCodeSidebar (Claude Code Extension fails on UNC paths)"
common_causes:
  - "Claude Code extension for VS Code fails to load when opening a folder from a UNC network path (e.g., \\\\server\\share\\project). Displays 'Ocorreu um erro ao carregar o modo de exibição: claudeVSCodeSidebar'. Affects enterprise developers working on network-shared drives."
  - "Open issue reported against anthropics/anthropic-sdk-python repo. Claude Code extension 2.1.131 on Windows fails when project folder is on UNC network path. Enterprise impact — common setup in corporate environments with shared drives."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Claude Code Windows path not found"
  - "Claude Code network drive access denied"
updated: "2026-05-13"
published_at: "2026-05-13T01:12:19.993Z"
updated_at: "2026-05-13T01:12:19.993Z"
---

## What this error means

`Ocorreu um erro ao carregar o modo de exibição: claudeVSCodeSidebar (Claude Code Extension fails on UNC paths)` is a Claude Code failure pattern reported for developers trying to fix claude code vs code extension fails to load on unc network paths windows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue reported against anthropics/anthropic-sdk-python repo. Claude Code extension 2.1.131 on Windows fails when project folder is on UNC network path. Enterprise impact — common setup in corporate environments with shared drives.

## Common causes

- Claude Code extension for VS Code fails to load when opening a folder from a UNC network path (e.g., \\server\share\project). Displays 'Ocorreu um erro ao carregar o modo de exibição: claudeVSCodeSidebar'. Affects enterprise developers working on network-shared drives.
- Open issue reported against anthropics/anthropic-sdk-python repo. Claude Code extension 2.1.131 on Windows fails when project folder is on UNC network path. Enterprise impact — common setup in corporate environments with shared drives.

## Quick fixes

1. Confirm the exact error signature matches `Ocorreu um erro ao carregar o modo de exibição: claudeVSCodeSidebar (Claude Code Extension fails on UNC paths)`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/anthropic-sdk-python/issues/1505

Evidence note: Open issue reported against anthropics/anthropic-sdk-python repo. Claude Code extension 2.1.131 on Windows fails when project folder is on UNC network path. Enterprise impact — common setup in corporate environments with shared drives.

## Related errors

- Claude Code Windows path not found
- Claude Code network drive access denied

## FAQ

### What should I check first?

Start with the exact `Ocorreu um erro ao carregar o modo de exibição: claudeVSCodeSidebar (Claude Code Extension fails on UNC paths)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Ocorreu um erro ao carregar o modo de exibição: claudeVSCodeSidebar (Claude Code Extension fails on UNC paths)`.
