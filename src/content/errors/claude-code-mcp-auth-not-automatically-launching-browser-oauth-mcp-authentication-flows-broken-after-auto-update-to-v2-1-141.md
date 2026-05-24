---
title: "Claude Code MCP Auth Not Launching Browser After v2.1.141 Update — OAuth/Authentication Broken on Windows"
description: "Fix Claude Code MCP/OAuth authentication failure where the browser doesn't launch after automatic update, blocking login workflows on Windows (Git Bash/MSYS2/SSH context) Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "mcp auth not automatically launching browser (OAuth/MCP authentication flows broken after auto-update to v2.1.141)"
common_causes:
  - "GitHub issue #59194 on anthropics/claude-code (https://github.com/anthropics/claude-code/issues/59194). Reported as a regression introduced by auto-update to v2.1.141 on 2026-05-14. Affects all Windows users running Claude Code in Git Bash/MSYS2 under SSH/PLink sessions — OAuth and MCP auth flows completely broken. This is a high-value paid AI coding tool, errors here block developer workflows entirely."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T17:43:11.267Z"
updated_at: "2026-05-24T17:43:11.267Z"
---

## What this error means

`mcp auth not automatically launching browser (OAuth/MCP authentication flows broken after auto-update to v2.1.141)` is a Claude Code failure pattern reported for developers trying to fix claude code mcp/oauth authentication failure where the browser doesn't launch after automatic update, blocking login workflows on windows (git bash/msys2/ssh context). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #59194 on anthropics/claude-code (https://github.com/anthropics/claude-code/issues/59194). Reported as a regression introduced by auto-update to v2.1.141 on 2026-05-14. Affects all Windows users running Claude Code in Git Bash/MSYS2 under SSH/PLink sessions — OAuth and MCP auth flows completely broken. This is a high-value paid AI coding tool, errors here block developer workflows entirely.

## Common causes

- GitHub issue #59194 on anthropics/claude-code (https://github.com/anthropics/claude-code/issues/59194). Reported as a regression introduced by auto-update to v2.1.141 on 2026-05-14. Affects all Windows users running Claude Code in Git Bash/MSYS2 under SSH/PLink sessions — OAuth and MCP auth flows completely broken. This is a high-value paid AI coding tool, errors here block developer workflows entirely.

## Quick fixes

1. Confirm the exact error signature matches `mcp auth not automatically launching browser (OAuth/MCP authentication flows broken after auto-update to v2.1.141)`.
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

Evidence note: GitHub issue #59194 on anthropics/claude-code (https://github.com/anthropics/claude-code/issues/59194). Reported as a regression introduced by auto-update to v2.1.141 on 2026-05-14. Affects all Windows users running Claude Code in Git Bash/MSYS2 under SSH/PLink sessions — OAuth and MCP auth flows completely broken. This is a high-value paid AI coding tool, errors here block developer workflows entirely.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `mcp auth not automatically launching browser (OAuth/MCP authentication flows broken after auto-update to v2.1.141)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `mcp auth not automatically launching browser (OAuth/MCP authentication flows broken after auto-update to v2.1.141)`.
