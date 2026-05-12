---
title: "Claude Code Windows: Plugin-Shipped MCP Servers Fail with spawn ENOENT on bare npx Command"
description: "Fix Claude Code MCP server plugins failing with spawn ENOENT on Windows when command is set to bare npx Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "spawn npx ENOENT"
common_causes:
  - "On Windows, plugin-shipped stdio MCP servers that use bare npx as their command fail to connect. The LSP spawn fix from a prior release did not extend to the MCP spawn path, leaving all official MCP plugins broken until users manually wrap commands with cmd /c."
  - "GitHub issue #58510 (May 2026, labels: bug, has repro, platform:windows, area:mcp). Every official plugin using bare npx command fails with spawn ENOENT on Windows. Workaround requires manually wrapping with cmd /c."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code MCP server failed to connect Windows"
  - "Claude Code plugin npx not found"
updated: "2026-05-12"
published_at: "2026-05-12T22:12:18.799Z"
updated_at: "2026-05-12T22:12:18.799Z"
---

## What this error means

`spawn npx ENOENT` is a Claude Code failure pattern reported for developers trying to fix claude code mcp server plugins failing with spawn enoent on windows when command is set to bare npx. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58510 (May 2026, labels: bug, has repro, platform:windows, area:mcp). Every official plugin using bare npx command fails with spawn ENOENT on Windows. Workaround requires manually wrapping with cmd /c.

## Common causes

- On Windows, plugin-shipped stdio MCP servers that use bare npx as their command fail to connect. The LSP spawn fix from a prior release did not extend to the MCP spawn path, leaving all official MCP plugins broken until users manually wrap commands with cmd /c.
- GitHub issue #58510 (May 2026, labels: bug, has repro, platform:windows, area:mcp). Every official plugin using bare npx command fails with spawn ENOENT on Windows. Workaround requires manually wrapping with cmd /c.

## Quick fixes

1. Confirm the exact error signature matches `spawn npx ENOENT`.
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

- https://github.com/anthropics/claude-code/issues/58510

Evidence note: GitHub issue #58510 (May 2026, labels: bug, has repro, platform:windows, area:mcp). Every official plugin using bare npx command fails with spawn ENOENT on Windows. Workaround requires manually wrapping with cmd /c.

## Related errors

- Claude Code MCP server failed to connect Windows
- Claude Code plugin npx not found

## FAQ

### What should I check first?

Start with the exact `spawn npx ENOENT` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `spawn npx ENOENT`.
