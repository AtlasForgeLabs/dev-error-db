---
title: "Claude Code for VS Code fails to read CLAUDE_CODE_GIT_BASH_PATH environment variable on Windows"
description: "Windows developer has Git Bash correctly installed and verified via where bash and PowerShell env checks, yet Claude Code extension still refuses to launch requesting same configuration already set Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Error spawning Claude: Claude Code on Windows requires git-bash. If installed but not in PATH, set environment variable pointing to your bash.exe: CLAUDE_CODE_GIT_BASH_PATH=C:\\Program Files\\Git\\bin\\bash.exe"
common_causes:
  - "From anthropics/claude-quickstarts#391 opened Apr 8, 2026. User verified Git Bash exists at correct path in both Machine and User-level environment variables, Git Bash terminal works fine inside VS Code, yet Claude Code throws identical error asking user to do what is already done. Extension loaded v2.1.96, OAuth auth succeeded, but bash detection failed silently. This blocks entire product on Windows — a major enterprise platform. High commercial value as it affects paid subscription usage directly."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-10"
published_at: "2026-06-10T20:36:12.777Z"
updated_at: "2026-06-10T20:36:12.777Z"
---

## What this error means

`Error spawning Claude: Claude Code on Windows requires git-bash. If installed but not in PATH, set environment variable pointing to your bash.exe: CLAUDE_CODE_GIT_BASH_PATH=C:\Program Files\Git\bin\bash.exe` is a Claude Code failure pattern reported for developers trying to windows developer has git bash correctly installed and verified via where bash and powershell env checks, yet claude code extension still refuses to launch requesting same configuration already set. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

From anthropics/claude-quickstarts#391 opened Apr 8, 2026. User verified Git Bash exists at correct path in both Machine and User-level environment variables, Git Bash terminal works fine inside VS Code, yet Claude Code throws identical error asking user to do what is already done. Extension loaded v2.1.96, OAuth auth succeeded, but bash detection failed silently. This blocks entire product on Windows — a major enterprise platform. High commercial value as it affects paid subscription usage directly.

## Common causes

- From anthropics/claude-quickstarts#391 opened Apr 8, 2026. User verified Git Bash exists at correct path in both Machine and User-level environment variables, Git Bash terminal works fine inside VS Code, yet Claude Code throws identical error asking user to do what is already done. Extension loaded v2.1.96, OAuth auth succeeded, but bash detection failed silently. This blocks entire product on Windows — a major enterprise platform. High commercial value as it affects paid subscription usage directly.

## Quick fixes

1. Confirm the exact error signature matches `Error spawning Claude: Claude Code on Windows requires git-bash. If installed but not in PATH, set environment variable pointing to your bash.exe: CLAUDE_CODE_GIT_BASH_PATH=C:\Program Files\Git\bin\bash.exe`.
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

- https://github.com/anthropics/claude-quickstarts/issues/391

Evidence note: From anthropics/claude-quickstarts#391 opened Apr 8, 2026. User verified Git Bash exists at correct path in both Machine and User-level environment variables, Git Bash terminal works fine inside VS Code, yet Claude Code throws identical error asking user to do what is already done. Extension loaded v2.1.96, OAuth auth succeeded, but bash detection failed silently. This blocks entire product on Windows — a major enterprise platform. High commercial value as it affects paid subscription usage directly.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Error spawning Claude: Claude Code on Windows requires git-bash. If installed but not in PATH, set environment variable pointing to your bash.exe: CLAUDE_CODE_GIT_BASH_PATH=C:\Program Files\Git\bin\bash.exe` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error spawning Claude: Claude Code on Windows requires git-bash. If installed but not in PATH, set environment variable pointing to your bash.exe: CLAUDE_CODE_GIT_BASH_PATH=C:\Program Files\Git\bin\bash.exe`.
