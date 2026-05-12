---
title: "Claude Code Windows npm EBUSY Error During GitHub MCP Server Setup — Fix"
description: "Fix npm EBUSY resource busy error when Claude Code tries to install or update GitHub MCP server on Windows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "npm error EBUSY resource busy or locked copyfile claude.exe"
common_causes:
  - "Windows developers encounter npm EBUSY errors when Claude Code attempts to spawn the GitHub MCP server. The npm install fails because claude.exe is locked by a running process, preventing the copyfile operation. This blocks MCP server connectivity and related workflows."
  - "GitHub MCP server connection fails on Windows when spawned by Claude Code. npm error EBUSY resource busy or locked, copyfile fails on claude.exe because it is in use. Full stack trace from AppData Roaming npm node_modules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "npm EBUSY windows locked file"
  - "Claude Code MCP server installation failed"
updated: "2026-05-12"
published_at: "2026-05-12T02:10:48.323Z"
updated_at: "2026-05-12T02:10:48.323Z"
---

## What this error means

`npm error EBUSY resource busy or locked copyfile claude.exe` is a Claude Code failure pattern reported for developers trying to fix npm ebusy resource busy error when claude code tries to install or update github mcp server on windows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub MCP server connection fails on Windows when spawned by Claude Code. npm error EBUSY resource busy or locked, copyfile fails on claude.exe because it is in use. Full stack trace from AppData Roaming npm node_modules.

## Common causes

- Windows developers encounter npm EBUSY errors when Claude Code attempts to spawn the GitHub MCP server. The npm install fails because claude.exe is locked by a running process, preventing the copyfile operation. This blocks MCP server connectivity and related workflows.
- GitHub MCP server connection fails on Windows when spawned by Claude Code. npm error EBUSY resource busy or locked, copyfile fails on claude.exe because it is in use. Full stack trace from AppData Roaming npm node_modules.

## Quick fixes

1. Confirm the exact error signature matches `npm error EBUSY resource busy or locked copyfile claude.exe`.
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

- https://github.com/anthropics/claude-code/issues/58205

Evidence note: GitHub MCP server connection fails on Windows when spawned by Claude Code. npm error EBUSY resource busy or locked, copyfile fails on claude.exe because it is in use. Full stack trace from AppData Roaming npm node_modules.

## Related errors

- npm EBUSY windows locked file
- Claude Code MCP server installation failed

## FAQ

### What should I check first?

Start with the exact `npm error EBUSY resource busy or locked copyfile claude.exe` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `npm error EBUSY resource busy or locked copyfile claude.exe`.
