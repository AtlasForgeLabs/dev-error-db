---
title: "Claude Code Persistent JSON Parse Error on Windows — stream-json Output Failure"
description: "Fix persistent JSON parse errors in Claude Code on Windows when using stream-json output format Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude Code Persistent JSON Parse Error on Windows"
common_causes:
  - "Claude Code on Windows experiences persistent JSON parse errors when the native binary outputs stream-json format. This prevents Claude Code from functioning on Windows, a major developer platform."
  - "Persistent JSON parse errors reported on Windows when Claude Code spawns native binary with --output-format stream-json. Affects claude.exe process communication with VSCode extension."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code Windows installation issues"
  - "Claude Code native binary crashes on Windows"
updated: "2026-05-12"
published_at: "2026-05-12T05:10:49.187Z"
updated_at: "2026-05-12T05:10:49.187Z"
---

## What this error means

`Claude Code Persistent JSON Parse Error on Windows` is a Claude Code failure pattern reported for developers trying to fix persistent json parse errors in claude code on windows when using stream-json output format. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Persistent JSON parse errors reported on Windows when Claude Code spawns native binary with --output-format stream-json. Affects claude.exe process communication with VSCode extension.

## Common causes

- Claude Code on Windows experiences persistent JSON parse errors when the native binary outputs stream-json format. This prevents Claude Code from functioning on Windows, a major developer platform.
- Persistent JSON parse errors reported on Windows when Claude Code spawns native binary with --output-format stream-json. Affects claude.exe process communication with VSCode extension.

## Quick fixes

1. Confirm the exact error signature matches `Claude Code Persistent JSON Parse Error on Windows`.
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

- https://github.com/anthropics/claude-code/issues/14442

Evidence note: Persistent JSON parse errors reported on Windows when Claude Code spawns native binary with --output-format stream-json. Affects claude.exe process communication with VSCode extension.

## Related errors

- Claude Code Windows installation issues
- Claude Code native binary crashes on Windows

## FAQ

### What should I check first?

Start with the exact `Claude Code Persistent JSON Parse Error on Windows` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Code Persistent JSON Parse Error on Windows`.
