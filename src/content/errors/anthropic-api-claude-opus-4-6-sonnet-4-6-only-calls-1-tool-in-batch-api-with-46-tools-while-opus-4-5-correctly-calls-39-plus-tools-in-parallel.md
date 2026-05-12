---
title: "Claude Opus 4.6 and Sonnet 4.6 Fail to Make Parallel Tool Calls in Batch API — Regression from Opus 4.5"
description: "Fix Claude Opus 4.6 / Sonnet 4.6 not making parallel tool calls in Message Batches API Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "Claude Opus 4.6 / Sonnet 4.6 only calls 1 tool in Batch API with 46 tools, while Opus 4.5 correctly calls 39+ tools in parallel"
common_causes:
  - "Opus 4.6 and Sonnet 4.6 only produce 1 tool call per response in Batch API despite having 46 tool definitions, while Opus 4.5 correctly makes 39+ parallel tool calls. Breaks production document extraction pipelines."
  - "Regression in 4.6 models' parallel tool calling in batch mode. Verified with same request structure, tools, and document. Opus 4.5 works correctly with 64K max_tokens. Affects medical document extraction pipelines and other high-throughput workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic Batch API tool_choice ignored"
  - "Claude 4.6 tool calling regression"
  - "Anthropic messages.batches.create parallel tool calls"
updated: "2026-05-12"
published_at: "2026-05-12T23:12:19.303Z"
updated_at: "2026-05-12T23:12:19.303Z"
---

## What this error means

`Claude Opus 4.6 / Sonnet 4.6 only calls 1 tool in Batch API with 46 tools, while Opus 4.5 correctly calls 39+ tools in parallel` is a Anthropic API failure pattern reported for developers trying to fix claude opus 4.6 / sonnet 4.6 not making parallel tool calls in message batches api. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Regression in 4.6 models' parallel tool calling in batch mode. Verified with same request structure, tools, and document. Opus 4.5 works correctly with 64K max_tokens. Affects medical document extraction pipelines and other high-throughput workflows.

## Common causes

- Opus 4.6 and Sonnet 4.6 only produce 1 tool call per response in Batch API despite having 46 tool definitions, while Opus 4.5 correctly makes 39+ parallel tool calls. Breaks production document extraction pipelines.
- Regression in 4.6 models' parallel tool calling in batch mode. Verified with same request structure, tools, and document. Opus 4.5 works correctly with 64K max_tokens. Affects medical document extraction pipelines and other high-throughput workflows.

## Quick fixes

1. Confirm the exact error signature matches `Claude Opus 4.6 / Sonnet 4.6 only calls 1 tool in Batch API with 46 tools, while Opus 4.5 correctly calls 39+ tools in parallel`.
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

- https://github.com/anthropics/anthropic-sdk-typescript/issues/956

Evidence note: Regression in 4.6 models' parallel tool calling in batch mode. Verified with same request structure, tools, and document. Opus 4.5 works correctly with 64K max_tokens. Affects medical document extraction pipelines and other high-throughput workflows.

## Related errors

- Anthropic Batch API tool_choice ignored
- Claude 4.6 tool calling regression
- Anthropic messages.batches.create parallel tool calls

## FAQ

### What should I check first?

Start with the exact `Claude Opus 4.6 / Sonnet 4.6 only calls 1 tool in Batch API with 46 tools, while Opus 4.5 correctly calls 39+ tools in parallel` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude Opus 4.6 / Sonnet 4.6 only calls 1 tool in Batch API with 46 tools, while Opus 4.5 correctly calls 39+ tools in parallel`.
