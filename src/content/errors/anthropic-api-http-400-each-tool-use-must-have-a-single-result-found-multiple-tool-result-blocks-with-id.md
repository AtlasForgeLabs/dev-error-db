---
title: "Anthropic API 400 — Duplicate tool_result Blocks for Same tool_use"
description: "Fix duplicate tool_result blocks error in Anthropic Claude API agent loops Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "HTTP 400: each tool_use must have a single result. Found multiple tool_result blocks with id"
common_causes:
  - "Long-running agent sessions with many tool calls accumulate duplicate tool_result blocks, causing the API to reject the entire message history. Developers struggle to deduplicate without losing conversation context."
  - "Goose agent project hit this error with Databricks provider and direct Anthropic — long sessions with many tool calls fail because multiple tool_result blocks share the same tool_use ID."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API tool_result deduplication"
  - "Claude API conversation history management for agents"
  - "tool_use tool_result pairing best practices"
updated: "2026-05-13"
published_at: "2026-05-13T20:13:17.679Z"
updated_at: "2026-05-13T20:13:17.679Z"
---

## What this error means

`HTTP 400: each tool_use must have a single result. Found multiple tool_result blocks with id` is a Anthropic API failure pattern reported for developers trying to fix duplicate tool_result blocks error in anthropic claude api agent loops. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Goose agent project hit this error with Databricks provider and direct Anthropic — long sessions with many tool calls fail because multiple tool_result blocks share the same tool_use ID.

## Common causes

- Long-running agent sessions with many tool calls accumulate duplicate tool_result blocks, causing the API to reject the entire message history. Developers struggle to deduplicate without losing conversation context.
- Goose agent project hit this error with Databricks provider and direct Anthropic — long sessions with many tool calls fail because multiple tool_result blocks share the same tool_use ID.

## Quick fixes

1. Confirm the exact error signature matches `HTTP 400: each tool_use must have a single result. Found multiple tool_result blocks with id`.
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

- https://github.com/aaif-goose/goose/pull/9133

Evidence note: Goose agent project hit this error with Databricks provider and direct Anthropic — long sessions with many tool calls fail because multiple tool_result blocks share the same tool_use ID.

## Related errors

- Anthropic API tool_result deduplication
- Claude API conversation history management for agents
- tool_use tool_result pairing best practices

## FAQ

### What should I check first?

Start with the exact `HTTP 400: each tool_use must have a single result. Found multiple tool_result blocks with id` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 400: each tool_use must have a single result. Found multiple tool_result blocks with id`.
