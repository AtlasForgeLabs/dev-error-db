---
title: "Claude Code MCP settings --help prints broken syntax for -e/--env (invalid_environment_variable_format)"
description: "User follows canonical CLI help example for adding MCP servers with environment variables but gets parser error because `-e` greedily consumes next positional arg Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Invalid environment variable format: <name>, environment variables should be added as: -e KEY1=value1 -e KEY2=value2"
common_causes:
  - "Source: https://github.com/anthropics/claude-code/issues/62332 (opened May 26 2026). Reproduced on v2.1.150/macOS. Root cause: `-e/--env` option defined as variadic (nargs:'*' or action:'append') instead of repeatable single-value. Same bug existed in #23365 (closed stale, never fixed) and #29221 (closed dup). Documented help text does not work. Blocks all users trying to add MCP servers with env vars via CLI."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T06:43:16.143Z"
updated_at: "2026-05-26T06:43:16.143Z"
---

## What this error means

`Invalid environment variable format: <name>, environment variables should be added as: -e KEY1=value1 -e KEY2=value2` is a Claude Code failure pattern reported for developers trying to user follows canonical cli help example for adding mcp servers with environment variables but gets parser error because `-e` greedily consumes next positional arg. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/anthropics/claude-code/issues/62332 (opened May 26 2026). Reproduced on v2.1.150/macOS. Root cause: `-e/--env` option defined as variadic (nargs:'*' or action:'append') instead of repeatable single-value. Same bug existed in #23365 (closed stale, never fixed) and #29221 (closed dup). Documented help text does not work. Blocks all users trying to add MCP servers with env vars via CLI.

## Common causes

- Source: https://github.com/anthropics/claude-code/issues/62332 (opened May 26 2026). Reproduced on v2.1.150/macOS. Root cause: `-e/--env` option defined as variadic (nargs:'*' or action:'append') instead of repeatable single-value. Same bug existed in #23365 (closed stale, never fixed) and #29221 (closed dup). Documented help text does not work. Blocks all users trying to add MCP servers with env vars via CLI.

## Quick fixes

1. Confirm the exact error signature matches `Invalid environment variable format: <name>, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`.
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

- https://github.com/anthropics/claude-code/issues/62332

Evidence note: Source: https://github.com/anthropics/claude-code/issues/62332 (opened May 26 2026). Reproduced on v2.1.150/macOS. Root cause: `-e/--env` option defined as variadic (nargs:'*' or action:'append') instead of repeatable single-value. Same bug existed in #23365 (closed stale, never fixed) and #29221 (closed dup). Documented help text does not work. Blocks all users trying to add MCP servers with env vars via CLI.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Invalid environment variable format: <name>, environment variables should be added as: -e KEY1=value1 -e KEY2=value2` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Invalid environment variable format: <name>, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`.
