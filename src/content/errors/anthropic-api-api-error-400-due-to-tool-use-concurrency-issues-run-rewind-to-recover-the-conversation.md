---
title: "Anthropic API 400 Bad Request — Tool Use Concurrency Error in Claude Code"
description: "Fix Anthropic API returning unexpected 400 Bad Request during tool use concurrency in Claude Code Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "API Error: 400 due to tool use concurrency issues. Run /rewind to recover the conversation."
common_causes:
  - "Claude Code users encounter a 400 error with tool use concurrency, receiving a misleading 'Bad Request' response with invalid JSON parsing errors in the CLI. The error forces users to run /rewind to recover conversations, losing context. Affects Claude Code v2.0.2+ on macOS."
  - "270+ comments. Error shows as 'SyntaxError: Unexpected token' in CLI, wrapping an underlying 400 Bad Request from the Anthropic API. The root cause is tool use concurrency limits, but the error message is misleading. Forces conversation recovery via /rewind."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code tool use concurrency limit"
  - "Anthropic API 400 bad request tool calls"
  - "Claude Code /rewind command not working"
updated: "2026-05-13"
published_at: "2026-05-13T11:13:16.591Z"
updated_at: "2026-05-13T11:13:16.591Z"
---

## What this error means

`API Error: 400 due to tool use concurrency issues. Run /rewind to recover the conversation.` is a Anthropic API failure pattern reported for developers trying to fix anthropic api returning unexpected 400 bad request during tool use concurrency in claude code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

270+ comments. Error shows as 'SyntaxError: Unexpected token' in CLI, wrapping an underlying 400 Bad Request from the Anthropic API. The root cause is tool use concurrency limits, but the error message is misleading. Forces conversation recovery via /rewind.

## Common causes

- Claude Code users encounter a 400 error with tool use concurrency, receiving a misleading 'Bad Request' response with invalid JSON parsing errors in the CLI. The error forces users to run /rewind to recover conversations, losing context. Affects Claude Code v2.0.2+ on macOS.
- 270+ comments. Error shows as 'SyntaxError: Unexpected token' in CLI, wrapping an underlying 400 Bad Request from the Anthropic API. The root cause is tool use concurrency limits, but the error message is misleading. Forces conversation recovery via /rewind.

## Quick fixes

1. Confirm the exact error signature matches `API Error: 400 due to tool use concurrency issues. Run /rewind to recover the conversation.`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/8763

Evidence note: 270+ comments. Error shows as 'SyntaxError: Unexpected token' in CLI, wrapping an underlying 400 Bad Request from the Anthropic API. The root cause is tool use concurrency limits, but the error message is misleading. Forces conversation recovery via /rewind.

## Related errors

- Claude Code tool use concurrency limit
- Anthropic API 400 bad request tool calls
- Claude Code /rewind command not working

## FAQ

### What should I check first?

Start with the exact `API Error: 400 due to tool use concurrency issues. Run /rewind to recover the conversation.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: 400 due to tool use concurrency issues. Run /rewind to recover the conversation.`.
