---
title: "GitHub Copilot MCP Tools Fail with 'Currently Disabled by the User' Error Despite Tools Enabled"
description: "fix GitHub Copilot MCP tools currently disabled by user error Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "MCP tools fail with 'currently disabled by the user' error in GitHub Copilot"
common_causes:
  - "Developers using MCP servers with GitHub Copilot in VS Code get tools failing with 'currently disabled by the user' even though all tools are enabled in settings; affects Excel MCP and other integrations"
  - "Multiple MCP servers (excel-mcp-server variants) fail in VS Code + GitHub Copilot with error '<tool> is currently disabled by the user, and cannot be called.' User confirms all tools are enabled in settings. Affects paid Copilot subscription."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot MCP integration"
  - "MCP tools disabled error"
  - "VS Code Copilot extension error"
updated: "2026-05-15"
published_at: "2026-05-15T06:13:21.857Z"
updated_at: "2026-05-15T06:13:21.857Z"
---

## What this error means

`MCP tools fail with 'currently disabled by the user' error in GitHub Copilot` is a GitHub Copilot failure pattern reported for developers trying to fix github copilot mcp tools currently disabled by user error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple MCP servers (excel-mcp-server variants) fail in VS Code + GitHub Copilot with error '<tool> is currently disabled by the user, and cannot be called.' User confirms all tools are enabled in settings. Affects paid Copilot subscription.

## Common causes

- Developers using MCP servers with GitHub Copilot in VS Code get tools failing with 'currently disabled by the user' even though all tools are enabled in settings; affects Excel MCP and other integrations
- Multiple MCP servers (excel-mcp-server variants) fail in VS Code + GitHub Copilot with error '<tool> is currently disabled by the user, and cannot be called.' User confirms all tools are enabled in settings. Affects paid Copilot subscription.

## Quick fixes

1. Confirm the exact error signature matches `MCP tools fail with 'currently disabled by the user' error in GitHub Copilot`.
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

- https://stackoverflow.com/questions/79875997

Evidence note: Multiple MCP servers (excel-mcp-server variants) fail in VS Code + GitHub Copilot with error '<tool> is currently disabled by the user, and cannot be called.' User confirms all tools are enabled in settings. Affects paid Copilot subscription.

## Related errors

- GitHub Copilot MCP integration
- MCP tools disabled error
- VS Code Copilot extension error

## FAQ

### What should I check first?

Start with the exact `MCP tools fail with 'currently disabled by the user' error in GitHub Copilot` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP tools fail with 'currently disabled by the user' error in GitHub Copilot`.
