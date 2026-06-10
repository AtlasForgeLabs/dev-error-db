---
title: "Anthropic SDK HTTP 529 overloaded_error missing built-in retry policy forces manual retries"
description: "Developer building multi-tenant app with MCP clients encounters HTTP 529 overloaded error from backend proxy; needs automatic retry logic but SDK does not handle 529 unlike standard 429 rate limit handling Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "HTTP 529 overloaded_error: no retry after HTTP 529 overloaded_error; shouldRetry does not handle 529 like it handles 429 rate limit"
common_causes:
  - "Reported at anthropics/anthropic-sdk-typescript#791 (closed Jul 11, 2025). User investigated private shouldRetry() method and confirmed 529 is excluded from built-in retry while 429 has proper retry-after handling. Builds multi-tenant app with MCP clients where load spikes cause temporary overload. High commercial value because enterprise customers running multi-tenant workloads are forced to implement custom retry logic for a paid API service that should handle this natively."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-06-10"
published_at: "2026-06-10T20:36:12.777Z"
updated_at: "2026-06-10T20:36:12.777Z"
---

## What this error means

`HTTP 529 overloaded_error: no retry after HTTP 529 overloaded_error; shouldRetry does not handle 529 like it handles 429 rate limit` is a Anthropic API failure pattern reported for developers trying to developer building multi-tenant app with mcp clients encounters http 529 overloaded error from backend proxy; needs automatic retry logic but sdk does not handle 529 unlike standard 429 rate limit handling. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reported at anthropics/anthropic-sdk-typescript#791 (closed Jul 11, 2025). User investigated private shouldRetry() method and confirmed 529 is excluded from built-in retry while 429 has proper retry-after handling. Builds multi-tenant app with MCP clients where load spikes cause temporary overload. High commercial value because enterprise customers running multi-tenant workloads are forced to implement custom retry logic for a paid API service that should handle this natively.

## Common causes

- Reported at anthropics/anthropic-sdk-typescript#791 (closed Jul 11, 2025). User investigated private shouldRetry() method and confirmed 529 is excluded from built-in retry while 429 has proper retry-after handling. Builds multi-tenant app with MCP clients where load spikes cause temporary overload. High commercial value because enterprise customers running multi-tenant workloads are forced to implement custom retry logic for a paid API service that should handle this natively.

## Quick fixes

1. Confirm the exact error signature matches `HTTP 529 overloaded_error: no retry after HTTP 529 overloaded_error; shouldRetry does not handle 529 like it handles 429 rate limit`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/anthropic-sdk-typescript/issues/791

Evidence note: Reported at anthropics/anthropic-sdk-typescript#791 (closed Jul 11, 2025). User investigated private shouldRetry() method and confirmed 529 is excluded from built-in retry while 429 has proper retry-after handling. Builds multi-tenant app with MCP clients where load spikes cause temporary overload. High commercial value because enterprise customers running multi-tenant workloads are forced to implement custom retry logic for a paid API service that should handle this natively.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `HTTP 529 overloaded_error: no retry after HTTP 529 overloaded_error; shouldRetry does not handle 529 like it handles 429 rate limit` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 529 overloaded_error: no retry after HTTP 529 overloaded_error; shouldRetry does not handle 529 like it handles 429 rate limit`.
