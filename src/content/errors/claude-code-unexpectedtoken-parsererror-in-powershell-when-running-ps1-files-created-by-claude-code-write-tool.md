---
title: "Claude Code Write Tool Produces PowerShell UTF-8 Without BOM Caarsing UnexpectedToken Errors on Windows"
description: "Fix Claude Code Write tool PowerShell UTF-8 BOM issue causing UnexpectedToken errors on Windows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "UnexpectedToken / ParserError in PowerShell when running .ps1 files created by Claude Code Write tool"
common_causes:
  - "Claude Code's Write tool creates .ps1 files as UTF-8 without BOM. PowerShell 5.1 on Windows interprets these as ANSI, causing ParserError at non-ASCII characters (emojis, em dash, umlauts). Affects Windows developers using Claude Code for automation scripts."
  - "Open issue on official anthropics/claude-code repo. Clear repro steps documented. Write tool creates .ps1 files without BOM, PowerShell 5.1 throws UnexpectedToken at Unicode characters. Affects Windows developers with non-ASCII content in scripts."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code PowerShell encoding issue"
  - "Claude Code Windows path error"
updated: "2026-05-13"
published_at: "2026-05-13T01:12:19.993Z"
updated_at: "2026-05-13T01:12:19.993Z"
---

## What this error means

`UnexpectedToken / ParserError in PowerShell when running .ps1 files created by Claude Code Write tool` is a Claude Code failure pattern reported for developers trying to fix claude code write tool powershell utf-8 bom issue causing unexpectedtoken errors on windows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue on official anthropics/claude-code repo. Clear repro steps documented. Write tool creates .ps1 files without BOM, PowerShell 5.1 throws UnexpectedToken at Unicode characters. Affects Windows developers with non-ASCII content in scripts.

## Common causes

- Claude Code's Write tool creates .ps1 files as UTF-8 without BOM. PowerShell 5.1 on Windows interprets these as ANSI, causing ParserError at non-ASCII characters (emojis, em dash, umlauts). Affects Windows developers using Claude Code for automation scripts.
- Open issue on official anthropics/claude-code repo. Clear repro steps documented. Write tool creates .ps1 files without BOM, PowerShell 5.1 throws UnexpectedToken at Unicode characters. Affects Windows developers with non-ASCII content in scripts.

## Quick fixes

1. Confirm the exact error signature matches `UnexpectedToken / ParserError in PowerShell when running .ps1 files created by Claude Code Write tool`.
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

- https://github.com/anthropics/claude-code/issues/58545

Evidence note: Open issue on official anthropics/claude-code repo. Clear repro steps documented. Write tool creates .ps1 files without BOM, PowerShell 5.1 throws UnexpectedToken at Unicode characters. Affects Windows developers with non-ASCII content in scripts.

## Related errors

- Claude Code PowerShell encoding issue
- Claude Code Windows path error

## FAQ

### What should I check first?

Start with the exact `UnexpectedToken / ParserError in PowerShell when running .ps1 files created by Claude Code Write tool` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `UnexpectedToken / ParserError in PowerShell when running .ps1 files created by Claude Code Write tool`.
