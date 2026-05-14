---
title: "Claude Code v2.1.141 MCP Auth Browser Launch Broken on Windows — Regression from v2.1.139"
description: "Fix Claude Code not launching browser for MCP authentication on Windows after v2.1.141 update Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code MCP auth not automatically launching browser on Windows — regression from v2.1.139 to v2.1.141"
common_causes:
  - "v2.1.141 broke all browser-open flows (OAuth, MCP authentication) on Windows with Git Bash/MSYS2. Users must manually open browser. First MCP server (LucidChart) works, subsequent ones silently fail. Regression from v2.1.139."
  - "Regression in v2.1.141 on Windows. BROWSER env var unset, DISPLAY unset in Git Bash via PLink/SSH. First MCP auth works, subsequent ones silently fail. No error messages, just no activity."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Claude Code OAuth browser not opening"
  - "Claude Code MCP server connection timeout"
  - "Claude Code Windows Git Bash compatibility"
updated: "2026-05-14"
published_at: "2026-05-14T21:13:20.822Z"
updated_at: "2026-05-14T21:13:20.822Z"
---

## What this error means

`Claude Code MCP auth not automatically launching browser on Windows — regression from v2.1.139 to v2.1.141` is a Claude Code failure pattern reported for developers trying to fix claude code not launching browser for mcp authentication on windows after v2.1.141 update. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Regression in v2.1.141 on Windows. BROWSER env var unset, DISPLAY unset in Git Bash via PLink/SSH. First MCP auth works, subsequent ones silently fail. No error messages, just no activity.

## Common causes

- v2.1.141 broke all browser-open flows (OAuth, MCP authentication) on Windows with Git Bash/MSYS2. Users must manually open browser. First MCP server (LucidChart) works, subsequent ones silently fail. Regression from v2.1.139.
- Regression in v2.1.141 on Windows. BROWSER env var unset, DISPLAY unset in Git Bash via PLink/SSH. First MCP auth works, subsequent ones silently fail. No error messages, just no activity.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code MCP auth not automatically launching browser on Windows — regression from v2.1.139 to v2.1.141`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/claude-code/issues/59194

Evidence note: Regression in v2.1.141 on Windows. BROWSER env var unset, DISPLAY unset in Git Bash via PLink/SSH. First MCP auth works, subsequent ones silently fail. No error messages, just no activity.

## Related errors

- Claude Code OAuth browser not opening
- Claude Code MCP server connection timeout
- Claude Code Windows Git Bash compatibility

## FAQ

### What should I check first?

Start with the exact `Claude Code MCP auth not automatically launching browser on Windows — regression from v2.1.139 to v2.1.141` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code MCP auth not automatically launching browser on Windows — regression from v2.1.139 to v2.1.141`.
