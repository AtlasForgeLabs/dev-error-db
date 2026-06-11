---
title: "Claude Code 400 invalid_request_error: thinking.type.disabled not supported"
description: "User tries to disable extended thinking in Claude Code CLI on a model where thinking.control is not supported; gets 400 invalid_request_error and wants to resolve the configuration conflict. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Error: 400 {\"type\":\"error\",\"error\":{\"type\":\"invalid_request_error\",\"message\":\"\\\"thinking.type.disabled\\\" is not supported for this model. Thinking defaults to adaptive mode when not specified; use \\\"thinking.type.enabled\\\" with \\\"budget_tokens\\\" for extended thinking.\"}}"
common_causes:
  - "GitHub Issue #67285 on anthropics/claude-code (opened Jun 11, 2026 by original reporter). Version 2.1.169 on darwin. The thinking.type.disabled config parameter is incompatible with the current model, which defaults to adaptive mode. Not in covered-errors.md. Direct API config error on paid Claude Code product."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-11"
published_at: "2026-06-11T01:36:13.486Z"
updated_at: "2026-06-11T01:36:13.486Z"
---

## What this error means

`Error: 400 {"type":"error","error":{"type":"invalid_request_error","message":"\"thinking.type.disabled\" is not supported for this model. Thinking defaults to adaptive mode when not specified; use \"thinking.type.enabled\" with \"budget_tokens\" for extended thinking."}}` is a Claude Code failure pattern reported for developers trying to user tries to disable extended thinking in claude code cli on a model where thinking.control is not supported; gets 400 invalid_request_error and wants to resolve the configuration conflict.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #67285 on anthropics/claude-code (opened Jun 11, 2026 by original reporter). Version 2.1.169 on darwin. The thinking.type.disabled config parameter is incompatible with the current model, which defaults to adaptive mode. Not in covered-errors.md. Direct API config error on paid Claude Code product.

## Common causes

- GitHub Issue #67285 on anthropics/claude-code (opened Jun 11, 2026 by original reporter). Version 2.1.169 on darwin. The thinking.type.disabled config parameter is incompatible with the current model, which defaults to adaptive mode. Not in covered-errors.md. Direct API config error on paid Claude Code product.

## Quick fixes

1. Confirm the exact error signature matches `Error: 400 {"type":"error","error":{"type":"invalid_request_error","message":"\"thinking.type.disabled\" is not supported for this model. Thinking defaults to adaptive mode when not specified; use \"thinking.type.enabled\" with \"budget_tokens\" for extended thinking."}}`.
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

- https://github.com/anthropics/claude-code/issues/67285

Evidence note: GitHub Issue #67285 on anthropics/claude-code (opened Jun 11, 2026 by original reporter). Version 2.1.169 on darwin. The thinking.type.disabled config parameter is incompatible with the current model, which defaults to adaptive mode. Not in covered-errors.md. Direct API config error on paid Claude Code product.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Error: 400 {"type":"error","error":{"type":"invalid_request_error","message":"\"thinking.type.disabled\" is not supported for this model. Thinking defaults to adaptive mode when not specified; use \"thinking.type.enabled\" with \"budget_tokens\" for extended thinking."}}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: 400 {"type":"error","error":{"type":"invalid_request_error","message":"\"thinking.type.disabled\" is not supported for this model. Thinking defaults to adaptive mode when not specified; use \"thinking.type.enabled\" with \"budget_tokens\" for extended thinking."}}`.
