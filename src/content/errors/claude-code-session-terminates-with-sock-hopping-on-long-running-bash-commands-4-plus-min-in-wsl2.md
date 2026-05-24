---
title: "WSL2 bash commands >4min terminate with Sock-hopping session crash in Claude Code"
description: "Developer running Claude Code in WSL2 environment finds that any bash command exceeding ~4 minutes triggers a 'Sock-hopping' termination, interrupting long-running build/test pipelines Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Session terminates with 'Sock-hopping' on long-running bash commands (~4+ min) in WSL2"
common_causes:
  - "GitHub Issue #61990 on anthropics/claude-code (opened May 24). Tags: area:bash, bug, platform:wsl, regression. Recent regression affecting Windows dev environments. Category mapping: Claude Code WSL runtime session management error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T12:42:53.111Z"
updated_at: "2026-05-24T12:42:53.111Z"
---

## What this error means

`Session terminates with 'Sock-hopping' on long-running bash commands (~4+ min) in WSL2` is a Claude Code failure pattern reported for developers trying to developer running claude code in wsl2 environment finds that any bash command exceeding ~4 minutes triggers a 'sock-hopping' termination, interrupting long-running build/test pipelines. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #61990 on anthropics/claude-code (opened May 24). Tags: area:bash, bug, platform:wsl, regression. Recent regression affecting Windows dev environments. Category mapping: Claude Code WSL runtime session management error.

## Common causes

- GitHub Issue #61990 on anthropics/claude-code (opened May 24). Tags: area:bash, bug, platform:wsl, regression. Recent regression affecting Windows dev environments. Category mapping: Claude Code WSL runtime session management error.

## Quick fixes

1. Confirm the exact error signature matches `Session terminates with 'Sock-hopping' on long-running bash commands (~4+ min) in WSL2`.
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

- https://github.com/anthropics/claude-code/issues/61990

Evidence note: GitHub Issue #61990 on anthropics/claude-code (opened May 24). Tags: area:bash, bug, platform:wsl, regression. Recent regression affecting Windows dev environments. Category mapping: Claude Code WSL runtime session management error.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Session terminates with 'Sock-hopping' on long-running bash commands (~4+ min) in WSL2` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Session terminates with 'Sock-hopping' on long-running bash commands (~4+ min) in WSL2`.
