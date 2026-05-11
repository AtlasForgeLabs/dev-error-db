---
title: "Claude Code persistent JSON parse error on Windows with stream-json output"
description: "Fix Claude Code JSON parse error on Windows when using stream-json output format Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "JSON Parse Error on Windows (stream-json format)"
common_causes:
  - "Claude Code on Windows consistently fails to parse its own stream-json output, causing persistent errors. Affects all Windows users using the VSCode extension. Platform-specific bug with high search demand from Windows developers."
  - "GitHub issue #14442 reports persistent JSON parse error on Windows when Claude Code spawns native binary with --output-format stream-json. Log shows spawning claude.exe with stream-json verbose mode."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code Windows stream-json error"
  - "Claude Code JSON parsing failure"
  - "Claude Code Windows native binary error"
updated: "2026-05-11"
---

## What this error means

`JSON Parse Error on Windows (stream-json format)` is a Claude Code failure pattern reported for developers trying to fix claude code json parse error on windows when using stream-json output format. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #14442 reports persistent JSON parse error on Windows when Claude Code spawns native binary with --output-format stream-json. Log shows spawning claude.exe with stream-json verbose mode.

## Common causes

- Claude Code on Windows consistently fails to parse its own stream-json output, causing persistent errors. Affects all Windows users using the VSCode extension. Platform-specific bug with high search demand from Windows developers.
- GitHub issue #14442 reports persistent JSON parse error on Windows when Claude Code spawns native binary with --output-format stream-json. Log shows spawning claude.exe with stream-json verbose mode.

## Quick fixes

1. Confirm the exact error signature matches `JSON Parse Error on Windows (stream-json format)`.
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

Evidence note: GitHub issue #14442 reports persistent JSON parse error on Windows when Claude Code spawns native binary with --output-format stream-json. Log shows spawning claude.exe with stream-json verbose mode.

## Related errors

- Claude Code Windows stream-json error
- Claude Code JSON parsing failure
- Claude Code Windows native binary error

## FAQ

### What should I check first?

Start with the exact `JSON Parse Error on Windows (stream-json format)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `JSON Parse Error on Windows (stream-json format)`.
