---
title: "OpenAI Agents SDK Max Turns Exceeded — StreamTerminalError Default Limit"
description: "Fix OpenAI Agents SDK max_turns limit exceeded — configure higher max_turns for long agent runs Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "StreamTerminalError: Max turns (10) exceeded — Runner.run_streamed default max_turns=10"
common_causes:
  - "Issue #613 on gremlins: OpenAIAgentsClient calls Runner.run_streamed without setting max_turns, SDK defaults to 10, agent aborts with StreamTerminalError. Clear fix: bump max_turns parameter. Category mapped to OpenAI API."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-16"
published_at: "2026-05-16T08:13:24.995Z"
updated_at: "2026-05-16T08:13:24.995Z"
---

## What this error means

`StreamTerminalError: Max turns (10) exceeded — Runner.run_streamed default max_turns=10` is a OpenAI API failure pattern reported for developers trying to fix openai agents sdk max_turns limit exceeded — configure higher max_turns for long agent runs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #613 on gremlins: OpenAIAgentsClient calls Runner.run_streamed without setting max_turns, SDK defaults to 10, agent aborts with StreamTerminalError. Clear fix: bump max_turns parameter. Category mapped to OpenAI API.

## Common causes

- Issue #613 on gremlins: OpenAIAgentsClient calls Runner.run_streamed without setting max_turns, SDK defaults to 10, agent aborts with StreamTerminalError. Clear fix: bump max_turns parameter. Category mapped to OpenAI API.

## Quick fixes

1. Confirm the exact error signature matches `StreamTerminalError: Max turns (10) exceeded — Runner.run_streamed default max_turns=10`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/xbrianh/gremlins/issues/613

Evidence note: Issue #613 on gremlins: OpenAIAgentsClient calls Runner.run_streamed without setting max_turns, SDK defaults to 10, agent aborts with StreamTerminalError. Clear fix: bump max_turns parameter. Category mapped to OpenAI API.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `StreamTerminalError: Max turns (10) exceeded — Runner.run_streamed default max_turns=10` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `StreamTerminalError: Max turns (10) exceeded — Runner.run_streamed default max_turns=10`.
