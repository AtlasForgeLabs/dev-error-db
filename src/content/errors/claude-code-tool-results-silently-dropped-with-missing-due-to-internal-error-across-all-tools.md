---
title: "Claude Code Tool Results Silently Dropped — \"missing due to internal error\" Regression"
description: "Fix Claude Code dropping tool results silently, tool outputs missing Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Tool results silently dropped with \"missing due to internal error\" across all tools"
common_causes:
  - "Critical regression in Claude Code 2.1.101+ where tool execution results are silently discarded without error notification, causing incomplete code changes and lost work"
  - "Regression in Claude Code 2.1.101 on Windows. Tool results silently dropped with 'missing due to internal error' message across all tools. Users lose work without any visible error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code process exited with code 3"
  - "Claude Code tool execution failed"
  - "Claude Code internal error"
updated: "2026-05-15"
published_at: "2026-05-15T01:13:21.278Z"
updated_at: "2026-05-15T01:13:21.278Z"
---

## What this error means

`Tool results silently dropped with "missing due to internal error" across all tools` is a Claude Code failure pattern reported for developers trying to fix claude code dropping tool results silently, tool outputs missing. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Regression in Claude Code 2.1.101 on Windows. Tool results silently dropped with 'missing due to internal error' message across all tools. Users lose work without any visible error.

## Common causes

- Critical regression in Claude Code 2.1.101+ where tool execution results are silently discarded without error notification, causing incomplete code changes and lost work
- Regression in Claude Code 2.1.101 on Windows. Tool results silently dropped with 'missing due to internal error' message across all tools. Users lose work without any visible error.

## Quick fixes

1. Confirm the exact error signature matches `Tool results silently dropped with "missing due to internal error" across all tools`.
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

- https://github.com/anthropics/claude-code/issues/46767

Evidence note: Regression in Claude Code 2.1.101 on Windows. Tool results silently dropped with 'missing due to internal error' message across all tools. Users lose work without any visible error.

## Related errors

- Claude Code process exited with code 3
- Claude Code tool execution failed
- Claude Code internal error

## FAQ

### What should I check first?

Start with the exact `Tool results silently dropped with "missing due to internal error" across all tools` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Tool results silently dropped with "missing due to internal error" across all tools`.
