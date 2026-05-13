---
title: "Claude Code Extension Fails to Load on Network UNC Paths — Fix Guide"
description: "Fix Claude Code VS Code extension that fails to load when project folder is on a network UNC path Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Ocorreu um erro ao carregar modo de exibição: claudeVSCodeS (Claude Code Extension fails to load on UNC paths)"
common_causes:
  - "Claude Code extension (v2.1.131) fails to load on Windows when the project is on a corporate UNC network path (e.g., \\\\server\\share\\project). This is a common enterprise setup, and the error message appears in Portuguese even on English systems. Corporate developers need a fix to continue using Claude Code for their work."
  - "GitHub issue (2026-05-06) reports Claude Code VS Code extension failing on UNC network paths in corporate environments. Affects Anthropic's paid Claude Code product. Enterprise-relevant scenario."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code network path error"
  - "VS Code extension UNC path not supported"
updated: "2026-05-13"
published_at: "2026-05-13T14:13:16.961Z"
updated_at: "2026-05-13T14:13:16.961Z"
---

## What this error means

`Ocorreu um erro ao carregar modo de exibição: claudeVSCodeS (Claude Code Extension fails to load on UNC paths)` is a Claude Code failure pattern reported for developers trying to fix claude code vs code extension that fails to load when project folder is on a network unc path. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue (2026-05-06) reports Claude Code VS Code extension failing on UNC network paths in corporate environments. Affects Anthropic's paid Claude Code product. Enterprise-relevant scenario.

## Common causes

- Claude Code extension (v2.1.131) fails to load on Windows when the project is on a corporate UNC network path (e.g., \\server\share\project). This is a common enterprise setup, and the error message appears in Portuguese even on English systems. Corporate developers need a fix to continue using Claude Code for their work.
- GitHub issue (2026-05-06) reports Claude Code VS Code extension failing on UNC network paths in corporate environments. Affects Anthropic's paid Claude Code product. Enterprise-relevant scenario.

## Quick fixes

1. Confirm the exact error signature matches `Ocorreu um erro ao carregar modo de exibição: claudeVSCodeS (Claude Code Extension fails to load on UNC paths)`.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1505

Evidence note: GitHub issue (2026-05-06) reports Claude Code VS Code extension failing on UNC network paths in corporate environments. Affects Anthropic's paid Claude Code product. Enterprise-relevant scenario.

## Related errors

- Claude Code network path error
- VS Code extension UNC path not supported

## FAQ

### What should I check first?

Start with the exact `Ocorreu um erro ao carregar modo de exibição: claudeVSCodeS (Claude Code Extension fails to load on UNC paths)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Ocorreu um erro ao carregar modo de exibição: claudeVSCodeS (Claude Code Extension fails to load on UNC paths)`.
